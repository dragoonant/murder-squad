# 00 — Architecture

Source of truth for module boundaries, the engine contract, the decision model and determinism. Rules content lives in 10/11/13/14; data shapes in 20; figures 30; AI 40; client 50; testing 60. `src/engine/types.ts` is the code form of §3–§7 and must not diverge from this file. Contracts are **frozen after M2**; later changes are additive and get a dated row in §11.

Lineage: Mallet 42k's engine contract (step/events/pending, determinism, error codes) with Fell-in's namespace-owner module split, because Kill Team alternates single-operative activations like Fallout: Wasteland Warfare rather than whole-army phases like 40k.

## 1. Modules

| Module | Path | May import | Must not | Runtime |
|---|---|---|---|---|
| engine | `src/engine/` | nothing outside itself (+ types from `src/data/types`) | DOM, React, Three, timers, `Math.random`, `Date` | node + browser + worker |
| data | `src/data/` | schemas only | code with side effects | build-time JSON, validated by `tools/validate-data` |
| ai | `src/ai/` | engine (read-only API), data | client, Three | node + worker |
| client | `src/client/` | engine, ai, data | mutate `GameState`, compute a rules number | browser |
| tools | `tools/` | anything (node) | be imported by src | node |
| tests | `tests/` | everything | — | vitest / playwright |

Dependency direction `data ← engine ← ai ← client`, enforced by `tests/engine/boundaries.test.ts` (greps imports). Path alias `@/` → `src/`.

### Engine files
```
src/engine/
  types.ts      contract types (frozen)            decider.ts  Decider interface + ReplayDecider (frozen)
  actions.ts    Action union (frozen)              events.ts   GameEvent union (frozen)
  hooks.ts      hook names, contexts, results (frozen)
  rng.ts        seeded xoshiro128** + roll helpers (frozen)
  view.ts       per-seat redacted PlayerView (frozen)
  index.ts      createGame / step / legalActions / validate / replay / view / save / load / undo (frozen)
  registry.ts   ModuleDef per namespace, raiseDecision, StepResult plumbing
  apply.ts      validate envelope → dispatch to the owner of pending.kind → afterAction → log + hash
  state.ts      state helpers (operatives, seats, markers, immutable updates)
  query.ts      every displayed number: hit odds, expected damage, kill odds, cover/obscured verdicts, control
  dice.ts       attack/defence dice pools, success/crit/fail classification, re-roll bookkeeping, exact odds
  geometry.ts   round bases, straight-line increments (rounded up to 1"), placement, paths, within/wholly within
  los.ts        visibility (head point to any part, bases excluded), intervening (targeting lines), cover, obscured
  terrain.ts    terrain features with traits (Light, Heavy, Blocking, Vantage, Accessible, Insignificant, Exposed, Ceiling, Barred)
  measure.ts    base-edge distances, control range, heights
  -- rules modules (each owns the namespaces listed; one owner per namespace) --
  setup.ts      SET: setup.*      select operatives, equipment, drop zone, alternating setup by thirds
  strategy.ts   STR: strategy.*   initiative roll-off, CP gain, ready, gambit alternation
  firefight.ts  FF:  firefight.*  activation order, Engage/Conceal, AP ledger, action restrictions, expended, counteract, Guard interrupts, turning-point end
  movement.ts   MOV: move.*       Reposition, Dash, Fall Back, Charge paths; climb/drop/jump; terrain traversal
  shoot.ts      SHT: shoot.*      the six-step Shoot sequence incl. Blast/Torrent secondary targets, cover save, blocking
  fight.ts      FGT: fight.*      the Fight sequence: weapons, assist, alternating strike/block, retaliate
  weapons.ts    (no namespace)    every weapon rule as a hook into shoot/fight (Accurate … Torrent)
  markers.ts    MRK: marker.*     Pick Up / Place, contest/control by APL, carrying, mission markers
  ploys.ts      PLY: ploy.*       strategy/firefight ploys, Command Re-roll, once-per-turning-point ledger
  equipment.ts  EQP: equip.*      universal + faction equipment setup and actions
  missions.ts   MSN: mission.*    Preliminary Ops: crit op actions, kill op grades, VP, battle end
  abilities.ts  ABL: ability.*    unique actions and datacard abilities (data-driven, code hooks)
  code-hooks.ts registry of `{ "code": "<name>" }` escape hatches; every hook has a firing test
  teams/<id>.ts per-team code hooks only (angels-of-death.ts, kommandos.ts)
```

## 2. Engine contract

