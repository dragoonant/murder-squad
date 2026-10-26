// Adjust Doctrine (and other "quick" before/after-action ploys, game/quickPloys.ts): a human's optional ploy window passes
// itself, the action bar shows a button with the engine's CP cost, and pressing it lets the NEXT window open. Bots are untouched.
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createGame, step, type Action, type GameState, type PendingDecision, type Seat } from '@/engine'
import { buildScenario } from '@/client/dev/scenarios'
import { buildGameSetup, dataBundle, engineBundle } from '@/client/game/adapter'
import { fullBuild, resolveLayout, resolveMission, resolveTeam } from '@/client/game/defaults'
import { quickPloyButtons, quickWindowVerdict } from '@/client/game/quickPloys'
import { useFeedStore } from '@/client/presentation/feedStore'
import { useSettings } from '@/client/presentation/settings'
import { useGame } from '@/client/store/game'
import { useUi } from '@/client/ui/uiStore'

const ADJUST = 'aod.p.adjust-doctrine'

/** shoot-cover with Combat Doctrine already used this turning point (so Adjust Doctrine is usable) and CP to pay for it. */
function prepared(opts: { used?: boolean; cp?: number } = {}): (s: GameState) => GameState {
  return (base) => {
    const s = buildScenario('shoot-cover', base)
    if (opts.used !== false) {
      s.ledger.A.tp.push('aod.p.combat-doctrine')
      s.config.A.doctrine = 'tactical'
    }
    s.players.A.cp = opts.cp ?? 6
    return s
  }
}

function start(seats: Record<Seat, 'human' | 'bot'>, prepare: (s: GameState) => GameState, seed = 'doctrine-1'): void {
  const b = dataBundle()
  useGame.getState().newGame({
    builds: { A: fullBuild(b, resolveTeam(b, 'aod')), B: fullBuild(b, resolveTeam(b, 'kom')) },
    seats,
    seed,
    missionId: resolveMission(b, 'secure').id,
    layoutId: resolveLayout(b, '01').id,
    mapId: 'prelim-1',
    prepare,
  })
}

const gunner = (s: GameState) => Object.values(s.operatives).find((o) => o.seat === 'A' && o.datacardId === 'aod.intercessor-gunner')!

/** Activate the gunner, Engage, and stop at the action bar. */
function toActionBar(): PendingDecision {
  const g = useGame.getState()
  const id = gunner(g.state!).id
  const activate = g.pending!.options!.find((o) => (o.action.payload as { operativeId?: string }).operativeId === id && !(o.action.payload as { counteract?: boolean }).counteract)!
  expect(g.choose(activate.id)).toBeNull()
  expect(useGame.getState().choose('engage')).toBeNull()
  expect(useGame.getState().pending!.kind).toBe('firefight.action')
  return useGame.getState().pending!
}

/** The same Shoot declaration on a bare engine state (no store), to prove the window really is there to be skipped. */
function engineShoot(s: GameState): GameState {
  let st = s
  const pick = (id: string) => {
    const o = st.pending!.options!.find((x) => x.id === id || (x.action.payload as { operativeId?: string }).operativeId === id)!
    const r = step(st, o.action)
    expect(r.rejection).toBeFalsy()
    st = r.state
  }
  pick(gunner(st).id)
  pick('engage')
  pick('shoot')
  return st
}

