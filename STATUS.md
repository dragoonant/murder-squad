# Status

Rewritten (not appended) as work lands. Orient from this file instead of exploring the codebase. Live: https://dragoonant.github.io/murder-squad/ (deploys from `main` on every green push). As of 2026-10-23 (M10 batches C and D done, follow-up pass on stopgap rules done): 24 playable teams.

## Counts (measured 2026-10-23)
- Vitest: 1750 tests pass across 94 files; typecheck clean; sim 40/40 real-team games with 0 rejections and 0 violations. Free-point handlers live in the leaf module `src/engine/point-handlers.ts` (it fixed a TDZ import cycle, like `ploy-rules.ts`).
- `validate:data`: ok, 158 files, 1622 records. About 565 distinct `{"code": ...}` hook names appear in team data.
- `docs/needs-rules-check.md`: 1164 RULING lines. By status word: Confirmed 278, Corrected 117, Unsourced 750, Fan-source 22 (a few lines carry two words).
- Playwright: 21 spec files, 43 tests (last full run was at ten teams; not re-run for batches C and D in this docs pass).
- Sim and AI bench were not re-run for this pass. Sim is now slow: about 4.5 minutes for 40 games, AI move planning is the hot path.
- Figures: 122 v2 body GLBs, covering the first ten teams only.

## What exists
| Area | State |
|---|---|
| Teams (M1, M9, M10) | 24 playable teams in `src/data/teams/<team>/` (operatives, weapons, abilities, ploys, equipment), one engine file each in `src/engine/teams/`. Each was verified line by line against the sources, then a follow-up pass made most stopgap rules exact through new engine windows. Spec: `docs/spec/13-teams.md`. Universal equipment, Command Re-roll, Preliminary Ops Secure/Loot/Transmission with maps and the kill-grade table, Volkus layouts `volkus-01..03`. JSON Schemas, `tools/validate-data.ts`; code hooks each have a firing scenario in `tests/engine/teams/<team>.hooks.ts`. Roster caps (`selection.caps`, `selection.loadoutCaps`), per-operative keyword picks (Marks of Chaos), oval bases by loadout. |
| Engine (M2, M9, M10) | `src/engine/`: frozen contracts (00 section 11 change log, additive rows through M10 batch D shared), setup by thirds, strategy, firefight (orders, AP, counteract, Guard interrupts), movement (oval bases), shoot and fight sequences with every weapon rule, markers, Preliminary Ops scoring, ploys, equipment, abilities. Generic layer: team rule providers (`team-rules.ts`), tokens, pools, reserve / set-aside, free, delegated and forced actions, joint activations, lifecycle hooks, per-action `maxRepeats`, and the shared windows (activation start and end, action declared for attacks, Charge, Reposition and free-action frames, Pick Up Marker and mission actions, opponent declaration, before re-rolls, defence rolled for both sides, defender attack rolled, incapacitation, kill, opponent ploy). Free actions take the opt-in `checkPerformed`. Query odds include pure after-roll conversions. `ploy-rules.ts` is a leaf: team ploy rules register at module load. Replay hashes verified in the sim. |
| AI (M4, M9, M10) | `src/ai/`: random/easy/normal; threat map, activation planner, grid nav, shoot/fight scoring, ploy heuristics, setup (HIDING picks), team action and choice handlers (`teamActions.ts`), FLY set-ups, Imperatives, oval facing; Web Worker host with 3 s timeout and random fallback. `tools/ai-bench.ts` rotates every playable team (`--pair a,b` for one pairing). |
| Client (M3, M7, M9) | Start, Team Builder (rules-legal loadouts, mark picks), Briefing, Battle (terrain, markers, operatives with attachments, oval bases with a Turn control, Fly button, HUD, activation bar, prompts with engine odds, dice tray, event feed, keyword tooltips, token chips, HIDING tray), End screen, `?gallery`, `?scenario=` fixtures, phone layout. Shooting plays dice first, then one tracer per attack die (`heldVolley.ts`). Movement range overlay, sight lines with expected damage, threat view, measure tool. Per-team presentation in `src/client/teams/<team>.ts`. |
| Figures (M5, M9, v2) | 122 super-deformed body GLBs in dynamic poses with weapons fused in (`docs/spec/30-figures.md` section 7), measured sockets in `public/assets/models/manifest.json`; v1 attachment GLBs remain for equipment; 8 terrain GLBs, 6 floor mats. Batches C and D have no figures: procedural stand-ins only. Their v2 concept prompt lists are ready in `art/unit-concepts/v2/prompts/*-prompts-gemini.json` (118 bodies batch C, 101 batch D); `tools/local-gen/v2_units.json` holds the batch C units. Skeletal animation (M8) was dropped. |
| Audio (M6, M9) | About 115 mp3s via the local Audio Studio; new-team events routed through faction tables. **Not verified by ear.** |
| Repo hygiene | `.gitattributes` keeps text LF, `.bat` CRLF. One early commit (`ae22229`) carries a machine path in history. |
| Docs | `docs/spec/00..60`, `12-rules-test-checklist`, `13-teams`, `14-golden-examples`, `docs/knowledge-base/*`, `docs/needs-rules-check.md`, `docs/audio.md`, `art/*/PROMPTS.md`. |

