// 3D route planner: tap a destination and get the cheapest legal path there, over the killzone floor and every terrain
// surface the base can stand on, with climbs, drops, jumps and doorways priced the way the movement rules price them
// (R-4.1, R-11.6, R-12). The planner only proposes: every route it returns has been validated and priced by the engine
// (`planMove`; `priceMove` for a route beyond the move limit). Shared by the client (tap-to-move) and, later, the AI.
//
// Graph: one 0.5" grid per surface height (the floor plus every walkable terrain height). A cell is passable at a height
// when the base fits there by the engine's own terrain tests (`walkableSolidAt` under the centre above the floor,
// `discBlockedBy`, doorways open). Same-height cells join 8-ways; climbs (up to 3"), drops and jumps (from Vantage more
// than 2" up, up to 4" across) join heights; this part is cached per map and base. Enemy bases and the control ranges a
// move may not enter are a per-decision layer. Dijkstra on rules cost (length, climb max(2", rounded up), drop beyond
// 2", +1" per Accessible part, plus an allowance for the rounding an extra increment costs), then the cell chain is
// string-pulled to as few straight increments as the rules allow (a climb or drop may start or end anywhere along a
// straight line, as in the engine), waypoints are nudged to shave whole inches off the per-increment rounding, and
// the engine has the final word on legality and price.
import { EPS, dist2, incrementCost, pointInPolygon, round3, segmentPolygonIntervals } from '@/engine/geometry'
import { discCentres, footprintDistToPolygon, footprintOf, footprintsOverlap, halfLength, type Footprint } from '@/engine/footprint'
import { bodyOf, inControlRange, type Body } from '@/engine/measure'
import { chargeFromControlRange } from '@/engine/abilities'
import {
  CLIMB_REACH,
  FREE_DROP,
  JUMP_MAX,
  JUMP_MIN_HEIGHT,
  MAX_WAYPOINTS,
  MIN_CLIMB,
  moveLimit,
  planFly,
  planMove,
  priceMove,
  type MoveKind,
} from '@/engine/movement'
import { providerCanFly, providerMoveRestrictions } from '@/engine/team-rules'
import { enemiesOf, friendsOf } from '@/engine/state'
import { discBlockedBy, insideKillzone, obstructs, placementProblem, terrainOf, type Solid, type TerrainIndex } from '@/engine/terrain'
import type { GameState, MapDef, Operative, Vec2, Vec3, Waypoint } from '@/engine/types'

const CELL = 0.5
const STEP = 0.25
const DIAG = Math.SQRT2 * CELL
const K_WALK = 0
const K_CLIMB = 1
const K_DROP = 2
const K_JUMP = 3

export interface RouteOpts {
  counteract?: boolean
  /** a smaller limit set by the action (Move With Barricade) */
  limitOverride?: number
  /** a Charge that must end in this enemy's control range, or a move that must end in this friend's */
  endWithinCrOf?: string
  /** how far (inches) the tapped spot may be moved to the nearest legal standing spot; default 1 */
  snapRadius?: number
  /** consider a FLY set-up when the operative can FLY (default true) */
  allowFly?: boolean
}

export type RouteResult =
  | { ok: true; waypoints: Waypoint[]; cost: number; limit: number; end: Vec3; fly?: boolean }
  | { ok: false; reason: 'too-far'; needed: number; limit: number }
  | { ok: false; reason: 'unreachable' }

// ---------------------------------------------------------------------------
// Static geometry per map and base (cached)
// ---------------------------------------------------------------------------

interface Geo {
  idx: TerrainIndex
  r: number
  h: number
  axis: Vec2 | undefined
  /** extra clearance (inches) for the conservative retry */
  margin: number
  /** reach of the footprint from its centre (radius, or half the long axis of an oval) */
  reach: number
  nx: number
  nz: number
  x0: number
  z0: number
  N: number
  ys: number[]
  /** solids walkable at each height, in terrain order (so the first hit matches `walkableSolidAt`) */
  surf: Solid[][]
  accessibles: Solid[]
  pass: Uint8Array
  acc: Uint8Array
  tStart: Int32Array
  tTo: Int32Array
  tCost: Float32Array
  tKind: Uint8Array
  tIns: Uint8Array
}

const geoCache = new WeakMap<MapDef, Map<string, Geo>>()

function geoFor(map: MapDef, r: number, h: number, axis: Vec2 | undefined, margin: number): Geo {
  let byKey = geoCache.get(map)
  if (!byKey) geoCache.set(map, (byKey = new Map()))
  const key = `${round3(r)}|${round3(h)}|${axis ? `${round3(axis.x)},${round3(axis.z)}` : '-'}|${margin}`
  const hit = byKey.get(key)
  if (hit) return hit
  const g = buildGeo(map, r, h, axis, margin)
  byKey.set(key, g)
  return g
}

function centre(g: Geo, c: number): Vec2 {
  return { x: g.x0 + (c % g.nx) * CELL, z: g.z0 + Math.floor(c / g.nx) * CELL }
}

function cellOf(g: Geo, p: Vec2): number {
  const i = Math.max(0, Math.min(g.nx - 1, Math.round((p.x - g.x0) / CELL)))
  const j = Math.max(0, Math.min(g.nz - 1, Math.round((p.z - g.z0) / CELL)))
  return j * g.nx + i
}

function fpAt(g: Geo, p: Vec2): Footprint {
  return g.axis ? { pos: p, baseRadius: g.r, axis: g.axis } : { pos: p, baseRadius: g.r }
}

/** The solid under p with a walkable surface at level li (the engine's `walkableSolidAt`), null on the floor. */
function surfaceAt(g: Geo, p: Vec2, li: number): Solid | null {
  for (const s of g.surf[li]!) {
    const b = s.bbox
    if (p.x < b.minX - EPS || p.x > b.maxX + EPS || p.z < b.minZ - EPS || p.z > b.maxZ + EPS) continue
    if (pointInPolygon(p, s.polygon)) return s
  }
  return null
}

function solidsContaining(g: Geo, p: Vec2): Set<string> {
  const out = new Set<string>()
  for (const s of g.idx.solids) {
    const b = s.bbox
    if (p.x < b.minX - EPS || p.x > b.maxX + EPS || p.z < b.minZ - EPS || p.z > b.maxZ + EPS) continue
    if (pointInPolygon(p, s.polygon)) out.add(s.partId)
  }
  return out
}

