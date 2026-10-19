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

# Second batch: Pathfinders, Hierotek Circle, Plague Marines, Wyrmblade (2026-10-18)

Same method as day one (Gemini Flash through Claude in Chrome, text prompts only, one chat per team, PNG exported from the in-page blob image at 1024x572). 42 new props: 8 Pathfinders (`pf-`), 10 Hierotek Circle (`ht-`), 6 Plague Marines (`pm-`), 18 Wyrmblade (`wb-`). Files are named `<prefix><w|e>-<item>.png`. Every prompt used the full base wording (no "Same style" follow-ups, which returned duplicates in the Kommando chat), so there are no duplicate designs.

## Base prompt
"Generate an image: a single <weapon> prop from a super-deformed SD model kit (Bandai MGSD style): chunky, slightly oversized and simplified proportions, crisp hard-surface panel detail, <colours>, <one-sentence design>. Exact side view, horizontal, barrel or blade pointing RIGHT, grip at the bottom left, no hands, no figure, no base, no text, no logos or symbols, plain white background, even soft lighting, no shadows, exactly ONE object centred and not cropped."
Colours: Pathfinders "ochre and grey colours with pale blue glowing accents"; Hierotek "dark bronze and black metal with gold trim and glowing green energy lines"; Plague Marines "sickly pale green and rust-brown colours with green slime stains and bare bone-coloured trim"; Wyrmblade "dark purple and mustard yellow colours with worn grey metal". Mounted or staff items changed the orientation clause to "mounting bracket at the left" or "grip point near the middle left".

## Pathfinders (chat gemini.google.com/app/cf769dfa9bb1f926)
| Slug | Design sentence |
|---|---|
| pf-w-pulse-carbine | compact carbine, short barrel, side-mounted scope, curved magazine |
| pf-w-suppressed-pulse-carbine | same carbine with a long cylindrical silencer on the muzzle and a small scope |
| pf-w-ion-rifle | large energy rifle, thick barrel with glowing blue coils, big cylindrical power cell on top, heat vent at the front |
| pf-w-rail-rifle | long sleek rail gun, two parallel rails along the barrel, boxy battery pack behind the grip, scope |
| pf-w-marksman-rail-rifle | very long slim sniper rifle, long optical scope, small folded bipod; "soft grey and ochre colours" |
| pf-e-fusion-grenade | "one chunky round-bodied grenade with a flat shaped-charge nose with a glowing blue ring and a small pull ring on top", one grenade only |
| pf-w-burst-cannon | drone-mounted rotary cannon, four short barrels in a ring, boxy feed housing, flat mounting bracket at the left instead of a grip |
| pf-w-twin-pulse-carbine | drone-mounted weapon of two short carbine barrels stacked in one housing, flat mounting bracket at the left |

## Hierotek Circle (chat gemini.google.com/app/3d3eea5d133d08e7)
| Slug | Design sentence |
|---|---|
| ht-w-gauss-blaster | ancient robotic rifle, long barrel, glowing green core in the receiver, ribbed tubing, short blade bayonet under the muzzle |
| ht-w-tesla-carbine | short carbine with a spherical lightning-coil emitter at the muzzle crackling with green arcs, short bayonet |
| ht-w-synaptic-disintegrator | long slim sniper rifle, large glowing green eye-lens scope, small green crystal at the muzzle |
| ht-w-aeonstave | tall ornate gold staff, glowing green hourglass-shaped crystal head, sharp blade at the tip |
| ht-w-entropic-lance | long lance-cannon ending in a forked glowing green emitter, gold ribbed grip, cable loop |
| ht-w-abyssal-lance | long dark ornate lance-staff, swirling glowing green void-orb in a gold claw cage at the tip, tattered dark green cloth strip |
| ht-w-staff-of-light | second attempt (the first was too close to the aeonstave): short thick bronze staff topped by one very large round glowing green lens-disc with six short prongs, flared base spike, no blade |
| ht-w-arcane-conduit | short handheld energy conduit weapon like a thick wand-pistol, glowing green crystal cell, ribbed cables, flared gold muzzle |
| ht-w-spark | small back-mounted tesla coil: short bronze arch coil crackling with green lightning on a flat mounting plate |
| ht-w-atomiser-beam | small mounted ray emitter: thin bronze nozzle with a glowing green lens tip, small glowing green canister, flat mounting plate |

