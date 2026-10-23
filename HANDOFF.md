# HANDOFF

Updated 2026-10-23 after M10 batches C and D (24 playable teams). Read `CLAUDE.md` first, then this file, then `STATUS.md`, then `PLAN.md`.

## Where things stand
- Live playtest build: https://dragoonant.github.io/murder-squad/ (deploys from `main` on every green push).
- M0-M7 are on `main` (data, full engine, utility AI, client, figures, terrain, mats, audio, keyword tooltips, sightlines and weapon VFX).
- 24 kill teams are playable: day one Angels of Death and Kommandos; batch A Pathfinders, Hierotek Circle, Plague Marines, Wyrmblade; batch B Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers; batch C Kasrkin, Novitiates, Phobos Strike Team, Corsair Voidscarred, Warpcoven, Farstalker Kinband, Imperial Navy Breachers; batch D Blooded, Fellgor Ravagers, Chaos Cult, Goremongers, Scout Squad, Tempestus Aquilons, Exaction Squad. Each was verified line by line against the sources, then a follow-up pass made most stopgap rules exact via new engine windows (see the change log in `docs/spec/00-architecture.md` section 11, rows "M9 batch C" through "M10 batch D shared"). Spec per team: `docs/spec/13-teams.md`.
- Figures: the first ten teams have 122 v2 body GLBs (dynamic poses, weapons fused in, `docs/spec/30-figures.md` section 7). Batches C and D have no figures yet and play on procedural stand-ins. Their v2 concept prompt lists are ready (`art/unit-concepts/v2/prompts/*-prompts-gemini.json`: 118 bodies batch C, 101 batch D) and `tools/local-gen/v2_units.json` has the batch C units.
- The art run is blocked on two owner actions: Claude in Chrome connected with Gemini signed in, and the Alteisen GPU machine powered on (it was unreachable; its C: drive is nearly full, TEMP now on E:).
- Counts and gate status are in `STATUS.md`. All gates green (1750 tests, sim 40/40 clean). Sim takes about 4.5 minutes for 40 games; AI move planning is the hot path.
- Shooting presentation (ported from Mallet 42k): a shot plays its dice first, then one tracer per attack die; blocked successes shimmer, unblocked ones take damage as their tracer lands, the target falls with the killing shot (`src/client/presentation/heldVolley.ts`). Fight is unchanged.
- Not verified by ear: all audio. Not play-verified by the owner: any team beyond the first rounds of testing; v2 bodies not reviewed figure by figure.

## Next steps
1. Art for batches C and D, streamed per the KB pipelining rule (`docs/knowledge-base/README.md`, "Pipeline everything"): concepts from Gemini via Claude in Chrome, each PNG goes into GLB generation the moment it lands (Alteisen `tools/local-gen/run_v2_alteisen.bat`, or this PC with `run_v2_local.bat`), finalise, check in `?gallery`, wire. Needs the two owner actions above first.
2. Remaining RULINGs that need a pausable damage pipeline: Medic! inside attacks, Sadistic Competition, Weavefield Crest, Flay timing, Chaos Cult Mutation note, Long Arm / Torrent shell, Phobos Detonate order, Farstalker Quick Draw. Also still approximate: direct damage removes at once (before-removal ploys auto-played or not offered), no `weapon.choice` for Rending/Punishing/Severe, Utility Grenade marker on Smoke Grenade spots, Climbing Rigs shorten every climb of one move. About 750 RULINGs are still Unsourced.
3. Speed up the sim (about 4.5 minutes for 40 games): profile AI move planning first.
4. Owner review of the v2 bodies in `?gallery` and a few games; re-roll any body from its concept with the v2 batch scripts. Possible follow-ups: a second pose for leaders, accessory attachments on back/belt sockets, death cues for the new silhouettes.
5. Owner playtest round on the 24 teams: collect feedback, fix, push.
6. (M8 skeletal animation was dropped by the owner on 2026-10-18; do not reopen it for these fused meshes.)
7. Later: Approved Ops tac ops (card text still unsourced), Gallowdark, multiplayer; next project Boarding Actions (owner, week of 2026-10-19), reusing the engine and a shared Gallowdark set.

