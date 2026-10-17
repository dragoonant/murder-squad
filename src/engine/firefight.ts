// FF: firefight.* (R-3, R-4). Activation alternation, orders, the AP ledger, action restrictions,
// counteract, expended, and the turning point end. Shoot/Fight/Guard interrupts arrive in M2b.
import { enemiesInControlRange } from './measure'
import { beginTurningPoint, TURNING_POINTS } from './strategy'
import { moveConstraints, moveLimit, type MoveKind } from './movement'
import { reject, type Ctx, type Handled, type ModuleDef, type OptionInput } from './registry'
import { effectiveApl, getOp, otherSeat, readyOps, seatOps } from './state'
import type {
  Action,
  Activation,
  GameState,
  Operative,
  PendingDecision,
  Rejection,
  Seat,
} from './types'

export interface ActionDef {
  cost: number
  move?: MoveKind
  /** false until M2b: never offered, reported as E_TODO if chosen */
  implemented: boolean
}

export const ACTIONS: Record<string, ActionDef> = {
  reposition: { cost: 1, move: 'reposition', implemented: true },
  dash: { cost: 1, move: 'dash', implemented: true },
  fallBack: { cost: 2, move: 'fallBack', implemented: true },
  charge: { cost: 1, move: 'charge', implemented: true },
  guard: { cost: 1, implemented: true },
  shoot: { cost: 1, implemented: false },
  fight: { cost: 1, implemented: false },
}

export const ACTION_ORDER = ['reposition', 'dash', 'fallBack', 'charge', 'guard', 'shoot', 'fight']

/** Action cost after modifiers; never below 0 (R-3.6). TODO(M2b): action.cost hooks. */
export function actionCost(_state: GameState, _op: Operative, actionId: string): number {
  return Math.max(0, ACTIONS[actionId]?.cost ?? 0)
}

function hasSilentRanged(state: GameState, op: Operative): boolean {
  return op.weapons.some((w) => {
    const def = state.data.weapons[w]
    return def?.type === 'ranged' && def.rules.some((r) => r.rule === 'silent')
  })
}

/**
 * Rules check for starting an action (order, conditions, restrictions, AP). Does not look at
 * whether the action is implemented yet. `activation` may be null for pure rules queries.
 */
export function actionAvailability(
  state: GameState,
  op: Operative,
  actionId: string,
  activation: Activation | null,
): Rejection | null {
  const def = ACTIONS[actionId]
  if (!def) return { code: 'E_NOT_AN_OPTION', reason: `unknown action ${actionId}` }
  const counteract = activation?.counteract ?? false
  const performed = activation?.performed ?? []
  const restricted = (reason: string): Rejection => ({ code: 'E_ACTION_RESTRICTED', reason })
  const cost = actionCost(state, op, actionId)

  if (!counteract && performed.includes(actionId)) {
    return restricted(`${actionId} cannot be performed twice in one activation`)
  }
  const inEnemyCr = enemiesInControlRange(state, op, op.seat).length > 0
  switch (actionId) {
    case 'reposition':
      if (inEnemyCr) return restricted('cannot Reposition while in an enemy control range')
      if (performed.includes('fallBack') || performed.includes('charge')) {
        return restricted('Reposition is barred after Fall Back or Charge')
      }
      break
    case 'dash':
      if (inEnemyCr) return restricted('cannot Dash while in an enemy control range')
      if (performed.includes('charge')) return restricted('Dash is barred after Charge')
      break
    case 'fallBack':
      if (!inEnemyCr) return restricted('Fall Back needs an enemy in control range')
      if (performed.includes('reposition') || performed.includes('charge')) {
        return restricted('Fall Back is barred after Reposition or Charge')
      }
      break
    case 'charge':
      if (op.order === 'conceal') return restricted('a Conceal operative cannot Charge')
      if (inEnemyCr) return restricted('cannot Charge while in an enemy control range')
      if (performed.includes('reposition') || performed.includes('dash') || performed.includes('fallBack')) {
        return restricted('Charge is barred after Reposition, Dash or Fall Back')
      }
      break
    case 'guard':
      if (op.order === 'conceal') return restricted('a Conceal operative cannot go on Guard')
      if (inEnemyCr) return restricted('cannot go on Guard while in an enemy control range')
      break
    case 'shoot':
      if (op.order === 'conceal' && !hasSilentRanged(state, op)) {
        return restricted('a Conceal operative cannot Shoot except with a Silent weapon')
      }
      if (inEnemyCr) return restricted('cannot Shoot while in an enemy control range')
      break
    case 'fight':
      if (!inEnemyCr) return restricted('Fight needs an enemy in control range')
      break
  }
  if (counteract) {
    if (actionId === 'guard') return restricted('a counteraction cannot be Guard')
    if (cost !== 1) return restricted('a counteraction must cost exactly 1 AP')
  } else if (activation && activation.apSpent + cost > effectiveApl(op)) {
    return { code: 'E_NO_AP', reason: `${actionId} needs ${cost} AP but only ${Math.max(0, effectiveApl(op) - activation.apSpent)} remain` }
  }
  return null
}

