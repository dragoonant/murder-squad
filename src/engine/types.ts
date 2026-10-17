// Contract types for the engine (code form of docs/spec/00-architecture.md sections 3-7).
// Frozen after M2: changes are additive and get a dated row in the 00-architecture change log.

export type Seat = 'A' | 'B'
export type Order = 'engage' | 'conceal'
export type Phase = 'setup' | 'strategy' | 'firefight' | 'ended'

export interface Vec2 {
  x: number
  z: number
}
export interface Vec3 {
  x: number
  y: number
  z: number
}
export type Polygon = Vec2[]

export type RollTarget = 2 | 3 | 4 | 5 | 6

export type TerrainTrait =
  | 'light'
  | 'heavy'
  | 'blocking'
  | 'vantage'
  | 'accessible'
  | 'insignificant'
  | 'exposed'
  | 'ceiling'
  | 'barred'

// ---------------------------------------------------------------------------
// Runtime data shapes (the engine's own view of data; TODO(M2b) adapter fills them from src/data)
// ---------------------------------------------------------------------------

export interface WeaponRuleRef {
  rule: string
  x?: number
  inches?: number
  target?: RollTarget
  crits?: boolean
}

export interface RuntimeWeapon {
  id: string
  name: string
  type: 'ranged' | 'melee'
  atk: number
  hit: RollTarget
  dmg: { normal: number; crit: number }
  rules: WeaponRuleRef[]
  profileGroup?: string
  code?: string
}

export interface RuntimeAbility {
  id: string
  name: string
  kind: 'ability' | 'uniqueAction' | 'weaponRule' | 'factionRule' | 'archetype'
  ap?: number
  keywords?: string[]
  /** declarative effect or `{ code }` escape hatch; interpreted in M2b */
  effect?: unknown
  conditions?: Record<string, unknown>
  code?: string
}

export interface WeaponOption {
  id: string
  pick: number
  min?: number
  from: string[]
}

export interface RuntimeDatacard {
  id: string
  name: string
  teamId: string
  apl: number
  move: number
  save: RollTarget
  wounds: number
  baseMm: number
  /** miniature height in inches; derived from the base when omitted */
  heightInches?: number
  keywords: string[]
  fixedWeapons: string[]
  weaponOptions: WeaponOption[]
  abilities: string[]
  uniqueActions: string[]
  expendable?: boolean
  nonOperativeForSelection?: boolean
}

export interface RuntimeTeam {
  id: string
  name: string
  factionKeyword: string
  operatives: number
}

export interface RuntimeGambit {
  id: string
  name: string
  cost: number
  teamId?: string
}

/** The weapons an operative chose from its datacard options (fixed weapons are implied). */
export interface Loadout {
  weaponIds: string[]
}

/** Snapshot of the data the game uses; copied into the state so `step` needs no bundle. */
export interface GameData {
  dataVersion: string
  datacards: Record<string, RuntimeDatacard>
  weapons: Record<string, RuntimeWeapon>
  abilities: Record<string, RuntimeAbility>
  teams: Record<string, RuntimeTeam>
  gambits: RuntimeGambit[]
}

// ---------------------------------------------------------------------------
// Map and terrain
// ---------------------------------------------------------------------------

export interface TerrainPartDef {
  id: string
  footprint: Polygon
  /** top surface height in inches above the killzone floor */
  height: number
  /** underside of the solid; defaults to 0 (Ceiling parts default to height - 0.25) */
  bottom?: number
  traits: TerrainTrait[]
  /** extra placeable surface heights (Vantage floors) in addition to `height` for Vantage parts */
  vantageFloors?: number[]
  /** ignored when judging control range visibility (doors, low stronghold parts) */
  crTransparent?: boolean
}

export interface TerrainFeatureDef {
  id: string
  name?: string
  parts: TerrainPartDef[]
}

export interface DropZoneDef {
  id: string
  polygon: Polygon
}

export interface MapDef {
  id: string
  size: { x: number; z: number }
  dropZones: DropZoneDef[]
  features: TerrainFeatureDef[]
}

export interface RulesOptions {
  /** other operatives' cylinders block visibility (00-architecture section 7). Default true. */
  operativesBlockVisibility: boolean
}

export interface RosterEntry {
  datacardId: string
  loadout?: Loadout
  name?: string
}

export interface GameSetup {
  teams: Record<Seat, string>
  rosters: Record<Seat, RosterEntry[]>
  /** equipment option ids per seat (max four, no repeats); placement is a stub until M2b */
  equipment?: Record<Seat, string[]>
  map: MapDef
  rules?: Partial<RulesOptions>
}

