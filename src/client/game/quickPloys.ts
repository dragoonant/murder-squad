// "Quick" firefight ploys: optional before/after-an-action ploys that are offered in a ploy window after (almost)
// every action but are used rarely (Adjust Doctrine). For a human seat the window passes itself and the action bar
// shows a small button instead; pressing it arms the NEXT such window, which then opens normally. Which ploys behave
// this way is the table below, keyed by ploy id, so other teams' equivalents are one row each. Eligibility and CP cost
// are never computed here: the button reads the engine's own offers (`offersFor`), the window reads the decision's options.
import type { GameState, PendingDecision, Seat } from '@/engine'
import { offersFor } from '@/engine/ploys'

export interface QuickPloy {
  /** short name on the action-bar button */
  name: string
  /** the ploy-window ids in which it is handled this way */
  windows: readonly string[]
}

export const QUICK_PLOYS: Record<string, QuickPloy> = {
  'aod.p.adjust-doctrine': { name: 'Adjust Doctrine', windows: ['firefight.actionDeclared', 'firefight.actionEnded'] },
}

/** The armed one-shot: this seat's next window offering this ploy is not auto-passed. */
export interface ArmedPloy {
  ployId: string
  seat: Seat
}

function ployIdOf(o: { action: { payload: unknown } }): string | null {
  const id = (o.action.payload as { ployId?: unknown }).ployId
  return typeof id === 'string' ? id : null
}

/**
 * What to do with an open decision: 'pass' answers a quick-ploy window for the seat; 'armed' lets one through because the
 * player pressed the action-bar button; null for every other decision (including windows that offer anything else too,
 * or that cannot be passed).
 */
export function quickWindowVerdict(pending: PendingDecision | null, armed: ArmedPloy | null): 'pass' | 'armed' | null {
  if (!pending || pending.kind !== 'ploy.firefight' || !pending.canPass) return null
  const opts = pending.options ?? []
  if (opts.length === 0) return null
  const ids = opts.map(ployIdOf)
  for (const id of ids) {
    const q = id ? QUICK_PLOYS[id] : undefined
    if (!q || !q.windows.includes(pending.window)) return null
  }
  return armed && armed.seat === pending.seat && ids.includes(armed.ployId) ? 'armed' : 'pass'
}

export interface QuickPloyButton {
  ployId: string
  name: string
  /** the lowest CP cost among the engine's offers of this ploy right now */
  cost: number
}

/**
 * The quick ploys the engine would offer the active seat after this action, as the action bar's buttons. Read from
 * `offersFor` for the `firefight.actionEnded` timing with the same window info the engine builds, so eligibility
 * (doctrine chosen this turning point, CP, Heroic Leader's free use) is the engine's verdict.
 */
export function quickPloyButtons(state: GameState, pending: PendingDecision): QuickPloyButton[] {
  if (pending.kind !== 'firefight.action') return []
  const ctx = pending.context as { operativeId?: string; counteract?: boolean; performed?: string[] }
  if (!ctx.operativeId) return []
  const last = ctx.performed?.[ctx.performed.length - 1]
  const info = { window: 'firefight.actionEnded', subjectId: ctx.operativeId, counteracting: ctx.counteract === true, ...(last ? { action: last } : {}) }
  let offers: ReturnType<typeof offersFor>
  try {
    offers = offersFor(state, pending.seat, 'firefight.actionEnded', info)
  } catch {
    return []
  }
  const out: QuickPloyButton[] = []
  for (const o of offers) {
    const q = QUICK_PLOYS[o.ployId]
    if (!q) continue
    const hit = out.find((b) => b.ployId === o.ployId)
    if (hit) hit.cost = Math.min(hit.cost, o.cost)
    else out.push({ ployId: o.ployId, name: q.name, cost: o.cost })
  }
  return out
}
