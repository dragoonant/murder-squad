// Ploys and re-rolls (docs/spec/40-ai section 2): Command Re-roll when a die is worth the point, strategic gambits
// from a per-ploy table, firefight ploys by per-ploy heuristics. Unknown ploys get a modest default score and are used
// only with spare command points. Never spends the last point on a marginal gain.
import { autoBlock } from '@/engine/attack-common'
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
  // Farstalker Kinband (the Ready-step order change is a human convenience: the planner never wants it)
  'fk.p.call-the-kill': 2.0,
  'fk.p.farstalker-orders': 0,
  'fk.p.cut-throats': 1.3,
  'fk.p.rogue': 1.2,
  'fk.p.prey': 1.8,
  'fk.p.bound': 0.6,
  'aod.p.combat-doctrine': 2.6,
  // Phobos Strike Team
  'ph.p.deadly-shots': 2.0,
  'ph.p.lethal-assaults': 1.4,
  'ph.p.and-they-shall-know-no-fear': 0.9,
  'ph.p.guerrilla-warfare': 0.6,
  'ph.p.omni-scrambler': 1.8,
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
  // Warpcoven
  'wc.p.aetherial-warding': 1.4,
  'wc.p.fate-itself-is-my-weapon': 1.8,
  'wc.p.brotherhood-of-sorcerers': 1.4,
  'wc.p.savage-herd': 1.5,
  // Kasrkin
  'ks.p.skill-at-arms': 1.8,
  'ks.p.elimination-pattern': 1.5,
  'ks.p.engage-from-cover': 1.2,
  'ks.p.clearance-sweep': 1.3,
  'ks.p.relocate': 0.9,
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
  // Novitiates
  'nv.p.ardent-vengeance': 1.3,
  'nv.p.defenders-of-the-faith': 1.2,
  'nv.p.blessed-rejuvenation': 1.0,
  'nv.p.righteous-advance': 1.5,
  // Corsair Voidscarred
  'cv.p.plunderers': 1.1,
  'cv.p.piratical-profiteers': 1.3,
  'cv.p.mobile-engagement': 1.2,
  'cv.p.outcasts': 1.0,
  'cv.p.erudite-hunter': 1.0,
  'cv.p.star-charts': 1.0,
  // Imperial Navy Breachers
  'nb.p.attack-order': 1.9,
  'nb.p.defence-order': 1.3,
  'nb.p.close-assault': 1.5,
  'nb.p.brace-for-counterattack': 1.4,
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
    case 'fk.p.call-the-kill': {
      // the mark: the enemy nearest to our team (it will be shot and fought), a little more for a big one
      const e = param ? view.operatives[param] : undefined
      if (!e) return s
      const near = Math.min(99, ...liveOps(view, seat).map((m) => distanceBetween(bodyOf(m), bodyOf(e))))
      return s - Math.min(near, 20) * 0.03 + e.maxWounds * 0.02
    }
    case 'fk.p.cut-throats':
      return melee >= 3 ? s : 0.7
    case 'fk.p.prey':
      return ranged >= 3 ? s : 0.8
    case 'ph.p.deadly-shots':
      return ranged >= 3 ? s : 1.0
    case 'ph.p.omni-scrambler': {
      // jam the enemy that is closest to our team and still ready: the longer it sits out, the more it is worth
      const e = param ? view.operatives[param] : undefined
      if (!e) return s
      const near = Math.min(99, ...liveOps(view, seat).map((m) => distanceBetween(bodyOf(m), bodyOf(e))))
      return s - Math.min(near, 20) * 0.03 + e.wounds * 0.02 + (e.ready ? 0.3 : 0)
    }
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
    case 'wc.p.brotherhood-of-sorcerers':
      // Balanced, or Ceaseless with a second Sorcerer near: only worth a point with two Sorcerers
      return countKeyword(view, seat, 'SORCERER') >= 2 ? s + 0.3 : 0.7
    case 'wc.p.savage-herd':
      return countKeyword(view, seat, 'TZAANGOR') >= 2 ? s : 0.6
    case 'wc.p.aetherial-warding':
      return ranged + melee >= 4 ? s : 0.9
    case 'ks.p.skill-at-arms': {
      // a free gambit: one or two skills (Veteran Leadership), each worth what the squad's weapons make of it
      const weight: Record<string, number> = { 'light-em-up': 0.9 + 0.1 * ranged, 'ice-in-your-veins': 0.7, 'strike-fast': 0.45, 'for-cadia': 0.2 + 0.2 * melee }
      return 0.4 + (param ?? '').split('+').reduce((n, k) => n + (weight[k] ?? 0), 0)
    }
    case 'ks.p.clearance-sweep': {
      // the marker pays off where our shooters and their targets both stand within 5 inches of it
      const [px, pz] = (param ?? '').split(',').map(Number)
      if (px === undefined || pz === undefined || !Number.isFinite(px) || !Number.isFinite(pz)) return s
      const near = (o: Operative): boolean => Math.hypot(o.pos.x - px, o.pos.z - pz) <= 5
      const own = liveOps(view, seat).filter((o) => near(o) && o.weapons.some((w) => view.data.weapons[w]?.type === 'ranged')).length
      const foes = enemiesOf(view, { seat: seat as 'A' | 'B' }).filter((e) => e.status === 'active' && e.wounds > 0 && near(e)).length
      return own > 0 && foes > 0 ? s + 0.3 * Math.min(own, 3) + 0.2 * Math.min(foes, 3) : 0.3
    }
    case 'ks.p.relocate': {
      // a free group move toward the objectives: worth it from turning point 2 while nothing blocks it
      const pick = param ? view.operatives[param] : undefined
      return pick ? s + Math.min(1, (countKeyword(view, seat, 'KASRKIN') - 3) * 0.1) : s
    }
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
    case 'nv.p.blessed-rejuvenation':
      // it heals only on Faith spends: worth the point once the pool can pay for a few
      return (view.players[seat as 'A' | 'B'].pools?.['nv.faith'] ?? 0) >= 4 ? s + 0.4 : 0.2
    case 'nv.p.ardent-vengeance':
      return countKeyword(view, seat, 'NOVITIATE') >= 4 ? s : 0.6
    case 'nv.p.defenders-of-the-faith':
      return view.markers.some((m) => m.kind === 'objective') ? s : 0.3
    case 'hk.p.eye-of-the-ancestors': {
      // a Grudge token on the enemy nearest to us (the mark is wasted on one that never meets us)
      const first = (param ?? '').split('+')[0] ?? ''
      const e = view.operatives[first]
      if (!e) return s
      const near = Math.min(99, ...liveOps(view, seat).map((m) => distanceBetween(bodyOf(m), bodyOf(e))))
      return s - Math.min(near, 20) * 0.03 + (param?.includes('+') ? 0.3 : 0)
    }
    case 'nb.p.attack-order':
    case 'nb.p.defence-order': {
      // the marker covers the Breachers within 3": put it where most of them are
      const [x, z] = (param ?? '').split(',').map(Number)
      if (x === undefined || z === undefined || !Number.isFinite(x) || !Number.isFinite(z)) return s
      const covered = liveOps(view, seat).filter((o) => Math.hypot(o.pos.x - x, o.pos.z - z) - o.baseRadius <= 3).length
      return s + 0.3 * Math.min(covered, 5) - 0.6
    }
    case 'nb.p.close-assault':
      return ranged >= 2 ? s : 0.8
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
  // Farstalker Kinband: firefight ploys and the free (0 CP) offers
  'fk.p.savage-ambush': 2.0,
  'fk.p.slip-away': 1.2,
  'fk.p.poach': 1.2,
  'fk.p.vengeance-for-the-kinband': 1.8,
  'fk.x.repick': 2.0,
  'fk.x.shriek': 1.8,
  'fk.x.assault': 2.2,
  'fk.x.force': 1.8,
  'fk.x.quick-draw': 2.0,
  'fk.e.piercing-shot': 1.5,
  'fk.e.toxin-shot': 1.5,
  'fk.e.meat': 1.4,
  'fk.e.trophy': 1.2,
  'fk.x.rfa-piercing-shot': 1.4,
  'fk.x.rfa-toxin-shot': 1.3,
  'fk.x.rfa-meat': 1.2,
  'aod.p.wrath-of-vengeance': 3,
  // Phobos Strike Team: Patient Ambush and the Comms Array swaps of the four strategy ploys are scored in ployScore
  // (they depend on the board); the rest are cheap and good
  'ph.p.critical-shot': 2.0,
  'ph.p.transhuman-physiology': 2.0,
  'ph.p.stealth-assault': 2.2,
  'ph.e.purity-seals': 1.6,
  'ph.e.special-issue-ammunition': 1.5,
  'ph.medicDash': 1.0,
  'ph.plantDash': 0.2,
  'aod.p.transhuman-physiology': 2,
  'kom.p.just-a-scratch': 2,
  'aod.p.shock-assault': 2.2,
  'kom.p.kunnin-but-brutal': 2.2,
  'kom.p.krump-em': 2.4,
  'aod.p.adjust-doctrine': 0,
  'kom.p.shake-it-off': 0.4,
  // Warpcoven: paid ploys; the free offers (reserved dice, boons, Savage Brutality) are scored per option below
  'wc.p.all-is-dust': 1.9,
  'wc.p.capricious-plan': 0.9,
  'wc.p.psychic-cabal': 1.5,
  'wc.p.mutant-herd': 1.3,
  'wc.a.fate-reserve': 0,
  'wc.a.boon-echoes-from-the-warp': 1.7,
  'wc.a.boon-astral-bombardment': 0.6,
  'wc.a.savage-brutality': 2.0,
  'wc.e.sorcerous-scrolls': 0,
  // Legionaries
  'lg.p.unending-bloodshed': 2.0,
  'lg.p.mutability-and-change': 1.5,
  'lg.p.malignant-aura': 1.6,
  'lg.p.sickening-captivation': 1.6,
  // Kasrkin
  'ks.p.seize-the-initiative': 1.2,
  'ks.p.cover-retreat': 1.4,
  'ks.p.neutralise-target': 1.8,
  'ks.p.give-no-ground': 1.6,
  'ks.medicDash': 1.0,
  'ks.e.relics-of-cadia': 1.6,
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
  // Novitiates: the Faith acts are scored by faithScore, the rest are cheap and good when offered
  'nv.p.glorious-martyrdom': 1.7,
  'nv.p.blazing-inferno': 1.9,
  'nv.p.blinding-aura': 1.5,
  'nv.p.guided-by-faith': 0.8,
  'nv.a.absolution-through-destruction': 2.2,
  'nv.a.medic': 1.0,
  'nv.a.blaze-token': 0.8,
  // Corsair Voidscarred: 2D3 per Corsair is a lot of damage; the activation ploys are rarely worth their CP, free ones are cheap
  'cv.p.opportunistic-fighters': 1.7,
  'cv.p.light-fingers': 0.6,
  'cv.p.capricious-flight': 0.5,
  'cv.p.contemptuous-adventurer': 1.3,
  // free offers: Slicing Attack is D3+2 damage; Mistfield only comes up when the shot has Piercing
  'cv.a.slicing-attack': 1.9,
  'cv.e.mistfield': 1.4,
  // Imperial Navy Breachers
  'nb.p.overwhelm-target': 1.6,
  'nb.p.blitz': 1.8,
  'nb.p.lock-it-down': 1.1,
  'nb.p.deck-hand': 0.5,
  // free offers: the Breach and Clear pairing and Slugs are cheap and good; the order redirect is never worth the prompt
  'nb.bc': 1.7,
  'nb.e.slugs': 1.4,
  'nb.redirect': 0.2,
}

