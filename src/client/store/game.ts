// Client game store (docs/spec/50-client.md): the ONLY caller of engine.step. Owns the live GameState, the
// pending decision and the legal actions; answers bot seats with the random bot after presentation idle
// (with a watchdog so a stuck decision can never leave the UI waiting); pushes every accepted step through
// the presentation director and the presented-seq cursor so results never show early.
import { create } from 'zustand'
import {
  createGame,
  legalActions,
  save as engineSave,
  step,
  type Action,
  type GameEvent,
  type GameState,
  type PendingDecision,
  type Rejection,
  type Seat,
  type SaveFile,
} from '@/engine'
import type { MissionData } from '@/data'
import { buildGameSetup, dataBundle, engineBundle, type SeatBuild } from '../game/adapter'
import { rejectionText } from '../game/labels'
import { RandomBot } from '../bot/randomBot'
import { clearAnims } from '../presentation/animStore'
import { enqueueBatch, resetDirector } from '../presentation/director'
import { clearFeed, pushToast } from '../presentation/feedStore'
import { waitForPresentationIdle } from '../presentation/idleStore'
import { isAnnouncementHolding } from '../presentation/announceStore'
import { pushSnapshot, resetPresentation, usePresentedStore } from '../presentation/presentedStore'
import { speedFactor, useSettings } from '../presentation/settings'
import type { SeatMode } from '../params'

export interface GameMeta {
  seed: string
  missionId: string
  layoutId: string
  /** the mission record from data (text, scoring); the engine's own pick is state.mission */
  mission: MissionData
  builds: Record<Seat, SeatBuild>
}

export interface NewGameOptions {
  builds: Record<Seat, SeatBuild>
  seats: Record<Seat, SeatMode>
  seed: string
  missionId: string
  layoutId: string
  mapId?: string | null
}

interface GameStore {
  state: GameState | null
  pending: PendingDecision | null
  legal: Action[] | null
  meta: GameMeta | null
  seats: Record<Seat, SeatMode>
  /** every event of the battle in order (end screen, tests); bounded */
  events: GameEvent[]
  rejection: { code: string; reason: string; nonce: number } | null
  newGame(opts: NewGameOptions): void
  dispatch(action: Action): Rejection | null
  /** answer the pending decision with the option whose id matches */
  choose(optionId: string): Rejection | null
  pass(): Rejection | null
  exportSave(): SaveFile | null
  reset(): void
}

const EVENT_LIMIT = 6000
const BOT_DELAY_MS = 250
const PRESENTATION_IDLE_TIMEOUT_MS = 3000
const NO_PROGRESS_MS = 5000
const WATCHDOG_POLL_MS = 1000

let generation = 0
let bots: Record<Seat, RandomBot> | null = null
let botTimer: ReturnType<typeof setTimeout> | null = null
let watchdog: ReturnType<typeof setInterval> | null = null
let watchId: string | null = null
let watchSince = 0
let rejectionNonce = 0

function sleep(ms: number): Promise<void> {
  return ms > 0 ? new Promise((r) => setTimeout(r, ms)) : Promise.resolve()
}

