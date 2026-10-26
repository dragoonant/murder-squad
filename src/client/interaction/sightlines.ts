// Sight-line evaluation for the move preview, the threat view and the measure tool. Pure (no React, no store):
// every verdict and number is composed from exported engine queries (visibility / cover / obscured through
// `targetInfo`, `validTargets`, `expectedDamage`, distances and control range); this file only evaluates them
// for a HYPOTHETICAL position of one operative (a shallow state copy with that operative moved), exactly as the
// engine would see it after the move. Nothing here writes engine state.
import type { Activation, GameState, Operative, Order, Vec3 } from '@/engine'
import { parseRules, ruleSetFor, targetInfo, validTargets, type RuleSet, type TargetInfo } from '@/engine/attack-common'
import { baseDistance3D, bodyOf, headPoint, visible } from '@/engine/los'
import { distanceBetween, enemiesInControlRange, isWithin } from '@/engine/measure'
import { expectedDamage, verdictFor } from '@/engine/query'
import { shootBlockers, usableRangedWeapons, type ShootBlockers } from '@/engine/shoot'
import { enemiesOf } from '@/engine/state'

// ---------------------------------------------------------------- hypothetical positions

/** The state as it would be with `opId` standing at `at` (optionally under another order). Shares everything else. */
export function hypothetical(state: GameState, opId: string, at: Vec3, order?: Order): GameState {
  const op = state.operatives[opId]
  if (!op) return state
  const moved: Operative = { ...op, pos: { x: at.x, y: at.y, z: at.z }, ...(order ? { order } : {}) }
  return { ...state, operatives: { ...state.operatives, [opId]: moved } }
}

export interface SightSubject {
  opId: string
  /** where the operative stands (the planned end point, or its current position) */
  at: Vec3
  /** actions already performed in the activation, plus the planned move (Heavy weapons care) */
  performed: string[]
}

// ---------------------------------------------------------------- the operative's own view

/** How an enemy shows up from the subject's position. */
export type SightStatus = 'valid' | 'cover' | 'obscured' | 'blocked' | 'unseen'

export interface SightEntry {
  id: string
  name: string
  order: Order
  wounds: number
  /** base-edge distance, 3D, inches */
  distance: number
  visible: boolean
  inCover: boolean
  obscured: boolean
  /** the defender picks cover or obscured (the better for them is reported) */
  forcedChoice: boolean
  /** a legal Shoot target for at least one usable weapon */
  valid: boolean
  status: SightStatus
  /** why it is not a legal target (null when valid) */
  reason: string | null
  weaponId: string | null
  weaponName: string | null
  expected: number | null
  kill: number | null
  /** line endpoints: the subject's head and the target's mid-height */
  from: Vec3
  to: Vec3
}

export interface SightEval {
  opId: string
  name: string
  at: Vec3
  order: Order
  entries: SightEntry[]
  weapons: string[]
  /** the operative is on Conceal and no weapon is Silent: numbers assume Engage */
  concealLocked: boolean
  /** no ranged weapon can be used here (Heavy after moving, Limited spent, melee only) */
  noWeapon: boolean
  /** enemies whose control range the spot is inside */
  inControlRangeOf: string[]
  /** the engine's reason the operative cannot take a Shoot action here at all (Conceal, control range, AP), or null */
  shootBlocked: string | null
}

function midPoint(o: { pos: Vec3; height: number }): Vec3 {
  return { x: o.pos.x, y: o.pos.y + o.height * 0.5, z: o.pos.z }
}

function weaponName(state: GameState, id: string | null): string | null {
  return id ? (state.data.weapons[id]?.name ?? id) : null
}

function rangedOf(state: GameState, op: Operative): string[] {
  return op.weapons.filter((w) => state.data.weapons[w]?.type === 'ranged')
}

