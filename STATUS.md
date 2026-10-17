# Status

Rewritten (not appended) as work lands. Orient from this file instead of exploring the codebase.

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