/** Killzone edge and terrain for the base centred on p at height y, as the engine's per-sample check (doorways open). */
function terrainFree(g: Geo, p: Vec2, y: number, skip?: ReadonlySet<string>, prev?: Vec2): boolean {
  const rr = g.r + g.margin
  const fp = fpAt(g, p)
  const discs = discCentres(fp)
  for (const c of discs) if (!insideKillzone(g.idx, c, rr)) return false
  let doorFeatures: Set<string> | undefined
  const pad = g.reach + 0.01
  for (const s of g.accessibles) {
    if (y + 0.01 >= s.top) continue
    const b = s.bbox
    if (p.x < b.minX - pad || p.x > b.maxX + pad || p.z < b.minZ - pad || p.z > b.maxZ + pad) continue
    if (footprintDistToPolygon(fp, s.polygon) <= EPS) (doorFeatures ??= new Set()).add(s.featureId)
  }
  let skipSet = skip
  if (doorFeatures) {
    const ss = new Set(skip ?? [])
    for (const s of g.idx.solids) {
      if (!doorFeatures.has(s.featureId)) continue
      if (!s.accessible && obstructs(s, y, g.r, g.h) && !skip?.has(s.partId)) {
        if (pointInPolygon(p, s.polygon)) return false
        if (prev && segmentPolygonIntervals(prev, p, s.polygon).some(([t0, t1]) => t1 - t0 > EPS)) return false
      }
      ss.add(s.partId)
    }
    skipSet = ss
  }
  for (const c of discs) if (discBlockedBy(g.idx, c, y, rr, g.h, skipSet)) return false
  return true
}

/** A waypoint may end here: the engine's end-of-increment test has no doorway allowance. */
function endFree(g: Geo, p: Vec2, y: number): boolean {
  const rr = g.r + g.margin
  for (const c of discCentres(fpAt(g, p))) if (discBlockedBy(g.idx, c, y, rr, g.h)) return false
  return true
}

type DynCheck = (p: Vec2, y: number) => boolean

function samples(a: Vec2, b: Vec2): number {
  return Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / STEP))
}

function lerp(a: Vec2, b: Vec2, t: number): Vec2 {
  return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t }
}

function walkSeg(g: Geo, a: Vec2, b: Vec2, li: number, dyn?: DynCheck): boolean {
  if (Math.hypot(b.x - a.x, b.z - a.z) < 1e-3) return false
  const y = g.ys[li]!
  const n = samples(a, b)
  let prev = a
  for (let k = 1; k <= n; k++) {
    const p = lerp(a, b, k / n)
    if (li > 0 && !surfaceAt(g, p, li)) return false
    if (!terrainFree(g, p, y, undefined, prev)) return false
    if (dyn && !dyn(p, y)) return false
    prev = p
  }
  return endFree(g, b, y)
}

/** A climb increment (R-12.2), as the engine samples it: the lower level until the centre is over the climbed part. */
function climbSeg(g: Geo, a: Vec2, la: number, b: Vec2, lb: number, dyn?: DynCheck, s1In?: Solid, skipIn?: Set<string>): boolean {
  const ya = g.ys[la]!
  const yb = g.ys[lb]!
  if (yb - ya > CLIMB_REACH + EPS || yb <= ya) return false
  const s1 = s1In ?? surfaceAt(g, b, lb)
  if (!s1) return false
  const skip = skipIn ?? solidsContaining(g, b)
  const n = samples(a, b)
  let upper = false
  let prev = a
  for (let k = 1; k <= n; k++) {
    const p = lerp(a, b, k / n)
    if (!upper && pointInPolygon(p, s1.polygon)) upper = true
    const li = upper ? lb : la
    const y = g.ys[li]!
    if (li > 0 && !surfaceAt(g, p, li)) return false
    if (!terrainFree(g, p, y, upper ? undefined : skip, prev)) return false
    if (dyn && !dyn(p, y)) return false
    prev = p
  }
  return true
}

/** A drop increment (R-12.3): on the upper surface, then at most a base's width of open air, then the landing. */
function dropSeg(g: Geo, a: Vec2, la: number, b: Vec2, lb: number, dyn?: DynCheck): boolean {
  const ya = g.ys[la]!
  const yb = g.ys[lb]!
  if (la === 0 || yb >= ya) return false
  if (!surfaceAt(g, a, la)) return false
  const len = Math.hypot(b.x - a.x, b.z - a.z)
  const n = Math.max(1, Math.ceil(len / STEP))
  let air = false
  let lastT = 0
  let skipAir: Set<string> | null = null
  let prev = a
  for (let k = 1; k <= n; k++) {
    const t = k / n
    const p = lerp(a, b, t)
    if (!air && surfaceAt(g, p, la)) {
      lastT = t
      if (!terrainFree(g, p, ya, undefined, prev)) return false
      if (dyn && !dyn(p, ya)) return false
    } else {
      if (!air) skipAir = solidsContaining(g, lastT === 0 ? a : lerp(a, b, lastT))
      air = true
      if (!terrainFree(g, p, yb, skipAir ?? undefined, prev)) return false
      if (dyn && !dyn(p, yb)) return false
    }
    prev = p
  }
  if (len * (1 - lastT) > 2 * g.r + 0.5 - 0.05) return false
  if (lb > 0 && !surfaceAt(g, b, lb)) return false
  return endFree(g, b, yb)
}

/** A jump increment (R-12.4) that lands on a surface (a jump into open air then a drop is not proposed). */
function jumpSeg(g: Geo, a: Vec2, la: number, b: Vec2, lb: number, dyn?: DynCheck): boolean {
  const ya = g.ys[la]!
  const yb = g.ys[lb]!
  if (ya <= JUMP_MIN_HEIGHT + EPS || yb > ya + 1 + EPS) return false
  const len = Math.hypot(b.x - a.x, b.z - a.z)
  if (len > JUMP_MAX - 0.01 || len < 1e-3) return false
  const s0 = surfaceAt(g, a, la)
  if (!s0 || !s0.floors.some((f) => Math.abs(f - ya) < 0.01)) return false
  const skip = solidsContaining(g, a)
  const n = samples(a, b)
  let prev = a
  for (let k = 1; k <= n; k++) {
    const p = lerp(a, b, k / n)
    if (!terrainFree(g, p, ya, skip, prev)) return false
    if (dyn && !dyn(p, ya)) return false
    prev = p
  }
  if (lb > 0 && !surfaceAt(g, b, lb)) return false
  return endFree(g, b, yb)
}

function segOk(g: Geo, kind: number, a: Vec2, la: number, b: Vec2, lb: number, dyn?: DynCheck): boolean {
  if (kind === K_WALK) return la === lb && walkSeg(g, a, b, la, dyn)
  if (kind === K_CLIMB) return climbSeg(g, a, la, b, lb, dyn)
  if (kind === K_DROP) return dropSeg(g, a, la, b, lb, dyn)
  return jumpSeg(g, a, la, b, lb, dyn)
}

const climbPen = (dh: number, ins: boolean): number => (ins ? 0 : Math.max(MIN_CLIMB, Math.ceil(dh - EPS)))
const dropPen = (dh: number, ins: boolean): number => (ins ? 0 : Math.max(0, dh - FREE_DROP))