// ---------------------------------------------------------------------------
// Novitiates: ACTS OF FAITH. Faith points are a public pool, so an act is worth the wounds it is expected to change in the
// open sequence less what its points are worth; the last points are kept before turning point 4 unless the act decides
// whether an operative is incapacitated.
// ---------------------------------------------------------------------------

const NV_ACT_COST: Record<string, number> = { 'nv.a.guidance': 1, 'nv.a.blessing': 2, 'nv.a.intervention': 3 }

function faithScore(view: GameState, seat: string, p: { ployId: string; param?: string; operativeId?: string }): number {
  const a = view.attack
  const seq = a?.seq
  const op = p.operativeId ? view.operatives[p.operativeId] : undefined
  if (!a || !seq || !op) return 0
  const pool = view.players[seat as 'A' | 'B'].pools?.['nv.faith'] ?? 0
  // Sanctified Rounds on its own: Piercing Crits 1 only matters when a crit is kept
  if (p.ployId === 'nv.e.sanctified-rounds') {
    const crits = seq.atk.dice.filter((d) => d.kind === 'crit' && !d.used).length
    return crits > 0 ? 0.9 : 0.1
  }
  const costFaith = NV_ACT_COST[p.ployId]
  if (costFaith === undefined) return 0
  const free = p.param === 'free'
  const side = seq.atk.operativeId === op.id ? seq.atk : seq.def
  if (!side) return 0
  const fails = side.dice.filter((d) => d.kind === 'fail' && !d.used && d.value !== null).length
  const normals = side.dice.filter((d) => d.kind === 'normal' && !d.used).length
  const crits = side.dice.filter((d) => d.kind === 'crit' && !d.used).length
  const weapon = a.weaponId ? view.data.weapons[a.weaponId] : undefined
  let gain = 0
  let decisive = false
  if (a.kind === 'shoot' && side === seq.def) {
    // a Novitiate being shot: how much damage does one more save (or a crit save) prevent?
    const attacker = seq.atk.dice.filter((d) => !d.used)
    const an = attacker.filter((d) => d.kind === 'normal').length
    const ac = attacker.filter((d) => d.kind === 'crit').length
    if (!weapon) return 0
    const brutal = weapon.rules.some((r) => r.rule === 'brutal')
    const before = autoBlock(an, ac, normals, crits, weapon.dmg, brutal).damage
    const q = 1 - dieOdds(op.save).fail
    let after = before
    if (p.ployId === 'nv.a.intervention') after = autoBlock(an, ac, normals + 1, crits, weapon.dmg, brutal).damage
    else if (p.ployId === 'nv.a.blessing' && normals > 0) after = autoBlock(an, ac, normals - 1, crits + 1, weapon.dmg, brutal).damage
    else if (p.ployId === 'nv.a.guidance' && fails > 0) after = before - q * (before - autoBlock(an, ac, normals + 1, crits, weapon.dmg, brutal).damage)
    gain = before - after
    decisive = before >= op.wounds && after < op.wounds
  } else if (a.kind === 'shoot') {
    // a Novitiate shooting: the extra damage that gets through the target's expected saves
    const target = view.operatives[seq.targetId]
    if (!target || !weapon) return 0
    const defSucc = 3 * (1 - dieOdds(target.save).fail) + (seq.cover ? 0.5 : 0)
    const k = normals + crits
    const hit = 1 - dieOdds(side.need, side.lethal ?? undefined).fail
    const lev = (extra: number) => Math.max(0.15, Math.min(1, (k + extra - defSucc + 1.5) / 2))
    const avg = weapon.dmg.normal * 0.7 + weapon.dmg.crit * 0.3
    if (p.ployId === 'nv.a.guidance') gain = fails > 0 ? hit * avg * lev(0.5) : 0
    else if (p.ployId === 'nv.a.intervention') gain = fails > 0 ? weapon.dmg.normal * lev(1) : 0
    else if (p.ployId === 'nv.a.blessing' && normals > 0 && !seq.obscured) {
      const rule = (name: string) => weapon.rules.find((r) => r.rule === name)
      gain = Math.max(0, weapon.dmg.crit - weapon.dmg.normal) * lev(0) + (crits === 0 && (rule('rending') || rule('punishing')) ? 0.9 : 0) + (rule('devastating')?.x ?? 0) * 0.8
    }
    decisive = gain > 0 && target.wounds <= weapon.dmg.normal * (k + 1) && target.wounds > weapon.dmg.normal * k * 0.8
  } else {
    // a fight: every extra success is an extra strike or block
    const w = side.weaponId ? view.data.weapons[side.weaponId] : undefined
    if (!w) return 0
    const hit = 1 - dieOdds(side.need, side.lethal ?? undefined).fail
    if (p.ployId === 'nv.a.guidance') gain = fails > 0 ? hit * (w.dmg.normal * 0.7 + w.dmg.crit * 0.3) * 0.8 : 0
    else if (p.ployId === 'nv.a.intervention') gain = fails > 0 ? w.dmg.normal * 0.8 : 0
    else if (p.ployId === 'nv.a.blessing' && normals > 0) gain = Math.max(0, w.dmg.crit - w.dmg.normal) * 0.8 + (crits === 0 && w.rules.some((r) => r.rule === 'rending') ? 0.9 : 0)
  }
  if (gain <= 0) return 0
  if (free) {
    // the price is wounds: only above half, and only for a clear gain
    if (op.wounds - costFaith <= op.maxWounds / 2) return 0
    return Math.max(0, gain - 0.45 * costFaith)
  }
  // keep the last points for later turning points unless this decides an incapacitation
  if (view.turningPoint < 4 && pool - costFaith < 2 && !decisive) return 0
  return Math.max(0, gain + (decisive ? 2 : 0) - 0.35 * costFaith)
}