## Pipelines (how to regenerate things)
- Concepts: Gemini via Claude in Chrome on this PC (`art/*/PROMPTS.md` record every prompt). v2 bodies hold their weapons in a dynamic pose (one standalone prompt per body, exported as one JSON bundle per chat); v1 attachments are side-view props.
- 3D: Hunyuan3D on this PC (`%USERPROFILE%\Hunyuan3D-2`, work dir `outputs/ms-work`, batch scripts `run_*_local.bat`) and Alteisen (`E:\AI\work\murder-squad`, `tools/local-gen/run_*_alteisen.bat`, launched detached via `schtasks`; v2 bodies: `run_v2_alteisen.bat`, work dir `E:\AI\work\murder-squad\v2`). Finalisers: `tools/models/{measure-sockets.py,finalize-attachments.py,finalize-terrain.py}` (run with the 2.1 venv python), manifest `public/assets/models/manifest.json`.
- Mats: `tools/textures/gen-mats.mjs` against Flux Studio (port 7880).
- Audio: `tools/gen-audio.ts` against the Audio Studio (port 7890), manifest `tools/audio-manifest.json`, trims `public/audio/trims.json`, audition `public/sounds.html`.
- Gates: `npm run typecheck`, `npm test`, `npm run validate:data`, `npm run sim -- --games 40 --teams real --decider normal`, `npm run bench:ai -- --games 40`, `PW_PORT=41xx npm run e2e`.

## Known gaps and rulings
- `docs/needs-rules-check.md` holds 1164 RULING lines (Confirmed 278, Corrected 117, Unsourced 750, Fan-source 22 by status word; kill op table and map geometry Confirmed from the source images; Approved Ops tac ops out of scope; Guard treated as universal).
- Bench note: the bench rotates every playable team through the tested seat against a rotating opponent; `--pair a,b` restores the old two-team bench. Zero-action activations sat near the 2% gate at ten teams; re-measure with 24.
- Choppa, big choppa and grot choppa share one Gemini design at different scales; heavy bolter reads like a bigger rifle.
- Personal path leaked into one early commit (`ae22229`, batch script); scrubbed in the next commit, history untouched (owner's call to rewrite).

## Gotchas (new this project)
- Bash heredocs mangle backslashes in this shell: write batch files and Windows-path JSON with the Write tool.
- `stage_shape.py` lives in the 2.1 folder and must run with that cwd; `stage_finalize.py` lives in the 2.0 folder and hard-codes `units.json` (use `merge_units.py`).
- Long remote jobs: launch detached (`schtasks`), never over an attached ssh (10-minute tool cap); never `taskkill` by image name (refused by policy anyway).
- A pre-commit hook (`.git/hooks/pre-commit`, patterns in `privacy-patterns.txt`) refuses commits that add the owner's name or home path (main checkout only, see below).
- The privacy pre-commit hook does not protect worktree commits: it reads `$(git rev-parse --show-toplevel)/.git/hooks/privacy-patterns.txt`, and in a worktree `.git` is a file, so the pattern file is missing and the check passes silently. Grep the staged diff for the owner's name and home path by hand before every worktree commit (or point the hook at `git rev-parse --git-common-dir`).
- `registerPloyRule` lives in the leaf module `src/engine/ploy-rules.ts` (type-only imports; `ploys.ts` re-exports it): team files call it at module top level while the abilities.ts -> teams import cycle may still be loading `ploys.ts`, so import it from `ploy-rules` in team code.
- Parallel agents on Windows produced CRLF/LF churn (whole-file diffs). `.gitattributes` now sets `* text=auto eol=lf` (`.bat` CRLF, workflow scripts LF) and the index was renormalised; check `git diff --ignore-cr-at-eol --stat` if a diff looks too big.
- Phone layout: a keyword inside a button lets the tap through to the button; a keyword in running text swallows the tap and opens its tooltip.
- Parallel subagents leave orphaned wait-loop shells behind: use one wait per tool call, and never chain polling loops across agents.
- Alteisen's C: drive is nearly full; TEMP is redirected to E:. Check free space on both drives before a GPU batch.
- Free actions take an opt-in `checkPerformed` (default off): a free action counts as "performed" for once-per-activation checks only when the caller asks.
