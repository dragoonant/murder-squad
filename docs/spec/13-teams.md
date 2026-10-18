# 13 - Kill teams: Angels of Death and Kommandos (v1); Pathfinders, Hierotek Circle, Plague Marines and Wyrmblade (M9)

Rule IDs: `T-AOD.<n>` and `T-KOM.<n>`. Tables are written so each row becomes one JSON record. Sources: the two team PDF extracts (August 2026 errata state for Angels of Death, June 2026 commentary for Kommandos) cross-checked against the Wahapedia Kommandos copy and a visual check of the Angels of Death datacard pages. All rule text is restated in our own words; names of teams, operatives, weapons and ploys are used as printed. Core terms are defined in `10-rules-core.md` (cited R-x.y). `UNCLEAR:` lines flag extraction problems; each states how it was resolved.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

## 1. Angels of Death

### 1.1 Team selection

- T-AOD.1 Roster is exactly 6 operatives: 1 from the leader list, plus 5 from the main list.
- T-AOD.2 Leader list (pick one): ASSAULT INTERCESSOR SERGEANT, INTERCESSOR SERGEANT, SPACE MARINE CAPTAIN.
  - Assault Intercessor Sergeant loadout: either (hand flamer or heavy bolt pistol) plus (chainsword, power fist, power weapon or thunder hammer); or (plasma pistol standard/supercharge plus chainsword).
  - Intercessor Sergeant loadout: one of auto bolt rifle, bolt rifle or stalker bolt rifle (both stalker profiles), plus one of chainsword, fists, power fist, power weapon or thunder hammer.
  - Space Marine Captain: has every weapon on its card (plasma pistol both profiles, power fist), no choices.
- T-AOD.3 Main list (five picks): ASSAULT INTERCESSOR GRENADIER, ASSAULT INTERCESSOR WARRIOR, ELIMINATOR SNIPER, HEAVY INTERCESSOR GUNNER, INTERCESSOR GUNNER (with auxiliary grenade launcher plus one of auto bolt rifle, bolt rifle, stalker bolt rifle; fists), INTERCESSOR WARRIOR (one of those three rifles; fists). Except WARRIOR operatives, the team may include each operative on the list once.
- T-AOD.4 The earlier rule that an Eliminator Sniper and Heavy Intercessor Gunner could not both be taken was deleted; both may appear together.
- RULING: the brief mentioned mutually exclusive Assault Intercessor and Intercessor squads. The August 2026 source has no such restriction: assault and standard Intercessor operatives may mix freely subject to T-AOD.1 to T-AOD.3. Status Corrected.
- T-AOD.5 Archetypes: SECURITY, SEEK & DESTROY (tac ops are out of scope for v1).
- T-AOD.6 "Bolt weapon": a ranged weapon whose name contains "bolt" (stalker bolt rifle, heavy bolt pistol, heavy bolter, bolt sniper rifle, bolt pistol, auto bolt rifle, bolt rifle). Plasma pistols, hand flamer and the grenade launcher are not bolt weapons.
- T-AOD.7 Chapter Tactics are chosen when selecting the team (primary and secondary). Same tactic twice gives no extra effect. RULING: the picker requires two different tactics; the sources do not forbid a repeat but it has no value. Status Unsourced.

### 1.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| SPACE MARINE CAPTAIN | 3 | 6" | 3+ | 15 | 40 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, LEADER, SPACE MARINE CAPTAIN |
| ASSAULT INTERCESSOR SERGEANT | 3 | 6" | 3+ | 15 | 32 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, LEADER, ASSAULT INTERCESSOR, SERGEANT |
| INTERCESSOR SERGEANT | 3 | 6" | 3+ | 15 | 32 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, LEADER, INTERCESSOR, SERGEANT |
| ASSAULT INTERCESSOR GRENADIER | 3 | 6" | 3+ | 14 | 32 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, ASSAULT INTERCESSOR, GRENADIER |
| ASSAULT INTERCESSOR WARRIOR | 3 | 6" | 3+ | 14 | 32 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, ASSAULT INTERCESSOR, WARRIOR |
| INTERCESSOR GUNNER | 3 | 6" | 3+ | 14 | 32 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, INTERCESSOR, GUNNER |
| INTERCESSOR WARRIOR | 3 | 6" | 3+ | 14 | 32 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, INTERCESSOR, WARRIOR |
| HEAVY INTERCESSOR GUNNER | 3 | 5" | 3+ | 18 | 40 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, HEAVY INTERCESSOR, GUNNER |
| ELIMINATOR SNIPER | 3 | 7" | 3+ | 12 | 40 | ANGEL OF DEATH, IMPERIUM, ADEPTUS ASTARTES, ELIMINATOR, SNIPER |

UNCLEAR: the extract prints "APEPTUS" in the Intercessor Sergeant keywords; resolved as a typo for ADEPTUS from the card image and every other card. UNCLEAR: Eliminator Sniper base size appears detached from its stat block in the extract; resolved as 40mm from the front-side footer on the card image.

### 1.3 Weapon profiles (the operative's loadout picks from these)

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Hand flamer | R | 4 | 2+ | 3/3 | Range 6", Saturate, Torrent 1" | AI Sergeant (option) |
| Heavy bolt pistol | R | 4 | 3+ | 3/4 | Range 8", Piercing Crits 1 | AI Sergeant (option), AI Grenadier, AI Warrior |
| Plasma pistol (standard) | R | 4 | 3+ | 3/5 | Range 8", Piercing 1 | AI Sergeant (option), Captain |
| Plasma pistol (supercharge) | R | 4 | 3+ | 4/5 | Range 8", Hot, Lethal 5+, Piercing 1 | AI Sergeant (option), Captain |
| Auto bolt rifle | R | 4 | 3+ | 3/4 | Torrent 1" | Intercessor Sergeant, Gunner, Warrior (options) |
| Bolt rifle | R | 4 | 3+ | 3/4 | Piercing Crits 1 | same |
| Stalker bolt rifle (heavy) | R | 4 | 3+ | 3/5 | Heavy (Dash only), Lethal 5+, Piercing Crits 1 | same |
| Stalker bolt rifle (mobile) | R | 4 | 3+ | 3/4 | none | same |
| Auxiliary grenade launcher (frag) | R | 4 | 3+ | 2/4 | Blast 2" | Intercessor Gunner |
| Auxiliary grenade launcher (krak) | R | 4 | 3+ | 4/5 | Piercing 1 | Intercessor Gunner |
| Bolt pistol | R | 4 | 3+ | 3/4 | Range 8" | Heavy Intercessor Gunner, Eliminator Sniper |
| Heavy bolter (focused) | R | 5 | 3+ | 4/5 | Piercing Crits 1 | Heavy Intercessor Gunner |
| Heavy bolter (sweeping) | R | 4 | 3+ | 4/5 | Piercing Crits 1, Torrent 1" | Heavy Intercessor Gunner |
| Bolt sniper rifle (executioner) | R | 4 | 2+ | 3/4 | Heavy (Dash only), Saturate, Seek Light, Silent | Eliminator Sniper |
| Bolt sniper rifle (hyperfrag) | R | 4 | 2+ | 2/4 | Blast 1", Heavy (Dash only), Silent | Eliminator Sniper |
| Bolt sniper rifle (mortis) | R | 4 | 2+ | 3/3 | Devastating 3, Heavy (Dash only), Piercing 1, Silent | Eliminator Sniper |
| Chainsword (assault) | M | 5 | 3+ | 4/5 | none | AI Sergeant, AI Grenadier, AI Warrior |
| Chainsword (Intercessor Sgt) | M | 4 | 3+ | 4/5 | none | Intercessor Sergeant |
| Power fist (AI Sgt) | M | 5 | 4+ | 5/7 | Brutal | AI Sergeant |
| Power fist (Captain) | M | 5 | 3+ | 5/7 | Brutal | Captain |
| Power fist (Intercessor Sgt) | M | 4 | 4+ | 5/7 | Brutal | Intercessor Sergeant |
| Power weapon (AI Sgt) | M | 5 | 3+ | 4/6 | Lethal 5+ | AI Sergeant |
| Power weapon (Intercessor Sgt) | M | 4 | 3+ | 4/6 | Lethal 5+ | Intercessor Sergeant |
| Thunder hammer (AI Sgt) | M | 5 | 4+ | 5/6 | Shock, Stun | AI Sergeant |
| Thunder hammer (Intercessor Sgt) | M | 4 | 4+ | 5/6 | Shock, Stun | Intercessor Sergeant |
| Fists | M | 4 | 3+ | 3/4 | none | Intercessor Sgt (option), Intercessor Gunner, Intercessor Warrior, Heavy Intercessor Gunner, Eliminator Sniper |

Notes: the stalker bolt rifle selection brings both profiles. The Grenadier may also use frag and krak grenades (T-AOD.9).

### 1.4 Operative rules and unique actions

- T-AOD.8 **Iron Halo** (Captain): once per battle, when an attack die would inflict Normal Dmg on this operative, ignore that damage.
- T-AOD.9 **Grenadier** (AI Grenadier): can use frag and krak grenades (M-5.6) with their Hit improved by 1 (to 3+). These uses are separate from the team's limited uses if grenades were also chosen as equipment.
- T-AOD.10 **Heroic Leader** (Captain), once per TP choose one: (a) use a firefight ploy at 0 CP when the Captain is the operative that ploy specifies (not Command Re-roll); (b) use the Combat Doctrine strategy ploy when you activate a friendly Angel of Death operative, provided the Captain is in the killzone and not in an enemy's CR, paying CP normally and not if you already used Combat Doctrine this TP; (c) use the Adjust Doctrine ploy at 0 CP if the Captain is in the killzone and not in an enemy's CR.
- T-AOD.11 **Doctrine Warfare** (once per battle each): Assault Intercessor Sergeant: Combat Doctrine costs 0 CP when you pick Assault, and (separately) 0 CP when you pick Tactical, while this operative is in the killzone. Intercessor Sergeant: the same for Devastator and Tactical.
- T-AOD.12 **Chapter Veteran** (both Sergeants): after operative selection, if this operative is in the roster, pick one extra Chapter Tactic for it for this battle (it may differ battle to battle).
- T-AOD.13 **Camo Cloak** (Eliminator Sniper): shooters against it ignore Saturate. It has the Stealthy tactic; if your team also chose Stealthy it uses both of Stealthy's options at once (one ordinary cover save and one as a crit).
- T-AOD.14 **OPTICS** (Eliminator Sniper, 1 AP): until the start of its next activation, enemies it shoots cannot be obscured. Not in an enemy's CR.

### 1.5 Faction rules

- T-AOD.15 **ASTARTES**: in each activation, a friendly Angel of Death operative may perform either two Shoot actions or two Fight actions (this overrides R-3.7). For two Shoot actions at least one must use a bolt weapon; and if the weapon used is a bolt sniper rifle or a heavy bolter and both actions use that weapon, the second costs 1 more AP. Each friendly Angel of Death operative can counteract whatever its order.
- T-AOD.16 **CHAPTER TACTICS** (primary and secondary, both apply to every Angel of Death operative; a repeat is not cumulative):
  1. Aggressive: melee weapons gain Rending.
  2. Dueller: when this operative fights or retaliates, each of your normal successes can block one unresolved crit (not against Brutal).
  3. Resolute: ignore all changes to this operative's APL and Shock does not affect it.
  4. Stealthy: when shot, if you can retain cover saves, retain one more, or retain one cover save as a crit instead; not cumulative with the Vantage improved cover save.
  5. Mobile: Fall Back costs 1 less AP; the operative can Charge from inside an enemy's CR and leave that CR to do so (the move's other requirements still apply, so it must end in an enemy's CR).
  6. Hardy: when shot, defence results of 5+ are crits.
     RULING: Hardy uses the August 2026 reverted wording (the earlier damage-reduction version is discarded). Status Corrected.
  7. Sharpshooter: when shooting in an activation without Charge, Fall Back or Reposition, its bolt weapons have Accurate 1 and Severe.
  8. Siege Specialist: ranged weapons gain Saturate; when this operative fights or retaliates, enemy operatives cannot assist.

### 1.6 Ploys and equipment

All cost 1 CP unless stated.

| Ploy | Type | Timing | Effect |
|---|---|---|---|
| COMBAT DOCTRINE | Strategy | Gambit step (or Heroic Leader, T-AOD.10) | Choose a doctrine for the TP; friendly Angel of Death operatives' weapons gain Balanced whenever they are: Devastator = shooting an operative more than 6" away; Tactical = shooting an operative within 6"; Assault = fighting or retaliating. |
| INDOMITUS | Strategy | Gambit step | When an operative shoots a friendly Angel of Death operative and you roll two or more fails on defence dice, discard one fail and retain another as a normal success. |
| AND THEY SHALL KNOW NO FEAR | Strategy | Gambit step | Friendly Angel of Death operatives ignore injured stat changes, including to weapons. |
| ADAPTIVE TACTICS | Strategy | Gambit step | Replace your secondary Chapter Tactic until the end of the TP, when it reverts. |
| ADJUST DOCTRINE | Firefight | During a friendly Angel of Death activation, before or after an action | If Combat Doctrine was used this TP, change its doctrine. |
| WRATH OF VENGEANCE | Firefight | A friendly Angel of Death operative is counteracting | It performs one additional 1 AP action for free; the two actions must differ. |
| TRANSHUMAN PHYSIOLOGY | Firefight | An operative is shooting a friendly Angel of Death operative, Roll Defence Dice step | Retain one of your normal successes as a crit instead. |
| SHOCK ASSAULT | Firefight | A friendly Angel of Death operative Fights in an activation containing Charge, at the start of Resolve Attack Dice | Until the end of the action its melee weapon has Shock and the first time you strike you inflict 1 extra damage (capped at 7 per die). |

| Faction equipment | Effect |
|---|---|
| PURITY SEALS | Once per TP, when a friendly Angel of Death operative shoots, fights or retaliates and you roll two or more fails, discard one and retain another as a normal success. |
| AUSPEX | Once per TP, when a friendly Angel of Death operative takes the Shoot action and you are selecting a target: until the end of that activation or counteraction, enemies within 8" of it cannot be obscured. |
| CHAPTER RELIQUARIES | You can use Wrath of Vengeance at 0 CP when the specified operative has an Engage order. |
| TILTING SHIELDS | Once per TP, when a friendly Angel of Death operative fights or retaliates and the opponent has rolled attack dice but not yet re-rolled, the opponent cannot retain any result under 6 as a crit this sequence (blocks Lethal, Rending, Severe conversions). |

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together.

## 2. Kommandos

### 2.1 Team selection

- T-KOM.1 Roster: exactly 1 KOMMANDO BOSS NOB, plus 9 selections from: BOMB SQUIG, BOY, BREACHA BOY, BURNA BOY, COMMS BOY, DAKKA BOY, GROT, ROKKIT BOY, SLASHA BOY, SNIPA BOY. BOY may be taken any number of times; every other entry at most once.
- T-KOM.2 BOMB SQUIG and GROT each count as half a selection; taking both counts as one selection. UNCLEAR (resolved): the half-selection marker is missing from the PDF extract; the Wahapedia copy shows an asterisk on both entries.
  - RULING: a lone Squig or lone Grot counts as one full selection. A roster is therefore 10 operatives (Boss Nob plus 9), or 11 when both Squig and Grot are taken alongside 8 other selections. Status Unsourced.
- T-KOM.3 Boss Nob loadout: Slugga with either Big choppa or Power klaw.
- T-KOM.4 Archetypes: INFILTRATION, SEEK & DESTROY.
- T-KOM.5 Every operative has all weapons on its card unless noted; Boy has Slugga and Choppa.

### 2.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| BOSS NOB | 3 | 6" | 5+ | 14 | 32 | KOMMANDO, ORK, LEADER, BOSS NOB |
| BOMB SQUIG | 2 | 6" | 5+ | 5 | 25 | KOMMANDO, ORK, BOMB SQUIG |
| BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, BOY |
| BREACHA BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, BREACHA BOY |
| BURNA BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, BURNA BOY |
| COMMS BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, COMMS BOY |
| DAKKA BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, DAKKA BOY |
| GROT | 2 | 6" | 5+ | 5 | 25 | KOMMANDO, ORK, GROT |
| ROKKIT BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, ROKKIT BOY |
| SLASHA BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, SLASHA BOY |
| SNIPA BOY | 2 | 6" | 5+ | 10 | 32 | KOMMANDO, ORK, SNIPA BOY |

UNCLEAR (resolved): the PDF extract prints Stoopid and Expendable between the Boss Nob and Bomb Squig blocks; they belong to the Bomb Squig (confirmed by the Wahapedia copy). The Boss Nob's "Krumpin' Time" is on the Boss Nob.

### 2.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Slugga | R | 4 | 4+ | 3/4 | Range 8" | Boss Nob, Boy, Breacha Boy |
| Choppa | M | 4 | 3+ | 4/5 | none | Boy |
| Big choppa | M | 5 | 3+ | 5/6 | none | Boss Nob (option) |
| Power klaw | M | 4 | 3+ | 5/7 | Brutal, Shock | Boss Nob (option) |
| Explosives | R | 6 | 4+ | 4/5 | Blast 1", Limited 1, Explosive | Bomb Squig |
| Bite | M | 3 | 4+ | 4/5 | none | Bomb Squig |
| Breacha ram | M | 4 | 4+ | 5/5 | Brutal, Severe, Shock | Breacha Boy |
| Burna (standard) | R | 4 | 2+ | 3/3 | Range 8", Saturate, Torrent 2" | Burna Boy |
| Burna (deluge) | R | 4 | 2+ | 3/3 | Range 4", Saturate, Seek, Torrent 0" | Burna Boy |
| Shokka pistol | R | 6 | 4+ | 1/0 | Range 8", Devastating 2, Severe, Stun | Comms Boy |
| Dakka shoota (short range) | R | 5 | 4+ | 3/4 | Range 9", Ceaseless | Dakka Boy |
| Dakka shoota (long range) | R | 5 | 4+ | 3/4 | none | Dakka Boy |
| Rokkit launcha (aimed) | R | 6 | 4+ | 4/5 | Blast 1", Ceaseless, Heavy (Dash only) | Rokkit Boy |
| Rokkit launcha (mobile) | R | 6 | 4+ | 4/5 | Blast 1" | Rokkit Boy |
| Scoped big shoota (concealed) | R | 5 | 3+ | 3/3 | Devastating 2, Heavy, Silent, Concealed Position | Snipa Boy |
| Scoped big shoota (stationary) | R | 5 | 3+ | 3/3 | Devastating 2, Heavy | Snipa Boy |
| Scoped big shoota (sweeping) | R | 5 | 3+ | 3/4 | Heavy (Dash only), Torrent 1" | Snipa Boy |
| Throwing knives | R | 4 | 3+ | 2/5 | Range 6", Silent | Slasha Boy |
| Twin choppas | M | 4 | 3+ | 4/5 | Ceaseless, Lethal 5+ | Slasha Boy |
| Grot choppa | M | 3 | 5+ | 1/4 | none | Grot |
| Fists | M | 3 | 3+ | 3/4 | none | Burna, Comms, Dakka, Rokkit, Snipa Boys |

Special weapon text: **Explosive**: the Squig may perform Shoot with Explosives while in an enemy's CR; no target is selected, the Squig itself is always the primary target and cannot be in cover or obscured (it rolls its own defence dice per R-5.16, and Blast 1" then hits every operative visible to it within 1", friend or foe). **Concealed Position**: this profile can only be used the first time the Snipa Boy ever performs the Shoot action in the battle. **Torrent 0"**: no secondary targets but still counts as Torrent for other rules. The Burna deluge Seek profile now reads Seek (not Seek Light).

### 2.4 Operative rules and unique actions

- T-KOM.6 **Krumpin' Time** (Boss Nob): can perform two Fight actions in an activation.
- T-KOM.7 **GET IT DUN!** (Boss Nob, 1 AP, SUPPORT): pick another friendly KOMMANDO operative (not Squig) visible to and within 6"; until the end of its next activation add 1 to its APL. Not in an enemy's CR and not while counteracting.
- T-KOM.8 **Boom!** (Bomb Squig): if incapacitated in a battle where it never used its explosives, roll one D6 (or two if you wish); on any 4+ it performs a free Shoot with its Explosives before removal.
  - RULING: the source gives no cost for rolling two dice, so the AI always rolls two. Status Unsourced.
- T-KOM.9 **Stoopid** (Bomb Squig): it cannot take Conceal; it can only perform Charge, Dash, Fight, Reposition and Shoot; it only uses weapons on its card.
- T-KOM.10 **Expendable** (Bomb Squig): ignored for the opponent's kill op both when it is incapacitated and when counting your starting operatives; also ignored for victory conditions about escaping, surviving or being incapacitated by enemies.
- T-KOM.11 **Taktical Wot-notz** (Boy), once per TP each: one friendly Boy may perform SMOKE GRENADE and one friendly Boy may perform STUN GRENADE (M-5.5). These do not use the team's grenade totals.
- T-KOM.12 **BREACH** (Breacha Boy, 1 AP): place one of your Breach markers within its CR as close as possible to a terrain feature within its CR. While an operative is within 1" of that marker, parts of that feature no thicker than 1" are Accessible for it. The action can be performed inside a Charge or Reposition for 1 less AP (0 AP) and the rest of that move can then be used. Not in an enemy's CR or when no terrain feature is in its CR.
  - RULING: marker supply is one per Breacha Boy (so one on the table); placing again replaces it. Terrain data needs a `thickness` field. Status Unsourced.
