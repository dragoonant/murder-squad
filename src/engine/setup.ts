// SET: setup.* (R-1.2 to R-1.5). Builds the game, rolls off for setup initiative, picks drop zones,
// then deploys operatives alternately in batches of one third (rounded up).
import type { EngineBundle } from './bundle'
import { snapshotData } from './bundle'
import { bearing, circleInsidePolygon, polygonBBox, round3 } from './geometry'
import { beginTurningPoint } from './strategy'
import { SeededRng } from './rng'
import { createCtx, reject, type Ctx, type Handled, type ModuleDef } from './registry'
import { EngineInvariantError, hashState, otherSeat, SEATS } from './state'
import { placementProblem } from './terrain'
import {
  type Action,
  type GameSetup,
  type GameState,
  type Loadout,
  type Operative,
  type PendingDecision,
  type Seat,
  type StepResult,
  type Vec3,
} from './types'

export const ENGINE_VERSION = '0.1.0'

const MAX_EQUIPMENT = 4

/** A batch is min(ceil(N/3), operatives left to place) where N is the roster size (RULING in R-1.5). */
export function batchSize(rosterSize: number, left: number): number {
  return Math.min(Math.ceil(rosterSize / 3), left)
}

function defaultLoadout(card: { weaponOptions: { pick: number; min?: number; from: string[] }[] }): Loadout {
  const ids: string[] = []
  for (const opt of card.weaponOptions) ids.push(...opt.from.slice(0, opt.min ?? opt.pick))
  return { weaponIds: ids }
}

function validateSetup(setup: GameSetup, bundle: EngineBundle): void {
  const fail = (msg: string): never => {
    throw new EngineInvariantError(`invalid setup: ${msg}`)
  }
  if (setup.map.dropZones.length < 2) fail('the map needs at least two drop zones')
  for (const seat of SEATS) {
    const teamId = setup.teams[seat]
    if (!bundle.teams[teamId]) fail(`unknown team ${teamId}`)
    const roster = setup.rosters[seat]
    if (roster.length === 0) fail(`seat ${seat} has an empty roster`)
    for (const entry of roster) {
      const card = bundle.datacards[entry.datacardId]
      if (!card) fail(`unknown datacard ${entry.datacardId}`)
      else {
        if (card.teamId !== teamId) fail(`${card.id} does not belong to team ${teamId}`)
        const chosen = entry.loadout?.weaponIds ?? defaultLoadout(card).weaponIds
        for (const opt of card.weaponOptions) {
          const n = chosen.filter((w) => opt.from.includes(w)).length
          if (n > opt.pick || n < (opt.min ?? opt.pick)) fail(`loadout for ${card.id} breaks option ${opt.id}`)
        }
        const allowed = new Set(card.weaponOptions.flatMap((o) => o.from))
        for (const w of chosen) if (!allowed.has(w)) fail(`${w} is not a weapon option of ${card.id}`)
      }
    }
    const equipment = setup.equipment?.[seat] ?? []
    if (equipment.length > MAX_EQUIPMENT) fail(`seat ${seat} picked more than ${MAX_EQUIPMENT} equipment options`)
    if (new Set(equipment).size !== equipment.length) fail(`seat ${seat} repeated an equipment option`)
  }
}