const PH_STRATEGY = ['ph.p.guerrilla-warfare', 'ph.p.and-they-shall-know-no-fear', 'ph.p.deadly-shots', 'ph.p.lethal-assaults']

/** What a Phobos strategy ploy is worth on the board now (for a Comms Array swap): the friends it would help this turning point. */
function phStrategyValue(view: GameState, seat: string, id: string): number {
  const mine = seatOps(view, seat as 'A' | 'B').filter((o) => o.status === 'active' && o.wounds > 0)
  const foes = enemiesOf(view, { seat: seat as 'A' | 'B' }).filter((e) => e.status === 'active')
  const near = (o: Operative, r: number): boolean => foes.some((e) => distanceBetween(bodyOf(o), bodyOf(e)) <= r)
  switch (id) {
    case 'ph.p.deadly-shots':
      return 0.25 * mine.filter((o) => o.weapons.some((w) => view.data.weapons[w]?.type === 'ranged') && near(o, 18)).length
    case 'ph.p.lethal-assaults':
      return 0.35 * mine.filter((o) => o.weapons.some((w) => view.data.weapons[w]?.type === 'melee' && !/fists$/.test(w)) && near(o, 9)).length
    case 'ph.p.and-they-shall-know-no-fear':
      return 0.5 * mine.filter((o) => o.wounds * 2 < o.maxWounds).length
    case 'ph.p.guerrilla-warfare':
      return 0.2
    default:
      return 0
  }
}