export const useGame = create<GameStore>((set, get) => {
  function apply(state: GameState, events: GameEvent[], pending: PendingDecision | null): void {
    const prevEvents = get().events
    const all = prevEvents.length + events.length > EVENT_LIMIT ? [...prevEvents.slice(-(EVENT_LIMIT / 2)), ...events] : [...prevEvents, ...events]
    set({ state, pending, legal: pending ? legalActions(state, pending) : [], events: all })
    pushSnapshot(state.seq, state)
    enqueueBatch({ seq: state.seq, events, state })
    scheduleBot()
  }

  function scheduleBot(): void {
    const { pending, seats, state } = get()
    if (!pending || !state || state.phase === 'ended' || seats[pending.seat] !== 'bot') return
    const id = pending.id
    const gen = generation
    if (botTimer) clearTimeout(botTimer)
    botTimer = setTimeout(() => {
      botTimer = null
      void runBot(id, gen)
    }, 0)
  }

  /** Answer the pending decision for a bot seat. Tries the bot, then every legal action, then pass. */
  function answerForBot(expectedId: string): void {
    const { state, pending } = get()
    if (!state || !pending || pending.id !== expectedId) return
    const candidates: Action[] = []
    try {
      candidates.push(bots![pending.seat].decide(state, pending))
    } catch (e) {
      console.warn('[bot] decide failed', e)
    }
    for (const a of legalActions(state, pending) ?? []) candidates.push(a)
    if (pending.canPass) candidates.push({ type: 'pass', seat: pending.seat, decisionId: pending.id, payload: {} })
    for (const a of candidates) {
      const r = step(state, a)
      if (!r.rejection) {
        apply(r.state, r.events, r.pending)
        return
      }
    }
    console.error(`[bot] no accepted answer for ${pending.kind}`)
  }

  async function runBot(expectedId: string, gen: number): Promise<void> {
    const backlog = Math.max(0, usePresentedStore.getState().latestSeq - usePresentedStore.getState().presentedSeq)
    await waitForPresentationIdle(PRESENTATION_IDLE_TIMEOUT_MS + backlog * 150)
    await sleep(Math.round(BOT_DELAY_MS * speedFactor(useSettings.getState().animSpeed)))
    if (gen !== generation) return
    answerForBot(expectedId)
  }

  function startWatchdog(): void {
    if (watchdog) return
    watchdog = setInterval(() => {
      const { pending, seats, state } = get()
      if (!pending || !state || state.phase === 'ended') {
        watchId = null
        return
      }
      if (pending.id !== watchId) {
        watchId = pending.id
        watchSince = Date.now()
        return
      }
      if (isAnnouncementHolding()) {
        watchSince = Date.now()
        return
      }
      if (seats[pending.seat] === 'bot' && Date.now() - watchSince >= NO_PROGRESS_MS) {
        console.warn(`[bot] watchdog answering ${pending.kind}`)
        watchSince = Date.now()
        answerForBot(pending.id)
      }
    }, WATCHDOG_POLL_MS)
  }

  return {
    state: null,
    pending: null,
    legal: null,
    meta: null,
    seats: { A: 'human', B: 'bot' },
    events: [],
    rejection: null,

    newGame(opts) {
      generation++
      if (botTimer) clearTimeout(botTimer)
      resetDirector()
      clearAnims()
      clearFeed()
      const b = dataBundle()
      const mission = b.missions[opts.missionId]
      const layout = b.layouts[opts.layoutId]
      if (!mission || !layout) throw new Error(`unknown mission/layout: ${opts.missionId} / ${opts.layoutId}`)
      const setup = buildGameSetup(b, opts.builds.A, opts.builds.B, { layoutId: layout.id, missionId: mission.id, mapId: opts.mapId })
      const r = createGame(setup, opts.seed, engineBundle())
      bots = { A: new RandomBot(`${opts.seed}:A`), B: new RandomBot(`${opts.seed}:B`) }
      set({
        state: null,
        pending: null,
        legal: null,
        events: [],
        rejection: null,
        seats: { ...opts.seats },
        meta: {
          seed: opts.seed,
          missionId: opts.missionId,
          layoutId: opts.layoutId,
          mission,
          builds: opts.builds,
        },
      })
      resetPresentation(r.state.seq, r.state)
      set({ state: r.state, pending: r.pending, legal: r.pending ? legalActions(r.state, r.pending) : [], events: [...r.events] })
      enqueueBatch({ seq: r.state.seq, events: r.events, state: r.state })
      startWatchdog()
      scheduleBot()
    },

    dispatch(action) {
      const state = get().state
      if (!state) return null
      const r = step(state, action)
      if (r.rejection) {
        rejectionNonce++
        set({ rejection: { code: r.rejection.code, reason: r.rejection.reason, nonce: rejectionNonce } })
        pushToast(rejectionText(r.rejection), r.rejection.code === 'E_TODO' ? 'warn' : 'error')
        return r.rejection
      }
      apply(r.state, r.events, r.pending)
      return null
    },

    choose(optionId) {
      const { pending, dispatch } = get()
      if (!pending) return null
      if (optionId === 'pass') return dispatch({ type: 'pass', seat: pending.seat, decisionId: pending.id, payload: {} })
      const opt = pending.options?.find((o) => o.id === optionId)
      if (!opt) return { code: 'E_NOT_AN_OPTION', reason: `no option ${optionId}` }
      return dispatch(opt.action)
    },

    pass() {
      return get().choose('pass')
    },

    exportSave() {
      const s = get().state
      return s ? engineSave(s) : null
    },

    reset() {
      generation++
      if (botTimer) clearTimeout(botTimer)
      resetDirector()
      clearAnims()
      clearFeed()
      resetPresentation(-1, null)
      set({ state: null, pending: null, legal: null, meta: null, events: [], rejection: null })
    },
  }
})

/** Seat whose decision is pending and who is a human (the UI may act for it). */
export function humanToAct(): Seat | null {
  const { pending, seats, state } = useGame.getState()
  return pending && state?.phase !== 'ended' && seats[pending.seat] === 'human' ? pending.seat : null
}
