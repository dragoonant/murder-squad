# Killzone floor mats

Generated for Murder Squad by evilgouki with FLUX.2 klein (Apache-2.0) in the local Flux Studio (`POST /api/jobs`
`{model:'klein', aspect:'1:1', megapixels:1, batch:1}`, 4 steps, 1024x1024). Script: `tools/textures/gen-mats.mjs`
(`gen` makes 3 candidates per mat in `tools/out/mats-raw/`, `build` seam-blends the pick in `tools/textures/picks.json`).
Each texture is a 1024x1024 JPEG (quality 85, all under 400 KB) with a 192 px `-thumb.jpg` and a 2x2 `-tile-preview.jpg`
used to check the seams by eye. Tileability: `mirror` blends 12 percent of each edge with its mirror image; `cross` blends
four half-shifted copies so every copy's own seam has weight zero (used where mirroring left a visible kaleidoscope).
Rust grating is first cropped so both edges pass through the middle of a bar. Colour, repeat and brightness live in
`src/client/board/mats.ts`.

Shared prompt tail: `wordless, no objects, even lighting, flat orthographic view looking straight down, sharp detail, game floor texture`

| id | picked seed | candidates | blend | prompt (before the tail) |
|---|---|---|---|---|
| plasteel-deck | 1101 | 1101, 1102, 1103 | mirror | Seamless tileable top-down texture of riveted dark steel deck plates: a regular grid of about four by four square gunmetal plates with thin dark seams, a bolt at every plate corner, scuffed edges and faint oil stains |
| rust-grating | 1202 | 1201, 1202, 1203 | mirror + bar snap | Seamless tileable top-down texture of rusted industrial metal grating: a square mesh of flat orange-brown rusted bars with a few bolts, deep black void visible through the square holes |
| cracked-concrete | 1302 | 1301, 1302, 1303 | cross | Seamless tileable top-down texture of cracked grey concrete paving: large slabs split by thin dark cracks, dust, stains and small rubble flecks scattered across the surface |
| ash-waste | 1402 | 1401, 1402, 1403 | cross | Seamless tileable top-down texture of a wasteland ground covered in grey-brown ash and cinders, with small dark stones and pebbles half buried in the powdery dust |
| gothic-flagstones | 1502 | 1501, 1502, 1503 | mirror | Seamless tileable top-down texture of dark worn stone flagstone floor: irregular slabs about four across, chipped and weathered, with two small black iron drainage grilles set between the flagstones |
| blood-foundry | 1613 | 1611, 1612, 1613 | cross | Seamless tileable top-down texture of a dark cast-iron foundry floor of riveted plates, mostly plain dark metal with low-contrast ochre rust stains, a few small dried dark red blood smears and faint black scorch marks spread evenly across the plates |

Prompt lessons used: no negative clauses (describe what is there), "wordless", name the thing (steel plates, grating,
flagstones), state the plate count so the scale is predictable. The first blood-foundry batch (seeds 1601-1603) had huge
splatters that repeated like wallpaper; the second batch (1611-1613) asks for small, evenly spread stains and tiles well.
