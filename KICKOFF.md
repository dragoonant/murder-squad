# Kill Team port: kickoff (2026-10-17)

Working title **Murder Squad** (folder `wh40k-murder-squad`; "Kill Team" the way "Mallet 42k" is Warhammer 40k). The knowledge base of every prior port is in [docs/knowledge-base/README.md](docs/knowledge-base/README.md). This file records the questions put to the owner, the insights behind the defaults, and every decision with its reasoning, so any of them can be changed later.

## 1. What Kill Team is, in one paragraph
A 30" x 22" skirmish between two kill teams of 6-14 individual operatives over four turning points. Each turning point: a Strategy phase (initiative roll, CP, strategic gambits) and a Firefight phase of alternating single-operative activations. An operative picks an Engage or Conceal order and spends AP up to its APL (2 or 3) on Reposition, Dash, Charge, Fall Back, Shoot, Fight, Pick Up/Place Marker, Guard and team-specific actions. Shooting is attack dice vs three defence dice with cover saves and obscuring; fighting alternates strike/block. Scoring is crit op + tac op + kill op. Full primer: [docs/knowledge-base/kill-team-rules-primer.md](docs/knowledge-base/kill-team-rules-primer.md).

## 2. Insights from the knowledge base that shape this build
1. **Mallet 42k is 70% of this game already.** Same universe, same stack, same art style. Its engine contract (pure `step`, one pending decision, events, seeded RNG, replay, `view`), presentation director, dice tray, VFX families, weapon-flavour map, GLB loader, hue-band army painter, phone layer, workflow scripts and 127 audio files port directly. What does not port: the 40k phase structure (Kill Team alternates single operatives, not whole-army phases), the Strength-vs-Toughness wound roll (Kill Team has none), unit coherency and leaders, and all faction data.
2. **Fell-in is the closest ruleset.** Single-model activations with AP, cover and scenarios. Its `turnflow`/`movement`/`attack`/`melee` module split, scenario status/briefing UI and weapon-socket poses are the right skeleton for the Firefight phase and for showing each operative's real loadout.
3. **236 MGSD figures exist.** Intercessors, Ork boyz, Cadians, Necron warriors, Kabalites, Pathfinders, Skitarii, Plague Marines, Legionaries, Cultists, Berzerkers, Hearthkyn, Guardians, Battle Sisters, Custodians, Neophytes/Acolytes, Tzaangors, Scarab Occult and more. Kill Team operatives are variants of these (a Kommando Burna Boy is an Ork boy with a burna). The proven Gemini "edit the base image, change only the weapon" method, or Flux klein image-edit locally, produces the variants; Hunyuan turns each into a GLB in about 2 minutes.
4. **The audio suite is local and free now.** Audio Studio (port 7890) does SFX (Stable Audio Open), music (ACE-Step 1.5, full instrumental tracks with BPM/key control), and voice (Qwen3-TTS voice design, Chatterbox). Mallet's `gen-audio.ts` manifest shape stays; only the backend changes from ElevenLabs HTTP to the studio's `POST /api/jobs`. Mallet's 59 weapon sounds and faction death sounds are reusable as the first batch.
5. **The cost lesson is settled.** Mallet spent 4.8M tokens before anything was playable; Dead of Winner's reset shipped data + client + AI for 1.8M. This build follows the lean recipe: copy sibling code, Sonnet implementers with exact file lists, one or two agents per milestone, no review loops except the attack/fight sequence and team data, about 2.5M tokens per push.
6. **Terrain is the one art area with a real choice.** Open killzones (Volkus-style ruins and industrial pieces) reuse Mallet's painted citadel terrain v5 pipeline. Gallowdark (Into the Dark) is a different ruleset (close quarters, hatchways) and a different art set; it is a later expansion, not v1.
7. **The AI is the product** (no official solo mode). Kill Team's alternating activations make the utility AI simpler than 40k's whole-army phases: score one operative's activation at a time (order choice, move target, shoot/fight target, objective value), with tac-op awareness. Whirr's assassination search and Fell-in's threat map are the templates. Bench gate: normal beats random >= 95%.

## 3. Owner's answers (2026-10-17, settled; do not re-ask)
| Question | Answer |
|---|---|
| First two teams | **Angels of Death vs Kommandos** |
| Figures | **Regenerate every operative fresh**, and make figures **modular**: each operative's weapons and equipment (grenades, packs, etc.) are swappable attachments on the model |
| Kitbash scope | **Rules-legal loadouts only**: a team builder picks each operative's legal options from its datasheet and the figure shows exactly that (WYSIWYG) |
| Concept images | **Gemini first** (highest quality). When Gemini is unavailable, use procedural placeholder figures and wait for a Gemini session for the real concepts; do not substitute Flux/SDXL concepts |
| GPU use | **Any time, unattended**, one job at a time per machine; **split batches between this PC and Alteisen** |
| Repo | **Public `dragoonant/murder-squad`** with Pages, pushes to `main` after each stage pre-approved |
| Killzone | **Both, open first**: Volkus-style open killzone in v1, Gallowdark (Into the Dark) as a later milestone |

