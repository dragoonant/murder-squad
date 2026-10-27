// Tap-to-move routing in the client: a tap during a human move.path lays the cheapest legal route there (planRoute),
// the engine accepts it on confirm, the X removes a routed leg in one press, too-far taps change nothing and say why,
// and Shift / Straight keep the old single straight step.
import { beforeEach, describe, expect, it } from 'vitest'
import { legalActions, type GameState, type PendingDecision } from '@/engine'
import { planMove } from '@/engine/movement'
import { RandomBot } from '@/client/bot/randomBot'
import { dataBundle } from '@/client/game/adapter'
import { defaultBuild, resolveLayout, resolveMission, resolveTeam } from '@/client/game/defaults'
import { clickPoint, confirmPath, routeLeg, undoOrCancelPath } from '@/client/interaction/controller'
import { useSettings } from '@/client/presentation/settings'
import { useGame } from '@/client/store/game'
import { useUi } from '@/client/ui/uiStore'
import { feature, mapWith, part, rect } from '../fixtures/maps'

/** A human Reposition open for an operative; the board is then replaced by `features` with everyone else parked far away. */
function startMove(seed: string, at: { x: number; y: number; z: number }, ...features: ReturnType<typeof feature>[]) {
  const b = dataBundle()
  useSettings.getState().setAnimSpeed('instant')
  useGame.getState().newGame({
    builds: { A: defaultBuild(b, resolveTeam(b, 'aod')), B: defaultBuild(b, resolveTeam(b, 'kom')) },
    seats: { A: 'human', B: 'human' },
    seed,
    missionId: resolveMission(b, 'secure').id,
    layoutId: resolveLayout(b, '01').id,
  })
  const bot = new RandomBot(seed)
  const isMove = (p: PendingDecision, s: GameState) =>
    p.kind === 'firefight.action' && !!p.options?.some((o) => o.action.type === 'firefight.action' && o.action.payload.action === 'reposition') && s.operatives[String(p.context.operativeId)]!.status === 'active'
  for (let i = 0; i < 400; i++) {
    const { state, pending } = useGame.getState()
    if (!state || !pending || isMove(pending, state)) break
    const a = pending.kind === 'firefight.action'
      ? (legalActions(state, pending) ?? []).find((x) => x.type === 'firefight.action' && ['reposition', 'dash'].includes(x.payload.action)) ?? bot.decide(state, pending)
      : bot.decide(state, pending)
    expect(useGame.getState().dispatch(a)).toBeNull()
  }
  const pick = useGame.getState().pending!
  expect(useGame.getState().dispatch(pick.options!.find((o) => o.action.type === 'firefight.action' && o.action.payload.action === 'reposition')!.action)).toBeNull()
  for (let i = 0; i < 5 && useGame.getState().pending?.kind === 'ploy.firefight'; i++) expect(useGame.getState().pass()).toBeNull()
  const move = useGame.getState().pending!
  expect(move.kind).toBe('move.path')
  const id = move.constraints!.operativeId!
  const s0 = useGame.getState().state!
  const ops = Object.fromEntries(Object.entries(s0.operatives).map(([k, o]) => [k, { ...o }]))
  let a = 0
  let bb = 0
  for (const o of Object.values(ops)) {
    if (o.id === id) o.pos = { ...at }
    else o.pos = o.seat === 'A' ? { x: -13.5, y: 0, z: -10 + a++ * 1.7 } : { x: 13.5, y: 0, z: -10 + bb++ * 1.7 }
  }
  const state: GameState = { ...s0, operatives: ops, map: { ...mapWith(...features), dropZones: s0.map.dropZones } }
  useGame.setState({ state })
  return { state, move, id }
}

const tallWall = () => feature('wall', part('wall.a', rect(-0.25, 0.25, -5, 1), 5, ['heavy']))