```ts
step(state: GameState, action: Action, rng?: Rng): StepResult
interface StepResult {
  state: GameState;                 // new state, or the SAME reference when rejected
  events: GameEvent[];              // ordered; [ActionRejected] when rejected
  pending: PendingDecision | null;  // null only when state.phase === 'ended'
  rejection?: Rejection;
}
```

| Function | Purpose |
|---|---|
| `createGame(setup: GameSetup, seed: string, bundle: DataBundle): StepResult` | validates the setup (team ids, legal roster per team-selection rules, legal loadouts, equipment limits), builds state, raises the first decision (`setup.initiative`). Throws `EngineInvariantError` on an invalid setup — setup comes from the team builder/sim, never a Decider. |
| `step(state, action, rng?)` | pure reducer; never throws on illegal input; throws only on corrupt state. |
| `legalActions(state, pending): Action[] \| null` | enumerated answers for finite decisions; `null` for continuous ones (move paths). **Never empty for an open finite decision.** Every member passes `validate`. |
| `validate(state, action): Rejection \| null` | the same checks `step` runs, no mutation. |
| `replay(setup, seed, actions, bundle)` | folds `step` from `createGame`; load, undo, tests, later multiplayer. |
| `view(state, seat): PlayerView` | redacts hidden information (opponent's unrevealed equipment markers such as Mines before they trigger; nothing else is hidden in Kill Team). Deciders only ever see a `PlayerView`. |
| `save / load / undo` | `SaveFile { version, engineVersion, setup, seed, actions, finalHash }`; undo vs AI only for actions that rolled no dice. |

Reducer rules: state is immutable (structural copies); no I/O, clock or `Math.random` (only the `Rng` restored from `state.rng`); one action → zero or more events → exactly one new `pending`; every rule effect emits an event and the client rebuilds everything it shows from events + state.

## 3. Decision model

```ts
interface PendingDecision {
  id: string;                  // "d:<n>" monotonic
  seat: Seat;                  // 'A' | 'B' (who answers)
  kind: DecisionKind;          // "<namespace>.<verb>"
  window: TimingWindowId;      // §4
  context: Record<string, unknown>; // ids and engine-supplied numbers for this choice (odds, needed, dice)
  options?: DecisionOption[];  // finite choices, each with a ready-made Action and a label key
  constraints?: MoveConstraints; // continuous: origin, maxInches, allowClimb, mustEndInControlRangeOf, forbidden, etc.
  canPass: boolean;
}
```

| DecisionKind | Seat | Payload / notes |
|---|---|---|
| `setup.initiative` | both (roll-off, one action each) | confirm roll; engine rolls |
| `setup.dropZone` | initiative seat | pick drop zone / map side |
| `setup.deploy` | alternating by thirds | operative id + position (+ Vantage floor); always Conceal |
| `setup.equipMarker` | owner | positions for Comms Device, Mines, Ammo Cache, Razor Wire, etc. |
| `strategy.initiative` | both | roll-off; tie → the seat without initiative decides (`strategy.decideInitiative`) |
| `strategy.decideInitiative` | winner / tie-breaker | who goes first |
| `strategy.gambit` | alternating | use a STRATEGIC GAMBIT (strategy ploy, team gambit) or pass; ends after two passes in succession |
| `firefight.activate` | active | ready operative id, or counteract (expended Engage operative + 1AP action), or `end` when nothing is left |
| `firefight.order` | active | Engage / Conceal for the activated operative |
| `firefight.action` | active | next action for the active operative (universal, unique, mission, equipment) or `end activation`; options filtered by AP, restrictions and conditions |
| `move.path` | active | continuous: waypoints in straight-line increments; engine validates distance (rounded up per increment), terrain, control range rules, climb/drop/jump, final placement |
| `shoot.weapon` | attacker | ranged weapon (profile) |
| `shoot.target` | attacker | valid target (primary; Blast/Torrent secondaries enumerated after) |
| `shoot.coverSave` | defender | retain one cover save without rolling, or roll all three |
| `shoot.block` | defender | allocate successful defence dice to attack dice (engine enumerates maximal assignments; a `auto` option applies the engine's default best block) |
| `fight.target` | attacker | enemy within control range |
| `fight.weapon` | each seat in turn | melee weapon |
| `fight.resolve` | alternating | strike or block with one unresolved success |
| `dice.reroll` | roller | re-roll offers from weapon rules/abilities (Balanced, Ceaseless, Relentless, Ammo Cache…) with `dieIndexes`; alternation rule for simultaneous fight re-rolls |
| `dice.commandReroll` | roller | spend 1CP to re-roll one attack/defence die, or pass; opened only when CP ≥ 1 |
| `weapon.choice` | roller | Rending / Punishing / Severe / Devastating-style conversions where a choice exists |
| `ploy.firefight` | the seat the window is offered to | firefight ploy or pass; only opened when an affordable, legal, unused ploy exists for this window |
| `guard.interrupt` | guarding seat | after an enemy action: interrupt with one on-guard operative (Shoot/Fight, point-blank) or decline |
| `marker.pickUp` / `marker.place` | active | via `firefight.action`; position for Place |
| `mission.action` | active | crit op mission actions (Secure, Loot, Transmission) via `firefight.action` |
| `ability.choice` | any | generic enumerated choice for team rules (Combat Doctrine selection, Get It Dun target, Boom! dice…) with `context.data.code` naming the hook |
| `confirm` | any | acknowledge (turning point end, battle end) |

Windows for ploys open only when the seat can actually use something (bounded AI decisions, snappy human play). Order when both seats could act in the same window: the active seat first, then the opponent; outside activations, the seat with initiative first.

### Decider
```ts
interface Decider { decide(view: PlayerView, pending: PendingDecision, legal: Action[] | null): Promise<Action>; cancel?(): void }
```
Human UI, AI, random bot and replay implement the same interface. The game loop (client store or `tools/sim-core.ts`) is the only caller of `step`.

## 4. Timing windows
`TimingWindowId` is shared by engine, data (ploy `window`), AI and UI: `setup.*`, `turningPoint.start`, `strategy.gambit`, `firefight.activationStart` (after the order is chosen, before actions), `firefight.actionDeclared` (before an action resolves), `firefight.actionEnded` (after; Guard interrupts), `shoot.targetSelected` (defensive ploys), `shoot.attackRolled`, `shoot.defenceRolled`, `shoot.resolved`, `fight.weaponsSelected`, `fight.rolled`, `fight.resolved`, `operative.incapacitated`, `firefight.activationEnded`, `turningPoint.end`, `battle.end`.

## 5. Actions and events
Action envelope `{ type, seat, decisionId, seq, payload }`; `type` strings are the DecisionKind answers plus `pass`, `resign`. `seq` is assigned on accept.

Event families (all carry `seq`, `turningPoint`, `phase`, `seat`): game (`GameCreated`, `TurningPointStarted/Ended`, `PhaseStarted/Ended`, `InitiativeDecided`, `GameEnded`); strategy (`CpChanged`, `GambitUsed`, `PloyUsed`, `OperativesReadied`); activation (`OperativeActivated`, `OrderSet`, `ActionDeclared`, `ActionResolved`, `ActionCancelled`, `ApSpent`, `OperativeExpended`, `Counteracted`, `GuardSet`, `GuardInterrupt`); movement (`OperativeMoved` with increments and climb/drop/jump segments); shooting/fighting (`ShootStarted`, `TargetSelected` with cover/obscured verdicts, `AttackDiceRolled`, `DefenceDiceRolled`, `CoverSaveRetained`, `DiceRerolled`, `DiceBlocked`, `DamageInflicted`, `Struck`, `Blocked`, `OperativeInjured`, `OperativeIncapacitated`, `OperativeRemoved`, `ShootEnded`, `FightEnded`); markers (`MarkerPickedUp`, `MarkerPlaced`, `ControlChanged`); mission (`MissionActionPerformed`, `KillGradeChanged`, `VpScored`); dice (`DiceRolled { purpose, dice, final }` for every physical roll); meta (`ActionRejected`, `DecisionRequested`).

## 6. Determinism, log, replay
`Rng` = xoshiro128** seeded from `sha256(seed)`; `state.rng` is authoritative (restored at the start of `step`, serialised back). Every `rng.roll` emits `DiceRolled`. `state.log: Action[]` append-only; `state.hash` = fnv1a of canonical state minus log, recomputed per step; `replay` must reproduce the hash at every seq (the sim asserts it). `ScriptedRng` for golden tests. `ENGINE_VERSION` starts at 0.1.0 and becomes 1.0.0 at M2 freeze.

## 7. Space and operatives
| Item | Definition |
|---|---|
| Units | 1.0 = 1 inch everywhere; base mm converted once at load (`mm / 25.4`). |
| Axes | Y up, board plane XZ, right-handed. Killzone 30 × 22: x ∈ [−15, 15], z ∈ [−11, 11]; seat A's killzone edge is z = −11, B's z = +11 unless the map says otherwise. Figure front = +Z. |
| Operative | `{ id, seat, datacardId, loadout: LoadoutChoice, pos {x,y,z}, facing, baseRadius, height, wounds, order: 'engage'\|'conceal', ready, apl, aplMods, flags (guard, carrying, injured…), usedLimited, oncePerBattleUsed }`. `pos.y` = surface height under the base (Vantage floors). |
| Distances | measured from the closest part of a base, ignoring the miniature; horizontal only for areas (drop zones, markers); `within` = any part, `wholly within` = every part; an operative is within any distance of itself and a marker it carries. |
| Control range | visible to and within 1"; mutual. |
| Visibility | a 1 mm line from the operative's head point (`pos + (0, height·0.9, 0)`) to any sample point of the target's silhouette (base excluded); terrain and other operatives block except as the killzone rules say. Sample points: 5 at mid-height around the base edge, top of head. |
| Intervening | targeting lines from any point of the attacker's base to every facing part of the target's base (2D unless heights differ, then 3D); `wholly intervening` when every line crosses. |
| Terrain | prisms/polygons with traits per part; walls as thin boxes for raycasts; Vantage floors as placeable surfaces. |
| Precision | positions rounded to 1/1000 inch; move increments rounded **up** to the nearest inch (R-MOV). |

## 8. Error handling
`step` never throws on bad input: `rejection { code, reason, details? }`, same state, pending unchanged, `events = [ActionRejected]`. Codes: `E_WRONG_DECISION`, `E_WRONG_SEAT`, `E_NOT_AN_OPTION`, `E_OUT_OF_RANGE`, `E_OVERLAP`, `E_CONTROL_RANGE` (illegal entry/exit of enemy control range), `E_NO_PATH` (climb/terrain), `E_NO_AP`, `E_ACTION_RESTRICTED` (same action twice, order forbids, condition fails), `E_INVALID_TARGET`, `E_NOT_VISIBLE`, `E_INSUFFICIENT_CP`, `E_PLOY_USED`, `E_PASS_NOT_ALLOWED`, `E_GAME_OVER`, `E_SCHEMA`. Programmer errors throw `EngineInvariantError`.

## 9. Performance budgets
`step` p50 < 0.5 ms, p99 < 3 ms without LoS; `shoot.target` enumeration (visibility for ≤14 vs 14 operatives) < 10 ms; `legalActions` < 5 ms; headless sim ≥ 5 games/s; AI normal p50 < 50 ms per decision in a worker with a 3 s hard stop; client 60 fps with 28 figures and 20 terrain pieces; JS ≤ 2.5 MB gzip; `GameState` JSON < 150 KB.

## 10. Settled items
- Blocking in the Shoot sequence is a defender decision because it can matter (saving a crit-block for later Devastating resolution is not a thing, but choosing which attack dice to leave unblocked changes damage when Normal/Critical Dmg differ). The engine offers an `auto` option that minimises damage taken; the AI uses it.
- Fight strike/block is fully interactive for both seats; the engine enumerates `strike:<i>` / `block:<i>→<j>`.
- Cover save is offered as a decision only when the defender has a real choice (always, when in cover); the AI's default is to retain it.
- Secondary targets (Blast/Torrent) are resolved as separate shoot sequences inside one action; operatives are removed after the whole action.
- Measuring "to a location an operative can be placed" uses base-circle collision against terrain footprints, other bases and the killzone edge.

## 11. Contract change log (additive only)
- M0 (2026-10-17): initial contracts.
- M2a (2026-10-17, commit 20b50b4): decision kind `setup.decideInitiative` (roll-off winner picks who holds setup initiative); rejection `E_TODO`; events `DropZoneChosen`, `OperativeDeployed`, `GambitPassed`, `GuardCleared`, `CounteractSkipped`; `GameState` carries `data` (snapshot of datacards, weapons, gambits), `map`, `origin`, `rules`, `lastRollSeq`; `RuntimeGambit` / `EngineBundle.gambits` placeholders for strategy ploys; `move.path` waypoints are `{x, z, y?, jump?}`, `pass` cancels the action (no AP spent) and `canPass` is true; the turning-point end is automatic and `firefight.activate` has no `end` option; `replay` returns `hashes` and `failedAt`; `suggestPlacement` exported; `ModuleDef.explain` lets a module return a precise rejection instead of `E_NOT_AN_OPTION`. Engine defaults: `rules.operativesBlockVisibility = true` (operatives are physical obstructions in the printed game; RULING recorded), doorway rule (while the base centre is within one base radius of an Accessible part the feature's other parts are ignored), drops may cross at most `2r + 0.5"` of open space (wider gaps need a jump), consecutive climbs are summed and rounded up once (minimum 2"), control range sampled every 0.5" along a path.
