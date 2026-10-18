# HANDOFF

Updated 2026-10-17 (evening) by the kickoff session. Read `CLAUDE.md` first, then this file, then `STATUS.md`, then `PLAN.md`.

## Where things stand
- Live playtest build: https://dragoonant.github.io/murder-squad/ (deploys from `main` on every green push).
- M0-M6 are on `main`: data for both teams, full engine (setup, strategy, firefight, movement, shoot, fight, every weapon rule, ploys, equipment, guard, markers, Preliminary Ops scoring, all team rules), utility AI (normal 40-0 vs random), client (start, team builder, briefing, battle with dedicated prompts, dice tray, presentation director, end screen), 20 MGSD body GLBs, 31 attachment GLBs held at measured sockets, 8 terrain GLBs, 6 floor mats, 82 generated sounds with narrator and music wired through the audio manager.
- M7 polish is in progress (start-screen options incl. bot tier and mat picker, scenario fixtures, phone layout, chunking, prompt consistency).
- Not verified by ear: all audio. Not play-verified by the owner: everything (the owner has the URL).

## Next steps
1. Finish M7 (see the agent brief in the session log / `STATUS.md` once it lands); rewrite `STATUS.md` with the final counts.
2. Owner playtest round: collect feedback, fix, push.
3. M8 skeletal animation: UniRig pilot on two bodies (owner decision), part-split articulation as fallback.
4. M9+: Approved Ops tac ops (card text still unsourced), more teams by figure coverage (Pathfinders, Hand of the Archon, Hunter Clade, Plague Marines, Legionaries, Wyrmblade, Hearthkyn Salvagers), Gallowdark, multiplayer.
5. Next project after polish: Boarding Actions (owner, week of 2026-10-19), reusing Mallet's engine and a shared Gallowdark set.

## Pipelines (how to regenerate things)
- Concepts: Gemini via Claude in Chrome on this PC (`art/*/PROMPTS.md` record every prompt). Bodies are bare-handed MGSD; attachments are side-view props.
- 3D: Hunyuan3D on this PC (`%USERPROFILE%\Hunyuan3D-2`, work dir `outputs/ms-work`, batch scripts `run_*_local.bat`) and Alteisen (`E:\AI\work\murder-squad`, `tools/local-gen/run_*_alteisen.bat`, launched detached via `schtasks`). Finalisers: `tools/models/{measure-sockets.py,finalize-attachments.py,finalize-terrain.py}` (run with the 2.1 venv python), manifest `public/assets/models/manifest.json`.
- Mats: `tools/textures/gen-mats.mjs` against Flux Studio (port 7880).
- Audio: `tools/gen-audio.ts` against the Audio Studio (port 7890), manifest `tools/audio-manifest.json`, trims `public/audio/trims.json`, audition `public/sounds.html`.
- Gates: `npm run typecheck`, `npm test`, `npm run validate:data`, `npm run sim -- --games 40 --teams real --decider normal`, `npm run bench:ai -- --games 40`, `PW_PORT=41xx npm run e2e`.

## Known gaps and rulings
- `docs/needs-rules-check.md` holds about 80 RULING lines (kill op table and map geometry are Confirmed from the source images; Approved Ops tac ops out of scope; Guard treated as universal; several engine deviations such as no `weapon.choice` for Rending/Punishing/Severe).
- Bench note: equal-skill AI matches sit near 50% because Angels of Death beat Kommandos regardless of seat; the bench reports VP difference too.
- Choppa, big choppa and grot choppa share one Gemini design at different scales; heavy bolter reads like a bigger rifle.
- Personal path leaked into one early commit (`ae22229`, batch script); scrubbed in the next commit, history untouched (owner's call to rewrite).

## Gotchas (new this project)
- Bash heredocs mangle backslashes in this shell: write batch files and Windows-path JSON with the Write tool.
- `stage_shape.py` lives in the 2.1 folder and must run with that cwd; `stage_finalize.py` lives in the 2.0 folder and hard-codes `units.json` (use `merge_units.py`).
- Long remote jobs: launch detached (`schtasks`), never over an attached ssh (10-minute tool cap); never `taskkill` by image name (refused by policy anyway).
- A pre-commit hook (`.git/hooks/pre-commit`, patterns in `privacy-patterns.txt`) refuses commits that add the owner's name or home path.
