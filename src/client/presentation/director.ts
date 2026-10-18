// Presentation director: turns each accepted step's events into timed beats (feed lines, dice log, dice tray,
// banners, move tweens, tracers, impact flashes, wound bars, control rings, toasts, sounds) and only then
// advances the presented-seq cursor, so no result shows before it is played. 'instant' speed skips every pause,
// banner, effect and sound. Batches queue FIFO; the idle flag is true when empty.
import type { GameEvent, GameState, Operative, Seat } from '@/engine'
import { audio } from '../audio/instance'
import { playEventSounds, type SoundContext } from '../audio/eventSounds'
import { trayAttack, trayBegin, trayClear, trayDefence, trayFightBlock, trayNote, trayReroll, trayShootBlock, trayShootStrikes, trayStrike } from '../dice/trayStore'
import { describeEvent, humanize, opName, SEAT_NAME, weaponName } from '../game/labels'
import { flavourOf, isMeleeFlavour, type WeaponFlavour } from '../weaponFlavour'
import { endMoveAnim, requestRepaint, startMoveAnim } from './animStore'
import { holdAnnouncement, clearAnnouncement } from './announceStore'
import { pushDice, pushFeed, pushToast } from './feedStore'
import { clearFx, clearOverrides, setControlOverride, setWoundOverride, spawnFx } from './fxStore'
import { setPresentationIdle } from './idleStore'
import { catchUpPresented, setPresentedSeq } from './presentedStore'
import { speedFactor, useSettings } from './settings'

export interface Batch {
  seq: number
  events: GameEvent[]
  /** state after the step: used for operative names and positions */
  state: GameState
}

const queue: Batch[] = []
let running = false
let generation = 0

/** The seat whose point of view victory / defeat is told from. The store sets it when a game starts. */
let perspective: Seat | null = null
export function setDirectorPerspective(seat: Seat | null): void {
  perspective = seat
}

/** What the attack in progress is (the same dice events serve Shoot and Fight). */
let mode: SoundContext['mode'] = null
let fight: SoundContext['fight'] = null

function sleep(ms: number): Promise<void> {
  return ms > 0 ? new Promise((r) => setTimeout(r, ms)) : Promise.resolve()
}

/** DiceRolled events of the attack sequences are shown by the dice tray (through Attack/DefenceDiceRolled), not as roll banners. */
const TRAY_PURPOSE = /^(shoot|fight)\.(attack|defence)(\.|$)/

/** Base pause (ms at normal speed) per event type; the pause is a beat in which the event's effects play. */
function beatMs(ev: GameEvent): number {
  switch (ev.type) {
    case 'DiceRolled':
      return TRAY_PURPOSE.test(ev.purpose) ? 0 : 900
    case 'AttackDiceRolled':
    case 'DefenceDiceRolled':
      return 750
    case 'DiceRerolled':
      return 650
    case 'DamageInflicted':
      return 600
    case 'OperativeIncapacitated':
      return 800
    case 'DiceBlocked':
      return 550
    case 'Struck':
    case 'Blocked':
      return 480
    case 'FightStarted':
      return 450
    case 'VpScored':
      return 550
    case 'KillGradeChanged':
      return 350
    case 'TargetSelected':
      return 420
    case 'CoverSaveRetained':
    case 'AttackRetained':
      return 260
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
    case 'PloyUsed':
      return 240
    case 'OperativeExpended':
      return 160
    case 'ControlChanged':
      return 420
    case 'MarkerPickedUp':
    case 'MarkerPlaced':
    case 'MissionActionPerformed':
      return 300
    default:
      return 0
  }
}

// ---------------------------------------------------------------- effects

const FLAVOUR_COLOR: Record<WeaponFlavour, string> = {
  bolter: '#ffe08a',
  slugga: '#ffb347',
  flamer: '#ff8a2a',
  plasma: '#7fe0ff',
  rokkit: '#ffc46b',
  chain: '#ffffff',
  crush: '#ffd9a0',
  blade: '#e8f4ff',
  bite: '#ff9a8a',
}