export function createGame(setup: GameSetup, seed: string, bundle: EngineBundle): StepResult {
  validateSetup(setup, bundle)
  const operatives: Record<string, Operative> = {}
  const cardIds: string[] = []
  for (const seat of SEATS) {
    setup.rosters[seat].forEach((entry, i) => {
      const card = bundle.datacards[entry.datacardId]!
      cardIds.push(card.id)
      const id = `${seat}${i + 1}`
      const loadout = entry.loadout ?? defaultLoadout(card)
      const baseRadius = round3(card.baseMm / 25.4 / 2)
      operatives[id] = {
        id,
        seat,
        datacardId: card.id,
        name: entry.name ?? card.name,
        loadout: { weaponIds: [...loadout.weaponIds] },
        weapons: [...card.fixedWeapons, ...loadout.weaponIds],
        status: 'reserve',
        pos: { x: 0, y: 0, z: 0 },
        facing: 0,
        baseRadius,
        height: card.heightInches ?? round3((card.baseMm / 25.4) * 1.15 + 0.1),
        wounds: card.wounds,
        maxWounds: card.wounds,
        order: 'conceal',
        ready: false,
        apl: card.apl,
        aplMods: 0,
        move: card.move,
        save: card.save,
        flags: { guard: false, counteractedThisTP: false, carrying: null, injured: false },
        usedLimited: {},
        oncePerBattleUsed: [],
      }
    })
  }

  const state: GameState = {
    version: 1,
    engineVersion: ENGINE_VERSION,
    seed,
    phase: 'setup',
    turningPoint: 0,
    seq: 0,
    nextDecision: 0,
    pending: null,
    rng: SeededRng.fromSeed(seed).serialize(),
    hash: '',
    log: [],
    lastRollSeq: -1,
    origin: { setup },
    rules: { operativesBlockVisibility: setup.rules?.operativesBlockVisibility ?? true },
    data: snapshotData(bundle, cardIds),
    map: setup.map,
    players: {
      A: { seat: 'A', teamId: setup.teams.A, cp: 2, vp: 0, equipment: [...(setup.equipment?.A ?? [])], dropZoneId: null },
      B: { seat: 'B', teamId: setup.teams.B, cp: 2, vp: 0, equipment: [...(setup.equipment?.B ?? [])], dropZoneId: null },
    },
    operatives,
    markers: [],
    initiative: null,
    setup: {
      step: 'rollOff',
      rolls: {},
      rollWinner: null,
      setupInitiative: null,
      dropZoneTurn: null,
      deploy: { turn: 'A', left: 0 },
    },
    strategy: { step: 'initiative', rolls: {}, gambit: { turn: 'A', passes: 0, used: { A: [], B: [] } } },
    firefight: { turn: 'A', activation: null },
    result: null,
  }
  state.data.gambits = bundle.gambits.filter((g) => !g.teamId || g.teamId === setup.teams.A || g.teamId === setup.teams.B)

  const rng = SeededRng.restore(state.rng)
  const ctx = createCtx(state, rng, null, -1)
  ctx.emit({ type: 'GameCreated', seed, engineVersion: ENGINE_VERSION }, null)
  ctx.emit({ type: 'PhaseStarted', name: 'setup' }, null)
  // TODO(M2b): choose mission, type terrain, place objective markers before the roll-off.
  raiseRollOff(ctx, 'A')
  state.hash = hashState(state)
  return { state, events: ctx.events, pending: state.pending }
}

function raiseRollOff(ctx: Ctx, seat: Seat): void {
  ctx.raise({
    kind: 'setup.initiative',
    seat,
    window: 'setup.*',
    context: { rolls: { ...ctx.state.setup.rolls } },
    options: [{ id: 'roll', labelKey: 'setup.rollOff', type: 'setup.initiative', payload: {} }],
  })
}

function raiseDropZone(ctx: Ctx, seat: Seat): void {
  const s = ctx.state
  const taken = new Set(SEATS.map((x) => s.players[x].dropZoneId).filter((z): z is string => z !== null))
  const free = s.map.dropZones.filter((z) => !taken.has(z.id))
  ctx.raise({
    kind: 'setup.dropZone',
    seat,
    window: 'setup.*',
    context: { taken: [...taken] },
    options: free.map((z) => ({
      id: z.id,
      labelKey: 'setup.dropZone',
      type: 'setup.dropZone' as const,
      payload: { zoneId: z.id },
    })),
  })
}

function reserveOf(s: GameState, seat: Seat): Operative[] {
  return Object.values(s.operatives).filter((o) => o.seat === seat && o.status === 'reserve')
}

