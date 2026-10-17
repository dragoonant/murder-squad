// query.*: every number the UI shows comes from here - visibility, cover/obscured verdicts, control
// range, marker control by APL, distances, odds. The client never computes a rules number itself.
import { dieOdds, poolDistribution, type DieOdds, type PoolOutcome } from './dice'
import { bodyOf, enemiesInControlRange, inControlRange, markerInControlRange, distanceBetween } from './measure'
import { targetVerdict, visible, type TargetVerdict } from './los'
import { activeOps, effectiveApl, getOp } from './state'
import type { GameState, Marker, Seat } from './types'

export { targetVerdict, visible }
export type { TargetVerdict }
export { inControlRange, distanceBetween }

export function isVisible(state: GameState, viewerId: string, targetId: string): boolean {
  return visible(state, bodyOf(getOp(state, viewerId)), bodyOf(getOp(state, targetId)))
}

export function verdictFor(state: GameState, attackerId: string, targetId: string): TargetVerdict {
  const t = getOp(state, targetId)
  return targetVerdict(state, bodyOf(getOp(state, attackerId)), { ...bodyOf(t), order: t.order })
}

export function operativeDistance(state: GameState, aId: string, bId: string): number {
  return distanceBetween(bodyOf(getOp(state, aId)), bodyOf(getOp(state, bId)))
}

export function inControlRangeOf(state: GameState, aId: string, bId: string): boolean {
  return inControlRange(state, bodyOf(getOp(state, aId)), bodyOf(getOp(state, bId)))
}

export function enemiesInCr(state: GameState, opId: string): string[] {
  const op = getOp(state, opId)
  return enemiesInControlRange(state, op, op.seat).map((o) => o.id)
}

export interface MarkerControl {
  contesting: Record<Seat, string[]>
  apl: Record<Seat, number>
  controller: Seat | null
}

/**
 * Contest and control (R-8.5, R-8.6): an operative contests a marker in its control range; the side
 * whose contesting operatives have the strictly greater total APL controls it. A carrier alone
 * contests and controls its marker.
 */
export function markerControl(state: GameState, marker: Marker): MarkerControl {
  const contesting: Record<Seat, string[]> = { A: [], B: [] }
  const apl: Record<Seat, number> = { A: 0, B: 0 }
  if (marker.carriedBy) {
    const carrier = state.operatives[marker.carriedBy]
    if (carrier && carrier.status === 'active') {
      contesting[carrier.seat].push(carrier.id)
      apl[carrier.seat] = effectiveApl(carrier)
      return { contesting, apl, controller: carrier.seat }
    }
  }
  for (const op of activeOps(state)) {
    if (markerInControlRange(state, bodyOf(op), marker)) {
      contesting[op.seat].push(op.id)
      apl[op.seat] += effectiveApl(op)
    }
  }
  const controller: Seat | null = apl.A > apl.B ? 'A' : apl.B > apl.A ? 'B' : null
  return { contesting, apl, controller }
}

/** Exact odds for one die against a Hit or Save target. */
export function hitOdds(target: number, lethal?: number): DieOdds {
  return dieOdds(target, lethal)
}

export function successDistribution(dice: number, target: number, lethal?: number): PoolOutcome[] {
  return poolDistribution(dice, dieOdds(target, lethal))
}

export interface ExpectedDamage {
  /** true until M2b implements weapon rules, cover saves and blocking */
  todo: true
}

/** TODO(M2b): expected damage, kill odds and per-weapon summaries once the shoot sequence exists. */
export function expectedDamage(_state: GameState, _attackerId: string, _targetId: string, _weaponId: string): ExpectedDamage {
  return { todo: true }
}