## Plague Marines (chat gemini.google.com/app/e13989987d5c6ab8)
The existing Angels of Death bolt pistol and plasma pistol are meant to be reused (hue-band repaint), so only Plague-specific props were made.
| Slug | Design sentence |
|---|---|
| pm-w-boltgun | corroded chunky assault rifle, stubby barrel, rusty box magazine, pitted receiver |
| pm-w-plague-sword | broad notched rusty sword, pitted blade, corroded guard, slime-dripping edge |
| pm-w-flail-of-corruption | short rusty handle, heavy chain, big spiked rusty iron ball at the right (first wording returned an empty response; reworded as "spiked flail") |
| pm-w-plague-spewer | heavy corroded sprayer with a wide dripping nozzle, rusty round tank under the body, thick hose coil |
| pm-w-plague-knife | short thick rusty knife, serrated pitted blade, wrapped bone-coloured handle |
| pm-w-corrupted-staff | tall twisted rusty iron staff topped with a knot of pipes and a glowing sickly green orb, small bell below |

## Wyrmblade (chat gemini.google.com/app/9ad4643e6b9b71e0, then 9cb1b1a01942380e after the usage cap)
Gemini hit its image usage cap after the first three props; the run waited for the reset (about two hours) and continued in a fresh chat on the same model. The Angels of Death bolt pistol and chainsword are meant to be reused for the Leader's pistol and chainsword options.
| Slug | Design sentence |
|---|---|
| wb-w-autogun | rugged improvised assault rifle, stock wrapped in yellow tape, long thin barrel with a heat shield, straight magazine |
| wb-w-shotgun | chunky double-barrelled mining shotgun, pump grip, yellow-taped stock |
| wb-w-master-crafted-autopistol | finely made compact automatic pistol, long slim barrel, curved magazine, gold-etched slide |
| wb-w-web-pistol | chunky pistol, wide funnel muzzle, round canister of sticky yellow-green goo on top |
| wb-w-power-maul | one-handed mining maul, thick yellow striking head wrapped in energy coils, short handle with wrist strap |
| wb-w-power-pick | mining pickaxe, curved double-pointed head glowing yellow at the edges, wrist strap |
| wb-w-flamer | mining-torch flamethrower, wide nozzle, small pilot flame, round yellow fuel canister, short hose |
| wb-w-grenade-launcher | short fat-barrelled launcher, wide round muzzle, revolving drum, yellow-taped stock |
| wb-w-webber | bulky goo sprayer rifle, wide funnel nozzle, large round yellow-green goo tank on top, thick hose |
| wb-w-heavy-stubber | big belt-fed machine gun, long finned barrel, large ammo box, carrying handle, folded bipod |
| wb-w-mining-laser | big rock-cutting laser cannon, thick yellow barrel, glowing orange lens, power cell, cooling fins, carry handle |
| wb-w-seismic-cannon | heavy cannon with a very wide flared bell muzzle, thick resonator drum with yellow rings, carry handle |
| wb-w-liberator-autostubs | large ornate revolver-style heavy pistol, long barrel, chunky cylinder, gold filigree ("polished grey metal and gold engraving"); one pistol shown, the weapon is a pair |
| wb-w-kelermorph-knife | slim curved dagger, gold guard, dark purple leather-wrapped handle |
| wb-w-barbed-tail | segmented grey-purple chitin tail curving upward to a barbed spear point, round attachment socket at the left (grey-purple chitin colours) |
| wb-w-locus-blades | pair of long curved scythe-like bone blades side by side on a short shared base, no hands inside |
| wb-w-sanctus-sniper-rifle | very long ornate sniper rifle, muzzle brake, large tri-lens scope with three yellow lenses, folding bipod, purple wrapped stock |
| wb-w-sanctus-bio-dagger | short curved alien bone-and-steel dagger, faintly glowing yellow-green venom channel, purple wrapped handle |