/** The operative's activation as it would stand at the subject (planned move performed and paid), or null. */
function activationAt(state: GameState, subj: SightSubject): Activation | null {
  const act = state.firefight.activation
  if (!act || act.operativeId !== subj.opId || act.stage !== 'action') return null
  const staged = subj.performed.length > act.performed.length && act.declared
  const paid = staged && !act.counteract && !act.frame && !act.declared!.free ? act.declared!.cost : 0
  return { ...act, performed: subj.performed, apSpent: act.apSpent + paid, declared: null }
}

const rangeText = (r: number | null): string => (r === null ? 'unlimited' : `${r}″`)

/**
 * SIGHT-001: why a visible enemy is not a legal Shoot target, from the engine's shooter-side reasons (`shootBlockers`)
 * and the checks of `validTargets`, judged per ranged weapon so a short-ranged sidearm never speaks for a weapon with
 * unlimited range. Weapons that cannot fire here are named with their engine reason.
 */
function whyNot(state: GameState, me: Operative, e: Operative, blockers: ShootBlockers, usable: string[]): string {
  // one line per weapon: the profiles of one weapon (executioner / hyperfrag / mortis) share their reason
  const groups = new Set<string>()
  const off: string[] = []
  for (const w of blockers.weapons) {
    if (!w.reason || usable.includes(w.weaponId)) continue
    const group = state.data.weapons[w.weaponId]?.profileGroup ?? w.weaponId
    if (groups.has(group)) continue
    groups.add(group)
    const def = state.data.weapons[w.weaponId]
    off.push(def?.profileGroup ? w.reason.replace(w.name, w.name.replace(/ \([^)]*\)$/, '')) : w.reason)
  }
  if (usable.length === 0 && off.length > 0) return `can't shoot: ${off.join('; ')}`
  if (blockers.action) return `can't shoot: ${blockers.action}`
  if (usable.length === 0) return "can't shoot: no ranged weapon"
  // a target-side check that fails for every usable weapon, in validTargets order
  if (enemiesInControlRange(state, e, e.seat).length > 0) return 'within control range of a friendly operative: not a valid target'
  const per = usable.map((w) => {
    const rules = ruleSetFor(state, me, w, 'shoot')
    const name = (state.data.weapons[w]?.name ?? w).replace(/ \([^)]*\)$/, '')
    if (rules.range !== null && !isWithin(bodyOf(me), bodyOf(e), rules.range)) return { name, why: 'range' as const, range: rules.range }
    const info = targetInfo(state, me, e, rules)
    if (!info.verdict.visible) return { name, why: 'unseen' as const, range: rules.range }
    if (info.coverBlocks) return { name, why: 'cover' as const, range: rules.range }
    return { name, why: 'other' as const, range: rules.range }
  })
  const extra = off.length > 0 ? ` (${off.join('; ')})` : ''
  if (per.some((p) => p.why === 'cover')) return `concealed in cover: not a valid target${extra}`
  if (per.every((p) => p.why === 'range')) {
    const beyond = `beyond the range of ${[...new Set(per.map((p) => `${p.name} (${rangeText(p.range)})`))].join(', ')}`
    // the weapon that would reach is the news: name it first, the short-ranged one after
    return off.length > 0 ? `can't shoot: ${off.join('; ')}; ${beyond}` : beyond
  }
  if (per.some((p) => p.why === 'unseen')) return `not visible${extra}`
  return `not a valid target${extra}`
}

