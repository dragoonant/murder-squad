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