- T-KOM.13 **DAKKA DASH** (Dakka Boy, 1 AP): free Dash and free Shoot in either order; the Shoot must use a dakka shoota profile. Not with a Conceal order or in an enemy's CR.
- T-KOM.14 **I Got a Plan, Ladz** (Comms Boy): once per activation, Pick Up Marker, Place Marker or a mission action costs 1 less AP.
- T-KOM.15 **LISTEN IN** (Comms Boy, 1 AP, SUPPORT): as Get It Dun! (6" visible, +1 APL, Squig excluded). Not in an enemy's CR.
- T-KOM.16 **Sneaky Zogger** (Grot): never Engage (so it cannot counteract); whenever in cover it cannot be selected as a valid target, beating Seek and Vantage, except within 2".
- T-KOM.17 **GRAPPLING HOOK** (Grot, 1 AP): pick a visible point on a terrain feature; remove the Grot and set it up within 1" horizontally of that point in a placeable spot, not in an enemy's CR, with the point visible to it. It cannot perform Operate Hatch in this action. Treated as Reposition; not in an enemy's CR; not in an activation containing Charge or Fall Back (nor the reverse). While counteracting the set-up must be wholly within 2".
- T-KOM.18 **Dat All You Got?** (Slasha Boy): after it fights or retaliates, if it was not incapacitated, you may inflict D3 damage on the enemy operative in that sequence.

### 2.5 Faction rule and ploys

- T-KOM.19 **THROAT SLITTAS**: every friendly KOMMANDO operative except the Bomb Squig can perform Charge while it has a Conceal order. Its order stays Conceal afterwards.

| Ploy | Type | Effect |
|---|---|---|
| DAKKA! DAKKA! DAKKA! | Strategy | Friendly KOMMANDO ranged weapons gain Punishing for the TP. |
| WAAAGH! | Strategy | Friendly KOMMANDO melee weapons gain Balanced for the TP. |
| SKULK ABOUT | Strategy | When an enemy shoots a friendly KOMMANDO with a Conceal order, retain one defence die as a normal success without rolling (in addition to any cover save). |
| SSSSHHHH! | Strategy | Each friendly KOMMANDO that is not a valid target for any enemy operative, or has Conceal and is more than 6" from every enemy operative, performs a free Dash immediately. Not in TP1. |
| JUST A SCRATCH | Firefight | When an attack die inflicts Normal Dmg on a friendly KOMMANDO (not Squig, not Grot), ignore that damage. |
| KRUMP 'EM! | Firefight | At the end of the Firefight phase, one friendly KOMMANDO performs a free Fight action. |
| KUNNIN' BUT BRUTAL | Firefight | A friendly KOMMANDO with a Conceal order fights in an activation containing Charge; when resolving the first attack die as a strike with a normal success, treat it as a crit. |
| SHAKE IT OFF | Firefight | When a friendly KOMMANDO activates or its APL changes: until the start of the next TP, ignore changes to its APL. |

| Faction equipment | Effect |
|---|---|
| CHOPPAS | Friendly KOMMANDOs (not Squig, not Grot) gain a Choppa (Atk 3, Hit 3+, Dmg 4/5); if the operative already has a better Choppa, use that. |
| DYNAMITE | Once per battle, one friendly KOMMANDO (not Squig, not Grot) may use Dynamite: Atk 5, Hit 4+, Dmg 4/5, Range 4", Blast 1", Heavy (Reposition only), Saturate. |
| HARPOON | Once per TP, one friendly KOMMANDO (not Squig, not Grot) may use Harpoon: Atk 4, Hit 4+, Dmg 4/5, Range 8", Lethal 5+, Stun. |
| COLLAPSIBLE STOCKS | Remove Range from Shokka pistol and Slugga. |

RULING: Dynamite and Harpoon limits are team-wide (once per battle and once per TP respectively), not per operative; this follows the wording "a friendly operative... once". Status Unsourced.

Marker/token guide: Explosives, Breach, Dynamite, Harpoon, Stun Grenade, Smoke Grenade tokens.

## Teams added in M9 (Pathfinders, Hierotek Circle, Plague Marines, Wyrmblade)

Sections 3 to 6 follow the same layout as sections 1 and 2. Every rule line carries a `MECH:` line naming
the engine mechanic and a class: `data` (expressible with existing data and effects), `team-hook` (code in
the team's own file through existing hook points) or `generic:<name>` (a shared capability). The
`generic:` names come from the source survey; the M9 engine prep built them (or mapped them onto an
existing hook) and each section's **Engine map** says where each one lives. Nothing a team needs is left
in a shared file: a team implementer edits only the files in its brief.

Shared engine capabilities (M9 prep, `00-architecture.md` section 11):

| Capability | Where | What it gives a team |
|---|---|---|
| Team rule provider | `src/engine/team-rules.ts` `registerTeamRules` | answers the questions shared files ask: repeats, counteract, orders, Charge/Shoot/Guard under Conceal or in control range, forbidden actions, AP cost changes, extra and offboard actions, ignore-APL/injury flags, Move changes, injury-equivalent penalties, kill op exclusion, equipment eligibility, set-aside at set-up, control APL and control totals, chained activations, activation gates, reactions, re-roll bans, extra fight weapons, fight resolution order, shoot viewpoints, Stealthy-style cover, move surcharges, mine exemptions |
| Operative tokens | `src/engine/tokens.ts` | per-owner token stacks with caps, `TokenChanged` events, expiry on source activation / incapacitation / TP end / holder activation end, `heldSinceActionStart`, `moveTokenTo`; public in `view` |
| Regain wounds | `src/engine/effects.ts` `regainWounds` | capped at starting wounds, recomputes injured, `WoundsRegained` |
| Lifecycle hooks | `src/engine/hooks.ts` | `turningPoint.start` (Ready step, before CP and readying), `activation.start` (after the order, before actions; damage there ends the activation), `activation.end`, `turningPoint.end` (before crit op scoring), `damage.inflicted` (wounds actually lost), `action.ended` (after every action, any operative), attack hooks `modifyDamage` and `beforeIncapacitated`. Lifecycle handlers never raise decisions |
| Out of the killzone | `src/engine/reserve.ts` | `setAside` (deploy answer `act.setAside`), offboard operatives that ready and activate but act only through `offboardActions`, `returnToKillzone` (kill op reversal when a removed operative returns), `incapacitateOffboard`, `placementSpots` |
| Free and delegated actions | `src/engine/firefight.ts` | `startFreeAction` now also Charge and Fall Back with `maxMove` and `endWithinCrOf`; `startDelegatedAction` (another operative performs one filtered free action: `oneApOnly`, `maxMove`, `allow`/`deny`, `'mission'`, `notDoneThisTp`); reactions after an action (`reactions` provider, `REACTION_DONE`, `reactionDone`) |
| Attack helpers | `src/engine/attack-common.ts` | `weaponDamage` (Dmg after `modifyDamage`), `redirectAttack` (swap the Shoot target or fight opponent), viewpoint-aware `validTargets` / `targetInfo` (`AttackState.viewpointId`) |
| Activation memory | `Operative.movedThisActivation`, `Operative.actionsThisTp` | distance spent this activation (climb, drop and Accessible included); every action performed this TP |
| Roster shapes | team.json slot `weights`, `caps` | entries counting as two selections; at most n of a group |
| Equipment | equipment.json `grants.to`, `hidden`, `excludes`; any equipment with effect code `mines` is a mine | who receives granted weapons; hidden markers; options that cannot be combined |
| Scaffold flag | team.json `playable` | `false` keeps a team out of the team picker, the sims and the client presentation coverage tests |

Rules for every M9 team implementer:
- Own only the files in your brief. Never edit `STATUS.md`, `package.json`, shared engine files, other
  teams' files, `src/engine/teams/index.ts`, `src/data/manifest.ts` or `src/data/index.ts` (all already
  list your team). If a rule truly needs a new shared capability, stop and report it instead.
- Register code hooks in `src/engine/teams/<team>.ts`; `src/data/code-hooks.json` no longer exists (the
  list is derived from the data), and every hook name your data uses needs a firing scenario in
  `tests/engine/teams/<team>.hooks.ts`.
- When the team is complete, set `"playable": true` (or delete the key) in team.json, fill `defaults`
  (roster, equipment, team picks), and give every weapon an entry in `src/client/teams/<team>.ts`
  (flavour, vfx, sound, attachments; list the figure archetypes in `standIns`). Flipping the flag puts
  the team into the picker and into `npm run sim -- --teams real` pairings.
- Gates: `npm run typecheck`, `npm test`, `npm run validate:data`, `npm run sim -- --games 40 --teams real --decider normal`.
- Restate rules in our own words; never copy source text; append RULING lines to `docs/needs-rules-check.md`.
- Figure archetype slugs follow the concept art names in `art/unit-concepts/` (`pf-`, `ht-`, `pm-`, `wb-` plus the operative slug, e.g. `ht-technomancer`, `wb-neophyte-leader`); data ids keep the `pf.`, `hie.`, `pm.`, `wyr.` prefixes.

## 3. Pathfinders

Rule IDs: `T-PF.<n>`. Checklist IDs: `TEAM-PF-<nnn>`. Sources: the team PDF extract (August 2026 errata state, authoritative; the flow and layout extracts were read together and the stat lines checked against the PDF text layer), cross-checked against the Wahapedia copy (which lags the PDF in places, listed in 3.10). All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y) and `11-missions.md` (M-x.y).

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm. Every T-id is followed by a `MECH:` line naming the engine mechanic and its implementation class (`data`, `team-hook`, or `generic:<capability>`; capabilities are defined in 3.9).

### 3.1 Team selection

- T-PF.1 Roster: exactly 1 SHAS'UI PATHFINDER (the leader) plus 11 selections from the main list (T-PF.2). The MB3 RECON DRONE uses two of the 11 selections. A roster is therefore 12 operatives, or 11 when the MB3 is taken.
  - MECH: roster validator with per-entry selection weight (MB3 weight 2, all others 1), total weight exactly 11 plus the leader | CLASS: data