/** Visible / in cover / obscured / not visible, validity and expected damage of every enemy, from `subj.at`. */
export function evaluateSight(state: GameState, subj: SightSubject): SightEval {
  const base = state.operatives[subj.opId]
  const none = (name: string, order: Order): SightEval => ({ opId: subj.opId, name, at: subj.at, order, entries: [], weapons: [], concealLocked: false, noWeapon: true, inControlRangeOf: [], shootBlocked: null })
  if (!base || base.status !== 'active') return none(base?.name ?? subj.opId, base?.order ?? 'engage')
  let hyp = hypothetical(state, subj.opId, subj.at)
  let me = hyp.operatives[subj.opId]!
  let weapons = usableRangedWeapons(hyp, me, subj.performed)
  let concealLocked = false
  // mid-activation the order is fixed, so the Engage assumption is only for an operative that has not chosen yet
  const activation = activationAt(state, subj)
  if (weapons.length === 0 && me.order === 'conceal' && !activation) {
    const alt = hypothetical(state, subj.opId, subj.at, 'engage')
    const altWeapons = usableRangedWeapons(alt, alt.operatives[subj.opId]!, subj.performed)
    if (altWeapons.length > 0) {
      hyp = alt
      me = alt.operatives[subj.opId]!
      weapons = altWeapons
      concealLocked = true
    }
  }
  const blockers = shootBlockers(hyp, me, activation)
  // SIGHT-001: a weapon the engine would not offer (ASTARTES repeat AP) is no shot either
  weapons = weapons.filter((w) => !blockers.weapons.some((b) => b.weaponId === w && b.reason))
  const shootBlocked = blockers.action
  const verdictWeapon = weapons[0] ?? rangedOf(hyp, me)[0]
  const rules: RuleSet = verdictWeapon ? ruleSetFor(hyp, me, verdictWeapon, 'shoot') : parseRules([])
  const enemies = enemiesOf(hyp, me).filter((e) => e.wounds > 0)
  const validBy = new Map<string, Map<string, TargetInfo>>()
  for (const w of shootBlocked ? [] : weapons) {
    const m = new Map<string, TargetInfo>()
    for (const t of validTargets(hyp, me, w)) if (hyp.operatives[t.id] && hyp.operatives[t.id]!.seat !== me.seat) m.set(t.id, t)
    validBy.set(w, m)
  }
  const head = headPoint(bodyOf(me))
  const entries: SightEntry[] = enemies.map((e) => {
    const info = targetInfo(hyp, me, e, rules)
    let best: { weaponId: string; mean: number; kill: number; inCover: boolean; obscured: boolean; forced: boolean } | null = null
    for (const w of weapons) {
      if (!validBy.get(w)?.has(e.id)) continue
      try {
        const d = expectedDamage(hyp, me.id, w, e.id)
        if (!best || d.mean > best.mean) best = { weaponId: w, mean: d.mean, kill: d.killProbability, inCover: d.inCover, obscured: d.obscured, forced: d.forcedChoice }
      } catch {
        /* a weapon the engine cannot price: leave the number off */
      }
    }
    const valid = [...validBy.values()].some((m) => m.has(e.id))
    const inCover = best ? best.inCover : info.inCover
    const obscured = best ? best.obscured : info.obscured
    const status: SightStatus = !info.verdict.visible ? 'unseen' : !valid ? 'blocked' : obscured ? 'obscured' : inCover ? 'cover' : 'valid'
    return {
      id: e.id,
      name: e.name,
      order: e.order,
      wounds: e.wounds,
      distance: info.distance,
      visible: info.verdict.visible,
      inCover,
      obscured,
      forcedChoice: best ? best.forced : info.verdict.forcedChoice,
      valid,
      status,
      reason: valid ? null : whyNot(hyp, me, e, blockers, weapons),
      weaponId: best?.weaponId ?? null,
      weaponName: weaponName(hyp, best?.weaponId ?? null),
      expected: best ? best.mean : null,
      kill: best ? best.kill : null,
      from: head,
      to: midPoint(e),
    }
  })
  entries.sort((a, b) => (b.expected ?? -1) - (a.expected ?? -1) || a.distance - b.distance)
  return {
    opId: me.id,
    name: me.name,
    at: subj.at,
    order: base.order,
    entries,
    weapons,
    concealLocked,
    noWeapon: weapons.length === 0,
    inControlRangeOf: enemiesInControlRange(hyp, me, me.seat).map((o) => o.id),
    shootBlocked,
  }
}

