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