## Teams
Counts are operatives, weapons, abilities, ploys, equipment. "GLB" means v2 body GLBs wired and checked in `?gallery`; "stand-in" means procedural figures.

| Team | Counts | Figures |
|---|---|---|
| Angels of Death | 9, 26, 18, 8, 4 | GLB (10 bodies) |
| Kommandos | 11, 24, 16, 8, 4 | GLB (13) |
| Pathfinders | 16, 17, 28, 10, 4 | GLB (18) |
| Hierotek Circle | 9, 18, 21, 8, 4 | GLB (18) |
| Plague Marines | 7, 17, 13, 8, 4 | GLB (8) |
| Wyrmblade | 13, 32, 20, 8, 4 | GLB (11) |
| Legionaries | 10, 29, 19, 10, 4 | GLB (11) |
| Hand of the Archon | 9, 18, 20, 8, 4 | GLB (10) |
| Hunter Clade | 14, 21, 16, 10, 4 | GLB (10) |
| Hearthkyn Salvagers | 15, 23, 21, 10, 4 | GLB (13) |
| Kasrkin | 8, 21, 18, 9, 4 | stand-in (16 prompts ready) |
| Novitiates | 12, 20, 24, 8, 4 | stand-in (16) |
| Phobos Strike Team | 13, 10, 19, 9, 4 | stand-in (17) |
| Corsair Voidscarred | 11, 20, 19, 10, 4 | stand-in (15) |
| Warpcoven | 10, 20, 27, 8, 4 | stand-in (21) |
| Farstalker Kinband | 11, 19, 20, 9, 4 | stand-in (15) |
| Imperial Navy Breachers | 13, 20, 26, 8, 4 | stand-in (18) |
| Blooded | 13, 29, 26, 10, 4 | stand-in (21) |
| Fellgor Ravagers | 11, 16, 25, 9, 4 | stand-in (15) |
| Chaos Cult | 7, 11, 22, 11, 4 | stand-in (12) |
| Goremongers | 7, 15, 22, 8, 4 | stand-in (9) |
| Scout Squad | 6, 14, 11, 10, 4 | stand-in (14) |
| Tempestus Aquilons | 8, 24, 16, 10, 4 | stand-in (15) |
| Exaction Squad | 12, 21, 24, 11, 4 | stand-in (15) |

## Known gaps
- Approved Ops tac ops and the other crit ops: card text unsourced; Preliminary Ops only.
- Rules that wait on a pausable damage pipeline (see HANDOFF next steps): Medic! inside attacks, Sadistic Competition, Weavefield Crest, Flay timing, Chaos Cult Mutation note, Long Arm / Torrent shell, Phobos Detonate order, Farstalker Quick Draw. Also approximate: direct damage (mines, Poison, FLAIL) removes at once, so before-removal ploys there are auto-played or not offered; no `weapon.choice` for Rending/Punishing/Severe; the Utility Grenade marker uses the Smoke Grenade spots; Climbing Rigs shorten every climb of one move.
- AI does not score tac ops, grenades or most unique actions; sim is slow (about 4.5 minutes for 40 games).
- Batch C and D teams have no figures. The v2 bodies of the first ten teams are not reviewed by the owner beyond contact sheets and gallery screenshots.
- No skeletal animation (M8, dropped). Audio unverified by ear. No team is play-verified by the owner.
- The art run for batches C and D is blocked on two owner actions: Claude in Chrome connected with Gemini signed in, and the Alteisen GPU machine powered on (it was unreachable; its C: drive is nearly full, TEMP now on E:).
