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

# Third batch: Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers (2026-10-18)

Same method as the second batch (Gemini Flash through Claude in Chrome, text prompts only, one chat per team, PNG exported from the in-page blob image at 1024x572). Files are named `<prefix><operative-slug>.png` and use the exact `standIns` slugs from `src/client/teams/*.ts`. 44 bodies: 10 Legionaries (`lg-`), 9 Hand of the Archon (`ha-`), 14 Hunter Clade (`hc-`), 11 Hearthkyn Salvagers (`hk-`). Base prompt and the variant wording are the second-batch ones; the head clause is "the head is a giant oversized ball, about 45 percent of the figure's total height and as wide as the shoulders". Variant prompt: "Start from the <n>th image (the <base figure>), keep the exact style, proportions, framing, base and white background, empty hands, no emblems or symbols, front three-quarter view; change only: <below>."
Colour language: Legionaries matte black and brass with red accents (bodies are mark-neutral, no Mark colour trim); Hand of the Archon dark teal-black armour with silver edging, pale white skin and pale green glow; Hunter Clade rust-red robes and plates with bronze augmetics and orange-red lenses; Hearthkyn stout orange-and-grey void armour with braided orange-brown beards.

## Legionaries (chat gemini.google.com/app/2f71561d7d4c51b9)
Base description: "a Legionary Warrior: a battle-scarred traitor space marine in matte black power armour with brass trim and brass rivets, small red accent panels, a rounded black helmet with a brass grille and two glowing red lenses, spiked shoulder pads, exposed cables at the joints, chipped paint, a short ragged red cloth strip hanging from the belt".
The first image had a head of about 30 percent of height; one edit pass fixed it (the Plague Marine wording): "Edit this last image only: the helmeted head is too small. Make the helmeted head enormous, a giant oversized ball about 45 percent of the figure's total height and as wide as the shoulder pads, with a lower-profile collar so the head is not buried; make the body smaller and the legs stubbier to compensate; both fists a normal small size, both hands empty; keep the colours, spikes, black round base, white background and framing the same." The edited image (head about 37 percent) is `lg-warrior` and the base for every variant ("Start from the second image (the giant-headed Legionary Warrior) ...").

| Slug | Change |
|---|---|
| lg-warrior | base prompt plus the proportion edit above |
| lg-aspiring-champion | ornate extra brass plating on the chest and shoulders, tall brass crest front to back over the helmet, short tattered red cape, holstered pistol on the right hip, small brass chain on the belt |
| lg-chosen | bigger and broader heavier armour with extra brass plating, one long curved black horn on the left of the helmet, tattered red cloak over the right shoulder, faint glowing red cracks in the chest armour, sheathed long blade at the left hip |
| lg-anointed | dark red veins glowing through cracks across the armour and helmet, small stubby horns on the helmet, one oversized lumpy left shoulder plate, mismatched armour plates, tattered red strips from the belt |
| lg-balefire-acolyte | ragged hooded black robe over the armour with a brass-trimmed plain helmet, belt of small glass vials and brass charms, small glowing red embers near the shoulders, small sheathed dagger on the belt |
| lg-butcher | noticeably bulkier and broader, heavy brass-studded armour with a spiked shoulder pad on each shoulder, blood-red stained leather apron, thick chain looped over one shoulder, plain brutish helmet with a wide brass grille |
| lg-gunner | big backpack with a rusty brass fuel tank and a thick hose to the belt, belt of small canisters and ammo pouches, holstered pistol on the right hip, goggle lens flipped up on the helmet |
| lg-heavy-gunner | much bulkier and broader, oversized shoulders, heavy brass-rimmed armour, large ammunition power pack on the back with a thick cable to the belt, holstered pistol on the right hip, reinforced helmet with a brow guard |
| lg-icon-bearer | short thin pole on the back rising only a little above the helmet with a small tattered plain red banner (no markings) and a small brass bell, holstered pistol right hip, sheathed knife left hip. The first attempt had a tall pole and the banner cropped at the top edge; the retry added "The whole banner must be fully inside the picture with white space above it, nothing cropped." |
| lg-shrivetalon | slim leaner build, black leather-like apron over the armour, plain brass faceplate over the helmet grille, brass hooks and short chains hanging from belt and shoulders, belt of small sheathed tools and pliers, ragged red sash |