describe('routed move taps', () => {
  beforeEach(() => {
    useGame.getState().reset()
    useUi.getState().resetPath()
    useUi.setState({ straight: false })
  })

  it('ROUTE-UI-001 a tap behind a wall appends a routed legal path that the engine accepts on confirm', () => {
    const { state, move, id } = startMove('rm-1', { x: -1.5, y: 0, z: 1 }, tallWall())
    expect(planMove(state, state.operatives[id]!, 'reposition', [{ x: 1.5, z: 1 }]).ok).toBe(false)
    clickPoint({ x: 1.5, y: 0, z: 1 })
    const ui = useUi.getState()
    expect(ui.routeNote).toBeNull()
    expect(ui.waypoints.length).toBeGreaterThanOrEqual(2)
    expect(ui.waypoints[ui.waypoints.length - 1]).toMatchObject({ x: 1.5, z: 1 })
    expect(planMove(state, state.operatives[id]!, 'reposition', ui.waypoints, false, move.constraints!.maxInches).ok).toBe(true)
    expect(confirmPath()).toBeNull()
    expect(useGame.getState().state!.operatives[id]!.pos).toMatchObject({ x: 1.5, z: 1 })
  })

  it('ROUTE-UI-002 a tap out of reach leaves the path unchanged and says what it needs (engine numbers)', () => {
    startMove('rm-2', { x: -1.5, y: 0, z: 1 }, tallWall())
    clickPoint({ x: -1.5, y: 0, z: 3 })
    const before = useUi.getState().waypoints
    expect(before.length).toBe(1)
    clickPoint({ x: 10, y: 0, z: 3 })
    const ui = useUi.getState()
    expect(ui.waypoints).toEqual(before)
    expect(ui.routeNote).toMatch(/^Needs \d+″, only \d+″ left$/)
    const [, needed, left] = ui.routeNote!.match(/Needs (\d+)″, only (\d+)″ left/)!.map(Number)
    expect(needed!).toBeGreaterThan(left!)
  })

  it('ROUTE-UI-003 the X removes a whole routed leg in one press, then a manual step one at a time', () => {
    startMove('rm-3', { x: -1.5, y: 0, z: 1 }, tallWall())
    clickPoint({ x: -1.5, y: 0, z: 2 }, { straight: true })
    expect(useUi.getState().waypoints.length).toBe(1)
    clickPoint({ x: 1.5, y: 0, z: 1 })
    const routed = useUi.getState().waypoints.length
    expect(routed).toBeGreaterThanOrEqual(2)
    expect(undoOrCancelPath()).toBe('undo')
    expect(useUi.getState().waypoints.length).toBe(1)
    expect(undoOrCancelPath()).toBe('undo')
    expect(useUi.getState().waypoints.length).toBe(0)
  })

  it('ROUTE-UI-004 Shift-click (or the Straight toggle) keeps the old single straight step', () => {
    startMove('rm-4', { x: -1.5, y: 0, z: 1 }, tallWall())
    clickPoint({ x: 1.5, y: 0, z: 1 }, { straight: true })
    expect(useUi.getState().waypoints).toEqual([{ x: 1.5, z: 1, y: 0 }])
    useUi.getState().resetPath()
    useUi.setState({ straight: true })
    clickPoint({ x: 1.5, y: 0, z: 1 })
    expect(useUi.getState().waypoints).toEqual([{ x: 1.5, z: 1, y: 0 }])
  })

  it('ROUTE-UI-005 a rooftop tap gets a climb route the engine prices with the climb', () => {
    const { state, move, id } = startMove('rm-5', { x: 0, y: 0, z: 0 }, feature('tower', part('tower.a', rect(1, 4, -1.5, 1.5), 3, ['vantage'])))
    clickPoint({ x: 2, y: 3, z: 0 })
    const wps = useUi.getState().waypoints
    expect(wps[wps.length - 1]!.y).toBe(3)
    const plan = planMove(state, state.operatives[id]!, 'reposition', wps, false, move.constraints!.maxInches)
    expect(plan.ok && plan.breakdown.climb).toBe(3)
    expect(confirmPath()).toBeNull()
    expect(useGame.getState().state!.operatives[id]!.pos.y).toBe(3)
  })

  it('ROUTE-UI-006 a Charge aimed at an enemy routes to a legal spot in its control range', () => {
    const { state, move, id } = startMove('rm-6', { x: -3, y: 0, z: 0 })
    const enemy = Object.values(state.operatives).find((o) => o.seat !== state.operatives[id]!.seat)!
    const st: GameState = { ...state, operatives: { ...state.operatives, [enemy.id]: { ...enemy, pos: { x: 2, y: 0, z: 0 } } } }
    const charge: PendingDecision = { ...move, constraints: { ...move.constraints!, kind: 'charge', maxInches: 8, allowEnterEnemyControlRange: true, mustEndInControlRangeOf: 'enemy', mustEndOutsideControlRange: false } }
    const r = routeLeg(st, charge, [], { x: 2, y: 0, z: 0 }, null, enemy.id)
    expect(r?.ok).toBe(true)
    if (!r?.ok) return
    const plan = planMove(st, st.operatives[id]!, 'charge', r.leg, false, 8, enemy.id)
    expect(plan.ok).toBe(true)
  })
})
