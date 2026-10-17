# 13 - Kill teams for v1: Angels of Death and Kommandos

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
