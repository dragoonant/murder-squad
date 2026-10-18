// Value of the unique actions the M9 teams bring (Markerlight, Signal, Medikit, Reanimate, Flail, Soulsight...), in the
// planner's currency (wounds of expected damage). Each is a cheap heuristic over the view: the engine decides legality
// (the offers come from `abilityOffers`), this only says how much an offered action is worth next to Shoot or Fight, so
// the planner will spend an AP on it when it pays off. Unknown abilities are worth nothing and are never planned.
import type { GameState, Operative } from '@/engine'
import type { AbilityOffer } from '@/engine/abilities'
import { bodyOf, visible } from '@/engine/los'
import { distanceBetween } from '@/engine/measure'
import { enemiesOf, friendsOf } from '@/engine/state'
import { tokenCount } from '@/engine/tokens'
import type { AiCtx } from './tiers'

const ML = 'pf.markerlight'
const POISON = 'pm.poison'
const SOULSIGHT = 'wyr.soulsight'

const hasRanged = (v: GameState, o: Operative): boolean => o.weapons.some((w) => v.data.weapons[w]?.type === 'ranged')
const wounded = (o: Operative): number => Math.max(0, o.maxWounds - o.wounds)

/** Friendly ranged operatives (not `op`) that stand a chance to shoot `target` this turning point. */
function shootersFor(v: GameState, op: Operative, target: Operative): number {
  let n = 0
  for (const f of friendsOf(v, op)) {
    if (!f.ready || !hasRanged(v, f)) continue
    if (distanceBetween(bodyOf(f), bodyOf(target)) > 18) continue
    if (visible(v, bodyOf(f), bodyOf(target))) n++
  }
  return n
}

const MARKERLIGHT_STEP = [1, 0.8, 0.6, 0.45, 0]

function value(ctx: AiCtx, v: GameState, op: Operative, offer: AbilityOffer): number {
  const id = offer.abilityId
  const target = typeof offer.params.targetId === 'string' ? v.operatives[offer.params.targetId] : undefined
  switch (id) {
    // ---- Pathfinders
    case 'pf.a.markerlight':
    case 'pf.a.markerlight-shasla': {
      if (!target || target.seat === op.seat) return 0
      const have = tokenCount(v, target.id, ML, op.seat)
      const gain = offer.params.param === 'himl' ? 1.6 : 1
      const own = hasRanged(v, op) ? 0.35 : 0
      return (0.45 + 0.3 * shootersFor(v, op, target) + own) * (MARKERLIGHT_STEP[Math.min(4, have)] ?? 0) * gain
    }
    case 'pf.a.signal':
      return target && target.seat === op.seat && target.ready ? 1.2 : 0
    case 'pf.a.system-jam':
      return target && target.seat !== op.seat ? (target.ready ? 1.1 : 0.2) : 0
    case 'pf.a.medikit':
      return target && target.seat === op.seat ? Math.min(wounded(target), 4) * 0.6 : 0
    case 'pf.a.pulse-accelerator': {
      const near = friendsOf(v, op).filter((f) => f.ready && distanceBetween(bodyOf(f), bodyOf(op)) <= 3.5).length
      return near > 0 ? 0.5 + 0.3 * near : 0
    }
    case 'pf.a.photon-grenade':
      return target && target.seat !== op.seat && target.ready ? 0.6 : 0
    case 'pf.a.remote-pilot':
      // the drone's free action may not Shoot and moves 2 inches at most: not worth the controller's AP
      return 0
    // ---- Hierotek Circle
    case 'hie.a.reanimate':
      return 3
    case 'hie.a.accelerate':
      return target && target.seat === op.seat && target.ready ? 1.3 : 0
    case 'hie.a.canoptek-repair':
      return target && target.seat === op.seat ? Math.min(wounded(target), 6) * 0.5 : 0
    case 'hie.a.reinforce-metal':
    case 'hie.a.chronometron':
    case 'hie.a.augment-weapon':
      return target && target.seat === op.seat && target.ready ? 0.9 : 0
    case 'hie.a.vision-of-madness':
      return target && target.seat !== op.seat ? (target.ready ? 1.1 : 0.2) : 0
    case 'hie.a.timesplinter':
      return target && target.seat === op.seat && !target.ready ? 1.1 : 0
    case 'hie.a.interstitial-command':
    case 'hie.a.interstitial-command-despotek':
      return target && target.seat === op.seat && target.ready ? 1.6 : 0
    case 'hie.a.nightmare-shroud':
      return enemiesOf(v, op).some((e) => distanceBetween(bodyOf(e), bodyOf(op)) <= 8) ? 0.8 : 0
    case 'hie.a.nanomine':
    case 'hie.a.harbinger-of-despair': {
      // a marker placed where enemies will pass: only worth it if no marker of the kind stands yet
      const kind = id === 'hie.a.nanomine' ? 'hie.nanomine' : 'hie.despair'
      return v.markers.some((m) => m.equipmentId === kind && m.owner === op.seat) ? 0 : 0.7
    }
    // ---- Plague Marines
    case 'pm.a.flail': {
      let total = 0
      for (const o of Object.values(v.operatives)) {
        if (o.id === op.id || o.status !== 'active') continue
        if (distanceBetween(bodyOf(op), bodyOf(o)) > 2 || !visible(v, bodyOf(op), bodyOf(o))) continue
        const dmg = Math.min(4, o.wounds)
        total += o.seat === op.seat ? -dmg * 1.2 : dmg + (tokenCount(v, o.id, POISON, op.seat) === 0 ? 0.4 : 0)
      }
      return Math.max(0, total) * 0.9
    }
    case 'pm.a.poisonous-miasma': {
      if (!target || target.seat === op.seat) return 0
      return tokenCount(v, target.id, POISON, op.seat) > 0 ? 1.5 : 1.1
    }
    case 'pm.a.putrescent-vitality':
      return target && target.seat === op.seat ? Math.min(wounded(target), 7) * 0.5 : 0
    // ---- Wyrmblade
    case 'wyr.a.target-vulnerability':
      return enemiesOf(v, op).some((e) => visible(v, bodyOf(op), bodyOf(e))) ? 0.7 : 0
    case 'wyr.a.familiars-soulsight-sniper':
    case 'wyr.a.familiars-soulsight-talon':
      return target && target.seat !== op.seat && tokenCount(v, target.id, SOULSIGHT, op.seat) === 0 ? 0.9 : 0
    case 'wyr.a.assassinate':
      return target && target.seat !== op.seat ? 2 : 0
    default:
      return 0
  }
}

/**
 * Offered team actions worth planning, best first (at most `max`). `performed` lists the actions already in the plan so
 * the same ability is not planned twice in one activation.
 */
export function teamActionCandidates(ctx: AiCtx, v: GameState, op: Operative, offers: AbilityOffer[], performed: string[], max = 3): { offer: AbilityOffer; value: number }[] {
  const out: { offer: AbilityOffer; value: number }[] = []
  for (const o of offers) {
    if (performed.includes(o.action)) continue
    let val = 0
    try {
      val = value(ctx, v, op, o)
    } catch {
      val = 0
    }
    if (val > 0.05) out.push({ offer: o, value: val - 0.1 * o.cost })
  }
  out.sort((a, b) => b.value - a.value)
  return out.slice(0, max)
}