const SEAT_RING: Record<Seat, string> = { A: '#4fb0ff', B: '#ff6a4f' }

type P3 = [number, number, number]
const chest = (op: Operative): P3 => [op.pos.x, op.pos.y + op.height * 0.55, op.pos.z]
const head = (op: Operative): P3 => [op.pos.x, op.pos.y + op.height * 0.8, op.pos.z]

/** Tracer travel time at normal speed, by flavour (matches Vfx.tsx). */
function travelMs(flavour: WeaponFlavour): number {
  return flavour === 'rokkit' ? 480 : flavour === 'plasma' ? 340 : flavour === 'flamer' ? 520 : flavour === 'slugga' ? 330 : 340
}

function lookup(state: GameState, id: string | null | undefined): Operative | null {
  return (id && state.operatives?.[id]) || null
}

function soundContext(state: GameState): SoundContext {
  return { state, perspective, mode, fight }
}

// ---------------------------------------------------------------- one event

/** Events whose feed line is a dice batch (attack, defence, plain rolls, re-rolls, blocks): the feed groups consecutive ones. */
function isDiceLine(ev: GameEvent): boolean {
  return ev.type === 'DiceRolled' || ev.type === 'AttackDiceRolled' || ev.type === 'DefenceDiceRolled' || ev.type === 'DiceRerolled' || ev.type === 'DiceBlocked'
}

