# Murder Squad — plan of record

Fan game: 3D Warhammer 40,000: Kill Team (2024 edition, mechanics 1:1, our own prose) with MGSD figures. Player vs AI first, hot-seat too, multiplayer later. Hosted on GitHub Pages at https://dragoonant.github.io/murder-squad/ (repo `dragoonant/murder-squad`). This file owns every decision; `KICKOFF.md` records the owner's answers and the reasoning behind the defaults; `STATUS.md` records what exists.

## Decisions
| Topic | Decision | Source |
|---|---|---|
| Edition | Kill Team 2024 edition (inches, 30"x22"), latest free rules and update logs in `docs/sources/` | owner 2026-10-17 |
| v1 teams | Angels of Death vs Kommandos | owner |
| v1 missions | Preliminary Ops (Secure / Loot / Transmission crit ops + kill op), 4 turning points; Approved Ops tac ops added when the card text is sourced | sources available |
| Killzone | Open Volkus-style killzone first (ruins, Light/Heavy/Vantage), several layouts; Gallowdark later | owner |
| Killzone layouts | The six official Approved Ops 2025 Volkus tournament cards (Maps 1-6, each with its own drop zones and objective spots), measured from the cards on the 1" grid; the three invented layouts were removed because they used pieces outside the Volkus kit. Layout rolls from the seed by default (the card pack's D6 random method). 2024 Volkus cards not included: the 2025 pack replaced all of them and they are not available online | owner 2026-10-18 |
| Figures | Fresh MGSD body per operative archetype, bare-handed with named sockets; weapons and equipment as attachment GLBs; pose variants for two-handed weapons; procedural stand-ins until GLBs exist | owner |
| Customisation | Team builder with rules-legal loadouts only; figure shows the chosen loadout (WYSIWYG) | owner |
| Concepts | Gemini via Claude in Chrome on this PC, one chat per team, base figure then edits; placeholders until a Gemini session exists; never Flux/SDXL substitutes for figure concepts | owner |
| 3D | Hunyuan3D 2.1 shape -> 2.0 paint, split between this PC and Alteisen, unattended, one job per machine | owner |
| Audio | Local Audio Studio (SFX: Stable Audio Open; music: ACE-Step; voice: Qwen3-TTS voice design). No ElevenLabs. Mallet's weapon sounds reused as the first batch | owner |
| Stack | Mallet 42k scaffold (Vite 8, React 19, R3F 9, drei 10, zustand 5, TS 7, Vitest 5, Playwright, ajv) | default |
| Engine | Mallet contracts, Fell-in module split, one pending decision, `legalActions` never empty, `view(state, seat)`, `query.*` owns numbers | default |
| AI | Utility decider in a Web Worker, tiers random/easy/normal, bench gate normal >= 95% vs random | default |
| Repo | Public, Pages from `main`, pushes after each stage pre-approved | owner |
| Animation | v1 ships rigid whole-body cues (walk bob, recoil, lunge, flinch, topple). Target is **true skeletal rigging** (owner, 2026-10-17): after M7, pilot a local auto-rigger (UniRig) on two bodies, retarget a small clip set (idle, run, shoot, melee, hit, death), and roll it out if the skin holds on the fused MGSD meshes; part-split articulation is the fallback | owner |
| Process | Lean stages, Sonnet implementers, about 2.5M tokens per push, check-ins <= 10 lines with a screenshot, no approval stops | owner |
| M9 teams | Pathfinders, Hierotek Circle, Plague Marines, Wyrmblade, built by four parallel implementers after one engine-prep stage; spec in `13-teams.md` sections 3 to 6 | owner brief 2026-10-18 |
| Team extension | Shared files never name a team again: team rules answer through `team-rules.ts` providers, tokens, reserve, delegated/free actions and lifecycle hooks are generic; v1 team branches stay where they are but new teams need no shared-file edit | engine prep: parallel implementers must not collide |
| Scaffold flag | `playable: false` in team.json hides a team from the picker, the real-team sims (which now pair every playable team) and the client presentation coverage tests; implementers flip it when complete | one obvious per-team switch in a file the implementer owns |
| Code-hook list | `src/data/code-hooks.json` removed; `CODE_HOOKS` derived from the data at load; per-team firing scenarios in `tests/engine/teams/<team>.hooks.ts` merged by the shared code-hook test | a generated shared file would conflict across four parallel branches |
| Client presentation per team | weapon flavour, VFX family, sound and attachment entries for new teams live in `src/client/teams/<team>.ts` (merged into the shared tables); figure archetypes without a body GLB are listed as `standIns` | keeps implementers out of shared client tables; art arrives later |
| Lifecycle hooks | Ready-step, activation-start/end and TP-end team rules run as non-decision hooks; owner choices there are picked by the team code (RULING) | hook points have no resume; the choices rarely matter |
| Kill op reversal | an operative that returns (Reanimation) is no longer incapacitated: kill grade recomputed, its VP taken back | T-HIE.27; RULING logged |
| Hidden operatives (HIDING) | Open information: `view` redacts nothing and the client tray and feed show the opponent's set-aside operatives too, marked as theirs (no contract change) | core sequence reveals selections and sets up in the open; Wyrmblade rule only puts them "to one side"; RULING logged |
| Bench coverage | `bench:ai` tests every playable team in turn against a rotating opponent (`--games` stays the total), report per team; `--pair a,b` keeps the old two-team bench | M9 batch A polish |
| M9 batch B teams | Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers, same process as batch A: one engine-prep stage, then four parallel implementers; spec in `13-teams.md` sections 7 to 10 | owner brief 2026-10-18 |
| Oval bases | three discs of the short-axis radius on the long axis (within 0.07" of the ellipse); the long axis follows `facing`; translate at a fixed facing, turn in place at the end of a move for the tip's arc rounded up; round bases untouched | exact ellipse maths would touch every geometry routine for one Gunner; the FAQ only needs rotation to count as movement |
| Base by loadout | datacard `ovalBase.weapons` instead of one datacard per Gunner weapon | keeps one Gunner card with a weapon pick, so weapon caps live in `selection.loadoutCaps` |
| Per-operative keyword picks | team.json `operativeChoices` stored on the roster entry and the operative, read by `hasKeyword`; picks are public | Marks of Chaos are keywords other rules read; the PDF prints public mark tokens |
| Roster caps in data | `selection.caps` (keyword or ids over every slot) and `selection.loadoutCaps` (weapon profiles across loadouts); checked by the builder and validate-data, not by the engine at setup (as before, the engine checks loadouts, not roster shapes) | the roster schema owns roster legality; defaults stay legal through `capAwareLoadouts` and `defaults.loadouts` |
| New timings | new ploy windows and hooks instead of team branches: declaration veto hook, opponent declaration window, end-of-activation reactions, pre-activation window, opponent-ploy window (nested over the open one), kill window, fresh-roll windows for attacker and defender, `diceRolled` | each was needed by a printed rule no existing timing reaches; windows offer nothing (and change no state) when no ploy names them |
| Joint activation | `joinActivation` keeps two activation records and lets the player switch between them; each operative ends separately | Extremis Mind-Link interleaves two activations; per-operative AP and restrictions stay exact |
| Omen pick | a 0 CP pick at the first Firefight phase start, not a pre-battle decision | no new decision kind for one rule; Omen cannot act before the first attack (RULING) |
| Per-TP use ledger (batch B fix) | `ledger.tpUses` is cleared at every turning point start, not only its `limit:` keys | once-per-TP items (Purity Seals, Tilting Shields, Tesla Weave, Magnification Conduits, Phase Shifter, High-Intensity Markerlight) were working once per battle |
| Forced moves and the MOVE invariant (batch B fix) | the sim's MOVE invariant skips `OperativeMoved` with `action` `forced` or `timesplinter` (`sim-core.FORCED_MOVES`) | a move made by another rule (Knux Smash push, Timesplinter) is not the operative's own Reposition and may end where its own move could not (inside a control range) |
| `modifyStat` scope (batch B fix) | the data schema's `modifyStat.stat` is trimmed to `move` (interpreted by the core provider `core.modifyStat`, `when` checked on the operative); `apl`, `save`, `wounds` removed | they were accepted by the schema but never interpreted, so data using them did nothing; APL and save changes go through effects and team rules |
| Own-action declaration window (batch B) | `firefight.actionDeclared` also opens for the active player's Pick Up Marker and mission actions, counteractions included | Scrapcode Overload's "that Infiltrator is about to perform" timing; the opponent's declarations keep `firefight.opponentActionDeclared` |
| Oval facing in the AI | at the end of a move an oval base turns its front toward the nearest enemy (else along the last leg) when the arc fits the move; a whole inch or two of the last leg is given up for it only when the shorter end point scores no worse | the engine prices the turn in inches; facing changes the footprint but not the AI's end score, so distance is never traded for a worse position |
| Line endings | `.gitattributes`: `* text=auto eol=lf`, `*.bat text eol=crlf`, workflow scripts LF; the index renormalised once | parallel agents on Windows wrote CRLF and LF files, producing whole-file diffs |
| Keywords inside buttons on touch | a tap on a keyword inside a button presses the button (the tooltip is for running text and mouse hover) | on a phone the order cards' help text is mostly keywords, so the tap was swallowed and no order was given |

## Architecture
```
src/engine   pure TS: step(state, action) -> {state, events, pending}; seeded RNG; action log; replay
src/data     teams, weapons, ploys, equipment, missions, killzone layouts (JSON + ajv schemas)
src/ai       Decider implementations (random, utility) + worker
src/client   R3F renderer + UI; store is the only step() caller; presentation director
tools        sim, ai-bench, validate-data, gen-audio (Audio Studio), model pipeline helpers
```

## Milestones
| # | Milestone | Exit criteria |
|---|---|---|
| M0 | Scaffold + specs | Repo, CI, Pages placeholder, specs 00-60, checklist, golden examples |
| M1 | Data | Both teams, weapon rules, universal equipment, Preliminary Ops, 3+ layouts; `validate:data` clean; a source per record |
| M2 | Engine | Full turning point loop, all universal actions, shoot/fight, every weapon rule, ploys, counteract, Guard, injury, markers, scoring; sim 100 games 0 violations |
| M3 | Playable | Pages build vs random bot, team builder, briefing, objective tracker, dice tray, prompts with odds, presentation director, hot-seat |
| M4 | AI | Utility decider, tiers, bench gate |
| M5 | Look | Figure bodies + attachments via Gemini -> Hunyuan, terrain set, board, army painter, `?gallery` |
| M6 | Sound | SFX/music/voice via Audio Studio, flavour map, trims, music director, `sounds.html` |
| M7 | Polish | Narration pauses, hover help, settings, end screen, phone layout, perf |
| M8 | Skeletal animation | UniRig pilot on two bodies, clip retargeting, GLB skinned export, client animation mixer; fallback part-split articulation |
| M9+ | More teams, Approved Ops tac ops, Gallowdark, multiplayer | one worktree per team |

## Definition of done for v1
A human can play a full four-turning-point Preliminary Ops game as either team against the AI in the browser on Pages, with every datacard rule of both teams working; the sim plays 100 games with zero invariant failures; the AI beats the random bot >= 95%; figures and sounds are generated, not placeholders.
