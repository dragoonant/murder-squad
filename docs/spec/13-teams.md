# 13 - Kill teams: Angels of Death and Kommandos (v1); Pathfinders, Hierotek Circle, Plague Marines and Wyrmblade (M9 batch A); Legionaries, Hand of the Archon, Hunter Clade and Hearthkyn Salvagers (M9 batch B)

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
  - RULING: hidden information | no blips, decoys or secret identities: selections are revealed before set-up and the rules put HIDING operatives "to one side" in the open; `view` does not redact them and the client shows both seats' hidden operatives in the HIDING tray (the opponent's marked as theirs) | the core sequence has no secret step after selection and the 2024 rule adds no hidden-marker mechanic (that was 2021) | Confirmed
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

## Teams added in M9 batch B (Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers)

Sections 7 to 10 use the layout of sections 3 to 6 (MECH and CLASS lines, survey, gotchas, Engine map, Implementer
brief). The batch B engine prep built the shared capabilities below (`00-architecture.md` section 11, row M9 batch B
prep); every team keeps using the batch A layer listed above. The implementer rules above apply unchanged, with id
prefixes `lg.`, `ha.`, `hc.`, `hk.` and figure archetypes `lg-`, `ha-`, `hc-`, `hk-` plus the operative slug.

| Capability | Where | What it gives a team |
|---|---|---|
| Oval bases | `src/engine/footprint.ts`; datacard `ovalBase { long, short, weapons? }`; `Operative.ovalHalfAxis`; payload `facing` on `move.path` and `setup.deploy` (`actions.pathFacing`, `deployFacing`) | an oval is three discs of the short-axis radius on the long axis (along `facing`); distance, control range, overlap, wholly within, LoS samples, cover, smoke and placement use it; it keeps its facing while translating and turns in place at the end of a move, paying the tip's arc rounded up; round bases are unchanged |
| Operative keyword picks | team.json `operativeChoices`; `RosterEntry.picks`; `Operative.picks`; `src/engine/operative-picks.ts` | a keyword each operative takes at selection (Marks of Chaos), with exclusions; a real keyword for `hasKeyword`, public, changed only by `setOperativePick` (`OperativePickChanged`); defaults and the Team Builder picker |
| Roster caps | team.json `selection.caps` (keyword or ids, over every slot), `selection.loadoutCaps` (weapons, max, `each`); `defaults.loadouts`, `defaults.operativePicks` | at most five SICARIAN with the leader; at most two darklight weapons; one of each Gunner special weapon; `capAwareLoadouts` picks legal default loadouts |
| Equipment limit | datacard `extraEquipment`; `equipment.equipmentLimitFor` | one more equipment option while a Lugger is on the roster (setup, builder) |
| Declaration hook | hook `action.declared` (`cancel`, `bar`, dice through `engine`); `Activation.barred` | Daemonic Aura, Chain Snare: cancel a declared action with no AP spent and bar it for the activation |
| Activation-end reactions | `reactions` with `ReactionInfo.activationEnded` / `counteract` | the Butcher's free Charge after an enemy activation or counteraction |
| New ploy windows | `firefight.opponentActionDeclared`, `firefight.beforeActivation` (+ `skipActivation`), `ploy.opponentUsed` (nested over an open window), `operative.killed`, `shoot.beforeAttackRerolls`, `shoot.beforeDefenceRoll`, `shoot.defenderBeforeRerolls` | Scrapcode Overload, Heinous Arrogance, Devious Scheme, Vitalised Surge and Brutal Display, Engage to Acquire, Refractor Field and Omnissiah's Imperative, Stimulated Senses and Prey on the Wounded |
| Dice | attack hook `diceRolled`; `attack-common.forcedReroll`; `RerollGrant.values` | Omen: forced re-rolls of 6s, re-roll grants limited to 1s |
| Ploy costs and gambits | ployRule `costSurcharge`; hook `gambit.passed` | Devious Scheme's +1 CP; Cunning |
| Activation control | providers `canActivate`, `initiativeReroll` / `onInitiativeReroll`; `firefight.joinActivation` (`Activation.partner`, option `switch`) | System Jam; Writ of Claim; Extremis Mind-Link |
| Fights | provider `blockCapacity` (option `block2:`); `fight.extraStrike` | Tangle; Unending Bloodshed, Brawler |
| Movement | provider `canFly` + payload `fly` (`movement.planFly`, `actions.fly`); `movement.forcedMoveSpots` / `applyForcedMove` | Jump Pack; Knux Smash |
| Grenades | provider `ownGrenades` (weapons and actions per battle); `grenadeSource` `own` | Hearthkyn Grenadier |
| Terrain queries | `los.interveningTraits`, `los.baseUnderVantage`, `TargetVerdict.interveningParts` | Denizens of Night, Rad Bombardment |

Not built (each brief names the team-local fallback): a retained-crit hook and beam-line helper (Hearthkyn Beam),
a shared timed-marker expiry (Utility Grenade), a weapons-only ignore-injury flag, a Hit-only injury equivalent, a
non-ploy faction gambit record, a pre-battle operative pick decision (Omen is picked at the first Firefight phase
start, RULING), conditional team choices, and a window before the order is chosen. The client draws oval bases as
discs and has no turn control yet; the arquebus Gunner needs both before Hunter Clade is play-tested.

## 7. Legionaries