## QC notes (second batch)
- All 42 checked by eye on contact sheets: one object, side view, pointing right, no hands, no text. No duplicates.
- Hierotek `ht-w-gauss-blaster` and `ht-w-tesla-carbine` have the bayonet as a separate floating blade under the barrel; treat it as part of the weapon or drop it in the mesh pass. `ht-w-aeonstave` and the first `ht-w-staff-of-light` render were near-identical; the retry replaced it.
- `wb-w-autogun` reads as a light machine gun; `wb-w-master-crafted-autopistol` and `wb-w-power-maul` are slightly angled; `pf-e-fusion-grenade` is shown at a three-quarter angle.
- `pm-w-plague-knife` has a small skull-like pommel; check it reads as a plain knob. Pathfinder and Hierotek weapon sets share one receiver language each (consistent family, little variety).
- Not made: Pathfinder markerlight (a handheld device is not visible on any figure), gun butts, fists, bionic arm, claws, Ram, Shas'ui/others' melee (body parts), psychic Plague Marine attacks, Plasmacyte claws.

# Third batch: Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers (2026-10-18)

Same method as the second batch (Gemini Flash through Claude in Chrome, text prompts only, one chat per team, PNG exported from the in-page blob image at 1024x572). Files are named `<prefix><w|e>-<item>.png` and use the attachment slugs mapped in `src/client/teams/*.ts`. Every prompt used the full base wording, no "Same style" follow-ups. New props: 10 Legionaries (`lg-w-`), 17 Hand of the Archon (`ha-w-`), 13 Hunter Clade (`hc-w-`), 16 Hearthkyn Salvagers (`hk-w-`, `hk-e-`).

## Base prompt
"Generate an image: a single <weapon> prop from a super-deformed SD model kit (Bandai MGSD style): chunky, slightly oversized and simplified proportions, crisp hard-surface panel detail, <colours>, <one-sentence design>. Exact side view, horizontal, barrel or blade pointing RIGHT, grip at the bottom left, no hands, no figure, no base, no text, no logos or symbols, plain white background, even soft lighting, no shadows, exactly ONE object centred and not cropped."
Colours: Legionaries "matte black and brass colours with red accents and worn grey metal"; Hand of the Archon "dark teal-black metal with silver edging and pale green glowing accents"; Hunter Clade "rust-red and bronze metal with glowing orange-red accents and worn grey metal"; Hearthkyn "orange and grey painted metal with brass fittings and glowing amber accents". Mounted or worn items changed the orientation clause to "wrist cuff / bracer / forearm cuff at the left" or "handle at the left".
Reused from earlier batches instead of new props (Angels of Death hue-band repaint in the mesh pass): Legionaries `w-plasma-pistol`, `w-bolt-pistol`, `w-power-fist`, `w-power-sword`, `w-chainsword`, `w-hand-flamer`, `w-heavy-bolter`, `w-rokkit-launcha`, `w-bolt-rifle`. Not made (no attachment mapped, or a body part): fists, gun butts, Legionary psychic powers (`lg.w.fireblast`, `lg.w.life-siphon`), Hunter Clade power weapon and phosphor blast pistol (map to `w-power-sword` and `w-hand-flamer`).

