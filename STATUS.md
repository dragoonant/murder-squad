# Status

Rewritten (not appended) as work lands. Orient from this file instead of exploring the codebase.

## M1 — data (2026-10-17, commit c2edd48)
| Area | State |
|---|---|
| Schemas | 10 JSON Schemas in `docs/spec/schemas/`, mirrored in `src/data/schema/`; `src/data/types.ts` mirror; `src/data/index.ts` `loadBundle()` (byId, teams, missions, layouts, weaponGroups). |
| Teams | `src/data/teams/angels-of-death` (9 datacards, 26 weapons, 18 abilities incl. 8 Chapter Tactics, 8 ploys, 4 equipment) and `kommandos` (11 datacards, 24 weapons, 16 abilities, 8 ploys, 4 equipment); rosters via `selection.slots` with half-selections; loadouts via `fixed`/`options` (profile groups). |
| Core | 23 weapon rules, 11 universal equipment, 2 grenades, Command Re-roll, 46 code-hook names in `src/data/code-hooks.json`. |
| Missions / layouts | Preliminary Ops Secure/Loot/Transmission with maps `prelim-1`/`prelim-2` (drop zones, territories, centreline, kill-grade table 5..14); Volkus layouts `volkus-01..03` (14/16/14 pieces with traits, objective spots per map). |
| Gates | `validate:data` ok (23 files, 180 records); `tests/data` 16 tests green. 11 RULING lines appended. |

## M5 — concepts (2026-10-17, commit b8345af)
20 MGSD body concepts (9 Angels of Death, 11 Kommandos) from Gemini in `art/unit-concepts/` with `PROMPTS.md`; contact sheet `screenshots/concepts-bodies-v1.png`; all pass the proportion bar. Hunyuan body batches launched unattended: Kommandos on Alteisen (`E:\AI\work\murder-squad`), Angels of Death on this PC (`Hunyuan3D-2/outputs/ms-work`), output to `public/assets/models/bodies/`. Attachments (weapons/equipment) not yet concepted.

## M6 — audio first batch (2026-10-17, commit f22261d)
`tools/gen-audio.ts` drives the local Audio Studio (port 7890); `tools/audio-manifest.json` has 82 ids (36 generated SFX, 12 Qwen3-TTS narrator lines with a fixed seed, 5 ACE-Step music tracks, 29 Mallet sounds reused); `public/audio/*.mp3` + `trims.json` (0.16 RMS target; music/ambience 0.10); `public/sounds.html` audition page; `docs/audio.md`. Not verified by ear. Client wiring (manager, event sounds, music director) is M6b.

## M0 — scaffold (2026-10-17)
| Area | State |
|---|---|
| Build | Vite 8 + React 19 + TypeScript 7 strict, package `murder-squad`, ESM. Deps copied from Mallet 42k (three 0.186, R3F 9, drei 10, zustand 5; vitest 5, playwright 1.63, ajv, tsx, lamejs). |
| Config | `vite.config.ts` (base `/murder-squad/` in prod, chunks react/three/r3f/engine), `tsconfig.json`, `playwright.config.ts` (chromium + iphone-se/iphone-pro/pixel projects, `PW_PORT`, `PW_BASE_URL`), `.claude/launch.json` (dev on 5190), `.gitattributes` (LF workflow scripts), `.gitignore` (secrets, PDFs, `docs/sources/`, outputs). |
| Client | `src/main.tsx`, `src/client/App.tsx`: placeholder 30"x22" plane with a 1" grid, demand frameloop, `data-testid="title"`. |
| Tests | `tests/engine/smoke.test.ts`; `tests/e2e/home.spec.ts`. `tools/{sim,ai-bench,validate-data}.ts` are placeholders. |
| CI | `.github/workflows/deploy.yml`: typecheck, test, build, Pages on push to `main`. Pages enabled (workflow build type). |
| Docs | `CLAUDE.md`, `PLAN.md`, `KICKOFF.md`, `HANDOFF.md`, `README.md`, `docs/knowledge-base/*` (8 entries + index), `docs/spec/` (being written). |
| Sources (gitignored) | `docs/sources/`: Lite rules, core rules, killzones, missions, appendix (Wahapedia text), update logs, Approved Ops companion, universal equipment, team rules for Angels of Death, Kommandos, Pathfinders, Hierotek Circle, Novitiates. |
