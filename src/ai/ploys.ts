// Ploys and re-rolls (docs/spec/40-ai section 2): Command Re-roll when a die is worth the point, strategic gambits
// from a per-ploy table, firefight ploys by per-ploy heuristics. Unknown ploys get a modest default score and are used
// only with spare command points. Never spends the last point on a marginal gain.
import { dieOdds } from '@/engine/dice'
import { answerDecision } from '@/engine/query'
import { hasKeyword } from '@/engine/conditions'
import { enemiesOf, seatOps } from '@/engine/state'
import { distanceBetween } from '@/engine/measure'
import { bodyOf } from '@/engine/los'
import type { Action, DecisionOption, GameState, Operative } from '@/engine'
import type { AiCtx } from './tiers'
import { passAction } from './random'

// ---------------------------------------------------------------------------
// Command Re-roll
// ---------------------------------------------------------------------------

function threshold(cp: number): number {
  return cp >= 3 ? 1.0 : cp === 2 ? 1.6 : 2.4
}

function avgDmg(d: { normal: number; crit: number }): number {
  return d.normal * 0.75 + d.crit * 0.25
}

function countKinds(kinds: unknown): { normal: number; crit: number; fail: number } {
  const out = { normal: 0, crit: 0, fail: 0 }
  if (Array.isArray(kinds)) for (const k of kinds as unknown[]) if (k === 'normal' || k === 'crit' || k === 'fail') out[k as 'normal' | 'crit' | 'fail']++
  return out
}

/** Expected wounds gained by re-rolling one failed die in the open window; null when the window is not understood. */
function rerollGain(ctx: AiCtx, kindsOwn: unknown, side: string): number | null {
  const view = ctx.view
  const a = view.attack
  const seq = a?.seq
  if (!a || !seq) return null
  const own = countKinds(kindsOwn)
  if (own.fail === 0) return 0
  if (a.kind === 'shoot') {
    const target = view.operatives[seq.targetId]
    const atkOp = view.operatives[a.operativeId]
    const w = a.weaponId ? view.data.weapons[a.weaponId] : undefined
    if (!target || !atkOp || !w) return null
    const dmg = avgDmg(w.dmg)
    const defSucc = 3 * (1 - dieOdds(target.save).fail) + (seq.cover ? 0.5 : 0)
    if (side === 'attack') {
      const p = 1 - dieOdds(seq.atk.need, seq.atk.lethal ?? undefined).fail
      const k = own.normal + own.crit
      const leverage = Math.max(0.15, Math.min(1, (k - defSucc + 1.5) / 2))
      let gain = p * dmg * leverage
      // a single die that can finish the target
      if (target.wounds <= (k + 1) * dmg && target.wounds > k * dmg * 0.8) gain += p * 1.5
      return gain
    }
    const attacks = seq.atk.dice.filter((d) => d.kind !== 'fail')
    const q = 1 - dieOdds(target.save).fail
    const leverage = Math.max(0.1, Math.min(1, (attacks.length - (own.normal + own.crit) + 0.5) / 1.5))
    let gain = q * dmg * leverage
    const atkDamage = attacks.reduce((s, d) => s + (d.kind === 'crit' ? w.dmg.crit : w.dmg.normal), 0)
    if (atkDamage >= (view.operatives[seq.targetId]?.wounds ?? 99) && atkDamage - dmg < (view.operatives[seq.targetId]?.wounds ?? 99)) gain += q * 2
    return gain
  }
  // fight: an extra success is an extra strike or block
  const mine = side === 'attacker' ? seq.atk : seq.def
  const op = mine ? view.operatives[mine.operativeId] : undefined
  const w = mine?.weaponId ? view.data.weapons[mine.weaponId] : undefined
  if (!mine || !op || !w) return null
  const p = 1 - dieOdds(mine.need, mine.lethal ?? undefined).fail
  return p * avgDmg(w.dmg) * 0.8
}

