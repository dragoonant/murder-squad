// Tap-to-move route planner (src/ai/nav3d.ts): every route it proposes is one the engine accepts at the price it reports.
import { describe, expect, it } from 'vitest'
import { moveLimit, planMove, type MoveKind } from '@/engine/movement'
import { bodyOf, inControlRange } from '@/engine/measure'
import { placementProblem } from '@/engine/terrain'
import type { GameState, Vec3, Waypoint } from '@/engine/types'
import { planRoute, warmRoutes } from '../../src/ai/nav3d'
import { feature, mapWith, part, rect } from '../fixtures/maps'
import { edit, openReal, realGame } from '../fixtures/real'

const base = openReal()
const A = Object.values(base.operatives).find((o) => o.seat === 'A')!.id
const B = Object.values(base.operatives).find((o) => o.seat === 'B')!.id

/** The open test state with this terrain and A's operative at `at`. */
function board(at: Vec3, ...features: ReturnType<typeof feature>[]): GameState {
  return edit(base, (st) => {
    st.map = { ...mapWith(...features), dropZones: st.map.dropZones }
    st.operatives[A]!.pos = { ...at }
  })
}

function engineAccepts(s: GameState, kind: MoveKind, wps: Waypoint[], cost: number) {
  const plan = planMove(s, s.operatives[A]!, kind, wps)
  expect(plan.ok, plan.ok ? '' : plan.rejection.reason).toBe(true)
  if (plan.ok) expect(plan.cost).toBe(cost)
  return plan
}

