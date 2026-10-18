# Unit concept prompts (Gemini, MGSD bodies)

Made in Google Gemini (Flash) through Claude in Chrome, text prompts only, one chat per team. PNGs are 1024x572 exports (blob canvas, in-page JSON bundle). 23 images generated in total (12 Angels of Death, 11 Kommandos). Bodies are bare-handed; weapons and gear come later as attachments.

## Base prompt (first figure of each chat)
"Generate an image: a super-deformed SD Gundam style model kit figure (Bandai MGSD line) of <description>. Proportions like an SD Gundam: about 2 heads tall in total; the helmeted head is enormous, as tall as the torso and legs combined and as wide as the shoulder pads; small torso, tiny stubby legs with large chunky feet, short arms with big oversized fists. Crisp Master Grade hard-surface panel lines. BOTH HANDS EMPTY: right hand a loose fist as if gripping a weapon handle, left hand open, no weapons, no grenades in hand. Full body, neutral standing pose, front three-quarter view, standing on a plain round black base, plain white background, even soft lighting, no shadows, no text or lettering anywhere, exactly ONE single figure centred and not cropped."
For the Kommandos the head clause read "the head is a giant oversized ball, about 45 percent of the figure's total height and as wide as the shoulders".

## Angels of Death (chat gemini.google.com/app/96d81c7449ba6ef4)
Base description: "a Space Marine Intercessor Sergeant in deep blue power armour with gold trim and red helmet lenses, with a red helmet crest marking him as sergeant".
The first image came out with a head of only about 25% of height, so two "Edit this last image only" passes pushed the head up (response 2: "head HUGE ... about 45 percent"; response 3: "extreme chibi ... giant oversized ball ... about 50 percent"). Response 3 is the base for all variants. Each variant prompt: "Start from the giant-headed red-crested sergeant image (response 3), keep the exact style, proportions, framing, base and white background; change only: <below>."

| Response | Slug | Change |
|---|---|---|
| 1 | (rejected, head too small) | base prompt |
| 2 | (rejected, head still about 32%) | proportion edit |
| 3 | aod-intercessor-sergeant | proportion edit, base figure |
| 4 | aod-space-marine-captain | gold-trimmed armour, extra gold shoulders and chest plating, plain blue helmet with golden laurel, small white tabard |
| 5 | aod-assault-intercessor-sergeant | red crested helmet, holstered pistol right hip, sheathed chainsword left hip, no aerial |
| 6 | aod-assault-intercessor-grenadier | plain blue helmet, grenade bandolier and belt pouches, chainsword and pistol on hips |
| 7 | aod-assault-intercessor-warrior | plain blue helmet, chainsword left hip, pistol right hip |
| 8 | aod-intercessor-gunner | plain blue helmet, backpack with aerial, ammo pouches and ammo drum on hip |
| 9 | aod-intercessor-warrior | plain blue helmet, backpack, a few belt pouches |
| 10 | (superseded) | Heavy Intercessor in bulkier Gravis armour, thick plating, high collar, ammo pack (head too small, about 23%) |
| 11 | aod-eliminator-sniper | Phobos armour, hooded blue helmet with narrow red visor, grey-green camo cloak, belt pouches |
| 12 | aod-heavy-intercessor-gunner | edit of response 10: "the helmet is too small and buried in the collar. Make the helmeted head enormous, about 40 percent of the figure's total height and as wide as the shoulder pads ... lower-profile collar" |

## Kommandos (chat gemini.google.com/app/c94729e701e28ca0)
Base description: "an Ork Kommando Boy: a green-skinned ork with a wide tusked jaw wearing a dark fatigue jumpsuit, black and red scrap-metal armour plates, a dark cap and camouflage netting draped over the shoulders, sneaky commando look". Each variant prompt: "Start from image 1 (the Kommando Boy), keep the exact style, proportions, framing, base and white background; change only: <below>."

