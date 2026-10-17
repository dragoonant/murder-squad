# Attachment concept prompts (Gemini, MGSD props)

Made in Google Gemini (Flash) through Claude in Chrome, text prompts only, one chat per team. PNGs are 1024x572 exports (blob canvas, in-page JSON bundle, decoded with python). 34 generations in total (17 Angels of Death, 17 Kommandos). 31 slugs saved, but three Kommando blade images are duplicates (see QC notes).

## Base prompt (first prop of each chat)
"Generate an image: a single <weapon> prop from a super-deformed SD model kit (Bandai MGSD style): chunky, slightly oversized and simplified proportions, crisp hard-surface panel detail, <colours>. Exact side view, horizontal, barrel or blade pointing RIGHT, grip at the bottom left, no hands, no figure, no base, no text, plain white background, even soft lighting, no shadows, exactly ONE object centred and not cropped."
Colours: Angels of Death "deep blue and gunmetal colours with gold details"; Kommandos "rusty scrap metal with red and black paint and crude rivets".
Follow-ups: "Same style, framing and white background: now a <next weapon>." plus a short descriptor in brackets or after a comma (listed below). In the Kommando chat the full base wording was used again from response 13 on, because "Same style..." blade prompts kept returning the choppa image.

## Angels of Death (chat gemini.google.com/app/1eab530f96c2f42e)
| Response | Slug | Prompt detail |
|---|---|---|
| 1 | w-hand-flamer | base prompt, "hand flamer pistol" |
| 2 | w-heavy-bolt-pistol | "(a large chunky bolt pistol)" |
| 3 | w-plasma-pistol | plain |
| 4 | w-auto-bolt-rifle | plain |
| 5 | w-bolt-rifle | plain |
| 6 | w-stalker-bolt-rifle | "(a longer barrel and a scope on top)" |
| 7 | w-auxiliary-grenade-launcher | "a short standalone under-barrel tube launcher unit with a small grip, shown on its own" |
| 8 | w-bolt-pistol | "(a standard-sized bolt pistol)" |
| 9 | w-heavy-bolter | "(big, with a large ammo box)" |
| 10 | w-bolt-sniper-rifle | "(very long, with a suppressor and a scope)" |
| 11 | w-chainsword | "blade pointing RIGHT, grip at the bottom left" |
| 12 | w-power-fist | "a single oversized armoured gauntlet with the fist pointing RIGHT and the wrist cuff at the left, no arm, no hand inside" |
| 13 | w-power-sword | "blade pointing RIGHT, grip at the bottom left" |
| 14 | w-thunder-hammer | "horizontal, hammer head pointing RIGHT, haft at the left" |
| 15 | e-frag-grenade | "a single frag grenade (one chunky grenade only, centred)" |
| 16 | (failed, empty response) | krak grenade, same wording as 17 |
| 17 | e-krak-grenade | "a single krak grenade (one chunky shaped-charge grenade only, centred)" (retry) |

## Kommandos (chat gemini.google.com/app/61a75f7c20cfdc63)
| Response | Slug | Prompt detail |
|---|---|---|
| 1 | w-slugga | base prompt, "slugga pistol prop (a crude ork pistol)" |
| 2 | w-choppa | "a crude ork cleaver sword, blade pointing RIGHT, grip at the bottom left" |
| 3 | w-big-choppa | superseded, near-identical to response 2 (see 17) |
| 4 | w-power-klaw | "a single huge ork claw gauntlet with big pincers pointing RIGHT and the wrist cuff at the left, no arm, no hand inside" |
| 5 | w-breacha-ram | "a hydraulic battering ram on an arm mount bracket, ram head pointing RIGHT, mount at the left" |
| 6 | w-burna | "a crude ork flamer with a nozzle pointing RIGHT, a fuel tank and a hose" |
| 7 | w-shokka-pistol | "a crude ork pistol with electrical coils and crackling sparks" |
| 8 | w-dakka-shoota | "a crude ork rapid-fire gun with a drum magazine" |
| 9 | w-rokkit-launcha | "a crude ork rocket launcher with a big tube pointing RIGHT and a red-tipped rokkit loaded" |
| 10 | w-scoped-big-shoota | "a crude ork heavy gun with a long barrel and a crude scope on top" |
| 11 | (superseded) | throwing knife, "Same style" wording: returned the choppa image again |
| 12 | w-grot-choppa | "a small crude cleaver, blade pointing RIGHT" (a second variant with "NEW, different image" wording was typed but never sent): returned the choppa image again, kept as is |
| 13 | e-dynamite | full base wording, "bundle of dynamite ... five red dynamite sticks bundled with a rusty scrap-metal strap, a short fuse" |
| 14 | e-harpoon | full base wording, "harpoon gun ... big barbed harpoon head loaded at the muzzle and a coiled rope" |
| 15 | e-stikkbomb | full base wording, "crude ork stick grenade: a rusty scrap-metal can head on a short wooden handle with a pull cord" |
| 16 | w-throwing-knife | full base wording, "short straight crude ork combat knife with a narrow blade and a rag-wrapped handle" |
| 17 | w-big-choppa | full base wording, "huge two-handed cleaver axe, very wide tall notched blade, long double-grip handle": again came back looking like the choppa |

## QC notes
All 31 slugs saved and checked by eye on contact sheets: one object, side view, pointing right, no hands, no text.
- Generation cap (34) reached; no retries left.
- DUPLICATES: `w-choppa`, `w-big-choppa` and `w-grot-choppa` are three different renders of effectively the same cleaver (different bytes, same design). Gemini kept returning the choppa for any ork blade in this chat. For the mesh pipeline, use one choppa mesh and scale it by manifest (big choppa larger, grot choppa smaller), or regenerate the other two in a fresh chat.
- The Kommando blade images (choppa family) have a light grey gradient background rather than pure white.
- Angels of Death `w-heavy-bolter` is only a slightly larger auto bolt rifle with a drum (no big box), and `w-bolt-rifle`/`w-auto-bolt-rifle`/`w-bolt-pistol` share one receiver design (consistent family, little variety).
- `w-power-fist` is angled slightly; `e-dynamite` is a bundle viewed from the side with ropes at both ends; frag/krak grenades and `e-stikkbomb` are not perfectly horizontal (grenade pin ring at left).
- Mid-run problem: a reload of the first chat lost the in-page bundle; recovered by loading each lh3 image URL top-level, converting to PNG and passing the data to a Gemini tab through `window.name`.
- Bundle files in Downloads: ms-attach-aod.json, ms-attach-aod-b.json, ms-attach-aod-c.json, ms-attach-aod-r1.png, ms-attach-kom.json, ms-attach-kom-a.json, ms-attach-kom-b.json (all intermediate).