## Hand of the Archon (chat gemini.google.com/app/1be27420e59ed0c3)
Base description: "a Hand of the Archon Agent: a lithe cruel dark-city raider in sleek dark teal-black spiked armour of overlapping sharp plates with thin silver edging, a tall-collared helmet with a sharp angular crest and narrow slanting pale green lenses, pale white skin visible at the jaw and neck, long pointed shoulder plates with blade-like spikes, thin glowing pale green accent lines, a belt with small hooks".
The first image had a head of about 35 percent and no visible skin; one edit pass: "Edit this last image only: the helmeted head is too small. Make the helmeted head enormous, ... (as for the Legionaries) ... show a clearly visible patch of pale white skin at the open jaw below the helmet; make the whole figure larger in the frame; keep the dark teal-black armour, silver edging, green glow, black round base, white background and framing the same." The edited image (head about 38 percent) is `ha-agent` and the base for every variant ("Start from the second image (the giant-headed Agent) ...").

| Slug | Change |
|---|---|
| ha-agent | base prompt plus the proportion edit above |
| ha-archsybarite | taller sharper blade-like helmet crest, long flowing dark teal cape with silver edging, extra silver filigree trim on chest and shoulders, bladed spike on each shoulder, small hooked trophy chain on the belt, holstered pistol right hip |
| ha-crimson-duellist | mostly bare pale white skin on arms and legs, only small dark teal-black armour plates on chest, shoulders and shins, half-mask with a spiked crimson mohawk crest, crimson ribbons trailing from the belt, thin bladed spikes on forearms and knees |
| ha-disciple-of-yaelindra | graceful acrobat look, veil-like half mask over the lower face, long thin dark teal scarf-cape trailing behind, curved blade-shaped bracers on both forearms, light armour with a bare pale midriff, two small curved blades sheathed at the lower back, swept-back head crest |
| ha-elixicant | hooded dark teal-black long coat over light armour, big backpack with glass vials, coiled tubes and a small bubbling green flask, bandolier of small syringes, pale skin at the jaw, open pale face mask with narrow green lenses |
| ha-flayer | noticeably bulkier and hunched, heavy dark teal-black leather butcher's apron over the armour, belt of hooks, skinning tools and short chains, stitched pale half-mask with narrow green lenses, thick bladed shoulder spikes, small bone-white saw-toothed bracket on the back |
| ha-gunner | boxy power-cell backpack with a thick cable to the belt and a glowing pale green cell, extra ammunition pouches, reinforced angular shoulder plates, helmet with a single narrow targeting lens beside the eye slit |
| ha-heavy-gunner | much bulkier and broader with oversized angular shoulders, large cylindrical power drum on the back with a thick cable to the belt, heavy armoured thigh plates, reinforced helmet with a brow guard and a wide grille |
| ha-skysplinter-assassin | pair of large folded razor-edged blade wings on the back like a swept bat wing with feather-like blades, slimmer light armour, swept-back head crest, small thruster vents on the calves |

## Hunter Clade (chat gemini.google.com/app/7800599111ce28d7)
Base description: "a Skitarii Ranger Warrior: a cyborg scout soldier in a long hooded rust-red robe over light armour, bronze augmetic plating on the shoulders and chest, a bronze domed helmet under the hood with a breather mask and a single wide glowing orange-red lens strip, exposed bronze pistons and thin cables at the joints, rust-red cloth tabard, worn paint, no gear or cog symbols". No edit pass was needed (head and hood about 38 percent). Variants: "Start from the first image (the Ranger Warrior) ..." for Rangers and Sicarians, "Start from the sixth image (the helmeted Vanguard Warrior) ..." for Vanguards.