## Legionaries (chat gemini.google.com/app/bda2ddcef995704e)
| Slug | Design sentence |
|---|---|
| lg-w-power-maul | one-handed mace with a thick black cylindrical striking head with brass bands and red glowing energy slits, short ribbed handle with a wrist strap |
| lg-w-daemon-blade | wicked jagged longsword with a wide serrated black blade with glowing red veins, brass guard shaped like twin horns, wrapped leather grip |
| lg-w-daemonic-claw | oversized gauntlet-like claw: ridged black armoured forearm cuff at the left and three long curved red-black talons pointing RIGHT, brass rivets, faint red glow in the cracks, no hand inside (orientation "talons pointing RIGHT, wrist cuff at the left") |
| lg-w-fell-dagger | short wicked ritual dagger with a curved wavy black blade with a faint red glow along the edge, brass cross-guard with two small spikes, wrapped handle with a brass pommel |
| lg-w-double-handed-chainaxe | big two-handed chain axe with a long black haft wrapped in brass bands, broad axe head with a ring of chainsaw teeth along the edge, small motor housing, red accent panels ("axe head pointing RIGHT, haft at the left") |
| lg-w-meltagun | short fat-barrelled heat weapon with a flared brass muzzle with a glowing orange-red core, heat vents along the barrel, boxy black receiver, small fuel canister under the barrel |
| lg-w-plasma-gun | chunky sci-fi rifle with a long finned barrel, glowing red-orange plasma coil in a transparent side window, big brass-ringed power cell above the receiver |
| lg-w-reaper-chaincannon | heavy rotary cannon with a cluster of six short brass-ringed barrels, big boxy black ammo drum under the body, thick ammo belt feed, carry handle on top, grip at the bottom left |
| lg-w-flensing-blades | two wicked curved skinning knives lying side by side, each a long thin hooked black blade with a faint red edge and a short brass-wrapped handle, joined by one small brass ring at the left ("both blades pointing RIGHT, handles at the left") |
| lg-w-malefic-blade | sinister psychic-forged short sword with a narrow black blade with a glowing red crack down the middle, crescent-shaped brass guard, small floating red glowing gem above the guard, wrapped grip |

## Hand of the Archon (chat gemini.google.com/app/6a77d74e4b001a94)
| Slug | Design sentence |
|---|---|
| ha-w-splinter-pistol | slim sleek pistol with a sharp angular body, short barrel, crystalline shard magazine on top like a row of green crystal spikes, small spiked grip guard |
| ha-w-blast-pistol | sleek angular pistol with a faceted black crystal chamber in the middle glowing pale green-white, wide flared muzzle like a blade tip, spiked grip |
| ha-w-splinter-rifle | long sleek rifle with a thin barrel, curved crystalline shard magazine of green crystals above the receiver, sharp blade-like muzzle fin, slim stock with a hooked end |
| ha-w-agoniser | cruel barbed energy lash: short ribbed handle with a spiked guard and a long thin barbed whip coiled in loops to the right, glowing pale green tip ("whip pointing RIGHT, handle at the left") |
| ha-w-power-weapon | elegant curved blade with a pale green glowing cutting edge, swept silver guard with two sharp points, ribbed black grip with a spiked pommel |
| ha-w-venom-blade | short wicked curved dagger with hollow channels glowing poisonous pale green, a few green droplets at the tip, small hooked guard, ribbed black grip |
| ha-w-array-of-blades | forearm-mounted bracer at the left with a fan of five thin sharp silver blades of different lengths spreading out to the right, no hand or arm inside |
| ha-w-razorflail | short ribbed black handle with a spiked guard at the left, chain leading to the right ending in a cluster of three sharp razor blades like a star of blades |
| ha-w-stinger-pistol | small compact pistol with a long needle-like barrel, round glass venom reservoir glowing green on top, spiked grip |
| ha-w-stim-needler | handheld injector gun shaped like a big syringe with a transparent barrel of glowing green liquid, long silver needle at the front, spiked trigger grip |
| ha-w-pain-sculptors | forearm-mounted surgical tool bracer at the left with two articulated arms ending in a scalpel blade, a small circular saw blade and a hooked probe, no hand or arm inside |
| ha-w-blaster | sleek rifle with a large faceted black crystal power core in a window along the body glowing pale green-white, broad flared blade-like muzzle, spiked foregrip, curved stock |
| ha-w-shredder | short wide crystal-shard scattergun with a wide funnel muzzle bristling with green crystal shards, chunky hopper of green crystals on top, spiked grip |
| ha-w-dark-lance | very long heavy lance cannon with a thin long barrel ending in a sharp spear-like tip, big faceted black crystal power core glowing green-white at the receiver, ribbed power coils, shoulder stock, carry handle |
| ha-w-splinter-cannon | heavy rapid-fire cannon with a cluster of four thin barrels, big curved drum of glowing green crystal shards above the body, spiked muzzle shroud, carry handle |
| ha-w-razorwing | one swept razor-edged blade wing with six long sharp feather-like silver blades fanning out to the right from a small mounting bracket with a thruster vent at the left (made because `ha.w.razorwing` maps an attachment; the Skysplinter body also has folded wings, so use one or the other) |
| ha-w-shardcarbine | compact carbine with a short barrel, boxy receiver with a curved clip of green crystal shards sticking out below, sharp fin on the muzzle, short stock with a hooked end |

