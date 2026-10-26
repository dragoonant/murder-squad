// Touch drag lock: a one-finger touch that lands inside the move area (the range the move preview draws) does not pan the
// camera; the finger drives the hover preview, a tap still adds a step and lifting after a drag adds none. A touch that
// lands outside pans as before.
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { PerspectiveCamera } from 'three'
import { createGame, type GameState } from '@/engine'
import { buildScenario } from '@/client/dev/scenarios'
import { buildGameSetup, dataBundle, engineBundle } from '@/client/game/adapter'
import { fullBuild, resolveLayout, resolveMission, resolveTeam } from '@/client/game/defaults'
import { createTapGuard, groundHit, startsInArea, TAP_SLOP } from '@/client/board/touchCamera'
import { clickPoint, hoverPoint, moveReach, moveTouchArea } from '@/client/interaction/controller'
import { catchUpPresented } from '@/client/presentation/presentedStore'
import { useSettings } from '@/client/presentation/settings'
import { useSight } from '@/client/interaction/sightStore'
import { useGame } from '@/client/store/game'
import { useUi } from '@/client/ui/uiStore'

function startMove(): void {
  const b = dataBundle()
  useGame.getState().newGame({
    builds: { A: fullBuild(b, resolveTeam(b, 'aod')), B: fullBuild(b, resolveTeam(b, 'kom')) },
    seats: { A: 'human', B: 'human' },
    seed: 'drag-lock-1',
    missionId: resolveMission(b, 'secure').id,
    layoutId: resolveLayout(b, '01').id,
    mapId: 'prelim-1',
    prepare: (base: GameState) => buildScenario('shoot-cover', base),
  })
  const g = useGame.getState()
  const gunner = Object.values(g.state!.operatives).find((o) => o.seat === 'A' && o.datacardId === 'aod.intercessor-gunner')!
  expect(g.choose(g.pending!.options!.find((o) => (o.action.payload as { operativeId?: string }).operativeId === gunner.id && !(o.action.payload as { counteract?: boolean }).counteract)!.id)).toBeNull()
  expect(useGame.getState().choose('engage')).toBeNull()
  expect(useGame.getState().choose('reposition')).toBeNull()
  for (let i = 0; i < 5 && useGame.getState().pending?.kind === 'ploy.firefight'; i++) useGame.getState().pass()
  expect(useGame.getState().pending!.kind).toBe('move.path')
  catchUpPresented()
}

describe('touch drag lock in the move area', () => {
  beforeEach(() => {
    useSettings.getState().setAnimSpeed('instant')
    useGame.getState().reset()
    useUi.getState().resetPath()
    useUi.setState({ hover: null, jumpNext: false })
    useSight.setState({ measureOn: false })
  })
  afterEach(() => useGame.getState().reset())

  it('the lock area is the very disc the move preview draws, and follows the planned path', () => {
    startMove()
    const { state, pending } = useGame.getState()
    const op = state!.operatives[pending!.constraints!.operativeId!]!
    const area = moveTouchArea()!
    const reach = moveReach(state!, pending!, [])!
    expect(area).toMatchObject({ x: op.pos.x, z: op.pos.z, r: reach.left })
    // one step in: the area moves to the end of the path with the inches that are left
    clickPoint({ x: op.pos.x + 0.01, z: op.pos.z + 1.5, y: op.pos.y })
    expect(useUi.getState().waypoints).toHaveLength(1)
    const next = moveTouchArea()!
    const r2 = moveReach(state!, pending!, useUi.getState().waypoints)!
    expect(next).toMatchObject({ x: r2.centre.x, z: r2.centre.z, r: r2.left })
    expect(next.r).toBeLessThan(area.r)
  })

  it('no area (so the finger pans) when no human move is open, during the jump step, or under the measure tool', () => {
    expect(moveTouchArea()).toBeNull()
    startMove()
    expect(moveTouchArea()).not.toBeNull()
    useUi.setState({ jumpNext: true })
    expect(moveTouchArea()).toBeNull()
    useUi.setState({ jumpNext: false })
    useSight.setState({ measureOn: true })
    expect(moveTouchArea()).toBeNull()
  })

  it('a finger landing inside the area locks the camera; one landing outside pans', () => {
    startMove()
    const area = moveTouchArea()!
    const cam = new PerspectiveCamera(45, 16 / 9, 0.1, 200)
    cam.position.set(area.x, 25, area.z + 21)
    cam.lookAt(area.x, 0, area.z)
    // the screen centre looks at the operative: inside the disc
    const mid = groundHit(cam, 0, 0, area.y)!
    expect(mid.x).toBeCloseTo(area.x, 3)
    expect(mid.z).toBeCloseTo(area.z, 3)
    expect(startsInArea(area, mid)).toBe(true)
    // a point on the far side of the board is outside it
    const far = groundHit(cam, 0.95, 0.95, area.y)!
    expect(startsInArea(area, far)).toBe(false)
    expect(startsInArea(null, mid)).toBe(false)
    expect(startsInArea(area, null)).toBe(false)
  })

  it('a locked finger drives the hover preview like a mouse; a tap inside adds a step; a drag inside adds none', () => {
    startMove()
    const { state } = useGame.getState()
    const op = state!.operatives[useGame.getState().pending!.constraints!.operativeId!]!
    const spot = { x: op.pos.x + 0.01, z: op.pos.z + 1.5, y: op.pos.y }
    // the finger moving over the board = the board's pointer-move: the same hover the mouse sets
    hoverPoint(spot)
    expect(useUi.getState().hover).toEqual(spot)

    // tap: down and up inside the slop, the click that follows reaches the game and adds a step
    const tap = createTapGuard()
    tap.down(1, 200, 200, true, true)
    tap.move(1, 200 + TAP_SLOP - 2, 200)
    tap.up(1)
    expect(tap.suppressClick()).toBe(false)
    if (!tap.suppressClick()) clickPoint(spot)
    expect(useUi.getState().waypoints.length).toBe(1)

    // drag: past the slop the click that ends it is swallowed, so lifting adds no step (the owner only wanted to see the path)
    const drag = createTapGuard()
    drag.down(2, 200, 200, true, true)
    drag.move(2, 200 + TAP_SLOP + 20, 200)
    hoverPoint({ x: spot.x + 1, z: spot.z + 1, y: spot.y })
    drag.up(2)
    expect(drag.suppressClick()).toBe(true)
    expect(useUi.getState().waypoints.length).toBe(1)
  })
})