| Response | Slug | Change |
|---|---|---|
| 1 | kom-boy | base prompt |
| 2 | kom-boss-nob | bigger and broader, black eye patch, bigger tusks, heavier armour, tooth necklace, skull trophy on belt |
| 3 | kom-breacha-boy | one huge armoured left arm of riveted scrap plates, thick shoulder, steel helmet |
| 4 | kom-burna-boy | two red and black fuel tanks on back with hose to belt, goggles pushed up on cap, soot-blackened |
| 5 | kom-comms-boy | boxy vox pack with tall aerial, headset with boom mic, cable coil on belt |
| 6 | kom-dakka-boy | crossed brass ammo belts over chest and shoulders, ammo box on back |
| 7 | kom-rokkit-boy | chest bandolier and back rack of red-tipped rokkits, not held |
| 8 | kom-slasha-boy | belt and bandolier of sheathed knives, black bandana instead of cap |
| 9 | kom-snipa-boy | brass-rimmed goggles, ghillie hood and cloak of torn netting and grass |
| 10 | kom-grot | small skinny goblin, big pointed ears and nose, patched fatigues, floppy cap, rope coil and grappling hook on belt |
| 11 | kom-bomb-squig | "replace the figure with a Kommando Bomb Squig: a round, fat, bulbous red-orange squig beast ... NO hands and no arms, on all fours; sticks of dynamite and small red bombs strapped tight to its body ... on the same round black base" |

## QC notes
All 20 slugs saved and checked by eye: one figure, round black base fully visible, no text, empty hands (Assault Intercessors and the Grenadier have a chainsword hanging at the hip beside the open left hand, a mesh-cleanup item). Head-to-height: Intercessors and Captain about 40%; Heavy Intercessor about 33% (Gravis bulk; second edit); Kommando bodies about 40% including the cap. Kommando Grot is not much smaller than the Boy in the image; scale it down by manifest height. No failures.

# Second batch: Pathfinders, Hierotek Circle, Plague Marines, Wyrmblade (2026-10-18)

Same method as day one (Gemini Flash through Claude in Chrome, text prompts only, one chat per team, PNG exported from the in-page blob image at 1024x572). Files are named `<prefix><operative-slug>.png`. 41 bodies: 16 Pathfinders (`pf-`), 9 Hierotek Circle (`ht-`), 7 Plague Marines (`pm-`), 9 Wyrmblade (`wb-`). The head clause is the Kommando one: "the head is a giant oversized ball, about 45 percent of the figure's total height and as wide as the shoulders".

## Base prompt (first figure of each chat)
"Generate an image: a super-deformed SD Gundam style model kit figure (Bandai MGSD line) of <description>. Proportions like an SD Gundam: about 2 heads tall in total; the head is a giant oversized ball, about 45 percent of the figure's total height and as wide as the shoulders; small torso, tiny stubby legs with large chunky feet, short arms with big oversized fists. Crisp Master Grade hard-surface panel lines. BOTH HANDS EMPTY: right hand a loose fist as if gripping a weapon handle, left hand open, no weapons. Full body, neutral standing pose, front three-quarter view, standing on a plain round black base, plain white background, even soft lighting, no shadows, no text or lettering anywhere, no logos or symbols, exactly ONE single figure centred and not cropped."
Variant prompt: "Start from the first image (the <base figure>), keep the exact style, proportions, framing, base and white background, empty hands, no emblems or symbols, front three-quarter view; change only: <below>."
Colour language: Pathfinders ochre and grey; Hierotek bronze, black and gold with green glow; Plague Marines sickly pale green and rust-brown; Wyrmblade dark purple with yellow mining gear and grey-purple skin.

## Pathfinders (chat gemini.google.com/app/a0018cd5b281c303)
Base description: "a Pathfinder scout shas'la: a lithe grey-skinned alien soldier in sleek ochre and grey light armour with a rounded ochre helmet with a breather mask and two small tubes, small hoofed digitigrade feet, a plain belt with a couple of pouches".

| Slug | Change |
|---|---|
| pf-shasla | base prompt |
| pf-shasui | tall fin-like crest on the helmet, extra large left shoulder plate, darker ochre trim, short grey half-cape, small command antenna |
| pf-blooded | battle-worn darker armour, left arm a bare grey bionic mechanical arm with exposed pistons and an empty open metal hand, grey helmet with a second visor lens, cloth strip hanging from the helmet |
| pf-drone-controller | chunky control gauntlet with a small glowing blue screen on the left forearm, datapad on the belt, thin antenna and monocle visor |
| pf-transpectral-interference | backpack with a round signal-scrambler dish and two antenna spikes, visor with three extra lenses, emitter box on the left forearm |
| pf-assault-grenadier | grenade bandolier across the chest, extra grenade pouches, reinforced shoulder pads and helmet with brow guard |
| pf-comms-specialist | boxy comms backpack with a tall aerial and coiled cable, headset with boom microphone, handset on the chest |
| pf-medical-technician | bulky medical backpack with two canisters and a hose to the belt, injector pen and pouch, pale grey armour panels |
| pf-weapons-expert | noticeably bulkier and broader, heavy ammunition power pack on the back with a thick cable to the belt, reinforced helmet |
| pf-marksman | grey hooded cloth cape, helmet with a long single-lens scope visor, dart canister on the right hip, softer grey and ochre |