function buildGeo(map: MapDef, r: number, h: number, axis: Vec2 | undefined, margin: number): Geo {
  const idx = terrainOf(map)
  const heights = new Set<number>()
  for (const s of idx.solids) for (const w of s.walkable) if (w > 0.01) heights.add(round3(w))
  const ys = [0, ...[...heights].sort((a, b) => a - b)]
  const x0 = -idx.halfX
  const z0 = -idx.halfZ
  const nx = Math.ceil((idx.halfX * 2) / CELL) + 1
  const nz = Math.ceil((idx.halfZ * 2) / CELL) + 1
  const N = nx * nz
  const L = ys.length
  const surf = ys.map((y) => (y <= 0.01 ? [] : idx.solids.filter((s) => s.walkable.some((w) => Math.abs(w - y) < 0.01))))
  const accessibles = idx.solids.filter((s) => s.accessible)
  const g: Geo = {
    idx, r, h, axis, margin, nx, nz, x0, z0, N, ys, surf, accessibles,
    reach: halfLength({ pos: { x: 0, z: 0 }, baseRadius: r, ...(axis ? { axis } : {}) }) + margin,
    pass: new Uint8Array(L * N),
    acc: new Uint8Array(L * N),
    tStart: new Int32Array(L * N + 1),
    tTo: new Int32Array(0),
    tCost: new Float32Array(0),
    tKind: new Uint8Array(0),
    tIns: new Uint8Array(0),
  }
  for (let li = 0; li < L; li++) {
    const y = ys[li]!
    // only cells inside the bounding boxes of this height's surfaces can be on them
    const boxes = surf[li]!.map((s) => s.bbox)
    for (let c = 0; c < N; c++) {
      const p = centre(g, c)
      if (li > 0) {
        if (!boxes.some((b) => p.x >= b.minX - EPS && p.x <= b.maxX + EPS && p.z >= b.minZ - EPS && p.z <= b.maxZ + EPS)) continue
        if (!surfaceAt(g, p, li)) continue
      }
      if (!terrainFree(g, p, y)) continue
      g.pass[li * N + c] = 1
      for (const s of accessibles) {
        if (y + 0.01 < s.top && pointInPolygon(p, s.polygon)) {
          g.acc[li * N + c] = 1
          break
        }
      }
    }
  }
  // connected components per height (jumps only join separate surfaces)
  const comp = new Int32Array(L * N).fill(-1)
  let nextComp = 0
  /** per component: level and cell bounding box [li, i0, j0, i1, j1] */
  const boxes: number[][] = []
  for (let li = 0; li < L; li++) {
    for (let c = 0; c < N; c++) {
      const u = li * N + c
      if (!g.pass[u] || comp[u] !== -1) continue
      const id = nextComp++
      const stack = [c]
      comp[u] = id
      const box = [li, nx, nz, -1, -1]
      boxes.push(box)
      while (stack.length) {
        const cc = stack.pop()!
        const ci = cc % nx
        const cj = (cc - ci) / nx
        if (ci < box[1]!) box[1] = ci
        if (cj < box[2]!) box[2] = cj
        if (ci > box[3]!) box[3] = ci
        if (cj > box[4]!) box[4] = cj
        for (let dj = -1; dj <= 1; dj++) {
          for (let di = -1; di <= 1; di++) {
            const i = ci + di
            const j = cj + dj
            if (i < 0 || j < 0 || i >= nx || j >= nz) continue
            const v = li * N + j * nx + i
            if (g.pass[v] && comp[v] === -1) {
              comp[v] = id
              stack.push(j * nx + i)
            }
          }
        }
      }
    }
  }
  const from: number[] = []
  const to: number[] = []
  const cost: number[] = []
  const kinds: number[] = []
  const ins: number[] = []
  const add = (u: number, v: number, c: number, k: number, insig: boolean) => {
    from.push(u)
    to.push(v)
    cost.push(c)
    kinds.push(k)
    ins.push(insig ? 1 : 0)
  }
  const reach = g.reach + 1.25
  const rc = Math.ceil(reach / CELL)
  const isRim = (li: number, c: number): boolean => {
    const ci = c % nx
    const cj = (c - ci) / nx
    for (let dj = -1; dj <= 1; dj++) {
      for (let di = -1; di <= 1; di++) {
        const i = ci + di
        const j = cj + dj
        if (i < 0 || j < 0 || i >= nx || j >= nz) return true
        if (!g.pass[li * N + j * nx + i]) return true
      }
    }
    return false
  }
  for (let lb = 1; lb < L; lb++) {
    const yb = ys[lb]!
    for (let c = 0; c < N; c++) {
      if (!g.pass[lb * N + c]) continue
      const q = centre(g, c)
      const s1 = surfaceAt(g, q, lb)!
      const skipQ = solidsContaining(g, q)
      // straight up and down through a floor (a Vantage floor inside a ruin)
      for (let la = 0; la < lb; la++) {
        if (!g.pass[la * N + c]) continue
        const dh = yb - ys[la]!
        if (dh <= CLIMB_REACH + EPS && climbSeg(g, q, la, q, lb, undefined, s1, skipQ)) add(la * N + c, lb * N + c, climbPen(dh, s1.insignificant), K_CLIMB, s1.insignificant)
        if (dropSeg(g, q, lb, q, la)) add(lb * N + c, la * N + c, dropPen(dh, s1.insignificant), K_DROP, s1.insignificant)
      }
      if (!isRim(lb, c)) continue
      const ci = c % nx
      const cj = (c - ci) / nx
      // over the edge: the nearest free spots below that a climb starts from or a drop lands on
      for (let la = 0; la < lb; la++) {
        const dh = yb - ys[la]!
        const canClimb = dh <= CLIMB_REACH + EPS
        if (la > 0 && !boxes.some((b) => b[0] === la && b[1]! <= ci + rc && b[3]! >= ci - rc && b[2]! <= cj + rc && b[4]! >= cj - rc)) continue
        const cands: { p: number; d: number }[] = []
        for (let dj = -rc; dj <= rc; dj++) {
          for (let di = -rc; di <= rc; di++) {
            const i = ci + di
            const j = cj + dj
            if ((di === 0 && dj === 0) || i < 0 || j < 0 || i >= nx || j >= nz) continue
            const pc = j * nx + i
            if (!g.pass[la * N + pc] || g.pass[lb * N + pc]) continue
            const d = Math.hypot(di, dj) * CELL
            if (d <= reach) cands.push({ p: pc, d })
          }
        }
        if (cands.length === 0) continue
        cands.sort((a, b) => a.d - b.d)
        // the nearest climb start and drop landing in each of 8 directions (a wall has two sides)
        let climbSectors = canClimb ? 0 : 0xff
        let dropSectors = 0
        let tries = 0
        for (const { p: pc, d } of cands) {
          if ((climbSectors === 0xff && dropSectors === 0xff) || tries++ >= 20) break
          const p = centre(g, pc)
          const sector = 1 << (Math.floor(((Math.atan2(p.z - q.z, p.x - q.x) + Math.PI) / (2 * Math.PI)) * 8) & 7)
          if (!(climbSectors & sector) && climbSeg(g, p, la, q, lb, undefined, s1, skipQ)) {
            add(la * N + pc, lb * N + c, d + climbPen(dh, s1.insignificant), K_CLIMB, s1.insignificant)
            climbSectors |= sector
          }
          if (!(dropSectors & sector) && dropSeg(g, q, lb, p, la)) {
            add(lb * N + c, la * N + pc, d + dropPen(dh, s1.insignificant), K_DROP, s1.insignificant)
            dropSectors |= sector
          }
        }
      }
      // jumps from the edge of Vantage terrain more than 2" up, to a separate surface within 4" (R-12.4)
      if (yb > JUMP_MIN_HEIGHT + EPS && s1.floors.some((f) => Math.abs(f - yb) < 0.01)) {
        const jr = Math.floor(JUMP_MAX / CELL)
        const best = new Map<number, { p: number; li: number; d: number }[]>()
        const own = comp[lb * N + c]!
        for (let id = 0; id < boxes.length; id++) {
          const b = boxes[id]!
          const lt = b[0]!
          if (id === own || lt === 0 || ys[lt]! > yb + 1 + EPS) continue
          const i0 = Math.max(ci - jr, b[1]!)
          const i1 = Math.min(ci + jr, b[3]!)
          const j0 = Math.max(cj - jr, b[2]!)
          const j1 = Math.min(cj + jr, b[4]!)
          if (i0 > i1 || j0 > j1) continue
          const base = lt * N
          for (let j = j0; j <= j1; j++) {
            for (let i = i0; i <= i1; i++) {
              const v = base + j * nx + i
              if (comp[v] !== id) continue
              const d = Math.hypot(i - ci, j - cj) * CELL
              if (d > JUMP_MAX - 0.05 || d < CELL) continue
              let arr = best.get(id)
              if (!arr) best.set(id, (arr = []))
              arr.push({ p: j * nx + i, li: lt, d })
            }
          }
        }
        for (const arr of best.values()) {
          arr.sort((a, b) => a.d - b.d)
          for (let t = 0; t < Math.min(3, arr.length); t++) {
            const e = arr[t]!
            if (jumpSeg(g, q, lb, centre(g, e.p), e.li)) {
              add(lb * N + c, e.li * N + e.p, e.d + Math.max(0, yb - ys[e.li]! - FREE_DROP), K_JUMP, false)
              break
            }
          }
        }
      }
    }
  }
  // CSR by source node
  const M = from.length
  const counts = new Int32Array(L * N + 1)
  for (let k = 0; k < M; k++) counts[from[k]! + 1]!++
  for (let u = 0; u < L * N; u++) counts[u + 1]! += counts[u]!
  const fill = counts.slice(0, L * N)
  g.tTo = new Int32Array(M)
  g.tCost = new Float32Array(M)
  g.tKind = new Uint8Array(M)
  g.tIns = new Uint8Array(M)
  for (let k = 0; k < M; k++) {
    const at = fill[from[k]!]!++
    g.tTo[at] = to[k]!
    g.tCost[at] = cost[k]!
    g.tKind[at] = kinds[k]!
    g.tIns[at] = ins[k]!
  }
  g.tStart = counts
  return g
}

