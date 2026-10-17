// STR: strategy.* (R-2). Initiative roll-off with the tie rule, CP gain, ready all, gambit alternation.
import { startFirefight } from './firefight'
import { reject, type Ctx, type Handled, type ModuleDef } from './registry'
import { activeOps, otherSeat, SEATS } from './state'
import type { Action, GameState, RuntimeGambit, Seat } from './types'

export const TURNING_POINTS = 4

/** Start a turning point: clear Guard, reset per-TP ledgers, then the Strategy phase begins with the roll-off. */
export function beginTurningPoint(ctx: Ctx): void {
  const s = ctx.state
  s.turningPoint += 1
  ctx.emit({ type: 'TurningPointStarted', number: s.turningPoint }, null)
  // R-2.6: Guard (and transmitting) end at the start of the next TP, before the Strategy phase.
  for (const op of Object.values(s.operatives)) {
    if (op.flags.guard) {
      op.flags.guard = false
      ctx.emit({ type: 'GuardCleared', operativeId: op.id, reason: 'turningPoint' }, op.seat)
    }
    op.flags.counteractedThisTP = false
  }
  s.phase = 'strategy'
  ctx.emit({ type: 'PhaseStarted', name: 'strategy' }, null)
  s.strategy = { step: 'initiative', rolls: {}, gambit: { turn: s.initiative ?? 'A', passes: 0, used: { A: [], B: [] } } }
  raiseInitiativeRoll(ctx, 'A')
}

function raiseInitiativeRoll(ctx: Ctx, seat: Seat): void {
  ctx.raise({
    kind: 'strategy.initiative',
    seat,
    window: 'turningPoint.start',
    context: { rolls: { ...ctx.state.strategy.rolls }, holder: ctx.state.initiative },
    options: [{ id: 'roll', labelKey: 'strategy.rollInitiative', type: 'strategy.initiative', payload: {} }],
  })
}

function handleRoll(_state: GameState, action: Action): Handled {
  if (action.type !== 'strategy.initiative') return reject('E_WRONG_DECISION', 'expected an initiative roll')
  return {
    run(ctx) {
      const s = ctx.state
      const seat = action.seat
      const [v] = ctx.roll('strategy.initiative', 1)
      s.strategy.rolls[seat] = v!
      const { A, B } = s.strategy.rolls
      if (A === undefined || B === undefined) {
        raiseInitiativeRoll(ctx, otherSeat(seat))
        return
      }
      if (A !== B) {
        decideInitiative(ctx, A > B ? 'A' : 'B')
        return
      }
      // R-2.1: on a tie the player who did not hold initiative decides (TP1: who lacked it in setup).
      const previous = s.initiative ?? 'A'
      const decider = otherSeat(previous)
      s.strategy.step = 'decide'
      ctx.raise({
        kind: 'strategy.decideInitiative',
        seat: decider,
        window: 'turningPoint.start',
        context: { rolls: { A, B }, tie: true },
        options: SEATS.map((x) => ({
          id: x,
          labelKey: x === decider ? 'strategy.initiativeSelf' : 'strategy.initiativeOpponent',
          type: 'strategy.decideInitiative' as const,
          payload: { seat: x },
        })),
      })
    },
  }
}

function handleDecide(_state: GameState, action: Action): Handled {
  if (action.type !== 'strategy.decideInitiative') return reject('E_WRONG_DECISION', 'expected an initiative decision')
  const holder = action.payload.seat
  return { run: (ctx) => decideInitiative(ctx, holder) }
}

function decideInitiative(ctx: Ctx, holder: Seat): void {
  const s = ctx.state
  s.initiative = holder
  ctx.emit({ type: 'InitiativeDecided', holder, setup: false }, holder)
  readyStep(ctx)
}

