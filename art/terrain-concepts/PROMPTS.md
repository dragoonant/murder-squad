# Terrain concept prompts (Gemini, painted wargame terrain)

Made in Google Gemini (Flash) through Claude in Chrome, text prompts only, one chat (gemini.google.com/app/92822a3d9f6486a0), 8 generations, no retries needed. PNGs are 1024 wide (heights 205-765), exported by the in-page JSON bundle (blob canvas to PNG, one download, decoded with python). All eight were checked by eye: one piece, white background, no figures, no text, fully painted ochre and dark grey with rust.

## Prompt template
"Generate an image: a fully painted tabletop wargame terrain piece, 28mm scale[, same painted style and palette as the previous image(s)]: <description>. Grimdark ruined gothic-industrial style: dark iron girders, buttresses, riveted plasteel, rust streaks, weathered ochre and dark grey paint, battle damage. <FOOTPRINT and height ratio>. Shown from a front three-quarter elevated view, standing on a plain white background, no base, no figures, no text or lettering, even soft lighting, no shadows, exactly ONE piece centred and not cropped."
Each piece was a fresh full prompt in the same chat (not an image edit), with "same painted style and palette as the previous images" from response 2 on; the palette stayed consistent.

## Responses
Rules footprints come from `src/data/killzones/volkus-01.json` (inches). Responses 7 and 8 are extras: the layout does not use them yet (spec 30-figures section 5 names them), footprints are my own guess.

| Response | Slug | Rules footprint x height | Ratio stated in the prompt |
|---|---|---|---|
| 1 | t-large-ruin | 6 x 4, walls 3, upper floor (vantage) at 3, rampart 4 | RECTANGULAR 3:2, about as tall as deep; description: two-storey, intact flat upper floor deck with low rampart at back, doorway and barred window below, one corner collapsed |
| 2 | t-small-ruin | U-shape 4 x 3 (back wall 4 long, two 2.5 returns), height 2.5, no floor | U-shaped 4:3, walls about as tall as deep; roofless three-wall bay, window opening, exposed girders |
| 3 | t-heavy-rubble | about 3 x 1.8, height 1.5 | LOW elongated 5:3, height about three-quarters of depth; dense heap of masonry, girders, plasteel, pipes |
| 4 | t-light-rubble | about 3 x 1.6, height 1 | FLAT elongated 2:1, height about half the depth; low scatter |
| 5 | t-barricade | 3 x 0.6, height 1 | VERY LONG THIN 5:1, height about 1.5x thickness; sandbags plus riveted plasteel barrier plates |
| 6 | t-container | 3 x 1.5, height 2.5 | RECTANGULAR 2:1, height about 1.67x width; armoured cargo crate, hazard stripes, no stencils |
| 7 | t-stronghold (extra) | not in layout; assumed 4 x 3, height 3 | RECTANGULAR 4:3, height about three-quarters of depth; blockhouse, armoured door, firing slits, fire step behind battlemented parapet |
| 8 | t-pipes (extra) | not in layout; assumed 4 x 1, height 0.7 | LONG 4:1, height about two-thirds of depth; pipe bundle on three iron stands |

## QC notes
- t-large-ruin: the upper deck is flat, open and walkable with a back rampart; the lower storey has a door and a barred window; the left corner is collapsed. The building reads about 1:1 tall to deep, slightly taller than the 3-inch wall plus deck suggests, but fits.
- t-small-ruin: matches the three-wall U layout of the data (not an L); the floor is bare, no roof.
- t-heavy-rubble / t-light-rubble: organic blob outlines on a rocky base rather than rectangles; footprint ratios right. Heavy has a flat slab top (usable as a low platform); light is lower.
- t-container: reads closer to 2:1 length-to-width with height about equal to width (a bit squatter than 1.67); scale to the manifest height. Painted hazard stripes are the only markings, no text.
- t-barricade and t-pipes are very wide images (1024x205 and 1024x254); t-barricade shows the sandbags dipping at the ends.
- Every piece sits on a thin textured base lip (rubble, barricade) or a plain footing despite "no base"; cut it off when making the mesh. Backgrounds are off-white with a faint light grey floor gradient, not pure white.
- Bundle file in Downloads: ms-terrain.json (intermediate).