async function playEvent(ev: GameEvent, state: GameState, gen: number): Promise<void> {
  const f = speedFactor(useSettings.getState().animSpeed)
  let text = describeEvent(ev, state)
  const wait = (ms: number) => sleep(Math.round(ms * f))
  const fx = f > 0
  if (fx) playEventSounds((id, o) => audio.play(id, o), [ev], soundContext(state))

  switch (ev.type) {
    case 'DiceRolled': {
      if (TRAY_PURPOSE.test(ev.purpose)) {
        text = null
        break
      }
      pushDice(ev.seq, ev.seat, ev.purpose, ev.dice)
      if (fx) {
        await holdAnnouncement({
          title: `${ev.seat ? SEAT_NAME[ev.seat] : 'Roll'}: ${humanize(ev.purpose)}`,
          subtitle: '',
          seat: ev.seat,
          dice: ev.dice,
          durationMs: Math.round(beatMs(ev) * f),
        })
      }
      break
    }
    case 'ShootStarted':
      mode = 'shoot'
      fight = null
      break
    case 'TargetSelected': {
      mode = 'shoot'
      const shooter = lookup(state, ev.operativeId)
      const target = lookup(state, ev.targetId)
      trayBegin('shoot', `${opName(state, ev.operativeId)} shoots ${opName(state, ev.targetId)} with ${weaponName(state, ev.weaponId)}`)
      if (fx) {
        if (shooter && target) spawnFx({ kind: 'ring', to: [target.pos.x, target.pos.y, target.pos.z], color: '#ff6a5f', dur: 420, size: 1.4 })
      }
      await wait(beatMs(ev))
      break
    }
    case 'AttackDiceRolled': {
      const who = lookup(state, ev.operativeId)
      const target = lookup(state, ev.targetId)
      pushDice(ev.seq, ev.seat, 'attack', ev.dice, ev.kinds)
      if (fx && mode !== 'fight' && who && target && ev.weaponId) {
        const fl = flavourOf(ev.weaponId)
        spawnFx({ kind: 'tracer', flavour: fl, from: head(who), to: chest(target), color: FLAVOUR_COLOR[fl], dur: travelMs(fl) })
        await wait(travelMs(fl) * 0.85)
      }
      trayAttack(
        { operativeId: ev.operativeId, seat: ev.seat, label: opName(state, ev.operativeId), need: ev.need, lethal: ev.lethal, dice: ev.dice, kinds: ev.kinds },
        mode === 'fight' ? 'fight' : 'shoot',
        mode === 'fight' ? `${opName(state, ev.operativeId)} fights` : 'Shoot',
      )
      await wait(beatMs(ev))
      break
    }
    case 'DefenceDiceRolled': {
      pushDice(ev.seq, ev.seat, 'defence', ev.dice, ev.kinds)
      trayDefence({ operativeId: ev.targetId, seat: ev.seat, label: opName(state, ev.targetId), need: ev.need, lethal: null, dice: ev.dice, kinds: ev.kinds })
      await wait(beatMs(ev))
      break
    }
    case 'DiceRerolled':
      trayReroll(ev.side, ev.indexes, ev.after)
      trayNote(`${opName(state, ev.operativeId)} re-rolls ${ev.indexes.length} (${ev.source === 'command' ? 'Command Re-roll' : humanize(ev.source)})`)
      await wait(beatMs(ev))
      break
    case 'CoverSaveRetained':
      trayNote(`${opName(state, ev.targetId)} keeps ${ev.normal + ev.crit} cover save${ev.normal + ev.crit === 1 ? '' : 's'} without rolling`)
      await wait(beatMs(ev))
      break
    case 'DiceBlocked':
      trayShootBlock(ev.blockedNormal, ev.blockedCrit)
      trayNote(ev.unblockedNormal + ev.unblockedCrit === 0 ? 'Everything is blocked.' : `${ev.unblockedNormal} normal and ${ev.unblockedCrit} critical get through.`)
      await wait(beatMs(ev))
      break
    case 'DamageInflicted': {
      const target = lookup(state, ev.operativeId)
      setWoundOverride(ev.operativeId, ev.wounds)
      if (mode === 'shoot') trayShootStrikes()
      if (fx) {
        if (target) {
          const flavour: WeaponFlavour = fight ? flavourOf(fight.attackerWeapon ?? '') : 'bolter'
          spawnFx({ kind: 'impact', to: chest(target), color: mode === 'shoot' ? '#ffe08a' : FLAVOUR_COLOR[flavour], dur: 360, size: 0.7 + Math.min(1, ev.amount / 5) })
          spawnFx({ kind: 'text', to: [target.pos.x, target.pos.y + target.height + 0.4, target.pos.z], color: '#ff6a5f', text: `-${ev.amount}`, dur: 1100 })
        }
        await wait(beatMs(ev))
      }
      break
    }
    case 'OperativeIncapacitated': {
      const target = lookup(state, ev.operativeId)
      setWoundOverride(ev.operativeId, 0)
      if (fx) {
        if (target) {
          spawnFx({ kind: 'impact', to: chest(target), color: '#ff3b2f', dur: 560, size: 1.7 })
          spawnFx({ kind: 'ring', to: [target.pos.x, target.pos.y, target.pos.z], color: '#ff3b2f', dur: 700, size: 2.2 })
        }
        pushToast(`${opName(state, ev.operativeId)} is down`, 'info', 2600)
        await wait(beatMs(ev))
      }
      break
    }
    case 'FightStarted': {
      mode = 'fight'
      fight = { attackerId: ev.operativeId, attackerWeapon: ev.attackerWeapon, defenderId: ev.targetId, defenderWeapon: ev.defenderWeapon }
      trayBegin('fight', `${opName(state, ev.operativeId)} fights ${opName(state, ev.targetId)}`)
      if (fx) {
        const a = lookup(state, ev.operativeId)
        const d = lookup(state, ev.targetId)
        if (a && d) spawnFx({ kind: 'ring', to: [d.pos.x, d.pos.y, d.pos.z], color: '#ffd45a', dur: 500, size: 1.6 })
        await wait(beatMs(ev))
      }
      break
    }
    case 'Struck': {
      const target = lookup(state, ev.targetId)
      trayStrike(ev.operativeId, ev.die)
      if (fx) {
        const w = fight ? (ev.operativeId === fight.attackerId ? fight.attackerWeapon : fight.defenderWeapon) : null
        const fl = flavourOf(w ?? '')
        if (target) {
          spawnFx({ kind: 'impact', to: chest(target), color: FLAVOUR_COLOR[fl], dur: 320, size: isMeleeFlavour(fl) && fl === 'crush' ? 1.2 : 0.8 })
          if (fl === 'crush') spawnFx({ kind: 'ring', to: [target.pos.x, target.pos.y, target.pos.z], color: '#ffd9a0', dur: 420, size: 1.3 })
        }
        await wait(beatMs(ev))
      }
      break
    }
    case 'Blocked':
      trayFightBlock(ev.operativeId, ev.die, ev.against)
      if (fx) {
        const blocker = lookup(state, ev.operativeId)
        if (blocker) spawnFx({ kind: 'impact', to: chest(blocker), color: '#9fd4ff', dur: 300, size: 0.8 })
        await wait(beatMs(ev))
      }
      break
    case 'ShootEnded':
    case 'FightEnded':
      mode = null
      fight = null
      break
    case 'OperativeActivated':
      // the last attack stays in the tray until the next one starts
      await wait(beatMs(ev))
      break
    case 'TurningPointStarted':
      trayClear()
      if (fx) await holdAnnouncement({ title: `Turning point ${ev.number}`, subtitle: '', seat: null, durationMs: Math.round(1000 * f) })
      break
    case 'PhaseStarted':
      if (fx && ev.name !== 'setup') await holdAnnouncement({ title: `${humanize(ev.name)} phase`, subtitle: '', seat: null, durationMs: Math.round(1000 * f) })
      break
    case 'VpScored':
      if (fx) {
        pushToast(`${ev.seat ? SEAT_NAME[ev.seat] : 'A seat'} scores ${ev.amount} VP: ${humanize(ev.ruleId)}`, 'info', 3200)
        await wait(beatMs(ev))
      }
      break
    case 'KillGradeChanged':
      if (fx) {
        pushToast(`${ev.seat ? SEAT_NAME[ev.seat] : 'A seat'} reaches kill grade ${ev.grade} (${ev.kills} down)`, 'info', 3200)
        await wait(beatMs(ev))
      }
      break
    case 'ControlChanged': {
      setControlOverride(ev.markerId, ev.controller)
      const m = state.markers?.find((k) => k.id === ev.markerId)
      if (fx) {
        if (m) spawnFx({ kind: 'ring', to: [m.pos.x, 0.1, m.pos.z], color: ev.controller ? SEAT_RING[ev.controller] : '#e8e8f2', dur: 800, size: 3 })
        await wait(beatMs(ev))
      }
      break
    }
    case 'OperativeMoved': {
      const dur = Math.round(Math.min(1800, 300 + 160 * Math.max(1, ev.cost)) * f)
      if (dur > 0) {
        startMoveAnim(ev.operativeId, ev.segments, dur)
        await sleep(dur + 40)
      }
      break
    }
    default:
      await wait(beatMs(ev))
  }
  if (gen !== generation) return
  if (text) pushFeed(ev.seq, ev.seat, text, isDiceLine(ev))
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
      // the display state now has this step's wounds and control: the beat overrides are no longer needed
      clearOverrides()
      // the tween ends on the new position, so releasing it after the cursor moves cannot flash the old one
      for (const ev of b.events) if (ev.type === 'OperativeMoved') endMoveAnim(ev.operativeId)
      requestRepaint()
    }
  } finally {
    if (gen === generation) {
      running = false
      if (queue.length === 0) {
        catchUpPresented()
        clearOverrides()
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
  mode = null
  fight = null
  clearAnnouncement()
  clearFx()
  trayClear()
  setPresentationIdle(true)
}
