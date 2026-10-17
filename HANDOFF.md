# HANDOFF

Written 2026-10-17 by the kickoff session. Read `CLAUDE.md` first, then this file, then `STATUS.md`, then `PLAN.md`.

## Where things stand
- M0 scaffold is on `main` and pushed; Pages deploy pending its first green run.
- Specs are being written into `docs/spec/` (10 rules core, 11 missions, 12 checklist, 13 teams, 14 golden examples by a Sonnet agent; 00 architecture by the session). 20 data schema, 30 figures, 40 AI, 50 client, 60 testing follow.
- All owner decisions are settled (`KICKOFF.md` §3); do not re-ask them.

## Next steps
1. Finish specs 00/20/30/40/50/60.
2. M1 data: encode both teams, weapon rules, equipment, Preliminary Ops and layouts from `docs/spec/13-teams.md` and `11-missions.md`; `tools/validate-data.ts` with ajv; `source` per record.
3. M2 engine per `docs/spec/00-architecture.md` and `10-rules-core.md`; tests by checklist ID; `tools/sim.ts`.
4. M3 playable client; then M4 AI; M5 look (needs a Gemini session: check `mcp__claude-in-chrome__list_connected_browsers` for a Windows browser); M6 sound via the Audio Studio API; M7 polish.

## Gotchas inherited (see docs/knowledge-base/README.md for the full list)
- `legalActions` never empty; engine owns every displayed number; presentation cursor gates the UI; bot waits for idle.
- Agents: exact file lists, no installs/commits, foreground commands, never taskkill by image name.
- PowerShell 5.1 writes a BOM; Git Bash paths break Windows Python; `models:optimize` meshopt needs the decoder.
- GPU: one job per machine; Alteisen via `ssh alteisen` with `E:\AI\py2.bat` / `py21.bat` launchers (junctions do not resolve over SSH).