// ---------------------------------------------------------------------------
// Per-decision layer and search (cached on the state object, so taps within one decision reuse them)
// ---------------------------------------------------------------------------

interface Dyn {
  g: Geo
  check: DynCheck
  /** cells a base cannot stand on during this move (enemy bases, control ranges it may not enter) */
  blocked: Uint8Array
}

interface Field {
  dist: Float64Array
  parent: Int32Array
  kindIn: Uint8Array
  startLevel: number
}

interface Cache {
  dyn: Map<string, Dyn>
  fields: Map<string, Field>
}

const decisionCache = new WeakMap<GameState, Cache>()

function cacheFor(state: GameState): Cache {
  let c = decisionCache.get(state)
  if (!c) decisionCache.set(state, (c = { dyn: new Map(), fields: new Map() }))
  return c
}

function levelIndex(g: Geo, y: number): number {
  let best = 0
  for (let i = 1; i < g.ys.length; i++) if (Math.abs(g.ys[i]! - y) < Math.abs(g.ys[best]! - y)) best = i
  return best
}

function makeDyn(state: GameState, op: Operative, kind: MoveKind, g: Geo, allowed: ReadonlySet<string>): Dyn {
  const axis = g.axis
  const enemies = enemiesOf(state, op).filter((e) => e.status === 'active')
  const friends = friendsOf(state, op)
  const lone = (e: Operative) => !friends.some((f) => inControlRange(state, bodyOf(f), bodyOf(e)))
  // R-4.1: a Reposition or Dash may not enter the control range of an enemy no friend is already in; a Charge may enter
  // only one it may end in (it cannot leave a lone enemy's range once in it); a Fall Back may cross any
  const banned = kind === 'fallBack' ? [] : enemies.filter((e) => lone(e) && !allowed.has(e.id))
  const bannedBodies = banned.map((e) => ({ e, b: bodyOf(e), reach: e.baseRadius + (e.ovalHalfAxis ?? 0) + g.reach }))
  const r = op.baseRadius
  const oval = !!op.ovalHalfAxis
  const body = (p: Vec2, y: number): Body => (axis ? { id: op.id, pos: { x: p.x, y, z: p.z }, baseRadius: r, height: op.height, axis } : { id: op.id, pos: { x: p.x, y, z: p.z }, baseRadius: r, height: op.height })
  const overlaps = (e: Operative, p: Vec2): boolean => (oval || e.ovalHalfAxis ? footprintsOverlap(fpAt(g, p), footprintOf(e)) : dist2(p, e.pos) < r + e.baseRadius - EPS)
  const inBannedCr = (p: Vec2, y: number, only?: { e: Operative; b: Body; reach: number }): boolean => {
    for (const x of only ? [only] : bannedBodies) {
      const dy = Math.abs(x.e.pos.y - y)
      if (dy > 1.01) continue
      const gap = Math.max(0, dist2(p, x.e.pos) - x.reach)
      if (Math.hypot(gap, dy) > 1.01) continue
      if (inControlRange(state, body(p, y), x.b)) return true
    }
    return false
  }
  const check: DynCheck = (p, y) => {
    for (const e of enemies) if (Math.abs(e.pos.y - y) < 0.5 && overlaps(e, p)) return false
    return !inBannedCr(p, y)
  }
  // rasterise the layer for the search
  const L = g.ys.length
  const N = g.N
  const blocked = new Uint8Array(L * N)
  const visit = (e: Operative, reachIn: number, levelOk: (y: number) => boolean, test: (p: Vec2, y: number) => boolean) => {
    const c0 = cellOf(g, e.pos)
    const rc = Math.ceil(reachIn / CELL)
    const ci = c0 % g.nx
    const cj = (c0 - ci) / g.nx
    for (let li = 0; li < L; li++) {
      const y = g.ys[li]!
      if (!levelOk(y)) continue
      for (let dj = -rc; dj <= rc; dj++) {
        const j = cj + dj
        if (j < 0 || j >= g.nz) continue
        for (let di = -rc; di <= rc; di++) {
          const i = ci + di
          if (i < 0 || i >= g.nx) continue
          const u = li * N + j * g.nx + i
          if (!g.pass[u] || blocked[u]) continue
          if (test(centre(g, j * g.nx + i), y)) blocked[u] = 1
        }
      }
    }
  }
  for (const e of enemies) {
    visit(e, r + e.baseRadius + (e.ovalHalfAxis ?? 0) + (op.ovalHalfAxis ?? 0), (y) => Math.abs(e.pos.y - y) < 0.5, (p) => overlaps(e, p))
  }
  for (const x of bannedBodies) {
    visit(x.e, x.reach + 1.1, (y) => Math.abs(x.e.pos.y - y) <= 1.01, (p, y) => inBannedCr(p, y, x))
  }
  return { g, check, blocked }
}