/** dice.commandReroll: re-roll one failed die when the expected gain beats the threshold for our spare points. */
export function commandReroll(ctx: AiCtx): Action {
  const { pending, view } = ctx
  const cp = view.players[ctx.seat].cp
  const opts = pending.options ?? []
  const kinds = pending.context.kinds
  const side = String(pending.context.side ?? '')
  const gain = rerollGain(ctx, kinds, side)
  if (gain === null || gain < threshold(cp)) return passAction(pending)
  const failed = opts.find((o) => {
    const idx = (o.action.payload as { dice?: number[] }).dice?.[0]
    return typeof idx === 'number' && Array.isArray(kinds) && kinds[idx] === 'fail'
  })
  return failed ? failed.action : passAction(pending)
}

/** dice.reroll from weapon rules and equipment (free): the engine's policy re-rolls failed dice. */
export function ruleReroll(ctx: AiCtx): Action | null {
  return answerDecision(ctx.view, ctx.pending)
}

// ---------------------------------------------------------------------------
// Strategic gambits
// ---------------------------------------------------------------------------

const GAMBIT_SCORE: Record<string, number> = {
  'aod.p.combat-doctrine': 2.6,
  'aod.p.indomitus': 1.4,
  'aod.p.and-they-shall-know-no-fear': 0.9,
  'aod.p.adaptive-tactics': 0.2,
  'kom.p.dakka-dakka-dakka': 2.6,
  'kom.p.waaagh': 2.0,
  'kom.p.skulk-about': 1.7,
  'kom.p.ssssshhhh': 1.0,
  // Legionaries
  'lg.p.blood-for-the-blood-god': 1.7,
  'lg.p.implacable': 1.1,
  'lg.p.quicksilver-speed': 1.1,
  'lg.p.fickle-fates': 1.7,
  'lg.p.warded-armour': 1.6,
  'lg.p.chaos-talismans': 1.2,
  // Hand of the Archon
  'ha.p.blade-artists': 2.0,
  'ha.p.merciless-sadists': 1.8,
  'ha.p.from-darkness-death': 1.5,
  'ha.p.denizens-of-night': 1.2,
  // Hunter Clade
  'hc.p.doctrina': 2.0,
  'hc.p.debilitating-irradiation': 1.0,
  'hc.p.neurostatic-interference': 1.2,
  'hc.p.scouting-protocol': 1.4,
  'hc.p.accelerant-agents': 1.6,
  'hc.p.rad-bombardment': 1.5,
  // Hearthkyn Salvagers
  'hk.p.eye-of-the-ancestors': 1.7,
  'hk.p.tactician': 1.6,
  'hk.p.need-keeps': 1.4,
  'hk.p.toil-earns': 1.1,
  'hk.p.wrought-defence': 1.4,
  'hk.p.proximate-firepower': 2.0,
}

function nearestEnemyDistances(view: GameState, seat: string): number[] {
  const mine = seatOps(view, seat as 'A' | 'B')
  const theirs = enemiesOf(view, { seat: seat as 'A' | 'B' })
  return mine.map((m) => Math.min(99, ...theirs.map((e) => distanceBetween(bodyOf(m), bodyOf(e)))))
}

function doctrineScore(view: GameState, seat: string, param: string): number {
  const d = nearestEnemyDistances(view, seat)
  const avg = d.length ? d.reduce((s, x) => s + x, 0) / d.length : 12
  const engaged = d.filter((x) => x <= 1.5).length
  if (param === 'devastator') return 2.4 + (avg > 8 ? 0.7 : 0)
  if (param === 'tactical') return 2.2 + (avg <= 7 && avg > 2.5 ? 0.6 : 0)
  if (param === 'assault') return 1.6 + engaged * 0.8 + (avg <= 3 ? 0.8 : 0)
  return 1
}

const liveOps = (view: GameState, seat: string): Operative[] => seatOps(view, seat as 'A' | 'B').filter((o) => o.status === 'active' && o.wounds > 0)