describe('Adjust Doctrine without the prompt', () => {
  beforeEach(() => {
    useSettings.getState().setAnimSpeed('instant')
    useGame.getState().reset()
    useUi.setState({ armedPloy: null })
    useFeedStore.setState({ feed: [], toasts: [] })
  })
  afterEach(() => useGame.getState().reset())

  it('the engine really opens an Adjust Doctrine window after Shoot is declared (the fixture is honest)', () => {
    const b = dataBundle()
    const setup = buildGameSetup(b, fullBuild(b, resolveTeam(b, 'aod')), fullBuild(b, resolveTeam(b, 'kom')), { layoutId: resolveLayout(b, '01').id, missionId: resolveMission(b, 'secure').id, mapId: 'prelim-1', auto: true })
    const s = engineShoot(prepared()(createGame(setup, 'doctrine-1', engineBundle()).state))
    expect(s.pending?.kind).toBe('ploy.firefight')
    expect(s.pending!.options!.map((o) => o.id)).toEqual(expect.arrayContaining([`${ADJUST}:assault`, `${ADJUST}:devastator`]))
    expect(quickWindowVerdict(s.pending!, null)).toBe('pass')
  })

  it('a human seat: the after-action window passes itself through the step path and play carries on', () => {
    start({ A: 'human', B: 'human' }, prepared())
    toActionBar()
    expect(useGame.getState().choose('shoot')).toBeNull()
    const { pending, state } = useGame.getState()
    expect(pending!.kind).not.toBe('ploy.firefight')
    expect(['shoot.weapon', 'shoot.target']).toContain(pending!.kind)
    // the pass is in the log like any other answer, so saves and replays stay exact
    expect(state!.log.some((a: Action) => a.type === 'pass' && a.seat === 'A')).toBe(true)
    expect(state!.players.A.cp).toBe(6)
    // one short feed line, not one per window
    expect(useFeedStore.getState().feed.filter((f) => f.text.includes('Adjust Doctrine')).length).toBe(1)
    expect(useFeedStore.getState().toasts.length).toBe(0)
  })

  it('a bot seat is never auto-passed: its window stays open for its decider', () => {
    start({ A: 'human', B: 'human' }, prepared())
    toActionBar()
    // the seat is a bot from here on: the same declaration must leave the ploy window pending for the bot path
    useGame.setState({ seats: { A: 'bot', B: 'human' } })
    expect(useGame.getState().dispatch(useGame.getState().pending!.options!.find((o) => o.id === 'shoot')!.action)).toBeNull()
    const p = useGame.getState().pending!
    expect(p.kind).toBe('ploy.firefight')
    expect(p.seat).toBe('A')
    expect(p.options!.some((o) => o.id.startsWith(ADJUST))).toBe(true)
  })

  it('the action bar offers the ploy with the engine cost, and arming it lets the next window open (once)', () => {
    start({ A: 'human', B: 'human' }, prepared())
    const bar = toActionBar()
    const buttons = quickPloyButtons(useGame.getState().state!, bar)
    expect(buttons).toHaveLength(1)
    expect(buttons[0]).toMatchObject({ ployId: ADJUST, name: 'Adjust Doctrine' })
    expect(buttons[0]!.cost).toBeGreaterThanOrEqual(0)
    useUi.setState({ armedPloy: { ployId: ADJUST, seat: 'A' } })
    expect(useGame.getState().choose('shoot')).toBeNull()
    expect(useGame.getState().pending!.kind).toBe('ploy.firefight')
    expect(useUi.getState().armedPloy).toBeNull() // one-shot: spent by the window it opened
    // using it is an ordinary answer; the cost is what the button said
    const cp = useGame.getState().state!.players.A.cp
    expect(useGame.getState().choose(`${ADJUST}:assault`)).toBeNull()
    expect(useGame.getState().state!.config.A.doctrine).toBe('assault')
    expect(useGame.getState().state!.players.A.cp).toBe(cp - buttons[0]!.cost)
  })

  it('no button when the engine says the ploy cannot be used (Combat Doctrine not used, or no CP)', () => {
    start({ A: 'human', B: 'human' }, prepared({ used: false }))
    expect(quickPloyButtons(useGame.getState().state!, toActionBar())).toEqual([])
    useGame.getState().reset()
    start({ A: 'human', B: 'human' }, prepared({ cp: 0 }), 'doctrine-2')
    const bar = toActionBar()
    const state = useGame.getState().state!
    // with 0 CP only a free (Heroic Leader) use may remain; whatever shows must be what the engine would offer
    for (const b of quickPloyButtons(state, bar)) expect(b.cost).toBe(0)
  })

  it('windows that offer anything else, cannot be passed, or are not quick windows are left alone', () => {
    const mk = (over: Partial<PendingDecision>, ployIds: string[]): PendingDecision => ({
      id: 'd1',
      seat: 'A',
      kind: 'ploy.firefight',
      window: 'firefight.actionEnded',
      context: {},
      canPass: true,
      options: ployIds.map((ployId) => ({ id: `${ployId}:x`, labelKey: 'p', type: 'ploy.firefight', action: { type: 'ploy.firefight', seat: 'A', decisionId: 'd1', payload: { ployId } }, data: {} })),
      ...over,
    })
    expect(quickWindowVerdict(mk({}, [ADJUST]), null)).toBe('pass')
    expect(quickWindowVerdict(mk({}, [ADJUST, 'aod.e.auspex']), null)).toBeNull()
    expect(quickWindowVerdict(mk({ canPass: false }, [ADJUST]), null)).toBeNull()
    expect(quickWindowVerdict(mk({ window: 'firefight.activationStart' }, [ADJUST]), null)).toBeNull()
    expect(quickWindowVerdict(mk({ kind: 'strategy.gambit' }, [ADJUST]), null)).toBeNull()
    expect(quickWindowVerdict(mk({}, [ADJUST]), { ployId: ADJUST, seat: 'A' })).toBe('armed')
    expect(quickWindowVerdict(mk({}, [ADJUST]), { ployId: ADJUST, seat: 'B' })).toBe('pass')
  })
})
