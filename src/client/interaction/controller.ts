// Board interaction controller: turns hover/click points from the 3D scene into decision answers.
// Deploy and move paths are the two continuous decisions; everything else is chosen from the prompt or by
// clicking an operative. All verdicts come from the engine (`validate`, `planMove`); this file only builds
// candidate actions.
import { act, validate, type Action, type DecisionOption, type GameState, type PendingDecision, type Rejection, type Waypoint } from '@/engine'
import { markerRadius } from '@/engine/state'
import { MAX_WAYPOINTS, moveLimit, planFly, planMove, priceMove, type MoveKind, type MovePlan } from '@/engine/movement'
import { planRoute, warmRoutes } from '../../ai/nav3d'
import { providerCanFly } from '@/engine/team-rules'
import { humanToAct, useGame } from '../store/game'
import { getFormFactor } from '../ui/formFactor'
import { useUi, type Pt, type RouteHover } from '../ui/uiStore'
import { rejectionText } from '../game/labels'
import { pickDisplaySnapshot, usePresentedStore } from '../presentation/presentedStore'
import type { TouchArea } from '../board/touchCamera'
import { useSight } from './sightStore'

const MOVE_KINDS: MoveKind[] = ['reposition', 'dash', 'fallBack', 'charge']

export function isMoveKind(k: string | undefined): k is MoveKind {
  return !!k && (MOVE_KINDS as string[]).includes(k)
}

export interface MovePreview {
  ok: boolean
  plan: MovePlan | null
  rejection: Rejection | null
}

/**
 * The waypoints a move is planned with: the clicked path, or for an oval base with a chosen facing and no path the base
 * turning on the spot (one waypoint at its own position, which the engine reads as a turn).
 */
export function movePathPoints(op: { pos: { x: number; y: number; z: number }; ovalHalfAxis?: number }, waypoints: Waypoint[], facing: number | null): Waypoint[] {
  if (waypoints.length > 0) return waypoints
  return op.ovalHalfAxis && facing !== null ? [{ x: op.pos.x, z: op.pos.z, y: op.pos.y }] : []
}

/** The engine's verdict on a path for the pending move decision. `facing` turns an oval base at the end (radians, +Z = 0). */
export function previewMove(state: GameState, pending: PendingDecision, waypoints: Waypoint[], facing: number | null = null, fly = false): MovePreview {
  const c = pending.constraints
  if (!c || !c.operativeId || !isMoveKind(c.kind)) return { ok: false, plan: null, rejection: null }
  const op = state.operatives[c.operativeId]
  if (!op) return { ok: false, plan: null, rejection: null }
  const pts = movePathPoints(op, waypoints, facing)
  if (pts.length === 0) return { ok: false, plan: null, rejection: null }
  const turn = op.ovalHalfAxis && facing !== null ? facing : undefined
  const r = fly ? planFly(state, op, c.kind, pts.slice(-1), c.counteract === true, undefined, undefined, turn) : planMove(state, op, c.kind, pts, c.counteract === true, undefined, undefined, turn)
  return r.ok ? { ok: true, plan: r, rejection: null } : { ok: false, plan: null, rejection: r.rejection }
}

/** The movement range for the next increment: the centre it starts from, the inches left, and a circle of that radius. */
export interface MoveReach {
  centre: { x: number; y: number; z: number }
  left: number
  points: { x: number; z: number }[]
}

const REACH_SEGMENTS = 96

/**
 * The movement range for the next increment of a move path: a plain circle of the inches left around the end of the
 * committed path (around the operative before the first click), drawn as if there were no terrain. Walls, bases and
 * control range still decide whether a particular step is legal; that verdict is the engine's (`previewMove`), shown
 * on the hovered step. Null when there is nothing left to show.
 */