/** A binary min-heap on typed arrays (keys are costs, values node ids). */
class Heap {
  private k = new Float64Array(1024)
  private v = new Int32Array(1024)
  size = 0
  /** the key of the last popped entry */
  topKey = 0
  push(key: number, val: number): void {
    if (this.size === this.k.length) {
      const k2 = new Float64Array(this.size * 2)
      k2.set(this.k)
      const v2 = new Int32Array(this.size * 2)
      v2.set(this.v)
      this.k = k2
      this.v = v2
    }
    const k = this.k
    const v = this.v
    let i = this.size++
    while (i > 0) {
      const p = (i - 1) >> 1
      if (k[p]! <= key) break
      k[i] = k[p]!
      v[i] = v[p]!
      i = p
    }
    k[i] = key
    v[i] = val
  }
  pop(): number {
    const k = this.k
    const v = this.v
    this.topKey = k[0]!
    const top = v[0]!
    const n = --this.size
    if (n > 0) {
      const lk = k[n]!
      const lv = v[n]!
      let i = 0
      for (;;) {
        const l = 2 * i + 1
        if (l >= n) break
        const rr = l + 1
        const m = rr < n && k[rr]! < k[l]! ? rr : l
        if (k[m]! >= lk) break
        k[i] = k[m]!
        v[i] = v[m]!
        i = m
      }
      k[i] = lk
      v[i] = lv
    }
    return top
  }
}

/**
 * Dijkstra from the operative over every reachable node. `overhead` is added to each change of height: a climb, drop
 * or jump splits the path into more increments, and each rounds up on its own; `flat` keeps to the start height.
 */
function search(state: GameState, op: Operative, kind: MoveKind, d: Dyn, overhead: number, flat: boolean): Field {
  const g = d.g
  const L = g.ys.length
  const N = g.N
  const total = L * N
  const blocked = d.blocked
  const restr = providerMoveRestrictions(state, op)
  const noClimb = restr.noClimb || kind === 'dash'
  const dist = new Float64Array(total).fill(Infinity)
  const parent = new Int32Array(total).fill(-1)
  const kindIn = new Uint8Array(total)
  const heap = new Heap()
  const sl = levelIndex(g, op.pos.y)
  // seed: the free cells within 0.75" of the operative, reached by a short straight walk
  const sc = cellOf(g, op.pos)
  const sci = sc % g.nx
  const scj = (sc - sci) / g.nx
  for (let dj = -2; dj <= 2; dj++) {
    for (let di = -2; di <= 2; di++) {
      const i = sci + di
      const j = scj + dj
      if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) continue
      const c = j * g.nx + i
      const u = sl * N + c
      if (!g.pass[u] || blocked[u]) continue
      const p = centre(g, c)
      const dd = Math.hypot(p.x - op.pos.x, p.z - op.pos.z)
      if (dd > 0.75) continue
      dist[u] = dd
      parent[u] = -2
      heap.push(dd, u)
    }
  }
  const nx = g.nx
  const nz = g.nz
  while (heap.size > 0) {
    const u = heap.pop()
    const du = heap.topKey
    if (du > dist[u]!) continue
    const li = (u / N) | 0
    const c = u - li * N
    const ci = c % nx
    const cj = (c - ci) / nx
    const base = li * N
    const accU = g.acc[u]
    for (let dj = -1; dj <= 1; dj++) {
      const j = cj + dj
      if (j < 0 || j >= nz) continue
      for (let di = -1; di <= 1; di++) {
        if (di === 0 && dj === 0) continue
        const i = ci + di
        if (i < 0 || i >= nx) continue
        const v = base + j * nx + i
        if (!g.pass[v] || blocked[v]) continue
        let step = CELL
        if (di !== 0 && dj !== 0) {
          const a = base + cj * nx + i
          const b = base + j * nx + ci
          if (!g.pass[a] || !g.pass[b] || blocked[a] || blocked[b]) continue
          step = DIAG
        }
        const nd = du + step + (g.acc[v] && !accU ? 1 : 0)
        if (nd < dist[v]!) {
          dist[v] = nd
          parent[v] = u
          kindIn[v] = K_WALK
          heap.push(nd, v)
        }
      }
    }
    if (flat) continue
    for (let e = g.tStart[u]!; e < g.tStart[u + 1]!; e++) {
      const k = g.tKind[e]!
      if (k === K_CLIMB && !g.tIns[e] && noClimb) continue
      if (k === K_JUMP && restr.noJump) continue
      const v = g.tTo[e]!
      if (blocked[v]) continue
      const nd = du + g.tCost[e]! + overhead
      if (nd < dist[v]!) {
        dist[v] = nd
        parent[v] = u
        kindIn[v] = k
        heap.push(nd, v)
      }
    }
  }
  return { dist, parent, kindIn, startLevel: sl }
}

// ---------------------------------------------------------------------------
// Chain -> increments
// ---------------------------------------------------------------------------

interface Pt {
  x: number
  z: number
  li: number
  /** how this point is reached from the previous one */
  k: number
}

