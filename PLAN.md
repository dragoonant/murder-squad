# Murder Squad — plan of record

Fan game: 3D Warhammer 40,000: Kill Team (2024 edition, mechanics 1:1, our own prose) with MGSD figures. Player vs AI first, hot-seat too, multiplayer later. Hosted on GitHub Pages at https://dragoonant.github.io/murder-squad/ (repo `dragoonant/murder-squad`). This file owns every decision; `KICKOFF.md` records the owner's answers and the reasoning behind the defaults; `STATUS.md` records what exists.

## Decisions
| Topic | Decision | Source |
|---|---|---|
| Edition | Kill Team 2024 edition (inches, 30"x22"), latest free rules and update logs in `docs/sources/` | owner 2026-10-17 |
| v1 teams | Angels of Death vs Kommandos | owner |
| v1 missions | Preliminary Ops (Secure / Loot / Transmission crit ops + kill op), 4 turning points; Approved Ops tac ops added when the card text is sourced | sources available |
| Killzone | Open Volkus-style killzone first (ruins, Light/Heavy/Vantage), several layouts; Gallowdark later | owner |
| Figures | Fresh MGSD body per operative archetype, bare-handed with named sockets; weapons and equipment as attachment GLBs; pose variants for two-handed weapons; procedural stand-ins until GLBs exist | owner |
| Skeletal animation (M8) | UniRig pilot on Alteisen returned a 3-joint spine for both MGSD bodies in every class / decoding / input variant (fused 2-head figures read as one rigid object), so the procedural soft-cut rig ships: `tools/models/split-body.py` (17 VRoid-named joints from the manifest sockets, planar-cut weights with a blend band) + `rig-clips.py` (procedural idle/walk/shoot/melee/hit/death), played by `src/client/figures/skinned.tsx` through the cue store; rigid cues stay the fallback for unrigged bodies. UniRig only worth revisiting with limb-separated meshes. See `docs/spec/30-figures.md` section 7. | session 2026-10-17 evening |
| Rig roll-out (M8) | All 20 bodies rigged with the procedural rig. The arm cut is anchored on the hand socket (valley of chest-band \|x\| between 55% and 75% of the hand's \|x\|, 63% when there is no interior minimum): the shoulder socket sits on pauldrons, packs or ears and the unconstrained valley put eight cuts inside the torso. The bomb squig is two-legged in the mesh, so it gets an arm-less 11-joint biped layout (`split-body.py --layout`) instead of a quadruped one; the grot keeps the humanoid layout (its arms hang outboard of its legs). Nothing stays rigid. | default |
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
