# HANDOFF

Updated 2026-10-19 after the v2 figure regeneration (dynamic poses, all ten teams). Read `CLAUDE.md` first, then this file, then `STATUS.md`, then `PLAN.md`.

## Where things stand
- Live playtest build: https://dragoonant.github.io/murder-squad/ (deploys from `main` on every green push).
- M0-M7 are on `main` (data, full engine, utility AI, client, figures, terrain, mats, audio, keyword tooltips, sightlines and weapon VFX).
- M9 is done for two batches: ten playable teams, every pairing in the sim and the AI bench. Batch A (Pathfinders, Hierotek Circle, Plague Marines, Wyrmblade; spec `docs/spec/13-teams.md` sections 3 to 6) has wired GLB figures (41 bodies, 42 attachments). Batch B (Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers; sections 7 to 10) is rules-verified and plays on procedural stand-ins; its art waits for the owner.
- Cleanup pass (2026-10-18): Scrapcode Overload now uses the shared `firefight.actionDeclared` window for the Infiltrator's own Pick Up and mission actions, counteractions included (RULINGs Corrected); Grudge reads the hook's own `obscured` flag, so odds computed mid-Shoot agree; the AI turns an oval base (arquebus Gunner) toward the nearest enemy at the end of a move when the arc fits; a phone tap on a keyword inside a button (order cards) now presses the button; the gallery spec visits every team's attachment page (73 of 73 load); `.gitattributes` normalises line endings.
- Gates at the end of the pass: typecheck clean, 1005 Vitest tests, `validate:data` 71 files / 718 records, sim 40/40 clean, bench 40-0 (all ten teams), Playwright 39 of 39 (three long specs time out only under full parallel load; they pass with `--workers=2`).
- Not verified by ear: all audio. Not play-verified by the owner: the eight M9 teams.
- v2 figures (2026-10-18/19, `docs/spec/30-figures.md` section 7): M8 rigging was dropped; every body was regenerated in a dynamic pose with its weapons in the mesh. All 122 bodies are on `main` (`weaponsBaked`, `variants` chosen per operative id, sockets re-measured), each team checked in `?gallery`. Concepts, prompt lists and contact sheets live in `art/unit-concepts/v2/`. Not yet reviewed by the owner figure by figure; the v1 weapon attachments are no longer mounted on any body (equipment attachments still are).

## Next steps
1. Owner review of the batch A figures (wired GLBs in `?gallery`, attachment pages per team) and of the batch B art direction; collect fixes.
2. Owner review of the v2 bodies in `?gallery` and in a few games (poses, weapons, scale per team); re-roll any body from its concept with `tools/local-gen/run_v2_alteisen.bat` (Alteisen) or `run_v2_local.bat` (this PC, memory rules in spec 30 section 7). Possible follow-ups: a second pose for leaders, accessory attachments on the back/belt sockets, death cues tuned for the new silhouettes.
3. Remaining not-exact rules in `docs/needs-rules-check.md` and `13-teams.md`: direct damage removes at once (before-removal ploys auto-played or not offered); lifecycle-hook choices made by the team code (Reanimation order, Medic! acceptance, Weavefield Crest, Secure Salvage); no `weapon.choice` for Rending/Punishing/Severe; Utility Grenade marker on Smoke Grenade spots; Beam counts trial-retention crits; Climbing Rigs shorten every climb of one move. About 306 RULINGs are still Unsourced.
4. (M8 skeletal animation was dropped by the owner on 2026-10-18; do not reopen it for these fused meshes.)
5. Owner playtest round on the ten teams: collect feedback, fix, push.
6. Later: Approved Ops tac ops (card text still unsourced), Gallowdark, multiplayer; next project Boarding Actions (owner, week of 2026-10-19), reusing the engine and a shared Gallowdark set.

## Pipelines (how to regenerate things)
- Concepts: Gemini via Claude in Chrome on this PC (`art/*/PROMPTS.md` record every prompt). v2 bodies hold their weapons in a dynamic pose (one standalone prompt per body, exported as one JSON bundle per chat); v1 attachments are side-view props.
- 3D: Hunyuan3D on this PC (`%USERPROFILE%\Hunyuan3D-2`, work dir `outputs/ms-work`, batch scripts `run_*_local.bat`) and Alteisen (`E:\AI\work\murder-squad`, `tools/local-gen/run_*_alteisen.bat`, launched detached via `schtasks`; v2 bodies: `run_v2_alteisen.bat`, work dir `E:\AI\work\murder-squad\v2`). Finalisers: `tools/models/{measure-sockets.py,finalize-attachments.py,finalize-terrain.py}` (run with the 2.1 venv python), manifest `public/assets/models/manifest.json`.
- Mats: `tools/textures/gen-mats.mjs` against Flux Studio (port 7880).
- Audio: `tools/gen-audio.ts` against the Audio Studio (port 7890), manifest `tools/audio-manifest.json`, trims `public/audio/trims.json`, audition `public/sounds.html`.
- Gates: `npm run typecheck`, `npm test`, `npm run validate:data`, `npm run sim -- --games 40 --teams real --decider normal`, `npm run bench:ai -- --games 40`, `PW_PORT=41xx npm run e2e`.

## Known gaps and rulings
- `docs/needs-rules-check.md` holds 428 RULING lines (60 Confirmed, 39 Corrected, 306 Unsourced, 20 Fan-source; kill op table and map geometry Confirmed from the source images; Approved Ops tac ops out of scope; Guard treated as universal).
- Bench note: the bench rotates every playable team through the tested seat against a rotating opponent; `--pair a,b` restores the old two-team bench. Zero-action activations sit at 1.7% against the 2% gate.
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