function raiseDeploy(ctx: Ctx): void {
  const s = ctx.state
  const seat = s.setup.deploy.turn
  const reserve = reserveOf(s, seat)
  const zone = s.map.dropZones.find((z) => z.id === s.players[seat].dropZoneId)!
  ctx.raise({
    kind: 'setup.deploy',
    seat,
    window: 'setup.*',
    context: { left: s.setup.deploy.left, reserveIds: reserve.map((o) => o.id), zoneId: zone.id },
    constraints: { kind: 'deploy', operativeIds: reserve.map((o) => o.id), region: zone.polygon },
  })
}

function rosterSize(s: GameState, seat: Seat): number {
  return Object.values(s.operatives).filter((o) => o.seat === seat).length
}

function startDeploy(ctx: Ctx): void {
  const s = ctx.state
  s.setup.step = 'deploy'
  const first = s.setup.setupInitiative!
  s.setup.deploy = { turn: first, left: batchSize(rosterSize(s, first), reserveOf(s, first).length) }
  raiseDeploy(ctx)
}

function advanceDeploy(ctx: Ctx, justPlaced: Seat): void {
  const s = ctx.state
  const d = s.setup.deploy
  const mine = reserveOf(s, justPlaced).length
  if (d.left > 0 && mine > 0) {
    raiseDeploy(ctx)
    return
  }
  const other = otherSeat(justPlaced)
  const theirs = reserveOf(s, other).length
  if (theirs > 0) {
    s.setup.deploy = { turn: other, left: batchSize(rosterSize(s, other), theirs) }
  } else if (mine > 0) {
    s.setup.deploy = { turn: justPlaced, left: batchSize(rosterSize(s, justPlaced), mine) }
  } else {
    // TODO(M2b): equipment marker placement (setup.equipMarker) happens before operatives are set up.
    s.setup.step = 'done'
    ctx.emit({ type: 'PhaseEnded', name: 'setup' }, null)
    beginTurningPoint(ctx)
    return
  }
  raiseDeploy(ctx)
}

function numeric(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v)
}

function handleDeploy(state: GameState, action: Action): Handled {
  if (action.type !== 'setup.deploy') return reject('E_WRONG_DECISION', 'expected a deploy action')
  const p = action.payload
  if (!p || typeof p.operativeId !== 'string' || !numeric(p.x) || !numeric(p.z) || (p.y !== undefined && !numeric(p.y))) {
    return reject('E_SCHEMA', 'deploy needs operativeId, x and z')
  }
  const op = state.operatives[p.operativeId]
  if (!op || op.seat !== action.seat) return reject('E_NOT_AN_OPTION', `${p.operativeId} is not one of your operatives`)
  if (op.status !== 'reserve') return reject('E_NOT_AN_OPTION', `${op.id} is already set up`)
  const pos: Vec3 = { x: round3(p.x), y: round3(p.y ?? 0), z: round3(p.z) }
  const zone = state.map.dropZones.find((z) => z.id === state.players[op.seat].dropZoneId)!
  if (!circleInsidePolygon(pos, op.baseRadius, zone.polygon)) {
    return reject('E_OUT_OF_RANGE', 'an operative must be set up wholly within its drop zone')
  }
  const problem = placementProblem(state, { id: op.id, pos, radius: op.baseRadius, height: op.height })
  if (problem) return { rejection: problem }
  return {
    run(ctx) {
      const o = ctx.state.operatives[op.id]!
      o.status = 'active'
      o.pos = pos
      o.order = 'conceal'
      o.ready = false
      o.facing = bearing(pos, { x: 0, z: 0 })
      ctx.emit({ type: 'OperativeDeployed', operativeId: o.id, pos })
      ctx.state.setup.deploy.left -= 1
      advanceDeploy(ctx, o.seat)
    },
  }
}