Rule IDs: `T-LG.<n>`. Checklist IDs: `TEAM-LG-<nnn>`. Sources: the Legionaries team PDF (Kill Team 2024, Faction version 3, October '25, including its update log, which lists the October '25 errata and the earlier ones) and the Wahapedia Legionaries page (same version, October 2025; its FAQ panel is empty for this team), plus the core rules page for terms. The PDF is the primary source: facts read from it are Confirmed; our own calls are Unsourced. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms are defined in `10-rules-core.md` (cited R-x.y), universal equipment in `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 7.1 Team selection

- T-LG.1 Roster is exactly 6 operatives: 1 leader (ASPIRING CHAMPION or CHOSEN) plus 5 picks from the main list.
  - MECH: roster validator: leader slot count 1 from two datacards, main slot count 5 | CLASS: data
- T-LG.2 Main list: ANOINTED, BALEFIRE ACOLYTE, BUTCHER, GUNNER, HEAVY GUNNER, ICON BEARER, SHRIVETALON, WARRIOR. Every entry except WARRIOR at most once; WARRIOR may be taken any number of times (up to all 5). No half selections, nothing counts as two, no per-keyword caps and no weapon caps across operatives.
  - MECH: main slot `repeatable: ["lg.warrior"]` | CLASS: data
- T-LG.3 Loadouts (one legal option tree per card):
  - ASPIRING CHAMPION: one pistol (plasma pistol, both profiles, or tainted bolt pistol) and one melee weapon (power fist, power maul, power weapon or tainted chainsword): 8 loadouts.
  - CHOSEN: daemon blade plus either the plasma pistol or the tainted bolt pistol.
  - GUNNER: bolt pistol and fists plus one of flamer, meltagun or plasma gun (both profiles).
  - HEAVY GUNNER: bolt pistol and fists plus one of heavy bolter (both profiles), missile launcher (both profiles) or reaper chaincannon (both profiles).
  - ICON BEARER and WARRIOR (each separately): boltgun and fists, or bolt pistol and chainsword.
  - ANOINTED, BALEFIRE ACOLYTE, BUTCHER, SHRIVETALON: fixed loadout, no picker.
  - MECH: datacard `weapons.options` (a `from` slot pair for the Champion, `sets` slots for the rest); profile groups bring both profiles | CLASS: data
- T-LG.4 Archetypes: SECURITY, SEEK & DESTROY (tac ops out of scope for v1).
  - MECH: team.json archetypes | CLASS: data
- T-LG.5 **Marks of Chaos selection**: when the roster is chosen, each LEGIONARY operative is given exactly one of the keywords KHORNE, NURGLE, SLAANESH, TZEENTCH, UNDIVIDED for the battle. Operatives may differ (any mix, repeats allowed, the leader included). A BALEFIRE ACOLYTE can never be KHORNE. The keyword is a real keyword of that operative for every rule that reads keywords (ploy scopes, Chaos Talismans, other teams' rules), is public information, and is shown on the figure (mark token) and in the operative panel. Only Infernal Pact (T-LG.20) changes it during the battle.
  - MECH: per-operative selection choice stored on the roster entry and on the operative; `hasKeyword` must see it | CLASS: generic:operativeKeywordChoice
  - RULING: Marks of Chaos visibility | the chosen mark is open information from set-up (both seats see every mark in `view`) | the PDF provides public mark tokens for the figures and nothing says the pick is secret | Confirmed
- T-LG.6 **Bolt weapons**: for ASTARTES (T-LG.27) a bolt weapon is a weapon named bolt pistol, boltgun or tainted bolt pistol. TAINTED ROUNDS (T-LG.37) names only bolt pistol and boltgun, so the tainted bolt pistol does not qualify for it.
  - MECH: name test (R-9.8) in the team file | CLASS: team-hook
  - RULING: Tainted Rounds and the tainted bolt pistol | not eligible | ASTARTES lists the tainted bolt pistol separately from the bolt pistol, so the shorter list is deliberate; the pistol already has Rending, so nothing is lost | Confirmed
- T-LG.7 **PSYCHIC** (weapon tag on Fireblast, Life siphon, Fell dagger): no effect on its own; other teams' rules may read it. Unlike Plague Marines, PSYCHIC weapons do not satisfy ASTARTES.
  - MECH: team-local weapon rule `lg.a.wr-psychic` with no resolver | CLASS: data

### 7.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| LEGIONARY ASPIRING CHAMPION | 3 | 6" | 3+ | 15 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, LEADER, ASPIRING CHAMPION |
| LEGIONARY CHOSEN | 3 | 6" | 3+ | 15 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, LEADER, CHOSEN |
| LEGIONARY ANOINTED | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, ANOINTED |
| LEGIONARY BALEFIRE ACOLYTE | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, PSYKER, BALEFIRE ACOLYTE |
| LEGIONARY BUTCHER | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, BUTCHER |
| LEGIONARY GUNNER | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, GUNNER |
| LEGIONARY HEAVY GUNNER | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, HEAVY GUNNER |
| LEGIONARY ICON BEARER | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, ICON BEARER |
| LEGIONARY SHRIVETALON | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, SHRIVETALON |
| LEGIONARY WARRIOR | 3 | 6" | 3+ | 14 | 32 | LEGIONARY, CHAOS, HERETIC ASTARTES, WARRIOR |

Every operative also gains its mark keyword (T-LG.5). Stats and bases agree between the PDF and Wahapedia for all ten cards.

### 7.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Plasma pistol (standard) | R | 4 | 3+ | 3/5 | Range 8", Piercing 1 | Aspiring Champion, Chosen (option) |
| Plasma pistol (supercharge) | R | 4 | 3+ | 4/5 | Range 8", Hot, Lethal 5+, Piercing 1 | Aspiring Champion, Chosen (option) |
| Tainted bolt pistol | R | 4 | 3+ | 3/5 | Range 8", Rending | Aspiring Champion, Chosen (option) |
| Power fist | M | 5 | 4+ | 5/7 | Brutal | Aspiring Champion (option) |
| Power maul | M | 5 | 3+ | 4/6 | Shock | Aspiring Champion (option) |
| Power weapon | M | 5 | 3+ | 4/6 | Lethal 5+ | Aspiring Champion (option) |
| Tainted chainsword | M | 5 | 3+ | 4/5 | Rending | Aspiring Champion (option) |
| Daemon blade | M | 5 | 3+ | 4/7 | Lethal 5+ | Chosen |
| Bolt pistol | R | 4 | 3+ | 3/4 | Range 8" | Anointed, Balefire Acolyte, Butcher, Gunner, Heavy Gunner, Shrivetalon; Icon Bearer and Warrior (option) |
| Daemonic claw | M | 5 | 3+ | 4/5 | Rending (plus Ceaseless, Lethal 5+ after T-LG.11) | Anointed |
| Fireblast | R | 4 | 3+ | 3/4 | PSYCHIC, Blast 2", 1" Devastating 1, Saturate | Balefire Acolyte |
| Life siphon | R | 5 | 3+ | 3/3 | PSYCHIC, Saturate, Siphon Life | Balefire Acolyte |
| Fell dagger | M | 5 | 3+ | 3/4 | PSYCHIC, Rending, Siphon Life | Balefire Acolyte |
| Double-handed chainaxe | M | 5 | 4+ | 5/7 | Brutal | Butcher |
| Flamer | R | 4 | 2+ | 3/3 | Range 8", Saturate, Torrent 2" | Gunner (option) |
| Meltagun | R | 4 | 3+ | 6/3 | Range 6", Devastating 4, Piercing 2 | Gunner (option) |
| Plasma gun (standard) | R | 4 | 3+ | 4/6 | Piercing 1 | Gunner (option) |
| Plasma gun (supercharge) | R | 4 | 3+ | 5/6 | Hot, Lethal 5+, Piercing 1 | Gunner (option) |
| Heavy bolter (focused) | R | 5 | 3+ | 4/5 | Heavy (Reposition only), Piercing Crits 1 | Heavy Gunner (option) |
| Heavy bolter (sweeping) | R | 4 | 3+ | 4/5 | Heavy (Reposition only), Piercing Crits 1, Torrent 1" | Heavy Gunner (option) |
| Missile launcher (frag) | R | 4 | 3+ | 3/5 | Blast 2", Heavy (Reposition only) | Heavy Gunner (option) |
| Missile launcher (krak) | R | 4 | 3+ | 5/7 | Heavy (Reposition only), Piercing 1 | Heavy Gunner (option) |
| Reaper chaincannon (focused) | R | 5 | 3+ | 3/4 | Ceaseless, Heavy (Reposition only), Punishing | Heavy Gunner (option) |
| Reaper chaincannon (sweeping) | R | 4 | 3+ | 3/4 | Ceaseless, Heavy (Reposition only), Punishing, Torrent 2" | Heavy Gunner (option) |
| Boltgun | R | 4 | 3+ | 3/4 | none | Icon Bearer, Warrior (option) |
| Chainsword | M | 5 | 3+ | 4/5 | none | Icon Bearer, Warrior (option) |
| Fists | M | 4 | 3+ | 3/4 | none | Gunner, Heavy Gunner; Icon Bearer and Warrior (option) |
| Flensing blades | M | 5 | 3+ | 3/5 | Lethal 5+ | Shrivetalon |
| Malefic blade (equipment) | M | 5 | 3+ | 3/4 | none | every friendly LEGIONARY via T-LG.39 |

Notes: 29 profiles over 24 weapons. The Chosen's pistols are the same profiles as the Champion's (shared ids). Siphon Life (T-LG.12) is a team-local weapon rule; PSYCHIC is a tag (T-LG.7). No Legionary weapon has Severe, Balanced or Relentless natively.

UNCLEAR (resolved): the PDF layout extract scrambles the Champion and Heavy Gunner tables (Hit/Dmg and WR columns are listed in one block, out of row order). The values were rebuilt from the PDF columns read top to bottom and match Wahapedia row for row; no number differs between the sources.
UNCLEAR (resolved): Fireblast, Life siphon and both plasma gun profiles print no Range in either source. Kept as printed: no Range rule, so any valid target can be picked. RULING: Fireblast, Life siphon and plasma gun range | no Range rule, unlimited | both sources omit it on the same rows while every pistol on the same cards prints Range 8" | Confirmed
UNCLEAR (resolved): the Meltagun prints Dmg 6/3 (a crit deals less than a normal success, offset by Devastating 4). Kept as printed; never tune printed numbers. RULING: Meltagun damage | 6/3 as printed, Devastating 4 on each retained crit as well | identical in the PDF and Wahapedia; the low crit value is the 2024 melta pattern | Confirmed

### 7.4 Operative rules and unique actions

- T-LG.8 **In the Eyes of the Gods** (Aspiring Champion): the first time in each of its own activations that it incapacitates an enemy operative, its APL goes up by 1 until that activation ends. It takes effect once the current action has finished (R-3.16) and is subject to the ±1 cap (R-9.6); the extra AP can be spent in the same activation (R-3.15).
  - MECH: `damage.inflicted` handler (woundsAfter <= 0, attacker is the Champion, the current activation is the Champion's and not a counteraction or another operative's frame) adds a timed APL effect +1 that expires at its activation end; per-activation ledger | CLASS: team-hook
  - RULING: In the Eyes of the Gods scope | only in the Champion's own activations (Shoot, Fight, its Hot never counts as incapacitating an enemy); retaliating in an enemy activation and counteracting never qualify | a counteraction is not an activation (core), and the card says "this operative's activations" | Unsourced
- T-LG.9 **Daemonic Aura** (Chosen): when an enemy operative within the Chosen's control range starts a Fall Back action, you may roll a D6; on 3+ the Fall Back is cancelled, its AP is given back, and that enemy cannot Fall Back again for the rest of that activation or counteraction. On 1-2 the Fall Back goes ahead.
  - MECH: at the declaration of the enemy's Fall Back (normal or free), roll D6; on 3+ cancel the declared action (R-3.8 cancel, no AP spent) and forbid `fallBack` for that operative until its activation or counteraction ends | CLASS: generic:opponentActionVeto (plus provider `actionForbidden`)
  - RULING: Daemonic Aura use | always used when it can be (no prompt) | the roll has no downside, and the declaration point raises no decision for the non-active player | Unsourced
  - RULING: Daemonic Aura and free Fall Back | a free Fall Back from another rule is cancelled too (no AP to refund) | the trigger is performing the Fall Back action, whatever paid for it | Unsourced
- T-LG.10 **Soul Gorge** (Chosen): after the Chosen fights or retaliates, if it is still in play and during that sequence it incapacitated the enemy fighter or dealt it damage with a crit strike, it regains D3+1 lost wounds (never above starting wounds).
  - MECH: `onFightResolved` handler (Chosen is attacker or defender, not incapacitated; enemy fighter incapacitated, or a `strike-crit` damage from the Chosen recorded in that sequence by `onDamageInflicted`) then `effects.regainWounds(D3+1)` | CLASS: team-hook
  - RULING: Soul Gorge errata | the "or inflicted Critical Dmg" clause applies | the PDF update log lists it as an amendment (previous errata) and never reverses it; the card text in the same PDF and on Wahapedia lags behind | Unsourced
- T-LG.11 **Unleash Daemon** (Anointed): once per battle, when the Anointed is activated, you may unleash it for the rest of the battle: (a) it can no longer perform Pick Up Marker or mission actions (Operate Hatch is still allowed), and if it is carrying a marker it places it at once for 0 AP (this beats every other rule); (b) any attack die whose Normal or Critical Dmg is 4 or more deals 1 less damage to it; if it is also NURGLE, a single attack die is never reduced by more than 1 in total (Disgusting Vigour and this rule never stack on the same die); (c) its daemonic claw gains Ceaseless and Lethal 5+. An Unleash Daemon token marks it.
  - MECH: 0 CP offer in the owner's `firefight.activationStart` window (once-per-battle ledger, Kauyon pattern); sets a battle-long flag/effect; provider `actionForbidden` for `marker:pickUp` and mission action ids; immediate Place Marker for 0 AP at its own position via the markers helper; `onDamageInflicted` -1 for sources `normal`, `crit`, `strike-normal`, `strike-crit` when the die's Dmg is 4+; `modifyWeaponRules` adds Ceaseless and Lethal 5+ to the claw | CLASS: team-hook
  - RULING: Unleash Daemon and Devastating | Devastating damage and other non-dice damage are never reduced | the rule names Normal and Critical Dmg, and Devastating is its own damage (R-5.15) | Unsourced
  - RULING: Unleash Daemon forced Place Marker | the carried marker is placed at the Anointed's own position (within its control range) | the PDF demands an immediate 0 AP Place Marker and the base centre is always a legal spot | Unsourced
  - RULING: Unleash Daemon with NURGLE | when a die qualifies for both (Normal Dmg 4+), apply Unleash Daemon's -1 and skip the Disgusting Vigour roll; a die of exactly 3 normal damage rolls Disgusting Vigour only | the card's errata caps one die's reduction at 1 | Confirmed
- T-LG.12 **Siphon Life** (team-local weapon rule; Life siphon, Fell dagger): when the Balefire Acolyte attacks with such a weapon, at the start of the Resolve Attack Dice step you may pick one friendly LEGIONARY operative visible to and within 6" of the Acolyte (the Acolyte itself qualifies). Each of your attack dice resolved in that step that deals damage makes the picked operative regain 1 lost wound, or D3 if it was a crit. At most once per TP in total across both weapons.
  - MECH: 0 CP offer to the Acolyte's seat at `shoot.defenceRolled` (shooting) or `fight.rolled` (fighting: after re-rolls, before the first strike); then `damage.inflicted` from the Acolyte's sequence with source `normal`/`crit`/`strike-normal`/`strike-crit` and wounds lost > 0 calls `effects.regainWounds`; once-per-TP ledger spent when picked | CLASS: team-hook
  - RULING: Siphon Life choice point | picked at the start of the Resolve Attack Dice step, not when the weapon is chosen; declining keeps the TP use | the errata makes the pick optional ("you can select") and places it at that step | Unsourced
  - RULING: Siphon Life self-target | allowed | core rules state an operative is always visible to and within any distance of itself | Confirmed
  - RULING: Siphon Life in Blast or Torrent | not relevant: neither weapon has Blast or Torrent; with Life siphon only the single target's sequence counts | as printed | Confirmed
- T-LG.13 **Devastating Onslaught: no assists** (Butcher): while the Butcher is fighting or retaliating, enemy operatives cannot assist the enemy fighter.
  - MECH: `modifyAttackDice` clears `assists` for the enemy side of a fight that involves the Butcher | CLASS: team-hook
- T-LG.14 **Devastating Onslaught: reactive Charge** (Butcher): at the end of each enemy operative's activation or counteraction, you may pick one enemy operative within 2" of the Butcher (no visibility needed); the Butcher then performs a free Charge, moving at most 2", that must end within control range of the picked enemy. You may switch the Butcher's order to Engage to do so. Normal Charge conditions still apply (not already within an enemy's control range).
  - MECH: reaction point for the non-active seat at the end of every enemy activation and counteraction; offers only enemies for which a legal 2" path exists (no dead choices); `startFreeAction({ action: 'charge', maxMove: 2, endWithinCrOf })` with an optional order flip | CLASS: generic:activationEndReaction
  - RULING: Butcher reaction timing | after the enemy's own end-of-activation ploy window and `activation.end` hooks, before the next activation is chosen; it is offered whether the Butcher is ready or expended | the trigger is the end of the enemy activation; free actions ignore readiness | Unsourced
  - RULING: Butcher free Charge and counteract | it is not a counteraction and does not use the Butcher's counteract for the TP; it does not count against a later Charge in the Butcher's own activation | it happens outside the Butcher's activation (R-3.7 action restrictions are per activation) | Unsourced
- T-LG.15 **Icon Bearer** (Icon Bearer): when working out marker control (R-8.6) this operative's APL counts as 1 higher. This is not an APL change, so it stacks with real APL changes and ignores the R-9.6 cap.
  - MECH: provider `controlApl` (apl + 1) | CLASS: team-hook
- T-LG.16 **Favoured of the Dark Gods** (Icon Bearer): in the Ready step of each Strategy phase, if the Icon Bearer controls an objective marker that no one has tainted yet, that marker becomes tainted for the rest of the battle and you gain 1 CP. A tainted marker can never be tainted again, by either player.
  - MECH: `turningPoint.start` handler: objective markers in the Icon Bearer's control range that its seat controls (`controlledBy`), not in the battle-long tainted ledger; taint one, `gainCp(1)`; the tainted state is shown on the marker | CLASS: team-hook
  - RULING: Favoured of the Dark Gods count | at most one marker and 1 CP per Ready step; when two qualify, the one nearest the Icon Bearer | the rule grants a single CP, and the step raises no decision | Unsourced
- T-LG.17 **Vicious Reflexes** (Shrivetalon): when it retaliates, its side resolves the first die of the fight instead of the attacker's.
  - MECH: provider `fightResolveStart` (`first` = the Shrivetalon's seat when it is the defender) | CLASS: team-hook
  - RULING: Vicious Reflexes against another resolve-first rule | the active operative's player decides (R-9.4 step 5) | both are team rules saying "can", neither says it takes precedence | Unsourced
- T-LG.18 **Horrifying Dismemberment** (Shrivetalon): when the Shrivetalon incapacitates an enemy operative while fighting or retaliating, pick one other enemy operative visible to and within 3" of the Shrivetalon or of the incapacitated enemy; its APL goes down by 1 until the end of its next activation (R-9.6 cap, Stun-style).
  - MECH: 0 CP offer to the Legionaries seat in the `fight.resolved` window (opened for both seats, while the incapacitated enemy is still in place); candidates measured from both operatives; timed APL -1 via `applyAplEffect` | CLASS: team-hook
  - RULING: Horrifying Dismemberment pick | offered as a choice at the end of the fight sequence (the AI always takes it); if no other enemy qualifies, nothing happens | the rule says "select", and the window is the only point with the victim still in the killzone | Unsourced
- T-LG.19 **GRISLY MARK** (Shrivetalon, 2 AP unique action): place your Grisly marker within the Shrivetalon's control range. While an enemy operative is within 3" of it (no visibility needed), that enemy pays 1 extra AP for Pick Up Marker and for mission actions. When marker control is worked out, the opponent's contesting total APL is 1 lower if at least one of those contesting enemies is within 3" of the Grisly marker (not an APL change). Once per battle; not while in an enemy's control range. The marker stays for the rest of the battle.
  - MECH: unique action that places a team marker (Cloud of Flies pattern, spot from `placementSpots` within 1"); provider `actionCostDelta` (+1 for `marker:pickUp` and mission action ids); provider `controlTotal` (-1 for the enemy seat) | CLASS: team-hook
  - RULING: Grisly marker lifetime | it stays until the end of the battle, even if the Shrivetalon is incapacitated | the rule gives no removal condition | Unsourced
- T-LG.20 **Infernal Pact** (Warrior): once per battle (for the whole kill team), when a friendly WARRIOR is activated, you may change its Marks of Chaos keyword to a different one (any of the five). The old mark's rule stops and the new one applies at once, before its first action.
  - MECH: 0 CP offer per mark in the owner's `firefight.activationStart` window (once-per-battle ledger); changes the operative's chosen keyword; event for the feed and the figure token; blocked when Mutability and Change was used on that Warrior this TP | CLASS: generic:operativeKeywordChoice (mutable)
  - RULING: Infernal Pact target mark | must differ from its current mark; KHORNE is allowed (only the Balefire Acolyte is barred from it) | "change" implies a different keyword | Unsourced

### 7.5 Faction rules

- T-LG.21 **MARKS OF CHAOS**: each friendly LEGIONARY operative has the rule of its mark (T-LG.22 to T-LG.26), and the team's ploys give extra or different benefits to operatives with a given mark (7.6).
  - MECH: one ability per mark in team.json `factionRules`, each scoped to the mark keyword | CLASS: data (needs generic:operativeKeywordChoice)
- T-LG.22 **KHORNE: Wrathful Onslaught**: its melee weapons have Severe.
  - MECH: ability effect `grantWeaponRule` Severe, filter melee, scope keyword KHORNE | CLASS: data
- T-LG.23 **NURGLE: Disgusting Vigour**: whenever an attack die whose Normal Dmg is 3 or more deals damage to it, roll one D6; on 5+ that damage is 1 less. Crits, Devastating damage and non-dice damage are never reduced.
  - MECH: `onDamageInflicted` for sources `normal` and `strike-normal`, Dmg >= 3 after modifiers, D6 5+ gives -1; skipped when Unleash Daemon already reduced the die | CLASS: team-hook
  - RULING: Disgusting Vigour scope | only damage from normal successes (shooting, Blast and Torrent secondaries, normal strikes); crits are not reduced however high their Dmg | the rule names Normal Dmg; Disgustingly Resilient (Plague Marines) is a different rule that covers any die of 3+ | Confirmed
- T-LG.24 **SLAANESH: Unnatural Agility**: +1" to its Move stat (injury still takes 2"; floor 4", R-9.6).
  - MECH: ability effect `modifyStat` move +1, scope keyword SLAANESH | CLASS: data
- T-LG.25 **TZEENTCH: Empyreal Guidance**: its ranged weapons have Severe.
  - MECH: ability effect `grantWeaponRule` Severe, filter ranged, scope keyword TZEENTCH | CLASS: data
- T-LG.26 **UNDIVIDED: Vicious Reavers**: while it shoots, fights or retaliates against an enemy operative within 6" of it, its weapons have Ceaseless. Checked per target, so a Blast or Torrent secondary further than 6" away gets no Ceaseless.
  - MECH: `modifyWeaponRules` with `targetId`, distance <= 6" | CLASS: team-hook
- T-LG.27 **ASTARTES**: in each activation a friendly LEGIONARY may perform two Shoot actions or two Fight actions (overrides R-3.7). For two Shoots at least one must use a bolt weapon (T-LG.6). Differences from the other Astartes: unlike Plague Marines (T-PM.16), PSYCHIC weapons do not count and the same weapon may be used for both Shoots if it is a bolt weapon (boltgun twice is legal; flamer twice is not); unlike Angels of Death (T-AOD.15), no weapon costs extra AP. Every friendly LEGIONARY can counteract whatever its order.
  - MECH: providers `maxRepeats` (2 for shoot when the operative has a bolt weapon; 2 for fight) and `counteract: 'any'`; `beforeShootTargetSelect` empties candidates for a second Shoot when neither Shoot uses a bolt weapon; Mutability and Change forces 1 | CLASS: team-hook

### 7.6 Ploys

All ploys cost 1 CP (R-2.4); neither source prints a cost. Strategy ploys last until the end of the TP (R-2.5). Each ploy has a general effect and a mark-specific one.

- T-LG.28 **BLOOD FOR THE BLOOD GOD** | Strategy | 1 CP | Gambit step | When a friendly non-KHORNE LEGIONARY is fighting (its own Fight action, not retaliating), its first strike in that sequence deals 1 extra damage (to at most 7). Friendly KHORNE LEGIONARY operatives' melee weapons get +1 to both Dmg values (to at most 7), whenever they fight or retaliate.
  - MECH: `beforeStrike` (first strike of the attacker side, +1, cap 7) and `modifyDamage` (+1/+1, cap 7, melee, KHORNE) | CLASS: team-hook
  - RULING: Blood for the Blood God and retaliating | the non-KHORNE strike bonus needs the operative to be the attacker; the KHORNE Dmg bonus also works when retaliating | 2024 rules separate "fighting" from "retaliating" (this team's own Quicksilver Speed errata adds "or retaliating" explicitly), while a Dmg stat applies whenever the weapon is used | Confirmed
- T-LG.29 **IMPLACABLE** | Strategy | 1 CP | Gambit step | When any operative shoots a friendly LEGIONARY, a weapon with Piercing 1 has Piercing Crits 1 instead (Piercing 2 and Piercing Crits are unchanged). Friendly NURGLE LEGIONARY operatives ignore the injured stat changes (Move and weapon Hit).
  - MECH: `modifyWeaponRules` on the shooter's weapon when the target is a friendly LEGIONARY of the ploy's seat (swap `piercing x:1` for `piercing x:1 crits`); provider `flags` ignoreInjured for NURGLE while the effect lasts | CLASS: team-hook
  - RULING: Implacable and changed Piercing | applied after other rules have changed the weapon (a Piercing 2 reduced to Piercing 1 by smoke becomes Piercing Crits 1) | the ploy reads the weapon's rules as they stand when the shot is made | Unsourced
- T-LG.30 **QUICKSILVER SPEED** | Strategy | 1 CP | Gambit step | When a friendly LEGIONARY that has performed an action in which it moved this TP is fighting or retaliating, the enemy fighter's melee weapons have Hit worsened by 1. When an operative more than 6" away shoots a friendly SLAANESH LEGIONARY that has moved in an action this TP, the shooter's weapons have Hit worsened by 1. Neither stacks with the enemy being injured.
  - MECH: per-operative TP flag "moved in an action" (set from `action.ended` when the position changed); `modifyAttackDice` hitDelta +1 on the enemy side, skipped when the enemy's own injury penalty applies | CLASS: team-hook
  - RULING: Quicksilver Speed "moved" | any action that changed the operative's position counts (move actions, free moves, counteraction moves, Butcher's free Charge); a 0" move does not | the rule is about having moved, not about which action | Unsourced
  - RULING: Quicksilver Speed and injury | when the enemy attacker is injured and its injury penalty applies, the ploy adds nothing; when it ignores injury, the ploy applies | "not cumulative with being injured" | Unsourced
- T-LG.31 **FICKLE FATES** | Strategy | 1 CP | Gambit step | When a friendly LEGIONARY shoots a ready enemy operative, its ranged weapons have Balanced (a weapon that already has Balanced gets Relentless instead). When any operative shoots a ready friendly TZEENTCH LEGIONARY, in its Roll Defence Dice step, if you retain any crits you may also retain one fail as a normal success.
  - MECH: `modifyWeaponRules` (Balanced, or Relentless if Balanced already present) when the target is ready; `afterDefenceRoll` turns one fail into a normal success when a crit was retained (defence-side Punishing) | CLASS: team-hook
  - RULING: Fickle Fates errata | the October '25 errata clause (Relentless instead of a second Balanced) is applied; its example names the reaper chaincannon, which prints Ceaseless, not Balanced, so the chaincannon simply gains Balanced | the errata is the PDF's latest text; the example does not match any printed profile | Unsourced
- T-LG.32 **UNENDING BLOODSHED** | Firefight | 1 CP | A friendly KHORNE LEGIONARY is incapacitated while fighting or retaliating, before it is removed | It strikes the enemy fighter with one of its unresolved successes (your choice of normal or crit), with its normal Dmg and modifiers. Then the sequence ends as usual.
  - MECH: firefight ploy in the `fight.resolved` window (the incapacitated operative's unresolved dice are still on the attack state); strike through the shared strike path so `beforeStrike`, `modifyDamage` and the enemy's `onDamageInflicted` apply | CLASS: team-hook; needs generic:outOfSequenceStrike
  - RULING: Unending Bloodshed retained dice | only dice still unresolved when the operative fell; a strike can incapacitate the enemy (both are then removed, the owner choosing the order per R-5.18) | as printed plus the core removal order | Unsourced
- T-LG.33 **MUTABILITY AND CHANGE** | Firefight | 1 CP | A friendly TZEENTCH LEGIONARY is activated | Until its activation ends it has APL +1 (R-9.6 cap) but cannot perform any action more than once in that activation (this beats ASTARTES and any other repeat permission, unique actions included). If it is a WARRIOR, Infernal Pact cannot change its mark this TP.
  - MECH: firefight ploy in `firefight.activationStart`; timed APL +1 to activation end; provider `maxRepeats` returns 1 and `actionForbidden` bars a second use of any action id for that operative; per-TP Infernal Pact block | CLASS: team-hook
  - RULING: Mutability and Change versus maxRepeats | our provider answers 1 for the operative and no other team's provider can raise a Legionary's limit | "cannot" takes precedence (R-9.4) | Confirmed
- T-LG.34 **MALIGNANT AURA** | Firefight | 1 CP | A friendly NURGLE LEGIONARY is performing the Shoot action, when its valid target is picked | Until the action ends, against any enemy within 3" of the shooter (secondary targets included) its ranged weapons have Piercing 1.
  - MECH: firefight ploy at `shoot.targetSelected`; `modifyWeaponRules` per `targetId` with distance <= 3" | CLASS: team-hook
  - RULING: Malignant Aura and existing Piercing | a weapon that already has Piercing 2 keeps Piercing 2; a weapon with Piercing Crits 1 also gains plain Piercing 1 | a weapon with two values of the same rule uses the better one | Unsourced
- T-LG.35 **SICKENING CAPTIVATION** | Firefight | 1 CP | During a friendly SLAANESH LEGIONARY's activation, before or after one of its actions | Pick one enemy operative visible to and within 4" of it; its APL is reduced by 1 until the end of its next activation (R-9.6 cap).
  - MECH: firefight ploy in `firefight.activationStart` and `firefight.actionEnded` (activation only, not counteractions); enemy target choice; `applyAplEffect` -1 | CLASS: team-hook

### 7.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-LG.36 **WARDED ARMOUR** | STRATEGIC GAMBIT each TP: pick one friendly LEGIONARY; its Save becomes 2+ until the Ready step of the next Strategy phase. A Warded Armour token marks it.
  - MECH: 0 CP gambit offer while equipped (once per Strategy phase); effect sets Save to 2+ (a set, not an improvement), expiring at the next `turningPoint.start` | CLASS: team-hook
- T-LG.37 **TAINTED ROUNDS** | Once per TP, when a friendly LEGIONARY performing the Shoot action selects a bolt pistol or boltgun (T-LG.6), that weapon has Rending until the action ends.
  - MECH: equipment use in the `shoot.targetSelected` window (0 CP, once-per-TP ledger), `modifyWeaponRules` Rending for the action | CLASS: team-hook
- T-LG.38 **CHAOS TALISMANS** | STRATEGIC GAMBIT each TP: pick one mark keyword. Until the end of the TP, once in each activation, when a friendly LEGIONARY with that mark is shooting, fighting or retaliating and its attack roll has 2 or more fails, you may inflict D3 damage on it to discard one fail and retain another fail as a normal success. If this incapacitates it during a Shoot action, the action carries on with its successes; during a fight the sequence ends (R-6.7).
  - MECH: gambit offer picks a keyword (team effect for the TP); 0 CP offer at `shoot.attackRolled` / `fight.rolled` (after re-rolls, before retaining is final) with a per-operative per-activation ledger; self `directDamage` (removal deferred to the end of the action) | CLASS: team-hook
  - RULING: Chaos Talismans duration and frequency | the gambit pick lasts until the end of that TP; the once-per-activation limit is per operative and counts any activation in which it attacks or retaliates (enemy activations included) | gambit effects last the TP (R-2.5), and "their activations" is read as each activation the operative is part of, otherwise retaliating could never qualify | Unsourced
  - RULING: Chaos Talismans timing | after all attack re-rolls, before the Resolve step | "if you roll two or more fails" refers to the finished roll | Unsourced
- T-LG.39 **MALEFIC BLADES** | Every friendly LEGIONARY has the malefic blade (7.3) for the battle.
  - MECH: equipment `grants` of `lg.w.malefic-blade` with `grants.to` keyword LEGIONARY | CLASS: data

### 7.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-LG: TEAM-LG-000 to TEAM-LG-028.

### 7.9 Generic capabilities (survey; resolved in the Engine map below)

- **operativeKeywordChoice** (MUST): a per-operative pick made at roster selection from a team-defined keyword list (KHORNE, NURGLE, SLAANESH, TZEENTCH, UNDIVIDED), with per-datacard exclusions (Balefire Acolyte: no KHORNE). Stored on `RosterEntry`, copied to `Operative` as an extra keyword, read by `hasKeyword` (so ploy scopes, ability scopes and conditions work in data), changeable during the battle by a team rule (Infernal Pact) with an event, shown in `view` to both seats and in the team builder (a per-operative picker), defaulted for sims and the AI. Used by T-LG.5, T-LG.20 to T-LG.26, T-LG.28 to T-LG.35, T-LG.38.
- **opponentActionVeto** (MUST): when an operative declares an action (Fall Back here, including free ones), give the opposing team's rules a step with `ctx` to roll and cancel the declared action with its AP refunded, then forbid that action for the rest of the activation or counteraction. Used by T-LG.9.
- **activationEndReaction** (MUST): a reaction point for the non-active seat at the end of every activation and counteraction, after the owner's end-of-activation window and hooks and before the next activation is chosen, offered through the `reactions` provider, running a free Charge (max 2", must end within control range of a chosen enemy, optional order flip to Engage). Used by T-LG.14.
- **outOfSequenceStrike** (NICE): one strike with a chosen unresolved die outside the normal alternation, through the same path as `fight.resolve` (beforeStrike, modifyDamage, onDamageInflicted with `strike-*` sources). Used by T-LG.32. Without it the team can only deal direct damage, which skips the enemy's per-die reductions.
- Everything else maps onto existing providers, hooks, windows and 0 CP offers (Engine map).

### 7.10 Gotchas

- Marks are per operative, chosen at selection, public, and real keywords. Ploys are worded "friendly LEGIONARY (excluding KHORNE)" or "friendly LEGIONARY NURGLE": each ploy has a general half and a mark half. A Balefire Acolyte is never KHORNE.
- Disgusting Vigour is not Disgustingly Resilient: Normal Dmg 3+ only, 5+ to reduce, crits untouched. Unleash Daemon is a flat -1 on any die of Dmg 4+, normal or crit, and never stacks with Disgusting Vigour on one die.
- ASTARTES: a second Shoot needs a bolt pistol, boltgun or tainted bolt pistol in one of the two Shoots. PSYCHIC weapons do not count here (they do for Plague Marines). Two Shoots with the same bolt weapon are fine. No AP surcharge for anything. Mutability and Change switches the doubling off.
- Heavy (Reposition only): a Heavy Gunner that shot with its heavy weapon may still Reposition but not Dash, Charge or Fall Back; its second Shoot must be the bolt pistol if the first was the heavy weapon.
- Fireblast, Life siphon and the plasma gun have no Range. Fireblast's 1" Devastating 1 also hits friendly operatives within 1" of the target.
- Meltagun is 6/3 as printed. Do not "fix" it.
- Daemonic Aura cancels and refunds the Fall Back; the enemy keeps its other AP and may still do other actions.
- The Butcher's Charge is a reaction at the end of the enemy's activation or counteraction, not after each action. It needs an enemy within 2" (no visibility), a legal path of at most 2", and the Butcher not already within an enemy's control range. It can flip Conceal to Engage.
- Vicious Reflexes only when retaliating. Horrifying Dismemberment and Soul Gorge only from fights (shooting never triggers them). Soul Gorge also triggers from a damaging crit strike (errata).
- In the Eyes of the Gods works only in the Champion's own activation; the extra APL arrives after the action that caused it and counts against the ±1 cap.
- Grisly Mark costs 2 AP, works once per battle, and its +1 AP surcharge makes Pick Up Marker and mission actions impossible as counteractions for enemies within 3" (a counteraction must cost exactly 1 AP, R-3.12).
- Favoured of the Dark Gods happens in the Ready step (before CP are gained), needs the Icon Bearer to control the objective, and each objective can be tainted only once per battle by anyone.
- Blood for the Blood God: the extra damage for non-KHORNE operatives is only on their own Fight, first strike only; KHORNE melee gets +1/+1 always (cap 7).
- Quicksilver Speed's shooting half is SLAANESH only and needs the shooter more than 6" away; neither half stacks with the enemy's injury.
- Fickle Fates checks that the enemy target (or the Tzeentch defender) is ready, i.e. not yet activated this TP.
- Chaos Talismans can incapacitate the Legionary itself; in a Shoot the action carries on (the operative is removed after the action), in a fight it ends the sequence.
- Edition leaks to reject: no 2021 Legionaries rules (no 2021 mark effects, no Chaos Blessings, no Undivided "re-roll one", no Icon of Despair), no 40k 10th Dark Pacts or Leadership tests; inches only, three defence dice.

### 7.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (leader 1 of 2, main 5, WARRIOR repeatable) | team.json slots, `repeatable: ["lg.warrior"]` |
| Loadouts | datacard `weapons.options` (`from` slots for the Champion, `sets` for Chosen, Gunner, Heavy Gunner, Icon Bearer, Warrior) |
| Marks of Chaos pick and keyword (T-LG.5, T-LG.20) | team.json `operativeChoices` (id `mark`, keywords KHORNE, NURGLE, SLAANESH, TZEENTCH, UNDIVIDED; `exclude` KHORNE for `lg.balefire-acolyte`); `RosterEntry.picks` and `Operative.picks`, read by `hasKeyword`; Infernal Pact through `operative-picks.setOperativePick` / `pickAlternatives` (event `OperativePickChanged`); `defaults.operativePicks`; the Team Builder shows the picker |
| Mark rules KHORNE, SLAANESH, TZEENTCH | abilities with `grantWeaponRule` / `modifyStat` scoped by the mark keyword (data) |
| Disgusting Vigour, Unleash Daemon reduction | `onDamageInflicted` (sources `normal`, `crit`, `strike-normal`, `strike-crit`) with `ctx.roll` |
| Vicious Reavers, Malignant Aura, Implacable, Fickle Fates, Tainted Rounds, Unleash claw | `modifyWeaponRules` (with `targetId`) |
| ASTARTES | providers `maxRepeats`, `counteract: 'any'`; `beforeShootTargetSelect` bolt check (PM pattern without the PSYCHIC branch) |
| In the Eyes of the Gods, Mutability and Change, Sickening Captivation, Horrifying Dismemberment | `applyAplEffect` (timed APL) from `damage.inflicted`, ploy effects and window offers |
| Daemonic Aura | hook `action.declared` (roll the D6 with `engine`; on a cancel set `cancel` and `bar`: the Fall Back is cancelled with no AP spent and cannot be tried again that activation or counteraction) |
| Butcher reactive Charge | provider `reactions` with `ReactionInfo.activationEnded` (also after counteractions, `counteract: true`), then `startFreeAction({ action: 'charge', maxMove: 2, endWithinCrOf })` |
| Butcher no assists | `modifyAttackDice` (clear `assists`) |
| Vicious Reflexes | provider `fightResolveStart` (`first`) |
| Soul Gorge | `onFightResolved` + `effects.regainWounds` |
| Siphon Life | 0 CP offer at `shoot.defenceRolled` / `fight.rolled`, `damage.inflicted`, `effects.regainWounds` |
| Icon Bearer control +1 | provider `controlApl` |
| Favoured of the Dark Gods | `turningPoint.start` handler, `controlledBy`, `gainCp`, team ledger of tainted markers |
| GRISLY MARK | unique action placing a team marker; providers `actionCostDelta`, `controlTotal` |
| Unleash Daemon, Infernal Pact | 0 CP offers in `firefight.activationStart` (Kauyon pattern), provider `actionForbidden` |
| Blood for the Blood God | `beforeStrike`, `modifyDamage` |
| Quicksilver Speed | `action.ended` TP flag, `modifyAttackDice` hitDelta |
| Fickle Fates (Tzeentch half) | `afterDefenceRoll` (one fail to normal) |
| Unending Bloodshed | ploy in `fight.resolved`; `fight.extraStrike(ctx, seat, die)` for the strike |
| Warded Armour, Chaos Talismans | 0 CP gambit offers (`strategy.gambit`) while equipped; Save set effect; Talismans offer at `shoot.attackRolled` / `fight.rolled` |
| Malefic Blades | equipment `grants` with `grants.to` LEGIONARY |

### 7.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/legionaries/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `lg.<name>`, `lg.w.`, `lg.wg.`, `lg.a.`, `lg.p.`, `lg.e.`)
  - `src/engine/teams/legionaries.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/legionaries.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins `lg-aspiring-champion`, `lg-chosen`, `lg-anointed`, `lg-balefire-acolyte`, `lg-butcher`, `lg-gunner`, `lg-heavy-gunner`, `lg-icon-bearer`, `lg-shrivetalon`, `lg-warrior`; mark token per figure)
  - `tests/engine/teams/legionaries.test.ts` (TEAM-LG-nnn tests) and `tests/engine/teams/legionaries.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 7 and `12-rules-test-checklist.md` section TEAM-LG (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/legionaries/team.json`. Flip it (with `defaults` filled, including a mark for every default roster entry, and every weapon in `src/client/teams/legionaries.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. Every generic the map names is built (operative picks, `action.declared`, activation-end reactions, `fight.extraStrike`). Marks are the spine of the team: TEAM-LG-002, TEAM-LG-003 and TEAM-LG-010 to TEAM-LG-014 first, then ASTARTES (TEAM-LG-004).
- Team-local weapon rules the scaffold leaves out: `lg.a.wr-psychic` (Fireblast, Life siphon, Fell dagger) and `lg.a.wr-siphon-life` (Life siphon, Fell dagger); the leader's weapons carry none.
- RULING lines expected: marks visibility, Tainted Rounds and the tainted bolt pistol, Fireblast/Life siphon/plasma gun range, Meltagun damage, In the Eyes of the Gods scope, Daemonic Aura use and free Fall Back, Soul Gorge errata, Unleash Daemon (Devastating, forced Place Marker, NURGLE), Siphon Life (choice point, self-target, multi-target), Butcher reaction timing and counteract, Favoured of the Dark Gods count, Vicious Reflexes precedence, Horrifying Dismemberment pick, Grisly marker lifetime, Infernal Pact target mark, Disgusting Vigour scope, Blood for the Blood God and retaliating, Implacable and changed Piercing, Quicksilver Speed moved and injury, Fickle Fates errata, Unending Bloodshed dice, Mutability and Change versus maxRepeats, Malignant Aura and existing Piercing, Chaos Talismans duration and timing.
- Gotchas: section 7.10. Marks are real keywords (read through `hasKeyword`), public, and one per operative; the Balefire Acolyte can never be KHORNE. Disgusting Vigour covers Normal Dmg only. ASTARTES ignores PSYCHIC. The Butcher reacts at the end of enemy activations and counteractions, not after actions.

## 8. Hand of the Archon

Rule IDs: `T-HA.<n>`. Checklist IDs: `TEAM-HA-<nnn>`. Sources: the Hand of the Archon team PDF (January '26, the version with the January '26 update log: Chain Snare, Cunning, Crimson Duellist and razorwing errata), read from the layout extract `team-hand-of-the-archon.txt` and the reflowed `team-hand-of-the-archon-flow.txt`, cross-checked against the Wahapedia Hand of the Archon page (faction version 3, January 2026; the page carries no FAQ entries). The PDF is primary, so facts read from it are Confirmed. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y).

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 8.1 Team selection

- T-HA.1 Roster is exactly 9 operatives: 1 ARCHSYBARITE (leader) plus 8 picks from the main list.
  - MECH: roster validator: leader slot count 1 (`ha.archsybarite`), main slot count 8 | CLASS: data
- T-HA.2 Main list: AGENT, CRIMSON DUELLIST, DISCIPLE OF YAELINDRA, ELIXICANT, FLAYER, GUNNER, HEAVY GUNNER, SKYSPLINTER ASSASSIN. AGENT may be taken any number of times; every other entry at most once. With all seven specialists taken the roster has exactly one Agent; with none it has eight. No half selections, nothing counts as two.
  - MECH: main slot `repeatable: ["ha.agent"]` | CLASS: data
- T-HA.3 Loadouts. ARCHSYBARITE picks one of five pairs: blast pistol + venom blade; splinter pistol + venom blade; splinter pistol + agoniser; splinter pistol + power weapon; splinter rifle + array of blades. GUNNER picks blaster or shredder, and always has an array of blades. HEAVY GUNNER picks dark lance or splinter cannon (both profiles), and always has an array of blades. Every other operative carries every weapon on its card (8.3).
  - MECH: datacard `weapons.options` with `sets` (Archsybarite: 5 sets, empty `fixed`; Gunner and Heavy Gunner: `fixed: [array of blades]` + one 2-set slot) | CLASS: data
- T-HA.4 **Darklight cap**: blast pistol, blaster and dark lance are darklight weapons; the whole roster (leader included) may carry at most two of them. Only three operatives can carry one (Archsybarite, Gunner, Heavy Gunner), so the cap forbids exactly the roster where all three take their darklight option.
  - MECH: roster validator over chosen loadouts across both slots | CLASS: generic:rosterWeaponCaps
  - RULING: Darklight cap | counted over the loadouts actually chosen, across the leader slot and the main slot together; a weapon counts once per operative carrying it | the PDF names the three weapons and caps the kill team as a whole | Confirmed
- T-HA.5 Archetypes: RECON, SEEK & DESTROY (tac ops out of scope for v1).
  - MECH: team.json archetypes `["recon", "seek-and-destroy"]` | CLASS: data
- T-HA.6 **Splinter weapons** (for Refined Poison, T-HA.43): weapons named shardcarbine, splinter cannon (both profiles), splinter pistol, splinter rifle or stinger pistol. Darklight weapons (T-HA.4) are named the same way. Neither is a printed weapon rule; both are name lists.
  - MECH: weapon filter `weaponIds` lists (not `nameContains`: "splinter" alone would miss shardcarbine and stinger pistol) | CLASS: data

### 8.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| KABALITE ARCHSYBARITE | 2 | 7" | 4+ | 9 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, LEADER, ARCHSYBARITE |
| KABALITE AGENT | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, AGENT |
| KABALITE CRIMSON DUELLIST | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, CRIMSON DUELLIST |
| KABALITE DISCIPLE OF YAELINDRA | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, DISCIPLE OF YAELINDRA |
| KABALITE ELIXICANT | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, ELIXICANT |
| KABALITE FLAYER | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, FLAYER |
| KABALITE GUNNER | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, GUNNER |
| KABALITE HEAVY GUNNER | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, HEAVY GUNNER |
| KABALITE SKYSPLINTER ASSASSIN | 2 | 7" | 4+ | 8 | 25 | HAND OF THE ARCHON, AELDARI, DRUKHARI, SKYSPLINTER ASSASSIN |

UNCLEAR (resolved): the PDF extract prints the Agent's and the Skysplinter Assassin's weapon rows on one line each (`4 3+ 2/4 3 3+ 3/4`); split by column order and confirmed against Wahapedia. Every card prints a base of 25 and Wahapedia gives 25mm for all nine; stats agree in both sources.

### 8.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Blast pistol | R | 4 | 3+ | 3/4 | Range 8", Piercing 2 | Archsybarite (option) |
| Splinter pistol | R | 4 | 3+ | 2/4 | Range 8", Lethal 5+ | Archsybarite (option), Crimson Duellist |
| Splinter rifle | R | 4 | 3+ | 2/4 | Lethal 5+ | Archsybarite (option), Agent, Elixicant |
| Agoniser | M | 4 | 3+ | 3/5 | Brutal, Lethal 5+, Shock | Archsybarite (option) |
| Power weapon | M | 4 | 3+ | 4/6 | Lethal 5+ | Archsybarite (option) |
| Venom blade | M | 4 | 3+ | 4/5 | Lethal 4+ | Archsybarite (option) |
| Array of blades | M | 3 | 3+ | 3/4 | none | Archsybarite (option), Agent, Disciple, Elixicant, Gunner, Heavy Gunner, Skysplinter Assassin |
| Razorflail | M | 4 | 2+ | 4/5 | Brutal, Tangle | Crimson Duellist |
| Stinger pistol | R | 4 | 3+ | 3/5 | Range 8", Lethal 5+, Stinger | Disciple of Yaelindra |
| Stim-needler | R | 4 | 3+ | 0/0 | Range 3", Lethal 3+, Stun | Elixicant |
| Pain sculptors | M | 4 | 3+ | 4/5 | Ceaseless, Flay | Flayer |
| Blaster | R | 4 | 3+ | 4/5 | Piercing 2 | Gunner (option) |
| Shredder | R | 4 | 3+ | 4/5 | Rending, Torrent 2" | Gunner (option) |
| Dark lance | R | 4 | 3+ | 6/7 | Heavy (Dash only), Piercing 2 | Heavy Gunner (option) |
| Splinter cannon (focused) | R | 5 | 3+ | 3/5 | Heavy (Dash only), Lethal 5+ | Heavy Gunner (option, with sweeping) |
| Splinter cannon (sweeping) | R | 4 | 3+ | 3/5 | Heavy (Dash only), Lethal 5+, Torrent 1" | Heavy Gunner (option, with focused) |
| Razorwing | R | 4 | 4+ | 1/2 | Saturate, Seek, Silent | Skysplinter Assassin |
| Shardcarbine | R | 4 | 2+ | 2/2 | Devastating 2, Lethal 5+ | Skysplinter Assassin |

Loadouts: Agent: splinter rifle, array of blades. Crimson Duellist: splinter pistol, razorflail. Disciple: stinger pistol, array of blades. Elixicant: splinter rifle, stim-needler, array of blades. Flayer: pain sculptors only (no ranged weapon). Skysplinter Assassin: razorwing, shardcarbine, array of blades. Archsybarite, Gunner and Heavy Gunner per T-HA.3.

Notes: Tangle (T-HA.12), Stinger (T-HA.13) and Flay (T-HA.21) are team-local weapon rules; everything else is core. Identical profiles on several cards (splinter rifle, splinter pistol, array of blades) are one shared record each. The stim-needler deals no damage at all (0/0); with Hit 3+ and Lethal 3+ every success is a crit, so it exists to land Stun. The shardcarbine's Normal and Critical Dmg are equal (2/2).

UNCLEAR (resolved): the update log raises the razorwing's Atk to 4; both the PDF card and Wahapedia already print 4. No other weapon number differs between the sources.

### 8.4 Operative rules and unique actions

- T-HA.7 **Cunning** (Archsybarite): in each Gambit step, if the Archsybarite is in the killzone and your first decision of that step is to pass, you gain 1CP at once. Using a mission-pack STRATEGIC GAMBIT does not count as a decision for this test, so a player who uses one and then passes still qualifies.
  - MECH: on the seat's first non-mission gambit decision being a pass (explicit or implicit), +1 CP | CLASS: generic:gambitPassedHook
  - RULING: Cunning implicit pass | an automatic pass (the seat has no usable gambit) counts as passing at the first opportunity | the player had an opportunity and passed; the engine merely skips the empty prompt | Unsourced
  - RULING: Cunning mission gambits | a STRATEGIC GAMBIT whose ploy record has no team (mission pack) is skipped when finding the first decision; any team strategy ploy used first spoils it | the Jan '26 errata says to ignore mission-pack gambits for this test | Confirmed
- T-HA.8 **Torturous Vision** (Archsybarite): once per activation of its own, when it performs Fight or Shoot while holding none of your Pain tokens, it may take one Pain token at the moment the target (Shoot) or the enemy to fight (Fight) is chosen. Not in counteractions or Guard interrupts.
  - MECH: 0 CP free offer at `shoot.targetSelected` / `fight.weaponsSelected` (ployRule `extraOffers`) when the subject is the Archsybarite in its own activation, holds no `ha.pain`, and the per-activation ledger is empty | CLASS: team-hook
  - RULING: Torturous Vision scope | only in the Archsybarite's own activations, never while counteracting or interrupting | the card says "this operative's activations" and core treats a counteraction as not an activation | Confirmed
- T-HA.9 **Sadistic Competition** (Agent): once per TP, when any friendly HAND OF THE ARCHON operative gains a Pain token, one friendly AGENT that holds no Pain token may gain one as well.
  - MECH: observer on every `ha.pain` gain by a friendly; adds one `ha.pain` to an eligible Agent; per-TP ledger shown as the Sadistic Competition marker | CLASS: team-hook
  - RULING: Sadistic Competition use | used automatically at the first eligible gain each TP, on the eligible Agent closest to the operative that gained (ties: lowest id); an Agent gaining its own token can pass one to a different Agent | gains happen inside lifecycle points that cannot ask a question, and an extra token is never a disadvantage | Unsourced
  - RULING: Sadistic Competition count | once per TP for the whole kill team, however many Agents are on the board | the marker guide has a single Sadistic Competition token and every Agent's copy names the same trigger | Unsourced
- T-HA.10 **Brutal Display** (Crimson Duellist): once per TP, when it incapacitates an enemy that is within its control range, choose another enemy visible to and within 6" of either the Duellist or the incapacitated enemy. Until the next TP starts, the chosen enemy cannot control markers and cannot perform Pick Up Marker or any mission action.
  - MECH: offer after the removal (killer-side window) listing eligible enemies; token `ha.brutal-display` with expiry `turningPointEnd` (expires after end-of-TP scoring, R-2.6); provider `controlApl` answers 0 for the holder; provider `actionForbidden` for `marker:pickUp` and `ability:<id>` of MISSION abilities | CLASS: team-hook; needs generic:killerRemovalWindow
  - RULING: Brutal Display and control | the marked enemy's APL counts as 0 in its side's control total; it still contests for rules that ask about contesting | "cannot control" read as contributing nothing to control | Unsourced
  - RULING: Brutal Display retaliation | it also triggers when the Duellist incapacitates the enemy while retaliating | the trigger is incapacitating an enemy in its control range, not performing an action | Unsourced
- T-HA.11 **Crimson Duellist** (Crimson Duellist): may perform two Fight actions in one activation (overrides R-3.7). Nothing else repeats.
  - MECH: provider `maxRepeats` answers 2 for `fight` on this operative | CLASS: team-hook
- T-HA.12 **Tangle** (team-local weapon rule; razorflail): while the Duellist fights or retaliates with this weapon, each of its blocks may cancel two of the opponent's unresolved successes instead of one.
  - MECH: fight block option naming up to two opponent dice, each of which the blocking die could block on its own | CLASS: generic:multiBlock
  - RULING: Tangle pairing | a normal block may take two unresolved normal successes; a crit block may take any two unresolved successes; the second die is optional | the core "normal blocks normal, crit blocks either" test (R-6.5) applies to each die blocked | Unsourced
- T-HA.13 **Stinger** (team-local weapon rule; stinger pistol): when an enemy is incapacitated by this weapon, before it is removed, every other operative (friend or foe, the Disciple included) that is visible to and within 2" of it takes D3 damage, rolled separately. Every operative incapacitated by that damage triggers the same burst from its own position, and so on.
  - MECH: `beforeIncapacitated` hook for the stinger pistol's attack; `effects.directDamage` D3 per operative in reach; a synchronous chain marker so operatives downed by the burst burst in turn (once each) | CLASS: team-hook
  - RULING: Stinger reach | friendly operatives and the Disciple itself are hit when in reach, and the chain continues through any operative, friend or foe | the PDF says each other operative, and the chain sentence names each operative so incapacitated | Confirmed
  - UNCLEAR (resolved): the PDF adds "roll separately for each"; Wahapedia omits it. Followed the PDF.
- T-HA.14 **TORMENT GRENADE** (Disciple of Yaelindra, 1 AP): pick one enemy visible to and within 6". That enemy and every other operative (either side) within 1" of it each take a poison test: roll a D6, adding 1 if the operative's Save is 4+ or worse; on a total of 3+ it takes D3 damage and gains one of your Poison tokens unless it has one. An operative carrying one of your Poison tokens takes D3 damage whenever it is activated. Not while in an enemy's control range. No per-battle limit.
  - MECH: unique action with enemy target choice (visible, within 6"); area list within 1" of the target (no visibility); per operative D6(+1) test, `directDamage` D3 and `addToken` `ha.poison` cap 1; `activation.start` hook deals D3 to holders of `ha.poison` owned by this seat | CLASS: team-hook (uses operativeTokens)
  - RULING: Torment grenade friendly operatives | friendly operatives within 1" of the target test too, and a friendly operative carrying our Poison token takes D3 when it is activated | the action and the Poison sentence both say "operative", not "enemy operative" | Confirmed
  - RULING: Poison test Save | uses the operative's current Save stat when the test is rolled | the test reads the stat at that moment | Unsourced
  - RULING: Hand of the Archon Poison tokens | `ha.poison` is its own token kind: Plague Marines rules (Toxic, Grandfather's Blessing) never read it, and a Plague Marines Poison token does not count as one of ours | each team's rules name "your Poison tokens" | Confirmed
  - RULING: poison damage on activation | follows T-PM.18: only real activations, first among "is activated" effects; an operative it incapacitates loses that activation | core update log ordering | Confirmed
- T-HA.15 **Combat Drugs** (Elixicant): at the end of the Select Operatives step, if an Elixicant is in the roster, pick one COMBAT DRUG (Painbringer, Adrenalight or Hypex); every friendly HAND OF THE ARCHON operative has that drug for the battle. Each operative's drug can later be swapped one at a time by ADMINISTER DRUG. Drugs stay after the Elixicant is incapacitated.
  - MECH: team choice group `ha-combat-drug` (abilities `ha.a.painbringer`, `ha.a.adrenalight`, `ha.a.hypex`); at setup each friendly operative gets token `ha.drug` with `data.drug`; rules read the holder's token | CLASS: data + team-hook
  - RULING: Combat Drugs without an Elixicant | the pick is ignored (no operative gets a drug) | the rule only fires when an Elixicant is selected for deployment | Confirmed
- T-HA.16 **Painbringer** (COMBAT DRUG): whenever a single attack die would inflict 3 or more damage on this operative, roll a D6; on a 6 that die's damage is reduced by 1.
  - MECH: per-die damage reduction in `onDamageInflicted` (dice sources only, `devastating` per the T-PM.19 ruling), `ctx.roll` | CLASS: team-hook
  - RULING: Painbringer and Devastating | follows the T-PM.19 ruling: Devastating damage from a retained crit counts as that die's damage | same wording pattern as Disgustingly Resilient | Unsourced
- T-HA.17 **Adrenalight** (COMBAT DRUG): in the Ready step of each Strategy phase you may pick one friendly operative that has Adrenalight; it gains one Pain token.
  - MECH: `turningPoint.start` hook adds `ha.pain` to one Adrenalight holder | CLASS: team-hook
  - RULING: Adrenalight pick | made automatically: the Adrenalight holder with the fewest Pain tokens, ties to the Archsybarite, then lowest id | lifecycle hooks cannot raise decisions and a token is never a disadvantage | Unsourced
- T-HA.18 **Hypex** (COMBAT DRUG): the operative ignores the Move loss from being injured. The Hit worsening still applies, and injury-equivalent penalties (Contagion) are not cancelled.
  - MECH: provider `moveDelta` +2 while really injured (not via `injuredEquivalent`) | CLASS: team-hook
- T-HA.19 **ADMINISTER DRUG** (Elixicant, 1 AP): pick a friendly HAND OF THE ARCHON operative visible to and within 3" (the Elixicant itself qualifies); either it regains up to 2D3 lost wounds, or its COMBAT DRUG is replaced by a different one for the rest of the battle. Not while in an enemy's control range.
  - MECH: unique action with friendly target and a two-way option (heal via `effects.regainWounds`, or swap `ha.drug` data to another drug) | CLASS: team-hook (uses regainWounds)
  - RULING: Administer Drug self-target | allowed | core rules state an operative is always visible to and within any distance of itself | Confirmed
  - RULING: Administer Drug without a drug | the swap branch can give a drug to an operative that has none (no Combat Drugs pick was made) | "a different COMBAT DRUG" is satisfied by any drug when none is held | Unsourced
- T-HA.20 **Insensible to Pain** (Flayer): any Normal or Critical Dmg of 3 or more of a weapon used against this operative deals 1 less.
  - MECH: attack hook `modifyDamage` when `targetId` is the Flayer: each of `dmg.normal` / `dmg.crit` that is >= 3 is lowered by 1 | CLASS: team-hook
  - RULING: Insensible to Pain order | applied to the final Dmg values after every other Dmg change (Refined Poison, Toxic), and never to Devastating, Stinger, poison or other non-Dmg damage; Painbringer then looks at the reduced amount | the rule names the Dmg stats | Unsourced
- T-HA.21 **Flay** (team-local weapon rule; pain sculptors): the first time in a sequence that the Flayer strikes with a crit using this weapon (fighting or retaliating), you may pick one friendly HAND OF THE ARCHON operative within 6" of the Flayer (the Flayer included) to gain a Pain token.
  - MECH: `beforeStrike` marks the sequence; the pick is a 0 CP free offer at `fight.resolved` per eligible friendly | CLASS: team-hook
  - RULING: Flay pick timing | offered when the sequence ends, measuring 6" from the Flayer's position at that moment | strikes resolve inside a decision the hook cannot interrupt; positions do not change within a sequence | Unsourced
- T-HA.22 **Merciless Hunter** (Skysplinter Assassin): if it does not perform MARK in an activation, it may perform two Shoot actions in that activation, one of them with the razorwing and the other with a different weapon.
  - MECH: provider `maxRepeats` 2 for `shoot` when MARK not performed; `actionForbidden` MARK after a second Shoot; `beforeShootTargetSelect` empties candidates when the weapon pairing breaks the rule (ASTARTES pattern, `act.weaponsUsed`) | CLASS: team-hook
  - RULING: Merciless Hunter and Mark | Shoot then MARK is legal (one Shoot); two Shoots forbid MARK afterwards; MARK first leaves one Shoot | the second Shoot is only allowed in an activation without MARK | Confirmed
- T-HA.23 **Omen** (Skysplinter Assassin): when equipment is chosen in the Select Operatives step, you may name either an enemy operative or a different friendly HAND OF THE ARCHON operative, revealed with equipment. For an enemy pick, the opponent must re-roll every attack or defence die showing 6 rolled for it. For a friendly pick, you may re-roll any of its attack or defence dice showing 1.
  - MECH: pre-battle operative pick stored as token `ha.omen` (expiry `battle`); enemy: forced re-roll of 6s right after each roll for that operative; friendly: re-roll grant limited to dice showing 1 in `modifyAttackDice` / `modifyDefenceDice` | CLASS: generic:selectionOperativePick, generic:diceRolledHook, generic:rerollValueFilter
  - RULING: Omen forced re-roll | applied immediately after the roll, before any player's optional re-rolls; the re-rolled dice cannot be re-rolled again (R-9.2); cover saves retained without rolling are untouched | a die can only be re-rolled once, so the forced re-roll must come first to have its effect | Unsourced
  - RULING: Omen duration | lasts the whole battle, even after the Skysplinter Assassin is incapacitated | the rule sets no condition on the Assassin after the pick | Unsourced
- T-HA.24 **MARK** (Skysplinter Assassin, 1 AP): pick an enemy visible to the Assassin. Until the end of the TP, whenever the Assassin shoots that enemy, its ranged weapons have Seek Light and the enemy cannot be obscured. Not while in an enemy's control range.
  - MECH: unique action; token `ha.mark` on the enemy (sourceId the Assassin, expiry `turningPointEnd`); `beforeShootTargetSelect` restores marked candidates hidden only by Light cover; `target.status` sets obscured false; weapon rule grant Seek Light | CLASS: team-hook
  - RULING: Mark use | applied automatically whenever the Assassin shoots the marked enemy | both effects only help the shooter | Unsourced

### 8.5 Faction rules

- T-HA.25 **POWER FROM PAIN (gaining)**: after a friendly HAND OF THE ARCHON operative performs any action (including free actions, counteractions and Guard interrupts), it gains one Pain token if an enemy became injured during that action without being incapacitated, or if an enemy was incapacitated during it; it gains two instead if an enemy incapacitated during that action has a Wounds stat of 12 or more. Pain tokens sit on operatives, have no cap and last until spent or until the holder leaves the killzone. They are public.
  - MECH: `damage.inflicted` ledger per action (enemy crossed below half starting wounds, or reached 0); `action.ended` hook adds `ha.pain` (count 1 or 2) to the performer; tokens shown with a count badge and Tooltip on the figure and in the feed | CLASS: team-hook (uses operativeTokens)
  - RULING: Power from Pain "injured" | the enemy must become injured during the action (cross below half its starting wounds, R-7.3); an enemy already injured before the action that loses more wounds does not count | "injured" is a defined state in the core rules | Unsourced
  - RULING: Power from Pain amount | one gain per action at most: two tokens if any enemy incapacitated during it had Wounds 12+, otherwise one if any enemy qualified; several enemies do not add up | the rule lists conditions for one gain, not one gain per enemy | Unsourced
  - RULING: Power from Pain performer gone | no tokens when the performer is no longer in the killzone after the action | tokens are placed on the operative | Unsourced
  - RULING: Power from Pain any cause | an enemy injured or incapacitated during the action counts whatever caused it (attack dice, Stinger chain, Torment grenade, strikes while the enemy retaliates) | the trigger is what happened during the action | Confirmed
- T-HA.26 **POWER FROM PAIN (invigorations)**: you may spend Pain tokens on invigorations (T-HA.27 to T-HA.30) when each one's timing is met. At most one invigoration per activation or counteraction, plus Stimulated Senses once per activation or counteraction on top of another.
  - MECH: invigorations are 0 CP free offers (ployRule `extraOffers`) whose `onUsed` removes one `ha.pain` from the operative; a per-frame ledger (activation or counteraction in progress) enforces the limit | CLASS: team-hook; needs generic:postRollRerollOffers (Stimulated Senses), generic:killerRemovalWindow (Vitalised Surge)
  - RULING: Invigoration cost | each invigoration spends one Pain token, taken from the operative it affects | every invigoration names "the operative" and the faction rule spends that operative's tokens | Unsourced
  - RULING: Invigoration limit scope | one per activation or counteraction in progress, for the whole kill team, whichever player's it is (Stimulated Senses adds one more) | the limit is worded per activation or counteraction, not per operative | Unsourced
- T-HA.27 **Dark Animus** (invigoration): during the operative's own activation, before or after an action: its APL is 1 higher until its next activation starts (so it gains one AP now, R-3.15, and the higher APL also counts for marker control). Subject to the R-9.6 cap.
  - MECH: free offer at `firefight.activationStart` (not counteracting) and `firefight.actionEnded` for the activating operative; `aplMods` +1, removed at its next activation (before its first action) | CLASS: team-hook
- T-HA.28 **Accelerated Rejuvenation** (invigoration): during the operative's activation or counteraction, before or after an action: it regains up to D3+1 lost wounds.
  - MECH: free offer at `firefight.activationStart` and `firefight.actionEnded` (counteracting included); `effects.regainWounds(D3+1)` | CLASS: team-hook (uses regainWounds)
  - UNCLEAR (resolved): the PDF says "up to D3+1", Wahapedia "D3+1". Same result, because healing is capped at starting wounds either way.
- T-HA.29 **Vitalised Surge** (invigoration): after the operative incapacitates an enemy and that enemy has been removed: it may immediately perform a free Dash, even if an action it already performed (Charge, an earlier Dash) would normally forbid one. The usual Dash conditions still apply (not in an enemy's control range), and while counteracting the Dash is limited to 2".
  - MECH: free offer after removal for the seat whose operative did the incapacitating; `startFreeAction` Dash (`maxMove: 2` when counteracting) | CLASS: team-hook; needs generic:killerRemovalWindow
  - RULING: Vitalised Surge timing | offered once the action's removals are done, also when the kill came from retaliating or a Guard interrupt; Pain gained from that same action (T-HA.25) can pay for it | removal happens at the end of the action (R-5.14) and Power from Pain resolves as the action ends | Unsourced
- T-HA.30 **Stimulated Senses** (invigoration): after you roll attack or defence dice for the operative: re-roll every die showing one result of your choice (as Ceaseless). Dice already re-rolled cannot be re-rolled again.
  - MECH: paid re-roll offer on the fresh roll (cost one `ha.pain`), adding a `result` RerollGrant to that side | CLASS: generic:postRollRerollOffers
- T-HA.31 **RIFLES**: a friendly HAND OF THE ARCHON operative's splinter rifle has Accurate 1 while it shoots during an activation in which it has not performed Charge, Fall Back or Reposition. Performing those after shooting is still allowed.
  - MECH: `modifyAttackDice` pushes Accurate 1 for weapon `ha.w.splinter-rifle` when the current activation's `performed` list has none of the three | CLASS: team-hook
  - RULING: Rifles outside own activation | a counteraction never qualifies (it is not an activation); a Guard interrupt does, since the guard has performed none of those actions in the enemy's activation | same reading as the T-PM.21 ruling | Unsourced

### 8.6 Ploys

The source prints no ploy costs, so every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5).

- T-HA.32 **BLADE ARTISTS** | Strategy | 1 CP | Gambit step | Melee weapons of friendly HAND OF THE ARCHON operatives gain Rending.
  - MECH: `grantWeaponRule` `core.wr.rending` with filter `weaponType: melee`, scope friendly team, duration turningPoint | CLASS: data
- T-HA.33 **MERCILESS SADISTS** | Strategy | 1 CP | Gambit step | When a friendly HAND OF THE ARCHON operative shoots or fights a wounded enemy (fewer than its starting wounds), its weapons gain Balanced.
  - MECH: `modifyWeaponRules` adds `core.wr.balanced` while the ploy is active and `targetId` is wounded at that moment (R-10.25) | CLASS: team-hook
- T-HA.34 **FROM DARKNESS, DEATH** | Strategy | 1 CP | Gambit step | When a friendly HAND OF THE ARCHON operative is activated, before its order is set, you may pick one enemy for which that friendly operative is not a valid target. During that activation, the first time it shoots or fights that enemy, you may retain one of its normal successes as a crit instead. Obscured still wins (R-5.8).
  - MECH: free offer at `firefight.activationStart` (one option per eligible enemy, eligibility computed with the order the friendly had before this activation, kept by the `activation.start` hook from `previousOrder`); at the first attack sequence against it an `afterAttackRoll` choice request converts one normal to a crit | CLASS: team-hook (generic:beforeOrderWindow would be exact; NICE)
  - RULING: From Darkness, Death pick timing | the enemy is picked right after the order, from enemies for which the friendly was not a valid target under its previous order | the engine has no decision point before the order; using the previous order keeps the eligibility the rule describes | Unsourced
  - RULING: From Darkness, Death use | offered as a choice at the first sequence against that enemy (shooting or fighting, primary or secondary target); declining it still spends that first time | retaining a crit is not always better (a weapon whose Normal Dmg exceeds its Critical Dmg, e.g. shardcarbine with Refined Poison) | Unsourced
- T-HA.35 **DENIZENS OF NIGHT** | Strategy | 1 CP | Gambit step | When an enemy shoots a friendly HAND OF THE ARCHON operative that is more than 2" from every enemy operative, and either Light or Heavy terrain is intervening or any part of the friendly operative's base is under Vantage terrain, you may re-roll one defence die.
  - MECH: `modifyDefenceDice` adds a `one` RerollGrant when the conditions hold | CLASS: team-hook; needs generic:terrainQueries
- T-HA.36 **CRUEL DECEPTION** | Firefight | 1 CP | During a friendly HAND OF THE ARCHON operative's activation, before or after an action | For the rest of that activation it may Fall Back for 1 AP less (so 1 AP).
  - MECH: firefight ploy at `firefight.activationStart` / `firefight.actionEnded`; provider `actionCostDelta` -1 for `fallBack` while the per-activation flag is set | CLASS: team-hook
- T-HA.37 **DEVIOUS SCHEME** | Firefight | 1 CP | Right after the opponent uses a firefight ploy that cost them more than 0CP | The next time they use that same ploy it costs them 1 CP more, and then the effect ends. You cannot use Devious Scheme again in the battle while its effect is still waiting.
  - MECH: window for the other seat after a firefight ploy is used; per-ploy surcharge on the opponent's next use; battle ledger | CLASS: generic:ployUsedWindow, generic:ployCostSurcharge
  - RULING: Devious Scheme 0CP test | uses the CP the opponent actually paid for that use (a ploy made free by a rule is excluded) | "costs 0CP" read as what was spent | Unsourced
  - RULING: Devious Scheme surcharge with discounts | the +1 is added after the opponent's own cost reductions; if they cannot pay it the ploy is not offered | an extra CP to spend is a cost increase on top of whatever they would pay | Unsourced
- T-HA.38 **HEINOUS ARROGANCE** | Firefight | 1 CP | When it is your turn to activate a friendly operative | You skip that activation; play passes to the opponent.
  - MECH: ploy option on the `firefight.activate` decision; using it spends the CP and alternates without activating | CLASS: generic:activationSkip
  - RULING: Heinous Arrogance with nothing to answer | allowed even if the opponent has no ready operative; the opponent may then counteract or pass, and the turn comes back | the ploy sets no such condition, and R-3.13 already limits it to once per TP | Unsourced
- T-HA.39 **PREY ON THE WOUNDED** | Firefight | 1 CP | After rolling attack dice for a friendly HAND OF THE ARCHON operative that is shooting or fighting a wounded enemy | Re-roll any of those attack dice.
  - MECH: paid re-roll offer on the fresh attack roll (CP), adding an `any` RerollGrant | CLASS: generic:postRollRerollOffers

### 8.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-HA.40 **CHAIN SNARE** | When an enemy would perform Fall Back while within the control range of a friendly HAND OF THE ARCHON operative that has no other enemy in its control range, you may roll 2D6 (only 1D6 if the enemy's Wounds stat is higher than the friendly operative's). If any die shows 4+, the enemy cannot perform Fall Back in that activation or counteraction (no AP spent), and Chain Snare cannot be used again this TP. On a miss the Fall Back goes ahead and Chain Snare stays available.
  - MECH: action interdiction before AP are spent; per-activation ban on `fallBack` for that enemy; per-TP ledger set only on success | CLASS: generic:actionInterdict
  - RULING: Chain Snare use | rolled automatically whenever it is available, using the eligible friendly operative that gives 2D6 if there is one | it costs nothing and only a success uses it up | Unsourced
  - RULING: Chain Snare once per TP | the TP lock applies only after a successful roll | the Jan '26 errata ties "cannot use again" to the 4+ result | Confirmed
  - RULING: Chain Snare free Fall Back | also stops a free Fall Back granted by a rule | the trigger is an enemy that would perform the Fall Back action | Unsourced
- T-HA.41 **WICKED BLADES** | Every friendly HAND OF THE ARCHON operative's array of blades has Atk +1 (so 4).
  - MECH: `modifyStat` atk +1 with filter `weaponIds: ["ha.w.array-of-blades"]` | CLASS: data
- T-HA.42 **TOXIN COATING** | Up to twice per TP, when a friendly HAND OF THE ARCHON operative fights or retaliates and its melee weapon has been chosen, that weapon gains Lethal 5+ for the rest of that sequence.
  - MECH: 0 CP free offer at `fight.weaponsSelected` for either fighter of our seat; `modifyWeaponRules` adds `core.wr.lethal` 5+ for that sequence; per-TP count 2 | CLASS: team-hook
- T-HA.43 **REFINED POISON** | Up to twice per TP, when a friendly HAND OF THE ARCHON operative performs Shoot with a splinter weapon (T-HA.6), its Normal Dmg is +1 for the rest of that action (every Torrent sequence).
  - MECH: 0 CP free offer at `shoot.targetSelected` of the primary sequence; `modifyDamage` +1 normal for the action; per-TP count 2 | CLASS: team-hook
  - RULING: Refined Poison and crits | Normal Dmg rises even above Critical Dmg (shardcarbine 3/2); a crit still deals its own Critical Dmg | the rule changes one stat and nothing makes a crit deal the higher of the two | Confirmed

### 8.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-HA: TEAM-HA-000 to TEAM-HA-030.

### 8.9 Generic capabilities (survey; resolved in the Engine map below)

- **operativeTokens** (exists): `ha.pain` (no cap, counts 1 and 2 per gain), `ha.poison` (cap 1), `ha.omen`, `ha.mark`, `ha.brutal-display`, `ha.drug` (data.drug). Public in `view`; the client shows a count badge.
- **postRollRerollOffers** (new): after a side's dice are rolled and before its re-roll prompts, offer paid re-rolls (firefight ploys for CP, team offers for a token) that add a RerollGrant to that side. Shoot attack, shoot defence and both fight sides. Used by T-HA.30, T-HA.39.
- **diceRolledHook** (new): attack hook right after any roll and before any re-roll, with `engine`, mutable dice; may re-roll dice itself and mark them `rerolled`. Used by T-HA.23 (enemy Omen).
- **rerollValueFilter** (new): RerollGrant `values?: number[]`, only dice showing those results are offered. Used by T-HA.23 (friendly Omen).
- **multiBlock** (new): a block option that cancels up to n opponent successes. Used by T-HA.12.
- **actionInterdict** (new): before an action's AP are spent, a provider of the other seat may roll and cancel it, barring that action for the operative for the rest of that activation or counteraction. Used by T-HA.40.
- **activationSkip** (new): ploy option on the activation choice that passes the turn. Used by T-HA.38.
- **ployUsedWindow** and **ployCostSurcharge** (new): a ploy window for the other seat after a firefight ploy is used; a cost rule that may raise a cost. Used by T-HA.37.
- **gambitPassedHook** (new): lifecycle point when a seat passes in the Gambit step, with "first non-mission decision". Used by T-HA.7.
- **selectionOperativePick** (new): a pre-battle pick of one operative (enemy or friendly), made with equipment. Used by T-HA.23.
- **killerRemovalWindow** (new): after an enemy is removed, a window for the seat whose operative incapacitated it, also when that enemy was the active operative. Used by T-HA.10, T-HA.29.
- **terrainQueries** (new): "Light or Heavy terrain intervening" for a shooter and target (R-8.8), and "base partly under Vantage". Used by T-HA.35.
- **beforeOrderWindow** (NICE): a decision point when an operative is activated, before its order. T-HA.34 works without it (see ruling).
- **conditionalTeamChoice** (NICE): a team choice shown only when a datacard is in the roster. T-HA.15 works without it (pick ignored).
- **rosterWeaponCaps** (schema): T-HA.4.

### 8.10 Gotchas

- Pain tokens are per operative, not a team pool, and have no cap. A W12+ kill gives two. Several enemies hurt in one action still give one gain (two only for a W12+ kill).
- "Injured" in Power from Pain is the core state (below half starting wounds). Chipping an already-injured enemy gives nothing; taking one from full to injured does.
- Invigorations cost one Pain token each from the operative they affect. Limit: one per activation or counteraction (team-wide), plus Stimulated Senses once more.
- Dark Animus adds an AP at once (R-3.15) and lasts until that operative's next activation, so it also raises the operative's control APL through the end-of-TP scoring. The R-9.6 cap still applies (a Stunned operative goes back to printed APL).
- Vitalised Surge ignores the Charge-then-Dash ban and a previous Dash, not the "not in enemy control range" condition. While counteracting the Dash is 2" at most.
- Torment grenade and Stinger hit friendly operatives too. A Kabalite poisoned by its own grenade takes D3 every time it is activated for the rest of the battle (no Hand of the Archon rule removes Poison).
- Our Poison token is not the Plague Marines' Poison token: separate kinds, separate owners.
- The stim-needler deals 0 damage; it only matters for Stun (every success is a crit with Lethal 3+). It never triggers Power from Pain on its own.
- Skysplinter Assassin's two Shoots: exactly one with the razorwing. Two razorwing Shoots, or two non-razorwing Shoots, are illegal. MARK cancels the second Shoot.
- Crimson Duellist may Fight twice; Tangle doubles each of its blocks, while the razorflail's Brutal limits the enemy's blocks to crits.
- Omen on an enemy forces 6s to be re-rolled (crits included) before any other re-roll; on a friendly it only re-rolls 1s.
- Insensible to Pain trims Dmg stats of 3+ (so dark lance 6/7 becomes 5/6, splinter rifle 2/4 becomes 2/3); it does not touch Devastating or Stinger or poison damage.
- Refined Poison raises Normal Dmg only; the shardcarbine becomes 3/2.
- Rifles: Accurate 1 for splinter rifles only, and only if no Charge, Fall Back or Reposition came before the Shoot in that activation; never while counteracting.
- Chain Snare locks for the TP only on a success; a miss leaves it available.
- Cunning: pass first in the Gambit step to gain 1CP; a mission strategic gambit used first does not spoil it, any team strategy ploy does.
- The darklight cap is across the leader and the main list together.
- No ploy costs are printed: all 1 CP. Toxin Coating and Refined Poison are free uses (twice per TP each), not CP.
- Edition leaks to reject: no 10th-edition Power from Pain by battle round, no Drukhari "Pain token" army pool, no feel-no-pain saves, no wound rolls or AP; inches only, three defence dice.

### 8.11 Engine map

| Rule or capability | Built as |
|---|---|
| Pain tokens (T-HA.25) | `tokens.ts` kind `ha.pain`, owner the HotA seat, no `cap`, gained in the `action.ended` hook from a per-action ledger filled by `damage.inflicted` |
| Invigorations (T-HA.26 to T-HA.29) | ployRule `extraOffers` 0 CP at `firefight.activationStart` / `firefight.actionEnded`; `onUsed` removes one `ha.pain`; per-frame ledger |
| Stimulated Senses, Prey on the Wounded | windows on the fresh roll before any re-roll: `shoot.beforeAttackRerolls` (attacker), `shoot.defenderBeforeRerolls` (defender), `fight.beforeRerolls` (both); the offer's `onUsed` pushes a `RerollGrant` onto that side (`state.attack.seq`), which the grant prompt then offers |
| Vitalised Surge, Brutal Display | window `operative.killed` (the killer's seat, after the removal; info `subjectId` = the killer, `removedId`, `removedPos`; kills while retaliating included); Surge then `startFreeAction` Dash |
| Dark Animus | `aplMods` +1 with removal in the `activation.start` hook of its next activation (before any action) |
| Accelerated Rejuvenation, Administer Drug | `effects.regainWounds` |
| Torment grenade poison, poison damage | `tokens.ts` kind `ha.poison` cap 1; `activation.start` hook `effects.directDamage` D3 |
| Stinger | `beforeIncapacitated` hook + `effects.directDamage`, synchronous chain |
| Tangle | provider `blockCapacity` (2 while the razorflail is used): fight options `block2:<die>-><a>,<b>` |
| Crimson Duellist, Merciless Hunter | provider `maxRepeats`; `actionForbidden`; `beforeShootTargetSelect` with `act.weaponsUsed` (ASTARTES pattern) |
| Torturous Vision, Flay, Toxin Coating, Refined Poison, From Darkness Death | ployRule `extraOffers` 0 CP at `shoot.targetSelected`, `fight.weaponsSelected`, `fight.resolved`, `firefight.activationStart`; `modifyWeaponRules`, `modifyDamage`, `afterAttackRoll` requests |
| Sadistic Competition, Adrenalight | `addToken` from the team's own token observer; `turningPoint.start` hook |
| Combat Drugs | team.json `teamChoices` group `ha-combat-drug`; token `ha.drug` per operative set in the code hook `setup` |
| Painbringer | `onDamageInflicted` per-die reduction with `ctx.roll` (Disgustingly Resilient pattern) |
| Hypex | provider `moveDelta` +2 while injured |
| Insensible to Pain | `modifyDamage` keyed on `targetId` |
| Omen | the pick: a 0 CP code ploy at `firefight.start` of TP1 with one param per eligible operative, token `ha.omen` (RULING: Omen pick timing); enemy pick: attack hook `diceRolled` plus `attack-common.forcedReroll` on its 6s; friendly pick: `RerollGrant.values: [1]` |
| MARK | token `ha.mark`; `beforeShootTargetSelect`; `target.status` obscured false |
| Brutal Display effect | token `ha.brutal-display` (`turningPointEnd`); providers `controlApl` 0 and `actionForbidden` |
| Rifles | `modifyAttackDice` `accurate.push(1)` |
| Blade Artists, Wicked Blades | data (`grantWeaponRule`, `modifyStat` atk) |
| Merciless Sadists | `modifyWeaponRules` Balanced vs wounded target |
| Denizens of Night | `modifyDefenceDice` `one` grant; `los.interveningTraits` and `los.baseUnderVantage` |
| Cruel Deception | provider `actionCostDelta` -1 `fallBack` |
| Devious Scheme | window `ploy.opponentUsed` (info `ployId`, `usedBy`; after firefight ploys and gambits) and ployRule `costSurcharge` |
| Heinous Arrogance | window `firefight.beforeActivation` (the seat on turn only) and `firefight.skipActivation(ctx, seat)` |
| Chain Snare | hook `action.declared` (`cancel` and `bar`) |
| Cunning | hook `gambit.passed` (`explicit`, `usedThisStep`; CP via `engine`) |
| Darklight cap | team.json `selection.loadoutCaps` `[{ "label": "darklight weapons", "weapons": ["ha.w.blast-pistol", "ha.w.blaster", "ha.w.dark-lance"], "max": 2 }]` |

### 8.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/hand-of-the-archon/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `ha.<operative>`, `ha.w.`, `ha.wg.`, `ha.a.`, `ha.p.`, `ha.e.`)
  - `src/engine/teams/hand-of-the-archon.ts` (code hooks, `registerTeamRules`, `registerPloyRule`, hook handlers)
  - `src/client/teams/hand-of-the-archon.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins `ha-archsybarite`, `ha-agent`, `ha-crimson-duellist`, `ha-disciple-of-yaelindra`, `ha-elixicant`, `ha-flayer`, `ha-gunner`, `ha-heavy-gunner`, `ha-skysplinter-assassin`)
  - `tests/engine/teams/hand-of-the-archon.test.ts` (TEAM-HA-nnn tests) and `tests/engine/teams/hand-of-the-archon.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 8 and `12-rules-test-checklist.md` section TEAM-HA (refinements only)
- Activation flag: `"playable": false` in `team.json`. Flip it (with `defaults` filled and every weapon in the client file) only when the team is complete and all gates pass. Every generic 8.11 names is built.
- Capabilities to use: the Engine map above. Pain is the spine: TEAM-HA-010, TEAM-HA-011 and TEAM-HA-012 first, then the invigorations (TEAM-HA-013 to TEAM-HA-016), then Torment grenade and Stinger.
- Weapon records: one shared record per identical profile (splinter rifle, splinter pistol, array of blades); splinter cannon is profile group `ha.wg.splinter-cannon` (profiles `focused`, `sweeping`). Team-local weapon rules `ha.a.wr-tangle`, `ha.a.wr-stinger`, `ha.a.wr-flay` go on the razorflail, stinger pistol and pain sculptors (left out of the leader scaffold, which has none).
- Leader abilities to add after the scaffold: `ha.a.cunning`, `ha.a.torturous-vision`.
- RULING lines expected: Darklight cap, Cunning implicit pass and mission gambits, Torturous Vision scope, Sadistic Competition use and count, Brutal Display control and retaliation, Tangle pairing, Stinger reach, Torment grenade friendly operatives, Poison test Save, Poison token kinds, poison damage on activation, Combat Drugs without an Elixicant, Painbringer and Devastating, Adrenalight pick, Administer Drug self-target and without a drug, Insensible to Pain order, Flay pick timing, Merciless Hunter and Mark, Omen forced re-roll and duration, Mark use, Power from Pain injured / amount / performer gone / any cause, Invigoration cost and limit scope, Vitalised Surge timing, Rifles outside own activation, From Darkness Death pick timing and use, Devious Scheme 0CP test and surcharge, Heinous Arrogance with nothing to answer, Chain Snare use / once per TP / free Fall Back, Refined Poison and crits.
- Gotchas: section 8.10. Pain is per operative and uncapped; "injured" is the core state; invigorations cost one token each with a team-wide per-activation limit; Torment grenade and Stinger hurt friends; Rifles never apply while counteracting.

## 9. Hunter Clade

Rule IDs `T-HC.<n>`. Checklist IDs `TEAM-HC-<nnn>`. Sources: the Hunter Clade team PDF (`team-hunter-clade.pdf`, update log dated January '26, with its rules commentary and errata) as primary, cross-checked against the Wahapedia Hunter Clade page (faction version 3, January 2026, same FAQ entry). Every number below was checked against both; where they differ the section says so (UNCLEAR) and follows the PDF. Facts only Wahapedia gives are Fan-source. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each carries its MECH line.

Every operative has the keywords HUNTER CLADE, IMPERIUM and ADEPTUS MECHANICUS (the IMPERIUM keyword was added by the January '26 errata); the tables list only the rest. Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 9.1 Team selection

- T-HC.1 **Roster**: exactly 10 operatives: 1 leader chosen from SICARIAN INFILTRATOR PRINCEPS, SICARIAN RUSTSTALKER PRINCEPS, SKITARII RANGER ALPHA or SKITARII VANGUARD ALPHA, plus 9 picks from the main list.
  - MECH: roster validator: leader slot count 1 from four datacards, main slot count 9 | CLASS: data
- T-HC.2 **Main list**: SICARIAN INFILTRATOR WARRIOR, SICARIAN RUSTSTALKER WARRIOR, SKITARII RANGER DIKTAT, SKITARII RANGER GUNNER, SKITARII RANGER SURVEYOR, SKITARII RANGER WARRIOR, SKITARII VANGUARD DIKTAT, SKITARII VANGUARD GUNNER, SKITARII VANGUARD SURVEYOR, SKITARII VANGUARD WARRIOR. GUNNER and WARRIOR operatives (both Sicarian Warriors included, they carry WARRIOR) may be taken several times; every other entry at most once.
  - MECH: slot `repeatable` = the four WARRIOR cards and both GUNNER cards (T-HC.6 caps their weapons) | CLASS: data
- T-HC.3 **Diktat and Surveyor**: at most one DIKTAT (Ranger or Vanguard) and at most one SURVEYOR (Ranger or Vanguard) in the kill team.
  - MECH: main slot `caps` {DIKTAT cards, max 1}, {SURVEYOR cards, max 1} | CLASS: data
- T-HC.4 **Sicarian limit**: at most five SICARIAN operatives in the whole kill team. A Sicarian Princeps leader counts, so with one the main list may add at most four Sicarians.
  - MECH: team-wide cap across the leader and main slots, keyed by keyword SICARIAN, max 5 | CLASS: generic:crossSlotCaps
  - RULING: Sicarian limit and the leader | the leader counts toward the five | the text limits what "your kill team" includes, and the leader is part of it | Confirmed
- T-HC.5 **Seven-operative limit**: SICARIAN INFILTRATOR WARRIOR, SICARIAN RUSTSTALKER WARRIOR, SKITARII RANGER GUNNER and SKITARII VANGUARD GUNNER together at most seven. So at least two of the nine main picks are Diktat, Surveyor, Ranger Warrior or Vanguard Warrior.
  - MECH: main slot `caps` {those four cards, max 7} | CLASS: data
  - RULING: which operatives the seven-limit covers | Infiltrator Warrior, Ruststalker Warrior, Ranger Gunner and Vanguard Gunner | the PDF extract prints the limit but lost its asterisk markers; Wahapedia stars exactly these four entries | Fan-source
- T-HC.6 **Special weapon limit**: at most one arc rifle, one plasma caliver and one transuranic arquebus in the kill team, counted across Ranger and Vanguard Gunners. Hence at most three GUNNER operatives.
  - MECH: one Ranger Gunner and one Vanguard Gunner datacard, each picking its weapon; team.json `selection.loadoutCaps` `[{ "weapons": [arc rifle, plasma caliver group, transuranic arquebus group], "max": 1, "each": true }]` | CLASS: data
- T-HC.7 **Loadouts**:
  - Infiltrator Princeps and Infiltrator Warrior: one of flechette blaster or stubcarbine, and one of power weapon or taser goad (Sicarian profiles).
  - Ruststalker Princeps: fixed chordclaw & transonic blades.
  - Ruststalker Warrior: either chordclaw & transonic razor, or transonic blades.
  - Ranger Alpha: one of three sets: (a) galvanic rifle and gun butt; (b) master-crafted radium pistol and power weapon; (c) one of arc pistol or phosphor blast pistol, plus one of arc maul or taser goad (Skitarii profiles).
  - Vanguard Alpha: the same three sets, with radium carbine instead of galvanic rifle in (a).
  - Gunners: gun butt plus one of arc rifle, plasma caliver (both profiles) or transuranic arquebus (both profiles).
  - Ranger Diktat, Surveyor, Warrior: fixed galvanic rifle and gun butt. Vanguard Diktat, Surveyor, Warrior: fixed radium carbine and gun butt.
  - MECH: datacard `weapons.options` with `sets` (Alphas) and `from` slots; gunners pick their weapon in a `from` slot (T-HC.6 caps them) | CLASS: data
- T-HC.8 **Archetypes**: RECON, SEEK & DESTROY (tac ops out of scope).
  - MECH: team.json `archetypes` ["recon", "seek-and-destroy"] | CLASS: data
- T-HC.9 **Gunner base depends on its weapon**: a Gunner with an arc rifle or plasma caliver stands on a 25mm round base; one with a transuranic arquebus on a 60x35mm oval base. Distances, control range, overlap and "wholly within" all use the real oval footprint.
  - MECH: datacard `base: 25` plus `ovalBase: { "long": 60, "short": 35, "weapons": [the arquebus profiles] }`: only the arquebus loadout stands on the oval | CLASS: generic:ovalBase
  - UNCLEAR (resolved): the PDF prints `1 25 2 60x35` on both Gunner cards with footnote marks 1 (arc rifle, plasma caliver) and 2 (arquebus) on the weapon rows; Wahapedia shows only a 25mm base. The PDF wins, and the January '26 commentary itself calls the arquebus base 60x35mm.
  - RULING: Gunner base | 25mm round with arc rifle or plasma caliver, 60x35mm oval with transuranic arquebus | PDF footnotes plus the PDF's own rules commentary | Confirmed

### 9.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords (plus HUNTER CLADE, IMPERIUM, ADEPTUS MECHANICUS) |
|---|---|---|---|---|---|---|
| SICARIAN RUSTSTALKER PRINCEPS | 2 | 6" | 4+ | 11 | 40 | LEADER, SICARIAN, RUSTSTALKER, PRINCEPS |
| SICARIAN INFILTRATOR PRINCEPS | 2 | 6" | 4+ | 11 | 40 | LEADER, SICARIAN, INFILTRATOR, PRINCEPS |
| SKITARII RANGER ALPHA | 2 | 6" | 4+ | 8 | 25 | LEADER, SKITARII, RANGER, ALPHA |
| SKITARII VANGUARD ALPHA | 2 | 6" | 4+ | 8 | 25 | LEADER, SKITARII, VANGUARD, ALPHA |
| SICARIAN INFILTRATOR WARRIOR | 2 | 6" | 4+ | 10 | 40 | SICARIAN, INFILTRATOR, WARRIOR |
| SICARIAN RUSTSTALKER WARRIOR | 2 | 6" | 4+ | 10 | 40 | SICARIAN, RUSTSTALKER, WARRIOR |
| SKITARII RANGER DIKTAT | 2 | 6" | 4+ | 7 | 25 | SKITARII, RANGER, DIKTAT |
| SKITARII RANGER GUNNER | 2 | 6" | 4+ | 7 | 25; `60x35 oval` with arquebus | SKITARII, RANGER, GUNNER |
| SKITARII RANGER SURVEYOR | 2 | 6" | 4+ | 7 | 25 | SKITARII, RANGER, SURVEYOR |
| SKITARII RANGER WARRIOR | 2 | 6" | 4+ | 7 | 25 | SKITARII, RANGER, WARRIOR |
| SKITARII VANGUARD DIKTAT | 2 | 6" | 4+ | 7 | 25 | SKITARII, VANGUARD, DIKTAT |
| SKITARII VANGUARD GUNNER | 2 | 6" | 4+ | 7 | 25; `60x35 oval` with arquebus | SKITARII, VANGUARD, GUNNER |
| SKITARII VANGUARD SURVEYOR | 2 | 6" | 4+ | 7 | 25 | SKITARII, VANGUARD, SURVEYOR |
| SKITARII VANGUARD WARRIOR | 2 | 6" | 4+ | 7 | 25 | SKITARII, VANGUARD, WARRIOR |

Stats read cleanly and match between the PDF and Wahapedia for all fourteen cards. The 60x35mm oval is 2.362" x 1.378" (semi-axes 1.181" and 0.689").

### 9.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Flechette blaster | R | 5 | 3+ | 2/2 | Range 8", Saturate, Silent | Infiltrator Princeps, Infiltrator Warrior (option) |
| Stubcarbine | R | 4 | 3+ | 3/4 | Ceaseless | Infiltrator Princeps, Infiltrator Warrior (option) |
| Power weapon (Sicarian) | M | 4 | 3+ | 4/6 | Lethal 5+ | Infiltrator Princeps, Infiltrator Warrior (option) |
| Taser goad (Sicarian) | M | 4 | 3+ | 3/4 | Lethal 5+, Shock | Infiltrator Princeps, Infiltrator Warrior (option) |
| Chordclaw & transonic blades | M | 5 | 3+ | 4/6 | Balanced, Rending | Ruststalker Princeps |
| Chordclaw & transonic razor | M | 5 | 3+ | 4/5 | Balanced | Ruststalker Warrior (option) |
| Transonic blades | M | 5 | 3+ | 4/6 | Rending | Ruststalker Warrior (option) |
| Arc pistol | R | 4 | 3+ | 4/5 | Range 8", Piercing 1, Stun | Ranger Alpha, Vanguard Alpha (set c) |
| Master-crafted radium pistol | R | 4 | 3+ | 2/4 | Range 8", Balanced, Rending | Ranger Alpha, Vanguard Alpha (set b) |
| Phosphor blast pistol | R | 4 | 3+ | 3/4 | Range 8", Blast 1", Severe | Ranger Alpha, Vanguard Alpha (set c) |
| Galvanic rifle | R | 4 | 3+ | 3/4 | Heavy (Reposition only), Piercing Crits 1 | Ranger Alpha (set a), Ranger Diktat, Surveyor, Warrior |
| Radium carbine | R | 4 | 3+ | 2/4 | Rending | Vanguard Alpha (set a), Vanguard Diktat, Surveyor, Warrior |
| Arc rifle | R | 4 | 3+ | 4/5 | Piercing 1, Stun | Ranger or Vanguard Gunner (option) |
| Plasma caliver (standard) | R | 4 | 3+ | 4/6 | Piercing 1 | Ranger or Vanguard Gunner (option) |
| Plasma caliver (supercharge) | R | 4 | 3+ | 5/6 | Hot, Lethal 5+, Piercing 1 | Ranger or Vanguard Gunner (option) |
| Transuranic arquebus (mobile) | R | 4 | 3+ | 4/3 | Devastating 2, Heavy (Dash only), Piercing 1 | Ranger or Vanguard Gunner (option) |
| Transuranic arquebus (stationary) | R | 4 | 2+ | 4/3 | Devastating 3, Heavy, Piercing 1, Severe | Ranger or Vanguard Gunner (option) |
| Arc maul | M | 4 | 4+ | 4/5 | Shock | Ranger Alpha, Vanguard Alpha (set c) |
| Power weapon (Skitarii) | M | 4 | 4+ | 4/6 | Lethal 5+ | Ranger Alpha, Vanguard Alpha (set b) |
| Taser goad (Skitarii) | M | 4 | 4+ | 3/4 | Lethal 5+, Shock | Ranger Alpha, Vanguard Alpha (set c) |
| Gun butt | M | 3 | 4+ | 2/3 | none | Alphas (set a), every Skitarii Diktat, Gunner, Surveyor, Warrior |

Notes: 19 weapons, 21 profiles (plasma caliver and transuranic arquebus have two profiles each, `hc.wg.plasma-caliver`, `hc.wg.transuranic-arquebus`). The Sicarian power weapon and taser goad hit on 3+, the Skitarii ones on 4+: separate records. Heavy (Reposition only) is `{ "rule": "core.wr.heavy", "only": "reposition" }`; Piercing Crits 1 is `{ "rule": "core.wr.piercing", "x": 1, "crits": true }`.

UNCLEAR (resolved): the PDF layout extract scrambles the Gunner table (Hit/Dmg column shifted one row against names). Rebuilt from the Wahapedia rows, which line up with the PDF's own Hit/Dmg column read in order (3+ 4/5, 3+ 4/6, 3+ 5/6, 3+ 4/3, 2+ 4/3, 4+ 2/3).
UNCLEAR (resolved): both transuranic arquebus profiles print Dmg 4/3 (crit lower than normal) in both sources. Kept as printed; Devastating 2/3 makes a retained crit worth 5 or 6 in total, so Severe and Lethal 5+ (Targeting Protocol) never hurt. RULING: transuranic arquebus damage | 4/3 as printed, both profiles | PDF and Wahapedia agree; never tune printed numbers | Confirmed

### 9.4 Operative rules and unique actions

- T-HC.10 **Canticle of Destruction** (Ruststalker Princeps): while a friendly RUSTSTALKER within 3" of the Princeps (the Princeps itself included) is fighting, its first strike with a critical success in that sequence deals 1 extra damage.
  - MECH: `beforeStrike` on the attacker side of a Fight action: first crit strike per sequence, `amount + 1`, if the striker is a friendly RUSTSTALKER within 3" of a live Princeps | CLASS: team-hook
  - RULING: Canticle of Destruction scope | applies when the Ruststalker is fighting (performing the Fight action), not when it retaliates; the Princeps counts as within 3" of itself | core 2024 terminology separates fighting from retaliating (this team's own Neurostatic Interference lists both), and core makes an operative within any distance of itself | Unsourced
- T-HC.11 **Wasteland Stalker** (Ruststalker Princeps, Ruststalker Warrior): when this operative is shot and may retain any cover saves, it may retain one more cover save, or retain one cover save as a crit instead. Does not stack with the improved cover save from Vantage terrain.
  - MECH: provider `stealthyCover` returns 1 for friendly RUSTSTALKER (the Cult Agent pattern) | CLASS: data
- T-HC.12 **Canticle of Shroudpsalm** (Infiltrator Princeps): a friendly INFILTRATOR within 3" of the Princeps (the Princeps itself included) that has a Conceal order and is in cover cannot be selected as a valid target, overriding every other rule (Seek, Vantage and the like) except when the shooter is within 2" of it.
  - MECH: `beforeShootTargetSelect` removes such INFILTRATOR candidates when the shooter is more than 2" away and `secondary` is false | CLASS: team-hook
  - RULING: Shroudpsalm and area weapons | it stops selection as the primary target and as a Torrent secondary (Torrent secondaries are selected), but not Blast secondaries (core makes them targets without selecting them) | the rule bars selecting; Blast secondaries are not selected | Unsourced
- T-HC.13 **Control Protocol** (every leader: both Princeps and both Alphas): COMMAND OVERRIDE costs 0 CP when the operative it names is visible to this leader (the leader itself always qualifies).
  - MECH: `registerPloyRule.costAdjust` for `hc.p.command-override`: 0 CP, `via: 'controlProtocol'`, if a live friendly LEADER can see the subject | CLASS: team-hook
  - RULING: Control Protocol on the leader itself | the leader may use COMMAND OVERRIDE on itself for 0 CP | core makes an operative always visible to itself | Confirmed
- T-HC.14 **Canticle of Elimination** (Ranger Alpha): a friendly RANGER within 3" of the Alpha (the Alpha included) has Punishing on its ranged weapons.
  - MECH: `modifyWeaponRules` (shoot) adds `core.wr.punishing` | CLASS: team-hook
- T-HC.15 **Targeting Protocol** (every RANGER: Alpha, Diktat, Gunner, Surveyor, Warrior): when this operative shoots, its datacard ranged weapons gain Lethal 5+ if it has not moved during this activation, or always when it is counteracting. It may still move after shooting (Heavy still forbids that for Heavy weapons).
  - MECH: `modifyWeaponRules` (shoot) adds `{ rule: core.wr.lethal, target: '5+' }` when `movedThisActivation === 0` or the action is a counteraction; also during a Guard interrupt (not an activation of this operative: it has not moved in the enemy's activation) | CLASS: team-hook
  - RULING: Targeting Protocol and movement | any movement in the activation counts (move actions, free moves, rotation of an oval base); a counteraction always qualifies even after its 2" move; a Guard interrupt qualifies | the rule names "during the activation" and counteractions explicitly | Unsourced
- T-HC.16 **Canticle of the Glow** (Vanguard Alpha): an enemy operative within 3" of the Vanguard Alpha that is under Rad-Saturation (T-HC.17) also has 1 less Atk on its weapons.
  - MECH: `modifyAttackDice` on the enemy pool: `atk - 1` when Rad-Saturated and within 3" of a live friendly Vanguard Alpha | CLASS: team-hook
- T-HC.17 **Rad-Saturation** (every VANGUARD: Alpha, Diktat, Gunner, Surveyor, Warrior): an enemy operative within 2" of one or more friendly VANGUARD operatives has the Hit of its weapons worsened by 1 (no visibility needed; several Vanguards still give 1). Does not stack with being injured.
  - MECH: `modifyAttackDice` on the enemy pool: `hitDelta + 1` unless the pool already carries the injured penalty (`hasInjuredPenalty` or provider `injuredEquivalent`); query shows the effective Hit | CLASS: team-hook (generic:injuredHitEquivalent if shared)
  - RULING: Rad-Saturation timing | checked when the attack pool is built, from positions at that moment | the rule is a standing condition on the enemy's weapons, and nobody moves inside one Shoot or Fight | Unsourced
  - RULING: penalties not cumulative with injury | Rad-Saturation and a doctrine Deprecation Hit penalty (HC mirror) each skip only the injured penalty, so together they worsen Hit by 2 on an uninjured operative, while an injured one keeps only the injured penalty (1) | each rule only names being injured; R-9.5 sums the rest | Unsourced
- T-HC.18 **SIGNAL** (Ranger Diktat, Vanguard Diktat; 1 AP, SUPPORT): pick one other friendly HUNTER CLADE operative visible to and within 6"; it has +1 APL until the end of its next activation (R-9.6 cap applies). Not while in an enemy's control range.
  - MECH: unique action, friendly-target filter (not self, visible, 6"), APL +1 with duration `endOfTargetNextActivation` | CLASS: data (team-hook if the APL effect needs code)
  - RULING: SIGNAL on a ready operative | "next activation" is its activation later this TP if it is still ready, otherwise its activation next TP | plain reading; matches Stun timing | Unsourced
- T-HC.19 **SPOT** (Ranger Surveyor, Vanguard Surveyor; 1 AP, SUPPORT): pick one enemy operative visible to the Surveyor. Until the end of the TP, when a friendly HUNTER CLADE operative within 3" of the Surveyor (the Surveyor included) shoots that enemy, its ranged weapons gain Seek Light and the enemy cannot be obscured. Not while in an enemy's control range.
  - MECH: token `hc.spot` on the enemy (owner HC, cap 1, expiry `turningPointEnd`, `sourceIncapacitated`); `modifyWeaponRules` adds `core.wr.seek-light`; `target.status` sets `obscured = false` | CLASS: team-hook
  - RULING: SPOT is optional | applied automatically (Seek Light and "cannot be obscured" never hurt the shooter) | an optional effect with no downside needs no prompt | Unsourced
  - RULING: SPOT after the Surveyor is gone | ends when the Surveyor is incapacitated | nothing can then be within 3" of it | Unsourced
- T-HC.20 **Oval base movement** (Gunner with a transuranic arquebus): no part of the base may move further than the move allows. Turning the oval counts: the tips of its long axis travel along an arc while it rotates, and that arc is part of the distance moved.
  - MECH: the oval keeps its facing while it translates (crab-walking is legal); the `move.path` payload `facing` turns it in place at the end of the move (`actions.pathFacing`); the turn is an increment of its own costing the long-axis tip's arc (1.181" x |turn in radians|), rounded up; one waypoint at its own position turns on the spot; the swept footprint is checked every 15 degrees | CLASS: generic:ovalBase
  - RULING: oval rotation cost | the base turns in place once, at the end of the move; the turn is its own increment costing the long-axis tip's arc, rounded up (R-4.1) | the January '26 rules commentary counts rotation in the distance moved, and while the base translates at a fixed facing every point of it moves the same distance | Confirmed
  - RULING: oval orientation | the long axis lies along the operative's facing (+Z) | the arquebus model points along the long axis; any fixed convention works if view and client share it | Unsourced
  - RULING: turning on the spot | rotating an oval base without translating is movement: it needs a move action (or counteract allowance) and counts as having moved (Heavy, Targeting Protocol, the 2" counteract cap) | a part of the base moves | Unsourced

### 9.5 Faction rules

- T-HC.21 **Primary Mode** (DOCTRINA IMPERATIVES): at the end of the Select Operatives step, pick one DOCTRINA IMPERATIVE (Protector, Conqueror, Bulwark, Aggressor or Neutral) as the team's Primary Mode for the whole battle. Picking it gives no effect by itself. Open information.
  - MECH: team.json `teamChoices` `{ id: 'primary-mode', group: 'hc.doctrina' }` over five choice-group abilities; shown in view | CLASS: data
  - RULING: Primary Mode timing | picked with the roster (team choice) | the Select Operatives step is roster selection (R-1.3); nothing else happens between | Confirmed
- T-HC.22 **Doctrina gambit**: in each Strategy phase gambit step (a STRATEGIC GAMBIT, no CP), pick one DOCTRINA IMPERATIVE; every friendly HUNTER CLADE operative has it until the Ready step of the next Strategy phase. Each imperative has an Optimisation and a Deprecation, both active. Once per battle, when the imperative picked is the Primary Mode, the player may switch off its Deprecation for that TP.
  - MECH: 0-CP gambit with param (`protector`, `conqueror`, `bulwark`, `aggressor`, `neutral`, plus `<primary>:ignore` while the battle ledger lacks `hc.primary-ignore`); stores the team mode in `config.doctrine` (reset at TP end already) and the ignore flag in an effect; view shows team mode, Primary Mode, ignore used | CLASS: team-hook (generic:factionGambit if a non-ploy gambit record is wanted)
  - RULING: doctrine duration | the mode expires at TP end (after crit op scoring) | nothing reads Move, Hit, Save or Dmg between TP end and the next Ready step | Unsourced
  - RULING: skipping the gambit | optional; a TP without it leaves the team with no imperative (no Optimisation, no Deprecation) | the gambit is a choice like any gambit; COMMAND OVERRIDE says "current one (if any)" | Unsourced
- T-HC.23 **Protector Imperative**: Optimisation: friendly HUNTER CLADE ranged weapons have Ceaseless. Deprecation: their melee weapons' Hit is worsened by 1 (not stacking with being injured).
  - MECH: `modifyWeaponRules` adds `core.wr.ceaseless` (ranged); `modifyAttackDice` melee `hitDelta + 1` unless already injured | CLASS: team-hook
- T-HC.24 **Conqueror Imperative**: Optimisation: friendly HUNTER CLADE melee weapons have Ceaseless. Deprecation: their ranged weapons' Hit is worsened by 1 (not stacking with being injured).
  - MECH: as T-HC.23 with ranged and melee swapped | CLASS: team-hook
- T-HC.25 **Bulwark Imperative**: Optimisation: when a weapon's Normal Dmg is 3 or more, each normal success it inflicts on a friendly HUNTER CLADE operative deals 1 less. Deprecation: friendly HUNTER CLADE operatives have Move -1" (floor 4").
  - MECH: `modifyDamage` where the target is a friendly HC operative under Bulwark: `dmg.normal >= 3` gives `dmg.normal - 1` (crit Dmg, Devastating and non-attack damage untouched); provider `moveDelta` -1 | CLASS: team-hook
  - RULING: Bulwark with other Dmg changes | Bulwark reads the Normal Dmg after stat changes such as DEBILITATING IRRADIATION, so 4 becomes 3 then 2 | the Optimisation reduces damage inflicted, which comes after the weapon's Dmg stat is settled | Unsourced
- T-HC.26 **Aggressor Imperative**: Optimisation: friendly HUNTER CLADE operatives have Move +1". Deprecation: their Save is worsened by 1.
  - MECH: provider `moveDelta` +1; `modifyDefenceDice` `saveDelta + 1` | CLASS: team-hook
- T-HC.27 **Neutral Imperative**: no Optimisation, no Deprecation. Legal as Primary Mode and as a gambit or override pick; it matters for OMNISSIAH'S IMPERATIVE (no extra rule).
  - MECH: mode value `neutral` with no effects | CLASS: data

Per-operative mode: COMMAND OVERRIDE (T-HC.34) gives one operative its own imperative. An operative's current imperative is its override if it has one, else the team's. Every Optimisation and Deprecation above applies per operative by that value.

### 9.6 Ploys

The source prints no ploy costs; every ploy is 1 CP (R-2.4) unless a rule makes it 0. Strategy ploys last until the end of the TP (R-2.5).

- T-HC.28 **DEBILITATING IRRADIATION** | Strategy | 1 CP | Gambit step | While an enemy operative under Rad-Saturation shoots, fights or retaliates against a friendly VANGUARD, its weapons' Normal Dmg is 1 lower, never below 3 (a weapon already at 3 or less is unchanged).
  - MECH: `modifyDamage` where attacker is enemy and Rad-Saturated, target is friendly VANGUARD: `dmg.normal = max(3, normal - 1)` only if normal > 3 | CLASS: team-hook
- T-HC.29 **NEUROSTATIC INTERFERENCE** | Strategy | 1 CP | Gambit step | While an enemy operative within 6" of a friendly INFILTRATOR (no visibility) shoots, fights or retaliates, the opponent cannot re-roll its attack dice (Balanced, Ceaseless, Relentless, Command Re-roll, any other).
  - MECH: provider `rerollsBanned` for the enemy attack side while the effect is active | CLASS: team-hook
- T-HC.30 **SCOUTING PROTOCOL** | Strategy | 1 CP | Gambit step, not in TP1 | Each friendly RANGER with a Conceal order that is more than 6" from every enemy operative may perform a free Dash, one at a time in an order the player picks.
  - MECH: code ploy; loop of `startFreeAction({ action: 'dash' })` with a remaining-ids list (the Hierotek `hie.underlings` pattern); each pick may also be declined | CLASS: team-hook
  - RULING: Scouting Protocol eligibility | the eligible set is fixed when the ploy is used; each operative may skip its Dash | enemies do not move in between and the Dash is optional ("can") | Unsourced
- T-HC.31 **ACCELERANT AGENTS** | Strategy | 1 CP | Gambit step | During its activation each friendly RUSTSTALKER may perform two Fight actions, and one of them costs 0 AP.
  - MECH: provider `maxRepeats('fight') = 2`; provider `actionCostDelta('fight') = -1` when one Fight was already performed this activation | CLASS: team-hook
  - RULING: which Fight is free | the second Fight in the activation costs 0 AP | equivalent outcome, simplest to show; a free Fight still needs an enemy in control range | Unsourced
- T-HC.32 **CONTROL EDICT** | Firefight | 1 CP (0 CP once per battle via T-HC.39) | When the player is about to activate a friendly operative | Choose the friendly LEADER plus a second ready friendly HUNTER CLADE operative within 3" of it and visible to it, never two SICARIAN. Activate one of them; when it is expended, activate the other before the opponent activates.
  - MECH: code ploy at `firefight.activationStart` of the first (leader or partner); stores the partner; provider `chainActivation` returns it after the first is expended | CLASS: team-hook
  - RULING: Control Edict timing and readiness | offered at the first operative's activation start, both must be ready, and the second loses its chain if it is no longer ready | equivalent to choosing before activating; "other ready" implies the leader is ready too | Unsourced
- T-HC.33 **SCRAPCODE OVERLOAD** | Firefight | 1 CP | When a friendly INFILTRATOR is activated; or when that INFILTRATOR, or an enemy within 3" of it, is about to perform Pick Up Marker or a mission action (not Operate Hatch) | Until that INFILTRATOR's next activation starts, when marker control is worked out, the opponent's contesting APL total is 1 lower if at least one contesting enemy is within 3" of that INFILTRATOR. Not an APL change, so it stacks with APL changes, and it can flip control before the triggering action resolves.
  - MECH: code ploy; effect keyed to the infiltrator (expiry `startOfActivation:<id>`, also on its incapacitation); provider `controlTotal` subtracts 1 from the enemy seat total | CLASS: team-hook; the second timing needs generic:opponentActionWindow
  - RULING: Scrapcode Overload expiry | also ends when the Infiltrator is incapacitated | distance to it can no longer be measured | Unsourced
- T-HC.34 **COMMAND OVERRIDE** | Firefight | 1 CP (0 CP via T-HC.13) | When a friendly HUNTER CLADE operative is activated | That operative takes a different DOCTRINA IMPERATIVE of the player's choice instead of its current one, until the next Ready step. The Primary Mode ignore never applies through this ploy.
  - MECH: code ploy at `firefight.activationStart`; token `hc.doctrine` on the operative (owner HC, cap 1, data `{ mode }`, expiry `turningPointEnd`); view shows it | CLASS: team-hook
  - RULING: Command Override choices | offers only imperatives other than the operative's current one; Neutral is allowed; the Primary Mode's Deprecation still applies | "instead of" implies a change; the ignore is tied to the gambit pick | Unsourced
- T-HC.35 **OMNISSIAH'S IMPERATIVE** | Firefight | 1 CP | During a friendly HUNTER CLADE operative's activation (at any point, including after attack or defence dice are rolled, retained or re-rolled); or, when it is shot, once the enemy's attack dice are final | Until the next Ready step that operative gains one extra rule from its current imperative: Protector: its ranged weapons have Severe. Conqueror: when it fights, after resolving its first attack die in the sequence it may resolve another at once, before the opponent. Bulwark: Save improved by 1 (immediately, even mid-Shoot), and when shot it rolls one extra defence die. Aggressor: it may ignore the first 2" of vertical distance in one climb up. Neutral: nothing.
  - MECH: code ploy over the firefight windows of its activation (`firefight.activationStart`, `firefight.actionDeclared`, `firefight.actionEnded`, `shoot.targetSelected`, `shoot.attackRolled`, `shoot.beforeDefenceRerolls`, `fight.weaponsSelected`, `fight.rolled`, `fight.beforeRerolls`) and, as defender, the end of the Roll Attack Dice step (needs generic:defenderPreDefenceWindow) and `shoot.defenceRolled`; token `hc.omnissiah` (data `{ mode }`, expiry `turningPointEnd`). Protector: `modifyWeaponRules` adds Severe. Conqueror: provider `afterFightResolution` owes one more attacker strike after the first. Bulwark: `modifyDefenceDice` `saveDelta - 1`, `dice + 1`. Aggressor: provider `moveSurcharge` returns minus min(2, first climb's vertical) | CLASS: team-hook; generic:defenderPreDefenceWindow
  - UNCLEAR (resolved): the January '26 amendment list quotes a first paragraph that includes "inflict D3+1 damage on that friendly operative", while the ploy card in the same PDF and the Wahapedia page (January 2026) both omit it, and the older errata deleted that sentence. Followed the ploy card. RULING: Omnissiah's Imperative self-damage | no D3+1 self-damage | the ploy card and Wahapedia agree and the PDF card carries every other January '26 change; recheck if a later PDF prints the damage | Unsourced
  - RULING: Omnissiah's Imperative mode | the extra rule is fixed by the operative's imperative at the moment the ploy is used; a later COMMAND OVERRIDE does not swap it | "current" read at use time | Unsourced
  - RULING: Omnissiah's Bulwark after defence dice are rolled | the extra die is rolled at once and every unretained defence die is reclassified against the new Save | the ploy note allows use after rolling, and the Save change is immediate | Unsourced
  - RULING: Omnissiah's Aggressor | applies to the first climb up in each move action | mirrors the per-action free drop allowance (R-12.3); "one climb up" read per move | Unsourced
  - RULING: Omnissiah's Conqueror | once per fight sequence, only when fighting (not retaliating) | the text names fighting and the first attack die | Unsourced

### 9.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-HC.36 **RAD BOMBARDMENT** | Once per battle, as a STRATEGIC GAMBIT in TP2 or later: pick one objective marker or the opponent's drop zone. Roll a D6 for each enemy operative in control range of that marker or within that drop zone, subtracting 1 if any part of its base is underneath Vantage terrain. On 4+ its APL is 1 lower until the end of its next activation; on 6 it also takes D3 damage (rolled separately).
  - MECH: equipment with `window: 'strategy.gambit'`, `limits` once per battle, `when` TP >= 2; code hook: `markerInControlRange` or any part of the base inside the drop zone; under-Vantage test against terrain floors above the operative's level; APL -1 duration `endOfTargetNextActivation`; `effects.directDamage` | CLASS: team-hook (generic:underVantage helper is NICE)
  - RULING: Rad Bombardment areas | "within that drop zone" means any part of the base inside it; "underneath Vantage" means any part of the base footprint lies below a Vantage floor higher than the operative's own level | R-8.3 "within" is any part; the rule says any part of the base | Unsourced
  - RULING: Rad Bombardment modified 6 | the -1 applies before the result is read, so a natural 6 under Vantage counts as 5 (APL only) | plain modifier order | Confirmed
- T-HC.37 **REDUNDANCY SYSTEMS** | Once per TP, when a friendly HUNTER CLADE operative is activated and is not in an enemy's control range, the player may have it regain up to D3+2 lost wounds (never above starting wounds).
  - MECH: equipment `window: 'firefight.activationStart'`, `limits` once per TP; `effects.regainWounds` | CLASS: team-hook
  - RULING: Redundancy Systems timing | offered after the order is chosen and after other "is activated" damage effects | it is an optional "you can" effect at activation, and damage effects resolve first among "is activated" rules (core update log) | Unsourced
- T-HC.38 **REFRACTOR FIELD** | Once per TP, just before defence dice are rolled for a friendly HUNTER CLADE operative being shot: the Piercing x of the attack is 1 lower for that sequence (Piercing 1 disappears).
  - MECH: equipment offered to the defender at the start of Roll Defence Dice (generic:defenderPreDefenceWindow), `limits` once per TP; `modifyWeaponRules` lowers `piercing` x by 1 for the sequence | CLASS: team-hook; generic:defenderPreDefenceWindow
  - RULING: Refractor Field and Piercing Crits | Piercing Crits x is also lowered | core defines Piercing Crits as a form of Piercing (the Cult Agent precedent) | Unsourced
- T-HC.39 **EXTREMIS MIND-LINK** | Once per battle, CONTROL EDICT may cost 0 CP, and then the two operatives are activated together: both pick orders and are activated at once, and the player performs their actions one at a time in any order until both are done.
  - MECH: joint activation of two operatives with separate AP pools and action ledgers, interleaved actions, both "is activated" and "activation end" sets | CLASS: generic:jointActivation
  - RULING: Extremis Mind-Link details | each operative keeps its own AP, action restrictions and order; "is activated" effects fire for both before the first action; both are expended when the player ends the joint activation; the one-SICARIAN limit of CONTROL EDICT still applies | the rule only changes the sequencing; everything else stays per operative | Unsourced

### 9.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-HC: TEAM-HC-000 to TEAM-HC-030.

### 9.9 Generic capabilities (survey; resolved in the Engine map below)

- **ovalBase**: an operative's base may be a 60x35mm oval with an orientation (`facing`). All base geometry (gap, overlap, control range, "within" and "wholly within", deploy regions, markers, Blast and Torrent distances, smoke, LOS body proxy) uses the oval footprint; moves cost straight length plus long-axis tip arc for turns (T-HC.20), with player-chosen facing per waypoint and swept collision during turns; view and query expose shape and facing; the client draws it. Used by T-HC.9, T-HC.20.
- **crossSlotCaps**: a roster cap over every slot, keyed by keyword (SICARIAN ≤ 5, leader included). Used by T-HC.4.
- **weaponCaps**: at most n of a weapon across all operatives (built as `selection.loadoutCaps`). Used by T-HC.6.
- **jointActivation**: two operatives activated at once, actions interleaved. Used by T-HC.39.
- **defenderPreDefenceWindow**: a defender-seat ploy and equipment window after the attack dice are final and before defence dice are collected. Used by T-HC.35, T-HC.38.
- **opponentActionWindow**: a ploy window for both seats when any operative declares Pick Up Marker or a mission action, before it resolves. Used by T-HC.33.
- **injuredHitEquivalent** (NICE): a Hit-only, weapon-type-filtered penalty that does not stack with injury; team-hook via `modifyAttackDice` works. Used by T-HC.17, T-HC.23, T-HC.24.
- **factionGambit** (NICE): a 0-CP strategic gambit with params that is not a ploy. Used by T-HC.22.
- **underVantage** (NICE): any part of a base footprint under a higher Vantage floor. Used by T-HC.36.

### 9.10 Gotchas

- Roster caps: at most 5 SICARIAN with the leader, at most 7 of (Sicarian Warriors + Gunners), one DIKTAT, one SURVEYOR, one each of arc rifle, plasma caliver and transuranic arquebus.
- The arquebus Gunner is the only oval base in the game so far. Its facing matters for every distance; turning costs movement; rotating in place is moving. A 25mm Gunner (arc rifle, caliver) is round.
- Transuranic arquebus prints Dmg 4/3 (crit lower). Do not "fix" it. Mobile profile is Heavy (Dash only), stationary is plain Heavy.
- Galvanic rifle is Heavy (Reposition only), and the Ranger Alpha's set (a) carries it: an Alpha that Dashes cannot fire it.
- Targeting Protocol is RANGER only (not Vanguard), needs no movement in the activation, and is always on when counteracting. It does not lift Heavy's no-move-after rule.
- Rad-Saturation needs no visibility, does not stack across Vanguards or with injury, and works on the enemy's ranged and melee weapons against any target. DEBILITATING IRRADIATION only helps when the Vanguard is the one attacked, and never lowers a Normal Dmg below 3.
- Doctrine Deprecations are real: Protector worsens your melee Hit, Conqueror your ranged Hit, Bulwark costs 1" Move, Aggressor costs 1 Save. The Primary Mode ignore is once per battle and only via the gambit.
- Each operative has one current imperative: the override from COMMAND OVERRIDE, else the team's. Effects follow that per-operative value.
- OMNISSIAH'S IMPERATIVE: no self-damage in our build (UNCLEAR above); its extra rule follows the imperative at use time; it can be used mid-attack.
- Shroudpsalm only protects INFILTRATORS on Conceal in cover within 3" of the Infiltrator Princeps, and fails against shooters within 2".
- ACCELERANT AGENTS makes one of the two Fights free; with APL 2 a Ruststalker can Charge, Fight and Fight.
- CONTROL EDICT never pairs two Sicarians, so a Sicarian Princeps must pair with a Skitarii. With EXTREMIS MIND-LINK both act together, action by action.
- Bulwark reduces only Normal Dmg of 3+ (per normal success); crits, Devastating, Hot, and mission damage are untouched.
- Edition leaks to reject: no 2021 Kill Team Hunter Clade imperative effects or Canticles of the Omnissiah, no 40k 10th Doctrina Imperatives (BS and AP changes), no wound rolls; inches only, three defence dice.

### 9.11 Engine map

| Survey capability or rule | Built as |
|---|---|
| Roster (T-HC.1 to T-HC.3, T-HC.5) | team.json slots `leader` (1 of 4) and `main` (9) with `repeatable` and `caps` |
| Special weapon limit (T-HC.6) | team.json `selection.loadoutCaps` (`each: true`, `max: 1`); `capAwareLoadouts` keeps default loadouts inside it |
| Sicarian limit (T-HC.4) | team.json `selection.caps` `[{ "keyword": "SICARIAN", "max": 5 }]`, counted over every slot |
| Gunner base, oval movement (T-HC.9, T-HC.20) | `footprint.ts` (three-disc oval), datacard `ovalBase` with `weapons`, `Operative.ovalHalfAxis`, `move.path` and `setup.deploy` payload `facing`; the client still draws a round base and offers no turn (open item, `src/client/figures/**` and the move tool) |
| Canticle of Destruction | attack hook `beforeStrike` |
| Wasteland Stalker | provider `stealthyCover` |
| Canticle of Shroudpsalm | attack hook `beforeShootTargetSelect` |
| Control Protocol | `registerPloyRule.costAdjust` |
| Canticle of Elimination, Targeting Protocol, Protector, Conqueror Optimisation, SPOT, Omnissiah Protector | attack hook `modifyWeaponRules`; `Operative.movedThisActivation` |
| Rad-Saturation, Canticle of the Glow, Deprecation Hit penalties | attack hook `modifyAttackDice` (`atk`, `hitDelta`, injured check) |
| Bulwark Optimisation, DEBILITATING IRRADIATION | attack hook `modifyDamage` |
| Bulwark and Aggressor Move | provider `moveDelta` |
| Aggressor Save, Omnissiah Bulwark | attack hook `modifyDefenceDice` |
| SIGNAL | unique action, APL +1, duration `endOfTargetNextActivation` |
| SPOT | `tokens.ts` `hc.spot`; `target.status` |
| Doctrina gambit, Primary Mode | `teamChoices` + 0-CP code gambit, `config.doctrine`, battle ledger `hc.primary-ignore` |
| COMMAND OVERRIDE, OMNISSIAH'S IMPERATIVE state | `tokens.ts` `hc.doctrine`, `hc.omnissiah` (public in view) |
| NEUROSTATIC INTERFERENCE | provider `rerollsBanned` |
| SCOUTING PROTOCOL | `startFreeAction` dash loop (Hierotek underlings pattern) |
| ACCELERANT AGENTS | providers `maxRepeats`, `actionCostDelta` |
| CONTROL EDICT | ploy at `firefight.activationStart`; provider `chainActivation` |
| SCRAPCODE OVERLOAD | provider `controlTotal`; window `firefight.opponentActionDeclared` for the second timing (info `actorId` = the enemy, `action`) |
| Omnissiah Conqueror | provider `afterFightResolution` |
| Omnissiah Aggressor | provider `moveSurcharge` |
| Omnissiah defender timing, REFRACTOR FIELD | window `shoot.beforeDefenceRoll` (defender only, after retention and Devastating) |
| RAD BOMBARDMENT | equipment `window: 'strategy.gambit'`; `markerInControlRange`; `effects.directDamage`; team helper for under-Vantage |
| REDUNDANCY SYSTEMS | equipment `window: 'firefight.activationStart'`; `effects.regainWounds` |
| EXTREMIS MIND-LINK | `firefight.joinActivation(ctx, partnerId, order)` from the Control Edict offer at `firefight.activationStart`; `Activation.partner`, `firefight.action` option `switch` |

### 9.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/hunter-clade/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `hc.<name>`, `hc.w.`, `hc.wg.`, `hc.a.`, `hc.p.`, `hc.e.`)
  - `src/engine/teams/hunter-clade.ts` (code hooks, `registerTeamRules`, `registerPloyRule`, hook handlers)
  - `src/client/teams/hunter-clade.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins `hc-<operative slug>`, for example `hc-skitarii-ranger-alpha`, `hc-sicarian-ruststalker-princeps`; the arquebus Gunner needs its own oval-base stand-in)
  - `tests/engine/teams/hunter-clade.test.ts` (TEAM-HC-nnn tests) and `tests/engine/teams/hunter-clade.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 9 and `12-rules-test-checklist.md` section TEAM-HC (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/hunter-clade/team.json`. Flip it (with `defaults` filled and every weapon in `src/client/teams/hunter-clade.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. The doctrines are the spine: TEAM-HC-010 to TEAM-HC-015 first, then Rad-Saturation (TEAM-HC-007) and Targeting Protocol (TEAM-HC-006), then the oval base (TEAM-HC-004, TEAM-HC-005).
- Gunners are two datacards (Ranger, Vanguard) with a weapon pick; `selection.loadoutCaps` holds each special weapon to one, and `ovalBase.weapons` puts only the arquebus loadout on the oval. The scaffold leader is the Ranger Alpha (`hunter-clade-leader.json`); the other three leaders follow 9.2/9.3.
- Team-local weapon rules: none; every weapon rule is core. Abilities: Canticle of Destruction, Wasteland Stalker, Shroudpsalm, Control Protocol, Canticle of Elimination, Targeting Protocol, Canticle of the Glow, Rad-Saturation; unique actions SIGNAL, SPOT.
- RULING lines expected: Sicarian limit and the leader, seven-limit membership, Gunner base, arquebus damage, Canticle of Destruction scope, Control Protocol on itself, Shroudpsalm and area weapons, Targeting Protocol and movement, Rad-Saturation timing, penalties not cumulative with injury, SIGNAL timing, SPOT optional and expiry, oval rotation cost, orientation and turning on the spot, Primary Mode timing, doctrine duration, skipping the gambit, Bulwark ordering, Scouting Protocol eligibility, which Fight is free, Control Edict timing, Scrapcode expiry, Command Override choices, Omnissiah self-damage, mode, Bulwark and Aggressor and Conqueror, Rad Bombardment areas and modified 6, Redundancy timing, Refractor and Piercing Crits, Extremis Mind-Link.
- Gotchas: section 9.10. Rotation is movement for the oval Gunner; Deprecations always apply unless the once-per-battle Primary ignore is taken; the arquebus Dmg 4/3 is printed that way.

## 10. Hearthkyn Salvagers

Rule IDs `T-HK.<n>`, checklist IDs `TEAM-HK-<nnn>`. Sources: the team PDF (Hearthkyn Salvagers, April '26 update log state; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia page (faction version 3, April 2026, with one FAQ entry). The two agree on everything except three places where Wahapedia lags the PDF errata (listed in 10.10); the PDF wins there. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed (display names keep their diacritics, keywords and ids do not, T-HK.5). Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 10.1 Team selection

- T-HK.1 Roster is exactly 10 operatives: 1 HEARTHKYN THEYN (leader) plus 9 picks from the main list (T-HK.2). Nothing counts as two selections or half a selection.
  - MECH: roster validator: leader slot count 1, main slot count 9 | CLASS: data
- T-HK.2 Main list: DÔZR, FIELD MEDIC, GRENADIER, GUNNER, JUMP PACK WARRIOR, KINLYNK, KOGNITÂAR, LOKÂTR, LUGGER, WARRIOR. WARRIOR may be taken any number of times. GUNNER may be taken up to three times, and no two Gunners may carry the same weapon option. Every other entry at most once.
  - MECH: each Gunner weapon option is its own datacard (`hk.gunner-plasma-beamer`, `hk.gunner-auto-rifle`, `hk.gunner-rotary-cannon`, `hk.gunner-missile-launcher`, `hk.gunner-rail-rifle`), each non-repeatable, with slot `caps: [{ from: <five gunner ids>, max: 3 }]`; `repeatable: ["hk.warrior"]` | CLASS: data
  - RULING: Hearthkyn Salvagers Gunner options | five Gunner datacards, one per weapon option, each at most once, at most three together | "each must have a different option" is exactly "each option card at most once"; this is the Wyrmblade Gunner pattern (6.11) | Confirmed
- T-HK.3 Loadouts:
  - THEYN: one ranged weapon from Autoch-pattern bolt pistol, Autoch-pattern bolter, bolt revolver, EtaCarn plasma pistol, ion blaster, ion pistol; and one melee weapon from concussion gauntlet, plasma weapon. The Theyn has no fists.
  - KINLYNK, KOGNITÂAR, LOKÂTR, LUGGER, WARRIOR: either Autoch-pattern bolter or ion blaster, plus fists.
  - GUNNER: its option's weapon (both profiles for the rotary cannon and the missile launcher) plus fists.
  - DÔZR, FIELD MEDIC, GRENADIER, JUMP PACK WARRIOR: every weapon on the card (fixed).
  - MECH: datacard `weapons.options` slots (`from` lists; profile groups for two-profile weapons), fixed elsewhere | CLASS: data
- T-HK.4 Archetypes: RECON, SECURITY (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["recon", "security"]` | CLASS: data
- T-HK.5 Keywords: every operative carries HEARTHKYN SALVAGER and LEAGUES OF VOTANN plus its own role keyword. The keyword schema is plain ASCII, so the role keywords with diacritics are stored as `DOZR`, `KOGNITAAR` and `LOKATR` (display names stay "Hearthkyn Dôzr", "Hearthkyn Kognitâar", "Hearthkyn Lokâtr"). There is no IRONKIN keyword: the Kognitâar is an Ironkin only in the background text, so every "friendly HEARTHKYN SALVAGER" rule (Medic!, Medikit, Grudge, ploys) covers it like any other operative. The Field Medic also has MEDIC.
  - MECH: keyword lists in operatives.json | CLASS: data
  - RULING: Hearthkyn Salvagers keyword spelling | role keywords stored as DOZR, KOGNITAAR, LOKATR; names keep the accents | the data schema's Keyword pattern accepts A-Z only, and no rule anywhere compares these keywords with another team's | Unsourced
- T-HK.6 Team-local weapon rules: **Beam** (EtaCarn plasma beamer, T-HK.15) and **Force Impact** (Jump Pack Warrior's plasma weapon, T-HK.17). Every other weapon rule on the cards is core (R-10).
  - MECH: weapon records carry `{ "rule": "hk.wr.beam" }` / `{ "rule": "hk.wr.force-impact" }` resolved by the team file | CLASS: team-hook

### 10.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| HEARTHKYN THEYN | 2 | 5" | 3+ | 9 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, LEADER, THEYN |
| HEARTHKYN DÔZR | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, DOZR |
| HEARTHKYN FIELD MEDIC | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, MEDIC, FIELD MEDIC |
| HEARTHKYN GRENADIER | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, GRENADIER |
| HEARTHKYN GUNNER (each option card) | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, GUNNER |
| HEARTHKYN JUMP PACK WARRIOR | 2 | 8" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, JUMP PACK WARRIOR |
| HEARTHKYN KINLYNK | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, KINLYNK |
| HEARTHKYN KOGNITÂAR | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, KOGNITAAR |
| HEARTHKYN LOKÂTR | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, LOKATR |
| HEARTHKYN LUGGER | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, LUGGER |
| HEARTHKYN WARRIOR | 2 | 5" | 3+ | 8 | 28 | HEARTHKYN SALVAGER, LEAGUES OF VOTANN, WARRIOR |

Notes: every card is APL 2, Save 3+; only the Theyn has 9 wounds. The Jump Pack Warrior's Move is 8" per the errata (both sources agree). The PDF prints "HEARTHKYN SALVAGER ," with a stray space; the keyword is HEARTHKYN SALVAGER. Bases: Wahapedia gives 28mm for every card and the PDF prints 28 on every card.

### 10.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Autoch-pattern bolt pistol (Theyn) | R | 4 | 3+ | 3/4 | Range 8", Accurate 1 | Theyn (option) |
| Autoch-pattern bolt pistol | R | 4 | 4+ | 3/4 | Range 8", Accurate 1 | Dôzr, Grenadier, Jump Pack Warrior |
| Autoch-pattern bolter | R | 4 | 4+ | 3/4 | Accurate 1 | Theyn, Kinlynk, Kognitâar, Lokâtr, Lugger, Warrior (option) |
| Bolt revolver (Theyn) | R | 4 | 3+ | 3/5 | Range 8" | Theyn (option) |
| Bolt revolver (Field Medic) | R | 4 | 4+ | 3/5 | Range 8" | Field Medic |
| EtaCarn plasma pistol | R | 4 | 4+ | 3/5 | Range 8", Piercing 1 | Theyn (option) |
| Ion blaster | R | 4 | 4+ | 3/4 | Piercing Crits 1 | Theyn, Kinlynk, Kognitâar, Lokâtr, Lugger, Warrior (option) |
| Ion pistol | R | 4 | 3+ | 3/4 | Range 8", Piercing Crits 1 | Theyn (option) |
| C8 HX charge | R | 4 | 3+ | 4/6 | Range 4", Blast 1", Heavy (Reposition only), Limited 1, Piercing 1, Saturate | Grenadier |
| EtaCarn plasma beamer | R | 4 | 4+ | 5/6 | Piercing 1, Beam | Gunner (plasma beamer card) |
| HYLas auto rifle | R | 4 | 4+ | 4/5 | Ceaseless, Rending | Gunner (auto rifle card) |
| HYLas rotary cannon (focused) | R | 5 | 4+ | 4/5 | Ceaseless, Heavy (Reposition only), Saturate | Gunner (rotary cannon card) |
| HYLas rotary cannon (sweeping) | R | 4 | 4+ | 4/5 | Ceaseless, Heavy (Reposition only), Saturate, Torrent 1" | Gunner (rotary cannon card) |
| L7 missile launcher (blast) | R | 4 | 4+ | 3/5 | Blast 2" | Gunner (missile launcher card) |
| L7 missile launcher (focused) | R | 4 | 4+ | 5/6 | Piercing 1 | Gunner (missile launcher card) |
| Magna rail rifle | R | 4 | 4+ | 4/2 | Devastating 3, Heavy (Dash only), Piercing 2 | Gunner (rail rifle card) |
| Concussion gauntlet | M | 4 | 4+ | 5/7 | Brutal, Shock | Theyn (option) |
| Plasma weapon | M | 4 | 3+ | 4/6 | Lethal 5+ | Theyn (option) |
| Plasma weapon (Jump Pack Warrior) | M | 4 | 3+ | 4/6 | Lethal 5+, Force Impact | Jump Pack Warrior |
| Concussion knux | M | 4 | 3+ | 4/4 | Ceaseless, Lethal 5+, Shock | Dôzr |
| Plasma knife (Field Medic) | M | 4 | 4+ | 3/5 | Lethal 5+ | Field Medic |
| Plasma knife (equipment) | M | 3 | 4+ | 3/5 | Lethal 5+ | every friendly HEARTHKYN SALVAGER via T-HK.37 |
| Fists | M | 3 | 4+ | 2/3 | none | Grenadier, every Gunner, Kinlynk, Kognitâar, Lokâtr, Lugger, Warrior |

Loadout options per operative: see T-HK.3. Profile groups: `hk.wg.hylas-rotary-cannon` (focused, sweeping) and `hk.wg.l7-missile-launcher` (blast, focused); a Gunner card brings the whole group. The Grenadier may also use frag, krak, smoke and stun grenades (T-HK.13).

UNCLEAR (resolved): the Gunner table is scrambled in the layout extract (stats and rules drift across rows). The flow extract keeps the column order and matches Wahapedia row for row, so the table above follows both.
UNCLEAR (resolved): the Theyn and the Field Medic both have a bolt revolver. The PDF prints Hit 3+ for the Theyn and 4+ for the Field Medic; Wahapedia prints 3+ for both. RULING: Hearthkyn Salvagers Field Medic bolt revolver | Hit 4+ | the PDF datacard prints 4+; Wahapedia's 3+ copies the Theyn's line | Corrected
UNCLEAR (resolved): the magna rail rifle prints Dmg 4/2 (crit lower than normal), the same in both sources. Kept as printed: a retained crit deals Devastating 3 at once plus 2 if it goes unblocked. RULING: Hearthkyn Salvagers magna rail rifle Dmg | 4/2 as printed | PDF and Wahapedia agree; Devastating 3 makes the crit worth 5 in total, so the low crit value is deliberate | Confirmed
Notes: the Theyn's bolt pistol and bolt revolver are better than the other cards' versions (3+ against 4+), so they are separate records. The Theyn's bolter and ion blaster equal everyone else's and share the records. The EtaCarn plasma pistol has no Hot. The Theyn's plasma weapon and the Jump Pack Warrior's differ only by Force Impact, so they are separate records.

### 10.4 Operative rules and unique actions

- T-HK.7 **Eye of the Ancestors** (Theyn): a STRATEGIC GAMBIT usable while the Theyn is in the killzone. Pick one enemy operative anywhere in the killzone (no visibility or range); if three or more friendly HEARTHKYN SALVAGER operatives have been incapacitated so far, pick up to two different enemy operatives instead. Each picked enemy gains one of your Grudge tokens (T-HK.27).
  - MECH: strategic gambit ability (as Art of War, T-PF.7) with one or two `ability.choice` picks over enemy operatives in the killzone; gate "Theyn in the killzone"; incapacitated count from friendly HEARTHKYN SALVAGER operatives with status removed; `addToken(kind 'hk.grudge')` | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Eye of the Ancestors count | "incapacitated" counts friendly operatives actually incapacitated earlier in the battle; an operative saved by Medic! does not count; the two picks must be different enemies | the rule counts incapacitated operatives, and "up to two enemy operatives" names two operatives | Unsourced
- T-HK.8 **Weavefield Crest** (Theyn): once per battle, when a single attack die would inflict its Normal Dmg on the Theyn, that damage is ignored. Crit damage, Devastating damage and non-dice damage are never ignored.
  - MECH: once-per-battle ignore of Normal Dmg (as Iron Halo, T-AOD.8) in `onDamageInflicted` (sources `normal`, `strike-normal`) | CLASS: data
  - RULING: Hearthkyn Salvagers Weavefield Crest use | used automatically, the first time a Normal Dmg die would incapacitate the Theyn or take it below half its starting wounds; never offered as a prompt | the hook cannot ask, and spending the one use on a die that changes nothing would waste it | Unsourced
- T-HK.9 **Brawler** (Dôzr), whenever it is fighting or retaliating: (a) enemy operatives cannot assist the enemy fighter; (b) if the Dôzr is incapacitated during the sequence, it may first strike the enemy fighter with one of its unresolved successes, and only then is the sequence ended and the Dôzr removed; (c) an enemy success whose Normal Dmg is 4 or more inflicts 1 less damage on the Dôzr (crits and Devastating are unaffected).
  - MECH: (a) `modifyAttackDice` on the enemy fighter's pool empties `assists` (as Siege Specialist); (b) `beforeIncapacitated` while the Dôzr is a fighter in the current fight: resolve one strike with its best unresolved die (crit first) against the enemy, then let incapacitation proceed; (c) `onDamageInflicted` source `strike-normal` with `amount >= 4` subtracts 1 | CLASS: team-hook (b: see gaps `fightLastStrike`)
  - RULING: Hearthkyn Salvagers Brawler last strike | the Dôzr always takes the strike (no prompt) with a crit if one is unresolved, otherwise a normal; it is a strike only (never a block) and the enemy's own damage-reducing rules apply to it; if it incapacitates the enemy too, both are removed after the action | the rule exists to override R-6.7 for one strike, and a strike can never hurt the Dôzr's side | Unsourced
- T-HK.10 **KNUX SMASH** (Dôzr, 1 AP): pick one enemy operative in the Dôzr's control range. You may move that enemy up to 3" to a spot where it can be placed. Then, moved or not, it takes D3+1 damage; if the D3 rolled a 3, it also gets APL -1 until the end of its next activation (R-9.6 applies). Afterwards the Dôzr may immediately perform a free Charge, even if it already Charged this activation, but moving no more than 3" in it. Only allowed while an enemy is in the Dôzr's control range.
  - MECH: unique action: enemy pick (in CR); push via the new forced move (destination choice from sampled reachable points within 3"); `directDamage(D3+1)`; on D3 = 3 a Stun-style timed APL -1 (`applyAplEffect`); then offer `startFreeAction({ action: 'charge', maxMove: 3 })` with the Charge repeat ban lifted | CLASS: generic:forcedMove
  - RULING: Hearthkyn Salvagers Knux Smash and end-action markers | moving the enemy onto a marker that would end that enemy's action (for example Hy-Pex Mines) triggers the marker's other effects but does not end the Dôzr's Knux Smash | Wahapedia FAQ answers this case with "no" | Fan-source
  - RULING: Hearthkyn Salvagers Knux Smash push | the push is a move of up to 3" planned by the Hearthkyn player along legal increments with normal terrain, climb and drop costs; it is not bound by the moved operative's own control-range move restrictions (it is not that operative's action); it must end where the operative can be placed; mines and similar markers react to it normally | "move it up to 3"" uses move distance, while the R-4.1 control-range limits belong to the Reposition action, not to moving in general | Unsourced
  - RULING: Hearthkyn Salvagers Knux Smash free Charge | only the "already Charged this activation" ban is lifted; the Charge still needs no enemy already in the Dôzr's control range, no Conceal order and no Reposition, Dash or Fall Back earlier in the activation (R-4.4); the 3" cap includes Charge's +2"; it is optional and is skipped when no legal Charge exists | the text names only the repeat exception, and "cannot move more than 3"" caps the whole move | Unsourced
- T-HK.11 **Medic!** (Field Medic): the first time each TP that another friendly HEARTHKYN SALVAGER operative visible to and within 3" of the Field Medic would be incapacitated, you may use this rule, provided neither of the two is in an enemy's control range, the Field Medic is not incapacitated, and (in a Shoot action) the Field Medic is not a primary or secondary target. Effect: the friendly operative is not incapacitated, is left on 1 wound and cannot be incapacitated for the rest of that action. When the action ends it may perform a free Dash that must end within the Field Medic's control range. Both operatives then have APL -1 until the end of their next activations, and if this happened during the saved operative's own activation, that activation ends.
  - MECH: the Pathfinders Medic! implementation (T-PF.14, 3.11): `beforeIncapacitated` sets `wounds: 1`, `onDamageInflicted` floor for the rest of the action, free Dash via `startFreeAction({ action: 'dash', endWithinCrOf })` after the action, `Activation.endsAfterAction`, once-per-TP ledger, Medic token | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Medic! opportunity | only the first qualifying moment each TP is offered, declining spends it, the AI always accepts; the free Dash is optional and skipped when no end point lies in the Field Medic's control range | same wording as the Pathfinders card; same ruling | Unsourced
- T-HK.12 **MEDIKIT** (Field Medic, 1 AP): one friendly HEARTHKYN SALVAGER operative in the Field Medic's control range regains up to 2D3 lost wounds (never above its starting wounds). It cannot pick an operative that Medic! saved this TP. Not while in an enemy's control range.
  - MECH: unique action with friendly-target filter (in CR, not this TP's Medic! target), `effects.regainWounds(2D3)` | CLASS: data
  - RULING: Hearthkyn Salvagers MEDIKIT self-target | the Field Medic may heal itself | an operative is within any distance of itself (R-8.3) and the text, unlike Medic!, does not say "other" | Unsourced
- T-HK.13 **Grenadier** (Grenadier): may use frag and krak grenades (M-5.6) and perform SMOKE GRENADE and STUN GRENADE (M-5.5) even if the team did not pick them, and its uses never count against the team's equipment totals. Whenever it uses a frag or krak grenade (its own or the team's), that grenade's Hit improves by 1 (to 3+).
  - MECH: own grenade allowance for this operative covering two weapons and two actions; Hit -1 on frag and krak while this operative uses them | CLASS: generic:ownGrenadeAllowance
  - RULING: Hearthkyn Salvagers Grenadier allowance | its own allowance is frag 1, krak 1, smoke 1 and stun 1 per battle, kept apart from the team's picks | the card says the uses are separate but gives no number; the T-AOD.9 and T-PF.9 precedents use one each | Unsourced
- T-HK.14 **VÂYR-3 UTILITY GRENADE** (Grenadier, 1 AP): place one of your Utility Grenade markers within 6" of the Grenadier, either visible to it or on the Vantage terrain of a terrain feature visible to it (the Smoke Grenade placement rule). While any operative (either side) is within 3" of that marker, its controlling player pays 1 extra AP for it to perform Pick Up Marker and mission actions. In the next TP's Ready step roll a D3; the marker is removed after that many activations have been completed, or at the end of that TP, whichever comes first. Not while in an enemy's control range. No per-battle limit is printed (only R-3.7).
  - MECH: unique action placing a marker (smoke placement validator); provider `actionCostDelta` +1 for `marker:pickUp` and for `ability:<id>` whose ability has keyword MISSION, per marker within 3"; removal with the smoke timing (`turningPoint.start` D3 roll, count completed activations) | CLASS: team-hook (see gaps `timedMarkerExpiry`)
  - RULING: Hearthkyn Salvagers Utility Grenade scope | affects friendly and enemy operatives alike; each marker within 3" adds its own +1 AP (two markers, +2 AP); a 0 AP mission action costs 1 AP | the rule names "an operative" and "its controlling player", and each marker carries its own clause | Unsourced
  - RULING: Hearthkyn Salvagers Utility Grenade removal | counted exactly like the Smoke Grenade (both players' completed activations in that TP, counteractions excluded) | identical wording to M-5.5 | Unsourced
- T-HK.15 **Beam** (Gunner's EtaCarn plasma beamer, team-local weapon rule): when shooting with it, every retained crit immediately deals D3 damage (rolled separately for each operative) to each other operative lying along one, and only one, beam line; the target itself takes nothing from this. An operative lies along a beam line when a targeting line from the Gunner to that operative's base passes across the original target's base and does not cross Heavy terrain. Friend and foe are both hit.
  - MECH: at retention (crits known after Grudge conversion, none when obscured): compute candidate beam lines from the shooter through the target's base, group the operatives each line reaches, ask the attacker to pick one group (`AfterRollData.requests`), then `directDamage` D3 per crit per operative | CLASS: team-hook (see gaps `attackRetained`, `beamLineSets`)
  - RULING: Hearthkyn Salvagers Beam line | the attacker picks one line (offered as the distinct sets of operatives some single line reaches, operatives behind the target only); the AI picks the set maximising enemy wounds lost minus friendly; Conceal or obscured status of those operatives does not matter; D3 per retained crit per operative | "one (and only one) beam line" means a single line picked by the shooter; the line must cross the target's base so only operatives beyond it qualify | Unsourced
- T-HK.16 **Jump Pack** (Jump Pack Warrior): whenever it performs an action in which it moves, it may FLY instead: lift it off and set it up again wholly within its Move horizontally of where it started (3" for a Dash). Charge gains nothing extra (no +2"). It must be set up where it can be placed, and outside every enemy's control range unless the action is a Charge. In a close-quarters killzone (Gallowdark) the distance cannot be measured through Wall terrain and it cannot cross an access point.
  - MECH: per-move option `fly`: the move becomes a set-up within a horizontal radius; terrain, climb and drop costs are skipped; Charge rules (must end in an enemy's CR) still apply | CLASS: generic:flyMove
  - RULING: Hearthkyn Salvagers Jump Pack details | only horizontal distance is measured (any height is free); FLY keeps the action's identity (a Reposition with FLY is still a Reposition for Heavy and R-4.4); while counteracting it must be set up wholly within 2" (R-3.12); mines and markers check only the set-up point | the card measures "horizontally", and the counteract rule names set-ups explicitly | Unsourced
- T-HK.17 **Force Impact** (Jump Pack Warrior's plasma weapon, team-local weapon rule): while fighting with it, if the Jump Pack Warrior has performed a Charge (free Charges included) during the current activation, the weapon has Brutal.
  - MECH: `modifyWeaponRules` adds `core.wr.brutal` when `actionsThisTp` shows a Charge in this activation | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Force Impact when retaliating | no Brutal when retaliating or counteracting, because the Charge must belong to the current activation and the enemy's activation is not the Jump Pack Warrior's | "during the activation" refers to the operative's own activation | Unsourced
- T-HK.18 **SIGNAL** (Kinlynk, 1 AP, SUPPORT): pick another friendly HEARTHKYN SALVAGER operative anywhere in the killzone (no visibility or range); it gets APL +1 until the end of its next activation (R-9.6 cap). Not while in an enemy's control range.
  - MECH: unique action, support APL boost to a filtered friendly target (as T-PF.10, without a range) | CLASS: data
- T-HK.19 **SYSTEM JAM** (Kinlynk, 1 AP): pick one enemy operative that is a valid target for the Kinlynk (R-5.2) and does not already carry one of your System Jam tokens; it gains one. For the rest of the battle, an enemy operative with your System Jam token cannot be activated while the opponent still has a ready operative without one. When a jammed enemy is activated, the token is removed. Not while in an enemy's control range.
  - MECH: unique action, enemy-target choice from `validTargets`; token `hk.systemJam` (cap 1); a pure activation-eligibility provider removes jammed operatives from the opponent's `firefight.activate` options while an unjammed ready operative exists; `activation.start` removes the token | CLASS: generic:activationEligibility
  - RULING: Hearthkyn Salvagers System Jam scope | counteracting is not an activation, so it is unaffected; a chained activation (another team's Group Activation) cannot pick a jammed operative while an unjammed ready one exists, and the chain is skipped if only jammed operatives qualify; operatives out of the killzone but ready count as "without one" | "cannot" beats "must" (R-9.4); "is activated" is the core term (R-3.1) | Unsourced
- T-HK.20 **Tactician** (Kognitâar): a STRATEGIC GAMBIT usable while the Kognitâar is in the killzone. Place either your Attack marker or your Defence marker anywhere in the killzone. Attack marker: whenever a friendly HEARTHKYN SALVAGER operative is shooting, fighting or retaliating against an enemy operative within 3" of it, its weapons have Balanced. Defence marker: whenever an enemy operative is shooting a friendly HEARTHKYN SALVAGER operative within 3" of it, you may re-roll one defence die. The marker is removed in the next Ready step.
  - MECH: strategic gambit with an `ability.choice` (attack / defence) and a free-placement marker choice (`placementSpots` sample, as Cloud of Flies); `modifyWeaponRules` adds Balanced; `modifyDefenceDice` adds a `RerollGrant { mode: 'one' }`; `turningPoint.start` removes it | CLASS: team-hook
- T-HK.21 **ACCELERATED APPRAISAL** (Kognitâar, 1 AP): take your Attack or Defence marker off the killzone if one is there, then put down either marker anywhere. Not while in an enemy's control range.
  - MECH: unique action reusing T-HK.20's placement and effect | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Tactician markers | at most one of the two markers is in the killzone at a time, and a marker placed by Accelerated Appraisal is also removed in the next Ready step | Accelerated Appraisal removes "your Attack or Defence marker" before placing one, which reads as a single marker in play; the removal clause belongs to that marker however it was placed | Unsourced
- T-HK.22 **SPOT** (Lokâtr, 1 AP, SUPPORT): pick one enemy operative visible to the Lokâtr; it gains your Spot token until the end of the TP. Whenever a friendly HEARTHKYN SALVAGER operative within 3" of the Lokâtr (the Lokâtr itself included) is shooting that enemy, its ranged weapons have Seek Light and that enemy cannot be obscured. Not while in an enemy's control range.
  - MECH: unique action, enemy-target choice (visible); token `hk.spot` with expiry `turningPointEnd` and `sourceIncapacitated`; `modifyWeaponRules` adds `core.wr.seek-light`; `beforeShootTargetSelect` adds a Conceal-in-Light-cover candidate that Seek Light makes valid (as T-PF.30); `target.status` sets `obscured: false` | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Spot distance | the 3" is measured from the Lokâtr when the shot is taken, so the effect needs the Lokâtr in the killzone; a Comms Device the Lokâtr controls extends it to 6" (M-5.1, the distance names friendly operatives); the effect is always used (it has no downside) | SPOT is a SUPPORT rule and its 3" names friendly operatives | Unsourced
- T-HK.23 **PAN SPECTRAL SCAN** (Lokâtr, 1 AP): place your Pan Spectral Scan marker anywhere in the killzone. Friendly HEARTHKYN SALVAGER operatives shooting at an enemy within 3" of that marker get Accurate 1 and Saturate on their ranged weapons. The marker goes at the earliest of the Lokâtr's next activation, its incapacitation, or its next use of this action. Not while in an enemy's control range.
  - MECH: unique action with free placement (`placementSpots`); `modifyWeaponRules` adds `core.wr.accurate` x1 and `core.wr.saturate`; removal from `activation.start` (the Lokâtr), its incapacitation, and re-placement | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Pan Spectral Scan placement | anywhere in the killzone, no visibility or range limit; a counteraction is not an activation, so the marker survives it (but performing the action while counteracting moves it) | the text names no placement limit, and "is next activated" is the core term | Confirmed
- T-HK.24 **Well Supplied** (Lugger): a roster with the Lugger may select one extra equipment option (five instead of four, M-5.12), and its player gains 1 extra CP in the Ready step of the first Strategy phase.
  - MECH: roster-keyed equipment limit +1; `turningPoint.start` handler with `turningPoint === 1` adds 1 CP (`CpChanged`) | CLASS: generic:equipmentLimit (CP part team-hook)
  - RULING: Hearthkyn Salvagers Well Supplied CP | the extra CP is part of the rule | the April '26 PDF errata adds it; Wahapedia omits it | Corrected
- T-HK.25 **I've Got It** (Lugger): once during each of its activations, the Lugger may perform a mission action for 1 less AP (never below 0).
  - MECH: data `costDelta { actions: ['mission-action'], delta: -1 }` with `limit: 'oncePerActivation'` | CLASS: data
  - RULING: Hearthkyn Salvagers I've Got It scope | applies to mission actions only, not to Pick Up Marker or Place Marker | those are universal actions (R-4.5, R-4.6), and the team's own Utility Grenade lists Pick Up Marker separately from mission actions | Confirmed
- T-HK.26 **Secure Salvage** (Warrior): whenever an enemy operative is shooting, fighting or retaliating against this Warrior while it contests an objective or one of your mission markers, one success of that attack deals it 1 less damage (Resolve Attack Dice step).
  - MECH: `onDamageInflicted` on this operative (dice sources only, not Devastating), once per sequence, if it contests a qualifying marker | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Secure Salvage use | applied automatically to the first success that would damage the Warrior in that sequence; contest is checked at that moment | every success is worth the same 1 point here, and the hook cannot ask | Unsourced

### 10.5 Faction rules

- T-HK.27 **GRUDGE (gaining)**: an enemy that incapacitates a friendly HEARTHKYN SALVAGER operative receives one of your Grudge tokens and keeps it all battle. Tokens stack with no printed cap (the token guide prints values 1 and 2). Eye of the Ancestors (T-HK.7) is the other source.
  - MECH: remember the last enemy operative that damaged each friendly operative (`damage.inflicted`, attackerId an enemy operative); on real incapacitation (`operative.incapacitated`) `addToken(kind 'hk.grudge', owner = Hearthkyn seat, expires ['battle'])` on that enemy | CLASS: team-hook (tokens.ts)
  - RULING: Hearthkyn Salvagers Grudge source | only an enemy operative's attack or action gives a token; mines and other markers, another team's token damage on activation (Poison), and the Hearthkyn operative's own Hot or Beam give none; an operative saved by Medic! was never incapacitated | the rule needs "an enemy operative" to do the incapacitating | Unsourced
- T-HK.28 **GRUDGE (using)**: whenever a friendly HEARTHKYN SALVAGER operative is shooting, fighting or retaliating against an enemy operative, you may retain one normal success as a crit per Grudge token of yours on that enemy (normal successes retained through Accurate count). Tokens are not spent.
  - MECH: `afterAttackRoll` on the Hearthkyn pool: convert up to (tokens on the enemy + Toil Earns bonus) normal dice to `kind: 'crit'`, `tag: 'grudge'`; skipped when the sequence is obscured; `query.*` shows the converted count | CLASS: team-hook (tokens.ts)
  - RULING: Hearthkyn Salvagers Grudge against obscured | no normal is converted while the target is obscured | R-5.8 says obscured beats every rule that would make a crit | Confirmed
  - RULING: Hearthkyn Salvagers Grudge conversion | automatic and maximal; applied before Rending, Punishing and Severe, so a Grudge crit lets Rending trigger | a crit is never worse for the attacker here, and the attacker orders simultaneous rules (R-10.24) | Unsourced

### 10.6 Ploys

The source prints no costs: every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5).

- T-HK.29 **NEED KEEPS** | Strategy | 1 CP | Gambit step | Pick one objective marker or one of your mission markers. (a) When control of it is worked out, if any friendly HEARTHKYN SALVAGER operative contests it, your contesting total counts as 1 higher (not an APL change, so it stacks with APL changes and ignores R-9.6). (b) Every friendly HEARTHKYN SALVAGER operative within 3" of it adds 1 to the Atk of its melee weapons, to no more than 4; a melee weapon that already has Atk 4 gains Balanced instead.
  - MECH: ploy with a marker choice; provider `controlTotal` +1; `modifyAttackDice` atk +1 when atk < 4, `modifyWeaponRules` Balanced when base Atk is 4 | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Need Keeps Atk | Atk 3 becomes 4; Atk 4 keeps 4 and gains Balanced; the check uses the printed Atk | the errata wording "to a maximum of 4" plus the Balanced clause for weapons that are already 4 | Confirmed
- T-HK.30 **TOIL EARNS** | Strategy | 1 CP | Gambit step | Pick one objective marker or one of your mission markers. Every enemy operative within 3" of it counts as having one more of your Grudge tokens (so it works even on an enemy with none).
  - MECH: ploy with a marker choice; the T-HK.28 count adds 1 for enemies within 3" of the marker | CLASS: team-hook
- T-HK.31 **WROUGHT DEFENCE** | Strategy | 1 CP | Gambit step | Whenever an operative is shooting a friendly HEARTHKYN SALVAGER operative, if the defence dice you rolled gave one success or none (after re-rolls), you may keep one failed die as a normal success instead.
  - MECH: `afterDefenceRoll` on the Hearthkyn pool: if rolled successes <= 1, set one `fail` to `normal`, `tag: 'wrought'` | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Wrought Defence count | only rolled dice count toward "one or less successes"; a cover save retained without rolling is neither counted nor converted | the rule speaks of successes "you rolled" | Unsourced
- T-HK.32 **PROXIMATE FIREPOWER** | Strategy | 1 CP | Gambit step | A friendly HEARTHKYN SALVAGER operative shooting at an enemy no more than 6" away improves its ranged weapons' Hit by 1 (best 3+). The change may start or stop in the middle of an action (overriding R-3.16), so each Blast or Torrent target is checked on its own.
  - MECH: `modifyAttackDice` hitDelta -1 per sequence when the target is within 6", clamped so the result is never better than 3+ (as the T-PF.30 row-2 cap) | CLASS: team-hook
- T-HK.33 **THE ANCESTORS ARE WATCHING** | Firefight | 1 CP | During a friendly HEARTHKYN SALVAGER operative's activation | Until that activation ends, the operative may perform one free Shoot or one free Fight (not both), and the injured worsening of its weapons' Hit is ignored (its Move is still reduced if injured).
  - MECH: firefight ploy in the between-actions window; one 0 AP offer for Shoot or Fight (consumed by whichever is taken); `modifyAttackDice` cancels the injury Hit worsen for that operative until activation end | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Ancestors Are Watching errata | the ploy also ignores injured weapon stat changes | the April '26 PDF errata adds it; Wahapedia omits it | Corrected
  - RULING: Hearthkyn Salvagers Ancestors Are Watching free action | the free Shoot or Fight keeps its normal conditions and still counts as that action (R-3.9), so an operative that already Shot this activation cannot take the free Shoot; only Hit is restored, never Move | free actions follow R-3.9, and the errata names weapon stats only | Unsourced
- T-HK.34 **WORTH IT** | Firefight | 1 CP | A friendly HEARTHKYN SALVAGER operative is incapacitated, before removal | It may perform one free mission action before it is removed (its conditions still apply; R-5.18 one free action).
  - MECH: ploy in the `operative.incapacitated` window; `startDelegatedAction({ allow: ['mission'] })` before removal (as Plan Generations, 6.10) | CLASS: team-hook
- T-HK.35 **STURDY** | Firefight | 1 CP | A friendly HEARTHKYN SALVAGER operative is being shot, as its defence dice are collected | Every crit the attacker retained becomes a normal success. Rules already resolved for those crits stay resolved (Devastating damage already dealt, Piercing Crits already applied to the dice collected).
  - MECH: defender ploy; effect applies after retention, Devastating and the defence-dice count, before the cover save and defence roll: retained `crit` dice become `normal` | CLASS: team-hook (see gaps `shoot.defenceCollected`)
  - RULING: Hearthkyn Salvagers Sturdy timing | if the engine has no window at defence collection, the ploy is offered in the `shoot.attackRolled` window and its effect is deferred to the defence-collection step, so crits made by Rending, Severe or other conversions are also covered | the effect must land after Devastating and Piercing Crits resolve, which the card states | Unsourced
- T-HK.36 **ENGAGE TO ACQUIRE** | Firefight | 1 CP | After rolling attack dice for a friendly HEARTHKYN SALVAGER operative shooting or fighting (not retaliating) against an enemy that controls an objective or one of your mission markers | You may re-roll any of your attack dice.
  - MECH: fight: `fight.beforeRerolls` window adds a `RerollGrant { mode: 'any' }`; shoot: needs a window on the fresh attack roll (see gaps), fallback below | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Engage to Acquire | "controls" means the enemy contests the marker and its player controls it (R-8.5, R-8.6); not usable when retaliating; without a pre-re-roll window in Shoot the ploy is offered at `shoot.attackRolled` and re-rolls every failed die not yet re-rolled (R-9.2) | the card names shooting and fighting only; re-rolling all fails is the optimal "any" choice | Unsourced

### 10.7 Faction equipment

Universal equipment (M-5) can also be chosen; the limit covers faction and universal options together (M-5.12): four options, five with the Lugger (T-HK.24).

- T-HK.37 **PLASMA KNIVES** | Every friendly HEARTHKYN SALVAGER operative gains the plasma knife (equipment profile, 10.3). The Field Medic already has a better plasma knife and keeps only that one.
  - MECH: equipment `grants` of `hk.w.plasma-knife` with `grants.to` excluding `hk.field-medic` (or provider `equipmentEligible`) | CLASS: data
  - RULING: Hearthkyn Salvagers Plasma Knives and the Field Medic | the Field Medic keeps its own 4-Atk plasma knife and does not gain the 3-Atk copy | the card says to use the better version | Confirmed
- T-HK.38 **CLIMBING RIGS** | Once during each friendly HEARTHKYN SALVAGER operative's activation, choose one: a climb it makes counts as 2" of vertical distance whatever its real height, or the vertical distance of a drop it makes is ignored entirely.
  - MECH: provider `moveSurcharge` returns a negative amount (climb cost down to 2", or minus the drop cost) for the first move in the activation that benefits; `action.ended` marks the use | CLASS: team-hook
  - RULING: Hearthkyn Salvagers Climbing Rigs | one use per activation covers one climb (consecutive climb segments in one action, R-12.2) or all drop distance of one action; applied automatically to the first move that benefits, taking the larger saving; never during counteractions (not an activation) | "during each activation, one of the following" is one benefit per activation | Unsourced
- T-HK.39 **EXCAVATION TOOLS** | Friendly HEARTHKYN SALVAGER operatives perform Pick Up Marker for 1 less AP, and need only contest the marker rather than control it.
  - MECH: data `costDelta` on `marker:pickUp`; a provider relaxation of the Pick Up control condition to contest | CLASS: data (condition part team-hook)
  - RULING: Hearthkyn Salvagers Excavation Tools in v1 | the option is selectable but does nothing in v1 missions, which have no pick-up markers (R-4.5) | no v1 mission names a marker Pick Up Marker can be used on | Confirmed
- T-HK.40 **WRIT OF CLAIM** | Once per battle, right after the initiative roll-off, if friendly HEARTHKYN SALVAGER operatives contest two or more objective markers, you may re-roll your initiative die.
  - MECH: an initiative re-roll decision after both dice are rolled, before the result or the tie decision | CLASS: generic:initiativeReroll
  - RULING: Hearthkyn Salvagers Writ of Claim | usable in any TP including TP1; "contest" counts different objective markers each contested by at least one friendly operative; the AI uses it only when it lost the roll-off or the tie decision would go to the opponent | the rule has no TP limit, and re-rolling a winning die can only hurt | Unsourced

Marker/token guide (UI): Grudge tokens (printed in values 1 and 2), Need Keeps, Toil Earns, Medic, System Jam, C8 HX Charge (Limited use), Spot, Utility Grenade marker, Attack marker, Defence marker, Writ of Claim, Pan Spectral Scan marker.

### 10.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-HK: TEAM-HK-000 to TEAM-HK-029.

### 10.9 Generic capabilities (survey; resolved in the Engine map below)

- **flyMove** (MUST): a per-move option that replaces the path with a set-up wholly within a horizontal radius (Move, 3" for Dash, no Charge bonus, 2" while counteracting), ignoring terrain between, enforcing placement legality and "not in an enemy's CR" except for Charge (which must end in one). Close-quarters killzones measure around Walls and forbid crossing access points. The action keeps its identity for Heavy and R-4.4; mines check the set-up point. Used by T-HK.16.
- **forcedMove** (MUST): the active player moves another operative (an enemy) up to x" along legal increments, ending at a placeable spot, not bound by that operative's own control-range move limits; emits `OperativeMoved` so mines and markers react; an "end its action" effect on the moved operative does not end the mover's action (FAQ). Decision: destination from sampled reachable points. Used by T-HK.10.
- **initiativeReroll** (MUST): after both initiative dice are rolled and before the winner or tie decision, a player with a once-per-battle rule whose condition holds may re-roll their own die. Used by T-HK.40.
- **equipmentLimit** (MUST): a roster-keyed equipment option limit (4, or 5 with a datacard that grants one), used by setup validation, the team builder and `defaults`. Used by T-HK.24.
- **activationEligibility** (MUST): a pure provider that removes an operative from the activate options while its seat has another ready operative that is not blocked; it must never leave the options empty. Used by T-HK.19.
- **ownGrenadeAllowance** (MUST): per-operative grenade allowances (frag, krak weapons; smoke, stun actions) separate from the team's picks, read by `equipment.ts` and `grenadeSource` instead of their AoD and Kommandos name checks. Used by T-HK.13.
- **shoot.beforeAttackRerolls** (NICE): an attacker ploy window on the fresh Shoot attack roll before re-roll grants. Used by T-HK.36.
- **shoot.defenceCollected** (NICE): a defender ploy window after retention, Devastating and Piercing Crits, before the cover save. Used by T-HK.35.
- **attackRetained / beamLineSets** (NICE): an attack hook after retention with `engine`, and a geometry helper listing the operative groups single targeting lines reach through a target's base without crossing Heavy terrain. Used by T-HK.15.
- **fightLastStrike** (NICE): a fight-sequence step letting a fighter that has just been incapacitated resolve one strike before the sequence ends. Used by T-HK.9.
- **timedMarkerExpiry** (NICE): the Smoke Grenade "D3 activations next TP" expiry for any marker. Used by T-HK.14.

### 10.10 Gotchas

- PDF wins over Wahapedia in three places, each with a Corrected RULING: the Field Medic's bolt revolver is Hit 4+; The Ancestors Are Watching also ignores injured weapon stats; Well Supplied also gives +1 CP in TP1.
- Grudge is a re-classification, not a re-roll and not a token spend: tokens stay for the battle and stack. Obscured shuts it off completely (R-5.8). Toil Earns gives a virtual token even to an enemy with none. Grudge never applies to the enemy's dice.
- Grudge comes only from an enemy operative incapacitating a Hearthkyn operative; a Medic! save is not an incapacitation.
- There is no ion shield, void armour or invulnerable save: KT 2024 has none. The only damage negation is Weavefield Crest (once per battle, Normal Dmg only), Brawler's -1 against Normal Dmg 4+ in melee, Secure Salvage and Sturdy.
- There is no IRONKIN keyword; the Kognitâar is an ordinary HEARTHKYN SALVAGER for every rule. The team's only token economy is Grudge (no team pool, no CP-for-tokens trade): tokens sit on individual enemy operatives, per owning player.
- APL support is Kinlynk SIGNAL (any friendly in the killzone, no range); the Lugger gives equipment and CP, not APL. Spot's 3" is measured from the Lokâtr at shot time.
- Gunners: up to three, each a different weapon; modelled as five non-repeatable cards with a cap of 3. Warriors are unlimited. The Theyn's bolt pistol and revolver are 3+, everyone else's 4+.
- Knux Smash needs an enemy in the Dôzr's control range; the push is optional, the D3+1 is not. Its free Charge is capped at 3" in total, needs the Dôzr out of enemy control range (so usually only after pushing the enemy away), and is still barred after a Reposition, Dash or Fall Back.
- Brawler bars enemy assists and lets a dying Dôzr strike once more; it is the only exception to R-6.7 in this team.
- Beam damages friendly operatives too and never the target; it fires per retained crit, so an obscured target means no beam.
- Jump Pack FLY is a set-up: no climb or drop costs, no +2" on Charge, never into an enemy's control range except by Charge, 2" while counteracting.
- System Jam restricts which enemy the opponent may activate; it does not stop counteracting or Guard. The token goes as soon as the jammed operative activates.
- Utility Grenade taxes both sides and stacks per marker; Lugger's I've Got It covers mission actions only, Excavation Tools covers Pick Up Marker only (inert in v1).
- Proximate Firepower is checked per target and may switch mid-action; the cap is 3+, so the Theyn's 3+ weapons gain nothing.
- Edition leaks to reject: nothing from the 2021 book (shape distances, Overwatch, older datacards or ploys), no 40k 10th Votann (Judgement tokens, Yield points, wound rolls, invulnerable saves); inches only, three defence dice, every printed number from the April '26 cards.

### 10.11 Engine map

| Survey capability | Built as |
|---|---|
| operativeTokens (Grudge, System Jam, Spot) | `tokens.ts`: `hk.grudge` (no cap, `expires: ['battle']`), `hk.systemJam` (cap 1), `hk.spot` (`turningPointEnd`, `sourceIncapacitated`) |
| Grudge gain | `damage.inflicted` records the last enemy attacker; `operative.incapacitated` adds the token |
| Grudge use, Toil Earns | `afterAttackRoll`: tagged normal-to-crit conversions (tags survive `reclassify`), skipped when obscured |
| Eye of the Ancestors, Tactician | strategic gambit abilities with `ability.choice` (as Art of War, T-PF.7) |
| Weavefield Crest | data once-per-battle Normal Dmg ignore (as Iron Halo, T-AOD.8) |
| Brawler | `modifyAttackDice` (`assists = []`), `onDamageInflicted` (`strike-normal >= 4` -1), `beforeIncapacitated` last strike (`fight.extraStrike` from the hook while the fight is live) |
| Knux Smash | `movement.forcedMoveSpots` and `applyForcedMove` (planMove `forced`); `directDamage`; `applyAplEffect`; `startFreeAction({ action: 'charge', maxMove: 3 })` |
| Medic!, Medikit | the Pathfinders pattern (3.11): `beforeIncapacitated`, `onDamageInflicted` floor, `startFreeAction({ action: 'dash', endWithinCrOf })`, `Activation.endsAfterAction`; `effects.regainWounds` |
| Grenadier | provider `ownGrenades` (weapons frag 1 and krak 1, actions smoke 1 and stun 1; the actions are offered through `extraActions`); `grenadeSource` returns `own` |
| Utility Grenade | provider `actionCostDelta` (`marker:pickUp`, MISSION abilities); smoke placement validator; removal with the smoke timing (a team-hook copy of the smoke timer; no shared capability) |
| Beam | `afterAttackRoll` + `requests` for the line choice, `directDamage` per crit (team-local line geometry; no shared capability) |
| Jump Pack | provider `canFly`; `move.path` payload `fly: true` (`actions.fly`, `movement.planFly`) |
| Force Impact, Spot, Pan Spectral Scan, Attack marker, Need Keeps Balanced | `modifyWeaponRules` (Brutal, Seek Light, Accurate 1 + Saturate, Balanced); `beforeShootTargetSelect` and `target.status` for Spot |
| Signal | data support APL boost (as T-PF.10) |
| System Jam | provider `canActivate`; `activation.start` removes the token |
| Defence marker | `modifyDefenceDice` re-roll grant `one` |
| Well Supplied | datacard `extraEquipment: 1` (`equipment.equipmentLimitFor`, Team Builder limit); `turningPoint.start` +1 CP in TP1 |
| I've Got It, Excavation Tools | data `costDelta` (`mission-action` once per activation; `marker:pickUp`) |
| Secure Salvage | `onDamageInflicted` once per sequence |
| Need Keeps control | provider `controlTotal` |
| Wrought Defence | `afterDefenceRoll` fail-to-normal conversion |
| Proximate Firepower | `modifyAttackDice` hitDelta with the 3+ cap |
| Ancestors Are Watching | firefight ploy, 0 AP Shoot/Fight offer; `modifyAttackDice` cancels the injury worsen |
| Worth It | `operative.incapacitated` window + `startDelegatedAction({ allow: ['mission'] })` |
| Sturdy | deferred flag applied in `modifyDefenceDice` with `engine` (or window `shoot.beforeDefenceRoll`: defender, after retention and Devastating) |
| Engage to Acquire | `fight.beforeRerolls` grant `any`; Shoot via window `shoot.beforeAttackRerolls` |
| Climbing Rigs | provider `moveSurcharge` (negative) + `action.ended` ledger |
| Writ of Claim | providers `initiativeReroll` and `onInitiativeReroll` |
| Plasma Knives | equipment `grants.to` / provider `equipmentEligible` |

### 10.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/hearthkyn-salvagers/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `hk.<name>`, `hk.w.`, `hk.wg.`, `hk.a.`, `hk.p.`, `hk.e.`, team weapon rules `hk.wr.`)
  - `src/engine/teams/hearthkyn-salvagers.ts` (code hooks, `registerTeamRules`, hook handlers)
  - `src/client/teams/hearthkyn-salvagers.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins `hk-theyn`, `hk-dozr`, `hk-field-medic`, `hk-grenadier`, `hk-gunner` (variant per weapon), `hk-jump-pack-warrior`, `hk-kinlynk`, `hk-kognitaar`, `hk-lokatr`, `hk-lugger`, `hk-warrior`)
  - `tests/engine/teams/hearthkyn-salvagers.test.ts` (TEAM-HK-nnn tests) and `tests/engine/teams/hearthkyn-salvagers.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 10 and `12-rules-test-checklist.md` section TEAM-HK (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/hearthkyn-salvagers/team.json`. Flip it (with `defaults` filled and every weapon in `src/client/teams/hearthkyn-salvagers.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above (every batch B generic it names is built). Grudge is the spine of the team: TEAM-HK-003 and TEAM-HK-004 first, then Medic! (TEAM-HK-009, copy the Pathfinders code path) and Knux Smash (TEAM-HK-008).
- Scaffold: the leader record and its weapons are in `hearthkyn-salvagers-leader.json`; Beam and Force Impact are left off the scaffold weapons (add `hk.wr.beam` / `hk.wr.force-impact` when the team file resolves them).
- RULING lines expected: Gunner options, keyword spelling, Field Medic bolt revolver (Corrected), magna rail rifle Dmg, Eye of the Ancestors count, Weavefield Crest use, Brawler last strike, Knux Smash end-action (Fan-source), push and free Charge, Medic! opportunity, MEDIKIT self-target, Grenadier allowance, Utility Grenade scope and removal, Beam line, Jump Pack details, Force Impact when retaliating, System Jam scope, Tactician markers, Spot distance, Pan Spectral Scan placement, Well Supplied CP (Corrected), I've Got It scope, Secure Salvage use, Grudge source, against obscured and conversion, Need Keeps Atk, Wrought Defence count, Ancestors errata (Corrected) and free action, Sturdy timing, Engage to Acquire, Plasma Knives and the Field Medic, Climbing Rigs, Excavation Tools in v1, Writ of Claim.
- Gotchas: section 10.10. Grudge tokens are public, stack and are never spent; obscured blocks the conversion. Model each Gunner weapon as its own datacard (`figure.archetype: "hk-gunner"` with a `variant`). Keywords are ASCII (DOZR, KOGNITAAR, LOKATR). Ten operatives use the 10-operative kill grade row.