| Slug | Change |
|---|---|
| hc-skitarii-ranger-warrior | base prompt |
| hc-skitarii-ranger-alpha | taller bronze helmet crest, extra bronze plating on chest and shoulders, short tattered rust-red cape over the hooded robe, small antenna on the shoulder, holstered pistol right hip |
| hc-skitarii-ranger-diktat | ornate bronze headpiece with a tall fin over the hood, thin bronze antenna array on one shoulder, bronze data-slate pouch and cable bundle on the belt, rust-red sash across the chest, second small lens beside the main lens strip |
| hc-skitarii-ranger-surveyor | boxy bronze scanner backpack with a round sensor dish and two thin aerials, visor with three extra small lenses on the hood, small bronze scanner box on the left forearm, coiled cables on the belt |
| hc-skitarii-ranger-gunner | wide braced firing stance with legs spread far apart and knees bent, standing on a wide plain black oval base instead of the round base, heavy bronze power-cell backpack with a thick cable to the belt, bulkier reinforced shoulder plates, ammunition pouches (the arquebus Gunner stance) |
| hc-skitarii-vanguard-warrior | "a different soldier type with no hood and no robe, sleek rust-red plated armour, a short rust-red cloth tabard, a giant bronze domed helmet with two big round glowing orange lenses, bronze metal arms with exposed pistons and cables". The first wording ("no hooded robe ... full-face helmet ... augmetic arms") was refused with "interests of third-party content providers"; the reworded prompt worked. This image is the Vanguard base |
| hc-skitarii-vanguard-alpha | taller bronze helmet crest, extra bronze plating, short tattered rust-red cape, small shoulder antenna, holstered pistol right hip |
| hc-skitarii-vanguard-diktat | ornate bronze helmet with a tall fin and a third small lens, thin bronze antenna array on one shoulder, data-slate pouch and cable bundle on the belt, rust-red sash |
| hc-skitarii-vanguard-surveyor | boxy bronze scanner backpack with a round sensor dish and two aerials, three extra small lenses on the helmet, small scanner box on the left forearm, coiled cables |
| hc-skitarii-vanguard-gunner | same wide braced stance and oval base as the Ranger Gunner, heavy power-cell backpack with cable, bulkier shoulder plates, ammunition pouches |
| hc-sicarian-infiltrator-warrior | "a sleek lithe automaton soldier with no hood and no robe, a smooth bronze domed head with one narrow glowing orange-red visor slit and no mouth grille, tight rust-red plated armour with thin bronze mechanical limbs, backward-jointed legs, a thin armoured rust-red skirt" |
| hc-sicarian-ruststalker-warrior | "a hunched predatory stance, a torn rust-red hooded cloak, a bronze hood-shaped head with one large round glowing orange-red lens, backward-jointed bronze legs, bare bronze clawed hands with long fingers, rust-red plated shoulders, thin cables" |
| hc-sicarian-infiltrator-princeps | tall bronze crest front to back over the smooth head, extra bronze plating, short tattered rust-red cape, thin shoulder antenna, small bronze trophy chain. The first attempt ("Start from the eleventh image") came back as a hunched hooded Ruststalker; the retry described the figure instead ("the slim upright automaton soldier with the smooth bronze domed head ... not the hunched hooded one") |
| hc-sicarian-ruststalker-princeps | "Start from the twelfth image (the hunched hooded Sicarian Ruststalker Warrior)": extra bronze plating on shoulders and chest, taller hood with a bronze spike on top, second smaller lens beside the large lens, longer torn rust-red cloak, bronze trophy chain |

## Hearthkyn Salvagers (chat gemini.google.com/app/4d95d218a279269b)
Base description: "a Hearthkyn Warrior: a stout short void-miner soldier in heavy chunky orange-and-grey void armour, a big round grey helmet with a wide glowing amber visor and the open lower face showing a thick braided orange-brown beard, huge rounded shoulder plates, grey pressure hoses and rivets, a belt with pouches, scuffed paint". The first image and a zoom-out edit both had the round base cropped at the bottom edge, so the base prompt was resent as a new image with "the whole figure and the entire base fully inside the picture with a wide margin of white space above, below, left and right (wide-angle framing, figure occupying only the middle 70 percent of the picture height)". That third image (head about 40 percent) is `hk-warrior` and the base for every variant ("Start from the third image (the Hearthkyn Warrior) ... whole base fully visible; change only: ..."). Gemini hit its image usage cap after the Gunner; the run waited for the reset (about four and a half hours, "limit resets at 1:34 PM") and finished in the same chat.

