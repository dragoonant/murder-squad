// Team rule providers (M9 engine prep, additive). The questions firefight.ts, setup.ts, missions.ts,
// markers, fight.ts, shoot.ts and equipment.ts ask about team rules (how often an action repeats, who may
// counteract, which orders are allowed, whether a Conceal operative may Charge, extra actions, who counts
// for the kill op, control APL, Move changes, chained activations, reactions...) used to be answered by
// branches naming Angels of Death and Kommandos rules. A team file (src/engine/teams/<team>.ts) registers
// a provider here and the shared files consult every provider, so a new team needs no edit outside its own
// files. Every member is optional; `null` / `undefined` means "no opinion".
//
// Members taking `state` must be pure functions of it (they run inside queries, validation and the AI).
// Members taking `ctx` run inside a step only and may roll dice and change state through `ctx`, but never
// raise decisions. Providers run in registration order (src/engine/teams/index.ts import order).
import type { Ctx } from './registry'
import type { AttackState, DiceSide, GameState, Marker, Operative, Order, Seat, Vec3 } from './types'

/** One answer a team gives to "may this player react to that action?" (Quicksilver Strike). */
export interface ReactionOffer {
  /** code hook (code-hooks.ts) whose `choice(ctx, op, option, context)` performs the reaction */
  hook: string
  /** the reacting operative */
  operativeId: string
  /** passed back to the hook's choice as `option` */
  option: string
  labelKey: string
  data?: Record<string, unknown>
}

/** What happened, for `reactions`. */
export interface ReactionInfo {
  /** the operative that performed the action */
  actorId: string
  action: string
  /** seat whose activation (or counteraction) the action belonged to */
  activeSeat: Seat
  /** the action moved the actor or set it up (move actions, Grappling Hook, emerging) */
  moved: boolean
}

export interface TeamRuleProvider {
  /** unique id, usually the team id; re-registering the same id replaces the provider */
  id: string

  // ---- actions and orders --------------------------------------------------------------------
  /** times `actionId` may be performed in one activation (R-3.7); the highest answer wins */
  maxRepeats?(state: GameState, op: Operative, actionId: string, performed: string[]): number | null
  /** 'any' lets the operative counteract whatever its order; 'never' forbids counteracting */
  counteract?(state: GameState, op: Operative): 'any' | 'never' | null
  /** orders the operative may take; answers are intersected (an empty result falls back to the core answer) */
  orders?(state: GameState, op: Operative): Order[] | null
  /** the operative may Charge while it has a Conceal order */
  chargeUnderConceal?(state: GameState, op: Operative): boolean
  /** the operative may Charge from inside an enemy control range */
  chargeFromControlRange?(state: GameState, op: Operative): boolean
  /** the operative may Shoot while in an enemy control range */
  shootInControlRange?(state: GameState, op: Operative): boolean
  /** the operative may Shoot with non-Silent weapons while it has a Conceal order (Magnify through a proxy) */
  shootUnderConceal?(state: GameState, op: Operative): boolean
  /** the operative may perform Guard while it has a Conceal order (Dimensional Ambush) */
  guardUnderConceal?(state: GameState, op: Operative): boolean
  /** a reason the operative can never take `actionId` (universal id or `ability:<id>`), or null */
  actionForbidden?(state: GameState, op: Operative, actionId: string): string | null
  /** AP change for an action (universal id, `ability:<id>`, `marker:pickUp`); summed with data costDelta (never below 0) */
  actionCostDelta?(state: GameState, op: Operative, actionId: string): number
  /** extra unique-action ability ids the operative may take (beyond its card, mission and equipment) */
  extraActions?(state: GameState, op: Operative): string[]
  /** the only unique actions an operative out of the killzone (`offboard`) may take, e.g. emerging from HIDING */
  offboardActions?(state: GameState, op: Operative): string[]