/** How many of our live operatives carry a ranged weapon and a named melee weapon (not bare fists). */
function mix(view: GameState, seat: string): { ranged: number; melee: number } {
  let ranged = 0
  let melee = 0
  for (const o of liveOps(view, seat)) {
    if (o.weapons.some((w) => view.data.weapons[w]?.type === 'ranged')) ranged++
    if (o.weapons.some((w) => view.data.weapons[w]?.type === 'melee' && !/fists$/.test(w))) melee++
  }
  return { ranged, melee }
}

const countKeyword = (view: GameState, seat: string, kw: string): number => liveOps(view, seat).filter((o) => hasKeyword(view, o, kw)).length

/** Hunter Clade Imperatives (Doctrina, Command Override): the mode that suits the team's weapons and the fight ahead. */
function imperativeScore(view: GameState, seat: string, param: string): number {
  const [mode, flag] = param.split(':')
  const { ranged, melee } = mix(view, seat)
  const total = Math.max(1, ranged + melee)
  const d = nearestEnemyDistances(view, seat)
  const avg = d.length ? d.reduce((s, x) => s + x, 0) / d.length : 12
  let s: number
  switch (mode) {
    case 'protector':
      // Ceaseless ranged weapons, worse melee Hit: best for a shooting team
      s = 1 + (ranged / total) * 1.6 - (melee / total) * 0.9
      break
    case 'conqueror':
      s = 1 + (melee / total) * 1.6 - (ranged / total) * 0.9 + (avg < 6 ? 0.3 : 0)
      break
    case 'bulwark':
      // less damage from heavy hits, 1 inch less Move: best when the enemy is already close
      s = 1.1 + (avg < 7 ? 0.4 : 0)
      break
    case 'aggressor':
      s = 1.0 + (avg > 9 ? 0.5 : 0)
      break
    default:
      s = 0.3
  }
  // the Deprecation-ignoring pick of the Primary Mode costs a once-per-battle use: worth it while it still helps
  if (flag === 'ignore') s += 0.35
  return s
}

/** Param-aware value of one gambit option. */
function gambitScore(view: GameState, seat: string, gambitId: string, param: string | undefined): number {
  const s = GAMBIT_SCORE[gambitId] ?? 0.8
  if (gambitId === 'aod.p.combat-doctrine' && param) return doctrineScore(view, seat, param)
  if (gambitId === 'hc.p.doctrina' && param) return imperativeScore(view, seat, param) + 0.8
  const { ranged, melee } = mix(view, seat)
  switch (gambitId) {
    case 'lg.p.blood-for-the-blood-god':
      return countKeyword(view, seat, 'KHORNE') > 0 || melee >= 2 ? s : 0.3
    case 'lg.p.implacable':
      return countKeyword(view, seat, 'NURGLE') > 0 ? s + 0.4 : 0.7
    case 'lg.p.quicksilver-speed':
      return countKeyword(view, seat, 'SLAANESH') > 0 ? s + 0.4 : 0.7
    case 'lg.p.fickle-fates':
      return ranged >= 2 ? s : 0.6
    case 'lg.p.warded-armour': {
      // the Legionary closest to the enemy with the weakest Save gains the most
      const op = param ? view.operatives[param] : undefined
      if (!op) return s
      const near = Math.min(99, ...enemiesOf(view, op).map((e) => distanceBetween(bodyOf(op), bodyOf(e))))
      return s + (op.save - 2) * 0.25 + (near < 10 ? 0.4 : 0) + op.wounds * 0.03
    }
    case 'lg.p.chaos-talismans':
      return s + (param ? countKeyword(view, seat, param) * 0.15 : 0)
    case 'ha.p.blade-artists':
      return melee >= 2 ? s : 0.8
    case 'ha.p.merciless-sadists':
      return view.turningPoint >= 2 ? s : s - 0.5
    case 'hc.p.scouting-protocol':
    case 'hc.p.rad-bombardment':
      return view.turningPoint >= 2 ? s : 0
    case 'hc.p.accelerant-agents':
      return liveOps(view, seat).some((o) => hasKeyword(view, o, 'RUSTSTALKER')) ? s : 0.3
    case 'hc.p.debilitating-irradiation':
      return liveOps(view, seat).some((o) => hasKeyword(view, o, 'VANGUARD')) ? s : 0.3
    case 'hc.p.neurostatic-interference':
      return liveOps(view, seat).some((o) => hasKeyword(view, o, 'INFILTRATOR')) ? s : 0.3
    case 'hk.p.tactician':
      return param === 'defence' ? s - 0.3 : s
    case 'hk.p.eye-of-the-ancestors': {
      // a Grudge token on the enemy nearest to us (the mark is wasted on one that never meets us)
      const first = (param ?? '').split('+')[0] ?? ''
      const e = view.operatives[first]
      if (!e) return s
      const near = Math.min(99, ...liveOps(view, seat).map((m) => distanceBetween(bodyOf(m), bodyOf(e))))
      return s - Math.min(near, 20) * 0.03 + (param?.includes('+') ? 0.3 : 0)
    }
    case 'hk.p.need-keeps':
    case 'hk.p.toil-earns': {
      const m = param ? view.markers.find((k) => k.id === param) : undefined
      if (!m) return s
      const near = Math.min(99, ...liveOps(view, seat).map((o) => Math.hypot(o.pos.x - m.pos.x, o.pos.z - m.pos.z)))
      return s - Math.min(near, 20) * 0.04
    }
    default:
      return s
  }
}

