# HANDOFF

Updated 2026-10-18 after the M9 batch A polish pass. Read `CLAUDE.md` first, then this file, then `STATUS.md`, then `PLAN.md`.

## Where things stand
- Live playtest build: https://dragoonant.github.io/murder-squad/ (deploys from `main` on every green push).
- M0-M7 are on `main` (data, full engine, utility AI, client, 20 MGSD bodies, 31 attachments, 8 terrain GLBs, 6 mats, audio, keyword tooltips, sightlines and weapon VFX); M8 (rigged, animated bodies with hold poses) is on PR #2.
- M9 batch A is playable: Pathfinders, Hierotek Circle, Plague Marines and Wyrmblade (spec `docs/spec/13-teams.md` sections 3 to 6), six playable teams in all, every pairing in the sim. The polish pass moved the team approximations onto the new shared windows (Slink Into Darkness at activation end, Curse of Rot before re-rolls, Poisonous Demise and A Plan Generations in the incapacitation ploy window, A Worthy Cause at Firefight start, Quicksilver after Strategy-phase moves, Medic! Dash after a Guard interrupt, FLAIL + FLAIL), with rulings marked Corrected. HIDING is open information in engine and client (the tray shows the opponent's hidden operatives). `bench:ai` now covers every playable team (per-team report).
- Batch A figures are in progress (concepts under `art/`; the teams play on procedural stand-ins until the GLBs land). New-team sounds are being generated.
- Not verified by ear: all audio. Not play-verified by the owner: the four new teams.

## Next steps
1. Batch A figures: concepts -> Hunyuan3D bodies and attachments -> measured sockets, mapped in `src/client/teams/<team>.ts` (replace the `standIns`).
2. M9 batch B (queued): Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers. Same process as batch A: one engine-prep stage for any generic capability the four need, then parallel team implementers (spec sections in `13-teams.md` first), shared tests and sim invariant, then a polish pass.
3. Owner playtest round on the six teams: collect feedback, fix, push.
4. M8 skeletal animation is done for the 20 Angels of Death and Kommando bodies (PR #2, branch `claude/upbeat-yalow-16548d`): UniRig failed on MGSD bodies (3-joint spine), the procedural soft-cut rig + clip set + per-weapon hold poses ship (`docs/spec/30-figures.md` section 7). Batch A bodies get the same two commands per archetype once their GLBs land (`split-body.py`, `rig-clips.py`).
5. Later: Approved Ops tac ops (card text still unsourced), Gallowdark, multiplayer; next project Boarding Actions (owner, week of 2026-10-19), reusing the engine and a shared Gallowdark set.

## Pipelines (how to regenerate things)
- Concepts: Gemini via Claude in Chrome on this PC (`art/*/PROMPTS.md` record every prompt). Bodies are bare-handed MGSD; attachments are side-view props.
- 3D: Hunyuan3D on this PC (`%USERPROFILE%\Hunyuan3D-2`, work dir `outputs/ms-work`, batch scripts `run_*_local.bat`) and Alteisen (`E:\AI\work\murder-squad`, `tools/local-gen/run_*_alteisen.bat`, launched detached via `schtasks`). Finalisers: `tools/models/{measure-sockets.py,finalize-attachments.py,finalize-terrain.py}` (run with the 2.1 venv python), manifest `public/assets/models/manifest.json`.
- Mats: `tools/textures/gen-mats.mjs` against Flux Studio (port 7880).
- Audio: `tools/gen-audio.ts` against the Audio Studio (port 7890), manifest `tools/audio-manifest.json`, trims `public/audio/trims.json`, audition `public/sounds.html`.
- Gates: `npm run typecheck`, `npm test`, `npm run validate:data`, `npm run sim -- --games 40 --teams real --decider normal`, `npm run bench:ai -- --games 40`, `PW_PORT=41xx npm run e2e`.

## Known gaps and rulings
- `docs/needs-rules-check.md` holds about 230 RULING lines (kill op table and map geometry are Confirmed from the source images; Approved Ops tac ops out of scope; Guard treated as universal; several engine deviations such as no `weapon.choice` for Rending/Punishing/Severe).
- Bench note: the bench rotates every playable team through the tested seat against a rotating opponent; `--pair a,b` restores the old two-team bench. Zero-action activations sit at 1.8% against the 2% gate.
- Choppa, big choppa and grot choppa share one Gemini design at different scales; heavy bolter reads like a bigger rifle.
- Personal path leaked into one early commit (`ae22229`, batch script); scrubbed in the next commit, history untouched (owner's call to rewrite).

## Gotchas (new this project)
- Bash heredocs mangle backslashes in this shell: write batch files and Windows-path JSON with the Write tool.
- `stage_shape.py` lives in the 2.1 folder and must run with that cwd; `stage_finalize.py` lives in the 2.0 folder and hard-codes `units.json` (use `merge_units.py`).
- Long remote jobs: launch detached (`schtasks`), never over an attached ssh (10-minute tool cap); never `taskkill` by image name (refused by policy anyway).
- A pre-commit hook (`.git/hooks/pre-commit`, patterns in `privacy-patterns.txt`) refuses commits that add the owner's name or home path.