/** R-2.2: CP gain, then ready all operatives; then the Gambit step. */
function readyStep(ctx: Ctx): void {
  const s = ctx.state
  s.strategy.step = 'ready'
  const holder = s.initiative!
  for (const seat of SEATS) {
    const gain = s.turningPoint === 1 ? 1 : seat === holder ? 1 : 2
    const p = s.players[seat]
    p.cp += gain
    ctx.emit({ type: 'CpChanged', delta: gain, cp: p.cp, reason: 'strategy' }, seat)
  }
  const ids: string[] = []
  for (const op of activeOps(s)) {
    op.ready = true
    ids.push(op.id)
  }
  ctx.emit({ type: 'OperativesReadied', operativeIds: ids }, null)
  s.strategy.step = 'gambit'
  s.strategy.gambit = { turn: holder, passes: 0, used: { A: [], B: [] } }
  advanceGambit(ctx)
}

/** Strategic gambits the seat can use now: affordable, not already used this TP (R-2.4). */
export function availableGambits(state: GameState, seat: Seat): RuntimeGambit[] {
  const used = state.strategy.gambit.used[seat]
  const team = state.players[seat].teamId
  return state.data.gambits.filter(
    (g) => (!g.teamId || g.teamId === team) && !used.includes(g.id) && g.cost <= state.players[seat].cp,
  )
}

function advanceGambit(ctx: Ctx): void {
  const s = ctx.state
  const g = s.strategy.gambit
  // A seat with no usable gambit passes implicitly; the step ends after two passes in succession (R-2.3).
  while (g.passes < 2) {
    const avail = availableGambits(s, g.turn)
    if (avail.length > 0) {
      ctx.raise({
        kind: 'strategy.gambit',
        seat: g.turn,
        window: 'strategy.gambit',
        context: { passes: g.passes },
        canPass: true,
        options: avail.map((gm) => ({
          id: gm.id,
          labelKey: 'strategy.gambit',
          type: 'strategy.gambit' as const,
          payload: { gambitId: gm.id },
          data: { cost: gm.cost, name: gm.name },
        })),
      })
      return
    }
    ctx.emit({ type: 'GambitPassed' }, g.turn)
    g.passes += 1
    g.turn = otherSeat(g.turn)
  }
  s.strategy.step = 'done'
  ctx.emit({ type: 'PhaseEnded', name: 'strategy' }, null)
  startFirefight(ctx)
}

function handleGambit(state: GameState, action: Action): Handled {
  if (action.type === 'pass') {
    return {
      run(ctx) {
        const g = ctx.state.strategy.gambit
        ctx.emit({ type: 'GambitPassed' }, action.seat)
        g.passes += 1
        g.turn = otherSeat(g.turn)
        advanceGambit(ctx)
      },
    }
  }
  if (action.type !== 'strategy.gambit') return reject('E_WRONG_DECISION', 'expected a gambit choice')
  const gambit = state.data.gambits.find((g) => g.id === action.payload.gambitId)
  if (!gambit) return reject('E_NOT_AN_OPTION', 'unknown gambit')
  if (state.strategy.gambit.used[action.seat].includes(gambit.id)) {
    return reject('E_PLOY_USED', 'a gambit cannot be used twice in one turning point')
  }
  if (gambit.cost > state.players[action.seat].cp) return reject('E_INSUFFICIENT_CP', 'not enough CP')
  return {
    run(ctx) {
      const s = ctx.state
      const p = s.players[action.seat]
      p.cp -= gambit.cost
      s.strategy.gambit.used[action.seat].push(gambit.id)
      ctx.emit({ type: 'CpChanged', delta: -gambit.cost, cp: p.cp, reason: gambit.id })
      ctx.emit({ type: 'GambitUsed', gambitId: gambit.id })
      // TODO(M2b): apply the gambit's effect through the ploy/ability interpreter.
      s.strategy.gambit.passes = 0
      s.strategy.gambit.turn = otherSeat(action.seat)
      advanceGambit(ctx)
    },
  }
}

export const strategyModule: ModuleDef = {
  id: 'strategy',
  namespaces: ['strategy'],
  handle(state, action, pending) {
    switch (pending.kind) {
      case 'strategy.initiative':
        return handleRoll(state, action)
      case 'strategy.decideInitiative':
        return handleDecide(state, action)
      case 'strategy.gambit':
        return handleGambit(state, action)
      default:
        return reject('E_TODO', `${pending.kind} is not implemented until M2b`)
    }
  },
}