// ---------------------------------------------------------------- the threat view

export interface ThreatEntry {
  id: string
  name: string
  distance: number
  weaponId: string
  weaponName: string
  /** best expected damage to the subject */
  expected: number
  kill: number
  inCover: boolean
  obscured: boolean
  from: Vec3
  to: Vec3
}

export interface ThreatSet {
  order: Order
  entries: ThreatEntry[]
  /** sum of each shooter's best expected damage (each enemy activates once) */
  total: number
  /** the single biggest threat */
  max: number
}

export interface ThreatEval {
  opId: string
  wounds: number
  at: Vec3
  engage: ThreatSet
  conceal: ThreatSet
}

/** The enemies that could see and target the subject from `at` under one order, with their best expected damage. */
function threatUnder(state: GameState, subj: SightSubject, order: Order): ThreatSet {
  const hyp = hypothetical(state, subj.opId, subj.at, order)
  const me = hyp.operatives[subj.opId]
  const entries: ThreatEntry[] = []
  if (me && me.status === 'active') {
    for (const e0 of enemiesOf(hyp, me)) {
      if (e0.wounds <= 0) continue
      // an enemy may take either order when it activates: assume Engage so Conceal never hides a shooter
      const withE: GameState = { ...hyp, operatives: { ...hyp.operatives, [e0.id]: { ...e0, order: 'engage' as Order } } }
      const e = withE.operatives[e0.id]!
      let best: ThreatEntry | null = null
      for (const w of usableRangedWeapons(withE, e, [])) {
        const t = validTargets(withE, e, w).find((x) => x.id === me.id)
        if (!t) continue
        try {
          const d = expectedDamage(withE, e.id, w, me.id)
          if (!best || d.mean > best.expected) {
            best = {
              id: e.id,
              name: e.name,
              distance: t.distance,
              weaponId: w,
              weaponName: weaponName(withE, w) ?? w,
              expected: d.mean,
              kill: d.killProbability,
              inCover: d.inCover,
              obscured: d.obscured,
              from: headPoint(bodyOf(e)),
              to: midPoint(me),
            }
          }
        } catch {
          /* skip a weapon the engine cannot price */
        }
      }
      if (best) entries.push(best)
    }
  }
  entries.sort((a, b) => b.expected - a.expected)
  return { order, entries, total: entries.reduce((s, x) => s + x.expected, 0), max: entries[0]?.expected ?? 0 }
}

/** Who could see and target the subject at `subj.at` if it ends on Engage, and if it ends on Conceal (cover respected). */
export function evaluateThreat(state: GameState, subj: SightSubject): ThreatEval {
  const op = state.operatives[subj.opId]
  return { opId: subj.opId, wounds: op?.wounds ?? 0, at: subj.at, engage: threatUnder(state, subj, 'engage'), conceal: threatUnder(state, subj, 'conceal') }
}

// ---------------------------------------------------------------- memo (the board layer and the panel share one evaluation)

const sightMemo = new WeakMap<GameState, Map<string, SightEval>>()
const threatMemo = new WeakMap<GameState, Map<string, ThreatEval>>()

function keyOf(s: SightSubject): string {
  return `${s.opId}|${s.at.x.toFixed(3)},${s.at.y.toFixed(3)},${s.at.z.toFixed(3)}|${s.performed.join(',')}`
}

function memo<T>(store: WeakMap<GameState, Map<string, T>>, state: GameState, key: string, make: () => T): T {
  let m = store.get(state)
  if (!m) {
    m = new Map()
    store.set(state, m)
  }
  const hit = m.get(key)
  if (hit) return hit
  const v = make()
  if (m.size > 24) m.clear()
  m.set(key, v)
  return v
}

export const sightFor = (state: GameState, s: SightSubject): SightEval => memo(sightMemo, state, keyOf(s), () => evaluateSight(state, s))
export const threatFor = (state: GameState, s: SightSubject): ThreatEval => memo(threatMemo, state, keyOf(s), () => evaluateThreat(state, s))