// ---------------------------------------------------------------------------
// Flow
// ---------------------------------------------------------------------------

export function startFirefight(ctx: Ctx): void {
  const s = ctx.state
  s.phase = 'firefight'
  ctx.emit({ type: 'PhaseStarted', name: 'firefight' }, null)
  s.firefight = { turn: s.initiative!, activation: null }
  advance(ctx)
}

/** Opponent-has-ready counteract candidates for `seat`: expended, Engage, not yet counteracted this TP. */
export function counteractCandidates(state: GameState, seat: Seat): Operative[] {
  return seatOps(state, seat).filter((o) => !o.ready && o.order === 'engage' && !o.flags.counteractedThisTP)
}

function advance(ctx: Ctx): void {
  const s = ctx.state
  for (let i = 0; i < 4; i++) {
    const seat = s.firefight.turn
    const mine = readyOps(s, seat)
    const theirs = readyOps(s, otherSeat(seat))
    if (mine.length === 0 && theirs.length === 0) {
      endTurningPoint(ctx)
      return
    }
    if (mine.length > 0) {
      raiseActivate(ctx, seat, mine, [])
      return
    }
    const eligible = counteractCandidates(s, seat)
    if (eligible.length > 0) {
      raiseActivate(ctx, seat, [], eligible)
      return
    }
    s.firefight.turn = otherSeat(seat)
  }
}

function raiseActivate(ctx: Ctx, seat: Seat, ready: Operative[], counter: Operative[]): void {
  const options: OptionInput[] = [
    ...ready.map((o) => ({
      id: o.id,
      labelKey: 'firefight.activate',
      type: 'firefight.activate' as const,
      payload: { operativeId: o.id },
    })),
    ...counter.map((o) => ({
      id: `counteract:${o.id}`,
      labelKey: 'firefight.counteract',
      type: 'firefight.activate' as const,
      payload: { operativeId: o.id, counteract: true },
    })),
  ]
  ctx.raise({
    kind: 'firefight.activate',
    seat,
    window: 'firefight.activationEnded',
    context: { ready: ready.map((o) => o.id), counteract: counter.map((o) => o.id) },
    options,
    // R-3.2: a player with a ready operative must activate it; otherwise they may skip.
    canPass: ready.length === 0,
  })
}

function raiseAction(ctx: Ctx): void {
  const s = ctx.state
  const act = s.firefight.activation!
  const op = getOp(s, act.operativeId)
  const options: OptionInput[] = []
  for (const id of ACTION_ORDER) {
    const def = ACTIONS[id]!
    if (!def.implemented) continue
    if (actionAvailability(s, op, id, act)) continue
    options.push({
      id,
      labelKey: `action.${id}`,
      type: 'firefight.action',
      payload: { action: id },
      data: { cost: actionCost(s, op, id) },
    })
  }
  if (options.length === 0) {
    // Nothing left to do: the activation (or counteraction) ends by itself.
    if (act.counteract) endCounteract(ctx)
    else endActivation(ctx)
    return
  }
  options.push({
    id: 'end',
    labelKey: act.counteract ? 'action.declineCounteract' : 'action.end',
    type: 'firefight.action',
    payload: { action: 'end' },
  })
  ctx.raise({
    kind: 'firefight.action',
    seat: act.seat,
    window: 'firefight.actionEnded',
    context: {
      operativeId: op.id,
      counteract: act.counteract,
      apl: effectiveApl(op),
      apSpent: act.apSpent,
      apRemaining: act.counteract ? 1 : Math.max(0, effectiveApl(op) - act.apSpent),
      performed: [...act.performed],
    },
    options,
  })
}

function clearGuard(ctx: Ctx, op: Operative, reason: string): void {
  if (!op.flags.guard) return
  op.flags.guard = false
  ctx.emit({ type: 'GuardCleared', operativeId: op.id, reason }, op.seat)
}