// ---------------------------------------------------------------------------
// Game state
// ---------------------------------------------------------------------------

export interface RngState {
  s: [number, number, number, number]
}

export type OperativeStatus = 'reserve' | 'active' | 'removed'

export interface OperativeFlags {
  guard: boolean
  counteractedThisTP: boolean
  carrying: string | null
  injured: boolean
}

export interface Operative {
  id: string
  seat: Seat
  datacardId: string
  name: string
  loadout: Loadout
  /** fixed + chosen weapon ids */
  weapons: string[]
  status: OperativeStatus
  /** pos.y = surface height under the base (Vantage floors) */
  pos: Vec3
  /** radians; bearing of the last move, +Z is 0 */
  facing: number
  baseRadius: number
  height: number
  wounds: number
  maxWounds: number
  order: Order
  ready: boolean
  /** printed APL */
  apl: number
  /** net APL modifiers, clamped to +/-1 when applied */
  aplMods: number
  move: number
  save: RollTarget
  flags: OperativeFlags
  usedLimited: Record<string, number>
  oncePerBattleUsed: string[]
}

export interface PlayerState {
  seat: Seat
  teamId: string
  cp: number
  vp: number
  equipment: string[]
  dropZoneId: string | null
}

export type MarkerKind = 'objective' | 'equipment'

export interface Marker {
  id: string
  kind: MarkerKind
  pos: Vec2
  owner: Seat | null
  carriedBy: string | null
  controller: Seat | null
}

export interface SetupState {
  step: 'rollOff' | 'decideInitiative' | 'dropZones' | 'deploy' | 'done'
  rolls: { A?: number; B?: number }
  rollWinner: Seat | null
  setupInitiative: Seat | null
  /** seat to choose the next drop zone */
  dropZoneTurn: Seat | null
  deploy: { turn: Seat; left: number }
}

export interface StrategyState {
  step: 'initiative' | 'decide' | 'ready' | 'gambit' | 'done'
  rolls: { A?: number; B?: number }
  gambit: { turn: Seat; passes: number; used: Record<Seat, string[]> }
}

export interface Activation {
  operativeId: string
  seat: Seat
  counteract: boolean
  stage: 'order' | 'action'
  apSpent: number
  performed: string[]
  declared: { action: string; cost: number } | null
}

export interface FirefightState {
  turn: Seat
  activation: Activation | null
}

export interface GameResult {
  winner: Seat | 'draw'
  vp: Record<Seat, number>
  reason: 'turningPoint' | 'resign'
  /** true until M2b scoring replaces the placeholder */
  placeholder: boolean
}

export interface GameState {
  version: 1
  engineVersion: string
  seed: string
  phase: Phase
  turningPoint: number
  /** number of accepted actions so far; equals log.length */
  seq: number
  nextDecision: number
  pending: PendingDecision | null
  rng: RngState
  hash: string
  log: Action[]
  /** seq of the last accepted action that rolled dice (-1 when none) */
  lastRollSeq: number
  origin: { setup: GameSetup }
  rules: RulesOptions
  data: GameData
  map: MapDef
  players: Record<Seat, PlayerState>
  operatives: Record<string, Operative>
  markers: Marker[]
  /** seat currently holding initiative */
  initiative: Seat | null
  setup: SetupState
  strategy: StrategyState
  firefight: FirefightState
  result: GameResult | null
}

// ---------------------------------------------------------------------------
// Decisions, actions, rejections
// ---------------------------------------------------------------------------

export type TimingWindowId =
  | 'setup.*'
  | 'turningPoint.start'
  | 'strategy.gambit'
  | 'firefight.activationStart'
  | 'firefight.actionDeclared'
  | 'firefight.actionEnded'
  | 'shoot.targetSelected'
  | 'shoot.attackRolled'
  | 'shoot.defenceRolled'
  | 'shoot.resolved'
  | 'fight.weaponsSelected'
  | 'fight.rolled'
  | 'fight.resolved'
  | 'operative.incapacitated'
  | 'firefight.activationEnded'
  | 'turningPoint.end'
  | 'battle.end'

export type DecisionKind =
  | 'setup.initiative'
  | 'setup.decideInitiative'
  | 'setup.dropZone'
  | 'setup.deploy'
  | 'setup.equipMarker'
  | 'strategy.initiative'
  | 'strategy.decideInitiative'
  | 'strategy.gambit'
  | 'firefight.activate'
  | 'firefight.order'
  | 'firefight.action'
  | 'move.path'
  | 'shoot.weapon'
  | 'shoot.target'
  | 'shoot.coverSave'
  | 'shoot.block'
  | 'fight.target'
  | 'fight.weapon'
  | 'fight.resolve'
  | 'dice.reroll'
  | 'dice.commandReroll'
  | 'weapon.choice'
  | 'ploy.firefight'
  | 'guard.interrupt'
  | 'marker.pickUp'
  | 'marker.place'
  | 'mission.action'
  | 'ability.choice'
  | 'confirm'