export function moveReach(state: GameState, pending: PendingDecision, waypoints: Waypoint[], facing: number | null = null, fly = false): MoveReach | null {
  const c = pending.constraints
  if (!c || !c.operativeId || !isMoveKind(c.kind)) return null
  const op = state.operatives[c.operativeId]
  if (!op) return null
  let centre = { x: op.pos.x, y: op.pos.y, z: op.pos.z }
  let left = c.maxInches ?? Number(pending.context.maxInches ?? 0)
  if (!fly && waypoints.length > 0) {
    const plan = previewMove(state, pending, waypoints, facing, false).plan
    if (!plan) return null
    centre = { x: plan.end.x, y: plan.end.y, z: plan.end.z }
    left = plan.maxInches - plan.cost
  }
  if (!(left >= 0.5)) return null
  const points: { x: number; z: number }[] = []
  for (let i = 0; i < REACH_SEGMENTS; i++) {
    const b = (i / REACH_SEGMENTS) * Math.PI * 2
    points.push({ x: centre.x + Math.sin(b) * left, z: centre.z + Math.cos(b) * left })
  }
  return { centre, left, points }
}

/**
 * The ground disc a one-finger touch must not pan from: exactly the movement range the move preview draws (`moveReach`,
 * the inches left around the end of the planned path, or around the operative before the first step), while a human
 * `move.path` is open and settled. Null otherwise (no decision, a bot's move, the jump step where the overlay hides the
 * range, or the measure tool owning the finger), and then the finger pans as before.
 */
export function moveTouchArea(): TouchArea | null {
  const { pending, state } = useGame.getState()
  const ui = useUi.getState()
  if (!pending || !state || pending.kind !== 'move.path' || !humanToAct() || ui.jumpNext || useSight.getState().measureOn) return null
  const p = usePresentedStore.getState()
  if (p.presentedSeq < p.latestSeq) return null
  const reach = moveReach(state, pending, ui.waypoints, ui.facing, ui.fly)
  return reach ? { x: reach.centre.x, z: reach.centre.z, y: reach.centre.y, r: reach.left } : null
}

/**
 * A flat step clicked beyond the range is pulled back along its own line to the edge of the range, so clicking past the
 * circle moves the full distance instead of being refused. Climbs, drops, jumps and steps inside the range are unchanged.
 */
export function snapStep(state: GameState, pending: PendingDecision, waypoints: Waypoint[], wp: Waypoint, facing: number | null = null, fly = false): Waypoint {
  if (wp.jump) return wp
  const reach = moveReach(state, pending, waypoints, facing, fly)
  if (!reach) return wp
  if (wp.y !== undefined && Math.abs(wp.y - reach.centre.y) > 0.01) return wp
  const dx = wp.x - reach.centre.x
  const dz = wp.z - reach.centre.z
  const len = Math.hypot(dx, dz)
  const max = reach.left - 0.002
  if (len <= max) return wp
  const k = max / len
  return { ...wp, x: round(reach.centre.x + dx * k), z: round(reach.centre.z + dz * k) }
}

/** Can the operative whose move is pending FLY (Jump Pack)? The engine's team rules answer. */
export function canFlyNow(state: GameState, pending: PendingDecision): boolean {
  const c = pending.constraints
  const op = c?.operativeId ? state.operatives[c.operativeId] : undefined
  return !!op && isMoveKind(c?.kind) && providerCanFly(state, op, c!.kind!)
}

/** Bearing from one point to another (radians, +Z = 0, +X = a quarter turn): the engine's facing convention. */
export function bearingTo(from: { x: number; z: number }, to: { x: number; z: number }): number {
  return Math.atan2(to.x - from.x, to.z - from.z)
}

/** Round to the engine's three decimals. */
export function roundFacing(f: number): number {
  return Math.round(f * 1000) / 1000
}

/** Turn `f` by `delta` radians and keep it in (-PI, PI]. */
export function turnedBy(f: number, delta: number): number {
  let r = f + delta
  while (r > Math.PI) r -= Math.PI * 2
  while (r <= -Math.PI) r += Math.PI * 2
  return roundFacing(r)
}