function handleRollOff(state: GameState, action: Action): Handled {
  if (action.type !== 'setup.initiative') return reject('E_WRONG_DECISION', 'expected a roll-off action')
  return {
    run(ctx) {
      const s = ctx.state
      const seat = action.seat
      const [v] = ctx.roll('setup.rollOff', 1)
      s.setup.rolls[seat] = v!
      const { A, B } = s.setup.rolls
      if (A === undefined || B === undefined) {
        raiseRollOff(ctx, otherSeat(seat))
        return
      }
      if (A === B) {
        s.setup.rolls = {}
        raiseRollOff(ctx, 'A')
        return
      }
      const winner: Seat = A > B ? 'A' : 'B'
      s.setup.rollWinner = winner
      s.setup.step = 'decideInitiative'
      ctx.raise({
        kind: 'setup.decideInitiative',
        seat: winner,
        window: 'setup.*',
        context: { rolls: { A, B } },
        options: SEATS.map((x) => ({
          id: x,
          labelKey: x === winner ? 'setup.initiativeSelf' : 'setup.initiativeOpponent',
          type: 'setup.decideInitiative' as const,
          payload: { seat: x },
        })),
      })
    },
  }
}

function handleDecideInitiative(state: GameState, action: Action): Handled {
  if (action.type !== 'setup.decideInitiative') return reject('E_WRONG_DECISION', 'expected a setup initiative decision')
  const holder = action.payload.seat
  return {
    run(ctx) {
      const s = ctx.state
      s.setup.setupInitiative = holder
      s.initiative = holder
      ctx.emit({ type: 'InitiativeDecided', holder, setup: true })
      s.setup.step = 'dropZones'
      s.setup.dropZoneTurn = holder
      raiseDropZone(ctx, holder)
    },
  }
}

function handleDropZone(state: GameState, action: Action): Handled {
  if (action.type !== 'setup.dropZone') return reject('E_WRONG_DECISION', 'expected a drop zone choice')
  const zoneId = action.payload.zoneId
  return {
    run(ctx) {
      const s = ctx.state
      const seat = action.seat
      s.players[seat].dropZoneId = zoneId
      ctx.emit({ type: 'DropZoneChosen', zoneId })
      const other = otherSeat(seat)
      if (s.players[other].dropZoneId === null) {
        s.setup.dropZoneTurn = other
        raiseDropZone(ctx, other)
      } else {
        s.setup.dropZoneTurn = null
        startDeploy(ctx)
      }
    },
  }
}

export const setupModule: ModuleDef = {
  id: 'setup',
  namespaces: ['setup'],
  handle(state, action, pending) {
    switch (pending.kind) {
      case 'setup.initiative':
        return handleRollOff(state, action)
      case 'setup.decideInitiative':
        return handleDecideInitiative(state, action)
      case 'setup.dropZone':
        return handleDropZone(state, action)
      case 'setup.deploy':
        return handleDeploy(state, action)
      default:
        return reject('E_TODO', `${pending.kind} is not implemented until M2b`)
    }
  },
}

/**
 * Deterministic grid scan for a legal set-up spot (used by bots, the invariant checker and tests so
 * a continuous deploy decision is never without a legal answer). `skip` rotates the starting spot.
 */
export function suggestPlacement(
  state: GameState,
  pending: PendingDecision,
  operativeId?: string,
  skip = 0,
): { operativeId: string; x: number; z: number; y: number } | null {
  const c = pending.constraints
  if (!c || c.kind !== 'deploy' || !c.region) return null
  const id = operativeId ?? c.operativeIds?.[0]
  const op = id ? state.operatives[id] : undefined
  if (!op) return null
  const box = polygonBBox(c.region)
  const step = 0.5
  const cols = Math.floor((box.maxX - box.minX) / step)
  const rows = Math.floor((box.maxZ - box.minZ) / step)
  const total = (cols + 1) * (rows + 1)
  for (let n = 0; n < total; n++) {
    const k = (n + skip) % total
    const x = round3(box.minX + (k % (cols + 1)) * step)
    const z = round3(box.minZ + Math.floor(k / (cols + 1)) * step)
    const pos = { x, y: 0, z }
    if (!circleInsidePolygon(pos, op.baseRadius, c.region)) continue
    if (placementProblem(state, { id: op.id, pos, radius: op.baseRadius, height: op.height })) continue
    return { operativeId: op.id, x, z, y: 0 }
  }
  return null
}