function chainTo(g: Geo, f: Field, goal: number, start: Vec3, spot: Vec2): Pt[] {
  const N = g.N
  const nodes: number[] = []
  let u = goal
  for (let guard = 0; u >= 0 && guard < 100000; guard++) {
    nodes.push(u)
    u = f.parent[u]!
  }
  nodes.reverse()
  const pts: Pt[] = [{ x: start.x, z: start.z, li: f.startLevel, k: K_WALK }]
  for (const n of nodes) {
    const li = Math.floor(n / N)
    const p = centre(g, n - li * N)
    pts.push({ x: p.x, z: p.z, li, k: f.kindIn[n]! })
  }
  pts[1]!.k = K_WALK
  const last = pts[pts.length - 1]!
  if (Math.hypot(last.x - spot.x, last.z - spot.z) > 1e-3) pts.push({ x: spot.x, z: spot.z, li: last.li, k: K_WALK })
  if (pts.length > 2 && Math.hypot(pts[1]!.x - start.x, pts[1]!.z - start.z) < 1e-3 && pts[1]!.li === pts[0]!.li) pts.splice(1, 1)
  return pts
}

/**
 * Keep the first and last points, both ends of every change of height, and the grid path's corners, but only where an
 * increment may end (the engine's end-of-increment test has no doorway allowance), plus the last and first such points
 * either side of a stretch where it may not (a doorway), so the increment through it can be pulled straight.
 */
function corners(g: Geo, pts: Pt[]): Pt[] {
  if (pts.length <= 2) return pts
  const n = pts.length
  const endable = pts.map((p, i) => i === 0 || i === n - 1 || p.k !== K_WALK || (i + 1 < n && pts[i + 1]!.k !== K_WALK) || endFree(g, p, g.ys[p.li]!))
  const out: Pt[] = [pts[0]!]
  for (let i = 1; i < n - 1; i++) {
    const a = pts[i - 1]!
    const b = pts[i]!
    const c = pts[i + 1]!
    if (b.k !== K_WALK || c.k !== K_WALK || b.li !== a.li || c.li !== b.li) {
      out.push(b)
      continue
    }
    if (!endable[i]) continue
    if (!endable[i - 1] || !endable[i + 1]) {
      out.push(b)
      continue
    }
    if (Math.abs((b.x - a.x) * (c.z - b.z) - (b.z - a.z) * (c.x - b.x)) > 1e-6) out.push(b)
  }
  out.push(pts[n - 1]!)
  return out
}

interface Inc {
  x: number
  z: number
  li: number
  k: number
}

/**
 * Greedy string pulling: from each point, the farthest later point one legal straight increment reaches. When none does
 * (the next corner sits where an increment may not end, beside a doorway), a bridge point is sought within 1.25" of the
 * next corner: one an increment may end on and from which the path carries on.
 */
function pull(g: Geo, pts: Pt[], dyn: DynCheck): Inc[] {
  const out: Inc[] = []
  const n = pts.length
  /** the farthest j > i that one increment from `a` (standing where pts[i] is in the chain) reaches */
  const farthest = (a: Pt, i: number, minJ = i + 1): { j: number; kind: number } | null => {
    for (let j = n - 1; j >= minJ; j--) {
      let t = -1
      let multi = false
      for (let m = i + 1; m <= j; m++) {
        if (pts[m]!.k !== K_WALK || pts[m]!.li !== (m === i + 1 ? a.li : pts[m - 1]!.li)) {
          if (t !== -1) {
            multi = true
            break
          }
          t = m
        }
      }
      if (multi) continue
      const b = pts[j]!
      let kind = K_WALK
      if (t !== -1) {
        kind = pts[t]!.k === K_WALK ? (b.li > a.li ? K_CLIMB : K_DROP) : pts[t]!.k
        if (kind === K_JUMP && (t !== j || i !== j - 1)) continue
      }
      if (segOk(g, kind, a, a.li, b, b.li, dyn)) return { j, kind }
    }
    return null
  }
  let i = 0
  let cur: Pt = pts[0]!
  while (i < n - 1) {
    const hop = farthest(cur, i)
    if (hop) {
      const b = pts[hop.j]!
      out.push({ x: b.x, z: b.z, li: b.li, k: hop.kind })
      cur = b
      i = hop.j
      continue
    }
    const next = pts[i + 1]!
    let bridge: { p: Pt; j: number; kind: number; d: number } | null = null
    if (next.li === cur.li && next.k === K_WALK) {
      const y = g.ys[cur.li]!
      for (let dz = -5; dz <= 5; dz++) {
        for (let dx = -5; dx <= 5; dx++) {
          if (dx * dx + dz * dz > 25) continue
          const p: Pt = { x: next.x + dx * 0.25, z: next.z + dz * 0.25, li: cur.li, k: K_WALK }
          if (!endFree(g, p, y) || !walkSeg(g, cur, p, cur.li, dyn)) continue
          const hop2 = farthest(p, i, Math.max(i + 1, bridge ? bridge.j : i + 1))
          if (!hop2) continue
          const d = Math.hypot(p.x - cur.x, p.z - cur.z) + Math.hypot(pts[hop2.j]!.x - p.x, pts[hop2.j]!.z - p.z)
          if (!bridge || hop2.j > bridge.j || (hop2.j === bridge.j && d < bridge.d)) bridge = { p, j: hop2.j, kind: hop2.kind, d }
        }
      }
    }
    if (bridge) {
      const b = pts[bridge.j]!
      out.push({ x: bridge.p.x, z: bridge.p.z, li: bridge.p.li, k: K_WALK }, { x: b.x, z: b.z, li: b.li, k: bridge.kind })
      cur = b
      i = bridge.j
      continue
    }
    // nothing checks out exactly: keep the graph's own hop and let the engine decide
    const kind = next.k !== K_WALK ? next.k : next.li > cur.li ? K_CLIMB : next.li < cur.li ? K_DROP : K_WALK
    out.push({ x: next.x, z: next.z, li: next.li, k: kind })
    cur = next
    i = i + 1
  }
  return out
}

/**
 * Any-angle smoothing: two consecutive grid corners on one height become one point on the segment between them (or
 * just beside it) when that is still clear, which finds the taut corner the cell centres miss. Fewer increments round
 * up fewer times (R-4.1).
 */