/** Facing that points an oval base at the closest enemy from `from`; null when none is left. */
export function facingTowardEnemy(state: GameState, op: { seat: 'A' | 'B' }, from: { x: number; z: number }): number | null {
  let best: { d: number; f: number } | null = null
  for (const e of Object.values(state.operatives)) {
    if (e.seat === op.seat || e.status !== 'active' || e.wounds <= 0) continue
    const d = Math.hypot(e.pos.x - from.x, e.pos.z - from.z)
    if (!best || d < best.d) best = { d, f: bearingTo(from, e.pos) }
  }
  return best ? roundFacing(best.f) : null
}

/** The operative to deploy next: the user's pick if still in reserve, else the first. */
export function deployChoice(pending: PendingDecision, picked: string | null): string | null {
  const ids = pending.constraints?.operativeIds ?? []
  return picked && ids.includes(picked) ? picked : (ids[0] ?? null)
}

/** Deploy action; an oval base set up at a chosen facing (radians) uses the facing form, round bases ignore it. */
export function deployAction(pending: PendingDecision, opId: string, pt: Pt, facing: number | null = null): Action {
  if (facing !== null) return act.deployFacing(pending, opId, round(pt.x), round(pt.z), facing)
  return act.deploy(pending, opId, round(pt.x), round(pt.z), pt.y)
}

/** The facing chosen in the UI for the operative about to be deployed, if it has an oval base. */
function deployFacingFor(state: GameState, opId: string, ui: { facing: number | null }): number | null {
  return state.operatives[opId]?.ovalHalfAxis ? ui.facing : null
}

function round(n: number): number {
  return Math.round(n * 1000) / 1000
}

export interface SpotOption {
  id: string
  x: number
  z: number
}

/** Decisions answered by clicking one of a list of board spots: objective placement and spot-style ability choices. */
export function spotOptions(pending: PendingDecision | null): SpotOption[] {
  if (!pending) return []
  if (pending.kind !== 'setup.objective' && pending.kind !== 'ability.choice') return []
  const out: SpotOption[] = []
  for (const o of pending.options ?? []) {
    const p = o.action.payload as { x?: unknown; z?: unknown }
    const d = o.data ?? {}
    const x = typeof p.x === 'number' ? p.x : typeof d.x === 'number' ? d.x : null
    const z = typeof p.z === 'number' ? p.z : typeof d.z === 'number' ? d.z : null
    if (x !== null && z !== null) out.push({ id: o.id, x, z })
  }
  return out
}

/** The spot closest to a board point, if one lies within `maxDist` inches. */
export function nearestSpot(spots: SpotOption[], pt: { x: number; z: number }, maxDist: number): SpotOption | null {
  let best: SpotOption | null = null
  let bd = maxDist
  for (const s of spots) {
    const d = Math.hypot(s.x - pt.x, s.z - pt.z)
    if (d <= bd) {
      bd = d
      best = s
    }
  }
  return best
}

const SPOT_REACH: Record<string, number> = { 'setup.objective': 3, 'ability.choice': 1.6 }

/** The answer for a free-position placement (marker.place, setup.equipMarker) at a board point. */
export function placementAction(pending: PendingDecision, pt: { x: number; z: number }): Action | null {
  const x = round(pt.x)
  const z = round(pt.z)
  if (pending.kind === 'marker.place') return { type: 'marker.place', seat: pending.seat, decisionId: pending.id, payload: { x, z } }
  if (pending.kind === 'setup.equipMarker') {
    const yaw = (pending.context.suggestion as { yaw?: number } | undefined)?.yaw
    return { type: 'setup.equipMarker', seat: pending.seat, decisionId: pending.id, payload: yaw === undefined ? { x, z } : { x, z, yaw } }
  }
  return null
}

/** Radius of the marker being placed (for the ghost), in inches. */
export function placedMarkerRadius(state: GameState, pending: PendingDecision): number {
  if (pending.kind === 'marker.place') {
    const m = state.markers.find((k) => k.id === pending.context.markerId)
    return m ? markerRadius(m) : 0.4
  }
  return markerRadius({ kind: 'equipment' })
}