  // ---- stats ---------------------------------------------------------------------------------
  /** flags derived from team rules and effects, recomputed by refreshFlags (ORed with the core flags) */
  flags?(state: GameState, op: Operative): { ignoreApl?: boolean; ignoreInjured?: boolean } | null
  /** inches added to (or taken from) the operative's Move; summed; Move never drops below 4" (R-9.6) */
  moveDelta?(state: GameState, op: Operative): number
  /**
   * the operative suffers the injured stat changes (Move -2", Hit worse by 1) as if injured, without
   * stacking with real injury and even when it ignores injury (Contagion)
   */
  injuredEquivalent?(state: GameState, op: Operative): boolean

  // ---- kill op, equipment, roster ------------------------------------------------------------
  /** true: the operative is ignored for the kill op (starting count and incapacitations), like Expendable */
  killOpIgnored?(state: GameState, op: Operative): boolean
  /** may the operative receive the weapons a piece of equipment grants (null: use the equipment's grants.to) */
  equipmentEligible?(state: GameState, op: Operative, equipmentId: string): boolean | null
  /** may this operative be set aside instead of deployed at set-up (Wyrmblade HIDING) */
  setAsideAtSetup?(state: GameState, op: Operative): boolean
  /** how many operatives of `seat` may be set aside at set-up (smallest answer wins) */
  setAsideCap?(state: GameState, seat: Seat): number | null

  // ---- marker control (R-8.6) ----------------------------------------------------------------
  /** the APL this operative counts for when control of `marker` is worked out (Icon Bearer +1, Drone -1, Steadfast 3) */
  controlApl?(state: GameState, op: Operative, marker: Marker, apl: number): number | null
  /** the seat's contesting total after per-operative values (Despair -1, a Reanimation marker counting as APL 1) */
  controlTotal?(state: GameState, seat: Seat, marker: Marker, total: number, contesting: string[]): number | null

  // ---- activation flow -----------------------------------------------------------------------
  /**
   * After `expended` ends its activation: ready friendly operatives the same seat must activate next
   * (Group Activation). `wasChained` is true when `expended` itself was activated through a chain.
   */
  chainActivation?(state: GameState, expended: Operative, wasChained: boolean): string[] | null
  /** the seat picked `op` to activate: true stops it this time (Vision of Madness); only asked when another ready operative exists */
  gateActivation?(ctx: Ctx, op: Operative): boolean
  /** reactions the non-active `seat` may take after an action (Quicksilver Strike), offered as one ability.choice */
  reactions?(state: GameState, seat: Seat, info: ReactionInfo): ReactionOffer[]

  // ---- attacks -------------------------------------------------------------------------------
  /** no die of `side` may be re-rolled (Nightmare Shroud, Suppressing Fire) */
  rerollsBanned?(state: GameState, side: DiceSide, attack: AttackState): boolean
  /** extra weapons the operative may fight or retaliate with, e.g. a ranged profile used as melee (Point-Blank Fusillade) */
  extraFightWeapons?(state: GameState, op: Operative, retaliating: boolean): string[]
  /** once per fight sequence, before the first strike or block: who resolves first, owed resolutions, seats that cannot block */
  fightResolveStart?(state: GameState, attack: AttackState): { first?: Seat; queue?: { seat: Seat; blockOnly?: boolean }[]; noBlock?: Seat[] } | null
  /** after `seat` struck or blocked: resolutions owed before the alternation continues (Assassinate's second strike) */
  afterFightResolution?(state: GameState, attack: AttackState, seat: Seat, op: 'strike' | 'block'): { seat: Seat; blockOnly?: boolean }[] | null
  /** friendly operatives the shooter may use as its viewpoint for this weapon (Magnify proxies); offered as weapon options */
  shootViewpoints?(state: GameState, shooter: Operative, weaponId: string): string[]
  /** extra Stealthy-style cover sources when the operative is shot (Cult Agent): retain one more cover save or one as a crit */
  stealthyCover?(state: GameState, op: Operative): number

