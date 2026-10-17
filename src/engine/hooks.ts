// Hook names, contexts and results (frozen after M2). M2a declares them only; M2b rules modules
// (weapons.ts, abilities.ts, ploys.ts, equipment.ts) register implementations.
import type { Seat } from './types'

export const HOOK_NAMES = [
  'stat.apl',
  'stat.move',
  'stat.hit',
  'stat.save',
  'weapon.rules',
  'target.valid',
  'action.cost',
  'action.available',
  'attack.collected',
  'attack.rolled',
  'attack.retained',
  'defence.collected',
  'defence.rolled',
  'block.allowed',
  'damage.inflicted',
  'activation.start',
  'activation.end',
  'turningPoint.start',
  'turningPoint.end',
  'operative.incapacitated',
] as const

export type HookName = (typeof HOOK_NAMES)[number]

export interface HookContext {
  hook: HookName
  seat: Seat
  operativeId?: string
  targetId?: string
  weaponId?: string
  action?: string
  data?: Record<string, unknown>
}

export interface HookResult {
  /** numeric delta applied to the stat or cost named by the hook */
  delta?: number
  /** set when a rule forbids or allows the thing being asked about */
  allow?: boolean
  reason?: string
  data?: Record<string, unknown>
}

export type HookFn = (ctx: HookContext) => HookResult | null

// TODO(M2b): registry of hook implementations keyed by HookName.