- T-PF.2 Main list: ASSAULT GRENADIER, BLOODED, COMMS SPECIALIST, DRONE CONTROLLER, MARKSMAN, MEDICAL TECHNICIAN, SHAS'LA, TRANSPECTRAL INTERFERENCE, WEAPONS EXPERT, MB3 RECON DRONE, MV1 GUN DRONE, MV4 SHIELD DRONE, MV7 MARKER DRONE, MV31 PULSE ACCELERATOR DRONE, MV33 GRAV-INHIBITOR DRONE. SHAS'LA may be taken any number of times; WEAPONS EXPERT at most twice; every other entry at most once.
  - MECH: per-entry `maxCount` (SHAS'LA unlimited, WEAPONS EXPERT 2, others 1) in roster data | CLASS: data
- T-PF.3 Loadouts: every operative carries every weapon on its card, except the WEAPONS EXPERT, which takes either (ion rifle, both profiles, plus gun butt) or (rail rifle plus gun butt). Two Weapons Experts may take the same or different options.
  - MECH: loadout option list on the WEAPONS EXPERT entry; all other entries fixed | CLASS: data
- T-PF.4 Archetypes: INFILTRATION, RECON (tac ops are out of scope for v1).
  - MECH: archetype list on the team record | CLASS: data
- T-PF.5 "Pulse weapon": burst cannon (both profiles), pulse carbine (both stat variants), suppressed pulse carbine, twin pulse carbine. No other weapon is a pulse weapon (not the ion rifle, rail rifles or grenades).
  - MECH: `pulse` tag on those weapon records, read by T-PF.24 and T-PF.38 filters | CLASS: data
- T-PF.6 Markerlight action on the datacard (needed by T-PF.27, T-PF.41): SHAS'UI, ASSAULT GRENADIER, BLOODED, COMMS SPECIALIST, DRONE CONTROLLER, MEDICAL TECHNICIAN, SHAS'LA, TRANSPECTRAL INTERFERENCE, MB3 RECON DRONE, MV7 MARKER DRONE. Not on: MARKSMAN, WEAPONS EXPERT, MV1, MV4, MV31, MV33.
  - MECH: `uniqueActions: ["MARKERLIGHT"]` on exactly those operative records | CLASS: data

### 3.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| SHAS'UI PATHFINDER | 2 | 6" | 5+ | 8 | 25 | PATHFINDER, T'AU EMPIRE, LEADER, SHAS'UI |
| ASSAULT GRENADIER PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, ASSAULT GRENADIER |
| BLOODED PATHFINDER | 2 | 6" | 5+ | 8 | 25 | PATHFINDER, T'AU EMPIRE, BLOODED |
| COMMS SPECIALIST PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, COMMS SPECIALIST |
| DRONE CONTROLLER PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, DRONE CONTROLLER |
| MARKSMAN PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, MARKSMAN |
| MEDICAL TECHNICIAN PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, MEDIC, MEDICAL TECHNICIAN |
| SHAS'LA PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, SHAS'LA |
| TRANSPECTRAL INTERFERENCE PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, TRANSPECTRAL INTERFERENCE |
| WEAPONS EXPERT PATHFINDER | 2 | 6" | 5+ | 7 | 25 | PATHFINDER, T'AU EMPIRE, WEAPONS EXPERT |
| MB3 RECON DRONE | 3 | 6" | 4+ | 12 | 32 | PATHFINDER, T'AU EMPIRE, MB3 RECON, DRONE |
| MV1 GUN DRONE | 2 | 6" | 4+ | 7 | 32 | PATHFINDER, T'AU EMPIRE, MV1 GUN, DRONE |
| MV4 SHIELD DRONE | 2 | 6" | 4+ | 7 | 32 | PATHFINDER, T'AU EMPIRE, MV4 SHIELD, DRONE |
| MV7 MARKER DRONE | 2 | 6" | 4+ | 7 | 32 | PATHFINDER, T'AU EMPIRE, MV7 MARKER, DRONE |
| MV31 PULSE ACCELERATOR DRONE | 2 | 6" | 4+ | 7 | 32 | PATHFINDER, T'AU EMPIRE, MV31 PULSE ACCELERATOR, DRONE |
| MV33 GRAV-INHIBITOR DRONE | 2 | 6" | 4+ | 7 | 32 | PATHFINDER, T'AU EMPIRE, MV33 GRAV-INHIBITOR, DRONE |

Drone bases are 32mm flying bases (the model hovers on a stand); for visibility the drone's head is the round disc at the top of the model (T-PF.20), so the figure GLB needs its `head` socket on that disc. The extracts print "PATHFINDER ," with a stray space; the keyword is PATHFINDER.

UNCLEAR: in the flow extract the Marksman, Weapons Expert and MB3 stat cells are detached from their weapon names; resolved row by row from the PDF text layer and the layout extract (which agree), then checked against Wahapedia (differences in 3.10).

### 3.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Pulse carbine (Shas'ui) | R | 4 | 3+ | 4/5 | none | Shas'ui |
| Pulse carbine | R | 4 | 4+ | 4/5 | none | Assault Grenadier, Comms Specialist, Drone Controller, Medical Technician, Shas'la, Transpectral Interference |
| Suppressed pulse carbine | R | 4 | 3+ | 4/5 | Silent | Blooded |
| Fusion grenade | R | 4 | 3+ | 4/3 | Range 6", Devastating 2, Limited 1, Piercing 2, Saturate | Assault Grenadier |
| Marksman rail rifle (standard) | R | 4 | 3+ | 4/4 | Devastating 2, Lethal 5+, Piercing 1 | Marksman |
| Marksman rail rifle (dart round) | R | 4 | 3+ | 3/4 | Piercing 1, Silent | Marksman |
| Ion rifle (standard) | R | 5 | 4+ | 4/5 | Piercing Crits 1 | Weapons Expert (option) |
| Ion rifle (overcharge) | R | 5 | 4+ | 4/5 | Hot, Lethal 5+, Piercing 1 | Weapons Expert (option) |
| Rail rifle | R | 4 | 4+ | 4/4 | Devastating 2, Lethal 5+, Piercing 1 | Weapons Expert (option) |
| Burst cannon (focused) | R | 5 | 4+ | 3/4 | Ceaseless, Heavy (Reposition only), Punishing | MB3 Recon Drone |
| Burst cannon (sweeping) | R | 4 | 4+ | 3/4 | Ceaseless, Heavy (Reposition only), Punishing, Torrent 1" | MB3 Recon Drone |
| Twin pulse carbine | R | 4 | 4+ | 4/5 | Ceaseless | MV1 Gun Drone |
| Gun butt (Shas'ui) | M | 3 | 4+ | 2/3 | none | Shas'ui |
| Gun butt | M | 3 | 5+ | 2/3 | none | Assault Grenadier, Drone Controller, Marksman, Medical Technician, Shas'la, Transpectral Interference, Weapons Expert |
| Bionic arm | M | 3 | 4+ | 3/4 | none | Blooded |
| Fists | M | 3 | 5+ | 2/3 | none | Comms Specialist |
| Ram | M | 3 | 5+ | 2/3 | none | every DRONE |

Notes: the ion rifle selection brings both profiles. The fusion grenade's crit damage (3) is lower than its normal damage (4) as printed; its Devastating 2 makes a retained crit worth 2 immediate plus 3 on resolution. Do not "fix" it. The Assault Grenadier may also use frag and krak grenades (T-PF.9). No Pathfinder weapon has a team-local weapon rule; all rules above are core (R-10).

### 3.4 Operative rules and unique actions

- T-PF.7 **Art of War** (Shas'ui): a STRATEGIC GAMBIT usable while the Shas'ui is in the killzone. Pick one option, which lasts until the end of the TP; each option can be picked at most once per battle (so at most two TPs use it). (a) Mont'ka: friendly PATHFINDER operatives (drones included) get +1" Move. (b) Kauyon: during its activation, a friendly PATHFINDER operative that has a Conceal order may perform one Markerlight action for free.
  - RULING: Kauyon scope | only operatives that already have Markerlight (T-PF.6) get the free use; it does not grant the action to the Marksman, Weapons Expert or non-marker drones; the free use still counts as the operative's Markerlight for R-3.7 and the Shoot link (T-PF.28) | the faction rule limits the action to operatives indicated on their card, and the Drone rule's "cannot" beats a "can" (R-9.4) | Unsourced
  - RULING: Art of War frequency | no overall cap; each option once per battle, so up to two uses | the errata log quotes a revised first sentence starting "once per battle", but the current datacard in the PDF and Wahapedia both lack it and keep the per-option cap, which would be redundant under a single use | Unsourced
  - MECH: strategic gambit with an `ability.choice` (Mont'ka / Kauyon), per-option once-per-battle ledger, gated on the Shas'ui being in the killzone; Mont'ka = team-wide Move +1 for the TP; Kauyon = 0-AP Markerlight offer for Conceal-ordered operatives in their activation | CLASS: team-hook
- T-PF.8 **Veteran** (Blooded): in a TP where Art of War was used, at the start of the Blooded's activation you may swap it to the other option for itself only, for that activation (Mont'ka picked: it gets Kauyon instead of +1" Move; Kauyon picked: it gets +1" Move instead of the free Markerlight). This is not a pick of that option and does not spend its once-per-battle use.
  - MECH: `ability.choice` at Blooded activation start when an Art of War option is active this TP; per-operative override of which option applies | CLASS: team-hook
- T-PF.9 **Grenadier Specialist** (Assault Grenadier): may use frag and krak grenades (M-5.6) with Hit improved by 1 (to 3+), without using any of the team's grenade uses from equipment. Same mechanic as T-AOD.9.
  - MECH: grant frag and krak grenade profiles to this operative with Hit 3+, separate unlimited-by-equipment ledger (reuse the T-AOD.9 grant) | CLASS: data
- T-PF.10 **SIGNAL** (Comms Specialist, 1 AP, SUPPORT): pick another friendly PATHFINDER operative (drones allowed) visible to and within 6"; it gets +1 APL until the end of its next activation. Not while in an enemy's CR. The Comms Device (M-5.1) extends the 6".
  - MECH: unique action, support APL boost to a filtered friendly target (as T-KOM.7) | CLASS: data
- T-PF.11 **Drone Controller** (Drone Controller): while this operative is in the killzone, friendly PATHFINDER DRONE operatives get +2" Move and SAVIOUR PROTOCOLS (T-PF.37) costs 0 CP.
  - MECH: conditional Move +2 stat grant to DRONE keyword (condition: source operative in killzone) and ploy cost override to 0 on the same condition | CLASS: data
- T-PF.12 **REMOTE PILOT** (Drone Controller, 1 AP): one friendly PATHFINDER DRONE immediately performs one free action of any kind, including one its Drone rule would forbid (T-PF.20), but it cannot move more than 2" during that action. Not while the Drone Controller is in an enemy's CR. The Drone Controller may perform REMOTE PILOT more than once per activation, but a given drone cannot perform the same free action more than once in one Drone Controller activation. The drone's action still needs its own conditions (for example a Shoot needs the drone not in an enemy's CR and not under a Conceal order without Silent).
  - RULING: Remote Pilot scope | lifts only the Drone whitelist: opens Pick Up Marker, Place Marker, mission actions, Guard and universal equipment actions to any drone; Shoot only for drones with ranged weapons; never Markerlight for a drone without it on its card, never PULSE ACCELERATOR except the MV31 | the text overrides only the Drone rule; the faction rule still limits Markerlight to operatives indicated on their card | Unsourced
  - RULING: Remote Pilot and the drone's own activation | the free action does not use up that action for the drone's own later activation and Heavy does not carry between them; within one Drone Controller activation the Shoot/Markerlight link (T-PF.28) applies across all free actions of the same drone | R-3.9 separates free actions outside an activation; linking within the controller's activation stops a split Shoot and Markerlight from dodging T-PF.28 | Unsourced
  - MECH: unique action that makes another friendly operative perform a chosen free action now, with a 2" move cap, whitelist override and a per-(drone, action) ledger for the activation; repeatable by the controller | CLASS: generic:delegatedFreeAction
- T-PF.13 **Inertial Dampener** (Marksman): changes to the Hit stat of the marksman rail rifle (both profiles) may be ignored.
  - RULING: Inertial Dampener choice | always ignore every worsen, always keep every improvement, no prompt | the rule is optional per change and an improvement can never hurt this weapon (no Hot) | Unsourced
  - MECH: per-weapon flag `ignoreHitWorsen` applied in the Hit stat calculation (R-9.5) | CLASS: team-hook
- T-PF.14 **Medic!** (Medical Technician): the first time each TP that another friendly PATHFINDER operative (not a DRONE) that is visible to and within 3" of the Medical Technician would be incapacitated, you may use this rule, provided neither operative is in an enemy's CR, the Medical Technician is not incapacitated, and (in a Shoot action) the Medical Technician is not a primary or secondary target. Effect: that operative is not incapacitated, is set to 1 wound and cannot be incapacitated for the rest of the action. When the action ends it may perform a free Dash that must end within the Medical Technician's CR. Both operatives get -1 APL until the end of their next activations. If this happened during the saved operative's own activation, that activation ends.
  - RULING: Medic! opportunity | only the first qualifying moment of the TP is offered, declining spends it; the AI always accepts; the free Dash is optional and skipped if no legal end point lies in the medic's CR | the text says "the first time" each TP | Unsourced
  - MECH: hook at "would be incapacitated" (before removal and before on-incapacitated triggers) offering a decision; set wounds to 1, floor at 1 for the rest of the action, queue a post-action free Dash with an end-zone constraint, apply APL -1 to both, end the current activation if it belongs to the saved operative; once-per-TP ledger; Medic token on the saved operative | CLASS: generic:incapacitationIntercept
- T-PF.15 **MEDIKIT** (Medical Technician, 1 AP): one friendly PATHFINDER operative (not a DRONE) within the Medical Technician's CR regains up to 2D3 lost wounds (never above its starting wounds). It cannot pick an operative that Medic! saved this TP. Not while in an enemy's CR.
  - RULING: MEDIKIT self-target | the Medical Technician may heal itself | an operative is within any distance of itself (R-8.3) and the text, unlike Medic!, does not say "other" | Unsourced
  - MECH: unique action whose effect regains wounds (rolled 2D3, capped at starting wounds, wounded/injured status recomputed); target filter excludes DRONE and this TP's Medic! target | CLASS: generic:regainWounds
- T-PF.16 **Group Activation** (Shas'la): when a Shas'la's activation ends and it becomes expended, your next activation must be another ready friendly SHAS'LA, if you have one, before your opponent activates. When that second Shas'la is expended, play passes to the opponent as normal (no chain of three). Counteracting is not an activation and does not trigger this.
  - MECH: after expend, if the expended operative carries the rule and was not itself activated by it, the next `PendingDecision` is a forced activation restricted to ready SHAS'LA operatives (skipped if none) | CLASS: generic:groupActivation
- T-PF.17 **Fearless on the Frontline** (Shas'la): may perform Markerlight while in an enemy's CR (overrides T-PF.27's condition), and Fall Back costs 1 less AP (1 AP).
  - MECH: condition override on the Markerlight action for this operative; Fall Back cost -1 | CLASS: data
- T-PF.18 **SYSTEM JAM** (Transpectral Interference, 1 AP): pick one enemy operative visible to it (no range limit); that enemy gets -1 APL until the end of its next activation (R-9.6 limits apply). Not while it has a Conceal order or is in an enemy's CR.
  - MECH: unique action applying a timed APL -1 to an enemy target (same effect as Stun, R-10.22) with order and CR conditions | CLASS: data
- T-PF.19 **Multi-Dimensional Vision** (Transpectral Interference): whenever this operative is shooting, enemy operatives cannot be obscured.
  - MECH: permanent "target cannot be obscured" on this operative's shooting (same primitive as T-AOD.14) | CLASS: data
- T-PF.20 **Drone** (every DRONE operative): (a) it may perform only the actions on its whitelist below and may use only the weapons on its own card (so no frag, krak or other equipment weapons); (b) when working out objective control, its APL counts as 1 lower; this is not an APL change, so it stacks with real APL changes and is not limited by R-9.6; (c) for visibility its head is the disc on top of the model. Drones may take either order (unlike the Bomb Squig's Stoopid rule, nothing stops Conceal), they can counteract, and they count fully for kill op and the starting operative count (no Expendable rule).

  | Drone | Allowed actions |
  |---|---|
  | MB3 RECON DRONE | Charge, Dash, Fall Back, Fight, Markerlight, Reposition, Shoot |
  | MV1 GUN DRONE | Charge, Dash, Fall Back, Fight, Reposition, Shoot |
  | MV4 SHIELD DRONE | Charge, Dash, Fall Back, Fight, Reposition |
  | MV7 MARKER DRONE | Charge, Dash, Fall Back, Fight, Markerlight, Reposition |
  | MV31 PULSE ACCELERATOR DRONE | Charge, Dash, Fall Back, Fight, PULSE ACCELERATOR, Reposition |
  | MV33 GRAV-INHIBITOR DRONE | Charge, Dash, Fall Back, Fight, Reposition |

  - MECH: (a) per-operative action whitelist and card-weapons-only flag (reuse T-KOM.9, without its Conceal ban); (b) control-APL offset -1 used only by the objective-control calculation (R-8.6); (c) figure head socket | CLASS: generic:controlAplOffset
- T-PF.21 **Analyse** (MB3 Recon Drone): when it performs Markerlight, every other enemy operative visible to the MB3 and within 3" of the chosen enemy also gains one token (each subject to the cap of 4). The MB3 is exempt from the Shoot/Markerlight target link (T-PF.28).
  - MECH: Markerlight post-effect adding one token to each enemy matching visible-to-actor and within 3" of the primary pick; link exemption flag | CLASS: team-hook
- T-PF.22 **Shield Generator** (MV4 Shield Drone): (a) ignores Piercing, including Piercing Crits, on weapons used against it; (b) once per TP, when an attack die would inflict Normal Dmg on it, ignore that damage; (c) SAVIOUR PROTOCOLS costs 0 CP when the MV4 is the drone chosen for it.
  - RULING: Shield Generator and Piercing Crits | Piercing Crits is ignored too | the core defines Piercing Crits inside the Piercing rule (R-10.12) | Unsourced
  - MECH: (a) defender-side weapon-rule suppression (as Camo Cloak's Saturate ignore, T-AOD.13); (b) once-per-TP ignore Normal Dmg (as T-AOD.8 with a TP ledger); (c) conditional ploy cost 0 | CLASS: data
- T-PF.23 **High-intensity Markerlight** (MV7 Marker Drone): when it performs Markerlight, the chosen enemy gains two tokens instead of one (cap 4).
  - MECH: Markerlight token count = 2 for this actor | CLASS: team-hook
- T-PF.24 **PULSE ACCELERATOR** (MV31, 1 AP): until the start of the MV31's next activation or until it is incapacitated, whichever is first, every other friendly PATHFINDER operative shooting with a pulse weapon (T-PF.5) while within 3" of the MV31 has Lethal 5+ and Severe on that weapon. No printed conditions (it may be done in an enemy's CR or under Conceal).
  - MECH: unique action creating a timed aura that grants Lethal 5+ and Severe to `pulse`-tagged ranged weapons of friendly shooters within 3" of the source, ending at source's next activation start or incapacitation; Pulse Accelerator token on the drone | CLASS: data
- T-PF.25 **Grav-inhibitor, movement** (MV33): whenever an enemy operative performs an action in which it moves, other than Dash, and that move would take it to a point visible to and within 6" of the MV33, that move costs an extra 2" (once per action) and, for that action, it ignores the extra distance from Obstructing and Accessible terrain.
  - RULING: Grav-inhibitor surcharge | +2" once per action, at the first increment end point or sampled path point visible to and within 6" of the MV33; for the rest of that action Obstructing and Accessible add nothing; applies to Reposition, Charge, Fall Back, treated-as-Reposition and unique moves; counts against the counteract 2" cap (R-3.12) | the text reads as one penalty that replaces terrain extras rather than stacking; R-3.12 counts all distance modifiers | Unsourced
  - MECH: movement-cost hook that checks each increment against a visibility-and-distance aura, adds a one-off 2" to the action's budget and suppresses terrain distance extras for the rest of the action | CLASS: generic:movePenaltyAura
- T-PF.26 **Grav-inhibitor, melee** (MV33): whenever an enemy operative is fighting or retaliating while visible to and within 6" of the MV33, its melee weapons' Hit is worsened by 1, stacking with the injury worsen (R-9.5, clamp R-9.7). The MV33 is once per roster, so it never stacks with itself.
  - MECH: aura stat modifier (Hit +1 worse) on enemy melee weapons during fights, evaluated when dice are rolled (R-6.12) | CLASS: team-hook

### 3.5 Faction rules

- T-PF.27 **MARKERLIGHT** (unique action, 1 AP, operatives in T-PF.6): pick one enemy operative visible to the actor (no range limit); it gains one of your Markerlight tokens, up to a maximum of 4 per enemy operative. Not while the actor is in an enemy's CR (Shas'la excepted, T-PF.17). Tokens belong to the Pathfinder player, stay on the enemy across TPs until removed (T-PF.29) and are removed with the operative.
  - MECH: unique action that increments a per-owner token counter on an enemy operative, clamped to 4, emits an event and shows in `view` for both seats | CLASS: generic:operativeTokens
- T-PF.28 **Shoot / Markerlight link**: if an operative (other than the MB3) performs both a Shoot action (not a Guard shot) and a Markerlight action in the same activation, in either order, the Markerlight must pick the Shoot's target and the Shoot must pick the Markerlight's target.
  - RULING: Shoot link with Blast or Torrent | the link uses the primary target only; never applies in a counteraction | the primary is the only target the player selects; a counteraction is one action | Unsourced
  - MECH: per-operative activation memory of "linked target"; target-validity filter on Shoot and on Markerlight when the other was already done | CLASS: team-hook
- T-PF.29 **Token decay**: once during each of its activations, when an enemy operative with any of your Markerlight tokens performs Dash, Charge, Fall Back or Reposition (including an action treated as Reposition, and free versions inside its activation), it loses one token. At most one token is lost per enemy activation. Moves made outside an activation (counteractions, strategy-phase free moves, moves granted by other rules outside its activation) do not remove tokens.
  - MECH: after-action trigger on enemy move actions, once-per-activation ledger per enemy operative, decrement token counter | CLASS: generic:operativeTokens
- T-PF.30 **Token benefits**: whenever a friendly PATHFINDER operative is shooting with a weapon on its own datacard (not the fusion grenade, and not frag or krak grenades, which are not on its card), it gains the rules for every row up to the target's token count (cumulative):

  | Tokens | Shooter gains |
  |---|---|
  | 1 | Saturate and Balanced |
  | 2 | Hit of its ranged weapons improved by 1, but never better than 3+ (a 3+ or better weapon is unchanged; an injured 4+ weapon returns to 3+) |
  | 3 | The target cannot be obscured |
  | 4 | Seek Light |
  | 5 | Seek (only reachable with Target Analysis Optic, T-PF.39, since the cap is 4) |

  The count is read per target: each Blast or Torrent sequence uses that target's own tokens. Seek Light and Seek apply during valid-target selection, so a candidate's own token count decides whether it is selectable. The Hit improvement counts for Hot (R-10.8). These benefits apply only when shooting, never when fighting or retaliating (including Point-Blank Fusillade).
  - MECH: shoot-pipeline modifier keyed on the candidate or current target's token count: weapon rule grants (Saturate, Balanced, Seek Light, Seek), capped Hit improvement, no-obscured flag; evaluated per candidate at target selection and per sequence | CLASS: generic:tokenKeyedShootRules

### 3.6 Ploys

All cost 1 CP unless stated. Format per line: name | type | cost | timing | effect.

- T-PF.31 **RECON SWEEP** | Strategy | 1 CP | Gambit step, not in TP1 | Pick a killzone edge other than your own. Each friendly PATHFINDER operative wholly within 6" of that edge may, in an order you choose, perform a free Dash; any operative that Dashes must end wholly within 6" of a killzone edge that is not your own (any of the other three).
  - MECH: ploy with an edge `ability.choice`, per-operative optional free Dash with an end-zone constraint (the multi-operative free Dash pattern of SSSSHHHH!), TP>1 gate | CLASS: team-hook
- T-PF.32 **SUPPRESSING FIRE** | Strategy | 1 CP | Gambit step, lasts the TP | When an enemy operative performs a Shoot action, if its target (the primary for Blast or Torrent) is not the closest valid target, the opponent cannot re-roll attack dice in that action. When finding the closest, ignore friendly PATHFINDER operatives that have a Conceal order or are obscured from that shooter.
  - RULING: Suppressing Fire test | ban applies when some non-ignored valid target (Engage order, not obscured) is strictly closer than the chosen target; ties count as closest; blocks Balanced, Ceaseless, Relentless and Command Re-roll on attack dice only; applies to Guard shots | "cannot" beats "can" (R-9.4); a Guard shot is a Shoot action | Unsourced
  - MECH: attack-dice hook on enemy Shoot actions that disables attack re-rolls after a closest-valid-target query with the ignore filter | CLASS: team-hook
- T-PF.33 **BONDED** | Strategy | 1 CP | Gambit step, lasts the TP | Whenever a friendly PATHFINDER operative (not a DRONE) is shooting, or retaliating with a ranged weapon via Point-Blank Fusillade, while within 3" of another friendly non-DRONE PATHFINDER operative, its ranged weapons have Accurate 1.
  - MECH: weapon rule grant (Accurate 1) with filter: shooter non-DRONE, another friendly non-DRONE within 3", ranged weapon | CLASS: data
- T-PF.34 **TAKE COVER** | Strategy | 1 CP | Gambit step, lasts the TP | Whenever a friendly PATHFINDER operative is being shot and the defender can retain any cover save (so not against Saturate, and only when in cover), its Save is improved by 1 (5+ to 4+, drones 4+ to 3+).
  - MECH: defence-side Save modifier conditioned on cover save being retainable in this sequence | CLASS: team-hook
- T-PF.35 **A WORTHY CAUSE** | Firefight | 1 CP | Start of the Firefight phase | One friendly PATHFINDER operative (not a DRONE) immediately performs one free mission action (its conditions still apply). This is outside any activation (R-2.7 analogue, R-3.9).
  - MECH: phase-start ploy window, choose an operative, offer its legal mission actions at 0 AP (same pattern as KRUMP 'EM!'s free Fight) | CLASS: team-hook
- T-PF.36 **SUPPORTING FIRE** | Firefight | 1 CP | A friendly PATHFINDER operative is performing Shoot and you are selecting a valid target within 6" of it | That target may be selected even though other friendly PATHFINDER operatives are within its CR.
  - RULING: Supporting Fire and Torrent | override covers the primary target only; Torrent secondaries still cannot be in a friendly operative's CR | Torrent's restriction is its own rule (R-10.23), not the valid-target rule the ploy names | Unsourced
  - MECH: target-validity filter that drops the "no friendly in target's CR" check (R-5.2) for candidates within 6" of the shooter | CLASS: team-hook
- T-PF.37 **SAVIOUR PROTOCOLS** | Firefight | 1 CP (0 CP with Drone Controller in the killzone, T-PF.11, or when the MV4 is the drone, T-PF.22) | An enemy Shoot action has selected a friendly non-DRONE PATHFINDER operative as its target | Pick one friendly PATHFINDER DRONE visible to and within 3" of the original target; the drone becomes the target instead, even if it would not normally be valid (out of range, not visible, Conceal in cover). The drone can be in cover or obscured only if the original target was. No effect against a weapon with Blast or Torrent.
  - RULING: Saviour Protocols cover | drone in cover only if the original target was in cover AND the drone's own position gives cover; same for obscured | "only if" is a cap, worded unlike Blast's "are in cover if" grant (R-10.3) | Unsourced
  - MECH: defender ploy window after target selection that swaps the target to a chosen own operative, bypassing validity, with cover and obscured computed as (original AND own) | CLASS: generic:shootTargetRedirect
- T-PF.38 **POINT-BLANK FUSILLADE** | Firefight | 1 CP | A friendly non-DRONE PATHFINDER operative is retaliating and was not within an enemy operative's CR at the start of that enemy activation or counteraction | It may use one of its ranged weapons as its melee weapon for this sequence (not one with "grenade" in its name). If it does, it cannot block in this sequence, and Devastating, Piercing and Torrent do nothing on its weapons until the sequence ends. If it is also ready (not yet activated this TP), has an Engage order and the chosen weapon is a pulse weapon, it resolves the first die instead of the attacker.
  - MECH: fight-sequence hook letting the retaliator pick a ranged profile as melee, suppressing listed weapon rules, removing its block option and optionally swapping resolve order (R-6.5) | CLASS: generic:retaliateWithRanged

### 3.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together. Format per line: name | effect.

- T-PF.39 **TARGET ANALYSIS OPTIC** | Once per TP, when a friendly non-DRONE PATHFINDER operative is performing Shoot and selecting a valid target, you may use it: until the end of that action, a target with at least one of your tokens counts as having one more (so 4 becomes 5 and gains Seek, T-PF.30). For Blast or Torrent only the primary target is affected.
  - RULING: TAO timing | declared before the target is fixed, so the +1 applies to candidates during selection (a 3-token Conceal target in Light cover becomes selectable); a cancelled action does not spend it | the trigger is "selecting a valid target"; R-3.8 restores state on cancel | Unsourced
  - MECH: once-per-TP toggle in the target-selection decision; +1 effective token count for candidates that have ≥1 token, primary only | CLASS: team-hook
- T-PF.40 **HIGH-INTENSITY MARKERLIGHT** | Up to twice per TP, when a friendly PATHFINDER operative other than the MV7 performs Markerlight, you may use it: the chosen enemy gains two tokens instead of one (cap 4).
  - MECH: TP ledger with 2 uses, offered on Markerlight resolution; token count 2 | CLASS: team-hook
- T-PF.41 **PHOTON GRENADE** | Once per TP (team-wide), a friendly non-DRONE PATHFINDER operative with Markerlight on its datacard may perform PHOTON GRENADE (unique action, 1 AP): pick one enemy operative visible to it (no range limit) and roll one D6; on 3+, until the end of that enemy's next activation, its Move is reduced by 2" (never below 4", R-9.6) and it cannot perform the Dash action (free Dashes included). Not while the actor is in an enemy's CR (Fearless on the Frontline does not extend to this action).
  - MECH: unique action offered under a once-per-TP team ledger; on 3+ apply a timed Move -2 modifier and a timed Dash ban to the enemy; Photon Grenade token | CLASS: generic:actionBanStatus
- T-PF.42 **ORBITAL SURVEY UPLINK** | Once per TP, when a friendly PATHFINDER operative performs Markerlight, you may use it: instead of the normal pick, choose any enemy operative in the killzone (visibility not needed) to gain one token. It does not combine with High-intensity Markerlight (equipment or MV7) or Analyse: exactly one token goes to exactly one enemy.
  - RULING: OSU and the Shoot link | T-PF.28 still constrains the pick | OSU replaces only the visibility requirement | Unsourced
  - MECH: once-per-TP option in the Markerlight target decision that widens candidates to all enemy operatives and forces token count 1 with Analyse suppressed | CLASS: team-hook

Marker/token guide (UI): Markerlight tokens (printed in values 1 and 2), Mont'ka, Kauyon, Saviour Protocols, Fusion Grenade (Limited use), Medic, Multi-dimensional, Pulse Accelerator, Target Analysis Optic, High-intensity Markerlight, Photon Grenade, Orbital Survey Uplink.

### 3.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-PF: TEAM-PF-000 to TEAM-PF-015.

### 3.9 Generic capabilities (survey; resolved in the Engine map below)

- **operativeTokens**: persistent, per-owning-player integer counters attached to enemy operatives (`markerlight`), with a cap (4), add and remove operations that emit events, automatic clearing when the operative is removed, a trigger hook for "enemy performs move action X during its activation" with a once-per-activation ledger per carrier, and display in `view(state, seat)` for both seats plus a counter badge in the client. Must support more than one source of tokens per action (Analyse, HIML). Used by T-PF.7, T-PF.21, T-PF.23, T-PF.27, T-PF.29, T-PF.39 to T-PF.42.
- **tokenKeyedShootRules**: a shoot-pipeline modifier that reads the token count of each candidate (during valid-target selection) and of each sequence's target (Blast and Torrent secondaries separately), and grants weapon rules (Saturate, Balanced, Seek Light, Seek), a Hit improvement with a best-value cap (3+), and a "cannot be obscured" flag; it must respect a shooter filter (friendly PATHFINDER), a weapon filter (on own datacard, excluding a named weapon) and an additive effective-count bonus for one action (TAO). `query.*` must expose the per-candidate granted rules so prompts can show them. Used by T-PF.30, T-PF.39.
- **delegatedFreeAction**: an action whose effect makes a different friendly operative perform one free action of the player's choice now, outside that operative's activation, with a move cap (2"), an override of the target operative's action whitelist, normal action conditions for the delegate, and a per-(delegate, action) ledger scoped to the actor's activation; the actor can repeat it (exception to R-3.7). Used by T-PF.12.
- **controlAplOffset**: a per-operative offset applied only when summing APL for objective control (R-8.6), not a stat change and not subject to the ±1 APL clamp. Used by T-PF.20.
- **incapacitationIntercept**: a hook at the moment an operative would be incapacitated, before removal and before any on-incapacitation triggers, that can offer a decision to the owner and, if taken, sets wounds to a value, imposes a wound floor for the rest of the action, queues a post-action free action with a constrained end zone, applies timed stat changes to two operatives and can end the current activation. Used by T-PF.14.
- **regainWounds**: an effect primitive that restores rolled wounds up to the starting Wounds stat and recomputes wounded and injured status (Move and Hit changes per R-7.3). Used by T-PF.15.
- **groupActivation**: after an operative is expended, constrain the owner's next activation decision to ready operatives with a given keyword (if any exist) before play passes, with a no-chain flag on the follow-up activation. Used by T-PF.16.
- **shootTargetRedirect**: a defender firefight-ploy window right after the shooter fixes its target that replaces the target with one of the defender's own operatives, bypassing validity, Range and visibility checks, recomputing cover and obscured as (original target's status AND the new target's own), and blocked for Blast and Torrent weapons. Used by T-PF.37.
- **retaliateWithRanged**: fight-sequence support for a retaliator using a ranged weapon profile as its melee weapon: suppression of named weapon rules for the sequence, removal of the retaliator's block option, and an optional swap so the defender resolves first. Used by T-PF.38.
- **movePenaltyAura**: a movement-cost hook that, during an enemy's move action (not Dash), detects the first increment point that is visible to and within 6" of a source operative, adds a one-off distance surcharge (2") to that action's budget and suppresses Obstructing and Accessible extras for the rest of the action; the surcharge counts against counteract and other move caps. Used by T-PF.25.
- **actionBanStatus**: a timed status on an operative (owned by either side) that removes a named universal action (Dash) from its legal actions, free versions included, until the end of its next activation. Used by T-PF.41.

### 3.10 Gotchas

- PDF wins over Wahapedia in these places. RULING: Photon Grenade | on 3+ the target also cannot Dash | the August '26 PDF errata adds this; Wahapedia omits it | Corrected. RULING: Marksman rail rifle (dart round) Dmg | 3/4 | the PDF text layer prints 3/4; Wahapedia prints 3/3 | Corrected. RULING: Weapons Expert loadout | ion rifle or rail rifle, each with gun butt, no fists | Wahapedia adds "fists" to the Weapons Expert entry; the PDF and the datacard show gun butt only | Corrected. RULING: Drone Controller melee weapon | named Gun butt (3, 5+, 2/3) | Wahapedia calls it Fists with the same stats; PDF wins, numbers identical | Corrected. RULING: MEDIKIT and PULSE ACCELERATOR cost | 1 AP each | Wahapedia drops the number ("AP"); the PDF prints 1AP | Corrected.
- This is not the 2021 Pathfinders: tokens are never spent, there is no guided or "markerlight-assisted" shooting through another operative, no ballistic-skill markerlight table with re-roll ones, no Art of War options beyond Mont'ka and Kauyon, and the rail rifle has no Heavy. Distances are inches, not shapes.
- Token benefits are read off the target, by the shooter's team; they apply to every friendly PATHFINDER shooting (drones included), not only to the operative that placed them. Each token row is cumulative, and row 2's Hit improvement is capped at 3+, so it does nothing for the Shas'ui carbine, the suppressed carbine, the fusion grenade or the Marksman.
- Seek Light and Seek from tokens change valid-target selection. A Conceal enemy in Light cover with 4 tokens becomes targetable; its cover save still applies unless Saturate (row 1) removes it, which it always does here.
- Token decay is once per enemy activation and only inside activations; a counteracting enemy that Repositions keeps all its tokens. Grappling Hook (T-KOM.17) is treated as Reposition, so it does remove a token.
- Drones are full operatives for kill op, starting counts, crit op control (with the -1 APL control offset) and counteract. Do not treat them as Expendable. They can take Conceal. Only the MB3 and MV1 can Shoot; MV4, MV7, MV31 and MV33 have only a Ram.
- Remote Pilot lifts only the Drone action whitelist, not "has this action on its card" (no Markerlight for MV4) nor normal conditions (no Shoot from inside an enemy's CR). Its 2" cap uses full distance modifiers like counteract.
- Medic! fires at "would be incapacitated", before any "when incapacitated" rules and before removal; it cannot save drones or itself, and not when either operative is in an enemy's CR (so it almost never works against melee).
- Group Activation is mandatory, not optional, when another Shas'la is ready.
- Saviour Protocols is the defender's ploy used during the enemy's activation; the replacement drone need not be visible to or in range of the shooter.
- Point-Blank Fusillade's resolve-first clause needs the retaliator to be ready (not yet activated this TP), on Engage and using a pulse weapon; otherwise the attacker still resolves first.
- Photon Grenade's Move reduction stacks with injury but Move never drops below 4" (R-9.6). It is limited once per TP for the whole team, not per operative.
- Art of War is a STRATEGIC GAMBIT, so it follows R-2.3 alternation and needs the Shas'ui in the killzone at that moment; if the Shas'ui is incapacitated, neither option is available that TP.
- Mont'ka and Drone Controller stack on drones (6" +1" +2" = 9"); Dash stays 3" and Charge adds 2" to the modified Move.
- The burst cannon is Heavy (Reposition only): the MB3 may Reposition and shoot it, but not Dash, Charge or Fall Back in that activation. The ion rifle overcharge Hot uses the current Hit, including the token improvement (4+ improved to 3+ means Hot only triggers on 1 or 2).
- Kauyon's free Markerlight still counts as the operative's Markerlight for the activation; the operative cannot then perform a paid Markerlight too, and a Silent Shoot in the same activation (the Blooded's suppressed pulse carbine) is bound to the same target.

### 3.11 Engine map

| Survey capability | Built as |
|---|---|
| operativeTokens (Markerlight, cap 4, decay) | `tokens.ts` (`kind: 'pf.markerlight'`, `cap: 4`); decay from an `action.ended` handler on the token holder's move actions inside its activation (once per activation: a per-operative TP ledger keyed by activation) |
| tokenKeyedShootRules | team-hook: `modifyWeaponRules` (Saturate, Balanced, Seek Light, Seek by the target's count), `modifyAttackDice` (Hit improvement capped at 3+), `target.status` (no obscured at 3+), `beforeShootTargetSelect` (add a Conceal-in-Light-cover candidate that Seek Light from its own count makes valid) |
| delegatedFreeAction (Remote Pilot) | `startDelegatedAction` with `maxMove: 2` and `tag: 'remotePilot'`; the Drone whitelist provider reads the frame tag to lift itself |
| controlAplOffset (Drone -1) | provider `controlApl` |
| incapacitationIntercept (Medic!) | attack hook `beforeIncapacitated` (set `wounds: 1`; always taken, see the Medic! ruling) plus `onDamageInflicted` floor for the rest of the action; the free Dash afterwards via `startFreeAction({ action: 'dash', endWithinCrOf: medicId })` from an `action.ended` handler |
| regainWounds (Medikit) | `effects.regainWounds` |
| groupActivation (Shas'la) | provider `chainActivation` |
| shootTargetRedirect (Saviour Protocols) | firefight ploy at `shoot.targetSelected` calling `redirectAttack(ctx, droneId, status)` with the AND of both verdicts |
| retaliateWithRanged (Point-Blank Fusillade) | providers `extraFightWeapons` and `fightResolveStart` (`first`, `noBlock`), `modifyWeaponRules` to strip Devastating, Piercing and Torrent |
| movePenaltyAura (Grav-inhibitor) | provider `moveSurcharge` (+2" once when a path point is visible to and within 6"; return `2 - breakdown.accessible` to cancel the Accessible extra) |
| actionBanStatus (Photon Grenade) | a token plus provider `actionForbidden('dash')` (free Dashes check it too) and provider `moveDelta` (-2") |
| Mont'ka / Drone Controller Move | provider `moveDelta` |
| Kauyon free Markerlight, 0 CP ploys | offer seed `cost: 0` in the code hook's `offers` |

### 3.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/pathfinders/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `pf.<name>`, `pf.w.`, `pf.a.`, `pf.p.`, `pf.e.`)
  - `src/engine/teams/pathfinders.ts` (code hooks, `registerTeamRules`, hook handlers)
  - `src/client/teams/pathfinders.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins)
  - `tests/engine/teams/pathfinders.test.ts` (TEAM-PF-nnn tests) and `tests/engine/teams/pathfinders.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 3 and `12-rules-test-checklist.md` section TEAM-PF (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/pathfinders/team.json`. Flip it (with `defaults` filled and every weapon in `src/client/teams/pathfinders.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. Markerlight decay and token benefits are the core of the
  team; write their tests first (TEAM-PF-002, TEAM-PF-004).
- RULING lines expected (already logged by the prep, refine if the data work changes them): Kauyon
  scope, Art of War frequency, Remote Pilot scope and linking, Medic! always taken, Grav-inhibitor
  surcharge, Shoot/Markerlight link with Blast or Torrent, Suppressing Fire test, Supporting Fire and
  Torrent, Saviour Protocols cover, TAO timing, OSU and the Shoot link, the five PDF-wins Corrected lines.
- Gotchas: section 3.10. Drones are full operatives (kill op, Conceal, counteract): no `killOpIgnored`.
  Markerlight tokens are read off the target by every friendly Pathfinder, not only the placer. The MB3
  is `weights: { "pf.mb3-recon-drone": 2 }`. Photon Grenade blocks free Dashes too.

## 4. Hierotek Circle

Rule IDs `T-HIE.<n>`, checklist IDs `TEAM-HIE-<nnn>`. Sources: the team PDF extract with its update log at the August 2026 state (authoritative; flow variant for text, layout variant for tables), cross-checked against the Wahapedia copy (labelled August 2026, but in four places it matches older card text rather than the PDF update log; see 4.9). All rule text is restated in our own words. Team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y) and `11-missions.md` (M-x.y). Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

Each rule line below is followed by `MECH: <engine mechanic> | CLASS: data | team-hook | generic:<capability>`. Generic capabilities are defined in 4.8.

### 4.1 Team selection

- T-HIE.1 The roster is exactly 8 operatives: 1 CRYPTEK leader (T-HIE.2), 1 PLASMACYTE ACCELERATOR, 1 PLASMACYTE REANIMATOR, and 5 from the main list (T-HIE.3). Kill op starting operatives = 8.
  - MECH: roster validator: slot counts 1/1/1/5, total 8 | CLASS: data
- T-HIE.2 Leader list (pick one): CHRONOMANCER (pick one loadout: aeonstave, or entropic lance; each choice brings that weapon's ranged and melee profiles), PSYCHOMANCER (abyssal lance, both profiles), TECHNOMANCER (staff of light, both profiles). The picked operative is "your CRYPTEK operative" for T-HIE.20.
  - MECH: leader slot with per-operative loadout options; record `cryptekType` on the roster for Apprentek Assistance | CLASS: data
- T-HIE.3 Main list (five picks): APPRENTEK, DEATHMARK, IMMORTAL DESPOTEK (gauss blaster or tesla carbine, plus bayonet), IMMORTAL GUARDIAN (gauss blaster or tesla carbine, plus bayonet). DEATHMARK and GUARDIAN may be taken any number of times; APPRENTEK and DESPOTEK at most once each. Plasmacytes are not on this list (they have their own fixed slots).
  - MECH: repeatable flags on DEATHMARK and GUARDIAN, max-1 on the rest; loadout option per Immortal | CLASS: data
- T-HIE.4 Archetypes: RECON, SECURITY (tac ops are out of scope for v1).
  - MECH: roster metadata only | CLASS: data
- T-HIE.5 Keyword groups used by rules: CRYPTEK = Chronomancer, Psychomancer, Technomancer; IMMORTAL = Despotek, Guardian; PLASMACYTE = Accelerator, Reanimator. Every operative carries HIEROTEK CIRCLE and NECRON. MEDIC (Reanimator) has no effect in this team's rules or our core. No operative counts as two selections or as half a selection. LEADER is the Cryptek only (the Despotek is not a leader).
  - MECH: keyword arrays on datacards; no roster weighting | CLASS: data

### 4.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| CHRONOMANCER | 3 | 6" | 3+ | 14 | 40 | HIEROTEK CIRCLE, NECRON, LEADER, CRYPTEK, CHRONOMANCER |
| PSYCHOMANCER | 3 | 6" | 3+ | 14 | 40 | HIEROTEK CIRCLE, NECRON, LEADER, CRYPTEK, PSYCHOMANCER |
| TECHNOMANCER | 3 | 6" | 3+ | 14 | 50 | HIEROTEK CIRCLE, NECRON, LEADER, CRYPTEK, TECHNOMANCER |
| PLASMACYTE ACCELERATOR | 2 | 7" | 5+ | 5 | 25 | HIEROTEK CIRCLE, NECRON, PLASMACYTE, ACCELERATOR |
| PLASMACYTE REANIMATOR | 2 | 7" | 5+ | 5 | 25 | HIEROTEK CIRCLE, NECRON, MEDIC, PLASMACYTE, REANIMATOR |
| APPRENTEK | 3 | 6" | 3+ | 11 | 32 | HIEROTEK CIRCLE, NECRON, APPRENTEK |
| DEATHMARK | 2 | 5" | 3+ | 10 | 32 | HIEROTEK CIRCLE, NECRON, DEATHMARK |
| IMMORTAL DESPOTEK | 2 | 5" | 3+ | 11 | 32 | HIEROTEK CIRCLE, NECRON, IMMORTAL, DESPOTEK |
| IMMORTAL GUARDIAN | 2 | 5" | 3+ | 10 | 32 | HIEROTEK CIRCLE, NECRON, IMMORTAL, GUARDIAN |

UNCLEAR (resolved): in the flow extract the Plasmacyte Reanimator and Immortal stat blocks are split from their names and the weapon rows are run together on one line ("4 3+ 4/5 5 3+ 3/3 4 3+ 3/4"); resolved from the layout extract column positions and confirmed by Wahapedia. UNCLEAR (resolved): the Reanimator base (25) is printed after "rules continue on other side"; it matches the Accelerator and Wahapedia's 25mm for Plasmacytes.

### 4.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Aeonstave (ranged) | R | 5 | 3+ | 3/3 | Blast 2", Lethal 5+, Stun, Magnify | Chronomancer (aeonstave option) |
| Aeonstave (melee) | M | 4 | 4+ | 3/4 | Lethal 5+, Shock | Chronomancer (aeonstave option) |
| Entropic lance (ranged) | R | 4 | 3+ | 5/3 | Devastating 3, Piercing 1, Magnify | Chronomancer (entropic lance option) |
| Entropic lance (melee) | M | 4 | 4+ | 3/6 | none | Chronomancer (entropic lance option) |
| Abyssal lance (ranged) | R | 5 | 3+ | 2/2 | Blast 2", 2" Devastating 1, Piercing 2, Magnify | Psychomancer |
| Abyssal lance (melee) | M | 4 | 4+ | 4/4 | Devastating 1 | Psychomancer |
| Staff of light (ranged) | R | 6 | 3+ | 3/4 | Rending, Magnify | Technomancer |
| Staff of light (melee) | M | 4 | 4+ | 3/5 | Rending | Technomancer |
| Arcane conduit (ranged) | R | 4 | 3+ | 4/5 | Piercing 1, Magnify | Apprentek |
| Arcane conduit (melee) | M | 3 | 4+ | 3/5 | none | Apprentek |
| Spark | R | 4 | 4+ | 2/3 | Range 4", Piercing 1 | Plasmacyte Accelerator |
| Atomiser beam | R | 4 | 4+ | 3/4 | Range 6", Lethal 5+ | Plasmacyte Reanimator |
| Claws | M | 3 | 5+ | 1/2 | none | Plasmacyte Accelerator, Plasmacyte Reanimator |
| Synaptic disintegrator | R | 4 | 2+ | 4/3 | Devastating 2, Heavy (Dash only), Piercing 1, Severe | Deathmark |
| Fists | M | 3 | 3+ | 3/4 | none | Deathmark |
| Gauss blaster | R | 4 | 3+ | 4/5 | Piercing 1 | Despotek, Guardian (option) |
| Tesla carbine | R | 5 | 3+ | 3/3 | 2" Devastating 1 | Despotek, Guardian (option) |
| Bayonet | M | 4 | 3+ | 3/4 | none | Despotek, Guardian |

Notes: crit Dmg lower than normal Dmg on the entropic lance (ranged) and synaptic disintegrator is printed that way in both sources; the Devastating x carries the crit. "2" Devastating 1" is the core distance form (R-10.6): it also hits every other operative, friend or foe, visible to and within 2" of the target. Magnify is a team-local weapon rule, T-HIE.28.

UNCLEAR (resolved): the abyssal lance (ranged) cell reads "Blast 2", 2" Devastating 1, Piercing 2" in both extracts and Wahapedia; resolved as two separate rules, Blast 2" and 2" Devastating 1.

### 4.4 Operative rules and unique actions

- T-HIE.6 **INTERSTITIAL COMMAND** (each CRYPTEK, and the Apprentek via T-HIE.20; 1 AP, SUPPORT): pick one other friendly HIEROTEK CIRCLE operative that is not APPRENTEK or CRYPTEK and is either visible to and within 6" of this operative, or visible to and within 6" of a friendly DESPOTEK that is itself visible to this operative. The picked operative may at once perform one 1 AP action for free. During that free action it may not move more than 2" nor be set up more than 2" away; it may not pick an action it has already performed this TP; and having done it, it cannot perform that same action again this TP. Not allowed in an enemy's CR or while counteracting.
  - MECH: offer a `delegatedFreeAction` to the picked operative (1 AP after modifiers, counteract-style 2" cap, per-TP action history check and write) | CLASS: generic:delegatedFreeAction
  - RULING: Interstitial Command "1 AP action" | an action whose cost after modifiers is exactly 1 AP, as for counteract (R-3.12); a Plasmacyte's 1 AP Fall Back, the Reanimator's 1 AP Reanimate and another operative's own Interstitial Command qualify | same wording as counteract; nothing in the text bars nesting | Unsourced
  - RULING: Interstitial Command and enemy guards | the free action is treated as an action of the current friendly activation, so an enemy on guard may interrupt after it ends, with the picked operative as the operative that ended the action | R-4.10 keys on an action ending during an enemy activation | Unsourced
  - RULING: Comms Device on Interstitial Command | both 6" distances (from this operative and from the relay DESPOTEK) gain 3" when this operative controls the Comms Device | both are SUPPORT distances naming friendly operatives (M-5.1) | Unsourced
- T-HIE.7 **INTERSTITIAL COMMAND** (Immortal Despotek; 1 AP, SUPPORT): as T-HIE.6 but only measured from the Despotek itself (no relay clause), and the free action may not be Accelerate. Not in an enemy's CR or while counteracting.
  - MECH: same `delegatedFreeAction`, actor DESPOTEK, action filter excludes ACCELERATE | CLASS: generic:delegatedFreeAction
- T-HIE.8 **TIMESPLINTER** (Chronomancer; 1 AP): pick one other friendly HIEROTEK CIRCLE operative that is expended and visible to and within 5" of this operative. Remove it and set it up again anywhere it can legally be placed that is visible to and within 5" horizontally of this operative. Not in an enemy's CR, not in TP1, and only once per TP across the whole team (a friendly operative already did it this TP blocks it, including the Apprentek). Not a SUPPORT action (the August 2026 log deleted the keyword), so the Comms Device and Cortical Control do not apply to it.
  - MECH: `relocateFriendly` on an expended friendly; placement within 5" horizontal and visible to the actor; team TP ledger `timesplinterUsed` | CLASS: generic:relocateFriendly
  - RULING: Timesplinter placement and enemy CR | the set-up may end within an enemy's control range | the action names no CR restriction and "a location it can be placed" is only physical legality (core Move wording) | Unsourced
  - RULING: Timesplinter SUPPORT keyword | not SUPPORT; the leftover Comms Device note on the card has no effect | the August 2026 log entry deletes SUPPORT and the PDF card body and Wahapedia both omit it; an older log entry that printed SUPPORT is superseded | Confirmed
- T-HIE.9 **COUNTERTEMPORAL NANOMINE** (Chronomancer; 1 AP): place your single Nanomine marker within 8" of this operative, either visible to it or on Vantage terrain of a terrain feature visible to it. While an enemy operative is within 4" of the marker, its Move stat is 2" lower. Remove the marker when this operative next activates, when it is incapacitated, or when a friendly operative performs this action again (whichever is first). Not in an enemy's CR.
  - MECH: placed marker with an enemy aura (Move -2" within 4", floor 4" per R-9.6) and the standard source-lifetime expiry | CLASS: generic:markerAuras
  - RULING: when the Nanomine Move penalty is checked | at the start of each move action of an enemy operative (Move sets that action's distance); leaving the 4" mid-move does not refund distance | Move is read once per move action | Unsourced
- T-HIE.10 **CHRONOMETRON** (Chronomancer; 1 AP, SUPPORT): pick one friendly HIEROTEK CIRCLE operative (may be itself) visible to and within 6". Until this operative's next activation starts, until this operative is incapacitated, or until a friendly operative performs this action again (whichever is first), any operative's weapons have 1 less Atk while it is shooting, fighting or retaliating against the picked operative. Not in an enemy's CR.
  - MECH: `operativeTokens` CHRONOMETRON on the picked friendly; attacker weapon Atk -1 when the defender holds the token (applies per sequence, so a Blast secondary holding it is also covered) | CLASS: generic:operativeTokens
  - RULING: Chronometron scope | the Atk penalty applies to shooting, fighting and retaliating against the picked operative | the PDF update log rewrote the effect to cover all three; the PDF card body and Wahapedia still say shooting only; the brief records this as a PDF-wins item | Corrected
  - RULING: Atk floor | a weapon's Atk is never reduced below 1 | no source gives a floor; Atk 0 would erase the attack | Unsourced
- T-HIE.11 **HARBINGER OF DESPAIR** (Psychomancer; 1 AP): place your single Despair marker visible to this operative, or on Vantage terrain of a terrain feature visible to it (no distance limit). While an enemy operative is within 2" of it: Pick Up Marker and mission actions cost that operative 1 extra AP; and when control of a marker is worked out, the opponent's contesting APL total for that marker is 1 lower if any of their contesting operatives is within 2" of the Despair marker (a total modifier, not an APL change, so it stacks with APL changes and with Steadfast-style overrides). Removed with the standard source-lifetime expiry (this operative's next activation, its incapacitation, or a friendly operative repeating the action). Not in an enemy's CR.
  - MECH: placed marker with enemy aura (action cost +1 for PICK_UP and mission actions within 2") plus a control-total modifier | CLASS: generic:markerAuras
- T-HIE.12 **NIGHTMARE SHROUD** (Psychomancer; 1 AP): until this operative's next activation, its incapacitation, or a friendly repeat (whichever first): whenever an enemy operative within 4" of this operative is shooting, fighting or retaliating, the opponent cannot re-roll attack dice (any source, including Balanced, Ceaseless, Relentless and Command Re-roll) and cannot retain any result below 6 as a crit (blocks Lethal, Rending, Severe and similar). Not in an enemy's CR.
  - MECH: aura token on the performer; in the attack sequence, if attacker is an enemy within 4" of the token holder, disable attacker re-rolls and set crit threshold to 6 with conversions barred (reuse the AoD Tilting Shields crit clamp) | CLASS: generic:operativeTokens
- T-HIE.13 **VISION OF MADNESS** (Psychomancer; 1 AP): pick one enemy operative visible to this operative; it gains your Madness token until this operative's next activation, its incapacitation, or a friendly repeat (whichever first). Whenever the opponent would activate the token holder, you may roll one D6: if the roll is equal to or higher than that operative's current APL, it cannot be activated this time and the opponent must pick another operative. When the holder does activate, or when no other enemy operative is eligible to activate, remove the token. Not in an enemy's CR.
  - MECH: enemy `operativeTokens` MADNESS plus an activation gate decision for the token's owner when the opponent selects that operative | CLASS: generic:activationGate
  - RULING: Madness with no alternative | if the opponent has no other ready operative, no roll is offered, the token is removed and the activation proceeds | the token's removal clause covers this case | Unsourced
  - RULING: Madness and counteract | a counteraction is not an activation, so Madness never blocks it | core R-3.12 | Confirmed
  - RULING: "until it's incapacitated" on Psychomancer and Technomancer actions | "it" is the performing operative | the clause sits in the same list as "this operative's next activation" | Unsourced
- T-HIE.14 **CANOPTEK REPAIR** (Technomancer; 1 AP, SUPPORT): pick one friendly HIEROTEK CIRCLE operative (may be itself) visible to and within 6"; it regains up to 2D3 lost wounds. Not in an enemy's CR, and only once per TP across the whole team.
  - MECH: `regainWounds` 2D3 capped at starting wounds; team TP ledger `canoptekRepairUsed` | CLASS: generic:regainWounds
- T-HIE.15 **AUGMENT WEAPON** (Technomancer; 1 AP, SUPPORT): pick one friendly HIEROTEK CIRCLE operative (may be itself) visible to and within 6", then one weapon on its datacard, then two of Lethal 5+, Rending, Saturate, Severe; that weapon has both until this operative's next activation, its incapacitation, or a friendly repeat. For staff of light or arcane conduit, pick only one profile (ranged or melee) to receive them; other multi-profile weapons get the rules on every profile (R-9.8). Equipment weapons (grenades) are not on a datacard and cannot be picked. Not in an enemy's CR.
  - MECH: ability.choice (operative, weapon or profile, two rules) then a weapon-rule grant held as a source-lifetime token | CLASS: generic:operativeTokens
- T-HIE.16 **REINFORCE METAL** (Technomancer; 1 AP, SUPPORT): pick one friendly HIEROTEK CIRCLE operative (may be itself) visible to and within 6". Until this operative's next activation, its incapacitation, or a friendly repeat: each attack die that would inflict 3 or more damage on the picked operative inflicts 1 less. Devastating damage is not attack-die damage (R-5.15) and is not reduced. Not in an enemy's CR.
  - MECH: source-lifetime token; per-die damage hook `dmg >= 3 ? dmg - 1 : dmg` on the holder | CLASS: generic:operativeTokens
- T-HIE.17 **Scuttler** (both Plasmacytes): (a) while it has a Conceal order and is in cover it can never be selected as a valid target, beating Seek, Vantage and every other rule, except by a shooter within 2" of it; (b) Fall Back costs it 1 less AP; (c) it can only use the weapons on its datacard and can perform no unique action except its own (Accelerate or Reanimate), which also bars equipment unique actions such as grenades.
  - MECH: target-validity filter (reuse Kommandos Sneaky Zogger with a Conceal condition), Fall Back cost -1, weapon whitelist and unique-action whitelist (reuse Stoopid) | CLASS: team-hook
- T-HIE.18 **ACCELERATE** (Plasmacyte Accelerator; 1 AP): pick one friendly DEATHMARK or IMMORTAL operative visible to and within 6"; +1 APL until the end of that operative's next activation (applies now if it is mid-activation, R-3.15; capped by R-9.6). Not SUPPORT, so no Comms Device extension and no Cortical Control. Not in an enemy's CR.
  - MECH: support APL boost with keyword filter DEATHMARK|IMMORTAL | CLASS: data
- T-HIE.19 **REANIMATE** (Plasmacyte Reanimator; 1 AP or 2 AP): pick one of your Reanimation markers visible to and within 6". For 1 AP roll one D6 and on 3+ the operative tied to that marker is REANIMATED (T-HIE.26); for 2 AP it is REANIMATED with no roll. If the returning operative had already been expended earlier this TP it is set up expended; otherwise it is set up ready and can still activate this TP. Not in an enemy's CR.
  - MECH: unique action with two cost variants feeding `reanimation.reanimate(markerId, {expendedIfAlreadyActivated: true})` | CLASS: generic:reanimation
  - RULING: Reanimate with no legal set-up spot | the action resolves as a failed roll: AP spent, marker stays | T-HIE.26 says to treat an impossible set-up as a 1-2 roll; the engine should not offer the 2 AP variant (AI and UI) when no spot exists | Unsourced
- T-HIE.20 **Apprentek Assistance** (Apprentek): it has every unique action of the CRYPTEK picked for this battle, but can perform at most one of those Cryptek unique actions per TP. When it performs one, every "this operative" reference (distances, visibility, expiry on next activation or incapacitation) means the Apprentek. A team-wide once-per-TP limit (Timesplinter, Canoptek Repair) and the "performed again by a friendly operative" expiry are shared with the Cryptek. It is not a CRYPTEK for any other rule (Phase Shifter, Tesseract Cube, Command Underlings first option).
  - MECH: copy the roster Cryptek's unique-action list onto the Apprentek's action offers; per-operative TP counter capped at 1 | CLASS: team-hook
- T-HIE.21 **Deathmarked** (Deathmark): when this operative finishes a Shoot action, the target (the primary target if there were several) gains your Deathmarked token if it was not incapacitated. Tokens last for the battle. While any friendly HIEROTEK CIRCLE DEATHMARK is shooting an enemy that holds a Deathmarked token, its ranged weapons have Seek (applied when that target's validity is checked).
  - MECH: permanent enemy `operativeTokens` DEATHMARKED; weapon-rule grant Seek filtered on shooter keyword DEATHMARK and target token | CLASS: generic:operativeTokens
- T-HIE.22 **MULTI-DIMENSIONAL VISION** (Deathmark; 1 AP): until the start of this operative's next activation, enemies it shoots cannot be obscured. Not in an enemy's CR.
  - MECH: reuse the AoD OPTICS effect (T-AOD.14) | CLASS: data
- T-HIE.23 **Steadfast** (Despotek, Guardian): when control of a marker is worked out, you may count this operative's APL as 3, ignoring all changes to its APL for this purpose. Total modifiers such as Terror or Despair still apply to the summed total afterwards (designer's commentary).
  - MECH: control-total APL override per operative, `max(currentAPL, 3)` chosen automatically | CLASS: generic:controlModifiers

### 4.5 Faction rules

- T-HIE.24 **REANIMATION PROTOCOLS: marker.** The first time in the battle that each friendly HIEROTEK CIRCLE operative is incapacitated, before it is removed, place one of your Reanimation markers within its control range, tied to that operative. Then remove the operative as incapacitated and clear every token and rules effect it held (enemy tokens and effects on it, friendly tokens such as Chronometron on it, APL changes). An operative incapacitated a second time places no marker and is gone for good.
  - MECH: on incapacitation (after "before removal" rules), if `!op.reanimationUsed`: place marker tied to op, move op to a set-aside pool (not in the killzone, counts as incapacitated), strip its tokens and effects | CLASS: generic:reanimation
  - RULING: what incapacitation clears | tokens and timed effects on the operative are cleared; ledgers are kept (counteract used this TP, per-TP action history, Apprentek's once-per-TP count, team limits) | the rule's examples are all tokens or stat effects; ledgers are not effects it had | Unsourced
- T-HIE.25 **REANIMATION PROTOCOLS: Ready step roll.** In each Strategy phase's Ready step, after Living Metal: pick one of your Reanimation markers and roll one D6. On 1-2 the marker stays; pick a different marker and repeat. On 3+ that marker's operative is REANIMATED and no more markers are tried this TP. Each marker can be picked at most once per TP. So at most one Ready-step return per TP.
  - MECH: Ready-step trigger: owner orders markers (ability.choice), loop D6 until one 3+ or markers exhausted | CLASS: generic:readyStepTriggers
- T-HIE.26 **REANIMATION PROTOCOLS: REANIMATED.** Set up the tied operative (no longer incapacitated) within 3" of its marker and not within control range of any enemy operative; if that is impossible, treat the roll as 1-2 instead. It has 1 wound, takes an order of your choice, and is ready (except T-HIE.19's expended case). Remove the marker.
  - MECH: `reanimation.reanimate`: placement search within 3" of marker, outside enemy CRs; wounds = 1; order choice decision; ready/expended flag | CLASS: generic:reanimation
  - RULING: "within 3" of the marker" | any part of the base within 3" (not wholly) | core "within" (R-8.3) | Confirmed
- T-HIE.27 **REANIMATION PROTOCOLS: kill op.** A REANIMATED operative is no longer incapacitated, so the opponent's kill grade can fall and they lose the matching kill op VP. VP from other sources already scored are untouched.
  - MECH: kill op VP is derived from the current count of incapacitated enemy operatives every time it is read, not accumulated from events; emit a `KillGradeLowered` event | CLASS: generic:reanimation
- T-HIE.28 **MAGNIFY** (team-local weapon rule; on aeonstave (ranged), entropic lance (ranged), abyssal lance (ranged), staff of light (ranged), arcane conduit (ranged)): when this operative performs a Shoot action with this weapon, the target is visible to this operative, and another friendly HIEROTEK CIRCLE APPRENTEK or CRYPTEK with an Engage order, not within an enemy's control range, is visible to this operative, you may use that other operative (the "proxy") as the active operative for picking a valid target, for the Shoot action's conditions, and for cover and obscured. If you do, the weapon also has Ceaseless for the rest of the action. Everything else (distance-based rules such as Relentless Onslaught, Blast secondaries from the primary, Devastating, Heavy) still uses the real shooter. Distance checks inside cover or obscured rules (the 2" in-cover exemption, smoke's 2", other teams' "within 3"" obscuring) use the proxy (designer's commentary on smoke and Call the Storm).
  - MECH: Shoot offer gains an optional proxy choice; target validity, Shoot conditions, cover and obscured run from the proxy's position; grant Ceaseless on use | CLASS: generic:proxyShooter
  - RULING: Magnify and the Shoot action's conditions | the proxy also supplies the Shoot action's conditions, so a Cryptek or Apprentek with a Conceal order or inside an enemy's CR may Shoot with a Magnify weapon through a valid proxy; keep this behind a data flag `magnifyConditionsFromProxy` (default on) | the PDF update log rewrote Magnify to add "that Shoot action's conditions"; the PDF faction-rule card body and Wahapedia omit it; same precedence as Chronometron (T-HIE.10) | Corrected
  - RULING: Magnify and Guard | an operative on guard may interrupt with a Magnify Shoot, but no point-blank shot exists in our engine, so the commentary forbidding point-blank shots through Magnify needs no code | close-quarters rules are out of scope | Confirmed
- T-HIE.29 **LIVING METAL.** In each Strategy phase's Ready step, before every other faction rule in that step (Reanimation Protocols included), each friendly HIEROTEK CIRCLE operative in the killzone regains up to D3+1 lost wounds, rolled separately per operative.
  - MECH: Ready-step trigger, priority first; `regainWounds` D3+1 each, capped at starting wounds | CLASS: generic:regainWounds
  - RULING: Ready-step order for this team | Living Metal, then Reanimation Protocols, then CP gain (with Tesseract Cube), then ready all operatives | Living Metal states it is first; Tesseract Cube's "hasn't been REANIMATED this TP" clause only means something if reanimation can precede the CP gain; core R-2.2 puts CP gain before readying | Unsourced

### 4.6 Ploys and equipment

All ploys cost 1 CP. Rows are written as pipe lines (`T-id | Ploy | Type | Timing | Effect`) so each can carry its MECH line; each still becomes one JSON record.

UNCLEAR (resolved): no CP cost is printed on any ploy in the extract or Wahapedia; resolved as the standard 1 CP (R-2.4).

- T-HIE.30 | **RELENTLESS ONSLAUGHT** | Strategy | Gambit step | For the TP, when a friendly HIEROTEK CIRCLE operative shoots an operative within 8" of it, its ranged weapons have Balanced. With Magnify the 8" is from the real shooter, not the proxy.
  - MECH: weapon-rule grant Balanced, filter ranged and shooter-to-target distance <= 8" | CLASS: data
- T-HIE.31 | **UNDYING ANDROIDS** | Strategy | Gambit step | For the TP, when an operative shoots a friendly HIEROTEK CIRCLE operative and you cannot retain any cover save, you may retain one defence die as a normal success without rolling it.
  - MECH: defence auto-retain 1 normal, condition: no cover save is available (not in cover, Saturate, or any other denial) | CLASS: data
  - RULING: "cannot retain any cover saves" | true when the target is not in cover or a rule bars cover saves (Saturate, Siege Specialist-style rules); a target in cover that simply declines its cover save does not qualify | "cannot" describes a rules state, not a choice | Unsourced
- T-HIE.32 | **METHODICAL ELIMINATION** | Strategy | Gambit step | For the TP, friendly HIEROTEK CIRCLE melee weapons have Accurate 1; they have Accurate 2 instead while fighting in an activation in which the operative has not moved more than its Move stat in total, or while retaliating.
  - MECH: weapon-rule grant Accurate 1 or 2 by condition; needs the total distance moved this activation | CLASS: generic:activationMoveDistance
- T-HIE.33 | **COMMAND UNDERLINGS** | Strategy | Gambit step | Pick one (both SUPPORT): (a) every other friendly HIEROTEK CIRCLE operative visible to and within 6" of a friendly CRYPTEK may perform a free Dash at once, in an order you choose; (b) every other friendly HIEROTEK CIRCLE operative except CRYPTEK visible to and within 3" of a friendly APPRENTEK may do the same. Normal Dash conditions apply.
  - MECH: ability.choice of option, eligible set fixed at use, then sequential free Dash offers (reuse Kommandos SSSSHHHH) | CLASS: team-hook
  - RULING: Comms Device on Command Underlings | +3" to the option's distance if the referenced Cryptek or Apprentek controls the Comms Device | the ploy options are SUPPORT and measure from that operative (M-5.1) | Unsourced
- T-HIE.34 | **CORTICAL CONTROL** | Firefight | A friendly APPRENTEK or CRYPTEK performs a SUPPORT unique action | Until that action ends, its selection of another friendly operative ignores distance; only visibility is required (both distance clauses of Interstitial Command). Does not apply to Timesplinter (not SUPPORT) or to the Despotek's Interstitial Command.
  - MECH: firefight ploy window at SUPPORT unique-action target selection; drops distance from the target filter | CLASS: team-hook
- T-HIE.35 | **REANIMATED FUNCTION** | Firefight | When control of a marker is being worked out | Pick one of your Reanimation markers; until the next TP starts, it counts as a friendly HIEROTEK CIRCLE operative with APL 1 for control purposes.
  - MECH: virtual contestant for marker control tied to a Reanimation marker; expires at next TP start or when the marker is removed | CLASS: generic:controlModifiers
  - RULING: Reanimated Function timing and reach | offered at the start of each friendly activation and at the end of the Firefight phase before scoring; the Reanimation marker contests any objective marker within 1" of it, edge to edge, visibility ignored | a marker has no head to check visibility from; control is evaluated between actions (R-8.6) | Unsourced
- T-HIE.36 | **LIVING LIGHTNING** | Firefight | A friendly HIEROTEK CIRCLE IMMORTAL performs a Shoot action and selects a tesla carbine | Until that action ends, the carbine loses the 2" from its Devastating (plain Devastating 1) and gains Blast 2".
  - MECH: profile override for the action: replace `2" Devastating 1` with `Devastating 1`, add `Blast 2"` | CLASS: data
- T-HIE.37 | **DIMENSIONAL AMBUSH** | Firefight | During a friendly HIEROTEK CIRCLE DEATHMARK's activation while it has a Conceal order | In that activation it may perform Guard despite its Conceal order (and in any killzone). When it uses the free Shoot or Fight of the interrupt, its order first changes to Engage; that change does not end the guard before the interrupt resolves.
  - MECH: lift the Conceal condition on GUARD for this operative this activation; on interrupt, set order Engage then resolve the free action | CLASS: team-hook

Faction equipment (pipe lines `T-id | Equipment | Effect`, one JSON record each):

- T-HIE.38 | **MAGNIFICATION CONDUITS** | Once per TP, when a friendly HIEROTEK CIRCLE APPRENTEK or CRYPTEK performs a Shoot action, pick another friendly HIEROTEK CIRCLE operative that is not PLASMACYTE, has an Engage order, is not within an enemy's control range and is visible to the shooter; for that action it may serve as the Magnify proxy (T-HIE.28) even though it is not an Apprentek or Cryptek.
  - MECH: widens the `proxyShooter` eligible set once per TP; team TP ledger | CLASS: team-hook
- T-HIE.39 | **PHASE SHIFTER** | Once per TP, when an operative shoots a friendly CRYPTEK, at the start of the Roll Defence Dice step: worsen the attacker's Piercing x by 1 for the rest of that sequence (Piercing 1 becomes nothing, Piercing 2 becomes Piercing 1). Not usable for the Apprentek.
  - MECH: defence-step hook adjusting Piercing x by -1 for the sequence; team TP ledger | CLASS: team-hook
  - RULING: Phase Shifter and Piercing Crits | Piercing Crits x is also worsened by 1 | core defines Piercing Crits as a form of the Piercing rule | Unsourced
- T-HIE.40 | **TESSERACT CUBE** | In the Ready step, when you gain CP, if your CRYPTEK is in the killzone, not within an enemy's control range and was not REANIMATED this TP, you may roll one D6: on a 1 the Cube is disabled for the battle; on 4+ gain 1 CP. After it has given 2 CP in total it is disabled for the battle.
  - MECH: Ready-step trigger at CP gain; battle ledger {gained: 0..2, disabled} | CLASS: generic:readyStepTriggers
- T-HIE.41 | **TESLA WEAVE** | Once per TP, when an enemy operative ends a Charge action with one or more friendly HIEROTEK CIRCLE operatives within its control range, you may inflict D3+1 damage on it (rule damage, R-7.5).
  - MECH: post-action hook on enemy CHARGE end; damage event; team TP ledger | CLASS: team-hook

Universal equipment (M-5) may also be chosen; each option at most once; the four-option limit covers faction and universal options together (M-5.12).

Marker/token guide: Reanimation marker, Countertemporal Nanomine marker, Despair marker; tokens: Timesplinter, Chronometron, Nightmare Shroud, Madness, Augment Weapon, Reinforce Metal, Deathmarked, Multi-dimensional Vision, Magnification Conduits, Phase Shifter.

### 4.7 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-HIE: TEAM-HIE-000 to TEAM-HIE-017.

### 4.8 Generic capabilities (survey; resolved in the Engine map below)

- **reanimation**: an incapacitated operative can be set aside instead of permanently removed. On first incapacitation (after "before removal" rules) it places a Reanimation marker (a 20mm marker tied to that operative) within the operative's CR, strips the operative's tokens and timed effects, and parks it in a set-aside pool that counts as incapacitated for every rule (kill op, "no operatives left" checks, enemy rules). `reanimate(markerId, opts)` searches for a legal set-up within 3" of the marker and outside enemy CRs (fail if none), restores the operative with 1 wound, asks its owner for an order, sets ready or expended, removes the marker and emits `Reanimated`. A per-operative `reanimationUsed` flag stops a second marker. Kill op VP must be recomputed from the current incapacitated count on every read so that the grade (and VP) can go down; the battle must not end early while the owner has Reanimation markers but no operatives in the killzone. Used by T-HIE.19, T-HIE.24 to T-HIE.27, T-HIE.35 (marker as object), T-HIE.40 (reanimated-this-TP flag).
- **regainWounds**: a rule restores up to N lost wounds (N rolled: D3+1, 2D3), capped at starting wounds, recomputes wounded or injured state at once (outside an action) or after the action (R-3.16), and emits a `WoundsRegained` event the UI can show. Only for operatives in the killzone. Used by T-HIE.14, T-HIE.29.
- **operativeTokens**: persistent tokens or statuses placed by an ability on a friendly or enemy operative, recording source operative, holder, payload (Atk modifier, damage reduction, granted weapon rules, aura radius, Seek grant) and expiry triggers from a fixed set: `sourceNextActivationStart`, `sourceIncapacitated`, `actionRepeatedByFriendly(actionId)` (any friendly performer, including the Apprentek), `holderIncapacitated`, `battle`. Hooks read tokens in the attack sequence, target validity and stat queries; the view shows them; Reanimation clears all tokens on the holder. Used by T-HIE.10, T-HIE.12, T-HIE.13, T-HIE.15, T-HIE.16, T-HIE.21 (and the token side of T-HIE.9, T-HIE.11).
- **delegatedFreeAction**: during one operative's action, another friendly operative performs one free action whose cost after modifiers is 1 AP. It runs as that operative's action (it is the active operative for the action's rules), with the counteract-style 2" movement and 2" set-up cap, does not use its activation, and leaves it ready or expended as before. Needs a per-operative per-TP `actionHistory` (every action performed this TP, in activations, counteractions and delegated actions) to bar picking an action already done this TP and to bar that action for the rest of the TP. Must allow one level of nesting (Despotek picked by a Cryptek using its own Interstitial Command). Used by T-HIE.6, T-HIE.7.
- **relocateFriendly**: remove a different friendly operative (not the active one) and set it up again with constraints relative to the actor (within x" horizontally of the actor and visible to it, any legal placement), reusing the Grappling Hook placement search; the relocated operative keeps its order, wounds and expended state, and the relocation is not a move (Heavy unaffected). Used by T-HIE.8.
- **proxyShooter**: a Shoot action where a second friendly operative stands in as "active operative" for target validity, Shoot conditions (data flag), cover, obscured and every distance check inside those rules (in-cover 2", smoke 2", other teams' obscuring distances), while weapon distances, Range and ploy distances stay on the real shooter. The view and AI need the proxy's sightlines. Used by T-HIE.28, T-HIE.38.
- **markerAuras**: an ability-placed marker (one per type per player, re-placing moves it) that applies effects to enemy operatives within a radius: a Move stat modifier read at the start of each move action, and an AP-cost increase for named action classes (Pick Up Marker, mission actions); expires with the operativeTokens trigger set. Extends the Breach-marker placement that exists today. Used by T-HIE.9, T-HIE.11.
- **controlModifiers**: hooks in marker control (R-8.6): a per-operative APL override for control only (Steadfast), a per-side total modifier conditional on contesting operatives being near a marker (Despair -1, applied after overrides per the commentary), and virtual contestants (a Reanimation marker counting as an APL 1 friendly operative). Used by T-HIE.11, T-HIE.23, T-HIE.35.
- **activationGate**: when a player selects an operative to activate, a rule owned by the other player can open a decision (roll D6 against the selected operative's current APL) and, on success, reject that choice so the player must select another ready operative; it is skipped when no alternative exists, and counteract is never gated. Used by T-HIE.13.
- **readyStepTriggers**: ordered faction hooks inside the Ready step: priority list (Living Metal, then Reanimation Protocols, then CP gain with an `onCpGain` hook for Tesseract Cube, then readying), with dice decisions and events, run for both players. Used by T-HIE.25, T-HIE.29, T-HIE.40.
- **activationMoveDistance**: a per-activation tally of inches actually moved by the operative across all its move actions (Reposition, Dash, Charge, Fall Back, including climb and Accessible costs as spent distance), readable by weapon-rule filters; relocation and set-up add nothing. Used by T-HIE.32.

### 4.9 Gotchas

- PDF wins over Wahapedia in four places: Chronometron covers fights and retaliation (T-HIE.10); Magnify includes the Shoot action's conditions (T-HIE.28); Augment Weapon's one-profile limit for staff of light and arcane conduit is missing on Wahapedia (T-HIE.15); Timesplinter excludes the Chronomancer itself ("other", missing on Wahapedia). Wahapedia also prints the Despotek relay clause on the Despotek's own Interstitial Command; the PDF Despotek card has no relay (T-HIE.7).
- The PDF card bodies for Chronometron and Magnify still show the older text while the update log shows the new; we follow the log. The update log also has one older Timesplinter entry that prints SUPPORT and a newer August 2026 entry deleting it: SUPPORT is gone.
- Kill op VP must be a function of the current incapacitated count, not a high-water mark: a reanimated operative takes VP away, and its later death gives it back. The opponent's starting-operative count stays 8.
- Reanimation markers are tied to a specific operative; the Ready-step roll stops at the first success (one return per TP from the faction rule; the Reanimator can add more). An operative returns at 1 wound, which is injured (-2" Move, Hit worse by 1) until healed; Living Metal ran before it that Ready step, so no heal until the next TP.
- The Reanimate action can bring back an operative that died before activating this TP as ready, giving it a full activation in the same TP. Interstitial Command and counteract can both trigger the 1 AP Reanimate.
- Deathmark synaptic disintegrator 4/3 and entropic lance (ranged) 5/3 are not typos: crit dice deal less die damage, Devastating makes up for it. Do not "fix" them (never tune printed numbers).
- Reinforce Metal does not reduce Devastating damage (R-5.15) and only touches dice of 3+ damage; abyssal lance 2/2 is unaffected.
- The abyssal lance and tesla carbine 2" Devastating, and every Blast, can hit friendly operatives near the target; the AI must price friendly fire.
- Magnify needs the target visible to the real shooter as well as valid from the proxy. Relentless Onslaught's 8" is from the shooter. The proxy must be Engage and outside enemy CR; with Magnification Conduits any non-Plasmacyte friendly can be the proxy.
- "Performed again by a friendly operative" expiry is shared between the Cryptek and the Apprentek: an Apprentek Chronometron ends the Chronomancer's. Team once-per-TP limits (Timesplinter, Canoptek Repair) are shared too. The Apprentek is never a CRYPTEK for Phase Shifter, Tesseract Cube or Command Underlings option (a).
- Accelerate and Reanimate are not SUPPORT: no Comms Device bonus and no Cortical Control. Accelerate only targets DEATHMARK or IMMORTAL, so not Plasmacytes, Apprenteks or Crypteks.
- Interstitial Command targets exclude APPRENTEK and CRYPTEK but include Plasmacytes; the Despotek's version cannot hand out Accelerate, the Cryptek's version can.
- Madness never blocks a counteraction; the roll uses the target's current APL (a Stun on it makes denial easier).
- Nightmare Shroud's 4" is measured from the performing operative at the time of each attack; it moves with that operative. It bars all re-rolls, Command Re-roll included.
- Nanomine Move penalty respects the 4" Move floor and does nothing to Dash (fixed 3"); Charge uses the reduced Move plus 2".
- Dimensional Ambush flips the order to Engage at the interrupt. Core says an order change ends guard; that change happens as part of resolving the interrupt, so it does not cancel it.
- Edition leaks to avoid: this is not 40k 10th Reanimation Protocols (no per-unit D3 wound regain in a Command phase, no wound rolls, no AP); not 2021 Kill Team Hierotek (no shape distances, no Overwatch, no 2 APL everywhere). Inches only; three defence dice; Guard is the core 2024 action (R-4.9), not a close-quarters-only rule in our engine.
- IP: the PDF and Wahapedia include lore paragraphs and quoted in-universe speech; none of it goes into data or UI copy. Our ability text is the restatements above.

### 4.10 Engine map

| Survey capability | Built as |
|---|---|
| reanimation | `operative.incapacitated` handler places the tied Reanimation marker (first time only, `Operative.returnable`), normal removal follows; `returnToKillzone(ctx, id, { pos, order, wounds: 1, ready, kind: 'reanimated' })` brings it back and the opponent's kill grade and VP fall (`missions.onOperativeReturned`); `placementSpots` for the 3" set-up search |
| regainWounds (Living Metal, Canoptek Repair) | `effects.regainWounds` |
| operativeTokens (Chronometron, Nightmare Shroud, Madness, Augment, Reinforce, Deathmarked) | `tokens.ts` with `sourceId` and `expires: ['sourceNextActivation', 'sourceIncapacitated']`; repeating the action moves the token (`moveTokenTo`) |
| delegatedFreeAction (Interstitial Command) | `startDelegatedAction` with `oneApOnly: true, maxMove: 2, notDoneThisTp: true` (`deny: ['ability:hie.a.accelerate']` for the Despotek); the later "cannot do it again this TP" is provider `actionForbidden` reading `actionsThisTp` |
| relocateFriendly (Timesplinter) | team-hook: `placementSpots` around the actor, then set the position and emit `OperativeMoved` (as Grappling Hook) |
| proxyShooter (Magnify) | provider `shootViewpoints` (weapon options `weapon@proxy`), `shootUnderConceal` / `shootInControlRange` while a proxy exists, `modifyWeaponRules` adds Ceaseless when `state.attack.viewpointId` is set |
| markerAuras (Nanomine, Despair) | team markers plus providers `moveDelta`, `actionCostDelta` (`marker:pickUp`, mission `ability:` ids), `controlTotal` |
| controlModifiers (Steadfast, Reanimated Function) | providers `controlApl`, `controlTotal` |
| activationGate (Vision of Madness) | provider `gateActivation` (rolls with `ctx.roll`) |
| readyStepTriggers | `turningPoint.start` hook, run in team order Living Metal then Reanimation; Tesseract Cube in the same handler; the marker order is picked by the engine (RULING) |
| activationMoveDistance (Methodical Elimination) | `Operative.movedThisActivation` |
| Dimensional Ambush | provider `guardUnderConceal`; the order flip at the interrupt in the team's guard-interrupt handler |
| Tesla Weave | `action.ended` handler on an enemy Charge |

### 4.11 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/hierotek-circle/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `hie.<name>`, `hie.w.`, `hie.a.`, `hie.p.`, `hie.e.`)
  - `src/engine/teams/hierotek-circle.ts` (code hooks, `registerTeamRules`, hook handlers)
  - `src/client/teams/hierotek-circle.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins)
  - `tests/engine/teams/hierotek-circle.test.ts` (TEAM-HIE-nnn tests) and `tests/engine/teams/hierotek-circle.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 4 and `12-rules-test-checklist.md` section TEAM-HIE (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/hierotek-circle/team.json`. Flip it (with `defaults` filled and every weapon in `src/client/teams/hierotek-circle.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. Reanimation and the kill op reversal are the riskiest part:
  test TEAM-HIE-002 and TEAM-HIE-004 first, including a second incapacitation that leaves no marker.
- RULING lines expected: Interstitial Command "1 AP action", enemy guards after it, Comms Device on it;
  Timesplinter placement and SUPPORT; Nanomine timing; Chronometron scope (Corrected) and Atk floor;
  Madness with no alternative and counteract; Reanimate with no spot; incapacitation clearing; Ready-step
  order; Magnify conditions from the proxy (Corrected, flag `magnifyConditionsFromProxy`); Undying
  Androids "cannot retain"; Command Underlings and the Comms Device; Reanimated Function timing; Phase
  Shifter and Piercing Crits; the Ready-step marker order picked by the engine.
- Gotchas: section 4.9. The scaffold leader is the Technomancer; the leader slot lists all three Crypteks
  once the data exists. The Apprentek copies the roster Cryptek's unique actions (provider `extraActions`).
  Kill op VP must fall on reanimation (built in) and rise again on a second incapacitation.

## 5. Plague Marines

Rule IDs: `T-PM.<n>`. Checklist IDs: `TEAM-PM-<nnn>`. Source: the Wahapedia Plague Marines page only (faction version 3, August 2026, with its FAQ), plus the core rules page and the core update log for terms. There is no PDF extract for this team, so every fact here is Fan-source until a PDF check. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms are defined in `10-rules-core.md` (cited R-x.y). Ploys and equipment are written one bullet per record (not a table) so each record can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 5.1 Team selection

- T-PM.1 Roster is exactly 6 operatives: 1 PLAGUE MARINE CHAMPION (leader) plus 5 picks from the main list.
  - MECH: roster validator: leader slot 1 fixed datacard, main slot count 5 | CLASS: data
- T-PM.2 Main list: BOMBARDIER, FIGHTER, HEAVY GUNNER, ICON BEARER, MALIGNANT PLAGUECASTER, WARRIOR. Each at most once, so a legal roster leaves out exactly one of the six. No half selections, nothing counts as two.
  - MECH: roster validator: each main-list entry maxCount 1 | CLASS: data
- T-PM.3 No loadout choices: every operative carries every weapon on its card (5.3). The Champion has both plasma pistol profiles and the plague sword.
  - MECH: fixed loadouts in operatives.json, no picker | CLASS: data
- T-PM.4 Archetypes: SEEK & DESTROY, SECURITY (tac ops out of scope for v1).
  - MECH: team.json archetypes list | CLASS: data
- T-PM.5 "Bolt weapon" for this team means a weapon named boltgun or bolt pistol. Plasma pistols, plague spewer, blight grenade and krak grenade are not bolt weapons. Used by Astartes (T-PM.16) and Plague Rounds (T-PM.29).
  - MECH: weapon tag `bolt` on boltgun and bolt pistol records | CLASS: data
- T-PM.6 **PSYCHIC** (team-local weapon and action tag): has no effect on its own. Astartes (T-PM.16) reads it on weapons; other teams' rules may read it on weapons or actions. Carried by Entropy, Plague wind, Corrupted staff, POISONOUS MIASMA and PUTRESCENT VITALITY.
  - MECH: weapon rule / action keyword `PSYCHIC` with no resolver | CLASS: data

### 5.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| PLAGUE MARINE CHAMPION | 3 | 5" | 3+ | 15 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, LEADER, CHAMPION |
| PLAGUE MARINE BOMBARDIER | 3 | 5" | 3+ | 14 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, BOMBARDIER |
| PLAGUE MARINE FIGHTER | 3 | 5" | 3+ | 14 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, FIGHTER |
| PLAGUE MARINE HEAVY GUNNER | 3 | 5" | 3+ | 14 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, HEAVY GUNNER |
| PLAGUE MARINE ICON BEARER | 3 | 5" | 3+ | 14 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, ICON BEARER |
| MALIGNANT PLAGUECASTER | 3 | 5" | 3+ | 14 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, PSYKER, MALIGNANT PLAGUECASTER |
| PLAGUE MARINE WARRIOR | 3 | 5" | 3+ | 14 | 32 | PLAGUE MARINE, CHAOS, HERETIC ASTARTES, WARRIOR |

UNCLEAR (resolved): the Wahapedia page prints every weapon row and name twice (duplicate table columns from the HTML dump); each profile is taken once. Stats and base sizes read cleanly for all seven cards.

### 5.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Plasma pistol (standard) | R | 4 | 3+ | 3/5 | Range 8", Piercing 1 | Champion |
| Plasma pistol (supercharge) | R | 4 | 3+ | 4/5 | Range 8", Hot, Lethal 5+, Piercing 1 | Champion |
| Plague sword | M | 5 | 3+ | 4/5 | Severe, Poison, Toxic | Champion |
| Boltgun (Bombardier) | R | 4 | 3+ | 3/4 | none | Bombardier |
| Boltgun (Warrior) | R | 4 | 3+ | 3/4 | Toxic | Warrior |
| Bolt pistol | R | 4 | 3+ | 3/4 | Range 8" | Fighter, Heavy Gunner, Icon Bearer |
| Flail of Corruption | M | 5 | 3+ | 4/5 | Brutal, Severe, Shock, Poison | Fighter |
| Plague spewer | R | 5 | 2+ | 3/3 | Range 7", Saturate, Severe, Torrent 2", Poison | Heavy Gunner |
| Plague knife (Icon Bearer) | M | 5 | 3+ | 3/4 | Severe, Poison | Icon Bearer |
| Plague knife (Warrior) | M | 4 | 3+ | 3/4 | Severe, Poison | Warrior |
| Entropy | R | 4 | 3+ | 3/7 | PSYCHIC, Range 7", Saturate, Severe, Poison | Plaguecaster |
| Plague wind | R | 6 | 3+ | 2/3 | PSYCHIC, Saturate, Severe, Torrent 1", Poison | Plaguecaster |
| Corrupted staff | M | 4 | 3+ | 3/4 | PSYCHIC, Severe, Shock, Stun, Poison | Plaguecaster |
| Fists | M | 4 | 3+ | 3/4 | none | Bombardier, Heavy Gunner |
| Blight grenade (equipment) | R | 4 | 4+ | 2/4 | Range 6", Blast 2", Saturate, Severe, Poison | any friendly PLAGUE MARINE via T-PM.30 |
| Blight grenade (Bombardier) | R | 4 | 3+ | 2/4 | Range 6", Blast 2", Saturate, Severe, Poison, Toxic | Bombardier via T-PM.9 |
| Krak grenade (Bombardier) | R | 4 | 3+ | 4/5 | Range 6", Piercing 1, Saturate | Bombardier via T-PM.9 |

Notes: Poison (T-PM.17) and Toxic (T-PM.8) are team-local weapon rules; PSYCHIC is a tag (T-PM.6). Plague Rounds (T-PM.29) adds Poison and Severe to every boltgun and bolt pistol. The krak grenade profile is the universal one (M-5.6) with Hit improved by 1.

UNCLEAR: Plague wind prints no Range. Resolved: no Range rule, so any visible valid target can be the primary (secondaries per Torrent 1"). RULING: Plague wind range | no Range rule, unlimited | the card lists no Range while Entropy on the same card lists Range 7", so the omission reads as deliberate | Fan-source
UNCLEAR: Entropy prints Dmg 3/7 (unusually wide). Kept as printed; never tune printed numbers. RULING: Entropy damage | 3/7 as printed | only source, no PDF to cross-check | Fan-source

### 5.4 Operative rules and unique actions

- T-PM.7 **Grandfather's Blessing** (Champion): whenever an enemy operative carrying one of your Poison tokens loses wounds while within 7" of the Champion, the Champion regains that many lost wounds, capped at 3 regained per TP in total and never above its starting wounds. No effect if the Champion is incapacitated. Any source of wound loss counts (attacks by any friendly operative, Poison damage, FLAIL, Curse of Rot, even the enemy's own Hot).
  - MECH: observer on every wound loss of an enemy operative: if it has my Poison token and is within 7" of my live Champion, heal Champion min(wounds lost, 3 minus ledger, starting minus current) | CLASS: generic:woundsLostTrigger (plus generic:regainWounds)
  - RULING: Grandfather's Blessing amount | counts wounds actually lost (damage capped at the enemy's remaining wounds), and an enemy incapacitated by that loss still counts, measured before removal | "loses wounds" is the wound count, and the token and position still exist until removal | Unsourced
- T-PM.8 **Toxic** (team-local weapon rule; Champion's plague sword, Warrior's boltgun, Bombardier's blight grenades): when used against an enemy operative that had one of your Poison tokens at the start of the current action, add 1 to both Dmg values. Checked per target: with Blast or Torrent only the sequences against operatives that already carried your token at the start of the action get the bonus. This applies at once and overrides the R-3.16 rule about stat changes inside an action (FAQ).
  - MECH: snapshot set of my-poisoned operatives at action start; per sequence, if target in snapshot, weapon Dmg +1/+1 | CLASS: team-hook; needs generic:operativeTokens
  - RULING: Toxic in multi-target attacks | per-target Dmg change keyed to the start-of-action snapshot; a token gained from the primary sequence does not upgrade later secondaries | Wahapedia FAQ answer plus the "at the start of that action" wording | Fan-source
- T-PM.9 **Grenadier** (Bombardier): may use blight grenades and krak grenades even if they were not taken as equipment. These uses are its own and do not spend any team grenade allowance. When it does, the grenade's Hit improves by 1 (to 3+) and its blight grenades gain Toxic.
  - MECH: reuse the AoD grenadier own-allowance path with a parameter list (blight, krak); modifyStat hit -1; grant Toxic to blight on this operative | CLASS: team-hook
  - RULING: Bombardier grenade allowance | its own allowance is blight grenade 2 per battle and krak grenade 1 per battle, separate from team totals | the blight equipment prints a limit of two; krak follows the T-AOD.9 precedent of one use when no number is given | Unsourced
- T-PM.10 **FLAIL** (Fighter, 1 AP): every other operative (friend or foe) that is visible to and within 2" of the Fighter takes D3+2 damage, rolled separately per operative. An enemy whose D3 rolled a 3 also gains one of your Poison tokens if it has none. For action restrictions (R-3.7) and for Astartes this counts as a Fight action. Not while the Fighter has a Conceal order.
  - MECH: unique action, area damage list with per-target D3+2 and token on D3=3; counts as `fight` in the per-activation action-count ledger | CLASS: team-hook; needs generic:operativeTokens
  - RULING: FLAIL conditions | it does not need an enemy in the Fighter's control range and is allowed inside one; Fight + FLAIL or FLAIL + FLAIL is legal in one activation (Astartes two-Fight allowance), three is not | core defines "action restrictions" as the once-per-activation rule only, so Fight's own enemy-in-CR condition is not inherited | Confirmed
- T-PM.11 **Icon Bearer** (Icon Bearer): when working out marker control (R-8.6) this operative's APL counts as 1 higher. This is not an APL change, so it stacks with real APL changes and ignores the R-9.6 cap.
  - MECH: control-APL contribution = current APL + 1 for this operative | CLASS: team-hook
- T-PM.12 **Icon of Contagion** (Icon Bearer): while it is within the opponent's territory, CONTAGION (T-PM.20) costs 0 CP.
  - MECH: ploy cost override for CONTAGION when Icon Bearer is in opponent territory at use time | CLASS: team-hook
- T-PM.13 **POISONOUS MIASMA** (Plaguecaster, 1 AP, PSYCHIC): pick one enemy operative that is either visible to and within 7" of the Plaguecaster, or a valid target for it (any range). If it has none of your Poison tokens, it gains one; if it already has one, it takes 3 damage instead. Not while in an enemy's control range.
  - MECH: unique action with enemy-target choice (filter: visible and within 7", or valid target); branch on token | CLASS: team-hook; needs generic:operativeTokens
- T-PM.14 **PUTRESCENT VITALITY** (Plaguecaster, 1 AP, PSYCHIC): pick one friendly operative visible to and within 3" (the Plaguecaster itself qualifies), roll 2D6. If the two dice total 7 it regains 7 lost wounds; otherwise it regains wounds equal to the higher die. Never above starting wounds. Not while in an enemy's control range; at most once per TP.
  - MECH: unique action, friendly-target choice, heal 7 or max(d1,d2), once-per-TP ledger | CLASS: generic:regainWounds
  - RULING: self-target | allowed | core rules state an operative is always visible to and within any distance of itself | Confirmed
- T-PM.15 **Repulsive Fortitude** (Warrior): when this operative is shot, its defence dice results of 5+ are crits.
  - MECH: defence crit threshold 5 when shot | CLASS: data

### 5.5 Faction rules

- T-PM.16 **ASTARTES**: in each activation a friendly PLAGUE MARINE may perform two Shoot actions or two Fight actions (overrides R-3.7). For two Shoot actions, at least one must use a bolt weapon (T-PM.5) or a PSYCHIC weapon, and the same PSYCHIC ranged weapon cannot be picked twice in one activation. There is no extra AP cost for any weapon (unlike T-AOD.15). Every friendly PLAGUE MARINE can counteract whatever its order.
  - MECH: AoD astartes hook parameterised: second-Shoot legality = (bolt or PSYCHIC used in either Shoot) and no PSYCHIC ranged weapon repeated; no AP surcharge; counteract ignores order | CLASS: team-hook
- T-PM.17 **Poison** (team-local weapon rule): in the Resolve Attack Dice step, if any of your successes inflict damage, the operative the weapon is used against gains one of your Poison tokens unless it already has one. Friendly PLAGUE MARINE operatives never gain your tokens (friendly Blast secondaries included). An operative holds at most one Poison token per owning player. Tokens are never removed by this team's rules and last all battle.
  - MECH: on first damage inflicted by a success in a sequence, add owner-scoped token `poison` to target if absent and target is not a friendly PLAGUE MARINE | CLASS: generic:operativeTokens
  - RULING: Poison needs real damage | if every damaging success is ignored (for example an Iron Halo-style ignore), no token is gained; damage reduced but not ignored still counts | the trigger is "inflict damage", and ignored damage is never inflicted | Unsourced
- T-PM.18 **Poison damage**: whenever an operative carrying one of your Poison tokens is activated, it takes 1 damage. This resolves first among "is activated" effects (core update log). Counteractions and Guard interrupts are not activations, so they do not trigger it.
  - MECH: activation-start trigger owned by the token's owner, fires on the opposing player's operative, 1 damage (D3 with Poison Vents) | CLASS: generic:activationStartTriggers
  - RULING: incapacitated by Poison on activation | the operative is removed, that activation is spent and play passes to the opponent | it was activated before the damage resolved | Unsourced
- T-PM.19 **Disgustingly Resilient**: whenever a single attack die would inflict 3 or more damage on a friendly PLAGUE MARINE, roll one D6; on 4+ that die's damage is reduced by 1. Only attack-dice damage qualifies (shooting dice, fight strikes, Blast and Torrent secondaries). Poison, FLAIL, Hot, Curse of Rot and other non-dice damage are never reduced. Rules that ignore changes to weapon stats do not switch it off (core update log).
  - MECH: per-die damage reduction after Dmg is determined: if dmg >= 3, D6 4+ gives -1 | CLASS: generic:perDieDamageReduction
  - RULING: Disgustingly Resilient and Devastating | Devastating damage from a retained crit counts as that attack die's damage, so x >= 3 is rolled for | Devastating is triggered by and tied to the specific die | Unsourced

### 5.6 Ploys

All ploys cost 1 CP unless stated (R-2.4); the source prints no costs. Strategy ploys last until the end of the TP (R-2.5) unless stated.

- T-PM.20 **CONTAGION** | Strategy | 1 CP (0 CP via T-PM.12) | Gambit step | An enemy operative has Move -2" and its weapons' Hit worsened by 1 while either: it carries one of your Poison tokens and is within 3" of a friendly PLAGUE MARINE with visibility either way; or it is within 3" of a friendly ICON BEARER with visibility either way. Both conditions together still give only one penalty, and the penalty does not stack with being injured (an injured enemy gets nothing extra). Move floor 4" (R-9.6).
  - MECH: continuous aura on enemy operatives keyed to distance/visibility from my keyword-filtered operatives and token state; applies an injury-equivalent penalty combined with injured by OR | CLASS: generic:enemyProximityStatAura
  - RULING: Contagion timing | the condition is evaluated at the start of each action and at each attack's dice roll, and a change that arises during an action takes effect after that action (R-3.16) | core stat-change timing; a mid-move entry into 3" does not shorten that move | Unsourced
  - RULING: Contagion vs ignore-injury rules | a rule that ignores injured stat changes does not ignore Contagion | Contagion is its own stat change that merely does not stack with injury | Unsourced
- T-PM.21 **LUMBERING DEATH** | Strategy | 1 CP | Gambit step | A friendly PLAGUE MARINE's weapons have Ceaseless while it shoots or fights during an activation in which it has moved no more than 3" in total, and whenever it retaliates. Extra distance for climbing or crossing Accessible terrain counts toward the 3" (core update log).
  - MECH: grant Ceaseless when (activationMoveDistance <= 3 and in an activation) or retaliating | CLASS: generic:activationMoveDistance
  - RULING: Lumbering Death outside own activation | a counteraction is not an activation, so shooting or fighting while counteracting does not qualify; a Guard interrupt happens during the enemy's activation in which the guard has not moved, so it qualifies | strict reading of "during an activation" plus the core note that a counteraction is not an activation | Unsourced
- T-PM.22 **CLOUD OF FLIES** | Strategy | 1 CP | Gambit step | Place one Cloud of Flies marker anywhere in the killzone. When an operative more than 3" away shoots a friendly PLAGUE MARINE that is wholly within 1" of the marker, that target is obscured (R-5.8). Remove the marker in the Ready step of the next Strategy phase.
  - MECH: ploy places a marker (free placement); target-state hook marks obscured when shooter distance > 3" and target wholly within 1" of marker; expiry at next Ready step | CLASS: team-hook
- T-PM.23 **NURGLINGS** | Strategy | 1 CP | Gambit step | Pick one enemy operative that is within 3" of a friendly PLAGUE MARINE, or that carries one of your Poison tokens and is within 7" of a friendly PLAGUE MARINE (no visibility needed). Its APL is reduced by 1 until the end of its next activation (subject to the R-9.6 cap).
  - MECH: ploy with enemy-target choice and distance/token filter; APL -1 until end of next activation (Stun-style) | CLASS: team-hook; needs generic:operativeTokens
- T-PM.24 **VIRULENT POISON** | Firefight | 1 CP | During a friendly PLAGUE MARINE's activation or counteraction, before or after one of its actions | One enemy operative within 3" of that operative (no visibility needed), or visible to and within 7" of it, gains one of your Poison tokens if it has none.
  - MECH: firefight ploy window between actions; enemy-target filter; add token | CLASS: team-hook; needs generic:operativeTokens
- T-PM.25 **SICKENING RESILIENCE** | Firefight | 1 CP | When an attack die inflicts damage on a friendly PLAGUE MARINE | Until the end of the current activation or counteraction, Disgustingly Resilient on that operative needs no roll: it always reduces qualifying damage by 1, never below 2.
  - MECH: per-operative flag converting the T-PM.19 roll into an automatic -1 with floor 2 until activation/counteraction end | CLASS: team-hook; needs generic:perDieDamageReduction
  - RULING: Sickening Resilience first die | the ploy is offered before Disgustingly Resilient resolves for the triggering die, so it also covers that die | otherwise the window would never help the die that opened it | Unsourced
- T-PM.26 **POISONOUS DEMISE** | Firefight | 1 CP | A friendly PLAGUE MARINE is incapacitated, before removal | For each enemy operative visible to and within 3" of it: if the enemy already has one of your Poison tokens (including one gained earlier in this same action), it takes 1 damage; otherwise it gains one.
  - MECH: before-removal trigger (as T-KOM.8); per enemy in range, branch on token | CLASS: team-hook; needs generic:operativeTokens
- T-PM.27 **CURSE OF ROT** | Firefight | 1 CP | A friendly PLAGUE MARINE is shooting or fighting an enemy within 3" of it (within 7" if that enemy carries one of your Poison tokens), right after the opponent rolls their defence dice (shooting) or attack dice (fighting) | Every die the opponent rolled as a 3 deals 1 damage to that enemy, cannot be retained as a success and cannot be re-rolled.
  - MECH: opponent-dice hook after roll, before re-rolls: mark natural 3s fail and locked, 1 damage each to the enemy | CLASS: team-hook
  - RULING: Curse of Rot scope | not usable when the Plague Marine is retaliating; covers one sequence (one target) only | the team's own Lumbering Death names retaliating separately from fighting; the ploy names a single enemy | Unsourced

### 5.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-PM.28 **PLAGUE BELLS** | Friendly PLAGUE MARINE operatives ignore the injured stat changes (Move and weapon Hit).
  - MECH: ignoreInjuredStats on all friendly operatives | CLASS: data
- T-PM.29 **PLAGUE ROUNDS** | Every boltgun and bolt pistol on friendly PLAGUE MARINE operatives gains Poison and Severe.
  - MECH: weapon rule grant filtered by tag `bolt` (Poison resolver itself is T-PM.17) | CLASS: data
- T-PM.30 **BLIGHT GRENADES** | Every friendly PLAGUE MARINE has the blight grenade (5.3); the team may use it at most twice per battle in total.
  - MECH: team-wide limited weapon, 2 uses | CLASS: data
- T-PM.31 **POISON VENTS** | Whenever an enemy operative is activated within 3" of a friendly PLAGUE MARINE (no visibility needed): if it carries none of your Poison tokens, roll a D3 and on a 3 it gains one; if it already carries one, its Poison damage that activation is D3 instead of 1.
  - MECH: activation-start trigger; replaces the T-PM.18 damage amount, or rolls for a token | CLASS: generic:activationStartTriggers
  - RULING: Poison Vents ordering | the damage branch is checked first (damage resolves first among "is activated" effects); a token gained from the D3 does not also deal damage in that same activation | core update log ordering | Confirmed

### 5.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-PM: TEAM-PM-000 to TEAM-PM-027.

### 5.9 Generic capabilities (survey; resolved in the Engine map below)

- **operativeTokens**: owner-scoped persistent tokens on any operative (here enemies). At most one token per (owner, kind) per operative; added by weapon rules (on damage inflicted in Resolve Attack Dice, with a "not friendly PLAGUE MARINE" filter), unique actions, ploys, equipment and before-removal triggers; never removed unless a rule says so. Readable in conditions (target filters, ploy filters, Dmg modifiers, aura conditions), included in `view(state, seat)` for both seats (public info), shown on the figure marker with a Tooltip and in the event feed. Must support "had a token at the start of this action" snapshots. Mirror matches: each player's tokens are separate. Used by T-PM.7, .8, .10, .13, .17, .18, .20, .23, .24, .26, .27, .31.
- **activationStartTriggers**: effects owned by one player that fire when any operative (including the opponent's) is activated, ordered "would be activated" first, then "is activated" effects with damage-inflicting ones first. Must be able to inflict damage (and incapacitate before the operative acts), roll dice, add tokens, and let one rule replace another's damage amount (Poison Vents D3 replacing Poison 1). Never fires on counteractions or interrupts. Used by T-PM.18, T-PM.31.
- **perDieDamageReduction**: a step after a single attack die's damage is fixed and before wounds are removed: if damage >= threshold, roll D6 and on success subtract an amount; must support a per-operative override that skips the roll and applies an automatic reduction with a floor. Applies only to attack-dice damage (including the Devastating ruling), not to ability damage. Not removable by "ignore weapon stat changes" rules. Shows the roll in the dice log. Used by T-PM.19, T-PM.25.
- **enemyProximityStatAura**: a team rule, active for a TP, that applies a stat penalty to each enemy operative while a condition holds: within x" of a friendly operative matching a keyword filter, with visibility in either direction, optionally requiring a token. The penalty must be "injury-equivalent": combined with the injured state by OR (never doubled), still subject to the Move floor, not cancelled by ignore-injury rules. Re-evaluated between actions per R-3.16; `query.*` must expose the effective Move and Hit so the UI shows the penalty. Used by T-PM.20.
- **activationMoveDistance**: a per-operative counter of inches moved in its current activation, including extra costs for climbing, dropping and Accessible terrain, reset at activation start, readable by weapon-rule grant conditions. Used by T-PM.21.
- **woundsLostTrigger**: an observer that fires after any operative loses wounds from any source (attack, ability, Poison, Hot, mission marker) with the operative, wounds actually lost, source and position before removal, so another player's rule can react. Used by T-PM.7.
- **regainWounds**: restore lost wounds to an operative, capped at its starting wounds, re-evaluating wounded and injured state at once, with an event for the feed and per-TP ledgers for caps. Used by T-PM.7, T-PM.14.

### 5.10 Gotchas

- Disgustingly Resilient is not the 2021 5+ per-wound save: it is one D6 per attack die that deals 3+ damage, and 4+ removes exactly 1 damage. Poison, FLAIL, Hot, Curse of Rot and mission damage are never reduced.
- Poison damage fires only on activation, never on a counteraction or Guard interrupt, and it resolves before every other activation effect. A token on an operative that has already activated this TP does nothing until next TP.
- Tokens are per owner: in a Plague Marines mirror each side poisons the other's Plague Marines; "friendly PLAGUE MARINE" in the Poison rule means friendly to the weapon's user.
- Toxic checks the start of the action, per target. The Champion's first Fight that poisons a target upgrades the second Fight (Astartes), not the first.
- The Champion has no bolt or PSYCHIC weapon, so Astartes never gives it two Shoots; it can still take two Fights. Plaguecaster's two Shoots must be different PSYCHIC ranged weapons (Entropy plus Plague wind).
- FLAIL hits friendly operatives too and needs no enemy in control range. It counts as Fight for the two-per-activation allowance, but it is not a Fight for Lumbering Death, Curse of Rot or Guard interrupts (no attack dice).
- POISONOUS MIASMA is a unique action, not Shoot: it works on a Conceal order, its 7" visible branch can pick a concealed enemy in cover, and its valid-target branch has no range.
- Contagion does not stack with injury, yet ignore-injury rules (another team's or Plague Bells on the enemy side) do not cancel it. Visibility counts in either direction. Both Contagion conditions together still give one penalty.
- Curse of Rot works when the Plague Marine shoots (enemy defence dice) or fights (enemy attack dice), never when it retaliates. It acts on natural 3s before re-rolls; cover saves retained without rolling are not touched. Its damage can incapacitate the enemy mid-sequence, which ends that sequence.
- Poisonous Demise counts a token gained earlier in the same action as "already had".
- Poison Vents and Virulent Poison use a plain 3" with no visibility; Nurglings needs no visibility at all; Poisonous Demise and Contagion do need visibility.
- Grandfather's Blessing reacts to any wound loss on a poisoned enemy, including from the enemy's own Hot weapon or from Poison on activation. Cap is 3 regained wounds per TP, not 3 triggers.
- Icon Bearer's +1 for marker control is not an APL change, so it bypasses the ±1 cap (R-9.6).
- Lumbering Death distance includes climb and Accessible costs (core update log); a counteraction never qualifies under our ruling.
- No loadout picker: every operative brings every weapon on its card. The Warrior's boltgun has Toxic; the Bombardier's does not.
- Plague wind has no Range. Do not copy Entropy's Range 7" onto it.
- The source prints no ploy costs; every ploy is 1 CP (CONTAGION can be 0 via Icon of Contagion).
- Edition leaks to reject: no 10th-edition Contagion aura that grows each battle round, no 10th-edition Disgustingly Resilient (damage -1 always), no wound rolls; inches only, three defence dice.

### 5.11 Engine map

| Survey capability | Built as |
|---|---|
| operativeTokens (Poison) | `tokens.ts` (`kind: 'pm.poison'`, `cap: 1`, `owner` = the Plague Marines seat) |
| Toxic (+1/+1 Dmg) | attack hook `modifyDamage` with `heldSinceActionStart` |
| activationStartTriggers (Poison damage, Poison Vents) | `activation.start` hook (`effects.directDamage`); an incapacitated operative ends its activation |
| perDieDamageReduction (Disgustingly Resilient, Sickening Resilience) | existing `onDamageInflicted` (sources `normal`, `crit`, `strike-normal`, `strike-crit`; `devastating` per the RULING) with `ctx.roll` |
| enemyProximityStatAura (Contagion) | provider `injuredEquivalent` (Move -2" and Hit worse by 1, never stacking with injury, not cancelled by ignore-injury rules) |
| activationMoveDistance (Lumbering Death) | `Operative.movedThisActivation` |
| woundsLostTrigger (Grandfather's Blessing) | `damage.inflicted` hook (`data.amount` is the wounds actually lost) |
| regainWounds (Putrescent Vitality, Grandfather's Blessing) | `effects.regainWounds` |
| Astartes | providers `maxRepeats` and `counteract: 'any'` |
| Icon Bearer control +1 | provider `controlApl` |
| FLAIL counting as Fight | `declared.params.treatedAs = 'fight'` (the Grappling Hook pattern) |
| Curse of Rot | `afterAttackRoll` / `afterDefenceRoll` hooks: mark natural 3s `kind: 'fail'`, `rerolled: true`, `tag: 'pm.curse'` (no re-roll), then `directDamage` |
| Cloud of Flies | ploy places a marker chosen from `placementSpots`; `target.status` sets obscured |
| Plague Bells | provider `flags` (`ignoreInjured`) |
| Bombardier grenades | the team adds its own weapon ids to the Bombardier and counts their uses in `usedLimited`, like T-AOD.9 |

### 5.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/plague-marines/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `pm.<name>`, `pm.w.`, `pm.a.`, `pm.p.`, `pm.e.`)
  - `src/engine/teams/plague-marines.ts` (code hooks, `registerTeamRules`, hook handlers)
  - `src/client/teams/plague-marines.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins)
  - `tests/engine/teams/plague-marines.test.ts` (TEAM-PM-nnn tests) and `tests/engine/teams/plague-marines.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 5 and `12-rules-test-checklist.md` section TEAM-PM (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/plague-marines/team.json`. Flip it (with `defaults` filled and every weapon in `src/client/teams/plague-marines.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. Poison is the spine of the team: TEAM-PM-004, TEAM-PM-005
  and TEAM-PM-007 first.
- RULING lines expected: Plague wind range, Entropy damage, Grandfather's Blessing amount, Toxic in
  multi-target attacks, Bombardier grenade allowance, FLAIL conditions, Putrescent Vitality self-target,
  Poison needs real damage, incapacitated by Poison on activation, Disgustingly Resilient and Devastating,
  Contagion timing and ignore-injury, Lumbering Death outside own activation, Sickening Resilience first
  die, Curse of Rot scope, Poison Vents ordering. All Fan-source or Unsourced unless a PDF appears.
- Gotchas: section 5.10. Disgustingly Resilient is per attack die of 3+ damage, never ability damage.
  Poison damage fires only on a real activation (not counteract or interrupts). Every operative has a
  fixed loadout; no picker.

## 6. Wyrmblade

Rule IDs `T-WYR.<n>`, checklist IDs `TEAM-WYR-<nnn>`. Single source: the Wahapedia Wyrmblade page (book version November 2025, including its one FAQ entry). No PDF extract exists, so every Wyrmblade-specific fact here is Fan-source until a PDF check; RULING lines mark where that matters. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y).

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm. A ranged profile with no Range rule has unlimited range.

UNCLEAR: the extract prints every weapon name and rule cell twice (card front and tooltip); resolved as one profile each. UNCLEAR: unique action names are glued to their cost ("TARGET VULNERABILITY1AP", "ASSASSINATE2AP"); resolved as 1 AP, 1 AP and 2 AP. UNCLEAR: the extract shows no CP cost on any ploy; resolved as 1 CP each (see RULING in 6.5).

### 6.1 Team selection

- T-WYR.1 Roster: exactly 1 NEOPHYTE LEADER, plus 13 selections from the main list (T-WYR.3).
  - MECH: two selection slots: leader slot count 1, main slot count 13 filled exactly (selection weights per T-WYR.5) | CLASS: data
- T-WYR.2 Neophyte Leader loadout, pick one: (a) autogun + gun butt; (b) shotgun + gun butt; (c) one of bolt pistol, master-crafted autopistol or web pistol, plus one of chainsword, power maul or power pick (no gun butt in option c).
  - MECH: loadout option groups on the Leader datacard | CLASS: data
- T-WYR.3 Main list: KELERMORPH, LOCUS, GUNNER (flamer + gun butt), GUNNER (grenade launcher + gun butt), GUNNER (webber + gun butt), HEAVY GUNNER (heavy stubber + gun butt), HEAVY GUNNER (mining laser + gun butt), HEAVY GUNNER (seismic cannon + gun butt), ICON BEARER (autogun + gun butt, or shotgun + gun butt), SANCTUS SNIPER, SANCTUS TALON, WARRIOR (autogun + gun butt, or shotgun + gun butt). Cult agents carry every weapon on their card.
  - MECH: model each GUNNER and HEAVY GUNNER weapon variant as its own selection entry (one datacard id each, sharing the GUNNER / HEAVY GUNNER keyword) so "each entry once" is the existing non-repeatable rule | CLASS: data
- T-WYR.4 Limits: WARRIOR may be taken any number of times; every other entry at most once. At most two GUNNER, at most two HEAVY GUNNER and at most two CULT AGENT operatives (so two Gunners must carry different weapons, likewise Heavy Gunners).
  - MECH: per-keyword maximums on the main slot (GUNNER ≤2, HEAVY GUNNER ≤2, CULT AGENT ≤2) on top of `repeatable: [warrior]` | CLASS: generic:rosterGroupCaps
- T-WYR.5 KELERMORPH, LOCUS, SANCTUS SNIPER and SANCTUS TALON each count as two selections. A legal roster is therefore 14 operatives (no cult agents), 13 (one) or 12 (two).
  - MECH: selection weight 2 for the four cult agent entries; the slot fills when the weighted sum equals 13 | CLASS: generic:weightedSelection
- T-WYR.6 Archetypes: SEEK & DESTROY, INFILTRATION (tac ops out of scope for v1).
  - MECH: team `archetypes` field | CLASS: data
- T-WYR.7 Keyword groups used by the rules: NEOPHYTE = Leader, Gunner, Heavy Gunner, Icon Bearer, Warrior. CULT AGENT = Kelermorph, Locus, Sanctus Sniper, Sanctus Talon. Every operative is WYRMBLADE. The LEADER is a NEOPHYTE; cult agents are not.
  - MECH: datacard keyword arrays; filters key on NEOPHYTE / CULT AGENT / LEADER | CLASS: data

### 6.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| NEOPHYTE LEADER | 2 | 6" | 5+ | 8 | 25 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, NEOPHYTE, LEADER |
| KELERMORPH | 3 | 6" | 4+ | 9 | 32 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, CULT AGENT, KELERMORPH |
| LOCUS | 3 | 6" | 4+ | 9 | 32 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, CULT AGENT, LOCUS |
| NEOPHYTE GUNNER | 2 | 6" | 5+ | 7 | 25 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, NEOPHYTE, GUNNER |
| NEOPHYTE HEAVY GUNNER | 2 | 6" | 5+ | 7 | 32 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, NEOPHYTE, HEAVY GUNNER |
| NEOPHYTE ICON BEARER | 2 | 6" | 5+ | 7 | 25 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, NEOPHYTE, ICON BEARER |
| SANCTUS SNIPER | 3 | 6" | 4+ | 9 | 32 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, CULT AGENT, SANCTUS, SNIPER |
| SANCTUS TALON | 3 | 6" | 4+ | 9 | 32 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, CULT AGENT, SANCTUS, TALON |
| NEOPHYTE WARRIOR | 2 | 6" | 5+ | 7 | 25 | WYRMBLADE, TYRANIDS, GENESTEALER CULTS, NEOPHYTE, WARRIOR |

Note: the Sanctus Sniper's familiar is part of its model only; it is not an operative and has no stats or rules of its own.

### 6.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Autogun (Leader) | R | 4 | 3+ | 2/3 | none | Leader (option a) |
| Shotgun (Leader) | R | 4 | 2+ | 3/3 | Range 6" | Leader (option b) |
| Bolt pistol | R | 4 | 3+ | 3/4 | Range 8" | Leader (option c) |
| Master-crafted autopistol | R | 4 | 3+ | 2/4 | Range 8", Lethal 5+ | Leader (option c) |
| Web pistol | R | 4 | 3+ | 3/4 | Range 6", Severe, Stun | Leader (option c) |
| Chainsword | M | 4 | 3+ | 4/5 | none | Leader (option c) |
| Power maul | M | 4 | 3+ | 4/6 | Shock | Leader (option c) |
| Power pick | M | 4 | 3+ | 4/5 | Rending | Leader (option c) |
| Gun butt | M | 3 | 4+ | 2/3 | none | Leader (options a, b), Gunner, Heavy Gunner, Icon Bearer, Warrior |
| Liberator autostubs (hypersense) | R | 5 | 3+ | 3/4 | Range 6", Saturate, Seek Light, Hypersense | Kelermorph |
| Liberator autostubs (long range) | R | 4 | 4+ | 3/4 | Piercing Crits 1, Rending | Kelermorph |
| Liberator autostubs (short range) | R | 5 | 3+ | 3/4 | Range 8", Piercing 1, Rending | Kelermorph |
| Kelermorph knife | M | 3 | 4+ | 3/4 | Rending | Kelermorph |
| Barbed tail | R | 4 | 3+ | 3/4 | Range 3", Silent | Locus |
| Locus blades | M | 5 | 3+ | 4/6 | Lethal 5+ | Locus |
| Flamer | R | 4 | 2+ | 3/3 | Range 8", Saturate, Torrent 2" | Gunner (flamer) |
| Grenade launcher (frag) | R | 4 | 4+ | 2/4 | Blast 2" | Gunner (grenade launcher) |
| Grenade launcher (krak) | R | 4 | 4+ | 4/5 | Piercing 1 | Gunner (grenade launcher) |
| Webber | R | 4 | 3+ | 3/4 | Range 12", Severe, Stun | Gunner (webber) |
| Heavy stubber (focused) | R | 5 | 4+ | 4/5 | Heavy (Dash only) | Heavy Gunner (heavy stubber) |
| Heavy stubber (sweeping) | R | 4 | 4+ | 4/5 | Heavy (Dash only), Torrent 1" | Heavy Gunner (heavy stubber) |
| Mining laser | R | 5 | 4+ | 5/6 | Heavy (Dash only), Piercing 1 | Heavy Gunner (mining laser) |
| Seismic cannon (long-wave) | R | 5 | 4+ | 5/6 | Blast 1", Heavy (Dash only), Stun | Heavy Gunner (seismic cannon) |
| Seismic cannon (short-wave) | R | 4 | 3+ | 4/4 | Range 6", Heavy (Dash only), Piercing Crits 1, Stun | Heavy Gunner (seismic cannon) |
| Autogun (Neophyte) | R | 4 | 4+ | 2/3 | none | Icon Bearer, Warrior (option) |
| Shotgun (Neophyte) | R | 4 | 3+ | 3/3 | Range 6" | Icon Bearer, Warrior (option) |
| Sanctus sniper rifle (mobile) | R | 4 | 3+ | 3/4 | none | Sanctus Sniper |
| Sanctus sniper rifle (stationary) | R | 4 | 2+ | 3/3 | Devastating 3, Heavy (Dash only), Silent | Sanctus Sniper |
| Fists | M | 4 | 3+ | 2/4 | none | Sanctus Sniper |
| Sanctus bio-dagger | M | 4 | 3+ | 3/6 | Lethal 4+, Shock | Sanctus Talon |
| Blasting charge | R | 4 | 4+ | 3/5 | Range 4", Blast 1", Saturate | any NEOPHYTE, equipment T-WYR.38 |
| Cult knife | M | 3 | 4+ | 3/4 | none | every NEOPHYTE, equipment T-WYR.39 |

Notes: the Leader's autogun and shotgun are better than the Icon Bearer/Warrior versions (Hit 3+/2+ against 4+/3+); keep them as separate weapon ids. Multi-profile weapons (autostubs, grenade launcher, heavy stubber, seismic cannon, sniper rifle) bring all their profiles. The Sanctus Talon has no ranged weapon.

- T-WYR.11 **Hypersense** (team-local weapon rule, Liberator autostubs hypersense profile): while the Kelermorph shoots with this profile, enemy targets cannot be obscured.
  - MECH: weapon-flag hook that suppresses obscured (R-5.5/R-5.8) for this profile's sequences, reusing the Optics/Auspex "cannot be obscured" hook | CLASS: team-hook

### 6.4 Operative rules and unique actions

- T-WYR.8 **Shadow Vector** (Leader): once per TP, you may use SLINK INTO DARKNESS or COILED SERPENT for 0 CP when the operative it names is a NEOPHYTE visible to the Leader.
  - MECH: once-per-TP ledger; ploy cost override to 0 for those two ploys when target is a NEOPHYTE visible to a living in-killzone Leader | CLASS: team-hook
  - RULING: Shadow Vector visibility | the Leader cannot qualify itself (it is not "visible to" itself); another NEOPHYTE must be named | "visible to this operative" presupposes a second operative | Unsourced
- T-WYR.9 **Expert Gunslinger** (Kelermorph): may perform two Shoot actions in one activation (overrides R-3.7).
  - MECH: extra Shoot per activation | CLASS: data
- T-WYR.10 **Heroic Inspiration** (Kelermorph): while a friendly NEOPHYTE visible to and within 3" of the Kelermorph is shooting, fighting or retaliating, if the Kelermorph has incapacitated an enemy operative this TP, that NEOPHYTE's weapons have Severe.
  - MECH: per-TP ledger "Kelermorph incapacitated an enemy" (credit = the Kelermorph's own attack or rule dealt the final damage); weapon-rule grant Severe with a position filter evaluated when the attack sequence starts | CLASS: team-hook
- T-WYR.12 **Expert Swordsman** (Locus): may perform two Fight actions in one activation. Whenever it finishes a Fight action and no enemy is within its CR, it may perform a free Charge capped at 3", even if it already charged this activation. That free Charge does not stop it from Dashing later in the activation.
  - MECH: extra Fight per activation (existing) + after-Fight offer of a free Charge with maxMove 3 that ignores the R-3.7 repeat ban and does not set the "charged, so no Dash" restriction | CLASS: generic:freeActionKinds
  - RULING: Expert Swordsman and an earlier normal Charge | only the free Charge is exempt from blocking Dash; a normal Charge earlier in the activation still blocks Dash | the rule exempts "doing so", meaning the free Charge | Fan-source
- T-WYR.13 **Bladed Stance** (Locus): when it fights or retaliates, before the normal resolution order begins, you may resolve one of your successes out of turn; it must be a block.
  - MECH: at the start of Resolve Attack Dice, offer the Locus's player one immediate block (normal blocks normal, crit blocks either, per R-6) before the attacker's first resolution; then normal alternation resumes | CLASS: generic:fightResolveOutOfOrder
- T-WYR.14 **Quicksilver Strike** (Locus): once per TP, after an enemy operative performs an action in which it moves or is set up, you may interrupt: the Locus performs a free Charge capped at 3" that must end within that enemy's CR; you may switch the Locus to Engage to do it. If no such Charge is possible the interruption is cancelled and the once-per-TP use is not spent. Per the FAQ it also triggers on enemy move/set-up actions outside the Firefight phase (for example free Dashes from strategy ploys).
  - MECH: reactive interrupt offered to the Locus's player after any enemy action flagged moved-or-set-up (any phase); feasibility pre-check (a legal Charge path of ≤3" ending in that enemy's CR, Locus not already in an enemy's CR); optional order flip to Engage; once-per-TP ledger spent only if performed | CLASS: generic:reactiveInterrupt
  - RULING: Quicksilver Strike eligibility | the Locus may be ready or expended and need not be on guard; it is not a counteraction, so the counteract 2" cap does not apply, but the 3" cap does | the rule names no readiness condition | Fan-source
  - RULING: Quicksilver Strike and Guard | if both a Guard interrupt (R-4.10) and Quicksilver Strike are available after the same enemy action, the Wyrmblade player picks the order; each is resolved separately | both rules belong to the same (non-active) player, so the core precedence list's "controlling player decides" step goes to them | Unsourced
- T-WYR.15 **Heavy Weapon Bipod** (Heavy Gunner): when it shoots with a weapon from its own datacard, if it has not moved during this activation, or this is a counteraction, the weapon has Ceaseless; if the weapon already has Ceaseless (for example from Cult Ambush), it has Relentless instead. Moving after shooting is still allowed (subject to Heavy).
  - MECH: weapon-rule grant evaluated at attack start: if (not moved this activation) or counteraction: Ceaseless, upgraded to Relentless when Ceaseless is already granted; datacard weapons only (not Blasting charge, not Cult knife) | CLASS: team-hook
- T-WYR.16 **Icon Bearer** (Icon Bearer): when working out marker control, count its APL as 1 higher. This is not an APL change, so it stacks with APL modifiers and is unaffected by "ignore APL changes".
  - MECH: +1 in the marker-control APL sum for this operative only | CLASS: team-hook
- T-WYR.17 **Overthrow the Oppressors** (Icon Bearer): once per TP, when a ready friendly NEOPHYTE visible to and within 6" of the Icon Bearer is incapacitated, before it is removed it may either perform one free Shoot (you may switch it to Engage first), or use A PLAN GENERATIONS IN THE MAKING for 0 CP.
  - MECH: before-removal hook (R-5.18) gated on the victim's status `ready`, NEOPHYTE, visibility and 6" from a living Icon Bearer; offers ability.choice {free Shoot with optional order flip, Plan Generations at 0 CP}; once-per-TP ledger | CLASS: team-hook
  - RULING: Overthrow free Shoot conditions | the free Shoot still obeys Shoot conditions (R-3.9): no free Shoot while an enemy is within the victim's CR, which is typical after a melee kill | free actions keep their conditions | Confirmed
  - RULING: Overthrow and the Icon Bearer itself | the Icon Bearer cannot trigger the rule by its own incapacitation | "visible to this operative" presupposes another operative | Unsourced
- T-WYR.18 **TARGET VULNERABILITY** (Sanctus Sniper, 1 AP): until the end of its activation, the stationary profile of its sniper rifle has Lethal 5+. Not in an enemy's CR.
  - MECH: unique action granting Lethal 5+ to one profile until end of activation | CLASS: data
- T-WYR.19 **FAMILIAR'S SOULSIGHT** (Sanctus Sniper, 1 AP): choose an enemy operative visible to it; that enemy gets your Soulsight token until the end of the battle or until a friendly operative performs a Familiar's Soulsight action again. While the Sniper shoots an enemy with your token, every profile of its sniper rifle has Saturate and that enemy cannot be obscured. Not in an enemy's CR.
  - MECH: unique action writing a single team-wide `soulsightTarget` (operative id); attack-start hook grants Saturate and suppresses obscured for the Sniper vs that id | CLASS: team-hook
  - RULING: Soulsight token supply | one token per team: either cultist's Familiar's Soulsight moves it, so Sniper and Talon always share one marked enemy; the token is cleared if its bearer is removed | "until this action is performed again by a friendly operative" ends the old token whichever cultist acts | Fan-source
- T-WYR.20 **Creeping Shadow** (Sanctus Talon): may perform Charge while it has a Conceal order (its order stays Conceal). Whenever it performs a Fight action, it may then perform a free Dash, or a free Fall Back capped at 3", even if an earlier action this activation would normally forbid it.
  - MECH: Charge allowed under Conceal (as Throat Slittas); after every Fight (including free Fights) offer free Dash or free Fall Back (maxMove 3) that ignores same-activation action restrictions but keeps positional conditions (Dash needs no enemy in CR; Fall Back needs an enemy in CR) | CLASS: generic:freeActionKinds
- T-WYR.21 **FAMILIAR'S SOULSIGHT** (Sanctus Talon, 1 AP): as T-WYR.19 (same shared token); while the Talon fights or retaliates against the token bearer, its bio-dagger has Brutal and Balanced. Not in an enemy's CR.
  - MECH: same unique action and team-wide token as T-WYR.19; fight hook grants Brutal + Balanced vs the token bearer | CLASS: team-hook
- T-WYR.22 **ASSASSINATE** (Sanctus Talon, 2 AP): choose an enemy operative that cannot see the Talon. The Talon performs a free Charge limited to its Move stat (no +2") that must end within that enemy's CR, then immediately a free Fight against that enemy. The first time it strikes in that Fight it may at once resolve a second success as a strike, before the opponent resolves anything. Not with an Engage order, not in an enemy's CR.
  - MECH: unique action: legal only if some enemy has no visibility to the Talon and a Charge path of ≤ Move (6", minus injury) ending in its CR exists; free Charge (maxMove = Move, no bonus, endWithinCrOf target) then free Fight locked to that target; the double-strike uses out-of-order resolution | CLASS: generic:freeActionKinds
  - RULING: Assassinate target wording | "an enemy this operative isn't visible to" is read as: the Talon is not visible to that enemy (the enemy cannot see it) | the grammar puts the enemy as the viewer | Fan-source
  - RULING: Assassinate and Creeping Shadow | the free Fight inside Assassinate is a Fight action, so Creeping Shadow's free Dash / Fall Back follows it | Creeping Shadow says "whenever this operative performs the Fight action" | Fan-source
- T-WYR.23 **Group Activation** (Warrior): when a Warrior is expended, you must next activate another ready friendly WARRIOR, if you have one, before the opponent activates. When that second Warrior is expended, play passes to the opponent as normal (never more than two in a row from this rule).
  - MECH: after expending a Warrior that was not itself the chained one, force the next PendingDecision to be "activate one of these ready Warriors" for the same seat (only those choices legal); clear the chain after the second | CLASS: generic:chainedActivation

### 6.5 Faction rules

- T-WYR.24 **Familiar Territory: going into HIDING.** When setting up operatives (R-1.5), up to one third of your kill team may instead be set up in HIDING: put to one side, not in the killzone. CULT AGENT operatives can never be in HIDING.
  - MECH: set-up decision lets the Wyrmblade player mark ≤ floor(N/3) NEOPHYTE operatives as `hiding` instead of placing them; they have no position and no order | CLASS: generic:hidingReserve
  - RULING: one-third rounding | round down on the number of operatives in the roster, which gives 4 for every legal roster (12, 13 or 14 operatives) | the source gives no rounding; rounding down never exceeds a third | Unsourced
- T-WYR.25 **Familiar Territory: activating a HIDING operative.** In the Firefight phase a HIDING operative is ready and activates like any other. On activation choose: expend it (it stays in HIDING), or emerge. To emerge, set it up in a placeable location wholly within 6" of your drop zone and more than 6" from every enemy operative, with an order of your choice. This counts as that operative performing the Reposition action (it costs 1 AP and carries Reposition's restrictions), then the activation continues. An emerging WARRIOR ignores Group Activation.
  - MECH: activation of a hiding op offers {expend, emerge}; emerge = choose order + choose position from the legal set (base wholly within drop zone expanded 6", >6" from all enemies, valid placement), recorded as a Reposition action (AP −1, Reposition marked performed so Charge and Fall Back are barred, R-3.7 bars a second Reposition) and as a set-up event for reactive rules; `expend` must always be legal so legalActions is never empty | CLASS: generic:hidingReserve
  - RULING: emerging and Heavy | emergence is a Reposition, so Heavy (Dash only) weapons (heavy stubber, mining laser, seismic cannon, stationary sniper rifle) cannot be used in the activation in which the operative emerges | Heavy (R-10.9) bars any move other than the named one | Confirmed
  - RULING: hidden Warrior that stays hidden | if a HIDING Warrior is activated and expended without emerging, its Group Activation still applies; the exemption is only for an emerging Warrior | the exemption sits in the emerge text | Fan-source
  - RULING: chaining into a hidden Warrior | a HIDING Warrior is a ready friendly WARRIOR, so Group Activation can (and, if it is the only ready Warrior, must) chain into it; it may then emerge or stay | "ready" is the only test | Fan-source
- T-WYR.26 **Familiar Territory: end of TP2.** Any friendly operative still in HIDING at the end of TP2 is incapacitated.
  - MECH: in the end-of-TP2 step, before scoring, incapacitate every op with `hiding`; no before-removal hooks fire (it is not in the killzone) | CLASS: generic:hidingReserve
  - RULING: kill op and HIDING | HIDING operatives count among the Wyrmblade starting operatives for the opponent's kill grade (M-2), and each one incapacitated at the end of TP2 counts as an incapacitated enemy for the opponent's kill op, scored with TP2 | the rule says "incapacitated" with no exception, and kill op counts incapacitated enemy operatives | Unsourced
  - RULING: end-of-TP2 removals and before-removal rules | A PLAN GENERATIONS IN THE MAKING and Overthrow the Oppressors cannot be used for these operatives | neither can act outside the killzone, and Overthrow needs visibility | Unsourced
- T-WYR.27 **Familiar Territory: what HIDING means while it lasts.** A HIDING operative is not in the killzone: it cannot be a target, does not see or block, cannot control or contest markers, does not count for "visible to" or "within x" checks of any rule, cannot be chosen by ploys or abilities that need an operative in the killzone (for example Divert and Disappear), cannot counteract (it has no Engage order in the killzone), and cannot trigger or be hit by mines. It is still ready / expended for activation alternation (R-3.2) and counteract preconditions (R-3.11). Its identity and the fact it is hiding are open information.
  - MECH: `hiding` operatives are skipped by every spatial query and target filter but kept in ready/expended accounting; `view(state, seat)` shows the hiding tray to both seats (no redaction) | CLASS: generic:hidingReserve
  - RULING: hidden information | no blips, decoys or secret identities: the rules put HIDING operatives "to one side", which in Kill Team is open information; `view` does not redact them | the 2024 rule has no hidden-marker mechanic (that was 2021) | Fan-source
  - RULING: counteract with HIDING operatives | while you have a ready HIDING operative you are not "all expended", so you cannot counteract and must activate it (expending it is allowed) | R-3.2 and R-3.11 count ready operatives, wherever they are | Unsourced
- T-WYR.28 **Cult Agent**: when an operative shoots a friendly CULT AGENT, ignore the Piercing and Saturate weapon rules; and if the defender can retain any cover saves, it may retain one more, or retain one as a crit instead. The extra/crit cover option does not stack with the improved cover save from Vantage.
  - MECH: defender hook on CULT AGENT targets: strip Piercing x, Piercing Crits x and Saturate from the attacker's weapon for the sequence; cover-save bonus reuses the Stealthy tactic implementation (T-AOD.16 #4) | CLASS: team-hook
  - RULING: Cult Agent and Piercing Crits | Piercing Crits x is also ignored | the core defines Piercing Crits as a form of the Piercing rule (same entry) | Unsourced
- T-WYR.29 **Cult Ambush**: while a friendly WYRMBLADE operative shoots or fights during its own activation, its weapons have Ceaseless if either (a) its order was switched from Conceal to Engage at the start of that activation, or (b) no enemy operative could see it at the start of that activation.
  - MECH: at `firefight.activationStart`, after the order pick, store `ambushReady = (prevOrder==conceal && newOrder==engage) || !anyEnemySees(op)`; attack-start hook grants Ceaseless when the attacker is the active operative in its own activation and the flag is set | CLASS: team-hook
  - RULING: Cult Ambush on emergence | an operative emerging from HIDING was not visible to any enemy at the start of its activation, so condition (b) holds and its weapons have Ceaseless for that activation | it was not in the killzone, so nothing could see it | Fan-source
  - RULING: Cult Ambush scope | not during counteractions, retaliation, interrupts (Quicksilver Strike, Guard), before-removal free actions or Strategy-phase free actions; only the operative's own activation | the rule says "during its activation" and counteracting is not an activation | Confirmed

### 6.6 Ploys and equipment

All ploys cost 1 CP.

- RULING: ploy costs | every Wyrmblade ploy costs 1 CP | the Wahapedia extract shows no costs; 1 CP is the 2024 default for faction ploys | Fan-source

| ID | Ploy | Type | Timing | Effect |
|---|---|---|---|---|
| T-WYR.30 | THE DAY IS AT HAND | Strategy | Gambit step | For the TP: whenever a friendly WYRMBLADE operative is activated and its order is switched from Conceal to Engage, until the end of that activation its ranged weapons have Rending and its melee weapons get +1 Atk (never above 5). |
| T-WYR.31 | CROSSFIRE | Strategy | Gambit step | For the TP: when a friendly WYRMBLADE operative shoots an enemy that a different friendly WYRMBLADE operative has already shot this TP, the shooter's ranged weapons have Accurate 1. |
| T-WYR.32 | ONE WITH THE SHADOWS | Strategy | Gambit step | For the TP: when an operative shoots a friendly WYRMBLADE operative that has a Conceal order, intervening Light terrain makes the target obscured, unless that Light terrain is within 1" of either operative. |
| T-WYR.33 | DIVERT AND DISAPPEAR | Strategy | Gambit step | Up to three friendly WYRMBLADE operatives immediately perform, one at a time in your chosen order, a free Dash or a free Charge (Charge capped at 3"). A CULT AGENT picked counts as two of the three, and may instead perform a free Fall Back capped at 3"; if it does, it has −1 APL until the end of its next activation. |
| T-WYR.34 | SLINK INTO DARKNESS | Firefight | End of a friendly WYRMBLADE operative's activation | If it has an Engage order, change it to Conceal. Each friendly operative can be chosen for this at most once per battle. |
| T-WYR.35 | COILED SERPENT | Firefight | A friendly WYRMBLADE operative is shooting or fighting, after rolling attack dice | If its order was switched from Conceal to Engage at the start of this activation and this is its first Shoot or Fight action of the activation, retain one normal success as a crit instead. At most once per activation. |
| T-WYR.36 | UNQUESTIONING LOYALTY | Firefight | A friendly CULT AGENT or LEADER is chosen as the valid target of a Shoot action or as the opponent of a Fight action | Choose another friendly NEOPHYTE (not the LEADER) visible to and within 3" of that operative; it becomes the target / the operative fought instead, even if it would not normally qualify. In a Fight, treat it as within the fighter's CR for that action. In a Shoot, it is in cover / obscured only if the original target was. No effect against a Shoot with a Blast or Torrent weapon. |
| T-WYR.37 | A PLAN GENERATIONS IN THE MAKING | Firefight | A friendly WYRMBLADE NEOPHYTE is incapacitated | Before it is removed, it may perform one free mission action. |

- T-WYR.30
  - MECH: TP-wide flag; at activation start, if order went conceal→engage, grant Rending to ranged weapons and Atk +1 (cap 5) to melee weapons until end of activation (includes Shoot/Fight inside that activation only) | CLASS: team-hook
  - RULING: The Day Is At Hand and Coiled Serpent on emergence | an operative emerging from HIDING had no Conceal order, so choosing Engage on emergence is not a "switch from Conceal"; these two ploys do not trigger for it (Cult Ambush still does via T-WYR.29 b) | HIDING operatives have no order until set up | Unsourced
- T-WYR.31
  - MECH: per-TP ledger of (targetId → set of friendly shooterIds), written for every shooting attack sequence (primary and Blast/Torrent secondaries, including free Shoots and counteractions); grant Accurate 1 when the ledger has a shooter ≠ the current one | CLASS: team-hook
  - RULING: Crossfire "already shot" | an enemy counts as shot by an operative once it has been the target of any shooting attack sequence by that operative this TP, secondary targets included, whatever the result | "shot" is not limited to the primary target in the core text | Fan-source
- T-WYR.32
  - MECH: TP-wide flag; obscured check (R-5.5) for Conceal WYRMBLADE targets also counts intervening Light terrain parts more than 1" from both operatives; the R-5.5 cover-vs-obscured same-feature choice applies to these features too | CLASS: team-hook
- T-WYR.33
  - MECH: ploy resolution queue of up to 3 "slots" (cult agent = 2 slots); per pick an ability.choice {free Dash, free Charge maxMove 3, (cult agent only) free Fall Back maxMove 3}; Fall Back applies −1 APL until end of next activation; each free action keeps its conditions (Charge needs an Engage order except the Talon, and must end in an enemy's CR; Fall Back needs an enemy in CR) | CLASS: generic:freeActionKinds
- T-WYR.34
  - MECH: firefight ploy at the end-of-activation window; per-operative once-per-battle ledger; sets order to Conceal | CLASS: team-hook
- T-WYR.35
  - MECH: firefight ploy in the after-roll window; gate on the T-WYR.29 order-switch flag, "first Shoot/Fight action this activation" and a once-per-activation flag; converts one normal to crit (subject to obscured, R-5.8) | CLASS: team-hook
  - RULING: Coiled Serpent with multiple sequences | within the first Shoot (Blast/Torrent) or Fight the ploy may be applied to any one of its attack sequences, once | the ploy cannot take effect more than once per activation | Fan-source
- T-WYR.36
  - MECH: defender-seat ploy window right after target / fight-opponent selection; swaps the defender id for the rest of the action, bypassing validity, visibility and Range for the new target; Shoot: copy the original target's cover/obscured state; Fight: treat the new defender as in the attacker's CR for the action; unavailable when the weapon has Blast or Torrent | CLASS: generic:targetRedirect
  - RULING: Unquestioning Loyalty validity | the substitute ignores Range, visibility, and the Conceal-in-cover rule; its cover and obscured status is copied from the original target, never computed | "even if it wouldn't normally be valid" | Fan-source
- T-WYR.37
  - MECH: before-removal hook (R-5.18) offering the ploy; the free mission action must meet that action's own conditions (marker in range, not in enemy CR if required, TP1 crit op ban M-4.1); counts as the one free action allowed by R-5.18 | CLASS: generic:freeActionKinds

| ID | Faction equipment | Effect |
|---|---|---|
| T-WYR.38 | BLASTING CHARGES | Once per TP (team-wide), one friendly NEOPHYTE may shoot with a Blasting charge (profile in 6.3). |
| T-WYR.39 | CULT KNIVES | Every friendly NEOPHYTE gains a Cult knife (profile in 6.3). |
| T-WYR.40 | EXPLOSIVE TRAPS | Gives two Mines markers (M-5.2) instead of one; you cannot also take the universal Mines option. Friendly WYRMBLADE operatives never trigger and are never damaged by your mines. |
| T-WYR.41 | SPOTLIGHTS | When a friendly WYRMBLADE operative shoots, the target cannot be obscured if it is visible to and within 6" of a friendly NEOPHYTE that is not within an enemy's CR. |

- T-WYR.38
  - MECH: team-wide once-per-TP limited weapon granted to NEOPHYTE operatives | CLASS: data
- T-WYR.39
  - MECH: weapon grant to NEOPHYTE operatives | CLASS: data
- T-WYR.40
  - MECH: equipment that places two mines markers (each >2" from other markers, including each other) and is mutually exclusive with universal Mines; mine trigger check skips operatives of the owning team when the owner is Wyrmblade | CLASS: team-hook
- T-WYR.41
  - MECH: obscured suppression at target selection when any in-killzone friendly NEOPHYTE (the shooter included) sees the target within 6" and has no enemy in its CR | CLASS: team-hook

Universal equipment (M-5) may also be chosen; the four-option limit covers faction and universal options together (M-5.12).

### 6.7 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-WYR: TEAM-WYR-000 to TEAM-WYR-017.

### 6.8 Generic capabilities (survey; resolved in the Engine map below)

- **hidingReserve**: operatives that start off the table. At set-up, let the owner mark eligible operatives (filter + count cap) as `hiding` instead of placing them. A hiding operative has no position or order, is skipped by every spatial query, target filter, marker-control count, visibility check and ploy/ability picker, but counts as ready/expended for activation alternation and counteract preconditions. Its activation offers {expend (stays hiding), emerge}. Emerge = pick an order and a set-up position from a rule-supplied region (here: wholly within drop zone + 6", >6" from all enemies, valid placement), then record it as a named action (here Reposition, with AP cost and restrictions) and emit a set-up event for reactive rules. A deadline step (here end of TP2) incapacitates any still hiding, without before-removal hooks, and they count for kill op. `view` shows the hiding tray to both seats (no redaction needed). AI needs a policy for both hiding at set-up and emerging. Used by T-WYR.24, T-WYR.25, T-WYR.26, T-WYR.27.
- **chainedActivation**: after a flagged operative is expended, the same seat must activate one more ready operative from a filtered set (if any) before the turn passes; at most one chained activation per trigger; a per-activation flag can suppress the chain. Used by T-WYR.23 (and its exemption in T-WYR.25).
- **reactiveInterrupt**: generalise the Guard interrupt frame (R-4.10) so a team rule can be offered to the non-active player after any enemy action tagged moved-or-set-up, in any phase (Strategy-phase free moves, emergence, Grappling Hook-style set-ups). Supports a feasibility pre-check, an optional order flip, a once-per-TP ledger spent only on success, and runs the reaction as a free action frame. Used by T-WYR.14.
- **freeActionKinds**: extend `FreeActionOpts` beyond dash/reposition/shoot/fight to `charge`, `fallBack` and `missionAction`, with options `maxMove` (3" caps), `noChargeBonus` (Move only), `mustEndWithinCrOf: operativeId`, `ignoreActivationRestrictions` (R-3.7 repeat ban and the Charge/Dash/Fall Back exclusions, but never positional conditions), `noRestrictionAfter` (this free Charge does not block a later Dash), and `lockTarget` for a following free Fight. Also allows a free action queue started from a Strategy ploy with weighted slots. Used by T-WYR.12, T-WYR.14, T-WYR.20, T-WYR.22, T-WYR.33, T-WYR.37 (and T-WYR.17's 0 CP Plan Generations option).
- **fightResolveOutOfOrder**: in Resolve Attack Dice of a fight, allow a rule to (a) insert one immediate block by one side before the first normal resolution, and (b) let the attacker resolve a second strike immediately after its first, before the opponent. Normal alternation resumes afterwards. Used by T-WYR.13, T-WYR.22.
- **targetRedirect**: a defender-seat ploy window right after a Shoot target or Fight opponent is chosen, which replaces the defender for the rest of the action, bypasses validity/visibility/Range for the substitute, copies the original target's cover and obscured state (Shoot) or treats the substitute as within the attacker's CR (Fight), and can be refused by weapon keyword (Blast, Torrent). Used by T-WYR.36.
- **weightedSelection**: generalise `halfSelections` to a per-datacard selection weight (0.5, 1, 2) in a slot's exact count. Used by T-WYR.5.
- **rosterGroupCaps**: per-slot maximums keyed by keyword (for example GUNNER ≤ 2, CULT AGENT ≤ 2), validated with the team builder's disabled-with-reason UI. Used by T-WYR.4.

### 6.9 Gotchas

- This is the 2024 team. No 2021 Cult Ambush (hidden ambush markers, blips, decoys) and no 40k 10th reserves: HIDING is open information, set up within 6" of your own drop zone, and expires at the end of TP2.
- Emerging is a Reposition: it costs 1 AP, forbids Charge and Fall Back for the rest of the activation, and Heavy (Dash only) weapons cannot fire that activation. An APL 2 Neophyte that emerges has one action left.
- Hiding operatives are ready: they block your counteract and you must activate them (expending them is legal). They are not in the killzone for anything else, and enemy rules that look for "operatives in the killzone" must skip them.
- Kill op: hiding operatives are starting operatives, and the end-of-TP2 incapacitation feeds the opponent's kill grade. Wyrmblade starts with 12 to 14 operatives, so use those rows of the kill grade table.
- Cult agents count as two selections, so a full roster has 12, 13 or 14 operatives, never 14 with agents. They can never hide.
- "Order switched from Conceal to Engage at the start of the activation" is a per-activation flag set when the order is chosen. Cult Ambush also fires when nothing could see the operative, but only in the operative's own activation; Day Is At Hand and Coiled Serpent need the switch itself.
- Ceaseless from Cult Ambush makes Heavy Weapon Bipod give Relentless instead, not both.
- Group Activation is mandatory ("must"), but at most two Warriors in a row; an emerging Warrior skips it.
- Quicksilver Strike reacts to enemy moves and set-ups in any phase (FAQ), can flip the Locus to Engage, cannot start if the Locus is already in an enemy's CR, and is not spent if the 3" Charge is impossible. The engine must not offer it when infeasible (legalActions never lists a dead choice).
- Assassinate: the Charge does not get +2" and the enemy must be unable to see the Talon; the Talon must have a Conceal order. Creeping Shadow follows the Fight but its free Dash still needs no enemy in CR and its Fall Back needs one.
- Expert Swordsman's free Charge exempts only itself from blocking Dash; a normal Charge earlier in the activation still blocks Dash.
- Soulsight is one token per team, shared by Sniper and Talon; doing the action with either moves it.
- Unquestioning Loyalty picks a Neophyte other than the Leader, ignores range and sight, copies cover/obscured from the original target, and does nothing against Blast or Torrent.
- Before-removal free actions (Overthrow free Shoot, Plan Generations mission action) keep their normal conditions and R-5.18 allows only one per incapacitated operative. Overthrow needs the victim to be ready (not yet activated this TP).
- Cult knives and Blasting charges go to NEOPHYTE operatives only (the Leader included, cult agents excluded). Heavy Weapon Bipod covers datacard weapons only, not the Blasting charge.
- Explosive Traps' mines ignore Wyrmblade operatives completely; the two mines must still be more than 2" from each other and other markers.
- Spotlights and One With the Shadows both change obscured: Spotlights removes it from enemies near a free Neophyte; One With the Shadows adds it (from Light terrain) to Conceal Wyrmblade targets.
- The Leader's autogun/shotgun have better Hit than the Warrior/Icon versions; option (c) Leaders have no gun butt.
- No Wyrmblade figure is a familiar or a non-operative: nothing here needs a "beast/familiar" capability.

### 6.10 Engine map

| Survey capability | Built as |
|---|---|
| hidingReserve | providers `setAsideAtSetup` (NEOPHYTE) and `setAsideCap` (floor(N/3)); the operative keeps `offboard: 'setAside'`, is readied and activated, and acts only through provider `offboardActions` (the emerge unique action, whose hook offers `placementSpots` within 6" of the drop zone and more than 6" from enemies, then `returnToKillzone` and `treatedAs: 'reposition'`); the TP2 deadline is a `turningPoint.end` handler calling `incapacitateOffboard` |
| chainedActivation (Group Activation) | provider `chainActivation` (skip when the expended Warrior just emerged) |
| reactiveInterrupt (Quicksilver Strike) | provider `reactions` (offered after any action that moved or set up an enemy, in activations and counteractions; RULING for Strategy-phase moves) and a choice hook that starts `startFreeAction({ action: 'charge', maxMove: 3, endWithinCrOf })` with `resume: REACTION_DONE` |
| freeActionKinds (Expert Swordsman, Creeping Shadow, Assassinate, Divert and Disappear, Plan Generations) | `startFreeAction` with `charge` / `fallBack`, `maxMove`, `endWithinCrOf`; `startDelegatedAction({ allow: ['mission'] })` for the free mission action |
| fightResolveOutOfOrder (Bladed Stance, Assassinate) | providers `fightResolveStart` (`queue: [{ seat, blockOnly: true }]`) and `afterFightResolution` (owe the attacker a second strike) |
| targetRedirect (Unquestioning Loyalty) | firefight ploy at `shoot.targetSelected` / `fight.weaponsSelected` calling `redirectAttack` |
| weightedSelection, rosterGroupCaps | team.json slot `weights` (cult agents 2) and `caps` (GUNNER 2, HEAVY GUNNER 2, CULT AGENT 2) |
| Cult Ambush, The Day Is At Hand, Coiled Serpent | `activation.start` hook records the order switch and "unseen" state (`data.previousOrder`), `modifyWeaponRules` adds Ceaseless / Rending, `modifyAttackDice` adds Atk |
| Cult Agent | `modifyWeaponRules` strips Piercing and Saturate against the target; provider `stealthyCover` returns 1 |
| Icon Bearer control +1 | provider `controlApl` |
| Explosive Traps | equipment with `count: 2`, `hidden: true`, `effect: { code: 'mines' }` (the engine treats it as a mine), `excludes: ['core.e.mines']`, provider `ignoresMine` for friendly Wyrmblade operatives |
| Hypersense, Spotlights, Soulsight, One With the Shadows | `target.status` (obscured off or on), Soulsight token via `moveTokenTo` |
| Heavy Weapon Bipod | `Operative.movedThisActivation === 0` or counteracting, in `modifyWeaponRules` |

### 6.11 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/wyrmblade/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `wyr.<name>`, `wyr.w.`, `wyr.a.`, `wyr.p.`, `wyr.e.`)
  - `src/engine/teams/wyrmblade.ts` (code hooks, `registerTeamRules`, hook handlers)
  - `src/client/teams/wyrmblade.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins)
  - `tests/engine/teams/wyrmblade.test.ts` (TEAM-WYR-nnn tests) and `tests/engine/teams/wyrmblade.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 6 and `12-rules-test-checklist.md` section TEAM-WYR (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/wyrmblade/team.json`. Flip it (with `defaults` filled and every weapon in `src/client/teams/wyrmblade.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. HIDING is the defining rule: TEAM-WYR-003 to TEAM-WYR-007
  first. The deploy answer is `act.setAside(pending, id)`; `pending.context.setAsideIds` lists who may.
- RULING lines expected: one-third rounding, emerging and Heavy, hidden Warriors and Group Activation,
  kill op and HIDING, end-of-TP2 removals, hidden information (none), counteract with HIDING operatives,
  Shadow Vector, Expert Swordsman, Quicksilver Strike eligibility and Guard ordering (and the
  Strategy-phase moves it cannot react to yet), Overthrow conditions, Soulsight supply, Assassinate,
  Cult Agent and Piercing Crits, Cult Ambush scope and emergence, ploy costs, Crossfire, Coiled Serpent,
  Unquestioning Loyalty validity.
- Gotchas: section 6.9. HIDING is open information (no blips, no decoys): `view` hides nothing. Hiding
  operatives are ready, so they block counteracting. Model each Gunner and Heavy Gunner weapon variant as
  its own datacard id so "each entry once" and the GUNNER caps work.

### 6.12 As built (M9)

Files: `src/data/teams/wyrmblade/*.json`, `src/engine/teams/wyrmblade.ts`, `src/client/teams/wyrmblade.ts`,
`tests/engine/teams/wyrmblade.{test,hooks}.ts`. Datacard ids `wyr.<name>` (each Gunner and Heavy Gunner weapon is
its own card, figure archetype `wb-neophyte-gunner` / `wb-neophyte-heavy-gunner` with a `variant`).

- Code hooks named by the data (12): `shadowVector` (registers the ploy rule at game creation, because ploys.ts is
  still loading when the team modules are imported), `emerge`, `targetVulnerability`, `soulsight`, `assassinate`,
  `quicksilverStrike`, `overthrowOppressors`, `planGenerations`, `tpFlagPloy` (The Day Is At Hand, Crossfire, One With
  The Shadows), `divertAndDisappear`, `slinkIntoDarkness`, `coiledSerpent`, `unquestioningLoyalty`. Every other rule is a
  provider answer or a hook handler keyed on the datacard ability ids, so it needs no code name.
- Per-activation state is one effect (`wyr.activation`, set by `activation.start`): `switched`, `unseen`, `ambush`,
  `coiledUsed`. Cult Ambush counts only while the operative is the attacker of the sequence being worked out.
- Before-removal free actions are one `ability.choice` raised from the `operative.incapacitated` hook while the removal
  queue is running; the removal queue is saved in the frame data and put back when the free action ends.
- Expert Swordsman and Creeping Shadow are choices in the `firefight.actionEnded` ploy window (cost 0, started with
  `startFreeAction`); Assassinate, Quicksilver Strike and Divert and Disappear use `startFreeAction` frames with their
  own frame resumes; Bladed Stance and Assassinate's second strike use `fightResolveStart` / `afterFightResolution`.
- Not modelled: the AI never sets operatives aside (its deploy policy answers placement only) and the client has no
  "set aside" control yet, so HIDING is reachable by rule-level tests and by hand-built answers only.