/** strategy.gambit: the best gambit when it is worth the point, else pass. One reserve point stays for re-rolls after the first. */
export function gambit(ctx: AiCtx): Action {
  const { pending, view } = ctx
  const cp = view.players[ctx.seat].cp
  const used = view.strategy.gambit.used[ctx.seat].length
  let best: { o: DecisionOption; s: number; free: boolean } | null = null
  for (const o of pending.options ?? []) {
    const p = o.action.payload as { gambitId: string; param?: string }
    const cost = Number(o.data?.cost ?? 1)
    if (cost > cp) continue
    const free = cost === 0
    if (!free && used > 0 && cp - cost < 1) continue
    let s = gambitScore(view, ctx.seat, p.gambitId, p.param)
    if (!ctx.params.tacAware && !free) s *= 0.7
    if (!best || s > best.s) best = { o, s, free }
  }
  // the first gambit of the turning point is almost always worth it; the next ones need clear value; a free one needs little
  if (best && best.s >= (best.free ? 0.5 : used === 0 ? 0.8 : 1.6)) return best.o.action
  return passAction(pending)
}

// ---------------------------------------------------------------------------
// Firefight ploys
// ---------------------------------------------------------------------------

const PLOY_SCORE: Record<string, number> = {
  'aod.p.wrath-of-vengeance': 3,
  'aod.p.transhuman-physiology': 2,
  'kom.p.just-a-scratch': 2,
  'aod.p.shock-assault': 2.2,
  'kom.p.kunnin-but-brutal': 2.2,
  'kom.p.krump-em': 2.4,
  'aod.p.adjust-doctrine': 0,
  'kom.p.shake-it-off': 0.4,
  // Legionaries
  'lg.p.unending-bloodshed': 2.0,
  'lg.p.mutability-and-change': 1.5,
  'lg.p.malignant-aura': 1.6,
  'lg.p.sickening-captivation': 1.6,
  // Hand of the Archon: paid ploys
  'ha.p.cruel-deception': 0.7,
  'ha.p.devious-scheme': 1.2,
  // skipping the AI's own activation is never a good turn
  'ha.p.heinous-arrogance': 0,
  'ha.p.prey-on-the-wounded': 2.0,
  // Hand of the Archon: free offers (Pain invigorations and the rest)
  'ha.inv.animus': 1.8,
  'ha.inv.rejuvenation': 1.5,
  'ha.inv.surge': 1.1,
  'ha.inv.senses': 1.3,
  'ha.tv': 1.6,
  'ha.flay': 1.2,
  'ha.omen': 1.4,
  'ha.bd': 1.0,
  'ha.fdd': 1.5,
  'ha.e.refined-poison': 1.6,
  'ha.e.toxin-coating': 1.6,
  // Hunter Clade
  'hc.p.control-edict': 1.8,
  'hc.p.scrapcode-overload': 1.3,
  'hc.p.command-override': 1.7,
  'hc.p.omnissiahs-imperative': 1.9,
  'hc.e.redundancy-systems': 1.3,
  'hc.e.refractor-field': 1.3,
  // Hearthkyn Salvagers
  'hk.p.the-ancestors-are-watching': 2.1,
  'hk.p.worth-it': 1.4,
  'hk.p.sturdy': 2.0,
  'hk.p.engage-to-acquire': 2.0,
  'hk.medicDash': 1.0,
}

