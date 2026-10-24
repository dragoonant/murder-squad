# Knowledge base: everything learned across the board-game ports

Written 2026-10-17 as the first step of the Kill Team project ("wh40k-murder-squad"). Each entry was compiled from that project's own CLAUDE.md, HANDOFF.md, STATUS.md, PLAN.md, specs, tools and git log, plus the per-project memory notes. Nothing here is invented; where a source was silent the entry says so.

| Entry | Game | Why it matters for Kill Team |
|---|---|---|
| [mallet-42k.md](mallet-42k.md) | Warhammer 40k 10th ed Combat Patrol, 34 patrols, 236 MGSD GLBs, phone support | **Primary template.** Same universe, same art style, same stack. Engine/client/AI patterns, 127 reusable audio files, 236 reusable figures, prompts. |
| [whirr-machine-and-warmechforge.md](whirr-machine-and-warmechforge.md) | Warmachine MK4 (6 factions, 5 boards, music) and BattleTech Classic (hex, record sheets) | Second-generation process (workflow scripts, lean stages, golden tests, invariants tool), themed boards, music pipeline, figure gate lessons. |
| [dead-of-winner.md](dead-of-winner.md) | Dead of Winter (AI colonists, hidden info) | Hidden-information `view(state, seat)` and leak test, persona voice lines, the token-economy reset (8M -> 1.8M), Vassal research route. |
| [fell-in.md](fell-in.md) | Fallout: Wasteland Warfare (skirmish, d20) | Closest ruleset shape to Kill Team (single-model activations, AP, cover, scenarios); weapon GLBs on hand sockets and pose variants; local-studio audio direction; the official-AI-card decider. |
| [not-enough-minerals.md](not-enough-minerals.md) | StarCraft TMG (squads, 3 factions, 44 terrain GLBs) | Most recent full build (2026-10-13..17): MGSD figures by Gemini edit-variants, terrain v2 pipeline on the second PC, music director, meshopt gotcha, review gate table. |
| [other-projects.md](other-projects.md) | 22 other games (card-game series, arcade remakes, roguelites) | Cross-project conventions, the Overnight Build Playbook, the series' view of Mallet's cost. |
| [local-ai-studios.md](local-ai-studios.md) | The GPU PC's generation suite | Exact HTTP APIs for Flux, Hunyuan and **Audio Studio** (music, SFX, foley, voice), the Hunyuan stage scripts, concept-image routes, the MGSD standard, GPU etiquette. |
| [kill-team-rules-primer.md](kill-team-rules-primer.md) | Kill Team 2024 edition | What the game is (from the free Lite rules), where the full rules live, roster vs existing figures, edition leak list. |

## The owner's standing rules (earned across 30 projects; apply without re-asking)
1. **Playable first.** Something the owner can open on Pages and play beats test coverage. Every stage ends in something clickable, with a screenshot.
2. **Fidelity is the product.** Mechanics ported 1:1 from the current edition; never tune printed numbers; log every ambiguity as `RULING: <rule> | <what we did> | <why>` with a status word instead of blocking.
3. **"Mallet posture" on IP.** Real unit/weapon/ability/team names are fine; all prose (rules text, lore, UI copy) in our own words; no publisher art, icons or logos; official PDFs and community data stay in gitignored `docs/sources/`; README and UI say "unofficial, non-commercial fan project". GW iconography in generated figures is an accepted playtest placeholder.
4. **Do the legwork; research before assuming.** Free downloads, $0 checkouts, Vassal modules, fan wikis via curl, product photos: all fair game. Only stop for passwords, payment or account creation. Never ship a stand-in or "unverified" value after one blocked source.
5. **Answer before building.** When the owner asks questions, answer and propose, then wait for the go. Explicit instructions mean act.
6. **Cost-sensitive.** Sonnet implements, the session model integrates and verifies only where rules are dense; one or two agents per milestone with exact file lists; no adversarial review loops by default; about 2.5M tokens per push; check-ins of 10 lines or fewer. Mallet's big-spec experiment (4.8M before anything playable) is not to be repeated.
7. **Art direction is set once per project and not re-litigated.** For 40k that is MGSD (about 2-2.5 heads, head about 40% of height). Check the image, not the prompt. Concept approval is delegated to Claude; send contact sheets as FYI. Lock the figure look early (a late lock threw away a whole v1 set).
8. **No native tooltips in games**, prompts name what they decide, open information is a rule, never assume a choice, every displayed number comes from the engine.
9. **Audio is judged by ear on `sounds.html`**; say "not verified by ear" until the owner listens. The synth score was rejected once ("the music sucks"), so real generated music is expected. Since 2026-10-17 the local Audio Studio replaces ElevenLabs.
10. **GPU etiquette:** announce GPU work; never two GPU jobs at once; never kill node by image name. The owner waived the ask-first gate on 2026-10-17 for Fell-in and said to use the studios to develop the look and sound.
11. **Privacy:** credit "evilgouki"; never the real name or home path in anything that can become public; grep before every commit.
12. Questions go through the multiple-choice UI, batched (two batches of at most 4), recommended option first, everything else stated as a default.
13. **Pipeline everything; never idle a stage.** Each finished item moves to the next stage straight away: a concept PNG goes into the GLB queue the moment it renders, and a GLB is finalised and wired the moment it lands. Both GPUs (this PC and Alteisen) stay busy while concepts are still coming. The same goes for code: a team's verification starts when its implementer finishes, not when the whole batch does. Waiting for a full batch before starting the next stage was called out as inefficient (Murder Squad, 2026-10-18). **Quality gates also run per item, inside the stream.** Each concept passes a measurable check before it is kept: a side-by-side with an on-style reference figure, a head of about 35-40% of figure height, and about 2-2.5 heads overall. The coordinator reviews the first image and the contact sheet of each team before that team's GLBs start. "Check each image" with no concrete reference let 32 off-model concepts through, and the owner caught it, not us (2026-10-24).