| Slug | Change |
|---|---|
| hk-warrior | base prompt (third image, see above) |
| hk-theyn | taller ornate helmet with a small crest and a grey visor, larger braided beard with two small brass rings, extra grey trim on the orange armour, short grey cloak, holstered pistol on the right hip |
| hk-dozr | noticeably bulkier and wider with heavy extra armour plating, huge reinforced shoulder plates, thick armoured forearms, heavy helmet with a wide brow guard, short stubby beard, scuffed grey knee guards |
| hk-field-medic | medical backpack with two cylinders and a hose to the belt, injector pen and a pouch on the belt, pale grey armour panels in place of some orange ones, visor with an extra small lens, trimmed beard |
| hk-grenadier | grenade bandolier across the chest with round grenades, extra grenade pouches on the belt, satchel charge on the back, reinforced shoulder pads, plain helmet with a brow guard |
| hk-gunner | much bulkier and broader, big ammunition and power pack on the back with a thick cable to the belt, oversized shoulder plates, reinforced helmet with two small lamps, thick braided beard |
| hk-jump-pack-warrior | chunky jump pack on the back with two grey thruster nozzles and an orange fuel tank, helmet with a sealed grey visor, short stabiliser fins on the shoulders. The first render showed the figure from behind; the retry added "FRONT three-quarter view showing the face, visor and braided beard (not the back)" and "seen behind the shoulders" |
| hk-kinlynk | boxy comms backpack with a tall aerial and a coiled cable, headset with a boom microphone under the helmet, small handset on the chest, short neat beard |
| hk-kognitaar | heavy helmet with a large sensor lens and a small scanning arm folded over one side, backpack with a round sensor dish, datapad in a pouch on the belt, thick braided beard with a brass ring |
| hk-lokatr | tall thin sensor mast on the back with a small rangefinder on top, binocular visor with two big lenses on the helmet, bundle of marker stakes and a coil of rope on the belt, short beard |
| hk-lugger | huge cargo harness on the back with two stacked orange crates held by grey straps, thick carry straps over the shoulders, extra thick armoured forearms, helmet with a lamp, long braided beard |

## QC notes (third batch)
- All 44 slugs saved and checked by eye on contact sheets: one figure, empty hands, nothing cropped (the Legionary Icon Bearer and the Hearthkyn Warrior were regenerated for cropping). Hunter Clade and Hearthkyn gunners were prompted as wide-stance figures; only the Hunter Clade Gunners got a visible oval base and a modest widening of the stance, so the in-game oval base should come from the manifest, not the picture.
- Head-to-height: Legionaries about 37 to 40 percent, Hand of the Archon about 35 to 40 percent (slim figure, tall crests and spiky shoulders make the head read smaller), Hunter Clade about 35 to 40 percent (Ruststalkers hunched, about 30 percent), Hearthkyn about 35 to 40 percent.
- Colour drift: `ha-elixicant` reads pale grey (coat over light armour) rather than dark teal-black; Hunter Clade Vanguard and Sicarian Infiltrator figures are mostly bronze with rust-red cloth and plates; `ha-crimson-duellist` has a crimson crest and ribbons as the "Crimson" cue.
- Panel details that could read as symbols (drop them in the mesh pass if they do): the round plate on the Vanguard chests, the small chest plate on the Hearthkyn armours, the brass chain and studs on the Legionaries. No chaos stars, gear or cog emblems, skulls or text were found.
- Holstered pistols sit close to the right hand on `lg-aspiring-champion`, `lg-gunner`, `lg-icon-bearer` and `hk-theyn` (same mesh-cleanup item as the earlier batches).
- Not made as bodies: nothing; every `standIns` slug of the four teams has an image.