  // ---- movement and markers ------------------------------------------------------------------
  /**
   * inches added to a move's cost (Grav-inhibitor: +2" once when the path comes visible to and within 6");
   * `points` are the increment end points in order, `breakdown` the costs so far (return a negative
   * amount to cancel Accessible or Obstructing extras). Summed; the move fails if it then exceeds its limit.
   */
  moveSurcharge?(state: GameState, op: Operative, kind: string, points: Vec3[], breakdown: { horizontal: number; accessible: number; climb: number; drop: number }): number
  /** the operative never triggers this mine (Explosive Traps: friendly Wyrmblade operatives) */
  ignoresMine?(state: GameState, op: Operative, mine: Marker): boolean
}

const providers = new Map<string, TeamRuleProvider>()

export function registerTeamRules(p: TeamRuleProvider): void {
  providers.set(p.id, p)
}

export function unregisterTeamRules(id: string): void {
  providers.delete(id)
}

export function teamRuleProviders(): TeamRuleProvider[] {
  return [...providers.values()]
}

/** Highest provider answer for an action's repeat limit, or null when no provider has one. */
export function providerMaxRepeats(state: GameState, op: Operative, actionId: string, performed: string[]): number | null {
  let best: number | null = null
  for (const p of providers.values()) {
    const n = p.maxRepeats?.(state, op, actionId, performed)
    if (n !== null && n !== undefined && (best === null || n > best)) best = n
  }
  return best
}

export function providerCounteract(state: GameState, op: Operative): 'any' | 'never' | null {
  let out: 'any' | 'never' | null = null
  for (const p of providers.values()) {
    const a = p.counteract?.(state, op) ?? null
    if (a === 'never') return 'never'
    if (a === 'any') out = 'any'
  }
  return out
}

export function providerOrders(state: GameState, op: Operative): Order[] | null {
  let out: Order[] | null = null
  for (const p of providers.values()) {
    const o = p.orders?.(state, op)
    if (!o) continue
    out = out === null ? [...o] : out.filter((x) => o.includes(x))
  }
  return out
}

type BoolKey = 'chargeUnderConceal' | 'chargeFromControlRange' | 'shootInControlRange' | 'shootUnderConceal' | 'guardUnderConceal' | 'killOpIgnored' | 'setAsideAtSetup' | 'injuredEquivalent'

export function providerAny(state: GameState, op: Operative, key: BoolKey): boolean {
  for (const p of providers.values()) if (p[key]?.(state, op)) return true
  return false
}

export function providerActionForbidden(state: GameState, op: Operative, actionId: string): string | null {
  for (const p of providers.values()) {
    const why = p.actionForbidden?.(state, op, actionId)
    if (why) return why
  }
  return null
}

export function providerCostDelta(state: GameState, op: Operative, actionId: string): number {
  let d = 0
  for (const p of providers.values()) d += p.actionCostDelta?.(state, op, actionId) ?? 0
  return d
}

function collectIds(fn: (p: TeamRuleProvider) => string[] | undefined): string[] {
  const out: string[] = []
  for (const p of providers.values()) for (const id of fn(p) ?? []) if (!out.includes(id)) out.push(id)
  return out
}

export function providerExtraActions(state: GameState, op: Operative): string[] {
  return collectIds((p) => p.extraActions?.(state, op))
}

export function providerOffboardActions(state: GameState, op: Operative): string[] {
  return collectIds((p) => p.offboardActions?.(state, op))
}

export function providerFlags(state: GameState, op: Operative): { ignoreApl: boolean; ignoreInjured: boolean } {
  const out = { ignoreApl: false, ignoreInjured: false }
  for (const p of providers.values()) {
    const f = p.flags?.(state, op)
    if (f?.ignoreApl) out.ignoreApl = true
    if (f?.ignoreInjured) out.ignoreInjured = true
  }
  return out
}

export function providerMoveDelta(state: GameState, op: Operative): number {
  let d = 0
  for (const p of providers.values()) d += p.moveDelta?.(state, op) ?? 0
  return d
}