Drones (same chat): "Start from the first image (the Pathfinder Shas'la), keep the exact style, framing, camera angle and white background; replace the figure with <drone>: ... NO hands and no arms, floating slightly above the same plain round black base on a thin clear stand rod, no emblems or symbols." Later drones used "Same style, camera angle, base and white background as the drone images: now ...".

| Slug | Drone description |
|---|---|
| pf-mb3-recon-drone | chubby hovering ochre and grey drone, wide flat oval body, big round camera lens eye, two side thruster pods, two rear fins, empty weapon brackets under the body, no weapons fitted |
| pf-mv1-gun-drone | small round pod drone, one big lens eye, an empty gun bracket on each side, thruster pod underneath, no weapons fitted |
| pf-mv4-shield-drone | small pod drone with a wide flat circular emitter ring at the front with a glowing pale blue core, lens eye above |
| pf-mv7-marker-drone | small pod drone with a long slim targeting-laser barrel topped with a red lens, tall thin antenna, side lens eye |
| pf-mv31-pulse-accelerator-drone | small pod drone with a large glowing pale blue ring-shaped accelerator coil like a halo, lens eye, rear fin |
| pf-mv33-grav-inhibitor-drone | small pod drone with a wide downward-facing circular emitter dish underneath with a faint purple glow, two stabiliser fins, lens eye |

## Hierotek Circle (chat gemini.google.com/app/694d63415cab7b7a)
Base description: "a Hierotek Circle Immortal Guardian: a skeletal metal automaton warrior with a domed skull-like metal head with two glowing green eye slits, dark bronze and black ribbed body with gold trim, thin glowing green energy lines along the plating, a tubular spine visible at the back".

| Slug | Change |
|---|---|
| ht-immortal-guardian | base prompt |
| ht-immortal-despotek | more gold plating and trim, tall gold crest front to back over the skull head, short dark green cape, brighter green glow |
| ht-deathmark | slimmer darker gunmetal and bronze body, single large glowing green eye under a narrow hood-like brow, small hexagonal sensor plates on the shoulders |
| ht-apprentek | ragged dark green hooded cloak with the skull face showing, backpack of cables with a small glowing conduit coil, bronze tool pouches, slightly smaller armour |
| ht-chronomancer | tall ornate gold crest, long gold and green robe-like skirt plating, small floating glowing green hourglass orb behind the left shoulder, backpack of cables and gears |
| ht-psychomancer | hooded cloak of tattered black and dark green cloth, tall narrow skull head with three small glowing green eyes in a row, thin bronze plating on chest and shoulders only |
| ht-technomancer | big engineering backpack with small mechanical arms, gears and cables, large single mechanical lens eye, extra gold plating, tool clamps on the belt |
| ht-plasmacyte-accelerator | "replace the figure with a Plasmacyte Accelerator: a small scuttling robotic scarab-spider construct on four thin legs, round bronze and black body, single glowing green eye, a coil with green sparks on its back, two small front claws, NO hands and no arms, no weapons, low to the ground on the same base" |
| ht-plasmacyte-reanimator | "Same style, camera angle, base and white background as the Plasmacyte image: now a Plasmacyte Reanimator": bronze and gold body, thin emitter nozzle at the front, small glowing green canister on the back |

The Psychomancer's first attempt returned an empty response; the retry dropped the floating-wisps clause.

## Plague Marines (chat gemini.google.com/app/9b3cd6daf9e295ed)
Base description: "a Plague Marine Warrior: a bloated heavily armoured chaos soldier in sickly pale green and rust-brown power armour, a rounded corroded helmet with a dented grille and two dull glowing lenses, peeling paint and rust streaks, dripping green slime stains, exposed pipes and tubes, a belt of rusty canisters and a bare cracked-bone-coloured trim".
The first image had a head of about 25 percent of height and an oversized left fist. One edit pass fixed it: "Edit this last image only: the helmeted head is too small. Make the helmeted head enormous, a giant oversized ball about 45 percent of the figure's total height and as wide as the shoulder pads, with a lower-profile collar so the head is not buried; make the body smaller and the legs stubbier to compensate; both fists a normal small size, both hands empty; keep the colours, rust, slime, horns, pipes, black round base, white background and framing the same." The edited image (head about 35 percent, heavy bulk) is `pm-plague-marine-warrior` and the base for every variant ("Start from the second image (the giant-headed Plague Marine Warrior) ...").