export interface Waypoint {
  x: number
  z: number
  /** surface height the increment ends on; defaults to the previous waypoint's */
  y?: number
  /** this increment is a jump (R-12.4) */
  jump?: boolean
}

export interface ActionPayloadMap {
  'setup.initiative': Record<string, never>
  'setup.decideInitiative': { seat: Seat }
  'setup.dropZone': { zoneId: string }
  'setup.deploy': { operativeId: string; x: number; z: number; y?: number }
  'setup.equipMarker': Record<string, unknown>
  'strategy.initiative': Record<string, never>
  'strategy.decideInitiative': { seat: Seat }
  'strategy.gambit': { gambitId: string }
  'firefight.activate': { operativeId: string; counteract?: boolean }
  'firefight.order': { order: Order }
  'firefight.action': { action: string }
  'move.path': { waypoints: Waypoint[] }
  'shoot.weapon': Record<string, unknown>
  'shoot.target': Record<string, unknown>
  'shoot.coverSave': Record<string, unknown>
  'shoot.block': Record<string, unknown>
  'fight.target': Record<string, unknown>
  'fight.weapon': Record<string, unknown>
  'fight.resolve': Record<string, unknown>
  'dice.reroll': Record<string, unknown>
  'dice.commandReroll': Record<string, unknown>
  'weapon.choice': Record<string, unknown>
  'ploy.firefight': Record<string, unknown>
  'guard.interrupt': Record<string, unknown>
  'marker.pickUp': Record<string, unknown>
  'marker.place': Record<string, unknown>
  'mission.action': Record<string, unknown>
  'ability.choice': Record<string, unknown>
  confirm: Record<string, unknown>
  pass: Record<string, never>
  resign: Record<string, never>
}

export type ActionType = keyof ActionPayloadMap

export type ActionOf<K extends ActionType> = {
  type: K
  seat: Seat
  decisionId: string
  /** assigned on accept; optional on input */
  seq?: number
  payload: ActionPayloadMap[K]
}

/** Discriminated union generated from the payload map. */
export type Action = { [K in ActionType]: ActionOf<K> }[ActionType]

export interface DecisionOption {
  id: string
  labelKey: string
  action: Action
  data?: Record<string, unknown>
}

export interface MoveConstraints {
  kind: 'reposition' | 'dash' | 'fallBack' | 'charge' | 'deploy'
  operativeId?: string
  operativeIds?: string[]
  origin?: Vec3
  baseRadius?: number
  maxInches?: number
  allowClimb?: boolean
  allowEnterEnemyControlRange?: boolean
  mustEndInControlRangeOf?: 'enemy'
  mustEndOutsideControlRange?: boolean
  counteract?: boolean
  /** deploy: the polygon the base must lie wholly within */
  region?: Polygon
}

export interface PendingDecision {
  id: string
  seat: Seat
  kind: DecisionKind
  window: TimingWindowId
  context: Record<string, unknown>
  options?: DecisionOption[]
  constraints?: MoveConstraints
  canPass: boolean
}

export type RejectionCode =
  | 'E_WRONG_DECISION'
  | 'E_WRONG_SEAT'
  | 'E_NOT_AN_OPTION'
  | 'E_OUT_OF_RANGE'
  | 'E_OVERLAP'
  | 'E_CONTROL_RANGE'
  | 'E_NO_PATH'
  | 'E_NO_AP'
  | 'E_ACTION_RESTRICTED'
  | 'E_INVALID_TARGET'
  | 'E_NOT_VISIBLE'
  | 'E_INSUFFICIENT_CP'
  | 'E_PLOY_USED'
  | 'E_PASS_NOT_ALLOWED'
  | 'E_GAME_OVER'
  | 'E_SCHEMA'
  /** the rule exists but is implemented in a later milestone (M2b stubs) */
  | 'E_TODO'

export interface Rejection {
  code: RejectionCode
  reason: string
  details?: Record<string, unknown>
}

/** Per-seat redacted view handed to deciders. */
export type PlayerView = Omit<GameState, 'rng' | 'log'> & { viewer: Seat }

export interface StepResult {
  state: GameState
  events: import('./events').GameEvent[]
  pending: PendingDecision | null
  rejection?: Rejection
}

export interface SaveFile {
  version: 1
  engineVersion: string
  setup: GameSetup
  seed: string
  actions: Action[]
  finalHash: string
}