// ---------------------------------------------------------------- routed move steps

/** Shift held at the last pointer or key event: a click then lays one straight step instead of a routed path. */
let shiftDown = false
if (typeof window !== 'undefined') {
  const mark = (e: PointerEvent | KeyboardEvent) => {
    shiftDown = e.shiftKey
  }
  for (const t of ['pointerdown', 'pointermove', 'keydown', 'keyup'] as const) window.addEventListener(t, mark as EventListener, true)
}

/** Does the next board click lay a straight step (Shift, the touch Straight toggle, Jump next, FLY) rather than a route? */
export function straightMode(ui: { straight: boolean; jumpNext: boolean; fly: boolean } = useUi.getState()): boolean {
  return shiftDown || ui.straight || ui.jumpNext || ui.fly
}

export type RouteLeg =
  | { ok: true; leg: Waypoint[]; plan: MovePlan }
  | { ok: false; reason: 'too-far'; needed: number; left: number; leg: Waypoint[] }
  | { ok: false; reason: 'unreachable' }

/** The operative standing at the end of the planned path (cached, so repeated taps reuse the planner's caches). */
const ghosts = new WeakMap<GameState, Map<string, GameState>>()
function ghostAt(state: GameState, opId: string, end: { x: number; y: number; z: number }, facing: number): GameState {
  let byKey = ghosts.get(state)
  if (!byKey) ghosts.set(state, (byKey = new Map()))
  const key = `${opId}|${end.x},${end.y},${end.z}|${facing}`
  let g = byKey.get(key)
  if (!g) {
    const op = state.operatives[opId]!
    g = { ...state, operatives: { ...state.operatives, [opId]: { ...op, pos: { ...end }, facing } } }
    byKey.set(key, g)
  }
  return g
}

/**
 * The cheapest legal route (`planRoute`) from the end of the planned path to a board point, priced by the engine as part
 * of the whole move. `enemyId`: a Charge aimed at that enemy, ending at the closest legal spot in its control range.
 * Null when routing does not apply (no move decision, or the planned path so far cannot be extended).
 */
export function routeLeg(state: GameState, pending: PendingDecision, waypoints: Waypoint[], target: Pt, facing: number | null = null, enemyId?: string, withPath = false): RouteLeg | null {
  const c = pending.constraints
  if (!c?.operativeId || !isMoveKind(c.kind)) return null
  const op = state.operatives[c.operativeId]
  if (!op) return null
  const kind = c.kind
  const counteract = c.counteract === true
  const turn = op.ovalHalfAxis && facing !== null ? facing : undefined
  const total = c.maxInches ?? moveLimit(op, kind, counteract, state)
  let from = state
  let used = 0
  if (waypoints.length > 0) {
    // the path so far as terrain and placement see it (its control-range verdict belongs to the whole move)
    const base = planMove(state, op, kind, waypoints, counteract, 999, undefined, undefined, true)
    if (!base.ok) return null
    used = base.cost
    from = ghostAt(state, op.id, base.end, base.facing)
  }
  const left = Math.max(0, total - used)
  const endWithin = c.mustEndInControlRangeOfId ?? enemyId
  const targets: Pt[] = [target]
  if (enemyId) {
    const e = state.operatives[enemyId]
    const me = from.operatives[op.id]!
    if (!e) return null
    targets.length = 0
    const d = e.baseRadius + (e.ovalHalfAxis ?? 0) + op.baseRadius + 0.4
    const toward = Math.atan2(me.pos.x - e.pos.x, me.pos.z - e.pos.z)
    for (const k of [0, 1, -1, 2, -2, 3, -3, 4]) {
      const a = toward + (k * Math.PI) / 4
      targets.push({ x: e.pos.x + Math.sin(a) * d, y: e.pos.y, z: e.pos.z + Math.cos(a) * d })
    }
  }
  let best: { leg: Waypoint[]; plan: MovePlan } | null = null
  let far: { needed: number; leg: Waypoint[] } | null = null
  for (const t of targets) {
    const r = planRoute(from, op.id, kind, t, { counteract, limitOverride: left, endWithinCrOf: endWithin, allowFly: false, snapRadius: enemyId ? 0.75 : 1, withPath })
    if (r.ok) {
      const all = [...waypoints, ...r.waypoints]
      if (all.length > MAX_WAYPOINTS) continue
      const plan = planMove(state, op, kind, all, counteract, c.maxInches, c.mustEndInControlRangeOfId, turn)
      if (plan.ok) {
        if (!best || plan.cost < best.plan.cost) best = { leg: r.waypoints, plan }
      } else if (plan.rejection.code === 'E_OUT_OF_RANGE') {
        const priced = priceMove(state, op, kind, all, counteract, c.maxInches, c.mustEndInControlRangeOfId)
        if (priced.ok && (!far || priced.cost - used < far.needed)) far = { needed: priced.cost - used, leg: r.waypoints }
      }
    } else if (r.reason === 'too-far' && (!far || r.needed < far.needed)) far = { needed: r.needed, leg: r.path ?? [] }
    if (best && !enemyId) break
  }
  if (best) return { ok: true, leg: best.leg, plan: best.plan }
  if (far) return { ok: false, reason: 'too-far', needed: far.needed, left, leg: far.leg }
  return { ok: false, reason: 'unreachable' }
}