## Hunter Clade (chat gemini.google.com/app/0de387d67c24cdc8)
| Slug | Design sentence |
|---|---|
| hc-w-galvanic-rifle | long rifle with a bronze barrel wrapped in ribbed copper coils, rust-red boxy receiver, small scope on top, curved wooden-brown stock, thin cables |
| hc-w-radium-carbine | short chunky carbine with a short bronze barrel, glowing orange-yellow radiation cell in a side window, hazard-striped rust-red casing, short stock |
| hc-w-radium-pistol | compact finely made pistol with a bronze barrel, small glowing orange-yellow radiation cell in the grip, engraved bronze plating on the slide, thin cables |
| hc-w-arc-pistol | small pistol with two forked bronze electrode prongs at the muzzle with crackling yellow-orange sparks between them, coil around the barrel, boxy rust-red body |
| hc-w-arc-rifle | long rifle with a coiled copper barrel ending in two forked electrode prongs with crackling sparks, round bronze capacitor drum above the receiver, thin cables, rust-red stock |
| hc-w-plasma-caliver | chunky plasma rifle with a finned bronze barrel, glowing orange plasma coil in a transparent window, round bronze fuel flask under the barrel, rust-red receiver, short stock |
| hc-w-transuranic-arquebus | huge heavy long-barrelled cannon-rifle with a very long thick bronze barrel with cooling rings, big boxy rust-red receiver with a glowing orange-yellow radiation cell, large scope, folded bipod, thick power cable, heavy stock |
| hc-w-arc-maul | one-handed mace with a short rust-red handle with a wrist strap and a bronze head of two forked electrode prongs around a glowing coil with crackling sparks |
| hc-w-flechette-blaster | compact scattergun pistol-carbine with a wide bronze muzzle made of a cluster of seven small barrel tubes, boxy rust-red body with a slim magazine of tiny needle darts, short stock |
| hc-w-stubcarbine | very short stubby automatic carbine with a short fat bronze barrel with a perforated shroud, big round drum magazine under the body, rust-red casing, skeletal stock |
| hc-w-taser-goad | short electric prod rod with a rust-red ribbed handle with a wrist strap at the left, bronze shaft, forked two-pronged bronze tip crackling with sparks |
| hc-w-chordclaw | forearm-mounted claw gauntlet with a rust-red armoured cuff at the left, three long thin hooked bronze talons pointing RIGHT, coil of thin bronze wire cord looped under the cuff, no hand or arm inside |
| hc-w-transonic-blade | long thin gently curved single-edged blade with a ribbed bronze resonator housing along the spine glowing faint orange, small rust-red hilt with a wrist guard (`hc.w.transonic-blades` uses it twice, one per hand) |