// ---------------------------------------------------------------- the measure tool

export interface MeasurePt {
  x: number
  y: number
  z: number
  /** set when the click landed on an operative (the point is its base centre) */
  opId?: string
}

export interface SightFacts {
  visible: boolean
  inCover: boolean
  obscured: boolean
  forcedChoice: boolean
}

export interface MeasureResult {
  kind: 'ops' | 'op-point' | 'points'
  labelA: string
  labelB: string
  /** exact straight-line inches (base edge to base edge for operatives) */
  inches: number
  /** the same length in rounded-up whole-inch increments */
  rounded: number
  within1: boolean
  /** mutual-visibility control range (operatives only) */
  inControlRange: boolean | null
  /** can the operative's head see the point (operative to point only) */
  pointVisible: boolean | null
  /** what A sees of B and B of A (operatives only) */
  aSeesB: SightFacts | null
  bSeesA: SightFacts | null
}

const EPS = 1e-6

function facts(state: GameState, from: string, to: string): SightFacts {
  const v = verdictFor(state, from, to)
  return { visible: v.visible, inCover: v.inCover, obscured: v.obscured, forcedChoice: v.forcedChoice }
}

/** Distance and sight between two clicked things. Read-only. */
export function measure(state: GameState, a: MeasurePt, b: MeasurePt): MeasureResult {
  const oa = a.opId ? state.operatives[a.opId] : undefined
  const ob = b.opId ? state.operatives[b.opId] : undefined
  const label = (o: Operative | undefined, p: MeasurePt) => (o ? `${o.name} (${o.id})` : `(${p.x.toFixed(1)}, ${p.z.toFixed(1)})`)
  const base = { labelA: label(oa, a), labelB: label(ob, b) }
  if (oa && ob) {
    const inches = distanceBetween(bodyOf(oa), bodyOf(ob))
    const cr = oa.id !== ob.id && isWithin(bodyOf(oa), bodyOf(ob), 1) && (visible(state, bodyOf(oa), bodyOf(ob), { crMode: true }) || visible(state, bodyOf(ob), bodyOf(oa), { crMode: true }))
    return {
      kind: 'ops',
      ...base,
      inches,
      rounded: Math.ceil(inches - EPS),
      within1: inches <= 1 + EPS,
      inControlRange: cr,
      pointVisible: null,
      aSeesB: oa.id === ob.id ? null : facts(state, oa.id, ob.id),
      bSeesA: oa.id === ob.id ? null : facts(state, ob.id, oa.id),
    }
  }
  const one = oa ?? ob
  if (one) {
    const p = oa ? b : a
    const dx = p.x - one.pos.x
    const dz = p.z - one.pos.z
    const dy = p.y - one.pos.y
    const inches = Math.max(0, Math.hypot(Math.hypot(dx, dz) - one.baseRadius, dy))
    const mark = { id: '__ruler', pos: { x: p.x, y: p.y, z: p.z }, baseRadius: 0.05, height: 0.05 }
    return {
      kind: 'op-point',
      ...base,
      inches,
      rounded: Math.ceil(inches - EPS),
      within1: inches <= 1 + EPS,
      inControlRange: null,
      pointVisible: visible(state, bodyOf(one), mark),
      aSeesB: null,
      bSeesA: null,
    }
  }
  const inches = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z)
  return { kind: 'points', ...base, inches, rounded: Math.ceil(inches - EPS), within1: inches <= 1 + EPS, inControlRange: null, pointVisible: null, aSeesB: null, bSeesA: null }
}

/** Base-to-base distance of two operatives as the engine measures it (used by tests and labels). */
export function operativeGap(state: GameState, aId: string, bId: string): number {
  const a = state.operatives[aId]
  const b = state.operatives[bId]
  return a && b ? baseDistance3D(bodyOf(a), bodyOf(b)) : 0
}
