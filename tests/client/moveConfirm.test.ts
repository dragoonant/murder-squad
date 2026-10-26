// The on-board green check / red X for a move path: they send what the prompt's Confirm / Undo step / Cancel send,
// they only exist for a human seat's move.path, and the X cancels the move when nothing is planned.
import { beforeEach, describe, expect, it } from 'vitest'
import { legalActions, type GameState, type PendingDecision, type Waypoint } from '@/engine'
import { RandomBot } from '@/client/bot/randomBot'
import { dataBundle } from '@/client/game/adapter'
import { defaultBuild, resolveLayout, resolveMission, resolveTeam } from '@/client/game/defaults'
import { confirmPath, moveButtons, previewMove, undoOrCancelPath } from '@/client/interaction/controller'
import { useSettings } from '@/client/presentation/settings'
import { useGame } from '@/client/store/game'
import { useUi } from '@/client/ui/uiStore'

function startMove(seed: string) {
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
    if (!state || !pending) break
    if (isMove(pending, state)) break
    const a = pending.kind === 'firefight.action'
      ? (legalActions(state, pending) ?? []).find((x) => x.type === 'firefight.action' && ['reposition', 'dash'].includes(x.payload.action)) ?? bot.decide(state, pending)
      : bot.decide(state, pending)
    expect(useGame.getState().dispatch(a)).toBeNull()
  }
  const pick = useGame.getState().pending!
  const reposition = pick.options!.find((o) => o.action.type === 'firefight.action' && o.action.payload.action === 'reposition')!
  expect(useGame.getState().dispatch(reposition.action)).toBeNull()
  for (let i = 0; i < 5 && useGame.getState().pending?.kind === 'ploy.firefight'; i++) expect(useGame.getState().pass()).toBeNull()
  const move = useGame.getState().pending!
  expect(move.kind).toBe('move.path')
  const state = useGame.getState().state!
  return { state, move, op: state.operatives[move.constraints!.operativeId!]! }
}

/** Two legal one-inch-ish steps from the mover, found by the engine's own preview. */
function twoSteps(state: GameState, move: PendingDecision, op: GameState['operatives'][string]): Waypoint[] {
  for (let k = 0; k < 16; k++) {
    const a: Waypoint = { x: op.pos.x + Math.sin(k * 0.4) * 1.5, z: op.pos.z + Math.cos(k * 0.4) * 1.5, y: op.pos.y }
    for (let j = 0; j < 16; j++) {
      const b: Waypoint = { x: a.x + Math.sin(j * 0.4) * 1.5, z: a.z + Math.cos(j * 0.4) * 1.5, y: op.pos.y }
      if (previewMove(state, move, [a]).ok && previewMove(state, move, [a, b]).ok) return [a, b]
    }
  }
  throw new Error('no legal two-step path')
}

describe('move confirm buttons', () => {
  beforeEach(() => {
    useGame.getState().reset()
    useUi.getState().resetPath()
  })

  it('OK is only enabled for a legal path, then confirms it like the prompt (turn moves on, AP spent, path cleared)', () => {
    const { state, move, op } = startMove('mc-1')
    const empty = moveButtons(state, move)!
    expect(empty.okEnabled).toBe(false)
    expect(empty.left).toBeNull()
    const [a] = twoSteps(state, move, op)
    useUi.setState({ waypoints: [a!] })
    const b = moveButtons(state, move)!
    expect(b.okEnabled).toBe(true)
    expect(b.left).toBe(previewMove(state, move, [a!]).plan!.maxInches - previewMove(state, move, [a!]).plan!.cost)
    expect(b.anchor).toMatchObject({ x: previewMove(state, move, [a!]).plan!.end.x, z: previewMove(state, move, [a!]).plan!.end.z })
    expect(confirmPath()).toBeNull()
    expect(useGame.getState().pending?.id).not.toBe(move.id)
    expect(useUi.getState().waypoints).toEqual([])
  })

  it('X undoes one step at a time and leaves the move open', () => {
    const { state, move, op } = startMove('mc-1')
    const steps = twoSteps(state, move, op)
    useUi.setState({ waypoints: steps })
    expect(moveButtons(state, move)!.x).toBe('undo')
    expect(undoOrCancelPath()).toBe('undo')
    expect(useUi.getState().waypoints).toEqual([steps[0]])
    expect(useGame.getState().pending?.id).toBe(move.id)
    expect(undoOrCancelPath()).toBe('undo')
    expect(useUi.getState().waypoints).toEqual([])
    expect(useGame.getState().pending?.id).toBe(move.id)
  })

  it('X with no steps cancels the move (the decision is passed, no AP spent) and anchors on the mover', () => {
    const { state, move, op } = startMove('mc-1')
    const b = moveButtons(state, move)!
    expect(b.x).toBe('cancel')
    expect(b.xEnabled).toBe(move.canPass === true)
    expect(b.anchor).toMatchObject({ x: op.pos.x, z: op.pos.z })
    const before = state.firefight.activation!.apSpent
    expect(undoOrCancelPath()).toBe('cancel')
    const after = useGame.getState()
    expect(after.pending?.id).not.toBe(move.id)
    expect(after.state!.firefight.activation?.apSpent ?? before).toBe(before)
  })

  it('no buttons for a bot seat or for a decision that is not a move path', () => {
    const { state, move } = startMove('mc-1')
    expect(moveButtons(state, move)).not.toBeNull()
    expect(moveButtons(state, { ...move, kind: 'firefight.action' })).toBeNull()
    expect(moveButtons(state, null)).toBeNull()
    useGame.setState({ seats: { A: 'bot', B: 'bot' } })
    expect(moveButtons(state, move)).toBeNull()
  })
})