## Hearthkyn Salvagers (chat gemini.google.com/app/ca3a3726228279de)
Run after the image usage cap reset, in a fresh chat. The bolt revolver prompt returned no image the first time; the reworded retry ("big chunky revolver-style heavy pistol", "large brass round cylinder") worked.
| Slug | Design sentence |
|---|---|
| hk-w-autoch-bolt-pistol | stout heavy pistol with a thick short barrel, boxy grey slide with orange panels, big stubby magazine, wide brass trigger guard |
| hk-w-autoch-bolter | stout compact rifle with a short thick barrel with a brass muzzle brake, boxy grey receiver with orange panels, curved magazine, heavy skeletal stock, small scope |
| hk-w-bolt-revolver | big chunky revolver-style heavy pistol with a thick barrel, large brass round cylinder, orange frame with grey plates, heavy grey grip |
| hk-w-plasma-knife | short broad stout knife with a thick grey blade with a glowing amber plasma edge, brass guard, orange ribbed handle with a wrist loop |
| hk-w-etacarn-plasma-pistol | stout pistol with a glowing amber plasma coil in a window along the top, flared brass muzzle, heat fins, orange body with grey plates, wide grip |
| hk-w-ion-blaster | heavy rifle with a big ring-shaped ion emitter at the muzzle with a glowing amber core, bulky grey battery pack under the body, orange casing, short stock, carry handle |
| hk-w-ion-pistol | compact stout pistol with a small ring-shaped ion emitter at the muzzle with a glowing amber core, round grey battery in the grip, orange body |
| hk-e-c8-hx-charge | "one chunky shaped demolition charge: a squat orange block with grey strap handle on top, a brass detonator cap with a small glowing amber light, and grey clamp brackets", one single charge only |
| hk-w-etacarn-plasma-beamer | long heavy beam rifle with a big glowing amber lens at the muzzle with a brass focusing ring, fat grey battery cylinder under the body, cooling fins, orange casing, carry handle |
| hk-w-hylas-auto-rifle | sturdy automatic rifle with a stout barrel with a perforated heat shroud, orange body with grey plates, long straight magazine, scope on top, skeletal stock |
| hk-w-hylas-rotary-cannon | heavy rotary cannon with a cluster of five thick short barrels with brass rings, big grey ammo box under the body with a belt feed, orange casing, carry handle |
| hk-w-l7-missile-launcher | shoulder-fired launcher with a wide grey tube with a loaded orange-tipped missile visible at the muzzle, optical sight on top, orange body with brass bands, fore grip and rear grip |
| hk-w-magna-rail-rifle | very long rail rifle with two parallel grey rails along the barrel with a glowing amber channel between them, bulky orange battery pack behind the grip, long optical scope, skeletal stock |
| hk-w-concussion-gauntlet | one oversized armoured power-fist gauntlet with the fist pointing RIGHT, pneumatic brass piston along the forearm, wide orange armoured wrist cuff at the left, grey knuckle plate with amber glowing vents, no arm and no hand inside |
| hk-w-plasma-weapon | stout one-handed plasma axe-sword with a short thick orange handle with a brass pommel, broad grey single-edged blade with a glowing amber plasma edge and heat vents along the spine, brass guard |
| hk-w-concussion-knux | heavy set of knuckle-duster plates with four thick grey knuckle blocks each with a brass pneumatic piston stud and a glowing amber vent, orange back plate and grey strap, no hand inside ("knuckles pointing RIGHT, strap at the left") |

## QC notes (third batch)
- All 56 new props checked by eye on contact sheets: one object, side view, pointing right, no hands, no text, no logos or symbols. Gemini sometimes added a short sentence of text above the image; only the image was exported.
- The Legionary props share a receiver language per weapon type; `lg-w-meltagun` and `lg-w-plasma-gun` are alike in silhouette. The Hand of the Archon ranged weapons share one crystal-shard language and the Hunter Clade rifles share one coil-and-rust language (consistent family, little variety); `hk-w-ion-pistol` and `hk-w-etacarn-plasma-pistol` are similar.
- Hand of the Archon `ha-w-agoniser` is a long coiled whip (a wide silhouette, mostly empty space) and `ha-w-array-of-blades` and `ha-w-pain-sculptors` are bracers with no hand inside; the mesh pass should mount them on the forearm like `w-power-fist`. `ha-w-razorwing` duplicates the wings of the `ha-skysplinter-assassin` body; use one or the other.
- Hunter Clade `hc-w-transonic-blade` is a single blade used twice (`transonic-blades`). `hc-w-radium-carbine` has hazard stripes; they are a pattern, not a mark.
- Hearthkyn `hk-w-concussion-gauntlet` is slightly angled (three-quarter, wrist cuff towards the camera); `hk-e-c8-hx-charge` is a box seen from the side, not horizontal-pointing.
- Not made: Legionary fists, Legionary psychic powers (nothing in the hand), Hunter Clade gun butts (part of the rifle), Hearthkyn fists, and the shared props listed under the base prompt.