export function providerEquipmentEligible(state: GameState, op: Operative, equipmentId: string): boolean | null {
  let out: boolean | null = null
  for (const p of providers.values()) {
    const a = p.equipmentEligible?.(state, op, equipmentId)
    if (a === false) return false
    if (a === true) out = true
  }
  return out
}

export function providerSetAsideCap(state: GameState, seat: Seat): number {
  let cap: number | null = null
  for (const p of providers.values()) {
    const c = p.setAsideCap?.(state, seat)
    if (c !== null && c !== undefined) cap = cap === null ? c : Math.min(cap, c)
  }
  return cap ?? 0
}

export function providerControlApl(state: GameState, op: Operative, marker: Marker, apl: number): number {
  let v = apl
  for (const p of providers.values()) {
    const n = p.controlApl?.(state, op, marker, v)
    if (n !== null && n !== undefined) v = n
  }
  return v
}

export function providerControlTotal(state: GameState, seat: Seat, marker: Marker, total: number, contesting: string[]): number {
  let v = total
  for (const p of providers.values()) {
    const n = p.controlTotal?.(state, seat, marker, v, contesting)
    if (n !== null && n !== undefined) v = n
  }
  return v
}

export function providerChain(state: GameState, expended: Operative, wasChained: boolean): string[] {
  return collectIds((p) => p.chainActivation?.(state, expended, wasChained) ?? undefined)
}

export function providerGate(ctx: Ctx, op: Operative): string | null {
  for (const p of providers.values()) if (p.gateActivation?.(ctx, op)) return p.id
  return null
}

export function providerReactions(state: GameState, seat: Seat, info: ReactionInfo): ReactionOffer[] {
  const out: ReactionOffer[] = []
  for (const p of providers.values()) out.push(...(p.reactions?.(state, seat, info) ?? []))
  return out
}

export function providerRerollsBanned(state: GameState, side: DiceSide, attack: AttackState): boolean {
  for (const p of providers.values()) if (p.rerollsBanned?.(state, side, attack)) return true
  return false
}

export function providerFightWeapons(state: GameState, op: Operative, retaliating: boolean): string[] {
  return collectIds((p) => p.extraFightWeapons?.(state, op, retaliating))
}

export function providerFightStart(state: GameState, attack: AttackState): { first?: Seat; queue: { seat: Seat; blockOnly?: boolean }[]; noBlock: Seat[] } {
  const out: { first?: Seat; queue: { seat: Seat; blockOnly?: boolean }[]; noBlock: Seat[] } = { queue: [], noBlock: [] }
  for (const p of providers.values()) {
    const r = p.fightResolveStart?.(state, attack)
    if (!r) continue
    if (r.first) out.first = r.first
    out.queue.push(...(r.queue ?? []))
    for (const s of r.noBlock ?? []) if (!out.noBlock.includes(s)) out.noBlock.push(s)
  }
  return out
}

export function providerAfterResolution(state: GameState, attack: AttackState, seat: Seat, op: 'strike' | 'block'): { seat: Seat; blockOnly?: boolean }[] {
  const out: { seat: Seat; blockOnly?: boolean }[] = []
  for (const p of providers.values()) out.push(...(p.afterFightResolution?.(state, attack, seat, op) ?? []))
  return out
}

export function providerViewpoints(state: GameState, shooter: Operative, weaponId: string): string[] {
  return collectIds((p) => p.shootViewpoints?.(state, shooter, weaponId))
}

export function providerStealthy(state: GameState, op: Operative): number {
  let n = 0
  for (const p of providers.values()) n += p.stealthyCover?.(state, op) ?? 0
  return n
}

export function providerMoveSurcharge(state: GameState, op: Operative, kind: string, points: Vec3[], breakdown: { horizontal: number; accessible: number; climb: number; drop: number }): number {
  let n = 0
  for (const p of providers.values()) n += p.moveSurcharge?.(state, op, kind, points, breakdown) ?? 0
  return n
}

export function providerIgnoresMine(state: GameState, op: Operative, mine: Marker): boolean {
  for (const p of providers.values()) if (p.ignoresMine?.(state, op, mine)) return true
  return false
}
