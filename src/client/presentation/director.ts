// Presentation director: turns each accepted step's events into timed beats (feed lines, dice log, banners,
// move tweens) and only then advances the presented-seq cursor, so no result shows before it is played.
// 'instant' speed skips every pause (and the banners). Batches queue FIFO; the idle flag is true when empty.
import type { GameEvent, GameState } from '@/engine'
import { describeEvent, humanize, SEAT_NAME } from '../game/labels'
import { endMoveAnim, requestRepaint, startMoveAnim } from './animStore'
import { holdAnnouncement, clearAnnouncement } from './announceStore'
import { pushDice, pushFeed } from './feedStore'
import { setPresentationIdle } from './idleStore'
import { catchUpPresented, setPresentedSeq } from './presentedStore'
import { speedFactor, useSettings } from './settings'

export interface Batch {
  seq: number
  events: GameEvent[]
  /** state after the step: used for operative names */
  state: GameState
}

const queue: Batch[] = []
let running = false
let generation = 0

function sleep(ms: number): Promise<void> {
  return ms > 0 ? new Promise((r) => setTimeout(r, ms)) : Promise.resolve()
}

/** Base pause (ms at normal speed) and beat kind per event type. */
function beatMs(ev: GameEvent): number {
  switch (ev.type) {
    case 'DiceRolled':
    case 'AttackDiceRolled':
    case 'DefenceDiceRolled':
      return 900
    case 'DamageInflicted':
    case 'OperativeIncapacitated':
      return 550
    case 'DiceBlocked':
    case 'VpScored':
    case 'TargetSelected':
      return 400
    case 'InitiativeDecided':
      return 600
    case 'DropZoneChosen':
    case 'OperativeDeployed':
      return 260
    case 'OperativeActivated':
    case 'OrderSet':
      return 220
    case 'ActionDeclared':
      return 200
    case 'CpChanged':
    case 'GambitUsed':
    case 'GambitPassed':
      return 240
    case 'OperativeExpended':
      return 160
    case 'ControlChanged':
      return 300
    case 'ActionRejected':
      return 0
    default:
      return 0
  }
}

async function playEvent(ev: GameEvent, state: GameState, gen: number): Promise<void> {
  const f = speedFactor(useSettings.getState().animSpeed)
  const text = describeEvent(ev, state)
  if (ev.type === 'DiceRolled') {
    pushDice(ev.seq, ev.seat, ev.purpose, ev.dice)
    if (f > 0) {
      await holdAnnouncement({
        title: `${ev.seat ? SEAT_NAME[ev.seat] : 'Roll'}: ${humanize(ev.purpose)}`,
        subtitle: '',
        seat: ev.seat,
        dice: ev.dice,
        durationMs: Math.round(beatMs(ev) * f),
      })
    }
  } else if (ev.type === 'AttackDiceRolled' || ev.type === 'DefenceDiceRolled') {
    const who = ev.type === 'AttackDiceRolled' ? 'Attack dice' : 'Defence dice'
    pushDice(ev.seq, ev.seat, ev.type === 'AttackDiceRolled' ? 'attack' : 'defence', ev.dice, ev.kinds)
    if (f > 0) {
      await holdAnnouncement({ title: `${who} (need ${ev.need}+)`, subtitle: '', seat: ev.seat, dice: ev.dice, kinds: ev.kinds, durationMs: Math.round(beatMs(ev) * f) })
    }
  } else if (ev.type === 'TurningPointStarted' || ev.type === 'PhaseStarted') {
    if (f > 0 && !(ev.type === 'PhaseStarted' && ev.name === 'setup')) {
      const title = ev.type === 'TurningPointStarted' ? `Turning point ${ev.number}` : `${humanize(ev.name)} phase`
      await holdAnnouncement({ title, subtitle: '', seat: null, durationMs: Math.round(1000 * f) })
    }
  } else if (ev.type === 'OperativeMoved') {
    const dur = Math.round(Math.min(1800, 300 + 160 * Math.max(1, ev.cost)) * f)
    if (dur > 0) {
      startMoveAnim(ev.operativeId, ev.segments, dur)
      await sleep(dur + 40)
    }
  } else {
    await sleep(Math.round(beatMs(ev) * f))
  }
  if (gen !== generation) return
  if (text) pushFeed(ev.seq, ev.seat, text)
  requestRepaint()
}

async function playBatch(b: Batch, gen: number): Promise<void> {
  for (const ev of b.events) {
    if (gen !== generation) return
    // Move events keep the old position on screen while they play; every other event is shown as it plays.
    await playEvent(ev, b.state, gen)
  }
}

async function run(): Promise<void> {
  if (running) return
  running = true
  const gen = generation
  try {
    while (queue.length > 0 && gen === generation) {
      const b = queue.shift()!
      await playBatch(b, gen)
      if (gen !== generation) break
      setPresentedSeq(b.seq)
      // the tween ends on the new position, so releasing it after the cursor moves cannot flash the old one
      for (const ev of b.events) if (ev.type === 'OperativeMoved') endMoveAnim(ev.operativeId)
      requestRepaint()
    }
  } finally {
    if (gen === generation) {
      running = false
      if (queue.length === 0) {
        catchUpPresented()
        setPresentationIdle(true)
      } else void run()
    }
  }
}

/** Queue one step's events. The store calls this once per accepted action (and once for createGame). */
export function enqueueBatch(batch: Batch): void {
  queue.push(batch)
  setPresentationIdle(false)
  void run()
}

/** New game / abandon: drop everything queued and let the running loop stop. */
export function resetDirector(): void {
  generation++
  queue.length = 0
  running = false
  clearAnnouncement()
  setPresentationIdle(true)
}
