// Board interaction controller: turns hover/click points from the 3D scene into decision answers.
// Deploy and move paths are the two continuous decisions; everything else is chosen from the prompt or by
// clicking an operative. All verdicts come from the engine (`validate`, `planMove`); this file only builds
// candidate actions.
import { act, validate, type Action, type GameState, type PendingDecision, type Rejection, type Waypoint } from '@/engine'
import { planMove, type MoveKind, type MovePlan } from '@/engine/movement'
import { humanToAct, useGame } from '../store/game'
import { useUi, type Pt } from '../ui/uiStore'
import { rejectionText } from '../game/labels'

const MOVE_KINDS: MoveKind[] = ['reposition', 'dash', 'fallBack', 'charge']

export function isMoveKind(k: string | undefined): k is MoveKind {
  return !!k && (MOVE_KINDS as string[]).includes(k)
}

export interface MovePreview {
  ok: boolean
  plan: MovePlan | null
  rejection: Rejection | null
}

/** The engine's verdict on a path for the pending move decision. */
export function previewMove(state: GameState, pending: PendingDecision, waypoints: Waypoint[]): MovePreview {
  const c = pending.constraints
  if (!c || !c.operativeId || !isMoveKind(c.kind) || waypoints.length === 0) return { ok: false, plan: null, rejection: null }
  const op = state.operatives[c.operativeId]
  if (!op) return { ok: false, plan: null, rejection: null }
  const r = planMove(state, op, c.kind, waypoints, c.counteract === true)
  return r.ok ? { ok: true, plan: r, rejection: null } : { ok: false, plan: null, rejection: r.rejection }
}

/** The operative to deploy next: the user's pick if still in reserve, else the first. */
export function deployChoice(pending: PendingDecision, picked: string | null): string | null {
  const ids = pending.constraints?.operativeIds ?? []
  return picked && ids.includes(picked) ? picked : (ids[0] ?? null)
}

export function deployAction(pending: PendingDecision, opId: string, pt: Pt): Action {
  return act.deploy(pending, opId, round(pt.x), round(pt.z), pt.y)
}

function round(n: number): number {
  return Math.round(n * 1000) / 1000
}

export function hoverPoint(pt: Pt | null): void {
  const ui = useUi.getState()
  if (!pt) {
    if (ui.hover) ui.set({ hover: null, hoverNote: null })
    return
  }
  const { pending, state } = useGame.getState()
  let note: { ok: boolean; text: string } | null = null
  if (pending?.kind === 'setup.deploy' && state && humanToAct()) {
    const id = deployChoice(pending, ui.deployOp)
    if (id) {
      const rej = validate(state, deployAction(pending, id, pt))
      note = rej ? { ok: false, text: rejectionText(rej) } : { ok: true, text: 'Legal spot: click to deploy.' }
    }
  }
  useUi.setState({ hover: pt, hoverNote: note })
}

export function clickPoint(pt: Pt): void {
  const { pending, state, dispatch } = useGame.getState()
  const ui = useUi.getState()
  if (!pending || !state || !humanToAct()) {
    ui.set({ selectedOp: null })
    return
  }
  if (pending.kind === 'setup.deploy') {
    const id = deployChoice(pending, ui.deployOp)
    if (id) dispatch(deployAction(pending, id, pt))
    return
  }
  if (pending.kind === 'move.path') {
    if (ui.waypoints.length >= 12) return
    const wp: Waypoint = { x: round(pt.x), z: round(pt.z), y: pt.y }
    if (ui.jumpNext) wp.jump = true
    useUi.setState({ waypoints: [...ui.waypoints, wp], jumpNext: false })
    return
  }
  ui.set({ selectedOp: null })
}

/** The operative id an option refers to (target / operative payload fields), if any. */
export function optionOperative(o: { action: { payload: unknown }; data?: Record<string, unknown> }): string | null {
  const p = o.action.payload as Record<string, unknown>
  for (const k of ['targetId', 'target', 'operativeId', 'defenderId']) {
    const v = p[k] ?? o.data?.[k]
    if (typeof v === 'string') return v
  }
  return null
}

/** Clicking an operative: choose it when it is an option of the pending decision (activation, shoot/fight target), otherwise just select it for the card. */
export function clickOperative(id: string): void {
  const { pending, choose } = useGame.getState()
  const ui = useUi.getState()
  ui.set({ selectedOp: id })
  if (!pending || !humanToAct()) return
  if (pending.kind === 'firefight.activate') {
    const opt = pending.options?.find((o) => {
      const p = o.action.payload as { operativeId?: string; counteract?: boolean }
      return p.operativeId === id && !p.counteract
    })
    if (opt) choose(opt.id)
    return
  }
  // target-style decisions the engine adds later: exactly one option naming the clicked operative picks it
  if (pending.kind === 'shoot.target' || pending.kind === 'fight.target' || pending.kind === 'guard.interrupt') {
    const hits = (pending.options ?? []).filter((o) => optionOperative(o) === id)
    if (hits.length === 1) choose(hits[0]!.id)
  }
}

export function confirmPath(): Rejection | null {
  const { pending, dispatch } = useGame.getState()
  const ui = useUi.getState()
  if (pending?.kind !== 'move.path' || ui.waypoints.length === 0) return null
  const rej = dispatch(act.path(pending, ui.waypoints))
  if (!rej) ui.resetPath()
  return rej
}

export function cancelPath(): void {
  const { pending, dispatch } = useGame.getState()
  useUi.getState().resetPath()
  if (pending?.kind === 'move.path' && pending.canPass) dispatch(act.pass(pending))
}