/** Value of one offered firefight ploy, from the id and the operative or parameter it names. */
function ployScore(view: GameState, seat: string, p: { ployId: string; param?: string; operativeId?: string }, windowId: string): number {
  const s = PLOY_SCORE[p.ployId] ?? (p.ployId.startsWith('ha.inv.') ? 1.4 : 0.9)
  const op = p.operativeId ? view.operatives[p.operativeId] : undefined
  switch (p.ployId) {
    case 'ha.inv.rejuvenation':
      // D3+1 wounds back: worth what is actually missing
      return op ? Math.min(op.maxWounds - op.wounds, 3) * 0.55 : s
    case 'ha.omen': {
      // an enemy re-rolls its 6s (best on the one that hits hardest); a friend re-rolls its 1s
      const t = p.param ? view.operatives[p.param] : undefined
      if (!t) return s
      return t.seat === seat ? 0.9 + t.wounds * 0.02 : 1.3 + t.maxWounds * 0.03
    }
    case 'ha.flay':
      return p.param && view.operatives[p.param]?.seat === seat ? 1.2 : 0.2
    case 'ha.fdd': {
      const t = p.param ? view.operatives[p.param] : undefined
      return t ? 1.2 + t.wounds * 0.03 : s
    }
    case 'hc.p.omnissiahs-imperative':
      // the extra rule helps most once the dice are in play
      return windowId === 'firefight.activationStart' || windowId === 'firefight.actionDeclared' ? s - 0.4 : s
    default:
      return s
  }
}

/** ploy.firefight: use the best offered ploy when the window's swing is positive, else pass. Free (0 CP) offers need little. */
export function firefightPloy(ctx: AiCtx): Action {
  const { pending, view } = ctx
  const cp = view.players[ctx.seat].cp
  const info = (view.window?.info ?? {}) as { attackFails?: number; defenceFails?: number; critRetained?: boolean }
  let best: { o: DecisionOption; margin: number } | null = null
  for (const o of pending.options ?? []) {
    const p = o.action.payload as { ployId: string; param?: string; operativeId?: string }
    const cost = Number(o.data?.cost ?? 1)
    if (cost > cp) continue
    let s = ployScore(view, ctx.seat, p, String(pending.window ?? ''))
    // defensive dice ploys matter when the attack is heavy; offensive ones when the swing is open
    if (pending.window === 'shoot.defenceRolled' && (info.attackFails ?? 0) > 3) s *= 0.7
    if (!ctx.params.tacAware && cost > 0) s *= 0.6
    // a free offer costs nothing but its usage limit, so the bar is low; paid ploys keep the threshold for the CP left
    const need = cost <= 0 ? 0.3 : threshold(cp) - 0.3
    const margin = s - need
    if (margin >= 0 && (!best || margin > best.margin)) best = { o, margin }
  }
  return best ? best.o.action : passAction(pending)
}

export type { Operative }
