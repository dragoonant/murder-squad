# 30 — Figures, attachments and terrain

Owner decisions (2026-10-17): fresh MGSD figures for every operative; **modular**: a body per operative archetype plus weapon and equipment attachments on sockets, showing the exact rules-legal loadout chosen in the team builder. Concepts from Gemini only (placeholders until a Gemini session exists). Pipeline details: `docs/knowledge-base/local-ai-studios.md`.

## 1. Style
MGSD (Bandai Master Grade SD): about 2–2.5 heads tall, head about 40% of total height and as wide as the shoulders, tiny torso, short stubby legs with big chunky feet, short arms with oversized hands, Master Grade hard-surface panel detail, plain round black base, white background, no lettering. Two dominant hues per team (for the hue-band army painter): Angels of Death deep blue / gold; Kommandos green skin and black-red scrap. Check proportions in the image, not the prompt; reject extra limbs/weapons, fused parts, text, cropped bases.

## 2. Body contract (`public/assets/models/bodies/<archetype>.glb`)
- Origin at base centre, y up, 1 unit = 1 inch, front +Z, pre-scaled to the datacard height (`heightIn` in the manifest), black base disc added upstream by `stage_finalize.py`.
- **Bare-handed**: the Gemini concept asks for empty hands in the hold pose (right hand a loose fist as if gripping, left hand open or supporting). Hunyuan meshes are fused, so sockets are measured after generation (`tools/models/sockets.mjs` reads a hand-picked point from a side/front render or from the manifest) and stored in the manifest, not in the GLB.
- Manifest `public/assets/models/manifest.json`: `{ bodies: { <archetype>: { file, heightIn, baseMm, sockets: { handR, handL, back, beltR, beltL, shoulderL, shoulderR, head }, poses: { long?, heavy?, melee2h?, shield? } } }, attachments: { <weaponOrEquipId>: { file, holdClass: pistol|rifle|long|heavy|melee1h|melee2h|shield|pack|grenade|tool, grip: Vec3, support?: Vec3, scale } } }`.
- Pose variants (`<archetype>@long.glb`, `@heavy.glb`, `@melee2h.glb`): the base concept edited in Gemini into the two-handed stance, regenerated through Hunyuan, both grip and support sockets measured (Fell-in M5 method). An operative whose chosen loadout needs a class the body lacks falls back to the default pose with the single grip socket.

## 3. Attachments (`public/assets/models/attachments/<id>.glb`)
One GLB per weapon or visible equipment: bolt rifle, auto bolt rifle, stalker bolt rifle, heavy bolt pistol, plasma pistol, hand flamer, chainsword, power fist, power weapon, thunder hammer; slugga, choppa, big choppa, power klaw, burna, rokkit launcha, breacha ram, snipa, dakka shoota, grot-related bits; grenades (belt), comms pack (back), medi-pack… Concept: side view, horizontal, barrel pointing right, no hands, white background. Scale: weapon length in inches relative to the body height (data in manifest). Attachment GLBs are also fused Hunyuan meshes, flat-tinted when paint fails.

## 4. Rendering (`src/client/figures/`)
`Operative.tsx` picks the body (archetype + pose by the loadout's heaviest hold class), mounts attachments at sockets with per-class offset/rotation (`HOLDS` table), applies the team paint shader (hue-band remap of the two source hues), and plays rigid whole-body cues (idle breathe, walk bob, shoot recoil, melee lunge, hit flinch, death topple/fade). Procedural stand-in (`Procedural.tsx`: capsule body, box weapon by hold class, coloured by team) while a GLB is missing or loading. `?gallery` shows every body × pose × attachment for the QC pass.

## 5. Terrain
Volkus-style set: stronghold, large ruin (two floors with vantage), small ruin, heavy rubble, light rubble, barricades, containers, pipes; each piece a GLB fitted to its rules footprint (`terrainFit.ts`) with traits per part from the killzone layout data. Concepts via Gemini ("fully painted tabletop wargame terrain piece, grimdark ruined gothic-industrial, white background"), Hunyuan, decimated to about 6k triangles; flats (rubble patches, floor plates) procedural. Vantage floors are explicit placeable surfaces in data so the engine and the renderer agree on heights.

## 6. Generation plan (M5)
1. One Gemini chat per team: a clean base figure (sergeant), then edit-variants for each archetype and pose; one chat for weapons/equipment side views; one for terrain.
2. `units.json`/`picks.json` entries on both GPU machines (this PC and Alteisen via `ssh alteisen`, `E:\AI\py2.bat`/`py21.bat`), batches of ≤9 per machine, one GPU job per machine.
3. `stage_finalize.py` → `public/assets/models/...`, `tools/models/optimize.mjs` (meshopt; loader has `setMeshoptDecoder`), sockets measured, manifest updated, `?gallery` contact sheets sent as FYI.