/** What the note by the move buttons says after a tap the router could not plan. Numbers are the engine's. */
export function routeNoteText(r: RouteLeg): string | null {
  if (r.ok) return null
  return r.reason === 'too-far' ? `Needs ${r.needed}″, only ${r.left}″ left` : 'No legal route there'
}

/** Append a routed leg as one undo unit, or leave the path as it is and say why. True when the path grew. */
function applyLeg(r: RouteLeg): boolean {
  const ui = useUi.getState()
  if (!r.ok) {
    useUi.setState({ routeNote: routeNoteText(r) })
    return false
  }
  useUi.setState({ waypoints: [...ui.waypoints, ...r.leg], legStarts: [...ui.legStarts.filter((i) => i < ui.waypoints.length), ui.waypoints.length], routeNote: null, routeHover: null, jumpNext: false })
  return true
}

/** Tap an enemy during a Charge: route into its control range (the closest legal spot). True when the tap was used. */
export function chargeAt(enemyId: string): boolean {
  const { pending, state } = useGame.getState()
  const ui = useUi.getState()
  if (!pending || !state || pending.kind !== 'move.path' || !humanToAct() || pending.constraints?.kind !== 'charge' || ui.fly) return false
  const e = state.operatives[enemyId]
  const op = state.operatives[pending.constraints.operativeId ?? '']
  if (!e || !op || e.seat === op.seat) return false
  const turn = ui.facing !== null && op.ovalHalfAxis ? ui.facing : null
  const r = routeLeg(state, pending, ui.waypoints, { x: e.pos.x, y: e.pos.y, z: e.pos.z }, turn, enemyId)
  if (!r) return false
  applyLeg(r)
  return true
}