function endActivation(ctx: Ctx): void {
  const s = ctx.state
  const act = s.firefight.activation!
  const op = getOp(s, act.operativeId)
  op.ready = false
  ctx.emit({ type: 'OperativeExpended', operativeId: op.id }, op.seat)
  s.firefight.activation = null
  s.firefight.turn = otherSeat(act.seat)
  advance(ctx)
}

function endCounteract(ctx: Ctx): void {
  const s = ctx.state
  const act = s.firefight.activation!
  s.firefight.activation = null
  s.firefight.turn = otherSeat(act.seat)
  advance(ctx)
}

/** Called by the movement module (or any action module) once the declared action completed. */
export function finishAction(ctx: Ctx): void {
  const s = ctx.state
  const act = s.firefight.activation!
  const op = getOp(s, act.operativeId)
  const decl = act.declared!
  if (!act.counteract) {
    act.apSpent += decl.cost
    ctx.emit({ type: 'ApSpent', operativeId: op.id, amount: decl.cost, total: act.apSpent }, op.seat)
  }
  act.performed.push(decl.action)
  if (decl.action !== 'guard') clearGuard(ctx, op, 'action')
  ctx.emit({ type: 'ActionResolved', operativeId: op.id, action: decl.action }, op.seat)
  act.declared = null
  // TODO(M2b): firefight.actionEnded window - Guard interrupts and ploys open here.
  if (act.counteract) endCounteract(ctx)
  else raiseAction(ctx)
}

/** A declared action that cannot be completed is cancelled: nothing changes, no AP is spent (R-3.8). */
export function cancelAction(ctx: Ctx): void {
  const s = ctx.state
  const act = s.firefight.activation!
  const decl = act.declared!
  ctx.emit({ type: 'ActionCancelled', operativeId: act.operativeId, action: decl.action }, act.seat)
  act.declared = null
  raiseAction(ctx)
}

export function endTurningPoint(ctx: Ctx): void {
  const s = ctx.state
  ctx.emit({ type: 'PhaseEnded', name: 'firefight' }, null)
  ctx.emit({ type: 'TurningPointEnded', number: s.turningPoint }, null)
  if (s.turningPoint >= TURNING_POINTS) {
    endGame(ctx, 'turningPoint')
    return
  }
  beginTurningPoint(ctx)
}