describe('3D route planner', () => {
  it('MOVE-ROUTE-001 routes around a wall on the floor; the engine accepts it at the reported cost', () => {
    // a wall too tall to climb (R-12.2: 3" at most), with the operative near its end
    const s = board({ x: -1.5, y: 0, z: 1 }, feature('wall', part('wall.a', rect(-0.25, 0.25, -5, 1), 5, ['heavy'])))
    const target = { x: 1.5, y: 0, z: 1 }
    expect(planMove(s, s.operatives[A]!, 'reposition', [{ x: 1.5, z: 1 }]).ok).toBe(false)
    const r = planRoute(s, A, 'reposition', target)
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(r.waypoints.length).toBeGreaterThanOrEqual(2)
    expect(r.cost).toBeLessThanOrEqual(r.limit)
    expect(r.limit).toBe(moveLimit(s.operatives[A]!, 'reposition', false, s))
    engineAccepts(s, 'reposition', r.waypoints, r.cost)
    // MOVE-ROUTE-005: an exactly reachable spot is where the route ends
    expect(r.end).toEqual(target)
  })

  it('MOVE-ROUTE-002 a rooftop tap gets a climb priced as the engine prices it; a drop back down pays beyond 2"', () => {
    const tower = feature('tower', part('tower.a', rect(1, 4, -1.5, 1.5), 3, ['vantage']))
    const s = board({ x: 0, y: 0, z: 0 }, tower)
    const r = planRoute(s, A, 'reposition', { x: 2, y: 3, z: 0 })
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(r.end.y).toBe(3)
    const plan = engineAccepts(s, 'reposition', r.waypoints, r.cost)
    expect(plan.ok && plan.breakdown.climb).toBe(3)
    expect(r.cost).toBe(5) // 2" across, rounded, plus a 3" climb
    // a Dash cannot climb (R-12.4): no route
    expect(planRoute(s, A, 'dash', { x: 2, y: 3, z: 0 }).ok).toBe(false)
    // down again: 3" drop, the first 2" free
    const top = board({ x: 2.5, y: 3, z: 0 }, tower)
    const d = planRoute(top, A, 'reposition', { x: 6, y: 0, z: 0 })
    expect(d.ok).toBe(true)
    if (!d.ok) return
    const down = engineAccepts(top, 'reposition', d.waypoints, d.cost)
    expect(down.ok && down.breakdown.drop).toBe(1)
  })

  it('MOVE-ROUTE-003 too far: the engine price of the best route, more than the limit, and no path', () => {
    const s = board({ x: -2, y: 0, z: 0 })
    const r = planRoute(s, A, 'reposition', { x: 10, y: 0, z: 0 })
    expect(r.ok).toBe(false)
    if (r.ok) return
    expect(r.reason).toBe('too-far')
    if (r.reason !== 'too-far') return
    expect(r.needed).toBe(12)
    expect(r.needed).toBeGreaterThan(r.limit)
    expect('waypoints' in r).toBe(false)
  })

  it('MOVE-ROUTE-004 a Reposition never routes through a lone enemy control range (R-4.1)', () => {
    const s = edit(board({ x: -2, y: 0, z: 2 }), (st) => {
      st.operatives[B]!.pos = { x: 0, y: 0, z: 0 }
    })
    const op = s.operatives[A]!
    const enemy = s.operatives[B]!
    expect(planMove(s, op, 'reposition', [{ x: 2, z: 2 }]).ok).toBe(false)
    const r = planRoute(s, A, 'reposition', { x: 2, y: 0, z: 2 })
    expect(r.ok).toBe(true)
    if (!r.ok) return
    engineAccepts(s, 'reposition', r.waypoints, r.cost)
    let prev = op.pos
    for (const w of r.waypoints) {
      for (let k = 0; k <= 40; k++) {
        const p = { x: prev.x + ((w.x - prev.x) * k) / 40, y: 0, z: prev.z + ((w.z - prev.z) * k) / 40 }
        expect(inControlRange(s, { ...bodyOf(op), pos: p }, bodyOf(enemy))).toBe(false)
      }
      prev = { x: w.x, y: 0, z: w.z }
    }
  })

  it('MOVE-ROUTE-005 a tap inside terrain snaps to the nearest legal standing spot within 1"', () => {
    const s = board({ x: -3, y: 0, z: 0 }, feature('wall', part('wall.a', rect(-0.25, 0.25, -3, 3), 2, ['heavy'])))
    const r = planRoute(s, A, 'reposition', { x: 0, y: 0, z: 3.2 })
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(Math.hypot(r.end.x - 0, r.end.z - 3.2)).toBeLessThanOrEqual(1 + 1e-9)
    expect(r.end.y).toBe(0)
    const op = s.operatives[A]!
    expect(placementProblem(s, { id: A, pos: r.end, radius: op.baseRadius, height: op.height })).toBeNull()
    engineAccepts(s, 'reposition', r.waypoints, r.cost)
  })

  it('MOVE-ROUTE-006 jumps a gap between Vantage roofs instead of dropping and climbing (R-12.4)', () => {
    const s = board(
      { x: -2.5, y: 3, z: 0 },
      feature('a', part('a.roof', rect(-4, -1, -2, 2), 3, ['vantage'])),
      feature('b', part('b.roof', rect(1, 4, -2, 2), 3, ['vantage'])),
    )
    const r = planRoute(s, A, 'reposition', { x: 2.5, y: 3, z: 0 })
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(r.waypoints.some((w) => w.jump)).toBe(true)
    expect(r.end.y).toBe(3)
    const plan = engineAccepts(s, 'reposition', r.waypoints, r.cost)
    expect(plan.ok && plan.breakdown.climb).toBe(0)
  })

  it('MOVE-ROUTE-007 answers within the budget on a real killzone, and every route it returns is engine-legal', () => {
    const s0 = realGame({ layoutId: 'kz.volkus-ao25-1' })
    const s = edit(s0, (st) => {
      st.operatives.A2!.pos = { x: -8, y: 0, z: -6 }
    })
    const t0 = performance.now()
    warmRoutes(s, 'A2')
    const warm = performance.now() - t0
    const taps: Vec3[] = [
      { x: -8, y: 0, z: -1 },
      { x: -6.5, y: 0, z: -1.5 },
      { x: -4.5, y: 3, z: -6 },
      { x: -3.25, y: 3, z: -6 },
      { x: 4, y: 0, z: -6 },
      { x: 8, y: 0, z: 9 },
      { x: -5, y: 5.5, z: 7 },
      { x: -10, y: 0, z: -2 },
    ]
    const times: number[] = []
    let ok = 0
    for (const t of taps) {
      const a = performance.now()
      const r = planRoute(s, 'A2', 'reposition', t)
      times.push(performance.now() - a)
      if (r.ok) {
        ok++
        const plan = planMove(s, s.operatives.A2!, 'reposition', r.waypoints)
        expect(plan.ok && plan.cost).toBe(r.cost)
      } else if (r.reason === 'too-far') expect(r.needed).toBeGreaterThan(r.limit)
    }
    const sorted = [...times].sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]!
    console.log(`nav3d: warm ${warm.toFixed(1)} ms; taps ${times.map((t) => t.toFixed(1)).join(', ')} ms; median ${median.toFixed(1)} ms`)
    expect(ok).toBeGreaterThanOrEqual(3)
    // budget: < 50 ms a tap on a desktop; the bound here leaves room for a loaded CI machine
    expect(median).toBeLessThan(100)
  })
})