/** Build the router's grids for the mover while the browser is idle, so the first tap answers fast on a phone. */
let warmedFor: string | undefined
useGame.subscribe((g) => {
  const p = g.pending
  if (!p || p.kind !== 'move.path' || p.id === warmedFor || !g.state) return
  warmedFor = p.id
  const id = p.constraints?.operativeId
  const st = g.state
  if (!id || !humanToAct()) return
  const run = () => {
    try {
      warmRoutes(st, id)
    } catch {
      // only a speed-up: the first tap builds them anyway
    }
  }
  const ric = (globalThis as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback
  if (ric) ric(run, { timeout: 1500 })
  else setTimeout(run, 50)
})

/** The routed hover preview, planned at most once per animation frame for the latest hovered point. */
let hoverQueued: Pt | null = null
let hoverFrame = false
export function routeHoverFor(state: GameState, pending: PendingDecision, ui: { waypoints: Waypoint[]; facing: number | null }, pt: Pt): RouteHover {
  const op = state.operatives[pending.constraints?.operativeId ?? '']
  const turn = ui.facing !== null && op?.ovalHalfAxis ? ui.facing : null
  const r = routeLeg(state, pending, ui.waypoints, pt, turn, undefined, true)
  if (!r) return { at: pt, leg: [], ok: false, text: 'No legal route there' }
  if (r.ok) return { at: pt, leg: r.leg, ok: true, text: `total ${r.plan.cost}/${r.plan.maxInches}″` }
  return { at: pt, leg: r.reason === 'too-far' ? r.leg : [], ok: false, text: r.reason === 'too-far' ? `needs ${r.needed}″ (${r.left}″ left)` : 'No legal route there' }
}

function queueRouteHover(pt: Pt): void {
  hoverQueued = pt
  if (hoverFrame) return
  hoverFrame = true
  const raf = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (f: () => void) => setTimeout(f, 16)
  raf(() => {
    hoverFrame = false
    const at = hoverQueued
    hoverQueued = null
    const { pending, state } = useGame.getState()
    const ui = useUi.getState()
    if (!at || !pending || !state || pending.kind !== 'move.path' || !humanToAct() || straightMode(ui) || !ui.hover) return
    useUi.setState({ routeHover: routeHoverFor(state, pending, ui, at) })
  })
}

export function hoverPoint(pt: Pt | null): void {
  const ui = useUi.getState()
  if (!pt) {
    if (ui.hover || ui.hoverSpot || ui.routeHover) ui.set({ hover: null, hoverNote: null, hoverSpot: null, routeHover: null })
    return
  }
  const { pending, state } = useGame.getState()
  if (pending?.kind === 'move.path' && state && humanToAct()) {
    if (straightMode(ui)) {
      if (ui.routeHover) useUi.setState({ routeHover: null })
    } else queueRouteHover(pt)
  }
  let note: { ok: boolean; text: string } | null = null
  if (pending?.kind === 'setup.deploy' && state && humanToAct()) {
    const id = deployChoice(pending, ui.deployOp)
    if (id) {
      const rej = validate(state, deployAction(pending, id, pt, deployFacingFor(state, id, ui)))
      note = rej ? { ok: false, text: rejectionText(rej) } : { ok: true, text: 'Legal spot: click to deploy.' }
    }
  }
  let spot: string | null = null
  if (pending && state && humanToAct()) {
    const spots = spotOptions(pending)
    if (spots.length > 0) spot = nearestSpot(spots, pt, SPOT_REACH[pending.kind] ?? 2)?.id ?? null
    const place = placementAction(pending, pt)
    if (place) {
      const rej = validate(state, place)
      note = rej ? { ok: false, text: rejectionText(rej) } : { ok: true, text: 'Legal spot: click to place.' }
    }
  }
  useUi.setState({ hover: pt, hoverNote: note, hoverSpot: spot ?? (ui.hoverSpot === 'suggestion' ? 'suggestion' : null) })
}

export function clickPoint(pt: Pt, opts: { straight?: boolean } = {}): void {
  // the measure tool takes every board click (read-only: it never reaches the engine, even between decisions or on a bot turn)
  if (useSight.getState().measureOn) {
    useSight.getState().measureClick({ x: round(pt.x), y: pt.y, z: round(pt.z) })
    return
  }
  const { pending, state, dispatch } = useGame.getState()
  const ui = useUi.getState()
  if (!pending || !state || !humanToAct()) {
    ui.set({ selectedOp: null })
    return
  }
  if (pending.kind === 'setup.deploy') {
    const id = deployChoice(pending, ui.deployOp)
    if (id) dispatch(deployAction(pending, id, pt, deployFacingFor(state, id, ui)))
    return
  }
  if (pending.kind === 'setup.objective' || pending.kind === 'ability.choice') {
    const hit = nearestSpot(spotOptions(pending), pt, SPOT_REACH[pending.kind] ?? 2)
    if (hit) useGame.getState().choose(hit.id)
    return
  }
  if (pending.kind === 'marker.place' || pending.kind === 'setup.equipMarker') {
    const a = placementAction(pending, pt)
    if (a) dispatch(a)
    return
  }
  if (pending.kind === 'move.path') {
    if (ui.waypoints.length >= 12) return
    const wp: Waypoint = { x: round(pt.x), z: round(pt.z), y: pt.y }
    // FLY: one set-up point, replaced by each click
    if (ui.fly) {
      useUi.setState({ waypoints: [wp] })
      return
    }
    const turn = ui.facing !== null && state.operatives[pending.constraints?.operativeId ?? '']?.ovalHalfAxis ? ui.facing : null
    // a tap routes the cheapest legal path there, around and over terrain; Shift / Straight / Jump next lay one straight step
    if (!(opts.straight ?? straightMode(ui))) {
      const r = routeLeg(state, pending, ui.waypoints, pt, turn)
      if (r) {
        applyLeg(r)
        return
      }
    }
    if (ui.jumpNext) wp.jump = true
    useUi.setState({ waypoints: [...ui.waypoints, snapStep(state, pending, ui.waypoints, wp, turn)], legStarts: [...ui.legStarts.filter((i) => i < ui.waypoints.length), ui.waypoints.length], jumpNext: false, routeNote: null, routeHover: null })
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

/** The activation option for an operative at a `firefight.activate` decision: a plain activation first, else its counteract. */
export function activateOption(pending: PendingDecision | null, id: string): DecisionOption | null {
  if (!pending || pending.kind !== 'firefight.activate') return null
  const hits = (pending.options ?? []).filter((o) => (o.action.payload as { operativeId?: string; alternative?: number }).operativeId === id && (o.action.payload as { alternative?: number }).alternative === undefined)
  return hits.find((o) => !(o.action.payload as { counteract?: boolean }).counteract) ?? hits[0] ?? null
}

/** The operative waiting for a confirm at the open activate decision, or null (a stale or illegal pick never counts). */
export function pendingPick(pending: PendingDecision | null = useGame.getState().pending, picked: string | null = useUi.getState().pendingActivate): string | null {
  return picked && activateOption(pending, picked) ? picked : null
}

/** Touch: send the activation the player confirmed. Null when there is no pick to confirm. */
export function confirmActivate(): Rejection | null {
  const { pending, choose } = useGame.getState()
  const id = pendingPick(pending)
  const opt = id ? activateOption(pending, id) : null
  if (!opt) return null
  useUi.setState({ pendingActivate: null })
  return choose(opt.id)
}

export function cancelActivate(): void {
  useUi.setState({ pendingActivate: null })
}

// A pick belongs to one decision: drop it as soon as the open decision changes (or goes away).
let lastDecision: string | undefined
useGame.subscribe((g) => {
  const id = g.pending?.id
  if (id === lastDecision) return
  lastDecision = id
  if (useUi.getState().pendingActivate !== null) useUi.setState({ pendingActivate: null })
})

/**
 * Clicking an operative: choose it when it is an option of the pending decision (activation, shoot/fight target), otherwise just select it for the card.
 * On touch an activation is only picked: the player confirms it in the prompt (`confirmActivate`); tapping another legal operative switches the pick.
 */
export function clickOperative(id: string, opts: { touch?: boolean } = {}): void {
  if (useSight.getState().measureOn) {
    const p = usePresentedStore.getState()
    const op = pickDisplaySnapshot(p.snapshots, p.presentedSeq)?.operatives[id]
    if (op) useSight.getState().measureClick({ x: op.pos.x, y: op.pos.y, z: op.pos.z, opId: id })
    return
  }
  const { pending, choose } = useGame.getState()
  const ui = useUi.getState()
  // a Charge being laid: tapping an enemy routes into its control range
  if (pending?.kind === 'move.path' && chargeAt(id)) return
  ui.set({ selectedOp: id })
  if (!pending || !humanToAct()) return
  if (pending.kind === 'firefight.activate') {
    if (opts.touch ?? getFormFactor().touch) {
      if (activateOption(pending, id)) ui.set({ pendingActivate: id })
      return
    }
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
  if (pending?.kind !== 'move.path') return null
  const state = useGame.getState().state
  const op = state && pending.constraints?.operativeId ? state.operatives[pending.constraints.operativeId] : undefined
  const turn = op?.ovalHalfAxis && ui.facing !== null ? ui.facing : null
  const pts = op ? movePathPoints(op, ui.waypoints, turn) : ui.waypoints
  if (pts.length === 0) return null
  let action = turn !== null ? act.pathFacing(pending, pts, turn) : act.path(pending, pts)
  if (ui.fly) {
    const f = act.fly(pending, pts[pts.length - 1]!)
    action = turn !== null ? { ...f, payload: { ...f.payload, facing: turn } } : f
  }
  const rej = dispatch(action)
  if (!rej) ui.resetPath()
  return rej
}

export function cancelPath(): void {
  const { pending, dispatch } = useGame.getState()
  useUi.getState().resetPath()
  if (pending?.kind === 'move.path' && pending.canPass) dispatch(act.pass(pending))
}

/** Undo the last planned step of the move being laid; true when a step was removed. */
export function undoPathStep(): boolean {
  const { pending } = useGame.getState()
  const ui = useUi.getState()
  if (pending?.kind !== 'move.path' || ui.waypoints.length === 0) return false
  // a routed leg is one unit: remove all of it
  const starts = ui.legStarts.filter((i) => i < ui.waypoints.length)
  const from = starts.length > 0 ? starts[starts.length - 1]! : ui.waypoints.length - 1
  useUi.setState({ waypoints: ui.waypoints.slice(0, from), legStarts: starts.slice(0, -1), jumpNext: false, routeNote: null, routeHover: null })
  return true
}

/** The red X of the on-board move buttons: undo the last step, or with nothing planned cancel the move (as the prompt's Cancel does). */
export function undoOrCancelPath(): 'undo' | 'cancel' | null {
  if (useGame.getState().pending?.kind !== 'move.path') return null
  if (undoPathStep()) return 'undo'
  cancelPath()
  return 'cancel'
}

/** What the green check / red X floating by the mover show. Null unless a human seat has a `move.path` open. */
export interface MoveButtons {
  /** the check confirms: the engine accepts the planned path (same legality as the prompt's Confirm) */
  okEnabled: boolean
  /** inches left after the planned path (engine plan), null when the path is empty or not allowed */
  left: number | null
  /** what the X does now: undo the last step, or (no steps) cancel the move */
  x: 'undo' | 'cancel'
  /** a move with nothing planned can only be cancelled when the engine lets the action be passed */
  xEnabled: boolean
  /** where the buttons hang: the planned end, else the last clicked point, else the mover */
  anchor: { x: number; y: number; z: number }
}

export function moveButtons(state: GameState, pending: PendingDecision | null, ui: { waypoints: Waypoint[]; facing: number | null; fly: boolean } = useUi.getState()): MoveButtons | null {
  if (!pending || pending.kind !== 'move.path' || !humanToAct()) return null
  const op = pending.constraints?.operativeId ? state.operatives[pending.constraints.operativeId] : undefined
  if (!op) return null
  const turn = op.ovalHalfAxis && ui.facing !== null ? ui.facing : null
  const plan = previewMove(state, pending, ui.waypoints, turn, ui.fly).plan
  const last = ui.waypoints[ui.waypoints.length - 1]
  const anchor = plan ? plan.end : last ? { x: last.x, y: last.y ?? op.pos.y, z: last.z } : op.pos
  const undo = ui.waypoints.length > 0
  return {
    okEnabled: !!plan,
    left: plan ? plan.maxInches - plan.cost : null,
    x: undo ? 'undo' : 'cancel',
    xEnabled: undo || pending.canPass === true,
    anchor: { x: anchor.x, y: anchor.y, z: anchor.z },
  }
}