/** Value of one offered firefight ploy, from the id and the operative or parameter it names. */
function ployScore(view: GameState, seat: string, p: { ployId: string; param?: string; operativeId?: string }, windowId: string): number {
  // Comms Array: swap a strategy ploy already used for one not yet used; worth the difference on this board
  if (PH_STRATEGY.includes(p.ployId) && p.param && PH_STRATEGY.includes(p.param)) {
    const gain = phStrategyValue(view, seat, p.ployId) - phStrategyValue(view, seat, p.param)
    return gain >= 0.25 ? 0.3 + gain : 0
  }
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
    case 'wc.a.fate-reserve': {
      // param slot:side:rolled value. Trade a rolled die for the reserved one only when it swings the sequence our way:
      // a fail of ours made a success, or a success of the enemy's made a fail
      const [slot, side, rolled] = (p.param ?? '').split(':')
      const fx = view.effects.find((e) => e.source === 'wc.fate' && e.seat === seat)
      const reserved = Array.isArray(fx?.data?.dice) ? (fx!.data!.dice as number[])[Number(slot)] : undefined
      const seq = view.attack?.seq
      const dside = side === 'a' ? seq?.atk : seq?.def
      if (!dside || reserved === undefined) return 0
      const wins = (x: number): number => (x !== 1 && (x >= dside.need || (dside.lethal !== null && x >= dside.lethal)) ? 1 : 0)
      const crits = (x: number): number => (x === 6 || (dside.lethal !== null && x >= dside.lethal) ? 1 : 0)
      const r = Number(rolled)
      const swing = wins(reserved) - wins(r) + 0.4 * (crits(reserved) - crits(r))
      const gain = dside.seat === seat ? swing : -swing
      return gain > 0.3 ? 1.2 + gain : 0
    }
    case 'wc.e.sorcerous-scrolls': {
      // once per battle: swap only for a clearly better boon than the Sorcerer's own
      const value: Record<string, number> = { 'ASTRAL BOMBARDMENT': 1.4, 'ECHOES FROM THE WARP': 1.1, 'INCORPOREAL SIGHT': 1, 'TWIST OF FATE': 1, 'MASTER OF THE IMMATERIUM': 1, 'IMMATERIAL FLIGHT': 0.9, 'TIME-WALK': 0.8, 'MUTANT APPENDAGE': 0.7, 'WARP SWELL': 0.6 }
      const gain = (value[p.param ?? ''] ?? 0) - (value[op?.picks?.boon ?? ''] ?? 0)
      return gain >= 0.5 ? 0.3 + gain : 0
    }
    case 'wc.p.capricious-plan':
      // the flux options also bring the Sorcerer's friend back first, so they are worth a little more than the plain ones
      return p.param === 'order' ? 0.4 : p.param === 'both' ? 1.0 : p.param === 'flux-dash' ? 1.0 : p.param === 'flux-both' ? 1.1 : 0.9
    case 'ph.p.patient-ambush': {
      // skip this activation: sensible when the enemy has more operatives ready, so the order of activations stays level and
      // they commit first; pointless while we hold the numbers
      const mine = seatOps(view, seat as 'A' | 'B').filter((o) => o.status === 'active' && o.ready).length
      const theirs = enemiesOf(view, { seat: seat as 'A' | 'B' }).filter((o) => o.status === 'active' && o.ready).length
      const diff = theirs - mine
      return diff >= 1 ? 0.9 + 0.2 * Math.min(diff, 3) : diff === 0 && view.turningPoint >= 2 ? 0.5 : 0
    }
    case 'wc.p.psychic-cabal':
      // a second PSYCHIC gun beats a borrowed action
      return (p.param ?? '').includes(':w:') ? s + 0.3 : s - 0.3
    case 'ha.fdd': {
      const t = p.param ? view.operatives[p.param] : undefined
      return t ? 1.2 + t.wounds * 0.03 : s
    }
    case 'nb.p.lock-it-down': {
      // the objective nearest the operative that will hold it
      const m = p.param ? view.markers.find((k) => k.id === p.param) : undefined
      if (!m || !op) return s
      return s - Math.min(Math.hypot(op.pos.x - m.pos.x, op.pos.z - m.pos.z), 20) * 0.05
    }
    case 'nv.a.guidance':
    case 'nv.a.blessing':
    case 'nv.a.intervention':
    case 'nv.e.sanctified-rounds':
      return faithScore(view, seat, p)
    case 'nv.a.blaze-token':
      // shedding the burn costs 1 APL for the activation: not worth it in the last turning point
      return view.turningPoint >= 4 ? 0 : s
    case 'nv.p.glorious-martyrdom': {
      // 1 Faith and D3 damage for every enemy beside the fallen operative
      const near = op ? enemiesOf(view, op).filter((e) => e.status === 'active' && distanceBetween(bodyOf(op), bodyOf(e)) <= 2).length : 0
      return near > 0 ? s + near * 0.4 : 0
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