Consequences: the figure system is a body GLB per operative archetype with named sockets (hands, back, belt, shoulders) plus attachment GLBs per weapon/equipment option, with pose variants for two-handed weapons (Fell-in's M5 method); the data model carries each operative's selectable options and the chosen loadout drives both rules and rendering; the team builder is a v1 screen; M5 figures depend on a Gemini session, so M3 ships with procedural placeholders and nothing waits on art.

## 4. Decisions (defaults unless the owner changes them)
| Topic | Decision | Why |
|---|---|---|
| Edition | Kill Team 2024 edition (Hivestorm) with the latest balance dataslate; 1:1 mechanics; own-words prose; real team/operative/weapon names | Same posture as Mallet; the free Lite rules and team PDFs are current; Wahapedia `kill-team3_` has the full text |
| Scope v1 | Two kill teams, Approved Ops missions (crit/tac/kill ops), one open killzone with several terrain layouts, player vs AI plus hotseat | Mirrors Mallet's Combat Patrol-first scaling; multiplayer later via the action log |
| Stack | Copy Mallet-42k M0 scaffold (Vite 8, React 19, R3F 9, zustand 5, TS 7, Vitest 5, Playwright, ajv) | Every sibling did this; the mobile layer comes with it |
| Engine shape | Mallet contracts (`types/actions/events/hooks/rng/decider/index`) with Fell-in's module split (`turnflow`, `movement`, `shoot`, `fight`, `ploys`, `missions`, `terrain`, `los`) | Alternating single activations fit Fell-in's shape; Mallet's event/decision model keeps the client reusable |
| Measurement | 1 unit = 1 inch, y up, 30 x 22 board centred at origin, true LOS by head point with base exclusion, control range 1" | Lite rules; Mallet's geometry/LOS code assumes inches |
| Data | JSON per team (`operatives`, `weapons`, `abilities`, `ploys`, `equipment`, `tac-ops`), `source` per record from the free team PDF or Wahapedia, ajv schemas frozen after a dry run over both v1 teams | Fidelity rule; every sibling did a dry run before freezing |
| Figures | Superseded by the owner's answer above: fresh MGSD body per operative archetype, bare-handed with sockets; weapons and equipment as attachment GLBs; pose variants for two-handed weapons | Owner wants per-operative customisation; Fell-in proved sockets and pose variants on Hunyuan meshes |
| Terrain | Open killzone with painted ruins/industrial pieces from Mallet's terrain v5 pipeline; Light/Heavy/Vantage traits in data; procedural flats | Image-to-3D cannot do flat terrain; v5 look was approved |
| Audio | Local Audio Studio: SFX via Stable Audio Open, music via ACE-Step (title, two battle loops, tense variant, victory/defeat stingers), narrator via Qwen3-TTS voice design (gravelly veteran squad leader, original voice, no cloning of real people); Mallet's weapon sounds as the first batch; `sounds.html` audition page | Owner's 2026-10-17 direction; zero credit spend |
| AI | Utility decider in a Web Worker, tiers random/easy/normal, per-activation scoring with tac-op awareness, `ai-bench` gate 95% vs random | Siblings' pattern; AI is the product |
| Testing | Checklist IDs on engine tests, golden test replaying the Lite rules example turn with forced dice, headless sim with invariants, one Playwright full game, mobile smoke | Lean recipe |
| Repo | Public GitHub under `dragoonant`, Pages deploy from `main`, pushes pre-approved after each stage (pending owner confirmation of visibility and name) | Every sibling |
| Check-ins | Screenshot per milestone, 10 lines or fewer; no approval stops unless blocked; contact sheets as FYI | Owner asked for no intervention |
| Secrets/privacy | No API keys needed (all local); `.gitignore` covers `*.token*`, `tokens.txt*`, `.env*`, `docs/sources/`; credit evilgouki; grep for the real name and home path before every commit | Standing rule |

## 5. Milestones
| # | Milestone | Done when |
|---|---|---|
| M0 | Scaffold + specs | Repo, CI, Pages placeholder; `docs/spec/00..60`; checklist; edition leak list; `CLAUDE.md`, `PLAN.md`, `STATUS.md` |
| M1 | Data | Both v1 teams, universal weapon rules, Approved Ops crit/tac/kill ops, killzone layouts; `validate:data` clean; a source per record |
| M2 | Engine | Strategy and Firefight phases, orders, every universal action, shoot and fight sequences, all weapon rules, ploys, counteract, injury, scoring; sim 100 games 0 violations |
| M3 | Playable | Pages build vs a random bot with placeholder figures (Mallet GLBs where they match), briefing, objective tracker, dice tray, prompts, presentation director |
| M4 | AI | Utility decider, tiers, bench >= 95% vs random |
| M5 | Look | Missing operative figures via concepts -> Hunyuan, terrain set, killzone board, army painter, `?gallery` check |
| M6 | Sound | SFX/music/voice via Audio Studio, flavour map, trims, music director, `sounds.html` |
| M7 | Polish | Narration pauses, hover help, settings, end screen, phone layout, perf (chunking, decimation) |
| M8+ | More teams | One worktree per team, prioritised by existing figure coverage |

## 6. Token budget (estimate)
M0 0.4M, M1 0.5M, M2 1.2M, M3 0.8M, M4 0.6M, M5 0.5M (plus GPU time), M6 0.3M, M7 0.5M: about 4.8M to a polished two-team game, each push under 2.5M. Each later team about 0.4M plus GPU time.