/** Ends the battle. TODO(M2b): replace the placeholder with mission scoring (VP, kill grade, crit op). */
export function endGame(ctx: Ctx, reason: 'turningPoint' | 'resign', resigned?: Seat): void {
  const s = ctx.state
  const vp = { A: s.players.A.vp, B: s.players.B.vp }
  let winner: Seat | 'draw' = vp.A === vp.B ? 'draw' : vp.A > vp.B ? 'A' : 'B'
  if (reason === 'resign' && resigned) winner = otherSeat(resigned)
  s.result = { winner, vp, reason, placeholder: true }
  s.phase = 'ended'
  s.pending = null
  s.firefight.activation = null
  ctx.emit({ type: 'GameEnded', result: s.result }, null)
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

function handleActivate(state: GameState, action: Action): Handled {
  if (action.type === 'pass') {
    return {
      run(ctx) {
        ctx.emit({ type: 'CounteractSkipped' }, action.seat)
        ctx.state.firefight.turn = otherSeat(action.seat)
        advance(ctx)
      },
    }
  }
  if (action.type !== 'firefight.activate') return reject('E_WRONG_DECISION', 'expected an activation')
  const { operativeId, counteract } = action.payload
  const op = state.operatives[operativeId]
  if (!op || op.seat !== action.seat || op.status !== 'active') {
    return reject('E_NOT_AN_OPTION', `${operativeId} cannot activate`)
  }
  if (counteract === true) {
    if (op.ready) return reject('E_ACTION_RESTRICTED', 'only an expended operative can counteract')
    if (op.order !== 'engage') return reject('E_ACTION_RESTRICTED', 'only an Engage operative can counteract')
    if (op.flags.counteractedThisTP) return reject('E_ACTION_RESTRICTED', 'an operative counteracts once per turning point')
    if (readyOps(state, action.seat).length > 0) {
      return reject('E_ACTION_RESTRICTED', 'counteract needs every friendly operative expended')
    }
    return {
      run(ctx) {
        const s = ctx.state
        const o = getOp(s, operativeId)
        o.flags.counteractedThisTP = true
        clearGuard(ctx, o, 'counteract')
        ctx.emit({ type: 'Counteracted', operativeId: o.id })
        s.firefight.activation = {
          operativeId: o.id,
          seat: o.seat,
          counteract: true,
          stage: 'action',
          apSpent: 0,
          performed: [],
          declared: null,
        }
        raiseAction(ctx)
      },
    }
  }
  if (!op.ready) return reject('E_ACTION_RESTRICTED', 'that operative is expended')
  return {
    run(ctx) {
      const s = ctx.state
      const o = getOp(s, operativeId)
      s.firefight.activation = {
        operativeId: o.id,
        seat: o.seat,
        counteract: false,
        stage: 'order',
        apSpent: 0,
        performed: [],
        declared: null,
      }
      ctx.emit({ type: 'OperativeActivated', operativeId: o.id })
      ctx.raise({
        kind: 'firefight.order',
        seat: o.seat,
        window: 'firefight.activationStart',
        context: { operativeId: o.id, current: o.order },
        options: (['engage', 'conceal'] as const).map((order) => ({
          id: order,
          labelKey: `order.${order}`,
          type: 'firefight.order' as const,
          payload: { order },
        })),
      })
    },
  }
}

function handleOrder(state: GameState, action: Action): Handled {
  if (action.type !== 'firefight.order') return reject('E_WRONG_DECISION', 'expected an order')
  const order = action.payload.order
  return {
    run(ctx) {
      const s = ctx.state
      const act = s.firefight.activation!
      const o = getOp(s, act.operativeId)
      if (o.order !== order) clearGuard(ctx, o, 'order')
      o.order = order
      act.stage = 'action'
      ctx.emit({ type: 'OrderSet', operativeId: o.id, order })
      // TODO(M2b): firefight.activationStart ploy window.
      raiseAction(ctx)
    },
  }
}

function handleAction(state: GameState, action: Action): Handled {
  if (action.type !== 'firefight.action') return reject('E_WRONG_DECISION', 'expected an action choice')
  const act = state.firefight.activation
  if (!act) return reject('E_WRONG_DECISION', 'no operative is active')
  const id = action.payload.action
  if (id === 'end') {
    return { run: (ctx) => (act.counteract ? endCounteract(ctx) : endActivation(ctx)) }
  }
  const op = getOp(state, act.operativeId)
  const unavailable = actionAvailability(state, op, id, act)
  if (unavailable) return { rejection: unavailable }
  const def = ACTIONS[id]!
  if (!def.implemented) return reject('E_TODO', `${id} is not implemented until M2b`)
  const cost = actionCost(state, op, id)
  return {
    run(ctx) {
      const s = ctx.state
      const a = s.firefight.activation!
      const o = getOp(s, a.operativeId)
      ctx.emit({ type: 'ActionDeclared', operativeId: o.id, action: id, cost }, o.seat)
      a.declared = { action: id, cost }
      if (def.move) {
        ctx.raise({
          kind: 'move.path',
          seat: o.seat,
          window: 'firefight.actionDeclared',
          context: { operativeId: o.id, action: id, maxInches: moveLimit(o, def.move, a.counteract) },
          constraints: moveConstraints(o, def.move, a.counteract),
          canPass: true,
        })
        return
      }
      if (id === 'guard') {
        o.flags.guard = true
        ctx.emit({ type: 'GuardSet', operativeId: o.id }, o.seat)
      }
      finishAction(ctx)
    },
  }
}

export const firefightModule: ModuleDef = {
  id: 'firefight',
  namespaces: ['firefight', 'confirm', 'guard'],
  handle(state, action, pending) {
    switch (pending.kind) {
      case 'firefight.activate':
        return handleActivate(state, action)
      case 'firefight.order':
        return handleOrder(state, action)
      case 'firefight.action':
        return handleAction(state, action)
      default:
        return reject('E_TODO', `${pending.kind} is not implemented until M2b`)
    }
  },
  explain(state, action, pending: PendingDecision) {
    if (pending.kind !== 'firefight.action' || action.type !== 'firefight.action') return null
    const act = state.firefight.activation
    if (!act) return null
    const id = action.payload.action
    const op = getOp(state, act.operativeId)
    const unavailable = actionAvailability(state, op, id, act)
    if (unavailable) return unavailable
    if (ACTIONS[id] && !ACTIONS[id]!.implemented) {
      return { code: 'E_TODO', reason: `${id} is not implemented until M2b` }
    }
    return null
  },
}