function merge(g: Geo, start: Pt, incs: Inc[], dyn: DynCheck): Inc[] {
  const out = incs.map((w) => ({ ...w }))
  const lenCost = (a: Vec2, b: Vec2) => incrementCost(Math.hypot(b.x - a.x, b.z - a.z))
  for (let guard = 0; guard < 8; guard++) {
    let changed = false
    for (let k = 0; k + 2 < out.length; k++) {
      const prev = k === 0 ? start : out[k - 1]!
      const b = out[k]!
      const c = out[k + 1]!
      const next = out[k + 2]!
      if (b.k !== K_WALK || c.k !== K_WALK || next.k !== K_WALK || b.li !== c.li || prev.li !== b.li || next.li !== b.li) continue
      const cur = lenCost(prev, b) + lenCost(b, c) + lenCost(c, next)
      const len = Math.hypot(c.x - b.x, c.z - b.z)
      if (len < 1e-6) continue
      const nxp = -(c.z - b.z) / len
      const nzp = (c.x - b.x) / len
      const cands: { p: Vec2; cost: number; d: number }[] = []
      const steps = Math.max(1, Math.ceil(len / 0.25))
      for (let s = 0; s <= steps; s++) {
        for (const off of [0, -0.25, 0.25, -0.5, 0.5]) {
          const p = { x: b.x + ((c.x - b.x) * s) / steps + nxp * off, z: b.z + ((c.z - b.z) * s) / steps + nzp * off }
          const cost = lenCost(prev, p) + lenCost(p, next)
          if (cost >= cur) continue
          cands.push({ p, cost, d: Math.hypot(p.x - prev.x, p.z - prev.z) + Math.hypot(next.x - p.x, next.z - p.z) })
        }
      }
      cands.sort((x, y) => x.cost - y.cost || x.d - y.d)
      for (const e of cands.slice(0, 24)) {
        if (walkSeg(g, prev, e.p, b.li, dyn) && walkSeg(g, e.p, next, b.li, dyn)) {
          out.splice(k, 2, { x: e.p.x, z: e.p.z, li: b.li, k: K_WALK })
          changed = true
          break
        }
      }
    }
    if (!changed) break
  }
  return out
}

const OFFSETS: Vec2[] = (() => {
  const out: Vec2[] = []
  for (let dz = -4; dz <= 4; dz++) for (let dx = -4; dx <= 4; dx++) if ((dx || dz) && dx * dx + dz * dz <= 16) out.push({ x: dx * 0.25, z: dz * 0.25 })
  return out
})()

/** Nudge interior waypoints (0.25" steps, up to 1") where that saves whole inches of per-increment rounding (R-4.1). */
function tweak(g: Geo, start: Pt, incs: Inc[], dyn: DynCheck): Inc[] {
  const out = incs.map((w) => ({ ...w }))
  for (let round = 0; round < 2; round++) {
    let changed = false
    for (let k = 0; k < out.length - 1; k++) {
      const prev = k === 0 ? start : out[k - 1]!
      const cur = out[k]!
      const next = out[k + 1]!
      if (cur.k === K_JUMP || next.k === K_JUMP) continue
      const base = incrementCost(Math.hypot(cur.x - prev.x, cur.z - prev.z)) + incrementCost(Math.hypot(next.x - cur.x, next.z - cur.z))
      const cands = OFFSETS.map((o) => {
        const p = { x: cur.x + o.x, z: cur.z + o.z }
        return { p, c: incrementCost(Math.hypot(p.x - prev.x, p.z - prev.z)) + incrementCost(Math.hypot(next.x - p.x, next.z - p.z)), m: o.x * o.x + o.z * o.z }
      })
        .filter((e) => e.c < base)
        .sort((a, b) => a.c - b.c || a.m - b.m)
      for (const e of cands.slice(0, 16)) {
        if (segOk(g, cur.k, prev, prev.li, e.p, cur.li, dyn) && segOk(g, next.k, e.p, cur.li, next, next.li, dyn)) {
          cur.x = e.p.x
          cur.z = e.p.z
          changed = true
          break
        }
      }
    }
    if (!changed) break
  }
  return out
}

function toWaypoints(g: Geo, incs: Inc[]): Waypoint[] {
  return incs.map((w) => ({ x: round3(w.x), z: round3(w.z), y: g.ys[w.li]!, ...(w.k === K_JUMP ? { jump: true } : {}) }))
}

function transitions(incs: Inc[]): number {
  let n = 0
  for (const w of incs) if (w.k !== K_WALK) n++
  return n
}

// ---------------------------------------------------------------------------
// Target snapping
// ---------------------------------------------------------------------------

interface Spot {
  p: Vec2
  li: number
}