| Slug | Change |
|---|---|
| pm-plague-marine-warrior | base prompt plus the proportion edit above |
| pm-plague-marine-champion | single long curved horn on the left of the helmet, bigger spiked left shoulder pad, tattered rust-red short cape, extra gold-brown trim, small censer bell on the belt |
| pm-plague-marine-bombardier | backpack stacked with rusty shell canisters, grenade bandolier across the chest, grenade satchel on the hip, plain dented helmet |
| pm-plague-marine-fighter | heavily scarred armour, spiked shoulder pad on each shoulder, loop of rusty chain over one shoulder, holstered pistol on the right hip, no horns |
| pm-plague-marine-heavy-gunner | bulkier and broader, large rusty green fuel tank on the back with a thick hose to the belt, oversized shoulders, holstered pistol |
| pm-plague-marine-icon-bearer | tall thin pole on the back with a tattered plain rust-green banner (no markings) and a small rusty bell, holstered pistol right hip, sheathed knife left hip |
| pm-malignant-plaguecaster | ragged hooded robe of green and rust cloth over lighter armour, cracked horned helmet with a vented jaw, belt of glass vials, small glowing green spores around the shoulders |

## Wyrmblade (chat gemini.google.com/app/780b6fd6b82bb8cc)
Base description: "a Wyrmblade Neophyte Warrior: a hybrid cultist mine worker with slightly grey-purple skin and a ridged brow, a yellow mining hard hat with a headlamp, a dark purple padded work jacket and trousers with yellow reflective straps and stripes, a dust respirator mask pulled down around the neck, sturdy work boots, a few tool pouches".

| Slug | Change |
|---|---|
| wb-neophyte-warrior | base prompt |
| wb-neophyte-leader | long dark purple coat with a high collar, yellow hard hat with a wide band and radio headset, radio handset on the chest, holstered pistol on the right hip |
| wb-neophyte-gunner | safety goggles on the hard hat, respirator over the mouth, big backpack with a round fuel tank and two coiled hoses, ammunition pouches and a bandolier of small canisters |
| wb-neophyte-heavy-gunner | bulkier and broader, thick padded purple work armour with yellow shoulder guards, heavy harness with a battery power pack and thick cable, reinforced hard hat with two headlamps |
| wb-neophyte-icon-bearer | tall thin pole on the back with a tattered plain dark purple banner (no markings) and a small yellow lantern, plain yellow hard hat |
| wb-kelermorph | long dark purple duster poncho with yellow edging, wide-brimmed dark hat with a yellow band, scarf over the lower face, two empty holsters on the hips |
| wb-locus | "bare grey-purple skin with ridged dark purple carapace plating on the shoulders and chest, a bare ridged head with no hat and large yellow eyes, FOUR arms (two upper and two lower) ending in four bare empty clawed hands, a few yellow harness straps, no tail, no weapons" |
| wb-sanctus-sniper | long dark purple hooded cloak with a pointed hood, tri-lens goggles with three small glowing yellow lenses, scarf over the mouth, yellow cloak trim, small ammo pouch belt |
| wb-sanctus-talon | slim close-fitting dark purple wrap suit with a hood and a mask covering everything but two glowing yellow eyes, a single yellow strapped shoulder guard, bare clawed hands |

## QC notes (second batch)
- Not made as bodies: the Wyrmblade familiar (an ability of the Sanctus operatives, not a datacard). Hierotek Circle has no constructs beyond the two Plasmacytes.
- Head-to-height: Pathfinders and Wyrmblade about 40 percent; Hierotek about 38 to 40 percent (the Deathmark's hooded head reads smaller); Plague Marines about 35 percent (bulk, one edit pass); drones have no head.
- Gemini sometimes returns an empty response; resending with slightly different wording worked each time.
- Pathfinder bodies share a small round sensor plate on the chest and the Hierotek Guardian line has a small chest ornament; these are panel details, not faction marks, but drop them in the mesh pass if they read as symbols.
- Plague Marine Fighter, Heavy Gunner and Icon Bearer have a holstered pistol at the hip that sits close to the left hand (same mesh-cleanup item as the day-one Assault Intercessors).
- Pathfinder Assault Grenadier's grenade bandolier is faint; the Locus's four clawed hands read clearly only from the front.