## The proven build recipe (what every 3D port since Mallet has done)
1. **M0 scaffold** copied from the previous sibling (Vite 8 + React 19 + three 0.186 + R3F 9 + drei 10 + zustand 5 + TS 7 strict + Vitest 5 + Playwright + ajv + tsx; `deploy.yml` to Pages; `vite.config.ts` with sub-path `base`, chunk splitting and a second `sounds.html` entry; `playwright.config.ts` with `PW_PORT`; `.gitignore` for secrets, PDFs, `docs/sources/`, `e2e-out`, `tools/out`; `.gitattributes` LF for workflow scripts; `.claude/launch.json`). Write `CLAUDE.md`, `PLAN.md`, `HANDOFF.md`, `STATUS.md`.
2. **Specs** `docs/spec/00-architecture` (frozen contracts, one pending decision, `legalActions` never empty, rejections never throw, `view(state, seat)`, `query.*` owns every number), `10-rules-core`, `11-missions`, `12-rules-test-checklist` (stable IDs, lean), `13-golden` (a worked turn with forced dice), `20-data-schema` (+ JSON schemas, frozen only after a dry run over every unit in the first slice), `30-figures`, `40-ai`, `50-client`, `60-testing`, plus an edition leak list.
3. **M1 data** with a `source` per record and `validate:data`.
4. **M2 engine** (pure reducer, seeded RNG, action log, replay, headless `sim` with invariants and a stall cap, tests named by checklist ID, `action-fuzz`).
5. **M3 playable slice** on Pages with procedural stand-in figures, a random bot, briefing, objective tracker, dice tray, event feed, explanatory prompts, presentation director with presented-state cursor and bot idle wait.
6. **M4 AI** (utility decider in a Web Worker, tiers, `ai-bench` gate: normal beats random >= 95%).
7. **M5 art** (concepts -> Hunyuan GLBs -> `models:optimize` -> `?gallery` check -> wire), streamed: launch the GLB agent alongside the concept agent, polling the concept folders and queueing each new PNG on whichever GPU frees up first. Also terrain and boards, army painter.
8. **M6 audio** (weapon-flavour map first, manifest, idempotent generator, `measure-audio` trims, `sounds.html`, music director with calm/battle/tense/victory/defeat).
9. **M7 polish** (narration pauses, hover help, settings, end screen, phone layout via Mallet's form-factor layer).
10. More teams/factions in parallel worktrees, one Workflow run apiece.

## Gotchas that bit more than one project
- `legalActions` empty froze the bot (Mallet twice, WarMech once). Zero-cost reactions loop forever (one per window plus a stall cap).
- The UI must never do rules maths; read roll targets from state, not the last event.
- Bot acting ahead of animations; results drawn behind the prompt that asks about them.
- Concurrent `npm install` corrupts `node_modules`; Sonnet agents backgrounding long commands stall; one stage at a time; commit after each stage; after a dead run, `git status`, gates, commit by hand.
- `models:optimize` writes meshopt; `GLTFLoader` needs `setMeshoptDecoder` or every GLB silently falls back to the procedural figure.
- Quadrupeds/side-view concepts face the wrong axis (per-unit `yaw` in the manifest); check `?gallery` close-ups, the overview camera hides problems.
- Hunyuan style reference turns everything blue (`--style 0.2 --avoid`); floor-length capes need `--nocut`; Hunyuan paint flattens to pale tan (re-grade); image-to-3D cannot do flat terrain; terrain above about 6k tris costs frame time.
- Gemini: drifts to 6-7 heads unless the head size is stated in numbers and checked in the image; new free-text follow-ups drift, so edit one clean base image per faction; about 30 images per evening; "Download full size" is unreliable (fetch with `?alr=yes`); never paste from the clipboard (private text leaked once); 1 in 17 replies is text only.
- Flux: a proper noun invites lettering; vague nouns get filled by the model's prior; "magazine cover" draws a title banner.
- Audio: one sound per weapon until the flavour map existed; AI gunshots come back with crest factor 2 (real 8-20), so measure and layer; ElevenLabs charged for 502s. Describe the mechanism, state exclusions.
- PowerShell 5.1 writes a UTF-8 BOM (Python `json.load` fails); Git Bash `/c/...` paths break Windows Python; Git Bash eats backslashes in `sed -i`; `/tmp` is invisible to node; the built-in browser pane cannot drag three.js models (use Playwright `page.mouse` with >= 10 steps) and can lose WebGL (use `npx playwright screenshot`).
- Playwright port reuse serves a stale sibling build; give each worktree its own port. CI runners are about 2x slower (30 s vitest timeout, raised AI timing ceilings).
- Secrets: ignore `*.token*`, `Tokens.txt`, `tokens.txt*`, `.env*`; read keys only into env vars; personal paths/name once leaked into a public repo's history.
- HANDOFF.md goes stale fast; rewrite STATUS.md instead of appending; `ls` every path a doc claims.