/** Legal end spots for the tap: the exact point, else the nearest within `snap` on the surface the tap hit. */
function spotsNear(state: GameState, op: Operative, kind: MoveKind, g: Geo, target: Vec3, snap: number, endWithinCrOf?: string): Spot[] {
  const levels = g.ys
    .map((y, li) => ({ li, d: Math.abs(y - target.y) }))
    .filter((e) => e.d <= 0.6 || (e.li === 0 && target.y < 0.6))
    .sort((a, b) => a.d - b.d)
  const enemies = enemiesOf(state, op)
  const friend = endWithinCrOf && kind !== 'charge' ? state.operatives[endWithinCrOf] : undefined
  const axis = g.axis
  const out: Spot[] = []
  const rings: Vec2[] = [{ x: 0, z: 0 }]
  for (let rr = 0.25; rr <= snap + 1e-9; rr += 0.25) {
    const n = Math.max(8, Math.round((2 * Math.PI * rr) / 0.25))
    for (let i = 0; i < n; i++) rings.push({ x: Math.sin((i / n) * 2 * Math.PI) * rr, z: Math.cos((i / n) * 2 * Math.PI) * rr })
  }
  for (const { li } of levels) {
    const y = g.ys[li]!
    for (const o of rings) {
      const p = { x: round3(target.x + o.x), z: round3(target.z + o.z) }
      const pos = { x: p.x, y, z: p.z }
      if (placementProblem(state, { id: op.id, pos, radius: op.baseRadius, height: op.height, ...(axis ? { axis } : {}) })) continue
      const me: Body = { id: op.id, pos, baseRadius: op.baseRadius, height: op.height, ...(axis ? { axis } : {}) }
      const inCr = enemies.filter((e) => dist2(p, e.pos) - op.baseRadius - e.baseRadius - (e.ovalHalfAxis ?? 0) - (op.ovalHalfAxis ?? 0) <= 1.05 && inControlRange(state, me, bodyOf(e)))
      if (kind === 'charge') {
        if (inCr.length === 0) continue
        if (endWithinCrOf && !inCr.some((e) => e.id === endWithinCrOf)) continue
      } else {
        if (inCr.length > 0) continue
        if (friend && !inControlRange(state, me, bodyOf(friend))) continue
      }
      out.push({ p, li })
      if (out.length >= 8) return out
    }
    if (out.length > 0) return out
  }
  return out
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

type Ok = Extract<RouteResult, { ok: true }>

/**
 * Plan the cheapest legal route for `opId` making a `kind` move to the tapped point `target` (y = the height of the
 * surface the tap hit). The end snaps to the nearest legal standing spot within `snapRadius` (1") on that surface.
 * Returns engine-validated waypoints with the engine's price; `too-far` with the engine's price of the best route found
 * when it exceeds the move; `unreachable` when no legal route ends there.
 */
export function planRoute(state: GameState, opId: string, kind: MoveKind, target: Vec3, opts: RouteOpts = {}): RouteResult {
  const op = state.operatives[opId]
  if (!op || op.status !== 'active') return { ok: false, reason: 'unreachable' }
  const counteract = opts.counteract === true
  const fullLimit = moveLimit(op, kind, counteract, state)
  const limit = opts.limitOverride === undefined ? fullLimit : Math.min(opts.limitOverride, fullLimit)
  const axis = footprintOf(op).axis
  const g0 = geoFor(state.map, op.baseRadius, op.height, axis, 0)
  const spots = spotsNear(state, op, kind, g0, target, opts.snapRadius ?? 1, opts.endWithinCrOf)

  let fly: Ok | null = null
  if (opts.allowFly !== false && providerCanFly(state, op, kind)) {
    for (const s of spots.slice(0, 4)) {
      const wp: Waypoint = { x: s.p.x, z: s.p.z, y: g0.ys[s.li]! }
      const plan = planFly(state, op, kind, [wp], counteract, opts.limitOverride, opts.endWithinCrOf)
      if (plan.ok) {
        fly = { ok: true, waypoints: [wp], cost: plan.cost, limit: plan.maxInches, end: plan.end, fly: true }
        break
      }
    }
  }
  if (spots.length === 0) return fly ?? { ok: false, reason: 'unreachable' }

  const cache = cacheFor(state)
  const exempt = kind === 'charge' && chargeFromControlRange(state, op) ? enemiesOf(state, op).filter((e) => inControlRange(state, bodyOf(op), bodyOf(e))).map((e) => e.id) : []
  const posKey = `${op.id}|${kind}|${round3(op.pos.x)},${round3(op.pos.y)},${round3(op.pos.z)}`
  const tried = new Set<string>()
  const found: { best: Ok | null; tooFar: number | null } = { best: null, tooFar: null }

  const consider = (wps: Waypoint[]): void => {
    const key = JSON.stringify(wps)
    if (tried.has(key)) return
    tried.add(key)
    const plan = planMove(state, op, kind, wps, counteract, opts.limitOverride, opts.endWithinCrOf)
    if (plan.ok) {
      if (!found.best || plan.cost < found.best.cost) found.best = { ok: true, waypoints: wps, cost: plan.cost, limit: plan.maxInches, end: plan.end }
      return
    }
    if (plan.rejection.code === 'E_OUT_OF_RANGE') {
      const priced = priceMove(state, op, kind, wps, counteract, opts.limitOverride, opts.endWithinCrOf)
      if (priced.ok && priced.cost > limit + EPS) found.tooFar = found.tooFar === null ? priced.cost : Math.min(found.tooFar, priced.cost)
    }
  }

  /** route variants: 'route' (the default allowance per change of height), 'flat' (stay on one height), 'fewer' */
  const run = (margin: number, spot: Spot, variant: 'route' | 'flat' | 'fewer'): number => {
    const g = margin === 0 ? g0 : geoFor(state.map, op.baseRadius, op.height, axis, margin)
    // a Charge may enter the control range it ends in (and leave one it started in, when a rule allows)
    const allowed = new Set(exempt)
    if (kind === 'charge') {
      const me: Body = { id: op.id, pos: { x: spot.p.x, y: g.ys[spot.li]!, z: spot.p.z }, baseRadius: op.baseRadius, height: op.height, ...(axis ? { axis } : {}) }
      for (const e of enemiesOf(state, op)) if (inControlRange(state, me, bodyOf(e))) allowed.add(e.id)
    }
    const dkey = `${posKey}|${margin}|${[...allowed].sort().join(',')}`
    let d = cache.dyn.get(dkey)
    if (!d) cache.dyn.set(dkey, (d = makeDyn(state, op, kind, g, allowed)))
    const fkey = `${dkey}|${variant}`
    let f = cache.fields.get(fkey)
    if (!f) cache.fields.set(fkey, (f = search(state, op, kind, d, variant === 'fewer' ? 4 : 1, variant === 'flat')))
    // goal: a reachable free cell next to the spot, from which a straight walk finishes the move
    const sc = cellOf(g, spot.p)
    const sci = sc % g.nx
    const scj = (sc - sci) / g.nx
    const goals: { u: number; v: number }[] = []
    for (let dj = -2; dj <= 2; dj++) {
      for (let di = -2; di <= 2; di++) {
        const i = sci + di
        const j = scj + dj
        if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) continue
        const u = spot.li * g.N + j * g.nx + i
        if (!Number.isFinite(f.dist[u]!)) continue
        const p = centre(g, j * g.nx + i)
        const dd = Math.hypot(p.x - spot.p.x, p.z - spot.p.z)
        if (dd > 0.8) continue
        goals.push({ u, v: f.dist[u]! + dd })
      }
    }
    goals.sort((a, b) => a.v - b.v)
    const start: Pt = { x: op.pos.x, z: op.pos.z, li: f.startLevel, k: K_WALK }
    let hops = 0
    for (const [n, goal] of goals.slice(0, 2).entries()) {
      const pulled = merge(g, start, pull(g, corners(g, chainTo(g, f, goal.u, op.pos, spot.p)), d.check), d.check)
      if (pulled.length === 0) continue
      if (n === 0) hops = transitions(pulled)
      for (const incs of [tweak(g, start, pulled, d.check), pulled]) if (incs.length <= MAX_WAYPOINTS) consider(toWaypoints(g, incs))
    }
    return hops
  }

  const startLevel = levelIndex(g0, op.pos.y)
  for (const spot of spots.slice(0, 4)) {
    const hops = run(0, spot, 'route')
    // a climb or drop splits the path into more increments, each rounded up: also price the alternatives
    if (hops > 0 && spot.li === startLevel) run(0, spot, 'flat')
    if (hops > 1) run(0, spot, 'fewer')
    if (found.best || found.tooFar !== null) break
  }
  if (!found.best && found.tooFar === null) {
    // conservative retry: a little more clearance, for walls the grid passes too close to
    for (const spot of spots.slice(0, 2)) {
      run(0.2, spot, 'route')
      if (found.best || found.tooFar !== null) break
    }
  }
  const walk = found.best
  if (walk && fly) return fly.cost < walk.cost ? fly : walk
  if (walk) return walk
  if (fly) return fly
  if (found.tooFar !== null) return { ok: false, reason: 'too-far', needed: found.tooFar, limit }
  return { ok: false, reason: 'unreachable' }
}

/** Build the per-map grids for this operative's base ahead of the first tap (optional; planRoute builds them lazily). */
export function warmRoutes(state: GameState, opId: string): void {
  const op = state.operatives[opId]
  if (op) geoFor(state.map, op.baseRadius, op.height, footprintOf(op).axis, 0)
}

