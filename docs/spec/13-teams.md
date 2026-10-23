# 13 - Kill teams: Angels of Death and Kommandos (v1); Pathfinders, Hierotek Circle, Plague Marines and Wyrmblade (M9 batch A); Legionaries, Hand of the Archon, Hunter Clade and Hearthkyn Salvagers (M9 batch B); Kasrkin, Novitiates, Phobos Strike Team, Corsair Voidscarred, Warpcoven, Farstalker Kinband and Imperial Navy Breachers (M9 batch C)

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
| SCRAPCODE OVERLOAD | provider `controlTotal`; window `firefight.actionDeclared` for the Infiltrator's own Pick Up Marker or mission action (counteractions included, info `subjectId`, `action`); window `firefight.opponentActionDeclared` for an enemy's (info `actorId` = the enemy, `action`) |
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

### 9.13 As built (M9 batch B)

Files: `src/data/teams/hunter-clade/*.json`, `src/engine/teams/hunter-clade.ts`, `src/client/teams/hunter-clade.ts`,
`tests/engine/teams/hunter-clade.{test,hooks}.ts`, a block in `src/ai/teamActions.ts` (SIGNAL, SPOT). Datacard ids
`hc.<name>` (fourteen cards, figure archetype `hc-<name>`); weapons `hc.w.*` (21 profiles, groups `hc.wg.plasma-caliver`
and `hc.wg.transuranic-arquebus`); the team choice `primary-mode` has choice group `doctrina` (the schema allows slugs only).

- Code hooks named by the data (24): the passive names `hcCanticleDestruction`, `hcWastelandStalker`, `hcShroudpsalm`,
  `hcControlProtocol`, `hcElimination`, `hcTargeting`, `hcGlow`, `hcRadSaturation`, `hcImperative` (the five Imperative
  abilities share it), `hcRedundancy`, `hcRefractor`, `hcMindLink`; the actions `hcSignal`, `hcSpot`; the ploys
  `hcDoctrina` (also the faction rule), `hcDebilitating`, `hcNeurostatic`, `hcAccelerant`, `hcScouting`,
  `hcRadBombardment`, `hcControlEdict`, `hcScrapcode`, `hcCommandOverride`, `hcOmnissiah`.
- One mode function (`modeOf`) answers "which Imperative does this operative have, and does its Deprecation apply":
  `COMMAND OVERRIDE` token `hc.doctrine`, else `config.doctrine` (set by the free DOCTRINA gambit; `hc.ignore` effect for
  the once-per-battle Primary ignore). Every Optimisation and Deprecation reads it from a hook (`modifyWeaponRules`,
  `modifyAttackDice`, `modifyDefenceDice`, `modifyDamage`) or from the provider `moveDelta`.
- RAD BOMBARDMENT is a strategy ploy record (`hc.p.rad-bombardment`, 0 CP) that the equipment unlocks, because the engine's
  gambits are ploy records; Redundancy Systems and Refractor Field are offered by the ploy rule `extraOffers` in
  `firefight.activationStart` and `shoot.beforeDefenceRoll`; Extremis Mind-Link is a `costAdjust` on CONTROL EDICT's
  `<partner>:joint:<order>` offers, which call `firefight.joinActivation`.
- The arquebus oval is moved and measured by the engine, drawn by the client (with its Turn control), and turned by the
  AI at the end of a move toward the nearest enemy when the arc fits (the default roster fields no arquebus Gunner).
  OMNISSIAH Aggressor taking 2" off the move's total climb cost is exact, because
  every climb counts at least 2".
- Rules review (batch B verification): every printed number, roster limit and loadout matches the January '26 PDF and
  Wahapedia. Fixed: OMNISSIAH'S IMPERATIVE is also offered to a shot defender on its fresh and final defence roll
  (`shoot.defenderBeforeRerolls`, `shoot.defenceRolled`; Bulwark then lowers the Save at once and rolls the extra die),
  and SIGNAL (9") and SPOT (6") gain the Comms Device's 3" while the Diktat or Surveyor itself controls it (`commsReach`).
  Tests: `tests/engine/teams/hunter-clade.rules.test.ts`.
- Shared-engine findings: none blocking. `pending.options` is fixed when a decision is raised, so tests that edit the state
  at a gambit decision rebuild the options (`refreshGambit` in the hooks file).

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

### 10.13 As built (M9 batch B)

Files: `src/data/teams/hearthkyn-salvagers/*.json`, `src/engine/teams/hearthkyn-salvagers.ts`,
`src/client/teams/hearthkyn-salvagers.ts`, `tests/engine/teams/hearthkyn-salvagers.{test,hooks,rules.test}.ts`, a block in
`src/ai/teamActions.ts` (Knux Smash, Signal, System Jam, Medikit, Utility Grenade, Accelerated Appraisal, Spot, Pan Spectral Scan). Datacard ids
`hk.<name>` (eleven roles, the Gunner as five option cards `hk.gunner-<weapon>`, figure archetype `hk-<role>`); weapons
`hk.w.*` (23 profiles, groups `hk.wg.hylas-rotary-cannon` and `hk.wg.l7-missile-launcher`); team weapon rules `hk.wr.beam`
and `hk.wr.force-impact`.

- Code hooks named by the data (31): the passive names `hkGrudge`, `hkBeam`, `hkForceImpact`, `weavefieldCrest`,
  `hkBrawler`, `hkMedic`, `hkGrenadier`, `hkJumpPack`, `hkWellSupplied`, `secureSalvage`; the actions `knuxSmash`,
  `hkMedikit`, `hkUtilityGrenade`, `hkSignal`, `hkSystemJam`, `acceleratedAppraisal`, `hkSpot`, `panSpectralScan`; the
  gambits and ploys `eyeOfTheAncestors`, `hkTactician` (both 0-CP ploy records gated on the Theyn or Kognitâar being in
  the killzone), `needKeeps`, `toilEarns`, `wroughtDefence`, `proximateFirepower`, `ancestorsAreWatching`, `hkWorthIt`,
  `hkSturdy`, `engageToAcquire`; the equipment `hkClimbingRigs`, `hkExcavationTools`, `hkWritOfClaim`.
- Grudge is the spine: `damage.inflicted` remembers the last enemy operative whose attack or own action damaged each
  Hearthkyn operative (effect `hk.lastHit`), `operative.incapacitated` gives that enemy an `hk.grudge` token, and
  `afterAttackRoll` converts one unretained normal per token (plus one per Toil Earns marker within 3") into a tagged
  crit, never against an obscured target. Beam resolves in the same hook from a trial retention, over the distinct sets
  of operatives that 13 sampled lines through the target's base reach.
- Medic! copies the Pathfinders path (`beforeIncapacitated`, a damage floor for the rest of the action, a free Dash offered
  as a reaction or a 0-CP action-ended offer); Brawler's last strike uses `fight.extraStrike`; Knux Smash pushes through
  `movement.forcedMoveSpots` and `applyForcedMove` (any placeable spot within 3", control ranges included, the Dôzr-freeing
  spots first) and offers its 3" free Charge with `startFreeAction`.
- Not exact: the Utility Grenade marker uses the Smoke Grenade spots (no Vantage-only placement); Beam counts the crits a
  trial retention keeps when the attack dice are final, so a crit made later by a ploy does not beam; Climbing Rigs take
  the saving off the move's total climb cost, so two separate climbs in one move are both shortened; Weavefield Crest,
  Secure Salvage and Medic! apply automatically (the hooks cannot ask).
- Rules review (batch B verification): every printed number, roster limit and loadout matches the April '26 PDF (the three
  Corrected RULINGs where Wahapedia lags stand). Fixed: the Knux Smash push may now end inside a control range (the shared
  sim's MOVE invariant exempts `OperativeMoved` with `action: 'forced'`); Spot's Comms Device extension needs the
  Lokâtr itself to control the marker; Climbing Rigs work only in the operative's own activation; the magna rail rifle
  text. Tests: `tests/engine/teams/hearthkyn-salvagers.rules.test.ts`.

## Teams added in M9 batch C (Kasrkin, Novitiates, Phobos Strike Team, Corsair Voidscarred, Warpcoven, Farstalker Kinband, Imperial Navy Breachers)

Sections 11 to 17 use the layout of sections 7 to 10 (MECH and CLASS lines, survey, gotchas, Engine map, Implementer
brief). The batch C engine prep built the shared capabilities below (`00-architecture.md` section 11, row M9 batch C
prep, tests GEN-070 to GEN-085); every team keeps using the batch A and B layers listed above. The implementer rules
above apply unchanged, with id prefixes `ks.`, `nv.`, `ph.`, `cv.`, `wc.`, `fk.`, `nb.`. Figure archetypes follow the
v2 concept slugs `<prefix><operative>[-<loadout or variant>]` (`ks-sergeant-plasma-pistol`, `nb-armsman-b`): v2 bodies
hold their weapons, so a datacard whose loadouts look different lists one body per loadout in its client file
(`loadoutBodies`), and every archetype stays in `standIns` until its GLB is in the manifest.

Survey result: the guesses made before the sources were read mostly did not hold for these editions. Kasrkin have no
skill-drill pool (Skill at Arms is a gambit pick per turning point, Combat Doctrine pattern); Warpcoven have no perils
mechanic; Corsair have no per-operative specialisms; Phobos have no special deployment; Breachers have no void shields
and their breaching rules reuse the Kommandos Breach marker. What did need a shared capability is below.

| Capability | Where | What it gives a team |
|---|---|---|
| Team resource pools | `src/engine/pools.ts` (`poolOf`, `gainPool`, `spendPool`, `setPool`); `PlayerState.pools`; event `PoolChanged`; HUD chip; client `TeamPresentation.pools` labels | a public per-player counter apart from CP: Novitiates Faith points |
| PSYCHIC across teams | `src/engine/psychic.ts` (`isPsychicWeapon`, `isPsychicAbility`, `psychicAllowed`, `psychicSelectable`); providers `psychicBlocked`, `psychicImmune`; a PSYCHIC action is an ability whose `keywords` include PSYCHIC, a PSYCHIC weapon carries `<p>.a.wr-psychic` | the Null Rod switches off PSYCHIC unique actions and PSYCHIC ranged weapons of any team (Warpcoven, Corsair, Legionaries, Plague Marines); teams ask `psychicAllowed` before their own PSYCHIC additional rules and `psychicSelectable` before a PSYCHIC action picks someone |
| Weapon bans | provider `weaponForbidden(state, op, weaponId, kind)`, read by `attack-common.weaponUnusable` | Concealed Position, Detonate without its marker, Pistol Barrage, a weapon lent by Psychic Cabal, the Hound's off-card weapons |
| Fixed targets | provider `fixedTargets` -> `{ targets, noCover?, noObscured?, blast? }`; `shoot.weaponTargets`; `AttackState.fixed` | Detonate (Phobos Saboteur, Breachers Gheistskull detonator): no target decision, every listed operative shot in its own sequence with forced statuses |
| Extra primary targets | provider `extraTargets` -> `{ candidates, max }`; `AttackState.extraMax` | Salvo: a second primary target chosen like a Torrent target |
| Splash Devastating | `OnDamageInflictedData.splash` | Blast Padding, Diuturnal Mantles, Void Armour ignore x" Devastating unless they are the target |
| Block reactions | attack hook `afterBlock` (`AfterBlockData`) | Riposte: a crit block also inflicts damage |
| Strike-only owed resolutions | `{ strikeOnly: true }` in `fightResolveStart` / `afterFightResolution` queue entries | Stealth Attack |
| Fight target filter | provider `fightTargets` (never empties) | Bad-tempered, Savage Assault's same-enemy Fight |
| Move limits by kind | provider `moveLimitDelta(state, op, kind)` | Strike Fast (Reposition +1"), Boost (Charge +4" instead of +2") |
| FLY distance | provider `flyLimit(state, op, kind)` with `canFly` | Blink Pack (7") |
| Movement bans | provider `moveRestrictions` -> `{ noClimb?, noJump? }` | C.A.T. Unit |
| Activation bar | provider `activationBarred`; `firefight.activatableOps` | C.A.T. Unit: stays ready, cannot be activated, the turning point can end without it, counts as expended for counteracting |
| Counteract alternatives | provider `counteractAlternatives` (ReactionOffer list, option `alt:<n>`, payload `alternative`); `firefight.counteractAlternativeDone` | Farstalker: change one operative's order instead of counteracting; the turn passes and nobody has counteracted |
| Marker action relief | provider `markerActionRelief(state, op, actionId)` -> `{ ignoreEnemyControlRange?, contestSuffices? }` for `marker:pickUp` and MISSION `ability:<id>`; `markers.actionMarkers` | Light Fingers, Mutant Appendage, Poach |
| Per-TP grenades | `ownGrenades` return `tpActions` (seat-wide uses per turning point, grenade source `ownTp`) | Kasrkin Adaptive Equipment |
| Operative picks (extended) | team.json `operativeChoices[]` `unique`, `distinctFrom`, `keyword: false`; `resolvePicks(..., taken)`, `pickAlternatives`; data `defaultRosterPicks`, `rosterPickProblems`; builder defaults keep unique picks apart | Boons of Tzeentch (unique tags, Sorcerous Scrolls), Custom bolt carbine (two different rules) |
| Roster rules | `selection.caps[]` `min` (`max` now optional); `selection.requires` (`{ id, needs }`) | at least one SORCERER; Gheistskull needs Void-Jammer, C.A.T. Unit needs Surveyor |
| Body per loadout (client) | `TeamPresentation.loadoutBodies`; `teams.archetypeFor` (battle figures, builder preview, gallery) | v2 bodies with baked weapons match the chosen loadout |
| Fix | `abilities.repeatSurcharge` treats two profiles of one profile group as one weapon | ASTARTES surcharges (Angels of Death heavy bolter and bolt sniper rifle, Warpcoven soulreaper cannon) |

Not built (each section's survey names the team-local fallback): an interrupt at target selection that runs a nested
attack (Quick Draw), borrowed weapons (Psychic Cabal), reserved dice that replace a rolled die and stay locked (Fate
Itself is My Weapon), swapping or re-placing operatives without a path (Warp Fold, Temporal Flux), a move with a
marker action in its middle (Gather), switching which strategy ploy is in effect (Comms Array, Command Breach),
Ready-step decisions, visibility from any part of the model (C.A.T. Unit), carried team mines with their own effects
(Melta Mine, Haywire Mine), a window per resolved crit (Critical Shot), a window inside an action between its move and
its end (Cover Retreat), an APL ceiling for timed effects (Battle Comms), ignoring only APL decreases (Rebreathers),
operatives as intervening obstacles (Breachwall), a kill window for any cause (Call the Kill), a fight hook after
retention (Vicious Duellist), lifting one core action restriction (Blademaster), free Shoots in control range outside
point-blank (Quick on the Trigger), a target re-pick after a defender's ploy (Blinding Aura), ignoring only the Move
part of injury (Holy Embrocations), and per-die defender choices (All Is Dust). None blocks a team.

## 11. Kasrkin

Rule IDs `T-KS.<n>`, checklist IDs `TEAM-KS-<nnn>`. Sources: the Kasrkin team PDF (Kill Team 2024, Faction version 3, April '26, including its update log with the April '26 errata and the previous errata; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia Kasrkin page (faction version 3, April 2026; its FAQ panel is empty for this team), plus the core rules page for terms. Facts read from the PDF are Confirmed; our own calls are Unsourced. The two sources agree on every stat line except the Sergeant's power weapon (listed in 11.10); in three places the PDF's own update log says more than its card text, and we apply the update log (11.3 and 11.10). All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 11.1 Team selection

- T-KS.1 Roster is exactly 10 operatives: 1 KASRKIN SERGEANT (leader) plus 9 picks from the main list (T-KS.2). Nothing counts as two selections or half a selection.
  - MECH: roster validator: leader slot count 1 (`ks.sergeant`), main slot count 9 | CLASS: data
- T-KS.2 Main list: COMBAT MEDIC, DEMO-TROOPER, GUNNER (five entries, one per special weapon: flamer, grenade launcher, hot-shot volley gun, meltagun, plasma gun), RECON-TROOPER, SHARPSHOOTER, TROOPER, VOX-TROOPER. TROOPER may be taken any number of times; every other entry at most once, so up to five GUNNER operatives, each with a different weapon. The five GUNNER entries and the SHARPSHOOTER together are capped at four operatives.
  - MECH: one Gunner datacard `ks.gunner` with a weapon pick (T-KS.3); main slot `repeatable: ["ks.trooper", "ks.gunner"]`; `selection.loadoutCaps: [{ label: "Gunner weapon", weapons: ["ks.w.flamer", "ks.wg.grenade-launcher", "ks.wg.hot-shot-volley-gun", "ks.w.meltagun", "ks.wg.plasma-gun"], max: 1, each: true }]`; `selection.caps: [{ label: "Gunners and Sharpshooter", from: ["ks.gunner", "ks.sharpshooter"], max: 4 }]` | CLASS: data
  - RULING: Kasrkin Gunner model | one GUNNER datacard taken up to four times, each of its five weapon options at most once (loadout cap `each`), rather than five Gunner cards | the PDF has a single Gunner datacard, and the selection list names each Gunner weapon as its own entry, which "each entry at most once" turns into "each weapon at most once" | Confirmed
  - RULING: Kasrkin combined cap scope | the four-operative cap covers the five GUNNER entries and the SHARPSHOOTER only; Combat Medic, Demo-Trooper, Recon-Trooper, Trooper and Vox-Trooper do not count | Wahapedia marks exactly those six entries with the asterisk the cap refers to; the PDF extracts lose the marker but keep "these operatives" | Confirmed
- T-KS.3 Loadouts:
  - SERGEANT: exactly one of four sets: bolt pistol and power weapon; hot-shot lasgun and gun butt; hot-shot laspistol and power weapon; plasma pistol (both profiles) and chainsword. Only the lasgun set has a gun butt.
  - GUNNER: one of flamer, grenade launcher (frag and krak), hot-shot volley gun (focused and sweeping), meltagun, plasma gun (standard and supercharge); plus gun butt.
  - COMBAT MEDIC, RECON-TROOPER, TROOPER, VOX-TROOPER: hot-shot lasgun and gun butt (fixed).
  - DEMO-TROOPER: hot-shot laspistol and gun butt (fixed); it also carries the Melta Mine marker (T-KS.11), which is not a weapon.
  - SHARPSHOOTER: hot-shot marksman rifle (all three profiles) and gun butt (fixed).
  - MECH: datacard `weapons.options` (`sets` for the Sergeant, a `from` slot for the Gunner); profile groups bring every profile | CLASS: data
- T-KS.4 Archetypes: SECURITY, SEEK & DESTROY (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["security", "seek-and-destroy"]` | CLASS: data
- T-KS.5 Keywords and terms: every operative carries KASRKIN, IMPERIUM and ASTRA MILITARUM plus its role keyword (SERGEANT also LEADER; COMBAT MEDIC also MEDIC). A **hot-shot weapon** is any ranged weapon with "hot-shot" in its name: hot-shot lasgun, hot-shot laspistol, every profile of the hot-shot volley gun and of the hot-shot marksman rifle. A **pistol** (Foregrip) is any weapon with "pistol" in its name: bolt pistol, hot-shot laspistol, both plasma pistol profiles. An enemy is **being scanned** while T-KS.15 says so. A target **cannot retain any cover saves** as defined in T-KS.26.
  - MECH: keyword lists in operatives.json; name tests (`/hot-shot/i`, `/pistol/i`) on the weapon's display name in the team file | CLASS: data (name tests team-hook)
  - RULING: Kasrkin PDF keyword spacing | the faction keyword is KASRKIN | the PDF prints "KASRKIN ," with a stray space, Wahapedia prints KASRKIN | Confirmed
- T-KS.6 Team-local weapon rule: **Concealed Position** (hot-shot marksman rifle, concealed profile; T-KS.16). Every other weapon rule on the cards is core (R-10).
  - MECH: weapon record carries `{ "rule": "ks.a.wr-concealed-position" }`, resolved by the team file through `weaponForbidden` | CLASS: generic:weaponForbidden

### 11.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| KASRKIN SERGEANT | 3 | 6" | 4+ | 9 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, LEADER, SERGEANT |
| KASRKIN COMBAT MEDIC | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, MEDIC, COMBAT MEDIC |
| KASRKIN DEMO-TROOPER | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, DEMO-TROOPER |
| KASRKIN GUNNER | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, GUNNER |
| KASRKIN RECON-TROOPER | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, RECON-TROOPER |
| KASRKIN SHARPSHOOTER | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, SHARPSHOOTER |
| KASRKIN TROOPER | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, TROOPER |
| KASRKIN VOX-TROOPER | 2 | 6" | 4+ | 8 | 28 | KASRKIN, IMPERIUM, ASTRA MILITARUM, VOX-TROOPER |

Notes: only the Sergeant has APL 3 and 9 wounds; every card is Move 6", Save 4+, 28mm. Stats and bases agree between the PDF and Wahapedia for all eight cards. The keyword schema accepts hyphens (as in other teams' role keywords); if it does not, store DEMO-TROOPER, RECON-TROOPER, VOX-TROOPER without the hyphen and keep the display names.

### 11.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Bolt pistol | R | 4 | 3+ | 3/4 | Range 8" | Sergeant (option) |
| Hot-shot lasgun | R | 4 | 3+ | 3/4 | none | Sergeant (option), Combat Medic, Recon-Trooper, Trooper, Vox-Trooper |
| Hot-shot laspistol | R | 4 | 3+ | 3/4 | Range 8" | Sergeant (option), Demo-Trooper |
| Plasma pistol (standard) | R | 4 | 3+ | 3/5 | Range 8", Piercing 1 | Sergeant (option) |
| Plasma pistol (supercharge) | R | 4 | 3+ | 4/5 | Range 8", Hot, Lethal 5+, Piercing 1 | Sergeant (option) |
| Flamer | R | 4 | 2+ | 3/3 | Range 8", Saturate, Torrent 2" | Gunner (option) |
| Grenade launcher (frag) | R | 4 | 3+ | 2/4 | Blast 2" | Gunner (option) |
| Grenade launcher (krak) | R | 4 | 3+ | 4/5 | Piercing 1 | Gunner (option) |
| Hot-shot volley gun (focused) | R | 5 | 3+ | 3/4 | Piercing Crits 1 | Gunner (option) |
| Hot-shot volley gun (sweeping) | R | 4 | 3+ | 3/4 | Piercing Crits 1, Torrent 1" | Gunner (option) |
| Meltagun | R | 4 | 3+ | 6/3 | Range 6", Devastating 4, Piercing 2 | Gunner (option) |
| Plasma gun (standard) | R | 4 | 3+ | 4/6 | Piercing 1 | Gunner (option) |
| Plasma gun (supercharge) | R | 4 | 3+ | 5/6 | Hot, Lethal 5+, Piercing 1 | Gunner (option) |
| Hot-shot marksman rifle (concealed) | R | 4 | 2+ | 3/3 | Devastating 3, Heavy, Silent, Concealed Position | Sharpshooter |
| Hot-shot marksman rifle (mobile) | R | 4 | 3+ | 3/4 | none | Sharpshooter |
| Hot-shot marksman rifle (stationary) | R | 4 | 2+ | 3/3 | Devastating 3, Heavy | Sharpshooter |
| Chainsword | M | 4 | 3+ | 4/5 | none | Sergeant (option) |
| Power weapon | M | 4 | 3+ | 4/6 | Lethal 5+ | Sergeant (option) |
| Gun butt (Sergeant) | M | 3 | 3+ | 2/3 | none | Sergeant (option) |
| Gun butt | M | 3 | 4+ | 2/3 | none | Combat Medic, Demo-Trooper, Gunner, Recon-Trooper, Sharpshooter, Trooper, Vox-Trooper |
| Combat dagger (equipment) | M | 3 | 4+ | 3/4 | none | every friendly KASRKIN via T-KS.37 |

Notes: 21 profiles over 15 weapon records. Ids: `ks.w.bolt-pistol`, `ks.w.hot-shot-lasgun`, `ks.w.hot-shot-laspistol`, `ks.wg.plasma-pistol` (standard, supercharge), `ks.w.flamer`, `ks.wg.grenade-launcher` (frag, krak), `ks.wg.hot-shot-volley-gun` (focused, sweeping), `ks.w.meltagun`, `ks.wg.plasma-gun` (standard, supercharge), `ks.wg.hot-shot-marksman-rifle` (concealed, mobile, stationary), `ks.w.chainsword`, `ks.w.power-weapon`, `ks.w.gun-butt-sergeant`, `ks.w.gun-butt`, `ks.w.combat-dagger`. The Sergeant's gun butt (Hit 3+) is better than everyone else's (4+), so it is a separate record; every other Sergeant ranged weapon equals the other cards' and shares the record. The plain Heavy on the marksman rifle's concealed and stationary profiles is the core rule (no move in an activation or counteraction where it is used, either way round). Rapid Fire weapons (T-KS.25) are the bolt pistol, hot-shot lasgun and hot-shot laspistol only.

UNCLEAR (resolved): the PDF layout extract scrambles the Gunner table (the Hit/Dmg and WR columns are listed as one block, out of row alignment). Read top to bottom against the name column, the flow extract and Wahapedia agree row for row; the table above follows them.
UNCLEAR (resolved): the Sergeant's power weapon prints Lethal 5+ in the PDF (both extracts) and "-" on Wahapedia. RULING: Kasrkin Sergeant power weapon | Lethal 5+ | the PDF datacard prints it in both extracts; Wahapedia drops the rule | Corrected
UNCLEAR (resolved): the Sergeant's gun butt is Hit 3+ while every other card's is 4+, in both sources. RULING: Kasrkin Sergeant gun butt | Hit 3+, a separate record from the 4+ gun butt | both sources print 3+ on the Sergeant card and 4+ everywhere else | Confirmed
UNCLEAR (resolved): the meltagun prints Dmg 6/3. Kept as printed; never tune printed numbers. RULING: Kasrkin meltagun Dmg | 6/3 as printed, Devastating 4 on each retained crit as well | identical in the PDF and Wahapedia; the low crit value is the 2024 melta pattern | Confirmed

### 11.4 Operative rules and unique actions

- T-KS.7 **TACTICAL COMMAND** (Sergeant, 0 AP): pick one friendly KASRKIN operative (anywhere, the Sergeant included) and give it one SKILL AT ARMS (T-KS.21 to T-KS.24) until the Ready step of the next Strategy phase. The pick must differ from every SKILL AT ARMS that operative already has (the team's picks from T-KS.20); it applies on top of them. If that operative already holds a skill from an earlier Tactical Command, the new one replaces it. Instead of that effect, if your Clearance Sweep marker (T-KS.28) is in the killzone, you may lift it and place it again anywhere in the killzone. Not while in an enemy's control range. A Tactical Command token marks the chosen operative.
  - MECH: unique 0 AP action with two modes (`ability.choice`: grant a skill / move the Clearance Sweep marker); the grant mode picks a friendly operative and a skill from those it lacks; team ledger `skills.perOp[opId]` (one entry, replaced on re-use) cleared at `turningPoint.start`; token `ks.tacticalCommand` with the same expiry; the marker mode reuses the T-KS.28 placement | CLASS: team-hook
  - RULING: Kasrkin Tactical Command errata | the operative gains the skill in addition to the team's skill(s) and it must differ from them; a second Tactical Command on the same operative replaces the first (the April '26 parenthetical "instead of any it currently has" is read as covering only an earlier Tactical Command grant) | the April '26 update log prints both "instead of any it currently has" and "can be in addition to any it already has" in the same sentence, and the card text keeps only the second; this reading lets both clauses stand | Unsourced
  - RULING: Kasrkin Tactical Command target and cost | any friendly KASRKIN operative in the killzone, no range or visibility, the Sergeant included; as a 0 AP action it can never be a counteraction (R-3.12) and is once per activation (R-3.7) | the card names no range, and the core action restrictions apply to 0 AP actions | Unsourced
- T-KS.8 **Veteran Leadership** (Sergeant): when you use the SKILL AT ARMS gambit (T-KS.20) while the Sergeant is in the killzone, you pick two different skills instead of one.
  - MECH: the T-KS.20 gambit asks for a second, different pick when `ks.sergeant` is active in the killzone | CLASS: team-hook
  - RULING: Kasrkin Veteran Leadership | the check is made when the gambit is used; both picks last until the next Ready step even if the Sergeant is incapacitated afterwards; the two must differ | the update log's latest change adds "they cannot be the same"; the duration belongs to the gambit | Confirmed
- T-KS.9 **Medic!** (Combat Medic): the first time each TP that another friendly KASRKIN operative visible to and within 3" of the Combat Medic would be incapacitated, you may use this rule, provided neither of the two is in an enemy's control range, the Combat Medic is not incapacitated, and (in a Shoot action) the Combat Medic is not a primary or secondary target. Effect: the friendly operative is not incapacitated, is left on 1 wound and cannot be incapacitated for the rest of that action. When the action ends it may perform a free Dash that must end within the Combat Medic's control range. Both operatives then have APL -1 until the end of their next activations, and if this happened during the saved operative's own activation, that activation ends. A Medic token marks it.
  - MECH: the Pathfinders Medic! implementation (T-PF.14, 3.11): `beforeIncapacitated` sets `wounds: 1`, `onDamageInflicted` floor for the rest of the action, free Dash via `startFreeAction({ action: 'dash', endWithinCrOf })` after the action, `Activation.endsAfterAction`, once-per-TP ledger, Medic token | CLASS: team-hook
  - RULING: Kasrkin Medic! opportunity | only the first qualifying moment each TP is offered, declining spends it, the AI always accepts; the free Dash is optional and skipped when no end point lies in the Combat Medic's control range | same wording as the Pathfinders and Hearthkyn cards (April '26 errata text); same ruling | Unsourced
- T-KS.10 **MEDIKIT** (Combat Medic, 0 AP): one friendly KASRKIN operative in the Combat Medic's control range regains up to 2D3 lost wounds (never above its starting wounds). It cannot pick an operative that Medic! saved this TP. Not while in an enemy's control range.
  - MECH: unique 0 AP action with friendly-target filter (in CR, not this TP's Medic! target), `effects.regainWounds(2D3)` | CLASS: data
  - RULING: Kasrkin MEDIKIT self-target and cost | the Combat Medic may heal itself; as a 0 AP action it is once per activation and never a counteraction | an operative is within any distance of itself (R-8.3), the text does not say "other", and R-3.7 / R-3.12 apply to 0 AP actions | Unsourced
- T-KS.11 **Melta Mine** (Demo-Trooper): the Demo-Trooper starts the battle carrying your Melta Mine marker. It (and only it, in practice) may perform Pick Up Marker on that marker, and each time it performs Place Marker with it, it may immediately perform a free Dash. The marker can never be placed within an enemy operative's control range. If the Demo-Trooper is incapacitated while carrying it and no legal spot exists, the marker is removed with it.
  - MECH: team marker `ks.meltaMine` (`pickable`, `owner` = Kasrkin seat) created at set-up as carried (`carriedBy` = the Demo-Trooper, `op.flags.carrying`); Place Marker spot filter rejects spots within an enemy operative's control range; after Place Marker on it, offer `startFreeAction({ action: 'dash' })`; the incapacitated carrier's forced 0 AP Place Marker (R-4.6) uses the same filter and removes the marker when nothing qualifies | CLASS: team-hook (see gap `teamMine`)
  - RULING: Kasrkin Melta Mine carry | the marker starts carried (no set-up placement); any other operative that comes within its control range sets it off first (T-KS.12), so only the Demo-Trooper ever picks it up; the free Dash is optional and follows the Dash rules (R-4.2) | the card says the Demo-Trooper "is carrying" it and gives no deployment step | Unsourced
  - RULING: Kasrkin Melta Mine dying carrier | the forced 0 AP Place Marker (R-4.6) picks a spot in the Demo-Trooper's control range outside every enemy's control range; with none, the marker leaves with the Demo-Trooper and never triggers | the card gives exactly this exception | Confirmed
- T-KS.12 **Proximity Mine** (Demo-Trooper): the first time your placed Melta Mine marker is within the control range of any operative other than the Demo-Trooper (friend or foe), the marker is removed and that operative takes 2D6+3 damage; if it survives, its current action (if any) ends at once, even if unfinished. A carried marker never triggers. The Demo-Trooper never sets it off and never takes its damage.
  - MECH: team-local copy of `markers.triggerMines` run after every accepted action (move increment end points from `OperativeMoved` segments plus current positions), skipping the marker while `carriedBy` is set and skipping the Demo-Trooper; `directDamage(2D6+3)` with source `ks.meltaMine`; event `MineTriggered`; the moved operative's action has already ended at that point, so "end its action" adds nothing in this engine | CLASS: team-hook (see gap `teamMine`)
  - RULING: Kasrkin Proximity Mine trigger | checked exactly like the core Mines (after each action, at every completed move increment and at current positions); a friendly KASRKIN operative sets it off too; the operative finishes where its move ended, so the "move it the minimum amount to be placed" clause never arises | the card says "another operative" with only the Demo-Trooper excepted; the core Mines ruling sets the check points | Unsourced
  - RULING: Kasrkin Melta Mine next to a friend | placing it within a friendly operative's control range is legal and sets it off on that friend at once; the UI warns and the AI never does it | the card bars only enemy control range | Unsourced
- T-KS.13 **Blast Padding** (Demo-Trooper): (a) when an operative shoots the Demo-Trooper with a Blast or Torrent weapon, you may re-roll one defence die, unless that weapon has a profile named sweeping; (b) x" Devastating damage (Devastating with a distance) never affects it unless it is the target of that sequence.
  - MECH: (a) `modifyDefenceDice` adds a `RerollGrant { mode: 'one' }` when the attacker's profile has Blast or Torrent and its weapon group has no profile whose name contains "sweeping"; (b) `onDamageInflicted` sets `amount` to 0 when `splash` is set | CLASS: generic:splashDevastating ((a) team-hook)
  - RULING: Kasrkin Blast Padding sweeping | a weapon is excluded when any profile of the same weapon is named sweeping (hot-shot volley gun, heavy bolter, rotary cannon), whichever profile shoots | the card excludes "weapons that have a sweeping profile", naming the weapon, not the profile | Unsourced
- T-KS.14 **Reconnoitre Killzone** (Recon-Trooper): RELOCATE (T-KS.29) costs 0 CP when the Recon-Trooper is the operative it selects first.
  - MECH: ploy rule `costAdjust` on `ks.p.relocate` when the ploy's first pick is a `ks.recon-trooper` | CLASS: team-hook
- T-KS.15 **AUSPEX SCAN** (Recon-Trooper, 1 AP): until the start of the Recon-Trooper's next activation, or its incapacitation if sooner, every enemy operative within 8" of it is being scanned (checked at each moment, no visibility needed). While a friendly KASRKIN operative shoots a scanned enemy, that enemy cannot be obscured. Not while in an enemy's control range. An Auspex Scan token marks the Recon-Trooper.
  - MECH: unique action setting token `ks.auspexScan` on the Recon-Trooper (expires at its `activation.start` and `sourceIncapacitated`); helper `isScanned(state, enemy)` = token active and distance <= 8"; `target.status` sets `obscured: false` when the shooter is KASRKIN and the target is scanned | CLASS: team-hook
  - RULING: Kasrkin Auspex Scan scope | scanning is measured live at each shot; a counteraction is not an activation, so it does not end the scan, but performing Auspex Scan again (counteraction included) restarts it; only KASRKIN shooters lose the obscured check | the card's duration names the next activation; R-3.12 separates counteractions | Unsourced
- T-KS.16 **Concealed Position** (Sharpshooter, concealed profile): the concealed profile can be used only in the Sharpshooter's first Shoot action of the battle.
  - MECH: provider `weaponForbidden(state, op, 'ks.w.hot-shot-marksman-rifle-concealed', 'shoot')` returns a reason once the battle ledger records a resolved Shoot by this operative | CLASS: generic:weaponForbidden
  - RULING: Kasrkin Concealed Position | any Shoot action in which the Sharpshooter shot (free Shoots and Guard interrupt Shoots included) uses up the profile, whichever profile it picked; going on Guard without shooting does not | the rule ties the profile to the first time it performs the Shoot action; an unused Guard has not shot | Unsourced
- T-KS.17 **Camo Cloak** (Sharpshooter): while an operative shoots the Sharpshooter, Saturate is ignored, and if it can retain any cover saves it may retain one more, or retain one as a crit instead. This improvement does not stack with the Vantage cover improvement (R-11.5 b).
  - MECH: provider `stealthyCover` returns 1 for `ks.sharpshooter` (the Vantage interaction is already in the shared cover code); `modifyWeaponRules` removes `core.wr.saturate` from the attacker's weapon when the target is the Sharpshooter | CLASS: team-hook
  - RULING: Kasrkin Camo Cloak | the extra or crit cover save is the shared Stealthy-type improvement, used automatically in the defender's favour (crit when one cover save is retained and the attack has a crit to block, otherwise the extra save) | the card wording matches the Stealthy pattern the shared `stealthyCover` path implements | Confirmed
- T-KS.18 **Adaptive Equipment** (Trooper): once per TP, one friendly TROOPER may perform the Smoke Grenade action, and once per TP one friendly TROOPER may perform the Stun Grenade action (M-5.5). These uses are separate from, and never count against, grenades the team picked as equipment.
  - MECH: provider `ownGrenades` returns `tpActions: { smoke: 1, stun: 1 }` for operatives with keyword TROOPER (seat-wide per TP, grenade source `ownTp`); the actions are offered through `extraActions` | CLASS: generic:ownGrenades.tpActions
  - RULING: Kasrkin Adaptive Equipment | the two uses are per TP for the whole kill team (the same or different Troopers); a Trooper still cannot perform the same action twice in one activation (R-3.7), so one Smoke Grenade per activation whatever its source | the card counts the uses per TP and exempts them only from the equipment totals | Confirmed
- T-KS.19 **BATTLE COMMS** (Vox-Trooper, 1 AP): pick another friendly KASRKIN operative (anywhere); it gets APL +1 until the end of its next activation, but never above 3 once every APL change is added up. The Vox-Trooper may perform this action twice in one activation. Not while in an enemy's control range.
  - MECH: unique action with a friendly-target filter (not self); `applyAplEffect(+1)` only when the target's current APL is below 3; provider `maxRepeats` 2 for `ability:ks.a.battle-comms` | CLASS: team-hook (see gap `aplCeiling`)
  - RULING: Kasrkin Battle Comms ceiling | the +1 is applied only while the target's APL is below 3 (a Sergeant at 3 gains nothing; a stunned Sergeant at 2 goes to 3); the same target twice gains nothing more (R-9.6) | "to a maximum of 3 after all APL changes" plus the core +-1 cap | Unsourced

### 11.5 Faction rules

- T-KS.20 **SKILL AT ARMS** (STRATEGIC GAMBIT, 0 CP, once per TP): pick one skill (T-KS.21 to T-KS.24); every friendly KASRKIN operative has it until the Ready step of the next Strategy phase. With Veteran Leadership (T-KS.8) pick two different skills. Tactical Command (T-KS.7) adds one more skill to a single operative.
  - MECH: Strategy-phase gambit with params (the Combat Doctrine pattern): `ability.choice` over the four skills (two choices, `distinctFrom`, when T-KS.8 applies); team ledger `skills.team` read by every skill handler together with `skills.perOp`; cleared at `turningPoint.start`; event for the feed and a HUD chip | CLASS: team-hook
  - RULING: Kasrkin Skill at Arms use | the picks are public; the AI always uses the gambit (no cost, no downside) | gambit effects are announced, and there is no reason to pass on a free gambit | Unsourced
- T-KS.21 **Light 'Em Up** (skill): the operative's ranged weapons have Severe.
  - MECH: `modifyWeaponRules` adds `core.wr.severe` to ranged profiles while the operative has the skill | CLASS: team-hook
  - RULING: Kasrkin Light 'Em Up and obscured | Severe cannot make a crit against an obscured target | R-5.8 bars every rule that would make a crit while obscured | Confirmed
- T-KS.22 **Strike Fast** (skill): +1" to the operative's Move while it performs Reposition (free Repositions included); Dash, Charge and Fall Back are unchanged.
  - MECH: provider `moveLimitDelta(state, op, 'reposition')` returns 1 while the operative has the skill | CLASS: generic:moveLimitDelta
- T-KS.23 **Ice In Your Veins** (skill): while the operative fights, retaliates or is shot, the first attack die in that sequence that would deal it Normal Dmg of 3 or more deals 1 less. Crits, Devastating damage and non-dice damage are never reduced.
  - MECH: `onDamageInflicted` on the operative for sources `normal` and `strike-normal`, `amount >= 3`, once per sequence (per-sequence ledger keyed by the attack id) subtracts 1 | CLASS: team-hook
  - RULING: Kasrkin Ice In Your Veins scope | only normal successes count; the threshold uses the damage after other modifiers; each Blast or Torrent target is its own sequence | the errata wording names Normal Dmg and "during that sequence" | Confirmed
- T-KS.24 **For Cadia!** (skill): the operative's melee weapons get Atk +1, to no more than 4 (gun butt and combat dagger become 4; chainsword and power weapon stay 4). While the operative is fighting (its own Fight, not retaliating), its first strike in that sequence deals 1 extra damage.
  - MECH: `modifyAttackDice` atk +1 when the melee weapon's Atk is below 4 (fighting or retaliating); `beforeStrike` +1 on the attacker side's first strike | CLASS: team-hook
  - RULING: Kasrkin For Cadia! and retaliating | the Atk bonus applies whenever the weapon is used; the extra damage only when the operative is the attacker | 2024 rules separate "fighting" from "retaliating", and the card says "fighting" for the damage only (the Blood for the Blood God ruling, T-LG.28) | Confirmed
- T-KS.25 **RAPID FIRE**: a friendly KASRKIN operative that performs no action in which it moves during its activation may perform two Shoot actions in that activation, provided both use a bolt pistol, hot-shot lasgun or hot-shot laspistol. Guard is not covered: it cannot be one of the two. Free actions count (R-3.9); Shoots outside its activation (Seize the Initiative, Cover Retreat) do not.
  - MECH: provider `maxRepeats` returns 2 for `shoot` when this activation has no move action (Reposition, Dash, Fall Back, Charge, free ones included) and the first Shoot used a Rapid Fire weapon; provider `weaponForbidden` bars every other weapon in the second Shoot; provider `actionForbidden` bars move actions and Guard once a second Shoot was performed, and the Melta Mine free Dash is not offered then | CLASS: generic:weaponForbidden (plus `maxRepeats`, `actionForbidden`)
  - RULING: Kasrkin Rapid Fire | the first Shoot may use any weapon, but only a Rapid Fire weapon in it allows a second; after two Shoots no move action and no Guard may follow in that activation; a Shoot followed by a move is legal (Rapid Fire simply not used) | the rule is a permission conditioned on the whole activation and on the weapons of both Shoots; "excluding Guard" keeps Guard under the normal once-per-activation limit | Unsourced

### 11.6 Ploys

The source prints no costs: every ploy is 1 CP (R-2.4) unless a rule changes it (T-KS.14). Strategy ploys last until the end of the TP (R-2.5) unless they say otherwise.

- T-KS.26 **ELIMINATION PATTERN** | Strategy | 1 CP | Gambit step | When a friendly KASRKIN operative shoots with a hot-shot weapon at an operative that cannot retain any cover saves or is being scanned (T-KS.15), that weapon has Piercing Crits 1; a hot-shot volley gun gets Piercing 1 instead. A target **cannot retain any cover saves** in a sequence when it is not in cover, or the shooter's weapon has Saturate (Camo Cloak cancels that), or another rule denies its cover save.
  - MECH: `modifyWeaponRules` with `targetId` (per sequence, after `target.status`): add `piercing 1 crits`, or plain `piercing 1` for `ks.wg.hot-shot-volley-gun` profiles | CLASS: team-hook
  - RULING: Kasrkin cannot retain any cover saves | true when the target is not in cover for that sequence, or Saturate applies to the shot after Camo Cloak, or a rule removes its cover save; checked per sequence, so Blast and Torrent targets differ | the phrase describes the defender's state in that sequence; Saturate is the core rule that stops cover saves | Unsourced
  - RULING: Kasrkin Elimination Pattern and Severe | a crit made by Severe (Light 'Em Up) triggers the granted Piercing Crits 1 | Severe says Piercing Crits still take effect | Confirmed
- T-KS.27 **ENGAGE FROM COVER** | Strategy | 1 CP | Gambit step | When an operative shoots a friendly KASRKIN operative that is in cover, you may re-roll one defence die.
  - MECH: `modifyDefenceDice` adds `RerollGrant { mode: 'one' }` when `target.status` is in cover for the sequence | CLASS: team-hook
  - RULING: Kasrkin Engage from Cover "in cover" | the target is in cover for the sequence (Blast secondaries inherit it) even when Saturate stops it retaining a cover save | in cover is a status (R-5.4); retaining the save is a separate step | Unsourced
- T-KS.28 **CLEARANCE SWEEP** | Strategy | 1 CP | Gambit step | Place your Clearance Sweep marker anywhere in the killzone. When a friendly KASRKIN operative within 5" of it horizontally shoots an operative also within 5" of it horizontally, the shooter's weapons have Ceaseless. The marker is removed in the next Ready step. Tactical Command (T-KS.7) can move it.
  - MECH: ploy with free placement (`placementSpots` sample, as Cloud of Flies); `modifyWeaponRules` with `targetId` adds `core.wr.ceaseless` (horizontal distance from the marker to both operatives, per target); `turningPoint.start` removes it | CLASS: team-hook
  - RULING: Kasrkin Clearance Sweep distance | horizontal distance only (height ignored), measured to the nearest point of each base, checked per target | the card says "horizontally"; distances to operatives are measured to their bases (core rules) | Confirmed
- T-KS.29 **RELOCATE** | Strategy | 1 CP (0 CP with T-KS.14) | Gambit step, not in TP1 | Pick one friendly KASRKIN operative more than 3" from every enemy operative. It and each other friendly KASRKIN operative within 3" of it that is also more than 3" from every enemy may each perform a free Dash, in the order you choose.
  - MECH: ploy with an operative choice (eligible picks only); the group is fixed at use; `startFreeSequence` of optional free Dashes in the player's order | CLASS: team-hook
  - RULING: Kasrkin Relocate group | the group is fixed when the ploy is used (later Dashes do not add or drop operatives); each Dash is optional and follows the Dash rules (3", no climb); the ploy is not offered in TP1 | "can immediately perform" after a selection made once | Unsourced
- T-KS.30 **SEIZE THE INITIATIVE** | Firefight | 1 CP | Start of the Firefight phase, only for the player without initiative | One friendly KASRKIN operative performs one 1 AP action for free, without moving in it.
  - MECH: firefight ploy in the `firefight.start` window, gated on `seat !== state.initiative`; operative choice, then `startDelegatedAction` with an allow list: actions whose current cost is exactly 1 AP and that do not move the operative (Shoot, Guard, Fight, Pick Up / Place Marker, mission actions, AUSPEX SCAN, BATTLE COMMS, grenade actions); never Reposition, Dash, Charge, Fall Back or 0 AP / 2 AP actions | CLASS: team-hook
  - RULING: Kasrkin Seize the Initiative | the action's cost after modifiers must be exactly 1 AP; the free action is outside the operative's activation, so it may repeat that action when activated (core free-action rule) and it is not a Rapid Fire Shoot; Place Marker on the Melta Mine does not then offer the free Dash | "a 1AP action ... cannot move during that action"; the Dash is part of resolving that Place Marker | Unsourced
- T-KS.31 **COVER RETREAT** | Firefight | 1 CP | A friendly KASRKIN operative performs Fall Back while visible to and within 6" of another ready friendly KASRKIN operative that is not in an enemy's control range | After the retreating operative's move and before its Fall Back ends, that other operative may perform a free Shoot (its order may be changed to Engage to do so).
  - MECH: firefight ploy offered in `firefight.actionDeclared` for the owner's Fall Back (conditions checked from the start position, other operative ready and outside enemy CR); the free Shoot runs through `startFreeAction({ action: 'shoot' })` with an optional order flip as soon as the Fall Back path is applied, before end-of-action effects | CLASS: team-hook (see gap `midActionWindow`)
  - RULING: Kasrkin Cover Retreat errata | the other operative must be ready | the update log (previous errata) adds "ready" and never reverses it; the card text and Wahapedia lag behind (the Soul Gorge precedent, T-LG.10) | Unsourced
  - RULING: Kasrkin Cover Retreat timing | offered when the Fall Back is declared, with visibility and 6" measured before the move; the free Shoot resolves right after the move and before anything that happens at the end of the Fall Back | the ploy triggers on performing the action and places the Shoot between the move and the end of the action | Unsourced
- T-KS.32 **NEUTRALISE TARGET** | Firefight | 1 CP | After rolling attack dice for a friendly KASRKIN operative shooting an operative that cannot retain any cover saves (T-KS.26) or is being scanned | Re-roll any of your attack dice.
  - MECH: firefight ploy in the `shoot.beforeAttackRerolls` window; `RerollGrant { mode: 'any' }` | CLASS: team-hook
  - RULING: Kasrkin Neutralise Target eligibility | checked on the fresh roll, with the cover and Saturate state known at that point (Long-Range Scope's crit-gated Saturate, T-KS.35, counts only if a crit is already showing) | the ploy's window is the fresh roll | Unsourced
- T-KS.33 **GIVE NO GROUND** | Firefight | 1 CP | During a friendly KASRKIN operative's activation, or at the end of the Firefight phase | Pick one objective marker or one of your mission markers. Until that activation ends (or, at the end of the Firefight phase, until the next TP starts), if the friendly KASRKIN operatives contesting it total exactly 2 APL and the enemy operatives contesting it also total exactly 2, you control it.
  - MECH: firefight ploy in `firefight.activationStart` / `firefight.actionEnded` (own activation) and in the `turningPoint.end` end-of-Firefight window (before the TP's scoring); marker choice; provider `controlTotal` raises the Kasrkin total above the enemy's when both totals are exactly 2 | CLASS: team-hook
  - RULING: Kasrkin Give No Ground totals | "total APL" is the R-8.6 total after `controlApl` changes (Battle Comms raising an operative to 3 breaks the tie condition); exactly 2 against exactly 2, nothing else | as printed; the core control totals are the APL sums | Confirmed

### 11.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-KS.34 **FOREGRIP** | When a friendly KASRKIN operative shoots an operative within 3" of it, the ranged weapons printed on its datacard, except those with "pistol" in their name, have Accurate 1.
  - MECH: `modifyWeaponRules` with `targetId`: distance <= 3", weapon in the operative's datacard weapons (not equipment grants), name test `/pistol/i` excludes | CLASS: team-hook
  - RULING: Kasrkin Foregrip scope | weapons from equipment (frag and krak grenades) gain nothing; checked per target | the card says "ranged weapons on its datacard" | Confirmed
- T-KS.35 **LONG-RANGE SCOPE** | When a friendly KASRKIN operative shoots an operative more than 6" away and retains any crit in the Roll Attack Dice step, its hot-shot weapons other than the hot-shot laspistol have Saturate for that sequence.
  - MECH: `afterAttackRoll` sets a per-sequence flag when distance > 6", a crit is retained and the profile is a hot-shot weapon other than `ks.w.hot-shot-laspistol`; `modifyWeaponRules` adds `core.wr.saturate` while the flag is set (read again at the cover-save step) | CLASS: team-hook
  - RULING: Kasrkin Long-Range Scope errata | the crit-gated version from the update log (no Saturate without a retained crit; the laspistol never gains it) | the update log (previous errata) changes the rule to this text and never reverses it; the card text and Wahapedia keep the older wording (the Soul Gorge precedent, T-LG.10) | Unsourced
- T-KS.36 **RELICS OF CADIA** | Once per TP, when a friendly KASRKIN operative is shooting, fighting or retaliating and the attack roll has two or more fails, you may discard one of those fails and retain another as a normal success. A Relics of Cadia token tracks the use.
  - MECH: 0 CP equipment offer at `shoot.attackRolled` / `fight.rolled` (after re-rolls, before retention is final) while equipped; once-per-TP ledger; one `fail` becomes `normal`, `tag: 'relics'` | CLASS: team-hook
  - RULING: Kasrkin Relics of Cadia timing | after all attack re-rolls, before the Resolve step; the fails counted are the dice actually rolled (Accurate dice are not rolled) | "if you roll two or more fails" refers to the finished roll (the Chaos Talismans ruling, T-LG.38) | Unsourced
- T-KS.37 **COMBAT DAGGERS** | Every friendly KASRKIN operative has the combat dagger (11.3) for the battle.
  - MECH: equipment `grants` of `ks.w.combat-dagger` with `grants.to` keyword KASRKIN | CLASS: data

Marker/token guide (UI): Medic token, Tactical Command token, Auspex Scan token, Melta Mine marker, Relics of Cadia token, Clearance Sweep marker.

### 11.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-KS: TEAM-KS-000 to TEAM-KS-032.

### 11.9 Generic capabilities (survey; resolved in the Engine map below)

- **Strategy-phase gambit with params** (existing, Combat Doctrine pattern): SKILL AT ARMS, with a second distinct pick under Veteran Leadership. Used by T-KS.8, T-KS.20.
- **weaponForbidden** (batch C): Concealed Position and Rapid Fire's second-Shoot weapon limit. Used by T-KS.16, T-KS.25.
- **moveLimitDelta** (batch C): Strike Fast. Used by T-KS.22.
- **splashDevastating** (batch C, `OnDamageInflictedData.splash`): Blast Padding (b). Used by T-KS.13.
- **ownGrenades.tpActions** (batch C): Adaptive Equipment. Used by T-KS.18.
- **stealthyCover**, `startFreeSequence`, `startDelegatedAction`, `startFreeAction`, `shoot.beforeAttackRerolls`, `firefight.start`, `turningPoint.end` window, `controlTotal`, `target.status`, Pathfinders Medic! path: existing. Used by T-KS.9, T-KS.17, T-KS.29 to T-KS.33.
- Gaps (not in the existing or batch C layer; each has a team-local fallback):
  - **teamMine** (MUST, fallback): the shared mines code triggers only on equipment markers with a fixed D3+3 and does not skip carried markers. Melta Mine needs a carried team marker, 2D6+3 damage, and the Demo-Trooper exempt. Fallback: the marker is a plain team marker (not a `mines` equipment); the team file runs its own copy of `triggerMines` after every accepted action (hook `action.ended`, plus after set-up and free moves), skipping it while `carriedBy` is set and skipping the Demo-Trooper (no `ignoresMine` needed), with `directDamage(2D6+3)`. Used by T-KS.11, T-KS.12.
  - **midActionWindow** (NICE, fallback): no ploy window exists between a Fall Back's move and the end of that action. Fallback: decide in `firefight.actionDeclared`, run the free Shoot from the team's `action.ended` handler for that Fall Back before other end-of-action reactions. Used by T-KS.31.
  - **aplCeiling** (NICE, fallback): no shared "APL never above N" for a timed APL effect. Fallback: apply Battle Comms' +1 only while the target's current APL is below 3 (RULING). Used by T-KS.19.
- Everything else maps onto existing providers, hooks, windows and 0 CP offers (Engine map).

### 11.10 Gotchas

- PDF over Wahapedia once (Corrected): the Sergeant's power weapon has Lethal 5+. Update log over card text twice (Unsourced, as T-LG.10): Cover Retreat needs a ready shooter; Long-Range Scope is crit-gated and skips the laspistol. Tactical Command's April '26 text contradicts itself; read as T-KS.7.
- The Sergeant's gun butt is 3+, everyone else's 4+. Three of the four Sergeant sets have no gun butt.
- Gunners: one card, up to five, each weapon once; Gunners plus the Sharpshooter at most four. Troopers unlimited.
- Rapid Fire needs no move action at all in the activation, a bolt pistol, hot-shot lasgun or hot-shot laspistol in both Shoots, and forbids Guard as the second; a Melta Mine free Dash or any free Reposition counts as moving. Unlike ASTARTES (T-LG.27) there is no counteract-any-order rule: Kasrkin counteract normally.
- Skill at Arms is a team gambit that lasts until the next Ready step (not the end of the TP, but nothing happens in between); Tactical Command adds one personal skill to one operative that must differ from the team's. Strike Fast is Reposition only; For Cadia!'s extra damage is only when the operative is the attacker; Ice In Your Veins is Normal Dmg 3+ only, once per sequence.
- "Hot-shot weapon" is a name test: the hot-shot volley gun and every marksman rifle profile count; the hot-shot laspistol counts for Elimination Pattern but not for Long-Range Scope. Foregrip excludes anything with "pistol" in its name and any equipment weapon.
- Elimination Pattern gives the volley gun Piercing 1 instead of Piercing Crits 1. "Cannot retain any cover saves" includes "not in cover at all" and Saturate (Flamer, Long-Range Scope); Camo Cloak cancels Saturate on the Sharpshooter.
- Auspex Scan is a live 8" bubble on the Recon-Trooper until its next activation; it only removes obscured for Kasrkin shooters and feeds Elimination Pattern and Neutralise Target.
- The Melta Mine starts carried; it hurts friends too (anyone but the Demo-Trooper), deals 2D6+3, cannot be placed in an enemy's control range, and Place Marker on it gives a free Dash.
- Blast Padding re-rolls one defence die against Blast/Torrent unless the weapon has a sweeping profile, and zeroes x" Devastating splash.
- Concealed Position: the concealed profile only in the Sharpshooter's first Shoot of the battle; Heavy (plain) on concealed and stationary profiles; mobile has no Heavy.
- Medic! and MEDIKIT copy the Pathfinders and Hearthkyn rules except that MEDIKIT costs 0 AP here (so no counteraction). Tactical Command is 0 AP too.
- Battle Comms: twice per activation, never above APL 3, never on itself.
- Seize the Initiative is for the player without initiative only, at the very start of the Firefight phase, a 1 AP non-move action. Relocate is never in TP1 and is free with the Recon-Trooper. Give No Ground only breaks an exact 2-against-2 tie.
- Edition leaks to reject: nothing from the 2021 Kasrkin datacards, Skills at Arms, ploys or equipment (no Overwatch, no shape distances), nothing from 40k 10th Astra Militarum (no Orders, no Leadership or battle-shock tests, no wound rolls or AP); inches only, three defence dice, every printed number from the April '26 cards.

### 11.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (Sergeant 1, main 9, TROOPER and GUNNER repeatable, each Gunner weapon once, Gunner + Sharpshooter <= 4) | team.json slots, `repeatable`, `selection.loadoutCaps` (`each`), `selection.caps` (ids) |
| Loadouts | datacard `weapons.options` (`sets` for the Sergeant, `from` for the Gunner), profile groups |
| Skill at Arms, Veteran Leadership | Strategy-phase gambit with params (Combat Doctrine pattern), team ledger `skills.team`, cleared at `turningPoint.start` |
| Tactical Command | unique 0 AP action, `ability.choice`, team ledger `skills.perOp`, token `ks.tacticalCommand`; marker mode reuses Clearance Sweep placement |
| Light 'Em Up, Clearance Sweep, Elimination Pattern, Foregrip, Long-Range Scope, Camo Cloak (Saturate) | `modifyWeaponRules` (with `targetId`) |
| Strike Fast | provider `moveLimitDelta` (`reposition`, +1) |
| Ice In Your Veins | `onDamageInflicted` (normal, strike-normal), per-sequence ledger |
| For Cadia! | `modifyAttackDice` (atk to 4), `beforeStrike` (+1 first strike, attacker) |
| Rapid Fire | providers `maxRepeats`, `weaponForbidden`, `actionForbidden` |
| Medic!, MEDIKIT | Pathfinders path (3.11): `beforeIncapacitated`, `onDamageInflicted` floor, `startFreeAction({ action: 'dash', endWithinCrOf })`, `Activation.endsAfterAction`; `effects.regainWounds` |
| Melta Mine, Proximity Mine | team marker carried from set-up (`carriedBy`), Place Marker spot filter, `startFreeAction({ action: 'dash' })`; team-local mine check after each action, `directDamage(2D6+3)` (gap `teamMine`) |
| Blast Padding | `modifyDefenceDice` (re-roll one), `onDamageInflicted` `splash` -> 0 |
| Reconnoitre Killzone | ployRule `costAdjust` on Relocate |
| Auspex Scan | token `ks.auspexScan` (`activation.start`, `sourceIncapacitated`), `isScanned` helper, `target.status` (`obscured: false`) |
| Concealed Position | provider `weaponForbidden`, battle ledger of resolved Shoots |
| Camo Cloak | provider `stealthyCover`, `modifyWeaponRules` strips Saturate |
| Adaptive Equipment | provider `ownGrenades` `tpActions { smoke: 1, stun: 1 }` + `extraActions` |
| Battle Comms | unique action, `applyAplEffect` with the 3 check, provider `maxRepeats` 2 |
| Engage from Cover | `modifyDefenceDice` re-roll one when in cover |
| Relocate | ploy, `startFreeSequence` of free Dashes |
| Seize the Initiative | window `firefight.start`, `startDelegatedAction` with a 1 AP non-move allow list |
| Cover Retreat | window `firefight.actionDeclared`, `startFreeAction({ action: 'shoot' })` from the Fall Back's `action.ended` (gap `midActionWindow`) |
| Neutralise Target | window `shoot.beforeAttackRerolls`, grant `any` |
| Give No Ground | windows `firefight.activationStart` / `firefight.actionEnded` / `turningPoint.end`; provider `controlTotal` |
| Relics of Cadia | 0 CP offer at `shoot.attackRolled` / `fight.rolled`, once-per-TP ledger |
| Combat Daggers | equipment `grants` with `grants.to` KASRKIN |

### 11.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/kasrkin/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `ks.<name>`, `ks.w.`, `ks.wg.`, `ks.a.`, `ks.p.`, `ks.e.`; team weapon rule `ks.a.wr-concealed-position`)
  - `src/engine/teams/kasrkin.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/kasrkin.ts` (weapon flavour, VFX family, sound, attachments, a HUD label for the active Skill at Arms picks, figure stand-ins `ks-sergeant`, `ks-combat-medic`, `ks-demo-trooper`, `ks-gunner` with `ks-gunner-b`, `ks-gunner-c`, `ks-gunner-d`, `ks-recon-trooper`, `ks-sharpshooter`, `ks-trooper` with `ks-trooper-b`, `ks-trooper-c`, `ks-trooper-d`, `ks-vox-trooper`; the Gunner's special weapon is an attachment chosen by its loadout)
  - `tests/engine/teams/kasrkin.test.ts` (TEAM-KS-nnn tests) and `tests/engine/teams/kasrkin.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 11 and `12-rules-test-checklist.md` section TEAM-KS (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/kasrkin/team.json`. Flip it (with `defaults` filled: a legal roster under the Gunner/Sharpshooter cap with distinct Gunner weapons, and every weapon in `src/client/teams/kasrkin.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. Batch C: `weaponForbidden` (Concealed Position, Rapid Fire), `moveLimitDelta` (Strike Fast), `splash` (Blast Padding), `ownGrenades.tpActions` (Adaptive Equipment). Existing: Combat Doctrine gambit pattern, Pathfinders Medic!, `stealthyCover`, `startFreeSequence`, `startDelegatedAction`, `controlTotal`, `shoot.beforeAttackRerolls`. Team-local fallbacks for the gaps `teamMine`, `midActionWindow`, `aplCeiling` (11.9). Order: roster and loadouts (TEAM-KS-001, 002), then Skill at Arms (TEAM-KS-003 to 007) and Rapid Fire (TEAM-KS-008), the spine of the team; then Tactical Command (009), Medic! (010), Melta Mine (012, 013).
- Team-local weapon rules the data needs: `ks.a.wr-concealed-position` on the concealed marksman rifle profile only. Core rules elsewhere; hot-shot and pistol are name tests, not weapon rules.
- RULING lines expected: Gunner model, combined cap scope, keyword spacing, Sergeant power weapon (Corrected), Sergeant gun butt, meltagun Dmg, Tactical Command errata and target/cost, Veteran Leadership, Medic! opportunity, MEDIKIT self-target and cost, Melta Mine carry, dying carrier, Proximity Mine trigger, Melta Mine next to a friend, Blast Padding sweeping, Auspex Scan scope, Concealed Position, Camo Cloak, Adaptive Equipment, Battle Comms ceiling, Skill at Arms use, Light 'Em Up and obscured, Ice In Your Veins scope, For Cadia! and retaliating, Rapid Fire, cannot retain any cover saves, Elimination Pattern and Severe, Engage from Cover "in cover", Clearance Sweep distance, Relocate group, Seize the Initiative, Cover Retreat errata and timing, Neutralise Target eligibility, Give No Ground totals, Foregrip scope, Long-Range Scope errata, Relics of Cadia timing.
- Gotchas: section 11.10. Ten operatives use the 10-operative kill grade row. The Gunner is one datacard (do not copy the Hearthkyn five-card pattern). Skills live in two ledgers (team, per operative) read by every skill handler. The Melta Mine is not the universal Mines equipment and must not be flagged with the `mines` code.

## 12. Novitiates

Rule IDs `T-NV.<n>`, checklist IDs `TEAM-NV-<nnn>`. Sources: the team PDF (Novitiates, Faction version 3, August '26 update log state, which lists the August '26 errata and rules commentary plus the previous ones; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia page (faction version 3, August 2026, with an FAQ block of three entries: Whip Into Frenzy with Absolution Through Destruction, Riposte damage, and Null Rod scope). The two agree on every datacard number. Wahapedia lags the PDF errata in two places (Whip Into Frenzy's free Fight and the Defenders of the Faith wording, listed in 12.10); the PDF wins there. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 12.1 Team selection

- T-NV.1 Roster is exactly 10 operatives: 1 NOVITIATE SUPERIOR (leader) plus 9 picks from the main list (T-NV.2). Nothing counts as two selections or half a selection.
  - MECH: roster validator: leader slot count 1, main slot count 9 | CLASS: data
- T-NV.2 Main list: CONDEMNOR, DIALOGUS, DUELLIST, EXACTOR, HOSPITALLER, MILITANT, PENITENT, PRECEPTOR, PRONATUS, PURGATUS, RELIQUARIUS. MILITANT may be taken any number of times; PURGATUS up to two times; every other entry at most once. With ten single entries and nine slots, a roster can never hold all of them.
  - MECH: main slot `repeatable: ["nv.militant", "nv.purgatus"]` plus `selection.caps: [{ "from": ["nv.purgatus"], "max": 2 }]` | CLASS: data
  - RULING: Novitiates Purgatus limit | PURGATUS at most two, MILITANT unlimited, every other entry once | both sources print exactly these limits | Confirmed
- T-NV.3 Loadouts:
  - SUPERIOR: one of three fixed pairs: plasma pistol (both profiles) and power weapon; relic boltgun and gun butt; relic bolt pistol and power weapon.
  - MILITANT: autopistol and Novitiate blade, or autogun and gun butt.
  - CONDEMNOR (Condemnor stakethrower, null rod), DIALOGUS (autopistol, Dialogus stave), DUELLIST (autopistol, duelling blades), EXACTOR (neural whips, both the ranged and the melee weapon), HOSPITALLER (autopistol, surgical saw), PENITENT (autopistol, Penitent eviscerator), PRECEPTOR (Mace of the Righteous only, no ranged weapon), PRONATUS (autopistol, gun butt), PURGATUS (Ministorum flamer, gun butt), RELIQUARIUS (autopistol, gun butt): fixed, no picker.
  - MECH: datacard `weapons.options` `sets` for the Superior (three sets) and the Militant (two sets); the plasma pistol brings its profile group `nv.wg.plasma-pistol`; fixed `weapons` elsewhere | CLASS: data
- T-NV.4 Archetypes: RECON, SECURITY (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["recon", "security"]` | CLASS: data
- T-NV.5 Keywords: every operative carries NOVITIATE, IMPERIUM, ADEPTA SORORITAS plus its role keyword; the Superior also has LEADER; the Hospitaller also has MEDIC. No Novitiate has PSYKER and no Novitiate weapon or action is PSYCHIC. The PDF prints "NOVITIATE ," with a stray space; the keyword is NOVITIATE.
  - MECH: keyword lists in operatives.json | CLASS: data
- T-NV.6 Team-local weapon rules: **Anti-PSYKER** (Condemnor stakethrower and null rod, T-NV.12), **Riposte** (duelling blades, T-NV.15) and **Zealous Rage** (Penitent eviscerator, T-NV.20). Every other weapon rule on the cards is core (R-10).
  - MECH: weapon records carry `{ "rule": "nv.a.wr-anti-psyker" }`, `{ "rule": "nv.a.wr-riposte" }`, `{ "rule": "nv.a.wr-zealous-rage" }`, resolved by the team file | CLASS: team-hook

### 12.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| NOVITIATE SUPERIOR | 3 | 6" | 3+ | 9 | 32 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, LEADER, SUPERIOR |
| NOVITIATE CONDEMNOR | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, CONDEMNOR |
| NOVITIATE DIALOGUS | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, DIALOGUS |
| NOVITIATE DUELLIST | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, DUELLIST |
| NOVITIATE EXACTOR | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, EXACTOR |
| NOVITIATE HOSPITALLER | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, MEDIC, HOSPITALLER |
| NOVITIATE MILITANT | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, MILITANT |
| NOVITIATE PENITENT | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, PENITENT |
| NOVITIATE PRECEPTOR | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, PRECEPTOR |
| NOVITIATE PRONATUS | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, PRONATUS |
| NOVITIATE PURGATUS | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, PURGATUS |
| NOVITIATE RELIQUARIUS | 2 | 6" | 4+ | 7 | 28 | NOVITIATE, IMPERIUM, ADEPTA SORORITAS, RELIQUARIUS |

Notes: only the Superior differs (APL 3, Save 3+, 9 wounds, 32mm). Stats and bases agree between the PDF and Wahapedia for all twelve cards. A ten-operative roster uses the 10-operative kill grade row.

### 12.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Plasma pistol (standard) | R | 4 | 3+ | 3/5 | Range 8", Piercing 1 | Superior (option) |
| Plasma pistol (supercharge) | R | 4 | 3+ | 4/5 | Range 8", Hot, Lethal 5+, Piercing 1 | Superior (option) |
| Relic bolt pistol | R | 4 | 3+ | 3/5 | Range 8", Lethal 5+ | Superior (option) |
| Relic boltgun | R | 4 | 3+ | 3/5 | Lethal 5+ | Superior (option) |
| Gun butt (Superior) | M | 3 | 3+ | 2/3 | none | Superior (option) |
| Power weapon | M | 4 | 3+ | 4/6 | Lethal 5+ | Superior (option) |
| Condemnor stakethrower | R | 4 | 3+ | 3/3 | Anti-PSYKER, Devastating 2, Piercing Crits 1, Silent | Condemnor |
| Null rod | M | 4 | 4+ | 3/3 | Anti-PSYKER, Shock | Condemnor |
| Autopistol | R | 4 | 4+ | 2/3 | Range 8" | Dialogus, Duellist, Hospitaller, Penitent, Pronatus, Reliquarius; Militant (option) |
| Dialogus stave | M | 4 | 4+ | 3/3 | Shock | Dialogus |
| Duelling blades | M | 4 | 3+ | 4/5 | Ceaseless, Riposte | Duellist |
| Neural whips (ranged) | R | 5 | 3+ | 2/3 | Range 3", Lethal 5+, Stun | Exactor |
| Neural whips (melee) | M | 5 | 3+ | 2/3 | Lethal 5+, Shock | Exactor |
| Surgical saw | M | 4 | 4+ | 2/3 | Lethal 5+, Rending | Hospitaller |
| Autogun | R | 4 | 4+ | 2/3 | none | Militant (option) |
| Gun butt | M | 3 | 4+ | 2/3 | none | Militant (option), Pronatus, Purgatus, Reliquarius |
| Novitiate blade | M | 4 | 4+ | 4/5 | none | Militant (option) |
| Penitent eviscerator | M | 4 | 4+ | 5/6 | Brutal, Zealous Rage | Penitent |
| Mace of the Righteous | M | 4 | 4+ | 5/5 | Brutal, Severe | Preceptor |
| Ministorum flamer | R | 4 | 2+ | 4/4 | Range 8", Saturate, Torrent 2" | Purgatus |

Notes: 20 profiles over 19 weapons. Profile group: `nv.wg.plasma-pistol` (standard, supercharge). The neural whips are two separate weapon records (one ranged, one melee) that the Exactor always carries together, not a profile group. Every operative except the Superior and the Preceptor shares the one autopistol record.

UNCLEAR (resolved): the Superior's gun butt is Hit 3+ on its card and Hit 4+ on every other card in both sources. Kept as two records (`nv.w.gun-butt-superior`, `nv.w.gun-butt`). RULING: Novitiates Superior gun butt | a separate 3+ record for the Superior; everyone else shares the 4+ record | both sources print 3+ on the Superior card only | Confirmed
UNCLEAR (resolved): the autogun and the relic boltgun print no Range in either source. Kept as printed: no Range rule. RULING: Novitiates autogun and relic boltgun range | no Range rule, unlimited | both sources print "-" or no Range on those rows while every pistol prints Range 8" | Confirmed
UNCLEAR (resolved): the selection list names "neural whips" once while the datacard prints a ranged and a melee profile. RULING: Novitiates neural whips | two weapon records carried together, both always available | one profile is ranged and one melee, so they cannot be alternatives of one weapon | Confirmed
UNCLEAR (resolved): the Condemnor's weapons print Dmg 3/3, and Anti-PSYKER raises both to 4/4 against a PSYKER. Kept as printed. The layout extract lists Anti-PSYKER first and Wahapedia last; the order has no effect.

### 12.4 Operative rules and unique actions

- T-NV.7 **Inspirational Example** (Superior): whenever the Superior incapacitates an enemy operative, you gain 1 Faith point, or 2 if that enemy's Wounds stat is 12 or more. Damage from the Glorious Martyrdom ploy (T-NV.38) never triggers it.
  - MECH: `damage.inflicted` with `woundsAfter <= 0`, attacker the Superior, source not tagged `nv.martyrdom`; `gainPool(nv.faith, 1 or 2)` by the enemy's datacard Wounds stat | CLASS: generic:teamPool
  - RULING: Novitiates Wounds stat 12 or more | the enemy's printed Wounds stat (its starting wounds) is compared, not its remaining wounds | the rule names the stat | Confirmed
  - RULING: Novitiates Inspirational Example and Glorious Martyrdom | damage dealt through Glorious Martyrdom by a dying Superior gives no Inspirational Example Faith (the ploy's own +1 per enemy still applies) | the card's last sentence | Confirmed
- T-NV.8 **Null Rod: PSYCHIC damage immunity** (Condemnor): a PSYCHIC ranged weapon (any team's PSYCHIC tag, from any distance) cannot inflict damage on the Condemnor. Every kind of damage from that weapon is zero: normal, crit, Devastating and splash. The attack still happens and its other effects (Stun, tokens) still apply.
  - MECH: `onDamageInflicted` on the Condemnor: `amount = 0` when `isPsychicWeapon(weaponId)` and the weapon is ranged | CLASS: generic:psychic
  - RULING: Novitiates Null Rod damage | a PSYCHIC ranged weapon deals no damage of any kind to the Condemnor; its non-damage effects still apply | the rule only says the weapon cannot inflict damage | Unsourced
- T-NV.9 **Null Rod: PSYCHIC selection immunity**: a PSYCHIC action can never select the Condemnor and never treats it as within the action's distances. Per the August '26 rules commentary the same holds for every operative (friend or foe) within 6" of the Condemnor: it cannot be picked for, benefit from, or count for any PSYCHIC rule, even when the PSYCHIC operative is further away.
  - MECH: provider `psychicImmune(op)`: true for an active Condemnor and for any operative within 6" of an active Condemnor; other teams ask `psychicSelectable` | CLASS: generic:psychic
  - RULING: Novitiates Null Rod rules commentary | `psychicImmune` covers the Condemnor and every operative within 6" of it, and other teams' PSYCHIC area rules must ask `psychicSelectable` for each operative they would affect | the rules commentary says PSYCHIC rules have no effect at all within the Null Rod distance | Confirmed
- T-NV.10 **Null Rod: 6" aura**: an operative (either side) within 6" of the Condemnor cannot perform PSYCHIC actions, cannot use its PSYCHIC additional rules and cannot use PSYCHIC ranged weapons. Measured in straight-line distance, no visibility needed; checked when the action, rule or weapon would be used. An incapacitated or removed Condemnor has no effect.
  - MECH: provider `psychicBlocked(op)`: true while an active Condemnor is within 6"; the shared code applies it to unique actions and ranged weapons; other teams' PSYCHIC additional rules ask `psychicAllowed` | CLASS: generic:psychic
- T-NV.11 **Null Rod: PSYCHIC melee nerf**: while an operative is within 6" of the Condemnor, its PSYCHIC melee weapons have no weapon rules at all (Lethal, Rending, team rules such as Siphon Life all gone) and their Dmg cannot exceed 3/4.
  - MECH: Novitiate team code: `modifyWeaponRules` strips every rule from a PSYCHIC melee weapon of an operative within 6" of an active Condemnor (identification still uses the stored tag via `isPsychicWeapon`); `modifyDamage` caps normal at 3 and crit at 4; a clamp in `onDamageInflicted` (`strike-normal` <= 3, `strike-crit` <= 4) for that weapon guarantees the cap after every other team's Dmg modifier | CLASS: team-hook (generic:psychic)
  - RULING: Novitiates Null Rod melee cap | the 3/4 cap is applied after every other Dmg modifier, and the weapon still counts as PSYCHIC for identification after losing its rules | "cannot have Dmg stats higher than" is a final cap; the weapon's nature does not change | Unsourced
- T-NV.12 **Anti-PSYKER** (team-local weapon rule; Condemnor stakethrower, null rod): when the weapon is used against an operative with the PSYKER keyword, both its Dmg values go up by 1 and it gains Lethal 5+. Devastating 2 is unchanged.
  - MECH: `modifyDamage` +1/+1 and `modifyWeaponRules` adds `core.wr.lethal` 5 when the opponent `hasKeyword(PSYKER)` | CLASS: team-hook
  - RULING: Novitiates Anti-PSYKER | applies against any operative with PSYKER (any team), raises Normal and Critical Dmg only (Devastating stays 2) | as printed | Confirmed
- T-NV.13 **STIRRING RHETORIC** (Dialogus, 1 AP, SUPPORT): pick another friendly NOVITIATE operative that is either visible to and within 6" of the Dialogus, or within 6" of your Auto-broadcaster marker (no visibility for the marker distance). Its APL goes up by 1 until the end of its next activation, but never above 3 in total. Not while in an enemy's control range.
  - MECH: unique action, support APL boost to a filtered friendly target (as T-PF.10) with the two distance tests; `applyAplEffect` +1 until the end of its next activation | CLASS: team-hook
  - RULING: Novitiates Stirring Rhetoric cap | with base APL 2 the "at most 3" clause equals the R-9.6 cap; the Superior (APL 3) can never gain, so operatives already at APL 3 or more are not offered | an offer that changes nothing is a dead choice | Unsourced
  - RULING: Novitiates Stirring Rhetoric distances | a Comms Device the Dialogus controls adds 3" to both 6" distances | M-5.1 extends every SUPPORT distance that names friendly operatives, and both do | Unsourced
- T-NV.14 **AUTO-BROADCASTER** (Dialogus, 0 AP): if your Auto-broadcaster marker is not in the killzone, place it within 8" horizontally of the Dialogus; otherwise move it up to 8" horizontally. While an enemy operative within 3" of the marker is shooting, fighting or retaliating, its player cannot re-roll attack dice (Command Re-roll included). The marker is removed when the Dialogus is removed from the killzone. Not while in an enemy's control range.
  - MECH: unique action placing a team marker (Cloud of Flies pattern, `placementSpots` within 8" horizontally of the Dialogus or of the marker's current spot); provider `rerollsBanned` for the attack side of an enemy within 3" of the marker; removal on the Dialogus's `operative.incapacitated` removal | CLASS: team-hook
  - RULING: Novitiates Auto-broadcaster placement | any sampled spot on the killzone or terrain within 8" horizontally (height ignored), no visibility needed; as a 0 AP action it is once per activation (R-3.7) and never a counteraction (a counteraction is a 1 AP action, R-3.12) | the card measures "horizontally" and names no visibility | Unsourced
  - RULING: Novitiates Auto-broadcaster ban | only attack dice re-rolls are banned (defence re-rolls stay); the enemy's distance is checked when it rolls | the card names attack dice | Confirmed
- T-NV.15 **Riposte** (team-local weapon rule; duelling blades): whenever the Duellist blocks with a crit while fighting or retaliating with the duelling blades, it also inflicts damage equal to the weapon's Critical Dmg (5) on its opponent in that sequence. Per the rules commentary this is damage from an attack die: the opponent's damage-reducing or ignoring rules apply. If it incapacitates the opponent, the sequence ends (R-6.7).
  - MECH: attack hook `afterBlock` (die `crit`, the Duellist's weapon is the duelling blades): `inflict` with source `strike-crit` and the weapon's crit Dmg after modifiers | CLASS: generic:afterBlock
  - RULING: Novitiates Riposte | used automatically on every crit block (no prompt); dealt as a crit strike so per-die reductions apply | the rules commentary says the damage counts as attack-die damage; the extra damage never hurts its user | Confirmed
- T-NV.16 **WHIP INTO FRENZY** (Exactor, 1 AP): pick another friendly NOVITIATE operative other than the SUPERIOR, visible to and within 3" of the Exactor, that is not already under this effect. Until the end of its next activation: APL +1 (R-9.6 cap), Move +1", and in that activation it may perform two Fight actions, one of which is free (August '26 errata). A Whip Into Frenzy token marks it. Not while in an enemy's control range.
  - MECH: unique action with a friendly filter (not SUPERIOR, no `nv.whip` token); token `nv.whip` (expiry: end of the target's next activation); `applyAplEffect` +1; provider `moveDelta` +1; provider `maxRepeats` 2 for `fight` in that activation; provider `actionCostDelta` -1 for the first `fight` of that activation (the free one) | CLASS: team-hook
  - RULING: Novitiates Whip Into Frenzy errata | one of the two Fights is free: the first Fight of that activation costs 0 AP | the August '26 PDF errata adds the free Fight and Wahapedia omits it; making the first one free equals any other choice and also helps when only one Fight is made | Corrected
  - RULING: Novitiates Whip Into Frenzy duration | the effect lasts to the end of the target's next activation (this TP if it is still ready, otherwise next TP); a counteraction is not an activation and neither uses nor ends it | "next activation" is the core term (R-3.1) | Unsourced
- T-NV.17 **Medic!** (Hospitaller): the first time each TP that another friendly NOVITIATE operative visible to and within 3" of the Hospitaller would be incapacitated, you may use this rule, provided neither of the two is in an enemy's control range, the Hospitaller is not incapacitated, and (in a Shoot action) the Hospitaller is not a primary or secondary target. Effect: the friendly operative is not incapacitated, is left on 1 wound and cannot be incapacitated for the rest of that action. When the action ends it may perform a free Dash that must end within the Hospitaller's control range. Both operatives then have APL -1 until the end of their next activations, and if this happened during the saved operative's own activation, that activation ends.
  - MECH: the Pathfinders Medic! implementation (T-PF.14, 3.11) as Hearthkyn T-HK.11: `beforeIncapacitated` sets `wounds: 1`, `onDamageInflicted` floor for the rest of the action, free Dash via `startFreeAction({ action: 'dash', endWithinCrOf })` after the action, `Activation.endsAfterAction`, once-per-TP ledger, Medic token | CLASS: team-hook
  - RULING: Novitiates Medic! opportunity | only the first qualifying moment each TP is offered, declining spends it, the AI always accepts; the free Dash is optional and skipped when no end point lies in the Hospitaller's control range | same wording as the Pathfinders card; same ruling | Unsourced
- T-NV.18 **CHIRURGEON'S TOOLS** (Hospitaller, 1 AP): one friendly NOVITIATE operative in the Hospitaller's control range regains up to 2D3 lost wounds (never above its starting wounds). It cannot pick an operative that Medic! saved this TP. Not while in an enemy's control range.
  - MECH: unique action with a friendly-target filter (in CR, not this TP's Medic! target), `effects.regainWounds(2D3)` | CLASS: data
  - RULING: Novitiates Chirurgeon's Tools self-target | the Hospitaller may heal itself | an operative is within any distance of itself (R-8.3) and, unlike Medic!, the text does not say "other" | Unsourced
- T-NV.19 **Militant Faith** (Militant): when the Militant is shooting, fighting or retaliating and you used an ACT OF FAITH in that sequence, the Faith points spent on that act are given back if an enemy operative is incapacitated during that sequence. With Icon of Faith (two acts in the sequence) only one act's points come back.
  - MECH: per-sequence ledger of acts paid while the Militant is the attacker or a fighter; `operative.incapacitated` (or `damage.inflicted` with `woundsAfter <= 0`) on an enemy during that sequence refunds via `gainPool` once per sequence; acts used while the Militant is being shot are excluded | CLASS: generic:teamPool
  - RULING: Novitiates Militant Faith | any enemy incapacitated during that sequence qualifies (the target, or the enemy fighter); acts used while the Militant is only defending are never refunded; with Icon of Faith the larger cost is refunded automatically; a free Auto-chastisers act refunds nothing | the rule names the Militant's own shooting, fighting or retaliating; "your choice" is always the larger refund | Unsourced
- T-NV.20 **Zealous Rage** (team-local weapon rule; Penitent eviscerator): while the Penitent is fighting with the eviscerator, the weapon has Ceaseless. Not when retaliating.
  - MECH: `modifyWeaponRules` adds `core.wr.ceaseless` when the Penitent is the attacker of the fight | CLASS: team-hook
  - RULING: Novitiates Zealous Rage when retaliating | no Ceaseless when retaliating | 2024 rules separate "fighting" from "retaliating" (Legionaries T-LG.28 ruling), and this card names fighting only | Confirmed
- T-NV.21 **Absolution Through Destruction** (Penitent): after the Penitent performs a Fight action, if it is not incapacitated it may at once perform a free Fight action. This beats action restrictions, but the rule never produces more than two Fights in a row (its own free Fight does not trigger it again). While the Penitent is under Whip Into Frenzy, each of the two Whip Fights gets its own free follow-up, so per the rules commentary it may fight up to four times in that activation. The free Fight keeps the Fight conditions (an enemy in its control range).
  - MECH: 0 CP offer to the Penitent's seat in `firefight.actionEnded` when the last action was a Fight by the Penitent that was not itself an Absolution Fight, the Penitent is active and `canStartFreeAction({ action: 'fight' })`; `startFreeAction({ action: 'fight', resume: 'nv.absolution' })` (a free frame, so it never counts against the activation's Fight repeats); per-Fight ledger keyed by `performed.length` so a closed free frame does not re-offer | CLASS: team-hook
  - RULING: Novitiates Absolution with Whip Into Frenzy | up to four Fights: Whip gives two (one free, T-NV.16) and each is followed by an optional free Absolution Fight; Absolution Fights never count against the Whip limit | the PDF rules commentary and the Wahapedia FAQ both say up to four | Confirmed
  - RULING: Novitiates Absolution timing | offered only right after the Fight (declining loses it), also after a counteraction's Fight; it never follows a retaliation | "immediately" and "performs the Fight action"; a counteraction still performs the action | Unsourced
- T-NV.22 **Unflinching Example** (Preceptor): whenever the Preceptor incapacitates a ready enemy operative within its control range, you gain 1 Faith point, or 2 if that enemy's Wounds stat is 12 or more. Glorious Martyrdom damage from a dying Preceptor counts (only the Superior's card excludes it).
  - MECH: `damage.inflicted` with `woundsAfter <= 0`, attacker the Preceptor, enemy not expended and within the Preceptor's control range at that moment; `gainPool` | CLASS: generic:teamPool
  - RULING: Novitiates Unflinching Example ready | an enemy stays ready until its activation ends, so an enemy killed while fighting in its own activation qualifies; a counteracting or already activated enemy is expended and does not | R-3.10 makes an operative expended when its activation is finished | Confirmed
  - RULING: Novitiates Unflinching Example and Glorious Martyrdom | damage the ploy deals for a dying Preceptor can trigger it | the Superior's card carries an explicit exclusion and the Preceptor's does not | Unsourced
- T-NV.23 **Glorious Hymnal** (Preceptor, SUPPORT): every friendly NOVITIATE operative within 3" of the Preceptor (the Preceptor included) has Severe on its weapons. No visibility needed.
  - MECH: `modifyWeaponRules` adds `core.wr.severe` for friendly NOVITIATE operatives within 3" of an active Preceptor (6" while the Preceptor controls a Comms Device, M-5.1) | CLASS: team-hook
  - RULING: Novitiates Glorious Hymnal | the Preceptor counts itself; a Comms Device extends the distance to 6" | an operative is within any distance of itself (R-8.3); M-5.1 extends SUPPORT distances naming friendly operatives | Unsourced
- T-NV.24 **Relic Seeker** (Pronatus): once during each of its activations, the Pronatus may perform Pick Up Marker, Place Marker or a mission action for 1 less AP (never below 0).
  - MECH: data `costDelta { actions: ['marker:pickUp', 'marker:place', 'mission-action'], delta: -1 }` with `limit: 'oncePerActivation'` | CLASS: data
  - RULING: Novitiates Relic Seeker in v1 | applies to v1 mission actions (SECURE, LOOT, INITIATE TRANSMISSION); the Pick Up and Place Marker part is inert because v1 missions have no pick-up markers | M-3.1 to M-3.5 and R-4.5 | Confirmed
- T-NV.25 **Divine Acquisition** (Pronatus): once per TP, when the Pronatus performs a mission action that needs it to control an objective or mission marker, you gain Faith points equal to the TP number. A Divine Acquisition token marks the use.
  - MECH: `action.ended` for an `ability:<id>` with keyword MISSION whose condition is "controls an objective marker" (SECURE, LOOT, INITIATE TRANSMISSION), performed by the Pronatus; `gainPool(nv.faith, turningPoint)`; once-per-TP ledger | CLASS: generic:teamPool
  - RULING: Novitiates Divine Acquisition | all three v1 mission actions qualify (each requires controlling an objective); the Faith is gained when the action ends | M-3.1, M-3.3, M-3.5 all need the operative to control the marker | Unsourced
- T-NV.26 **Purge with Flame** (Purgatus): once per TP per Purgatus, Blazing Inferno (T-NV.39) costs 0 CP when this Purgatus is the operative it names. The card calls the ploy "Inferno"; it means Blazing Inferno. The ploy itself is still once per TP (R-3.13), so two Purgatus never give two uses.
  - MECH: ploy rule `costAdjust` sets 0 CP for `nv.p.blazing-inferno` when the shooter is a Purgatus that has not used this TP; per-operative ledger | CLASS: team-hook
  - RULING: Novitiates Purge with Flame | "Inferno" is the Blazing Inferno firefight ploy; the free use does not lift the once-per-TP ploy limit | it is the only ploy naming the Ministorum flamer, and R-3.13 limits each firefight ploy to once per TP | Confirmed
- T-NV.27 **Icon Bearer** (Reliquarius): when marker control is worked out (R-8.6), its APL counts as 1 higher. Not an APL change, so it stacks with real APL changes and ignores the R-9.6 cap.
  - MECH: provider `controlApl` (apl + 1) | CLASS: team-hook
- T-NV.28 **RAISE ICON** (Reliquarius, 1 AP): you gain 1 Faith point, plus Faith points equal to the TP number if the Reliquarius controls an objective marker. Once per TP; not while in an enemy's control range.
  - MECH: unique action with `limit: 'oncePerTurningPoint'`; team code `gainPool(nv.faith, 1 + (controls an objective ? turningPoint : 0))` | CLASS: generic:teamPool
  - RULING: Novitiates Raise Icon control | "controls" is the R-8.6 control test at the moment the action resolves, including the Icon Bearer bonus | Icon Bearer changes how control is determined for this operative | Unsourced

### 12.5 Faction rules

- T-NV.29 **ACTS OF FAITH: Faith points**: the Novitiates player keeps a public pool of Faith points (no cap, carried from TP to TP, never reset). In the Ready step of each Strategy phase they gain half the number of friendly NOVITIATE operatives that are not incapacitated, rounding up (TP1 with ten operatives: 5). Other sources: Inspirational Example, Unflinching Example, Divine Acquisition, Raise Icon, Glorious Martyrdom; Militant Faith refunds.
  - MECH: `src/engine/pools.ts` kind `nv.faith`; `turningPoint.start` handler `gainPool(ceil(n / 2))`; `PoolChanged` event; HUD chip labelled through `TeamPresentation.pools` | CLASS: generic:teamPool
  - RULING: Novitiates Faith pool | no maximum, kept between TPs, public to both players | the source prints no cap or reset; the Faith tokens (values 1 and 2) only track the count | Confirmed
  - RULING: Novitiates Faith Ready-step count | counts friendly NOVITIATE operatives not incapacitated at that Ready step, rounded up after halving | as printed | Confirmed
- T-NV.30 **ACTS OF FAITH: use**: when a friendly NOVITIATE operative is shooting, fighting or retaliating (its attack dice, Roll Attack Dice step), or is being shot (its defence dice, Roll Defence Dice step), you may spend Faith points on one ACT OF FAITH (T-NV.31 to T-NV.33). At most one act per sequence (Icon of Faith allows two different ones, T-NV.42). Each Blast or Torrent target is its own sequence. Acts apply to your own dice only. Being fought means retaliating, so the Novitiate uses its attack dice.
  - MECH: 0 CP offers through `registerPloyRule` `extraOffers` for the Novitiates seat in the roll windows: Guidance in `shoot.beforeAttackRerolls`, `shoot.defenderBeforeRerolls`, `fight.beforeRerolls`; Blessing and Intervention in `shoot.attackRolled`, `shoot.defenceRolled`, `fight.rolled`; offers only while the pool covers the cost and no act was used in the sequence (per-sequence ledger keyed by attack and sequence index); `spendPool` on use; abilities `nv.a.guidance`, `nv.a.blessing`, `nv.a.intervention` | CLASS: generic:teamPool
  - RULING: Novitiates Acts of Faith timing | Guidance is offered on the fresh roll as a re-roll grant that joins the normal re-roll choices; Blessing and Intervention are offered once all re-rolls are done, before weapon-rule retentions (Punishing, Rending, Severe) | the faction rule puts every act inside the Roll step; R-9.3 lets a player with several re-rolls order them; a retention change must exist before Rending and Punishing look for crits | Unsourced
  - RULING: Novitiates one act per sequence | the limit counts both sides together when a Novitiate is both attacking and defending in one sequence (a friendly Blast); the AI never spends on such a sequence | the limit is per sequence, not per side | Unsourced
- T-NV.31 **GUIDANCE** (1 Faith point): re-roll one of your dice. A die already re-rolled cannot be re-rolled again, and a die retained without rolling (cover save, Accurate) cannot be re-rolled (R-9.2). If the operative's re-rolls are banned (Auto-broadcaster of an enemy Dialogus, Suppressing Fire), Guidance is not offered.
  - MECH: offer adds a `RerollGrant { mode: 'one', tag: 'nv.guidance' }` to the side; Faith spent when the offer is taken (passing the grant later wastes it) | CLASS: generic:teamPool
  - RULING: Novitiates Guidance spend | the Faith point is spent when the act is chosen, even if the player then passes the re-roll | the act is used when chosen | Unsourced
- T-NV.32 **BLESSING** (2 Faith points): retain one of your normal successes as a crit instead. A Blessing crit counts as a retained crit for Rending, Punishing, Piercing Crits and Devastating, and it switches Severe off (a crit is retained). Never offered when the sequence's target is obscured (R-5.8). A cover-save die is not changed.
  - MECH: team code turns one `normal` die to `crit` with `tag: 'nv.blessing'` (tags survive `reclassify`, as Grudge T-HK.28) | CLASS: generic:teamPool
  - RULING: Novitiates Blessing and other rules | a Blessing crit triggers Rending, Punishing, Piercing Crits and Devastating, and stops Severe; no Blessing against an obscured target; a cover save cannot be upgraded | R-5.7 retention order, R-5.8 obscured beats every crit-making rule; a cover save is retained by a rule | Unsourced
- T-NV.33 **INTERVENTION** (3 Faith points): retain one of your fails as a normal success instead of discarding it. Works on attack and on defence dice.
  - MECH: team code turns one `fail` die to `normal` with `tag: 'nv.intervention'` | CLASS: generic:teamPool

### 12.6 Ploys

The source prints no costs: every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5).

- T-NV.34 **ARDENT VENGEANCE** | Strategy | 1 CP | Gambit step | When a friendly NOVITIATE operative is shooting, fighting or retaliating against an expended enemy operative, its weapons have Punishing. Checked per target.
  - MECH: `modifyWeaponRules` adds `core.wr.punishing` when the opponent of the sequence is expended | CLASS: team-hook
  - RULING: Novitiates Ardent Vengeance expended | an enemy fighting in its own activation is still ready (no Punishing when retaliating against it); an enemy that counteracts or was already activated this TP is expended | R-3.10 | Confirmed
- T-NV.35 **DEFENDERS OF THE FAITH** | Strategy | 1 CP | Gambit step | When an operative is shooting, fighting or retaliating against a friendly NOVITIATE operative that contests an objective marker or one of your mission markers, in the Resolve Attack Dice step you may halve the damage from one normal success (rounding up, never below 2).
  - MECH: `onDamageInflicted` on the Novitiate (sources `normal`, `strike-normal`), once per sequence, `amount = max(2, ceil(amount / 2))` when the Novitiate contests a qualifying marker (Secure Salvage pattern, T-HK.26) | CLASS: team-hook
  - RULING: Novitiates Defenders of the Faith errata | normal successes only, and own mission markers qualify as well as objectives | the August '26 PDF errata; Wahapedia keeps the older text | Corrected
  - RULING: Novitiates Defenders of the Faith use | applied automatically to the first normal success of 3 or more damage in the sequence; contest is checked at that moment; v1 missions have no Novitiate mission markers, so only objectives count | the halving gains nothing below 3, and the hook cannot ask | Unsourced
- T-NV.36 **BLESSED REJUVENATION** | Strategy | 1 CP | Gambit step | Whenever you spend Faith points, at the end of that action the friendly operative you spent them on may regain up to D3 lost wounds. Nothing when it was incapacitated during that action, or when the act cost no Faith (Auto-chastisers).
  - MECH: ledger of Faith spends per operative during the current action (acts and Sanctified Rounds; refunded points still count); at action end (`action.ended`, also the enemy's Shoot when the Novitiate defended) `effects.regainWounds(D3)` per spend for each operative still active | CLASS: team-hook
  - RULING: Novitiates Blessed Rejuvenation count | one D3 per spending event (two acts through Icon of Faith, or acts in several Blast or Torrent sequences, give one D3 each), all rolled at the end of the action; a Medic!-saved operative was not incapacitated and does heal | "whenever you spend" triggers on each spend | Unsourced
- T-NV.37 **RIGHTEOUS ADVANCE** | Strategy | 1 CP | Gambit step, not in TP1 | Up to one third (rounding down, at least 1) of the friendly NOVITIATE operatives in the killzone may each perform a free Dash, one at a time in your chosen order. Each that Dashes must end closer to its closest enemy operative, its closest objective marker, or the opponent's drop zone (chosen per operative).
  - MECH: ploy with the multi-operative free Dash pattern (Recon Sweep T-PF.31: `ability.choice` per operative plus done, `startFreeAction({ action: 'dash' })`); count `max(1, floor(n / 3))` at use; end constraint through provider `moveSurcharge` +999 for an end point that is not closer to any of the three references (references fixed in the frame data at the Dash's start); TP>1 gate | CLASS: team-hook
  - RULING: Novitiates Righteous Advance closer | a Dash qualifies when its end point is strictly closer than its start to at least one of: the enemy operative closest at the start, the objective marker closest at the start, the opponent's drop zone (distance 0 inside it); no explicit pick is needed | "you can choose separately for each" means any one of the three suffices | Unsourced
- T-NV.38 **GLORIOUS MARTYRDOM** | Firefight | 1 CP | A friendly NOVITIATE operative is incapacitated, before it is removed | For each enemy operative visible to and within 2" of it, you gain 1 Faith point and that enemy takes D3 damage (rolled separately).
  - MECH: ploy in the `operative.incapacitated` window; `gainPool` per enemy; `directDamage(D3)` per enemy with attacker the dying operative and tag `nv.martyrdom`; removals follow R-5.18 | CLASS: team-hook
  - RULING: Novitiates Glorious Martyrdom | needs a real incapacitation (an operative saved by Medic! never qualifies); the damage is attributed to the dying operative (so Unflinching Example can trigger, Inspirational Example cannot) | the August '26 errata places it before removal; T-NV.7's exclusion implies the attribution | Confirmed
- T-NV.39 **BLAZING INFERNO** | Firefight | 1 CP | A friendly NOVITIATE operative shooting with a Ministorum flamer inflicts damage with a crit | The target gains your Blaze token (one at most). Whenever an operative with your Blaze token is activated: it takes D3 damage, then its player may give it APL -1 until the end of that activation to remove the token; that choice is made before it performs any action.
  - MECH: `damage.inflicted` records flamer crit damage per target during the action; the ploy is offered in `shoot.resolved` with one option per such target still in the killzone; token `nv.blaze` (cap 1, battle); `activation.start` deals `directDamage(D3)`; then a 0 CP offer to the token holder's seat in `firefight.activationStart` (Novitiate ploy rule `extraOffers` for that seat): remove the token with a timed APL -1 to the end of the activation | CLASS: team-hook
  - RULING: Novitiates Blazing Inferno target | one target per use, picked at the end of the Shoot action among the targets a crit damaged in it | the ploy names one target; the end of the action is the first window after every Torrent sequence | Unsourced
  - RULING: Novitiates Blaze token timing | the D3 comes at each activation start (counteractions are not activations); the APL -1 choice is offered to the token holder before its first action, and the AI takes it except in the last TP | "is activated" is the core term; lifecycle hooks cannot ask, so the choice uses the activation-start window | Unsourced
- T-NV.40 **BLINDING AURA** | Firefight | 1 CP | An enemy operative performing the Shoot action selects a friendly NOVITIATE operative as its (primary) valid target | Until that enemy's activation or counteraction ends, while the friendly operative is more than 2" from that enemy, the opponent cannot select it as a valid target. The opponent picks another target; if there is none the action ends (it counts as performed, it is not cancelled). No effect on secondary targets (Blast, Torrent).
  - MECH: Novitiates offer in `shoot.targetSelected` (the window opens for both seats) when the current target is the primary; effect `nv.blindingAura` (enemy id, friendly id, ends with that activation or counteraction); `beforeShootTargetSelect` removes the friendly from that enemy's candidates while more than 2" away; then the team-local re-target (12.9 `shootRetarget`) | CLASS: team-hook (gap `shootRetarget`)
  - RULING: Novitiates Blinding Aura | the re-pick is the attacker's choice among the remaining valid targets with the same weapon; with none the Shoot ends as performed; the ban also covers that enemy's later Shoots in the same activation or counteraction | the ploy forbids selecting the operative for the rest of that activation and says the action ends rather than is cancelled | Unsourced
- T-NV.41 **GUIDED BY FAITH** | Firefight | 1 CP | A friendly NOVITIATE operative performs the Shoot action, as it selects a ranged weapon | Until the action ends, while it shoots an operative within 6", that weapon has Seek Light.
  - MECH: firefight ploy in `firefight.actionDeclared` when the action is Shoot; `modifyWeaponRules` adds `core.wr.seek-light` against targets within 6"; `beforeShootTargetSelect` adds Conceal-in-Light-cover enemies within 6" that Seek Light makes valid (as Spot, T-HK.22) | CLASS: team-hook
  - RULING: Novitiates Guided by Faith timing | offered when the Shoot is declared, before the weapon and the target are picked, and applies to whichever ranged weapon is then chosen | Seek Light must be known when valid targets are listed; the engine has no window between weapon and target selection | Unsourced

### 12.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-NV.42 **ICON OF FAITH** | Once per TP, you may use up to two ACTS OF FAITH in one sequence, as long as they are different acts. This beats the one-act limit. An Icon of Faith token marks the use.
  - MECH: the act offers of T-NV.30 stay open after the first act when the Icon is equipped and unused this TP, listing only the other acts; the TP ledger is spent when the second act is taken | CLASS: generic:teamPool
  - RULING: Novitiates Icon of Faith | the Icon's once-per-TP use is spent only when a second act is actually used; the second act may come in a later window of the same sequence (Guidance before re-rolls, Blessing or Intervention after) | the Icon matters only when two acts happen | Unsourced
- T-NV.43 **SANCTIFIED ROUNDS** | When a friendly NOVITIATE operative is shooting with an autogun, autopistol, relic bolt pistol or relic boltgun and you spend a Faith point, that weapon has Piercing Crits 1 until the end of that sequence.
  - MECH: `modifyWeaponRules` adds `core.wr.piercing-crits` 1 when Faith was spent in the current sequence by the Novitiates seat for that shooter; a standalone 1 Faith offer (ability `nv.a.sanctified-rounds`) in `shoot.attackRolled` when no Faith was spent in the sequence yet; it is not an ACT OF FAITH | CLASS: generic:teamPool
  - RULING: Novitiates Sanctified Rounds spend | any Faith point spent in that sequence qualifies, whether on an ACT OF FAITH or on its own (one point offered by itself when nothing else was spent); a free Auto-chastisers act spends nothing and does not qualify | "if you spend a Faith point" does not tie the spend to an act, and both readings are covered | Unsourced
- T-NV.44 **AUTO-CHASTISERS** | Once per TP, when a friendly NOVITIATE operative is shooting, fighting or retaliating, in the Roll Attack Dice step you may inflict 1 to 3 damage on it (never enough to incapacitate it); if you do, you may use one ACT OF FAITH for free in that sequence whose cost is no more than that damage. An Auto-chastisers token marks the use.
  - MECH: extra offers next to each act offer on attack rolls only: "Guidance (1 damage)", "Blessing (2 damage)", "Intervention (3 damage)", shown only while the operative has more wounds than the damage; self `directDamage`; the act is applied at 0 Faith; TP ledger | CLASS: generic:teamPool
  - RULING: Novitiates Auto-chastisers | the damage equals the chosen act's cost; the free act is the sequence's one act (Icon of Faith can add a second, paid one); attack dice only, never defence; a stat change from the damage (injury) applies after the action (R-3.16) | the equipment does not say it beats the one-act limit, and it names the Roll Attack Dice step | Unsourced
- T-NV.45 **HOLY EMBROCATIONS** | Friendly NOVITIATE operatives ignore the Move reduction from being injured. Their weapons' Hit worsening still applies.
  - MECH: provider `moveDelta` +2 for an injured friendly NOVITIATE operative that does not already ignore injury (`flags.ignoreInjured`) (gap `injuredMoveOnly`) | CLASS: team-hook
  - RULING: Novitiates Holy Embrocations | only the Move part of injury is ignored | the equipment names the Move stat only | Confirmed

Marker/token guide (UI): Blaze token, Whip Into Frenzy token, Medic token, Divine Acquisition token, Icon of Faith token, Auto-chastisers token, Faith points (HUD pool chip; the printed tokens have values 1 and 2), Auto-broadcaster marker.

### 12.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-NV: TEAM-NV-000 to TEAM-NV-034.

### 12.9 Generic capabilities (survey; resolved in the Engine map below)

- **teamPool** (MUST, built in the batch C prep): the Faith pool, `nv.faith`, gained in the Ready step and from five other rules, spent by offers in the roll windows, refunded by Militant Faith, shown in the HUD. Used by T-NV.7, T-NV.19, T-NV.22, T-NV.25, T-NV.28 to T-NV.33, T-NV.36, T-NV.38, T-NV.42 to T-NV.44.
- **psychic** (MUST, built): `psychicBlocked` (within 6" of the Condemnor) and `psychicImmune` (the Condemnor and, per the rules commentary, every operative within 6" of it); damage immunity from PSYCHIC ranged weapons and the PSYCHIC melee nerf are Novitiate team code. Used by T-NV.8 to T-NV.11. Convention for other teams: a PSYCHIC rule that benefits or affects operatives in an area must ask `psychicSelectable` for each one.
- **afterBlock** (MUST, built): Riposte. Used by T-NV.15.
- **shootRetarget** (gap, NICE): after a defender's ploy at `shoot.targetSelected` makes the chosen primary invalid, the attacker re-picks a valid target with the same weapon (Blast or Torrent secondaries recomputed around the new primary), or the Shoot ends as performed when none is left. Used by T-NV.40. Fallback (team-local): after Blinding Aura is used, list the shooter's `validTargets` minus the barred operative; with none, end the attack as performed (AP spent, the action counts for R-3.7, no dice rolled); with one or more, raise an `ability.choice` for the attacking seat and call `redirectAttack(ctx, chosen, status of chosen)`; for a Blast weapon also replace the secondaries with `blastSecondaries` of the new primary; for a Torrent weapon keep only the secondaries still within range of the new primary (the attacker does not re-pick them). RULING covers it.
- **injuredMoveOnly** (gap, NICE): ignoring only the Move part of injury. Used by T-NV.45. Fallback: provider `moveDelta` +2 for an injured operative of the team without `flags.ignoreInjured` (the injury's -2" is cancelled; the Hit worsening stays).
- **moveEndCloser** (no new capability): Righteous Advance reuses the Recon Sweep end-point constraint (`moveSurcharge` +999). Used by T-NV.37.
- Everything else maps onto existing providers, hooks, windows and 0 CP offers (Engine map).

### 12.10 Gotchas

- PDF wins over Wahapedia in two places, each with a Corrected RULING: Whip Into Frenzy gives two Fights, one of them free (August '26 errata); Defenders of the Faith covers normal successes only and also own mission markers.
- Faith points are a team pool, not CP and not dice: there is no stored die value to swap in (that is the 40k Miracle dice mechanic, an edition leak). Gain is ceil(alive / 2) each Ready step; no cap; no reset.
- One ACT OF FAITH per sequence. Each Blast or Torrent target is a new sequence, so a Torrent flamer can use one act per target. Icon of Faith allows a second, different act once per TP. Auto-chastisers' free act is still the sequence's act.
- Acts work on your own dice only: attack dice when the Novitiate shoots, fights or retaliates; defence dice only when it is shot. In a fight there are no defence dice.
- Blessing does nothing against an obscured target (R-5.8). A Blessing crit switches Severe off (Glorious Hymnal users may prefer not to Bless). Guidance cannot re-roll a die twice or a cover save.
- Null Rod: PSYCHIC ranged weapons do no damage to the Condemnor from any range; within 6" of it nobody can use PSYCHIC actions, PSYCHIC ranged weapons or PSYCHIC rules, and nobody within 6" can be picked or helped by a PSYCHIC rule (rules commentary). PSYCHIC melee weapons within 6" lose all their rules and cap at 3/4. Novitiates themselves have nothing PSYCHIC.
- Anti-PSYKER needs the PSYKER keyword (Legionaries Balefire Acolyte, for example), not merely PSYCHIC weapons.
- Riposte damage counts as attack-die damage (enemy reductions apply) and can end the fight.
- Whip Into Frenzy: not on the Superior, not on an operative already whipped; +1 APL (cap), +1" Move, two Fights with the first one free, all for the target's next activation only.
- Penitent: Absolution gives a free Fight after each of its Fights (never after the free one); with Whip it reaches four Fights. Zealous Rage gives Ceaseless only when it is the attacker, never when retaliating.
- Medic! is the Pathfinders/Hearthkyn rule; a Medic! save is not an incapacitation (no Glorious Martyrdom). Chirurgeon's Tools cannot heal this TP's Medic! target.
- Inspirational Example (Superior) is any incapacitation; Unflinching Example (Preceptor) needs a ready enemy within its control range. Both give 2 Faith against a Wounds stat of 12+.
- Stirring Rhetoric reaches through the Auto-broadcaster marker; the marker's re-roll ban hits enemy attack dice only. The Auto-broadcaster action is 0 AP: once per activation and never as a counteraction.
- Relic Seeker's marker part and Defenders of the Faith's mission-marker part are inert in v1 (no pick-up or Novitiate mission markers).
- Purge with Flame makes Blazing Inferno free, but the ploy is still once per TP for the team. The card's "Inferno" means Blazing Inferno.
- Blinding Aura only works on the primary target selection and lasts the enemy's whole activation or counteraction; the Shoot ends (as performed) if nothing else is valid.
- Ardent Vengeance needs an expended enemy: an enemy fighting in its own activation is still ready.
- Edition leaks to reject: nothing from the 2021 Novitiates (older Acts of Faith, Faith point costs or ploys), no 40k 10th Sororitas (Miracle dice, Acts of Faith replacing a roll with a stored die, invulnerable saves, Deny the Witch); inches only, three defence dice, every printed number from the August '26 cards.

### 12.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (Superior 1, main 9, MILITANT and PURGATUS repeatable, PURGATUS at most two) | team.json slots, `repeatable: ["nv.militant", "nv.purgatus"]`, `selection.caps: [{ "from": ["nv.purgatus"], "max": 2 }]` |
| Loadouts | datacard `weapons.options` `sets` (Superior three, Militant two); profile group `nv.wg.plasma-pistol` |
| Faith pool, Ready-step gain (T-NV.29) | `pools.ts` kind `nv.faith`; `turningPoint.start` handler; `TeamPresentation.pools` label |
| Acts of Faith (T-NV.30 to T-NV.33), Icon of Faith, Auto-chastisers, Sanctified Rounds | `registerPloyRule` `extraOffers` (0 CP) in `shoot.beforeAttackRerolls`, `shoot.defenderBeforeRerolls`, `fight.beforeRerolls` (Guidance: `RerollGrant { mode: 'one' }`) and `shoot.attackRolled`, `shoot.defenceRolled`, `fight.rolled` (Blessing, Intervention: tagged die conversions; Sanctified Rounds standalone spend); `spendPool`; per-sequence and per-TP ledgers; `directDamage` for Auto-chastisers |
| Militant Faith | per-sequence act ledger, `operative.incapacitated` refund via `gainPool` |
| Inspirational Example, Unflinching Example, Divine Acquisition, Raise Icon, Glorious Martyrdom Faith | `damage.inflicted`, `action.ended`, unique action and ploy effects calling `gainPool` |
| Null Rod | providers `psychicBlocked`, `psychicImmune`; `onDamageInflicted` (PSYCHIC ranged weapon damage to 0); `modifyWeaponRules` + `modifyDamage` + `onDamageInflicted` clamp (PSYCHIC melee nerf) |
| Anti-PSYKER | `modifyDamage` +1/+1 and `modifyWeaponRules` Lethal 5+ against PSYKER |
| Stirring Rhetoric | unique action, `applyAplEffect` +1 (support target filter with the marker distance) |
| Auto-broadcaster | unique action placing a team marker (Cloud of Flies pattern, 8" horizontal spots); provider `rerollsBanned` |
| Riposte | attack hook `afterBlock`, `inflict` with `strike-crit` |
| Whip Into Frenzy | token `nv.whip`; `applyAplEffect`; providers `moveDelta`, `maxRepeats` (fight 2), `actionCostDelta` (first Fight 0 AP) |
| Absolution Through Destruction | 0 CP offer in `firefight.actionEnded`; `startFreeAction({ action: 'fight' })` |
| Zealous Rage, Glorious Hymnal, Ardent Vengeance, Guided by Faith, Sanctified Rounds | `modifyWeaponRules` (Ceaseless, Severe, Punishing, Seek Light, Piercing Crits 1) |
| Medic!, Chirurgeon's Tools | the Pathfinders pattern (3.11): `beforeIncapacitated`, `onDamageInflicted` floor, `startFreeAction({ action: 'dash', endWithinCrOf })`, `Activation.endsAfterAction`; `effects.regainWounds` |
| Relic Seeker | data `costDelta` (`marker:pickUp`, `marker:place`, `mission-action`, once per activation) |
| Purge with Flame | ploy rule `costAdjust` (0 CP) |
| Icon Bearer | provider `controlApl` |
| Defenders of the Faith | `onDamageInflicted` once per sequence (halve, min 2) |
| Blessed Rejuvenation | spend ledger per action; `action.ended`; `effects.regainWounds(D3)` |
| Righteous Advance | Recon Sweep pattern: `ability.choice` per operative, `startFreeAction({ action: 'dash' })`, `moveSurcharge` +999 end constraint |
| Glorious Martyrdom | ploy in `operative.incapacitated`; `directDamage` tagged `nv.martyrdom`; `gainPool` |
| Blazing Inferno, Blaze token | `damage.inflicted` record; ploy in `shoot.resolved`; token `nv.blaze`; `activation.start` D3; 0 CP offer to the holder's seat in `firefight.activationStart` with a timed APL -1 |
| Blinding Aura | offer in `shoot.targetSelected`; effect + `beforeShootTargetSelect` ban; team-local re-target (`redirectAttack` after an attacker `ability.choice`, or end the Shoot as performed) |
| Holy Embrocations | provider `moveDelta` +2 while injured (team-local Move-only fallback) |

### 12.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/novitiates/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `nv.<name>`, `nv.w.`, `nv.wg.`, `nv.a.`, `nv.p.`, `nv.e.`)
  - `src/engine/teams/novitiates.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/novitiates.ts` (weapon flavour, VFX family, sound, attachments, pool label "Faith", figure stand-ins `nv-superior`, `nv-condemnor`, `nv-dialogus`, `nv-duellist`, `nv-exactor`, `nv-hospitaller`, `nv-militant` (with `-b`, `-c` pose variants for repeats), `nv-penitent`, `nv-preceptor`, `nv-pronatus`, `nv-purgatus` (with `-b`), `nv-reliquarius`)
  - `tests/engine/teams/novitiates.test.ts` (TEAM-NV-nnn tests) and `tests/engine/teams/novitiates.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 12 and `12-rules-test-checklist.md` section TEAM-NV (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/novitiates/team.json`. Flip it (with `defaults` filled: Superior plasma pistol and power weapon, and nine picks such as Condemnor, Dialogus, Duellist, Exactor, Hospitaller, Penitent, Preceptor, Purgatus and one Militant with the autogun; every weapon in `src/client/teams/novitiates.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above. Built in the batch C prep: `pools.ts` (teamPool), `psychic.ts` with `psychicBlocked` / `psychicImmune`, `afterBlock`. Faith is the spine of the team: TEAM-NV-003 to TEAM-NV-007 first (pool, Ready gain, the three acts and the one-per-sequence limit), then Icon of Faith, Auto-chastisers and Militant Faith (TEAM-NV-008 to TEAM-NV-012), then Null Rod (TEAM-NV-015, TEAM-NV-016) and the Whip/Absolution pair (TEAM-NV-020, TEAM-NV-021).
- Not built (team-local fallbacks, 12.9): `shootRetarget` for Blinding Aura (attacker `ability.choice` + `redirectAttack`, Blast secondaries recomputed, or end the Shoot as performed); `injuredMoveOnly` for Holy Embrocations (`moveDelta` +2 while injured).
- Team-local weapon rules the scaffold leaves out: `nv.a.wr-anti-psyker` (Condemnor stakethrower, null rod), `nv.a.wr-riposte` (duelling blades), `nv.a.wr-zealous-rage` (Penitent eviscerator); the leader's weapons carry none. The Superior's gun butt is its own record (`nv.w.gun-butt-superior`, Hit 3+).
- AI policy (`query.*` shows the Faith pool and each act's cost): Intervention when a fail would become the success that decides the sequence (an extra block against a lethal hit, or the hit that incapacitates); Blessing when a crit adds damage, Devastating or Rending and the target is not obscured; Guidance on a fail when Faith is 3 or more; never spend the last points before TP4 unless the act changes an incapacitation; Auto-chastisers only above half wounds; Blessed Rejuvenation when Faith is 4 or more.
- RULING lines expected: Purgatus limit, Superior gun butt, autogun and relic boltgun range, neural whips, Wounds stat 12+, Inspirational Example and Glorious Martyrdom, Null Rod damage, rules commentary, melee cap, Anti-PSYKER, Stirring Rhetoric cap and distances, Auto-broadcaster placement and ban, Riposte, Whip Into Frenzy errata (Corrected) and duration, Medic! opportunity, Chirurgeon's Tools self-target, Militant Faith, Zealous Rage when retaliating, Absolution with Whip and timing, Unflinching Example ready and Glorious Martyrdom, Glorious Hymnal, Relic Seeker in v1, Divine Acquisition, Purge with Flame, Raise Icon control, Faith pool and Ready-step count, Acts of Faith timing, one act per sequence, Guidance spend, Blessing and other rules, Ardent Vengeance expended, Defenders of the Faith errata (Corrected) and use, Blessed Rejuvenation count, Righteous Advance closer, Glorious Martyrdom, Blazing Inferno target, Blaze token timing, Blinding Aura, Guided by Faith timing, Icon of Faith, Sanctified Rounds spend, Auto-chastisers, Holy Embrocations.
- Gotchas: section 12.10. One act per sequence (two different with Icon, once per TP); acts on own dice only; no Blessing against obscured. Null Rod affects both sides within 6" and makes everyone within 6" unpickable by PSYCHIC rules. Whip's first Fight is free; Absolution Fights are free frames that never count against the Fight limit and never chain. Ten operatives use the 10-operative kill grade row.

## 13. Phobos Strike Team

Rule IDs `T-PH.<n>`, checklist IDs `TEAM-PH-<nnn>`. Sources: the team PDF (Phobos Strike Team, Faction version 3, November '25 update log state, including the November '25 errata and the earlier Medic! errata; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia page (faction version 3, November 2025; its FAQ panel is empty for this team). The two agree on everything except the Incursor Sergeant's ranged weapon, where Wahapedia copies the Infiltrator Sergeant's line and the PDF wins (13.3), plus two wording differences with no practical effect (13.10). Facts read from the PDF are Confirmed; our own calls are Unsourced. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 13.1 Team selection

- T-PH.1 Roster is exactly 6 operatives: 1 leader (INFILTRATOR SERGEANT, INCURSOR SERGEANT or REIVER SERGEANT) plus 5 picks from the main list (T-PH.2). Nothing counts as two selections or half a selection.
  - MECH: roster validator: leader slot count 1 from three datacards, main slot count 5 | CLASS: data
- T-PH.2 Main list: INFILTRATOR COMMSMAN, INFILTRATOR HELIX ADEPT, INFILTRATOR SABOTEUR, INFILTRATOR VETERAN, INFILTRATOR VOXBREAKER, INFILTRATOR WARRIOR, INCURSOR MARKSMAN, INCURSOR MINELAYER, INCURSOR WARRIOR, REIVER WARRIOR. The three WARRIOR cards may each be taken any number of times (in any mix); every other card at most once. No per-keyword caps and no weapon caps.
  - MECH: main slot `repeatable: ["ph.infiltrator-warrior", "ph.incursor-warrior", "ph.reiver-warrior"]` | CLASS: data
- T-PH.3 Loadouts:
  - REIVER SERGEANT and REIVER WARRIOR (each separately): either special issue bolt pistol and combat knife, or bolt carbine and fists (a pistol-and-knife Reiver has no fists).
  - Every other card: every weapon on the card (fixed): the Infiltrators carry a marksman bolt carbine and fists (the Veteran a custom bolt carbine and fists, the Saboteur also the remote detonator), the Incursor Marksman a stalker marksman bolt carbine and fists, the other Incursors an occulus bolt carbine and fists.
  - MECH: datacard `weapons.options` with two `sets` for both Reiver cards; fixed elsewhere | CLASS: data
- T-PH.4 Archetypes: INFILTRATION, RECON (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["infiltration", "recon"]` | CLASS: data
- T-PH.5 **Bolt weapons**: for ASTARTES (T-PH.25) and Critical Shot (T-PH.32) a bolt weapon is any ranged weapon whose name contains "bolt": the marksman, custom, stalker marksman, occulus and plain bolt carbines and the special issue bolt pistol. The remote detonator and the universal grenades are not bolt weapons. Special Issue Ammunition (T-PH.38) uses its own, shorter list of three named carbines.
  - MECH: name test in the team file (`/bolt/i` on the weapon name, ranged only) | CLASS: team-hook
  - RULING: Phobos Strike Team bolt weapons | every ranged weapon with "bolt" in its name (five carbines and the special issue bolt pistol); the remote detonator and grenades are not | the faction rule defines the term by name and gives the marksman bolt carbine and special issue bolt pistol as examples | Confirmed
- T-PH.6 Team-local weapon rules: **Detonate** (remote detonator, T-PH.14) and **Custom** (custom bolt carbine, T-PH.15). Every other weapon rule on the cards is core (R-10).
  - MECH: weapon records carry `{ "rule": "ph.a.wr-detonate" }` / `{ "rule": "ph.a.wr-custom" }` resolved by the team file | CLASS: team-hook

### 13.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| INFILTRATOR SERGEANT | 3 | 7" | 3+ | 13 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, LEADER, INFILTRATOR, SERGEANT |
| INCURSOR SERGEANT | 3 | 7" | 3+ | 13 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, LEADER, INCURSOR, SERGEANT |
| REIVER SERGEANT | 3 | 7" | 3+ | 13 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, LEADER, REIVER, SERGEANT |
| INFILTRATOR COMMSMAN | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INFILTRATOR, COMMSMAN |
| INFILTRATOR HELIX ADEPT | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, MEDIC, INFILTRATOR, HELIX ADEPT |
| INFILTRATOR SABOTEUR | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INFILTRATOR, SABOTEUR |
| INFILTRATOR VETERAN | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INFILTRATOR, VETERAN |
| INFILTRATOR VOXBREAKER | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INFILTRATOR, VOXBREAKER |
| INFILTRATOR WARRIOR | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INFILTRATOR, WARRIOR |
| INCURSOR MARKSMAN | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INCURSOR, MARKSMAN |
| INCURSOR MINELAYER | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INCURSOR, MINELAYER |
| INCURSOR WARRIOR | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, INCURSOR, WARRIOR |
| REIVER WARRIOR | 3 | 7" | 3+ | 12 | 32 | PHOBOS STRIKE TEAM, IMPERIUM, ADEPTUS ASTARTES, REIVER, WARRIOR |

Notes: every card is APL 3, Move 7", Save 3+; the three Sergeants have 13 wounds, everyone else 12. Bases: 32mm on every card in both sources. The PDF prints "PHOBOS STRIKE TEAM ," with a stray space; the keyword is PHOBOS STRIKE TEAM. The VOXBREAKER is also an INFILTRATOR (Omni-Scrambler counts it).

### 13.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Marksman bolt carbine | R | 4 | 3+ | 3/4 | Lethal 5+ | Infiltrator Sergeant, Commsman, Helix Adept, Saboteur, Voxbreaker, Infiltrator Warrior |
| Custom bolt carbine | R | 4 | 3+ | 3/4 | Custom (T-PH.15) | Veteran |
| Stalker marksman bolt carbine | R | 4 | 2+ | 3/4 | Lethal 5+, Piercing 1 | Incursor Marksman |
| Occulus bolt carbine | R | 4 | 3+ | 3/4 | Saturate | Incursor Sergeant, Minelayer, Incursor Warrior |
| Bolt carbine | R | 4 | 3+ | 3/4 | Accurate 1 | Reiver Sergeant, Reiver Warrior (option) |
| Special issue bolt pistol | R | 4 | 3+ | 3/4 | Range 8", Piercing 1 | Reiver Sergeant, Reiver Warrior (option) |
| Remote detonator | R | 4 | 2+ | 5/6 | Heavy (Dash only), Limited 1, Piercing 1, Silent, Detonate (T-PH.14) | Saboteur |
| Combat knife | M | 5 | 3+ | 4/5 | none | Reiver Sergeant, Reiver Warrior (option) |
| Fists | M | 4 | 3+ | 3/4 | none | every Infiltrator and Incursor; Reiver Sergeant, Reiver Warrior (option) |
| Combat blade (equipment) | M | 5 | 3+ | 3/4 | none | every friendly PHOBOS STRIKE TEAM operative via T-PH.37 |

Notes: 10 profiles, no profile groups. Ids: `ph.w.marksman-bolt-carbine`, `ph.w.custom-bolt-carbine`, `ph.w.stalker-marksman-bolt-carbine`, `ph.w.occulus-bolt-carbine`, `ph.w.bolt-carbine`, `ph.w.special-issue-bolt-pistol`, `ph.w.remote-detonator`, `ph.w.combat-knife`, `ph.w.fists`, `ph.w.combat-blade`. Every operative's fists and every carbine of the same name share one record. No Phobos weapon has Balanced, Ceaseless, Relentless, Devastating, Blast or Torrent natively.

UNCLEAR (resolved): the Incursor Sergeant's ranged weapon. The PDF datacard and the PDF kill team selection page both give it the occulus bolt carbine (Saturate); Wahapedia prints the marksman bolt carbine with Lethal 5+, the same line as the Infiltrator Sergeant. RULING: Phobos Strike Team Incursor Sergeant weapon | occulus bolt carbine (Saturate) | the PDF card and the selection page agree; Wahapedia repeats the Infiltrator Sergeant's line, and every other INCURSOR except the Marksman carries the occulus carbine | Corrected
UNCLEAR (resolved): the layout extract scrambles the Saboteur and Reiver weapon rows (Hit, Dmg and WR printed apart from the names). The flow extract keeps the rows in order and matches Wahapedia row for row; the table above follows both.
Notes: the remote detonator is the only Phobos weapon that is not a bolt weapon (T-PH.5). Its Limited 1 is tracked with the Remote Detonator token.

### 13.4 Operative rules and unique actions

- T-PH.7 **Tactical Advantage: initiative** (all three Sergeants): once per battle, after the initiative roll-off, if the leader is in the killzone, you may re-roll your initiative die.
  - MECH: providers `initiativeReroll` (leader in the killzone, once-per-battle ledger unused) and `onInitiativeReroll` (spend the ledger, Tactical Advantage token) | CLASS: generic:initiativeReroll
  - RULING: Phobos Strike Team Tactical Advantage initiative | usable in any TP including TP1; the AI uses it only when it lost the roll-off | the rule has no TP limit and re-rolling a winning die can only hurt (Writ of Claim precedent) | Unsourced
- T-PH.8 **Tactical Advantage: free ploy** (all three Sergeants): once per battle, (a) use a firefight ploy for 0 CP when the leader is the friendly operative that ploy names (Critical Shot: the shooter; Transhuman Physiology: the operative being shot; Stealth Assault: the operative fighting; Command Re-roll: the dice were rolled for the leader), or (b) use Patient Ambush (T-PH.31) for 0 CP while the leader is ready and not within an enemy's control range. One use covers both bullets together (a or b, once).
  - MECH: `registerPloyRule.costAdjust` returning `{ cost: 0, via: 'tacticalAdvantage' }` when the offer's operative is the leader (or for Patient Ambush, the leader is ready and out of enemy control range) and the once-per-battle ledger is unused; `onUsed` spends the ledger | CLASS: team-hook
  - RULING: Phobos Strike Team Tactical Advantage free ploy | the 0 CP price is applied automatically to the first eligible firefight ploy and spends the once-per-battle use; Patient Ambush qualifies only through bullet (b) because it names no operative | every firefight ploy costs 1 CP, so the saving is the same whenever it is taken, and the card lists Patient Ambush as its own case | Unsourced
- T-PH.9 **Strategic Oversight** (Commsman): in the Ready step of each Strategy phase, as CP are gained, if the Commsman is in the killzone and not within an enemy's control range, roll one D6; on 4+ gain 1 extra CP.
  - MECH: `turningPoint.start` handler: conditions checked, `ctx.roll` D6, `gainCp(1)` on 4+ | CLASS: team-hook
  - RULING: Phobos Strike Team Strategic Oversight use | always rolled when its conditions hold, in every TP including TP1 | the roll has no downside, CP are gained in every Ready step (R-2.2), and lifecycle hooks never raise decisions | Unsourced
- T-PH.10 **Comms Array** (Commsman): once per TP, during a friendly PHOBOS STRIKE TEAM operative's activation or counteraction, before or after one of its actions, if the Commsman is in the killzone, you may swap one strategy ploy you have used this TP for a different strategy ploy, paying no CP.
  - MECH: 0 CP offer in the owner's `firefight.activationStart` and `firefight.actionEnded` windows (activations and counteractions of friendly PHOBOS operatives), one option per (used ploy, unused ploy) pair; team-local swap: `effects.removeEffects` for the old ploy, then add the new ploy's effect and mark it used this TP; once-per-TP ledger | CLASS: team-hook (fallback "changing which strategy ploy is in effect")
  - RULING: Phobos Strike Team Comms Array change | the new ploy must be one not used this TP; both ploys then count as used this TP, so neither can be bought again; an action already performed through Guerrilla Warfare stays done; Omni-Scrambler is a STRATEGIC GAMBIT, not a ploy, and cannot be swapped | "change one strategy ploy you've used" swaps one effect for another, and R-2.4 forbids a second use of the same ploy | Unsourced
- T-PH.11 **Medic!** (Helix Adept): the first time each TP that another friendly PHOBOS STRIKE TEAM operative visible to and within 3" of the Helix Adept would be incapacitated, you may use this rule, provided neither of the two is within an enemy's control range, the Helix Adept is not incapacitated, and (in a Shoot action) the Helix Adept is not a primary or secondary target. Effect: the friendly operative is not incapacitated, is left on D3 wounds and cannot be incapacitated for the rest of that action. When the action ends it may perform a free Dash that must end within the Helix Adept's control range. Both operatives then have APL -1 until the end of their next activations, and if this happened during the saved operative's own activation, that activation ends.
  - MECH: the Pathfinders / Hearthkyn Medic! implementation (T-PF.14, T-HK.11): `beforeIncapacitated` sets `wounds` to a D3 roll, `onDamageInflicted` floor for the rest of the action, free Dash via `startFreeAction({ action: 'dash', endWithinCrOf })` after the action, timed APL -1 on both (`applyAplEffect`), `Activation.endsAfterAction`, once-per-TP ledger, Medic token | CLASS: team-hook
  - RULING: Phobos Strike Team Medic! opportunity | only the first qualifying moment each TP is offered, declining spends it, the AI always accepts; the D3 is rolled when the rule is used; the free Dash is optional and skipped when no end point lies in the Helix Adept's control range | same wording as the Pathfinders and Hearthkyn cards except D3 wounds instead of 1; same ruling | Unsourced
- T-PH.12 **HELIX GAUNTLET** (Helix Adept, 1 AP): one friendly PHOBOS STRIKE TEAM operative in the Helix Adept's control range regains up to D3+3 lost wounds (never above its starting wounds). It cannot pick an operative Medic! saved this TP. Not while in an enemy's control range.
  - MECH: unique action with friendly-target filter (in control range, not this TP's Medic! target), `effects.regainWounds(D3+3)` | CLASS: data
  - RULING: Phobos Strike Team Helix Gauntlet self-target | the Helix Adept may heal itself | an operative is within any distance of itself (R-8.3) and the text, unlike Medic!, does not say "other" | Unsourced
- T-PH.13 **Plant Explosives** (Saboteur): the Saboteur starts the battle carrying your Explosives marker. It may perform Pick Up Marker on that marker (normal conditions, R-4.5), and each time it performs Place Marker with it, it may immediately perform a free Dash.
  - MECH: team code creates the Explosives marker (`kind` team, `pickable: true`, owner the Phobos seat) already carried by the Saboteur (`carriedBy`, `flags.carrying`) before the first Strategy phase; provider `actionForbidden` refuses `marker:pickUp` to every other operative while the Explosives or Haywire Mine marker is the pickable marker in reach; after a Place Marker of the Explosives marker, `startFreeAction({ action: 'dash' })` | CLASS: team-hook (see gaps `carriedFromSetup`)
  - RULING: Phobos Strike Team Plant Explosives start | the marker begins carried and is therefore not in the killzone until the Saboteur places it | the card says the Saboteur is carrying it, and Pick Up Marker removes a carried marker from the killzone (core) | Confirmed
  - RULING: Phobos Strike Team team marker pick-up | only the Saboteur can Pick Up the Explosives marker and only the Minelayer the Haywire Mine marker; no other operative of either side can | each card grants the action on its own marker to that operative, and v1 missions name no other marker Pick Up Marker can be used on (R-4.5) | Confirmed
  - RULING: Phobos Strike Team Plant Explosives free Dash | optional; it follows R-3.9 (not offered if the Saboteur already Dashed this activation); when the Place Marker was a counteraction the Dash is part of it and capped at 2" (R-3.12); never after the 0 AP placement of an incapacitated Saboteur | free actions keep their conditions, the counteract cap covers every move made while counteracting, and an incapacitated operative is removed | Unsourced
- T-PH.14 **Detonate** (team-local weapon rule; remote detonator): instead of choosing a valid target, the Saboteur shoots every operative within 2" of your Explosives marker except those cut off from the marker by Heavy terrain that wholly intervenes. None of them can be in cover or obscured; no visibility is needed. Each operative is a separate sequence, in an order of your choice. The weapon cannot be picked while your Explosives marker is not in the killzone (including while it is carried). When the action ends, the Explosives marker is removed from the killzone. The weapon is also Limited 1, Heavy (Dash only), Piercing 1 and Silent (so it can be fired under a Conceal order).
  - MECH: provider `fixedTargets` for `ph.w.remote-detonator` -> `{ targets, noCover: true, noObscured: true, blast: false }` (operatives within 2" of the marker whose lines to the marker are not all blocked by Heavy terrain, via the `los` terrain queries); provider `weaponForbidden` when the marker is not in the killzone; `action.ended` (the Saboteur's Shoot with the detonator) removes the marker | CLASS: team-hook (built: `fixedTargets`, `weaponForbidden`)
  - RULING: Phobos Strike Team Detonate targets | every operative within 2" of the marker, friend or foe, the Saboteur itself included; an operative is spared only when every line from the marker to its base crosses Heavy terrain | the rule says "each operative" and "wholly intervening" | Unsourced
  - RULING: Phobos Strike Team Detonate order | sequences run in the provider's order: enemy operatives first, nearest the marker first, then friendly operatives; no order decision is raised | incapacitated operatives are removed only after the action (R-5.18), so the order rarely matters, and the engine has no order decision for fixed targets | Unsourced
  - RULING: Phobos Strike Team Detonate with nothing in range | the weapon cannot be selected while no operative is within 2" of the marker, so its Limited use is kept | a Shoot needs at least one operative to shoot against | Unsourced
  - RULING: Phobos Strike Team Detonate close quarters | the clause giving Lethal 5+ in close-quarters killzones has no effect in the open killzone | v1 plays only the open Volkus killzone | Confirmed
- T-PH.15 **Custom** (team-local weapon rule; Veteran's custom bolt carbine): when the roster is chosen, pick two different weapon rules from Balanced, Lethal 5+, Piercing Crits 1, Rending, Saturate; the carbine has both for the battle.
  - MECH: team.json `operativeChoices` `custom-1` and `custom-2` (options `balanced`, `lethal-5`, `piercing-crits-1`, `rending`, `saturate`; `forKeyword: VETERAN`, `keyword: false`, `custom-2` `distinctFrom: ["custom-1"]`); `modifyWeaponRules` adds the two picked rules to `ph.w.custom-bolt-carbine`; `defaults.operativePicks` for the Veteran | CLASS: team-hook (built: operative picks extended)
  - RULING: Phobos Strike Team Custom picks | always two different rules, picked at roster selection, public | the card says "up to two" but none of the five can ever hurt the carbine; our roster is the Select Operatives step; nothing says the pick is secret | Unsourced
- T-PH.16 **Voxbreak** (Voxbreaker): while an enemy operative is within 6" of the Voxbreaker (no visibility needed), the opponent cannot re-roll attack or defence dice rolled for that enemy (Balanced, Ceaseless, Relentless, Command Re-roll and any other source).
  - MECH: provider `rerollsBanned` for the enemy side of the attack when its operative is within 6" of a live Voxbreaker at the moment of the re-roll | CLASS: team-hook
  - RULING: Phobos Strike Team Voxbreak distance | measured when the re-roll would happen; covers the enemy as attacker, defender or retaliating fighter | "whenever an enemy operative is within 6"" is checked at the moment of each re-roll, and "their attack or defence dice" names both | Confirmed
- T-PH.17 **AUSPEX SCAN** (Voxbreaker, 1 AP): until the start of the Voxbreaker's next activation or its incapacitation, whichever comes first: whenever a friendly PHOBOS STRIKE TEAM operative shoots an enemy within 8" of the Voxbreaker, that enemy cannot be obscured; and if the shooter is an INCURSOR, its ranged weapons also have Seek Light. Not while in an enemy's control range.
  - MECH: unique action setting a team effect with source lifetime (Auspex Scan token on the Voxbreaker: `activation.start` of the Voxbreaker and its incapacitation remove it); `target.status` sets `obscured: false`; `modifyWeaponRules` adds `core.wr.seek-light` for INCURSOR shooters; `beforeShootTargetSelect` adds the Conceal-in-Light-cover candidates Seek Light makes valid (Spot pattern, T-HK.22) | CLASS: team-hook
  - RULING: Phobos Strike Team Auspex Scan distance | the 8" is measured from the Voxbreaker to each target when the shot is taken, so it needs the Voxbreaker in the killzone; a counteraction is not an activation, so the effect survives the Voxbreaker counteracting | the distance names the Voxbreaker, and "next activation" is the core term | Unsourced
- T-PH.18 **Vanguard** (Infiltrator, Incursor and Reiver Warriors): once per TP, for the whole team, one friendly operative with Vanguard may perform Pick Up Marker or a mission action for 1 AP less.
  - MECH: provider `actionCostDelta` -1 for `marker:pickUp` and MISSION `ability:<id>` on an operative with `ph.a.vanguard` while the seat's TP ledger is unused; hook `action.declared` spends the ledger when such an action is declared at the reduced cost; Vanguard token | CLASS: team-hook
  - RULING: Phobos Strike Team Vanguard use | one discount per TP shared by all Vanguard operatives, applied automatically to the first eligible action of the TP (a 1 AP action costs 0 AP); Pick Up Marker is inert in v1 except on this team's own markers, which no Warrior may pick up | "once per turning point, one friendly operative with this rule" is a team-wide single use; the action has no downside to discount | Unsourced
- T-PH.19 **Track Target** (Incursor Marksman): it may perform the Guard action while it has a Conceal order; when it then performs the free Shoot or Fight of the interrupt, its order changes to Engage. (The "in any killzone" clause adds nothing here: Guard is a universal action in our engine, R-4.9 RULING.)
  - MECH: provider `guardUnderConceal` for the Marksman; hook `action.declared` on the Marksman's interrupt Shoot or Fight (on guard, during an enemy activation) sets its order to Engage before the attack | CLASS: team-hook
  - RULING: Phobos Strike Team Track Target order change | the order becomes Engage when the interrupt action is declared, so the shot is taken under Engage; that change does not end the Guard being used (it ends once the interrupt is done, as Guard always does); Wahapedia's omission of "during its activation" changes nothing because Guard cannot be a counteraction (R-3.12) | the card ties the change to performing the interrupt action | Unsourced
- T-PH.20 **Haywire Mine** (Minelayer): the Minelayer starts the battle carrying your Haywire Mine marker. It may perform Pick Up Marker on it (normal conditions). The marker can never be placed with any part of it within an enemy operative's control range; if the Minelayer is incapacitated while carrying it and it cannot legally be placed, it is removed along with the Minelayer.
  - MECH: team code creates the Haywire Mine marker carried by the Minelayer before the first Strategy phase (as T-PH.13; not the `mines` equipment code, so the core mine check ignores it); provider `actionForbidden` refuses Place Marker of the Haywire Mine while an enemy is within 2" plus the marker radius of the Minelayer (so no spot in its control range can be inside an enemy's control range); `damage.inflicted` on the Minelayer with wounds 0 while carrying: place the marker at the spot in its control range farthest from enemies that is outside every enemy control range, or remove it | CLASS: team-hook (see gaps `placeMarkerSpots`, `carriedFromSetup`)
  - RULING: Phobos Strike Team Haywire Mine placement | Place Marker of the mine is refused while any enemy operative is within 2" plus the marker's radius of the Minelayer; a dying Minelayer's mine goes to the legal spot farthest from enemies, or is removed with it if none exists | the engine cannot filter the spot of a Place Marker, and that distance guarantees every spot within the Minelayer's 1" is legal; the dying case follows the card | Unsourced
- T-PH.21 **Proximity Mine** (Minelayer): the first time your Haywire Mine marker (in the killzone, not carried) is within the control range of any operative other than the Minelayer, friend or foe: remove the marker; that operative gets APL -1 until the end of its next activation and takes 2D3+3 damage; if it survives, its current action (if any) ends at once even if unfinished. If it cannot be placed where it stands, move it the minimum distance needed.
  - MECH: team-local trigger: `action.ended` (every action, any operative, plus the Minelayer's Place Marker) scans this action's `OperativeMoved` segments in order and every operative's position; at the first increment end point within the marker's control range: `removeMarker`, `applyAplEffect` -1, `directDamage` 2D3+3; if the operative survives and moved further, team code puts it back at that increment end point (`OperativeMoved` with action `'forced'`, one `'fly'` segment) | CLASS: team-hook (see gaps `teamMineEffect`)
  - RULING: Phobos Strike Team Proximity Mine trigger | any operative except the Minelayer sets it off, friendly ones included; it is checked after placement and after every completed move increment (the core Mines granularity); a moving operative stops at the first increment end point within the marker's control range and its action ends there (a Charge that ends short is simply over); a carried mine is not in the killzone and cannot go off | the card says "another operative"; the engine resolves moves as whole paths, so the stop is applied afterwards at the trigger point, which is always a placeable spot | Unsourced
  - RULING: Phobos Strike Team Proximity Mine near friends | the Minelayer may place the mine inside a friendly operative's control range; it then goes off on that operative at once; the AI never does this | only enemy control range is barred by the card | Unsourced
- T-PH.22 **Grav-chute and Grapnel Launcher** (Reiver Sergeant, Reiver Warrior): each climb up costs 2" of vertical distance however high it really is, and drops cost no vertical distance at all.
  - MECH: provider `moveSurcharge` returns a negative amount: `-(climb - 2 per climb)` and `-drop` for Reivers | CLASS: team-hook
  - RULING: Phobos Strike Team Grav-chute | applied automatically to every climb (consecutive climb segments are one climb, R-12.2) and every drop, in counteractions too | treating a climb as 2" is never worse than the core minimum, and the November '25 errata limits the climb clause to climbing up | Confirmed

### 13.5 Faction rules

- T-PH.23 **OMNI-SCRAMBLER**: a STRATEGIC GAMBIT usable while a friendly INFILTRATOR is in the killzone. Pick one enemy operative visible to any friendly INFILTRATOR, or within 6" of a friendly VOXBREAKER. During this TP's Firefight phase that enemy cannot be activated or perform any action until either the opponent has completed as many activations as you had INFILTRATOR operatives in the killzone when the gambit was used, or it is the last enemy operative still to be activated.
  - MECH: strategic gambit ability with an `ability.choice` over qualifying enemies (no candidates: not offered); store target and count N (INFILTRATOR operatives in the killzone, the Voxbreaker included); Omniscrambler token; provider `canActivate` false for the target while fewer than N opponent activations have started this Firefight phase (never empties the options, so "last to be activated" falls out); provider `actionForbidden` for every action of the target under the same condition and while another ready enemy operative exists (covers free actions from other rules); `activation.start` counts the opponent's activations; `turningPoint.end` clears it | CLASS: team-hook (built: `canActivate`)
  - RULING: Phobos Strike Team Omni-Scrambler count | N is fixed when the gambit is used; every activation the opponent starts this Firefight phase counts (a chained activation counts each operative; counteractions and skipped turns do not); "last enemy operative" means no other ready enemy operative can be activated; "visible" is core visibility (the target need not be a valid target); Strategy phase free actions are not affected | the card counts activations, and its ban is limited to the Firefight phase | Unsourced
- T-PH.24 **TERROR**: while an enemy operative is within 3" of any friendly REIVER, it pays 1 extra AP for Pick Up Marker and mission actions. When control of a marker is worked out, the opponent's contesting total APL is 1 lower if at least one of their contesting operatives is within 3" of a friendly REIVER (not an APL change, so it stacks with APL changes and ignores R-9.6).
  - MECH: provider `actionCostDelta` (+1 for `marker:pickUp` and MISSION `ability:<id>` on enemies within 3" of a live REIVER); provider `controlTotal` (-1 for the enemy seat) | CLASS: team-hook
  - RULING: Phobos Strike Team Terror stacking | one +1 AP and one -1 total however many Reivers are near | the rule names friendly REIVER operatives as a group, unlike rules that work per marker | Unsourced
- T-PH.25 **ASTARTES**: in each activation a friendly PHOBOS STRIKE TEAM operative may perform two Shoot actions or two Fight actions (overrides R-3.7). For two Shoots at least one must use a bolt weapon (T-PH.5); the same bolt weapon may be used twice. No AP surcharge. Every friendly PHOBOS STRIKE TEAM operative can counteract whatever its order.
  - MECH: providers `maxRepeats` (2 for shoot and fight) and `counteract: 'any'`; `beforeShootTargetSelect` empties candidates for a second Shoot when neither Shoot uses a bolt weapon (in practice only the remote detonator, which Limited 1 already stops) | CLASS: team-hook
- T-PH.26 **MULTI-SPECTRUM ARRAY**: whenever a friendly INCURSOR is shooting, enemy operatives cannot be obscured (cover is unaffected).
  - MECH: `target.status` sets `obscured: false` when the shooter has INCURSOR | CLASS: team-hook

### 13.6 Ploys

The source prints no costs: every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5).

- T-PH.27 **GUERRILLA WARFARE** | Strategy | 1 CP | Gambit step | Friendly PHOBOS STRIKE TEAM operatives gain the unique action GUERRILLA WARFARE (1 AP): change this operative's order. Not while in an enemy's control range.
  - MECH: ploy effect; provider `extraActions` offers `ph.a.guerrilla-warfare` to every friendly PHOBOS operative while the effect lasts; the action flips the order (`OrderChanged`) | CLASS: team-hook
  - RULING: Phobos Strike Team Guerrilla Warfare as a counteraction | allowed (it costs exactly 1 AP, and ASTARTES lets any order counteract); changing the order ends Guard as usual (R-4.9) | R-3.12 allows any 1 AP action | Unsourced
- T-PH.28 **AND THEY SHALL KNOW NO FEAR** | Strategy | 1 CP | Gambit step | Friendly PHOBOS STRIKE TEAM operatives ignore every stat change from being injured (Move and weapon Hit).
  - MECH: provider `flags` ignoreInjured for friendly PHOBOS operatives while the effect lasts | CLASS: team-hook
- T-PH.29 **DEADLY SHOTS** | Strategy | 1 CP | Gambit step | A friendly PHOBOS STRIKE TEAM operative's ranged weapons have Balanced while it shoots either (a) in an activation in which it has not yet performed Charge, Fall Back or Reposition (it may still do them after shooting), or (b) at an operative that is not in cover and is more than 6" from it (November '25 errata wording). Checked per target.
  - MECH: `modifyWeaponRules` adds `core.wr.balanced`: (a) from the current activation's performed actions; (b) per `targetId` from the cover status of that sequence and the distance | CLASS: team-hook
  - RULING: Phobos Strike Team Deadly Shots outside an activation | a counteraction Shoot or a Guard interrupt Shoot satisfies (a) when the operative has not Charged, Fallen Back or Repositioned in that counteraction or interrupt; Dash never counts against it | the operative is not in its own activation then, and the clause looks only at moves it made in the frame it is shooting from; Dash is not listed | Unsourced
  - RULING: Phobos Strike Team Deadly Shots cover | "not in cover" means the target could not retain a cover save against that shot (Detonate targets never can); the 6" is measured from the shooter to that target | the errata's first-sentence change reads cover as the target's status for that shot | Unsourced
- T-PH.30 **LETHAL ASSAULTS** | Strategy | 1 CP | Gambit step | Whenever a friendly PHOBOS STRIKE TEAM operative is fighting (its own Fight action, free ones included), its melee weapons have Balanced, and also Lethal 5+ if it performed a Charge earlier in the same activation.
  - MECH: `modifyWeaponRules` (Balanced; Lethal 5+ when the current activation's performed actions include a Charge) on the attacker side only | CLASS: team-hook
  - RULING: Phobos Strike Team Lethal Assaults and retaliating | no effect when retaliating | 2024 rules separate fighting from retaliating; rules that cover both say so (Purity Seals in this same PDF) | Confirmed
- T-PH.31 **PATIENT AMBUSH** | Firefight | 1 CP | When it is your turn to activate a friendly operative | You skip that activation; play passes to the opponent.
  - MECH: window `firefight.beforeActivation` (the seat on turn only) and `firefight.skipActivation(ctx, seat)` (Heinous Arrogance pattern); 0 CP through T-PH.8 (b) | CLASS: team-hook (built: `skipActivation`)
  - RULING: Phobos Strike Team Patient Ambush | offered only when the seat would activate a ready operative (never on a counteract turn); allowed even if the opponent has no ready operative | counteracting is not activating (R-3.11); the card sets no other condition (Heinous Arrogance ruling) | Unsourced
- T-PH.32 **CRITICAL SHOT** | Firefight | 1 CP | When a crit is resolved for a friendly PHOBOS STRIKE TEAM operative shooting with a bolt weapon | That crit inflicts D3 extra damage.
  - MECH: 0 CP-able ploy offer in the attacker's `shoot.attackerDefenceRolled` window when the attacker retained at least one crit and the weapon is a bolt weapon; the effect is latched to that sequence and `onDamageInflicted` (source `crit`) adds a D3 roll to the first crit that deals damage | CLASS: team-hook (see gaps `critResolveWindow`)
  - RULING: Phobos Strike Team Critical Shot timing | bought after the defence dice are rolled and before blocks are assigned; the D3 goes on the first crit that deals damage in that sequence; if every crit is blocked the ploy does nothing (the AI buys it only when the crits outnumber what the defence can block) | the engine has no window at the resolution of each die, and the attacker knows both rolls at this point | Unsourced
- T-PH.33 **TRANSHUMAN PHYSIOLOGY** | Firefight | 1 CP | An operative is shooting a friendly PHOBOS STRIKE TEAM operative, in the Roll Defence Dice step | Retain one of your normal successes as a crit instead.
  - MECH: defender ploy in `shoot.defenceRolled` (after defence re-rolls); one retained `normal` becomes `crit`, `tag: 'transhuman'` | CLASS: team-hook
  - RULING: Phobos Strike Team Transhuman Physiology | any retained normal success may be upgraded, a retained cover save included | the cover save is retained in the Roll Defence Dice step and the card, unlike "you rolled" wordings, does not exclude it | Unsourced
- T-PH.34 **STEALTH ASSAULT** | Firefight | 1 CP | A friendly PHOBOS STRIKE TEAM operative that had a Conceal order when activated was given an Engage order, performed Charge and then Fight as its first two actions, and you are resolving its first attack die of the activation | After resolving that die, you immediately resolve one more of your attack dice before the opponent resolves.
  - MECH: team ledger records the order each operative held when its activation was chosen; ploy offered in the attacker's `fight.rolled` window of the first Fight of the activation when performed = [charge, fight]; provider `afterFightResolution` owes the Phobos seat one more resolution (strike or block) after its first | CLASS: team-hook (built: `afterFightResolution`)
  - RULING: Phobos Strike Team Stealth Assault | only the first Fight of the activation qualifies (not an ASTARTES second Fight); the extra die may strike or block; if the opponent resolves first (a resolve-first rule), the extra die follows our first die all the same | "your first attack dice from this activation"; resolving a die is either striking or blocking (R-6.5) | Unsourced

### 13.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-PH.35 **PURITY SEALS** | Once per TP, when a friendly PHOBOS STRIKE TEAM operative is shooting, fighting or retaliating and its attack roll has two or more fails, you may discard one fail and retain another fail as a normal success.
  - MECH: 0 CP equipment offer in `shoot.attackRolled` (attacker) and `fight.rolled` (both fighters) after re-rolls; one `fail` becomes `normal`, `tag: 'purity'`; seat once-per-TP ledger; Purity Seals token | CLASS: team-hook
  - RULING: Phobos Strike Team Purity Seals | attack dice only, after all re-rolls; once per TP for the whole team | the operative is the one shooting or fighting, so its dice are attack dice; "if you roll" refers to the finished roll (Chaos Talismans ruling) | Unsourced
- T-PH.36 **ADDITIONAL UTILITY GRENADES** | Pick four utility grenades (any mix of smoke and stun, M-5.5) instead of two. Cannot be taken together with the universal Utility Grenades.
  - MECH: equipment with `choice { pick: 4, from: ["core.a.smoke-grenade", "core.a.stun-grenade"], repeatable: true }` and `excludes: ["core.e.utility-grenades"]`; team-local: before the first Strategy phase, copy its picks into `state.equipment.picks[seat]['core.e.utility-grenades']` so `grenadeSource` pays them | CLASS: team-hook (see gaps `equipmentPickAlias`)
  - RULING: Phobos Strike Team Additional Utility Grenades | four picks, two smoke and two stun by default; exclusive with the universal option | the card forbids taking both and gives no other limit | Confirmed
- T-PH.37 **COMBAT BLADES** | Every friendly PHOBOS STRIKE TEAM operative has the combat blade (13.3).
  - MECH: equipment `grants` of `ph.w.combat-blade` with `grants.to` keyword PHOBOS STRIKE TEAM | CLASS: data
  - RULING: Phobos Strike Team Combat Blades and Reivers | a Reiver with a combat knife also gets the combat blade as another melee option | the card has no "use the better one" clause and the two profiles differ | Confirmed
- T-PH.38 **SPECIAL ISSUE AMMUNITION** | Once per TP, when a friendly PHOBOS STRIKE TEAM operative performing the Shoot action selects a bolt carbine, marksman bolt carbine or occulus bolt carbine, that weapon has Piercing 1 until the end of the TP.
  - MECH: 0 CP equipment offer in the `shoot.targetSelected` window (seat once-per-TP ledger, Tainted Rounds pattern); `modifyWeaponRules` adds `core.wr.piercing` 1 for that operative and weapon until `turningPoint.end`; Special Issue Ammunition token | CLASS: team-hook
  - RULING: Phobos Strike Team Special Issue Ammunition weapons | only the bolt carbine, marksman bolt carbine and occulus bolt carbine; not the stalker marksman or custom bolt carbines, not the pistol | the equipment lists three weapons by their full names, while ASTARTES shows how the team writes a "contains bolt" test | Unsourced
  - RULING: Phobos Strike Team Special Issue Ammunition duration | Piercing 1 stays on that operative's weapon for the rest of the TP (its second Shoot, Guard shots, counteractions); other operatives' copies of the same weapon are unaffected | "that weapon ... until the end of the turning point" | Unsourced

Marker/token guide (UI): Omniscrambler token, Vanguard token, Tactical Advantage token, Explosives marker, Medic token, Haywire Mine marker, Remote Detonator token (Limited use), Purity Seals token, Auspex Scan token, Special Issue Ammunition token.

### 13.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-PH: TEAM-PH-000 to TEAM-PH-034.

### 13.9 Generic capabilities (survey; resolved in the Engine map below)

Built and used (batch A to C): `initiativeReroll`, `costAdjust`, `canActivate`, `actionForbidden`, `actionCostDelta`, `controlTotal`, `maxRepeats`, `counteract: 'any'`, `target.status`, `rerollsBanned`, `fixedTargets`, `weaponForbidden`, `operativeChoices` (`distinctFrom`, `keyword: false`, `forKeyword`), `guardUnderConceal`, `moveSurcharge`, `skipActivation`, `afterFightResolution`, `extraActions`, `flags` (ignoreInjured), Medic! pattern, Spot pattern, team markers, `startFreeAction`.

Not built (team-local fallback named; none blocks the team):
- **critResolveWindow** (NICE): a ploy window as each attack die is resolved. Used by T-PH.32. Fallback: buy at `shoot.attackerDefenceRolled`, apply to the first crit that deals damage (RULING).
- **teamMineEffect** (NICE): a mine marker with its own effect (2D3+3, APL -1, end the action and stop the move at the trigger point) and its own exemptions. The core check (`markers.triggerMines`) has fixed D3+3 and no action end. Used by T-PH.21. Fallback: a plain team marker and an `action.ended` scan of the action's `OperativeMoved` segments, putting the operative back at the trigger point with a forced move (RULING).
- **placeMarkerSpots** (NICE): a provider filtering the spots of a Place Marker decision. Used by T-PH.20. Fallback: `actionForbidden` on the Minelayer's Place Marker while an enemy is within 2" plus the marker radius (RULING), and team code for the dying Minelayer's drop.
- **carriedFromSetup** (NICE): data for "this operative starts the battle carrying marker X". Used by T-PH.13, T-PH.20. Fallback: team code creates both markers already carried before the first Strategy phase (first `turningPoint.start`, before anything can act) and restricts their Pick Up to the owning operative with `actionForbidden`.
- **equipmentPickAlias** (NICE): faction equipment whose picks count as a universal option's picks. `grenadeSource` reads only `core.e.utility-grenades`. Used by T-PH.36. Fallback: copy the picks into that key before the first Strategy phase (the two options exclude each other, so nothing is overwritten); if the smoke and stun actions are only listed with the universal option, offer them through `extraActions`.
- **fixedTargetOrder** (NICE): an order decision for fixed-target sequences. Used by T-PH.14. Fallback: provider order (RULING).

### 13.10 Gotchas

- The PDF wins over Wahapedia once (Corrected RULING): the Incursor Sergeant has the occulus bolt carbine (Saturate), not the marksman bolt carbine. Two wording differences change nothing: Omni-Scrambler's "this turning point's Firefight phase" against "the following Firefight phase", and Tactical Advantage's "after" against "when" rolling off. Track Target's "during its activation" (PDF only) is redundant.
- Every ranged weapon except the remote detonator is a bolt weapon, so ASTARTES' bolt clause almost never bites; the same bolt weapon may shoot twice. Special Issue Ammunition, however, names only three carbines.
- Omni-Scrambler is a STRATEGIC GAMBIT, not a strategy ploy: Comms Array cannot swap it, and it costs no CP. It bans activation and every action until the opponent has activated N operatives (N = INFILTRATORs in the killzone when used, Voxbreaker included) or the target is their last ready operative. It never strands the opponent.
- Terror and Vanguard both touch Pick Up Marker and mission actions; Terror's +1 AP makes a 1 AP mission action impossible as a counteraction for enemies near a Reiver (a counteraction costs exactly 1 AP, R-3.12).
- Multi-Spectrum Array and Auspex Scan stop obscuring only; they do not remove cover. Auspex Scan's Seek Light is for INCURSOR shooters only and is measured from the Voxbreaker (8").
- Voxbreak bans every enemy re-roll for enemies within 6" of the Voxbreaker, attack and defence alike, Command Re-roll included.
- Detonate hits friend and foe within 2" of the Explosives marker, ignores visibility, cover and obscuring, needs the marker placed (carried does not count), and removes it afterwards. The usual sequence is Place Marker, free Dash, Shoot with the detonator (Heavy allows only Dash). Its close-quarters Lethal 5+ is inert on Volkus.
- The Haywire Mine hurts any operative but the Minelayer, Phobos operatives included; it deals 2D3+3 (not the universal mine's D3+3), APL -1, and ends the victim's action. It can never be placed in an enemy's control range.
- Medic! leaves D3 wounds (not 1). Helix Gauntlet heals D3+3 and may target the Helix Adept itself.
- Reivers: every climb costs 2", drops are free (errata: climbing up only). A pistol-and-knife Reiver has no fists; with Combat Blades it also gets the combat blade.
- Lethal Assaults is for fighting only (not retaliating); Deadly Shots' second clause was rewritten by the November '25 errata (not in cover and more than 6" away). Dash never spoils Deadly Shots.
- Tactical Advantage is one free firefight ploy per battle (for the leader as the named operative, or Patient Ambush while the leader is ready) plus one initiative re-roll per battle; all three Sergeants have it.
- Stealth Assault needs Conceal at activation, a switch to Engage, and Charge then Fight as the first two actions; it gives one extra resolution after the first die only.
- There is no special stealth deployment, no Scout move and no infiltrate set-up in this version: Phobos operatives deploy normally.
- Edition leaks to reject: nothing from the 2021 Phobos book (older datacards, ploys, the older Omni-Scrambler, shape distances, 2 APL), no 40k 10th Phobos rules (reserve-denial auras, Leadership or Battle-shock tests from Terror, wound rolls); inches only, three defence dice, every printed number from the November '25 cards.

### 13.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (leader 1 of 3, main 5, three WARRIOR cards repeatable) | team.json slots, `repeatable` |
| Reiver loadouts | datacard `weapons.options` with two `sets` |
| Tactical Advantage | providers `initiativeReroll` / `onInitiativeReroll`; `registerPloyRule.costAdjust` (`via: 'tacticalAdvantage'`) + `onUsed`; one once-per-battle ledger per bullet |
| Strategic Oversight | `turningPoint.start` handler, `ctx.roll`, `gainCp` |
| Comms Array | 0 CP offers in `firefight.activationStart` / `firefight.actionEnded`; `effects.removeEffects` then add the new ploy effect (team-local) |
| Medic!, Helix Gauntlet | the Pathfinders pattern (`beforeIncapacitated`, `onDamageInflicted` floor, `startFreeAction({ action: 'dash', endWithinCrOf })`, `Activation.endsAfterAction`, `applyAplEffect`); `effects.regainWounds` |
| Explosives and Haywire Mine markers | team markers created carried before TP1's Strategy phase; `actionForbidden` for other operatives' `marker:pickUp` and for the Minelayer's Place Marker near enemies |
| Plant Explosives | after Place Marker: `startFreeAction({ action: 'dash' })` |
| Detonate | providers `fixedTargets` (`noCover`, `noObscured`, `blast: false`; Heavy test via `los` terrain queries) and `weaponForbidden`; `action.ended` removes the marker |
| Custom | team.json `operativeChoices` (`custom-1`, `custom-2`, `distinctFrom`, `keyword: false`, `forKeyword: VETERAN`); `modifyWeaponRules` |
| Voxbreak | provider `rerollsBanned` |
| Auspex Scan, Multi-Spectrum Array | `target.status` (`obscured: false`); `modifyWeaponRules` Seek Light + `beforeShootTargetSelect` (Spot pattern); source-lifetime token |
| Vanguard | provider `actionCostDelta` -1 + `action.declared` ledger |
| Track Target | provider `guardUnderConceal`; `action.declared` flips the order to Engage |
| Proximity Mine | `action.ended` scan of `OperativeMoved` segments; `removeMarker`, `applyAplEffect`, `directDamage`; forced reposition to the trigger point (team-local) |
| Grav-chute | provider `moveSurcharge` (negative) |
| Omni-Scrambler | strategic gambit with `ability.choice`; providers `canActivate` and `actionForbidden`; `activation.start` counter; token |
| Terror | providers `actionCostDelta`, `controlTotal` |
| ASTARTES | providers `maxRepeats`, `counteract: 'any'`; `beforeShootTargetSelect` bolt check |
| Guerrilla Warfare | ploy effect + provider `extraActions` (`ph.a.guerrilla-warfare`) |
| And They Shall Know No Fear | provider `flags` ignoreInjured |
| Deadly Shots, Lethal Assaults, Special Issue Ammunition, Custom | `modifyWeaponRules` (with `targetId` where per target) |
| Patient Ambush | `firefight.beforeActivation` + `firefight.skipActivation` |
| Critical Shot | ploy at `shoot.attackerDefenceRolled`; `onDamageInflicted` (+D3 on the first damaging crit) |
| Transhuman Physiology | defender ploy at `shoot.defenceRolled`; normal-to-crit conversion |
| Stealth Assault | order ledger; ploy at `fight.rolled`; provider `afterFightResolution` |
| Purity Seals | 0 CP offer at `shoot.attackRolled` / `fight.rolled`; fail-to-normal conversion |
| Additional Utility Grenades | equipment `choice` pick 4 + `excludes`; picks copied to the universal key (team-local) |
| Combat Blades | equipment `grants` with `grants.to` PHOBOS STRIKE TEAM |

### 13.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/phobos-strike-team/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `ph.<name>`, `ph.w.`, `ph.wg.`, `ph.a.`, `ph.p.`, `ph.e.`; team weapon rules `ph.a.wr-detonate`, `ph.a.wr-custom`)
  - `src/engine/teams/phobos-strike-team.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/phobos-strike-team.ts` (weapon flavour, VFX family, sound, attachments; figure stand-ins `ph-infiltrator-sergeant`, `ph-incursor-sergeant`, `ph-reiver-sergeant-pistol-knife`, `ph-reiver-sergeant-carbine`, `ph-infiltrator-commsman`, `ph-infiltrator-helix-adept`, `ph-infiltrator-saboteur`, `ph-infiltrator-veteran`, `ph-infiltrator-voxbreaker`, `ph-infiltrator-warrior`, `ph-infiltrator-warrior-b`, `ph-incursor-marksman`, `ph-incursor-minelayer`, `ph-incursor-warrior`, `ph-incursor-warrior-b`, `ph-reiver-warrior-pistol-knife`, `ph-reiver-warrior-carbine`; Explosives and Haywire Mine marker models)
  - `tests/engine/teams/phobos-strike-team.test.ts` (TEAM-PH-nnn tests) and `tests/engine/teams/phobos-strike-team.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 13 and `12-rules-test-checklist.md` section TEAM-PH (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/phobos-strike-team/team.json`. Flip it (with `defaults` filled, including two Custom picks for a default Veteran, and every weapon in `src/client/teams/phobos-strike-team.ts`) only when the team is complete and all gates pass.
- Scaffold: only the Infiltrator Sergeant and its weapons exist; add the Incursor and Reiver Sergeants (the Incursor Sergeant carries the occulus bolt carbine, not the marksman one) and the ten main-list cards.
- Capabilities to use: the Engine map above; every batch A to C generic it names is built. The not-built items (13.9) are team-local fallbacks: Critical Shot timing, Haywire Mine trigger and placement, carried-from-set-up markers, Additional Utility Grenades picks alias, Detonate order. Do first: ASTARTES and Multi-Spectrum Array (TEAM-PH-003, TEAM-PH-006), Omni-Scrambler (TEAM-PH-004) and Terror (TEAM-PH-005); then the Saboteur chain (TEAM-PH-013 to TEAM-PH-015) and the Minelayer (TEAM-PH-021, TEAM-PH-022); then Tactical Advantage (TEAM-PH-007, TEAM-PH-008).
- Team-local weapon rules the scaffold leaves out: `ph.a.wr-detonate` (remote detonator) and `ph.a.wr-custom` (custom bolt carbine); the leader's weapons carry none.
- RULING lines expected: Incursor Sergeant weapon (Corrected), bolt weapons, Tactical Advantage initiative and free ploy, Strategic Oversight use, Comms Array change, Medic! opportunity, Helix Gauntlet self-target, Plant Explosives start and free Dash, team marker pick-up, Detonate targets, order, nothing in range and close quarters, Custom picks, Voxbreak distance, Auspex Scan distance, Vanguard use, Track Target order change, Haywire Mine placement, Proximity Mine trigger and near friends, Grav-chute, Omni-Scrambler count, Terror stacking, Guerrilla Warfare as a counteraction, Deadly Shots outside an activation and cover, Lethal Assaults and retaliating, Patient Ambush, Critical Shot timing, Transhuman Physiology, Stealth Assault, Purity Seals, Additional Utility Grenades, Combat Blades and Reivers, Special Issue Ammunition weapons and duration.
- Gotchas: section 13.10. Six operatives use the 6-operative kill grade row. The Haywire Mine is not the universal Mines equipment (do not give it the `mines` code, or the core check fires D3+3 on it). Detonate shoots friendly operatives too. All three Sergeants share Tactical Advantage; only one is ever on the roster.

## 14. Corsair Voidscarred

Rule IDs `T-CV.<n>`, checklist IDs `TEAM-CV-<nnn>`. Sources: the team PDF (Corsair Voidscarred, Faction version 3, January '26 update log state, including the January '26 errata, the earlier errata and one rules commentary; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia page (faction version 3, January 2026, with one FAQ entry: Quick on the Trigger while on guard, the same answer as the PDF commentary). The two agree on every stat, weapon and rule; the only reading problem is the update-log extract of the Faolchú's Bond errata, which loses its strike-through (14.3 UNCLEAR). Facts read from the PDF are Confirmed; our own calls are Unsourced. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed (display names keep their diacritics, ids do not: `cv.w.faolchu`). Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 14.1 Team selection

- T-CV.1 Roster is exactly 9 operatives: 1 VOIDSCARRED FELARCH (leader) plus 8 picks from the main list (T-CV.2). Nothing counts as two selections or half a selection.
  - MECH: roster validator: leader slot count 1, main slot count 8 | CLASS: data
- T-CV.2 Main list: FATE DEALER, GUNNER, HEAVY GUNNER, KURNATHI, KURNITE HUNTER, SHADE RUNNER, SOUL WEAVER, STARSTORM DUELLIST, WARRIOR, WAY SEEKER. WARRIOR may be taken any number of times; every other entry at most once. The roster may not contain both a blaster (Gunner option) and a wraithcannon (Heavy Gunner option).
  - MECH: main slot `repeatable: ["cv.warrior"]`; `selection.loadoutCaps: [{ label: "blaster or wraithcannon", weapons: ["cv.w.blaster", "cv.w.wraithcannon"], max: 1 }]`; `capAwareLoadouts` keeps the defaults legal | CLASS: data
  - RULING: Corsair Voidscarred blaster and wraithcannon | one loadout cap of 1 over both weapons; either one alone is legal | the selection page bans having both, and each is held by a single once-only card | Confirmed
- T-CV.3 Loadouts:
  - FELARCH: shuriken rifle, shuriken pistol and power weapon; or neuro disruptor and power weapon.
  - GUNNER: blaster or shredder, plus shuriken pistol and fists.
  - HEAVY GUNNER: shuriken cannon (both profiles), or wraithcannon; plus shuriken pistol and fists in both cases.
  - WARRIOR (each separately): shuriken pistol and power weapon; or shuriken rifle and fists.
  - FATE DEALER, KURNATHI, KURNITE HUNTER, SHADE RUNNER, SOUL WEAVER, STARSTORM DUELLIST, WAY SEEKER: every weapon on the card (fixed, no picker).
  - MECH: datacard `weapons.options` (`sets` slots for Felarch, Gunner, Heavy Gunner, Warrior); profile groups `cv.wg.shuriken-cannon` and `cv.wg.ranger-long-rifle` bring both profiles | CLASS: data
- T-CV.4 Archetypes: INFILTRATION, RECON (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["infiltration", "recon"]` | CLASS: data
- T-CV.5 Keywords: every operative carries CORSAIR VOIDSCARRED, AELDARI and ANHRATHE plus its role keyword (FELARCH also has LEADER). SOUL WEAVER and WAY SEEKER also have PSYKER; SOUL WEAVER also has MEDIC. This version has no per-operative specialisms or keyword picks (no `operativeChoices`).
  - MECH: keyword lists in operatives.json | CLASS: data
- T-CV.6 **PSYCHIC**: freezing grasp, lightning strike and witch staff carry the PSYCHIC tag; SOUL CHANNEL, SOUL HEAL, WARP FOLD and WARDING SHIELD are PSYCHIC unique actions. The tag has no effect on its own; other teams' rules read it (the Novitiate Condemnor's Null Rod switches off PSYCHIC actions and PSYCHIC ranged weapons within 6" and stops PSYCHIC actions picking or counting an operative it protects).
  - MECH: team-local weapon rule `cv.a.wr-psychic` with no resolver on the three weapons; ability records of the four actions have `keywords: ["PSYCHIC"]` (the shared block in `abilities.genericProblem` and `attack-common.weaponUnusable` then applies); team code asks `psychicSelectable` for every operative a PSYCHIC action may pick and `psychicAllowed` before a lasting PSYCHIC effect applies (T-CV.22) | CLASS: generic:psychic

### 14.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| VOIDSCARRED FELARCH | 2 | 7" | 4+ | 9 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, LEADER, FELARCH |
| VOIDSCARRED FATE DEALER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, FATE DEALER |
| VOIDSCARRED GUNNER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, GUNNER |
| VOIDSCARRED HEAVY GUNNER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, HEAVY GUNNER |
| VOIDSCARRED KURNATHI | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, KURNATHI |
| VOIDSCARRED KURNITE HUNTER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, KURNITE HUNTER |
| VOIDSCARRED SHADE RUNNER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, SHADE RUNNER |
| VOIDSCARRED SOUL WEAVER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, PSYKER, MEDIC, SOUL WEAVER |
| VOIDSCARRED STARSTORM DUELLIST | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, STARSTORM DUELLIST |
| VOIDSCARRED WARRIOR | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, WARRIOR |
| VOIDSCARRED WAY SEEKER | 2 | 7" | 4+ | 8 | 28 | CORSAIR VOIDSCARRED, AELDARI, ANHRATHE, PSYKER, WAY SEEKER |

Notes: every card is APL 2, Move 7", Save 4+; only the Felarch has 9 wounds. Both sources print a 28mm base on every card. The PDF prints "CORSAIR VOIDSCARRED ," with a stray space; the keyword is CORSAIR VOIDSCARRED.

### 14.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Neuro disruptor | R | 4 | 3+ | 4/5 | Range 8", Piercing 1, Stun | Felarch (option) |
| Shuriken pistol | R | 4 | 3+ | 3/4 | Range 8", Rending | Felarch (option), Fate Dealer, Gunner, Heavy Gunner, Kurnathi, Kurnite Hunter, Shade Runner, Soul Weaver, Starstorm Duellist, Way Seeker; Warrior (option) |
| Shuriken rifle | R | 4 | 3+ | 3/4 | Rending (Accurate 1 under Rifles, T-CV.23) | Felarch (option), Warrior (option) |
| Power weapon | M | 4 | 3+ | 4/6 | Lethal 5+ | Felarch, Kurnite Hunter, Soul Weaver; Warrior (option) |
| Ranger long rifle (mobile) | R | 4 | 3+ | 3/4 | none (Accurate 1 under Rifles) | Fate Dealer |
| Ranger long rifle (stationary) | R | 4 | 2+ | 3/3 | Devastating 3, Heavy, Silent (Accurate 1 under Rifles) | Fate Dealer |
| Fists | M | 3 | 3+ | 2/3 | none | Fate Dealer, Gunner, Heavy Gunner, Starstorm Duellist; Warrior (option) |
| Blaster | R | 4 | 3+ | 4/5 | Piercing 2 | Gunner (option) |
| Shredder | R | 4 | 3+ | 4/5 | Rending, Torrent 2" | Gunner (option) |
| Shuriken cannon (focused) | R | 5 | 3+ | 4/5 | Heavy (Dash only), Rending | Heavy Gunner (option) |
| Shuriken cannon (sweeping) | R | 4 | 3+ | 4/5 | Heavy (Dash only), Rending, Torrent 1" | Heavy Gunner (option) |
| Wraithcannon | R | 4 | 3+ | 6/3 | Devastating 4, Heavy (Dash only), Piercing 2 | Heavy Gunner (option) |
| Dual power weapons | M | 4 | 3+ | 4/6 | Ceaseless, Lethal 5+ | Kurnathi |
| Faolchú | R | 4 | 3+ | 1/2 | Rending, Saturate, Seek Light, Silent | Kurnite Hunter |
| Throwing blades | R | 4 | 3+ | 2/4 | Range 6", Silent | Shade Runner |
| Hekatarii blades | M | 4 | 3+ | 3/5 | Ceaseless, Lethal 5+ | Shade Runner |
| Fusion pistol | R | 4 | 3+ | 5/3 | Range 3", Devastating 3, Piercing 2 | Starstorm Duellist |
| Freezing grasp | R | 4 | 3+ | 1/2 | PSYCHIC, Severe, Silent, Stun | Way Seeker |
| Lightning strike | R | 4 | 3+ | 4/3 | PSYCHIC, 2" Devastating 2 | Way Seeker |
| Witch staff | M | 4 | 3+ | 3/5 | PSYCHIC, Shock | Way Seeker |

Notes: 20 profiles over 18 weapons. The shuriken pistol, shuriken rifle, power weapon and fists are identical on every card and share one record each. Profile groups: `cv.wg.ranger-long-rifle` (mobile, stationary) and `cv.wg.shuriken-cannon` (focused, sweeping). PSYCHIC is the tag `cv.a.wr-psychic` (T-CV.6); every other weapon rule is core (R-10). The Faolchú is the Kurnite Hunter's hunting beast, used as a ranged weapon.

UNCLEAR (resolved): the flow extract scrambles the Fate Dealer, Heavy Gunner, Kurnite Hunter, Shade Runner and Starstorm Duellist tables (Hit/Dmg columns listed in one block). The values were rebuilt from the layout extract read row by row and match Wahapedia exactly.
UNCLEAR (resolved): the blaster, shredder, Faolchú, both ranger long rifle profiles, both shuriken cannon profiles, the wraithcannon, freezing grasp and lightning strike print no Range in either source. RULING: Corsair Voidscarred weapons without Range | no Range rule, any valid target in the killzone | both sources omit it on the same rows while every pistol prints its Range | Confirmed
UNCLEAR (resolved): four profiles print a crit Dmg at or below the normal Dmg: wraithcannon 6/3, fusion pistol 5/3, lightning strike 4/3, ranger long rifle (stationary) 3/3. Kept as printed; never tune printed numbers. RULING: Corsair Voidscarred low crit Dmg | 6/3, 5/3, 4/3 and 3/3 as printed, with each weapon's Devastating on top for a retained crit | identical in the PDF and Wahapedia; the Devastating value is the crit payoff (2024 melta pattern) | Confirmed
UNCLEAR (resolved): the January '26 update log entry for Faolchú's Bond shows both "if it's ready" and "it hasn't used its Faolchú ranged weapon during this turning point" in one sentence because the extract drops the strike-through. The datacard in the same PDF and Wahapedia both read "if it's ready", so the struck text is the old condition. RULING: Corsair Voidscarred Faolchú's Bond errata | the condition is "the Kurnite Hunter is ready"; the old "has not used the Faolchú this TP" condition is gone | the January '26 card text in both sources | Confirmed

### 14.4 Operative rules and unique actions

- T-CV.7 **Veteran Raider** (Felarch): instead of the free Dash every other Corsair gets from Aeldari Raiders (T-CV.24), once in each of its activations the Felarch may perform any one 1 AP action for free.
  - MECH: the team provider `actionCostDelta` returns -1 for the Felarch's first action in its own activation whose cost from every other source is exactly 1 AP (sum the data `costDelta` through `abilities.actionCostDelta` and every other provider through `teamRuleProviders()` excluding this team's, so there is no recursion); 0 in counteractions (`act.counteract`) and free-action frames (`act.frame`); a per-activation ledger (`act.used` entry `cv.raiders`) is written in `action.ended` when the ended action was discounted (an action cancelled at declaration does not spend it) | CLASS: team-hook
  - RULING: Corsair Voidscarred Veteran Raider | applied automatically to the Felarch's first action in its activation that costs exactly 1 AP after every other modifier (a Fall Back at 1 AP under Capricious Flight qualifies; a Pick Up Marker taxed to 2 AP does not); it replaces the free Dash, so the Felarch never gets both | every 1 AP action saves the same 1 AP, so the choice never matters, and the card says "instead of the Dash action"; "1AP action" is read after cost modifiers as R-3.12 does | Unsourced
- T-CV.8 **One Step Ahead** (Felarch): once per battle, after an enemy operative performs any action, if the Felarch is ready you may use this rule: roll one D6; if the result beats that enemy's current APL, the Felarch interrupts and performs a free Shoot or a free Fight in which the only enemy it may target or fight is that enemy (Blast secondaries are still hit). After that action the Felarch has APL -1 until the end of its next activation (R-9.6 cap). Per the January '26 errata the trigger is any enemy action, not only one made during the enemy's activation.
  - MECH: provider `reactions` (offered to the Corsair seat after every enemy action, counteractions and free actions included, Strategy-phase free moves via `ReactionInfo.strategy`), options `shoot` and `fight` only when that free action is possible against that enemy (`canStartFreeAction`); the hook's `choice` spends the battle use, rolls the D6 against `effectiveApl(enemy)`, and on success runs `startFreeAction({ action, interrupt: true, resume: 'cv.oneStepAhead' })`; `beforeShootTargetSelect` keeps only that enemy as a primary candidate and provider `fightTargets` keeps only that enemy; the resume applies `applyAplEffect(-1)` to the Felarch; One Step Ahead token | CLASS: team-hook (generic:reactions)
  - RULING: Corsair Voidscarred One Step Ahead trigger | offered after any action of an enemy operative (its activation, its counteraction, a free action in the Strategy phase); the Felarch must be ready; using the rule spends the battle use even when the roll fails; Shoot or Fight is chosen before the roll and offered only when it is possible against that enemy; when a Guard interrupt is also possible the Corsair player picks the order | the errata deleted "during its activation"; "if you do, roll" makes the roll part of the use; picking the action before the roll changes nothing because rolling changes no state; same order call as Quicksilver Strike (T-WYR.14) | Unsourced
  - RULING: Corsair Voidscarred One Step Ahead APL penalty | the -1 APL applies only when the free Shoot or Fight was performed; a failed roll costs nothing but the use | the card ties the penalty to performing that action | Confirmed
- T-CV.9 **Camo Cloak** (Fate Dealer): whenever any operative shoots the Fate Dealer, the shooter's weapons lose Saturate, and if the Fate Dealer can retain any cover saves it may retain one more, or retain one as a crit instead (not cumulative with the Vantage improved cover save).
  - MECH: provider `stealthyCover` returns 1 for the Fate Dealer (the shared Stealthy implementation, T-AOD.16 #4); `modifyWeaponRules` removes Saturate when `targetId` is the Fate Dealer (as T-AOD.13) | CLASS: team-hook
- T-CV.10 **Blademaster** (Kurnathi): in an activation in which it performed a Charge, it may still perform a Dash (normally barred, R-4.2), but that Dash may only use the Charge's unused distance, and never more than 3".
  - MECH: no provider lifts the hard-coded "Dash is barred after Charge" check (gap `actionRestrictionLift`, 14.9). Fallback: a unique action `cv.a.blademaster` ("Dash (Blademaster)", 1 AP, treated as a Dash for every rule, R-4.13) offered through `extraActions` only when the Kurnathi performed a Charge this activation, has not Dashed, is not in an enemy's control range and has distance left; its effect runs `startFreeAction({ action: 'dash', maxMove: min(3, chargeLimit - chargeDistance), resume: 'cv.blademaster' })`; `actionForbidden` bars `dash` after it and it after a `dash`; the Aeldari Raiders discount (T-CV.24) treats it as the Dash | CLASS: team-hook (gap actionRestrictionLift)
  - RULING: Corsair Voidscarred Blademaster distance | remaining distance = the Charge's limit (Move + 2" with every Move change, injury included) minus the distance the Charge used (climb, drop and Accessible costs included, read from `movedThisActivation` at the end of the Charge), capped at 3"; the Dash keeps every other Dash condition (no climbing, not in an enemy's control range, so it is only possible once the charged enemy is gone or the Kurnathi is otherwise free), and it is the operative's free Dash when Aeldari Raiders is unused | "remaining move distance it had from that Charge action" is the Charge limit less what was moved; the rule lifts only the Charge-then-Dash ban | Unsourced
- T-CV.11 **Bladed Stance** (Kurnathi): whenever it fights or retaliates, its player may resolve one of its successes before the normal resolution order begins; that success must be used to block.
  - MECH: provider `fightResolveStart` returns `queue: [{ seat: corsair, blockOnly: true }]` when the Kurnathi is a fighter (the Wyrmblade Bladed Stance code path, T-WYR.13) | CLASS: team-hook
  - RULING: Corsair Voidscarred Bladed Stance use | optional: the owed block-only resolution offers the legal blocks and a pass; the AI blocks when one of its successes can cancel an enemy crit | "you can"; same wording and implementation as the Wyrmblade Locus | Unsourced
- T-CV.12 **Faolchú's Bond** (Kurnite Hunter): the first time in each TP that it retaliates, if it is ready, its side resolves the first die of that fight instead of the attacker.
  - MECH: provider `fightResolveStart` (`first` = the Corsair seat when the defender is the Kurnite Hunter, it is ready and the TP ledger is unset); `onFightResolved` sets the TP ledger whenever the Kurnite Hunter was the defender; Faolchú's Bond token on the figure while unused | CLASS: team-hook
  - RULING: Corsair Voidscarred Faolchú's Bond use | only the first retaliation of each TP can qualify; if the Kurnite Hunter is expended at that first retaliation the rule is spent for the TP; against an attacker with its own resolve-first rule the active operative's player decides (R-9.4 step 5) | "the first time ... that this operative is retaliating, if it's ready" names one moment and checks readiness then; neither rule claims precedence | Unsourced
- T-CV.13 **Erudite Hunter** (Kurnite Hunter): a STRATEGIC GAMBIT usable while the Kurnite Hunter is in the killzone: pick one enemy operative within 9" of it (no visibility needed). Once in that TP, after that enemy performs an action in which it moves, you may interrupt: the Kurnite Hunter performs either a free Reposition that may not end further from that enemy than it started, or a free Charge (you may switch it to Engage first) that must end within that enemy's control range. Per the errata the trigger is any action of that enemy, not only one in its own activation.
  - MECH: strategic gambit ability with an `ability.choice` over enemies within 9" (as Eye of the Ancestors, T-HK.7); Erudite Hunter token on the enemy (`tokens.ts`, expires `turningPointEnd`); provider `reactions` (info.actorId is the marked enemy and `info.moved`), options only for the free actions that are possible; `startFreeAction({ action: 'charge', endWithinCrOf: enemy, interrupt: true })` with the optional order flip, or `startFreeAction({ action: 'reposition', interrupt: true })` whose end is checked by the fallback below; the TP use is spent when the free action starts | CLASS: team-hook (gap moveEndNotFurther)
  - RULING: Corsair Voidscarred Erudite Hunter | "moves" includes being set up by its own action (`ReactionInfo.moved`); any action of that enemy qualifies (counteractions and free moves included); the Kurnite Hunter may be ready or expended; "further away" compares the base-to-base distance to that enemy at the end of the move with the distance at its start; nothing is offered, and nothing spent, when neither free action is possible; it is not a counteraction, so the 2" counteract cap does not apply | the errata deleted "during its activation"; distances between operatives are measured base to base (R-1); the rule names no readiness condition | Unsourced
- T-CV.14 **Blink Pack** (Shade Runner): whenever it performs Charge, Fall Back or Reposition it may warp jump: instead of moving it is lifted and set up wholly within 7" horizontally of where it was, in a spot where it can be placed and, except for a Charge, not within any enemy's control range. A Dash can never warp jump. Errata: the old ban on warp jumping and Dashing in the same activation is deleted. In a close-quarters killzone the 7" may be measured through Wall terrain (no effect in the open killzone).
  - MECH: provider `canFly` (true for `charge`, `fallBack`, `reposition`), provider `flyLimit` 7 for those kinds; payload `fly: true` (`movement.planFly`); the shared FLY rules handle placement, the enemy control-range ban and the counteract 2" | CLASS: generic:canFly + flyLimit
  - RULING: Corsair Voidscarred Blink Pack distance | always 7" horizontally (any height is free), whatever the Move stat or injury; a warp-jump Charge gets no +2" beyond 7" and must still end in an enemy's control range; while counteracting it must be set up wholly within 2" (R-3.12) | the card gives a fixed horizontal distance for every listed action; the counteract cap names set-ups | Confirmed
- T-CV.15 **Slicing Attack** (Shade Runner): whenever it performs a Reposition with a warp jump, you may afterwards pick one enemy operative that a 1mm imaginary line no longer than 7", drawn between the Shade Runner and the spot it left (the line may bend), passes across; that enemy takes D3+2 damage. An enemy that was not visible to the Shade Runner when the action began cannot be picked.
  - MECH: `action.declared` (Shade Runner, `reposition`) stores the start position and the enemies visible to it then; a 0 CP offer in the Corsair seat's `firefight.actionEnded` window (ploy rule `extraOffers`, subject the Shade Runner, action `reposition`, the move used `fly`) with one option per candidate; candidates: enemies from the stored set for which some point P of the enemy's base gives distance(start base, P) + distance(P, end base) <= 7" (team-local geometry over sample points of each enemy base: centre and eight rim points); `directDamage(D3+2)` | CLASS: team-hook (gap pathLineCrossing)
  - RULING: Corsair Voidscarred Slicing Attack line | the line runs from any point of the Shade Runner's previous base footprint to any point of its new base and must touch the enemy's base; it may bend, so an enemy qualifies when the shortest such route through its base is 7" or less; terrain does not block the imaginary line; the damage is not an attack (no defence dice, no attack-die damage reductions); usable after a warp-jump Reposition made while counteracting; never after a warp-jump Charge or Fall Back | the card allows a non-straight line up to 7" and names Reposition only; it says nothing about terrain for this line | Unsourced
- T-CV.16 **SOUL CHANNEL** (Soul Weaver, 1 AP, PSYCHIC): pick one other friendly CORSAIR VOIDSCARRED operative visible to and within 6" of the Soul Weaver; it gets APL +1 until the end of its next activation (R-9.6 cap). Not while the Soul Weaver is in an enemy's control range.
  - MECH: unique action, support APL boost to a filtered friendly target (as T-PF.10) with `keywords: ["PSYCHIC"]`; candidate filter adds `psychicSelectable`; distance 9" while Runes of Guidance applies (T-CV.35) | CLASS: data (target filter team-hook)
- T-CV.17 **SOUL HEAL** (Soul Weaver, 1 AP, PSYCHIC): pick one friendly CORSAIR VOIDSCARRED operative (the Soul Weaver itself included) visible to and within 6" of the Soul Weaver; it regains up to 2D3 lost wounds (never above its starting wounds). Not while in an enemy's control range.
  - MECH: unique action with a friendly-target filter, `effects.regainWounds(2D3)`, `keywords: ["PSYCHIC"]`, `psychicSelectable` filter, Runes of Guidance distance | CLASS: data (target filter team-hook)
  - RULING: Corsair Voidscarred Soul Heal self-target | the Soul Weaver may heal itself | unlike Soul Channel the card does not say "other", and an operative is always visible to and within any distance of itself (core) | Confirmed
- T-CV.18 **Quick on the Trigger** (Starstorm Duellist): it may Shoot while in an enemy's control range. When it does, it may only target an enemy within its own control range, and may target one even though other friendly operatives are within that enemy's control range. FAQ (PDF commentary and Wahapedia): when the Duellist is on guard, is in an enemy's control range and interrupts with a Shoot, it may take a normal Shoot under this rule instead of a point-blank shot.
  - MECH: provider `shootInControlRange` (Duellist); `beforeShootTargetSelect`, while the Duellist is in an enemy's control range, replaces the candidates with the enemies in its control range that are valid targets apart from R-5.2's friendly-in-control-range clause (visible; a Conceal enemy must not be in cover); free Shoots and Guard interrupts need the fallback in 14.9 (gap `freeShootInControlRange`) | CLASS: team-hook (gap freeShootInControlRange)
  - RULING: Corsair Voidscarred Quick on the Trigger targets | an enemy in the Duellist's control range must still be visible and, if it has a Conceal order, not in cover; only R-5.2's friendly-in-control-range clause is waived; with no enemy in its control range the Duellist shoots normally | the rule changes only which enemies may be selected and the friendly-operatives clause | Unsourced
  - RULING: Corsair Voidscarred Quick on the Trigger on guard | a guarding Duellist in an enemy's control range interrupts with a normal Shoot under this rule: targets limited to enemies in its control range, no point-blank Hit penalty, and it may still retaliate later in that activation | the PDF rules commentary and the Wahapedia FAQ give this answer | Confirmed
  - RULING: Corsair Voidscarred Quick on the Trigger replaces point-blank | the Duellist's interrupt Shoot in an enemy's control range is always the Quick on the Trigger Shoot; the point-blank alternative (an invalid enemy in its control range at Hit +1) is not offered | the only extra target point-blank allows is a Conceal enemy in cover within 1", which is rare, and one shot mode keeps the interrupt decision simple | Unsourced
- T-CV.19 **PISTOL BARRAGE** (Starstorm Duellist, 1 AP): the Duellist performs two free Shoot actions, one with its fusion pistol and one with its shuriken pistol, in the order you choose; this overrides action restrictions. Not while it has a Conceal order, not in an activation in which it already performed a Shoot, and it cannot Shoot later in an activation in which it performed Pistol Barrage.
  - MECH: unique action; effect: `startFreeAction({ action: 'shoot', resume: 'cv.pistolBarrage' })` for the first Shoot, then in the resume a second with `weaponNameContains` set to the pistol not yet used (or provider `weaponForbidden` barring the first Shoot's pistol inside the barrage frames); both carry the fallback of 14.9 when the Duellist is in an enemy's control range; provider `actionForbidden` bars `ability:cv.a.pistol-barrage` after a `shoot` in the activation and `shoot` after Pistol Barrage | CLASS: team-hook (generic:weaponForbidden)
  - RULING: Corsair Voidscarred Pistol Barrage | it can be started when at least one of the two pistols has a valid target; the first free Shoot uses either pistol; if the other pistol has no valid target when its turn comes, that Shoot is skipped and the action still ends normally; it may be a counteraction (1 AP; action restrictions do not apply to counteractions); the two free Shoots count as Shoot actions for other rules (Contemptuous Adventurer's "first Shoot" is the first of them) | the card overrides restrictions only between the two Shoots; R-3.8 cancels only an action that cannot be completed at all; R-3.9 free actions count as performed | Unsourced
- T-CV.20 **Prowling Raiders** (Warrior): the Capricious Flight and Light Fingers firefight ploys cost 0 CP when the operative they name is a friendly WARRIOR.
  - MECH: ploy rule `costAdjust` (-1, never below 0) for `cv.p.capricious-flight` and `cv.p.light-fingers` when the window subject has the WARRIOR keyword and the roster still has a Warrior in play | CLASS: team-hook
  - RULING: Corsair Voidscarred Prowling Raiders | the ploy is still used for the TP at 0 CP (R-3.13: once per TP); any friendly WARRIOR as the subject qualifies | a cost change does not change the once-per-TP limit; the rule names "a friendly WARRIOR" | Unsourced
- T-CV.21 **WARP FOLD** (Way Seeker, 1 AP, PSYCHIC): pick two friendly CORSAIR VOIDSCARRED operatives visible to and within 5" of the Way Seeker; they swap positions (each is removed and set up exactly where the other was). If one of them performed Charge, Fall Back or Reposition this TP and the other is ready, the other cannot perform any of those three actions in its activation this TP. Not while the Way Seeker is in an enemy's control range. Runes of Guidance never extends it.
  - MECH: unique action with two friendly picks (`psychicSelectable` filter); the swap is the not-built re-placement fallback (team code sets both `pos` values and emits `OperativeMoved` with action `'forced'` and one `'fly'` segment each; guards on either end, R-4.9); provider `actionForbidden` (`reposition`, `fallBack`, `charge`) for the ready one in its activation this TP when the other has one of them in `actionsThisTp` | CLASS: team-hook (not-built swap fallback)
  - RULING: Corsair Voidscarred Warp Fold picks | the Way Seeker may be one of the two operatives; when it counteracts with Warp Fold and swaps itself, the other operative must be close enough that the Way Seeker ends wholly within 2" of where it was (centre to centre 2" or less for equal bases); the other swapped operative is not the counteracting one and has no 2" limit | an operative is visible to and within any distance of itself (core); R-3.12 limits only the counteracting operative's set-up | Unsourced
  - RULING: Corsair Voidscarred Warp Fold restriction | the ban covers only the other operative's own activation this TP (counteractions and free moves outside its activation stay legal, R-3.9); Dash is unaffected; being swapped is not moving in an action of its own (Heavy, Rifles and Mobile Engagement ignore it); any guard of either operative ends | the card says "in its activation during this turning point"; the swapped operatives did not perform the action; guard ends when an operative is set up (R-4.9) | Unsourced
- T-CV.22 **WARDING SHIELD** (Way Seeker, 1 AP, PSYCHIC): pick one friendly CORSAIR VOIDSCARRED operative visible to and within 6" of the Way Seeker. The first time after that an attack die would inflict its Normal Dmg on that operative, that damage is ignored. The shield lasts until the start of the Way Seeker's next activation, until the Way Seeker is incapacitated, or until it performs Warding Shield again, whichever comes first. Errata: the shield covers Normal Dmg from an attack die only. Not while in an enemy's control range.
  - MECH: unique action with a friendly pick (`psychicSelectable` filter, Runes of Guidance distance); effect on the target (Warding Shield token) removed at the Way Seeker's `activation.start`, its incapacitation, or a new cast; `onDamageInflicted` on the target for sources `normal` and `strike-normal`: set `amount` to 0 and remove the effect, only while `psychicAllowed(target)` | CLASS: team-hook
  - RULING: Corsair Voidscarred Warding Shield | "it" in the duration is the Way Seeker; one shield per Way Seeker (a new cast ends the old one); the shield is used automatically on the first Normal Dmg die (shooting, Blast and Torrent secondaries, normal strikes); crit damage, Devastating damage and non-attack damage never use it; while the shielded operative is within 6" of a Null Rod the shield does nothing and stays for later | the errata limits it to attack dice inflicting Normal Dmg; the hook cannot ask; the Null Rod FAQ says an operative in its range cannot benefit from a PSYCHIC rule | Unsourced
  - RULING: Corsair Voidscarred lasting PSYCHIC effects and Null Rod | Soul Channel's APL +1 stays once applied even if the operative later comes within 6" of a Null Rod; Warding Shield is checked when it would apply (above) | an APL change is applied when the action resolves; the shield is a later event that the FAQ's "cannot benefit" covers | Unsourced

### 14.5 Faction rules

- T-CV.23 **RIFLES**: whenever a friendly CORSAIR VOIDSCARRED operative shoots with a shuriken rifle or a ranger long rifle (either profile) in an activation in which it has not performed Charge, Fall Back or Reposition, that weapon has Accurate 1. Shooting first does not stop it moving afterwards. Dash does not switch it off.
  - MECH: `modifyWeaponRules` adds `core.wr.accurate` x1 for `cv.w.shuriken-rifle`, `cv.w.ranger-long-rifle-mobile`, `cv.w.ranger-long-rifle-stationary` when the operative's current activation (the frame's own `performed` for a counteraction or interrupt; the parent activation under a free-action frame of its own activation) has no `charge`, `fallBack` or `reposition` | CLASS: team-hook
  - RULING: Corsair Voidscarred Rifles outside its activation | a Shoot as a counteraction or as an interrupt (Guard, One Step Ahead) qualifies, since the operative performed none of the three actions in it | the rule rewards not moving before the shot, and a single-action counteraction or interrupt cannot include a move before the Shoot | Unsourced
- T-CV.24 **AELDARI RAIDERS**: each friendly CORSAIR VOIDSCARRED operative may perform one free Dash during its activation (the Felarch takes Veteran Raider instead, T-CV.7).
  - MECH: the team provider `actionCostDelta` cancels the Dash's whole cost (minus the cost from every other source, so a taxed Dash is also free) for a non-Felarch Corsair's first Dash in its own activation (`dash` and `ability:cv.a.blademaster` not yet in `act.performed`); 0 in counteractions, free-action frames and outside the Firefight phase; Plunderers' ban (T-CV.25) goes through `actionForbidden` | CLASS: team-hook
  - RULING: Corsair Voidscarred Aeldari Raiders as a cost change | the first Dash of each of its activations costs 0 AP, so it can be taken with no AP left, still meets every Dash condition and counts as a Dash for R-3.7 (no second Dash), R-4.2 (none after a Charge) and R-4.4 (no Charge after it), as R-3.9 requires of a free action; the provider must answer 0 in counteractions (a counteraction must cost exactly 1 AP, R-3.12, and is not an activation) and in free frames; a data `costDelta` with `oncePerActivation` is not exact because it would also discount a counteraction Dash and make it illegal | a cost-free Dash inside the activation is exactly a free Dash under R-3.9; the counteract rule turns on the cost after modifiers | Unsourced

### 14.6 Ploys

The source prints no costs: every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5).

- T-CV.25 **PLUNDERERS** | Strategy | 1 CP | Gambit step, not in TP1 | Roll a D3: up to that many friendly CORSAIR VOIDSCARRED operatives perform a free Dash at once, one after another in the order you choose. Each of them cannot perform the Dash action during its activation this TP.
  - MECH: code-hook ploy: gate the offer to `turningPoint >= 2`; apply rolls the D3, raises `ability.choice` picks (up to D3 eligible operatives, one at a time, with a "done" option) as Eye of the Ancestors does, then `startFreeSequence({ kind: 'dash', queue })` (Strategy-phase moves report `ReactionInfo.strategy`); provider `actionForbidden('dash')` and the Blademaster action for those operatives in their activations this TP | CLASS: team-hook
  - RULING: Corsair Voidscarred Plunderers | the D3 is rolled when the ploy is used and the operatives are picked after it; an operative that cannot Dash (in an enemy's control range) cannot be picked; the ban covers every Dash in its activation, including the Aeldari Raiders free Dash and the Blademaster Dash; the Felarch may be picked and keeps Veteran Raider for other actions | "up to D3 ... in an order of your choice"; the ban names the Dash action itself, and Veteran Raider is not a Dash | Unsourced
- T-CV.26 **PIRATICAL PROFITEERS** | Strategy | 1 CP | Gambit step | Whenever a friendly CORSAIR VOIDSCARRED operative shoots, fights or retaliates, if it or the enemy operative in that sequence contests an objective marker or one of your mission markers, its weapons have Balanced.
  - MECH: `modifyWeaponRules` adds `core.wr.balanced` when the friendly attacker or the sequence's enemy contests such a marker (R-8.5), checked per sequence | CLASS: team-hook
- T-CV.27 **MOBILE ENGAGEMENT** | Strategy | 1 CP | Gambit step | Whenever an operative shoots a friendly CORSAIR VOIDSCARRED operative that performed an action in which it moved this TP, the defender may re-roll one defence die.
  - MECH: per-operative TP flag set in `action.ended` when the action changed the performer's position; `modifyDefenceDice` adds a `RerollGrant { mode: 'one' }` | CLASS: team-hook
  - RULING: Corsair Voidscarred Mobile Engagement "moved" | any action of its own that changed its position this TP counts (move actions with or without a warp jump, free Dashes from Plunderers or Aeldari Raiders, counteraction moves, free Charges and Repositions); a 0" move and being swapped by Warp Fold do not | the rule is about an action in which the operative moved; same reading as Quicksilver Speed (T-LG.30) | Unsourced
- T-CV.28 **OUTCASTS** | Strategy | 1 CP | Gambit step | Whenever a friendly CORSAIR VOIDSCARRED operative is more than 5" from every other friendly operative, its weapons have Punishing.
  - MECH: `modifyWeaponRules` adds `core.wr.punishing` when the base-to-base distance to every other friendly operative in the killzone is over 5" | CLASS: team-hook
  - RULING: Corsair Voidscarred Outcasts | checked when each sequence starts (shooting, fighting or retaliating); with no other friendly operative in the killzone the condition holds | the rule names no moment; with no friendly operative left none is within 5" | Unsourced
- T-CV.29 **OPPORTUNISTIC FIGHTERS** | Firefight | 1 CP | An enemy operative performs Fall Back, before it moves | That enemy takes 2D3 damage for each friendly CORSAIR VOIDSCARRED operative within its control range.
  - MECH: firefight ploy in the `firefight.opponentActionDeclared` window when `action` is `fallBack`; count the Corsairs in the enemy's control range then; roll 2D3 per Corsair; `directDamage` each | CLASS: team-hook
  - RULING: Corsair Voidscarred Opportunistic Fighters | 2D3 is rolled separately for each Corsair in the enemy's control range when the Fall Back is declared; free Fall Backs and counteraction Fall Backs qualify; if the damage incapacitates the enemy it never moves and its action ends (AP as spent for the declared action) | "for each" reads as one 2D3 per operative; the trigger is performing the action, whatever paid for it (as T-LG.9) | Unsourced
- T-CV.30 **LIGHT FINGERS** | Firefight | 1 CP | During a friendly CORSAIR VOIDSCARRED operative's activation | Until that activation ends, an enemy in its control range does not stop it performing Pick Up Marker or mission actions (their other conditions still apply). 0 CP for a WARRIOR (T-CV.20).
  - MECH: firefight ploy in `firefight.activationStart` and `firefight.actionEnded` (activation only); provider `markerActionRelief` returns `{ ignoreEnemyControlRange: true }` for that operative until its activation ends | CLASS: generic:markerActionRelief
  - RULING: Corsair Voidscarred Light Fingers in v1 | the mission-action half works with SECURE, LOOT and INITIATE TRANSMISSION (M-3); the Pick Up Marker half is inert because v1 missions have no pick-up markers | v1 missions define those three mission actions and no marker Pick Up Marker applies to | Confirmed
- T-CV.31 **CAPRICIOUS FLIGHT** | Firefight | 1 CP | During a friendly CORSAIR VOIDSCARRED operative's activation, before or after one of its actions (January '26 errata wording) | For the rest of that activation it may Fall Back for 1 AP less. 0 CP for a WARRIOR (T-CV.20).
  - MECH: firefight ploy in `firefight.activationStart` and `firefight.actionEnded`; effect on the operative until activation end read by the provider `actionCostDelta` (-1 for `fallBack`) | CLASS: team-hook
  - RULING: Corsair Voidscarred Capricious Flight and Veteran Raider | a Felarch Fall Back at 1 AP under this ploy is a 1 AP action, so Veteran Raider can make it free | Veteran Raider is read after cost modifiers (T-CV.7) | Unsourced
- T-CV.32 **CONTEMPTUOUS ADVENTURER** | Firefight | 1 CP | When your first friendly CORSAIR VOIDSCARRED operative of the TP is activated, if it is more than 5" from every other friendly operative | The first time it performs a Shoot or a Fight in that activation, its weapons have Relentless for that action. It works for one action only (never both a Shoot and a Fight).
  - MECH: firefight ploy in `firefight.activationStart` (not counteracting), offered only for the seat's first activation this TP and with the 5" check; `modifyWeaponRules` adds `core.wr.relentless` during the first `shoot` or `fight` action of that activation (every sequence of it), then the effect ends | CLASS: team-hook
  - RULING: Corsair Voidscarred Contemptuous Adventurer | "first operative activated" is the seat's first activation of the TP (counteractions are not activations); Relentless covers every sequence of that one action (Blast and Torrent targets included); inside Pistol Barrage only the first free Shoot gets it | the ploy is tied to one Shoot or Fight action; R-3.9 counts the barrage's free Shoots as Shoot actions | Unsourced

### 14.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-CV.33 **DIUTURNAL MANTLES** | Whenever an operative shoots a friendly CORSAIR VOIDSCARRED operative with a weapon that has Blast or Torrent, the defender may re-roll one defence die. Friendly CORSAIR VOIDSCARRED operatives also take no damage from x" Devastating x unless they are the target of that sequence.
  - MECH: `modifyDefenceDice` adds a `RerollGrant { mode: 'one' }` when the sequence's weapon has Blast or Torrent; `onDamageInflicted` sets `amount` to 0 when `splash` is true and the victim is a friendly Corsair | CLASS: generic:splash
  - RULING: Corsair Voidscarred Diuturnal Mantles | the re-roll applies in every sequence of a Blast or Torrent weapon (primary and secondary targets); the x" Devastating immunity covers friendly fire too (the Way Seeker's lightning strike near another Corsair) | the rule reads the weapon and "an operative is shooting", and names no shooter side for the Devastating part | Confirmed
- T-CV.34 **MISTFIELD** | Once per TP, when an operative more than 3" away shoots a friendly CORSAIR VOIDSCARRED operative, at the start of the Roll Defence Dice step: until the sequence ends, the weapon's Piercing x is 1 lower (Piercing 1 is lost).
  - MECH: 0 CP equipment offer to the defender in the `shoot.beforeDefenceRoll` window (once-per-TP ledger, shooter more than 3" from the target); effect read by `modifyWeaponRules` for that sequence (`targetId`), lowering Piercing x and Piercing Crits x by 1 | CLASS: team-hook
  - RULING: Corsair Voidscarred Mistfield | applies to Piercing x and Piercing Crits x alike (Piercing Crits is the same rule with a condition); the 3" is measured shooter to target when the step starts; one use per TP for the whole team | the core rule defines Piercing Crits inside Piercing; the trigger names the shot | Unsourced
- T-CV.35 **RUNES OF GUIDANCE** | Once per TP, when a friendly WAY SEEKER or SOUL WEAVER performs a PSYCHIC unique action other than Warp Fold, that action's distance requirement is 3" longer until it ends (6" becomes 9"). It never changes a PSYCHIC weapon's distances.
  - MECH: the target filters of SOUL CHANNEL, SOUL HEAL and WARDING SHIELD widen to 9" while the TP use is unspent; picking an operative more than 6" away spends it (equipment ledger); Runes of Guidance token | CLASS: team-hook
  - RULING: Corsair Voidscarred Runes of Guidance | used automatically: candidates up to 9" are offered while the use is unspent, and the use is spent only when the chosen operative is beyond 6"; visibility is still required | choosing a near operative gains nothing from the rule, so spending it then would waste it | Unsourced
- T-CV.36 **STAR CHARTS** | STRATEGIC GAMBIT: roll a D3; if it is higher than the current TP number, gain 1 CP, and the gambit can no longer be used this battle. A failed roll may be tried again in a later TP.
  - MECH: 0 CP equipment gambit offer in `strategy.gambit` while equipped and not yet successful; `gainCp(1)` on success, battle ledger | CLASS: team-hook
  - RULING: Corsair Voidscarred Star Charts | at most one attempt per Strategy phase (a gambit is used once per phase); success chances are 2 in 3 in TP1, 1 in 3 in TP2 and none from TP3, so the gambit is offered in TP1 and TP2 only | the success clause is the only thing that ends it; a D3 never beats 3 | Confirmed

Marker/token guide (UI): Erudite Hunter token, Faolchú's Bond token, One Step Ahead token, Warding Shield token, Mistfield token, Runes of Guidance token.

### 14.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-CV: TEAM-CV-000 to TEAM-CV-035.

### 14.9 Generic capabilities (survey; resolved in the Engine map below)

Built and used: `reactions` (One Step Ahead, Erudite Hunter), `fightResolveStart` (Bladed Stance, Faolchú's Bond), `canFly` + `flyLimit` (Blink Pack), `shootInControlRange` (Quick on the Trigger), `weaponForbidden` (Pistol Barrage), `fightTargets` (One Step Ahead's Fight), PSYCHIC (`psychicAllowed`, `psychicSelectable`, ability keyword PSYCHIC, `cv.a.wr-psychic`), `splash` (Diuturnal Mantles), `markerActionRelief` (Light Fingers), `firefight.opponentActionDeclared` (Opportunistic Fighters), `stealthyCover` (Camo Cloak), strategic gambits (Erudite Hunter, Star Charts), ploy rules `costAdjust` (Prowling Raiders) and `extraOffers` (Slicing Attack, Mistfield). Gaps the tables do not cover, each with a team-local fallback:

- **actionRestrictionLift** (NICE): a provider that lifts one core action restriction for an operative (here R-4.2's "no Dash after Charge"). `actionAvailability` hard-codes the check. Fallback: the `cv.a.blademaster` unique action treated as a Dash that starts a free Dash frame with `maxMove` (T-CV.10); free frames do not re-check the Charge restriction. Used by T-CV.10.
- **freeShootInControlRange** (NICE): `startFreeAction`'s Shoot check (`freeActionProblem`) and the Guard interrupt (`guard.ts`, which forces `pointBlank` whenever the guard is in an enemy's control range) never ask `shootInControlRange`. Fallback: start the Duellist's free Shoots in an enemy's control range with `pointBlank: true` (the only transport that passes the check), then cancel the point-blank effects in team code: `modifyAttackDice` hitDelta -1 for the Duellist while `attack.pointBlank` (cancelling the +1), `beforeShootTargetSelect` keeps only the Quick on the Trigger candidates, and after the action (`afterShootResolved` / the frame resume) clear `flags.cannotRetaliate` unless it was already set before the shot. The additive fix (both call sites asking `shootInControlRange` and passing `pointBlank: false`) would replace all of it. Used by T-CV.18, T-CV.19.
- **moveEndNotFurther** (NICE): a free Reposition whose end may not be further from a given operative than its start. Fallback: provider `moveSurcharge` returns a prohibitive surcharge (more than the move limit) for `reposition` in the Erudite Hunter frame (`frame.resume === 'cv.eruditeHunter'`) when the last path point leaves the Kurnite Hunter's base further from the marked enemy than at the start, so the planner rejects that path. Used by T-CV.13.
- **pathLineCrossing** (NICE): a geometry helper for a bent line of bounded length between two base footprints that must touch a third base. Fallback: team-local sampling (T-CV.15). Used by T-CV.15.
- **operativeSwap**: listed as not built in the batch C brief; fallback as given there (set `pos`, emit `OperativeMoved` `'forced'` with one `'fly'` segment). Used by T-CV.21.

### 14.10 Gotchas

- Aeldari Raiders is a free Dash inside the operative's own activation only: none in counteractions (where a Dash must cost 1 AP), never two Dashes, never after a Charge (except Blademaster's), and no Charge after it. The Felarch gets one free 1 AP action of any kind instead, never a free Dash as well.
- Rifles is Accurate 1 on the shuriken rifle and both ranger long rifle profiles, lost by Charge, Fall Back or Reposition earlier in the activation; Dash does not lose it. The stationary profile is plain Heavy, so the Fate Dealer cannot move at all in an activation in which it uses it (not even the free Dash).
- Heavy (Dash only) on the shuriken cannon and wraithcannon combines with the free Dash: Dash and shoot is the normal Heavy Gunner turn.
- Weapons with no Range: blaster, shredder, Faolchú, both ranger long rifle profiles, both shuriken cannon profiles, wraithcannon, freezing grasp, lightning strike. Low crit values (6/3, 5/3, 4/3, 3/3) are printed that way; do not fix them.
- Lightning strike's 2" Devastating 2 hits friendly operatives near the target too, except Corsairs with Diuturnal Mantles.
- Never both a blaster and a wraithcannon in one roster. Warriors are the only repeatable entry.
- One Step Ahead triggers after any enemy action (errata), needs the Felarch ready, spends its battle use on a failed roll, and locks the free Shoot or Fight onto that enemy (Blast secondaries still hit). The APL -1 lands only when the action was performed.
- Faolchú's Bond is the first retaliation of the TP only, and only if the Kurnite Hunter is ready then (January '26 card text; the update-log extract is misleading).
- Erudite Hunter: the gambit's 9" is checked once, when the gambit is used; the reaction is once per TP, after any action in which the marked enemy moved; the free Reposition may not end further away; the free Charge may flip the order to Engage.
- Blink Pack is 7" horizontally for Charge, Fall Back and Reposition, never Dash; it ignores terrain and climbing in between; only a Charge may end in an enemy's control range. Slicing Attack follows only a warp-jump Reposition, and its line may bend.
- Quick on the Trigger: the Duellist may Shoot in an enemy's control range but then only at enemies in its own control range (still visible, Conceal ones not in cover), ignoring friendly operatives in that enemy's control range. On guard it shoots normally (FAQ), not point-blank. Pistol Barrage gives two Shoots, one per pistol, and bars any other Shoot in that activation both ways.
- Warp Fold swaps exactly; the Way Seeker may swap itself. The restriction lands on the ready operative only when the other already made a Charge, Fall Back or Reposition this TP. Swapped operatives did not move (Heavy and Rifles unaffected) but lose Guard.
- Warding Shield ignores one Normal Dmg die only (errata), never crits, Devastating or direct damage; its duration follows the Way Seeker. PSYCHIC actions and the Way Seeker's two PSYCHIC ranged weapons are switched off within 6" of a Novitiate Condemnor, and operatives the Null Rod protects cannot be picked.
- Prowling Raiders makes Capricious Flight and Light Fingers 0 CP for a Warrior; they are still once per TP.
- Opportunistic Fighters damages before the Fall Back moves; it can kill the enemy in place.
- Contemptuous Adventurer only for the seat's first activation of the TP and only if that operative is more than 5" from every friend; one Shoot or one Fight, never both.
- Mistfield needs the shooter more than 3" away and is once per TP for the team; Runes of Guidance never extends Warp Fold or a PSYCHIC weapon.
- Edition leaks to reject: nothing from the 2021 Voidscarred book (older datacards, ploys, equipment or specialisms, Overwatch, shape distances; every Corsair really is APL 2 in 2024), no 40k 10th Aeldari (Battle Focus, Strands of Fate, invulnerable saves, Psychic tests, wound rolls); inches only, three defence dice, every printed number from the January '26 cards.

### 14.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (Felarch 1, main 8, WARRIOR repeatable, blaster/wraithcannon cap) | team.json slots, `repeatable: ["cv.warrior"]`, `selection.loadoutCaps` (max 1 over `cv.w.blaster`, `cv.w.wraithcannon`) |
| Loadouts | datacard `weapons.options` (`sets` for Felarch, Gunner, Heavy Gunner, Warrior); groups `cv.wg.ranger-long-rifle`, `cv.wg.shuriken-cannon` |
| PSYCHIC tag and actions | `cv.a.wr-psychic` on freezing grasp, lightning strike, witch staff; ability `keywords: ["PSYCHIC"]` on Soul Channel, Soul Heal, Warp Fold, Warding Shield; `psychicSelectable` in every PSYCHIC target filter; `psychicAllowed` for Warding Shield's effect |
| Aeldari Raiders, Veteran Raider, Capricious Flight | provider `actionCostDelta` (own activation only, not counteract or frames; first Dash, or the Felarch's first exactly-1-AP action; Fall Back -1 under the ploy); `action.ended` ledger in `act.used` |
| Rifles, Camo Cloak (Saturate), Piratical Profiteers, Outcasts, Contemptuous Adventurer, Mistfield | `modifyWeaponRules` (Accurate 1, remove Saturate, Balanced, Punishing, Relentless, Piercing -1 per sequence) |
| Camo Cloak (cover) | provider `stealthyCover` |
| One Step Ahead | provider `reactions` + `startFreeAction({ interrupt: true })`; `beforeShootTargetSelect` and provider `fightTargets` lock the target; `applyAplEffect(-1)` |
| Erudite Hunter | strategic gambit ability with `ability.choice`; token; provider `reactions`; `startFreeAction` (charge with `endWithinCrOf`, reposition); provider `moveSurcharge` veto (fallback) |
| Blademaster | unique action via `extraActions` + `startFreeAction({ action: 'dash', maxMove })`; provider `actionForbidden` (fallback for actionRestrictionLift) |
| Bladed Stance, Faolchú's Bond | provider `fightResolveStart` (`queue` blockOnly; `first` with a TP ledger from `onFightResolved`) |
| Blink Pack | providers `canFly`, `flyLimit` (7) |
| Slicing Attack | `action.declared` snapshot; ploy rule `extraOffers` in `firefight.actionEnded`; team-local line geometry; `directDamage` |
| Soul Channel, Soul Heal | data unique actions (support APL boost as T-PF.10; `effects.regainWounds`) with team target filters (`psychicSelectable`, Runes distance) |
| Quick on the Trigger | provider `shootInControlRange`; `beforeShootTargetSelect`; pointBlank-transport fallback for free Shoots and Guard (`modifyAttackDice` hitDelta -1, clear `cannotRetaliate`) |
| Pistol Barrage | unique action; two `startFreeAction` Shoots (`weaponNameContains` or provider `weaponForbidden`); provider `actionForbidden` both ways |
| Prowling Raiders | ploy rule `costAdjust` |
| Warp Fold | unique action, team swap (set `pos`, `OperativeMoved` forced/fly), provider `actionForbidden` for the TP |
| Warding Shield | effect + token; `onDamageInflicted` (`normal`, `strike-normal`); removal at the Way Seeker's `activation.start`, incapacitation or recast |
| Plunderers | code-hook ploy (TP1 gate, D3, picks), `startFreeSequence({ kind: 'dash' })`, provider `actionForbidden('dash')` |
| Mobile Engagement, Diuturnal Mantles (re-roll) | `modifyDefenceDice` `RerollGrant { mode: 'one' }`; `action.ended` moved flag |
| Diuturnal Mantles (Devastating) | `onDamageInflicted` with `splash` sets `amount` 0 |
| Opportunistic Fighters | firefight ploy in `firefight.opponentActionDeclared` (`fallBack`), `directDamage` per Corsair |
| Light Fingers | provider `markerActionRelief` (`ignoreEnemyControlRange`) |
| Mistfield | 0 CP equipment offer in `shoot.beforeDefenceRoll` |
| Runes of Guidance | team target filters at 9", equipment TP ledger |
| Star Charts | 0 CP equipment gambit, `gainCp(1)`, battle ledger |

### 14.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/corsair-voidscarred/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `cv.<name>`, `cv.w.`, `cv.wg.`, `cv.a.`, `cv.p.`, `cv.e.`; the scaffold holds the Felarch datacard and its weapons only)
  - `src/engine/teams/corsair-voidscarred.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/corsair-voidscarred.ts` (weapon flavour, VFX family, sound, attachments including the Faolchú companion, figure stand-ins `cv-felarch-shuriken-rifle`, `cv-felarch-neuro-disruptor`, `cv-fate-dealer`, `cv-gunner-blaster`, `cv-gunner-shredder`, `cv-heavy-gunner-shuriken-cannon`, `cv-heavy-gunner-wraithcannon`, `cv-kurnathi`, `cv-kurnite-hunter`, `cv-shade-runner`, `cv-soul-weaver`, `cv-starstorm-duellist`, `cv-warrior-pistol-power-weapon`, `cv-warrior-rifle-fists` (pose variants `-b`, `-c` for repeated Warriors), `cv-way-seeker`; tokens from the 14.7 guide)
  - `tests/engine/teams/corsair-voidscarred.test.ts` (TEAM-CV-nnn tests) and `tests/engine/teams/corsair-voidscarred.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 14 and `12-rules-test-checklist.md` section TEAM-CV (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/corsair-voidscarred/team.json`. Flip it (with `defaults` filled: roster, cap-aware loadouts, equipment; and every weapon in `src/client/teams/corsair-voidscarred.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above: `reactions`, `fightResolveStart`, `canFly` + `flyLimit`, `shootInControlRange`, `weaponForbidden`, `fightTargets`, PSYCHIC (`psychicAllowed`, `psychicSelectable`), `splash`, `markerActionRelief`, `stealthyCover`, `firefight.opponentActionDeclared`, `shoot.beforeDefenceRoll`, ploy rules `costAdjust` / `extraOffers`, strategic gambits. Four team-local fallbacks (14.9): Blademaster unique action, the point-blank transport for Quick on the Trigger free Shoots and Guard, the `moveSurcharge` veto for Erudite Hunter, the Slicing Attack line geometry, plus the Warp Fold swap. Order: roster and the cap (TEAM-CV-001 to 003), then Aeldari Raiders and Veteran Raider (TEAM-CV-004 to 006, they shape every activation), Rifles (TEAM-CV-007), then the operatives.
- Team-local weapon rules the scaffold leaves out: `cv.a.wr-psychic` (freezing grasp, lightning strike, witch staff). The Felarch's weapons (neuro disruptor, shuriken rifle, shuriken pistol, power weapon) carry none.
- RULING lines expected: blaster and wraithcannon, weapons without Range, low crit Dmg, Faolchú's Bond errata (Confirmed), Veteran Raider, One Step Ahead trigger and APL penalty, Blademaster distance, Bladed Stance use, Faolchú's Bond use, Erudite Hunter, Blink Pack distance, Slicing Attack line, Soul Heal self-target, Quick on the Trigger targets, on guard (Confirmed, FAQ) and replacing point-blank, Pistol Barrage, Prowling Raiders, Warp Fold picks and restriction, Warding Shield, lasting PSYCHIC effects and Null Rod, Rifles outside its activation, Aeldari Raiders as a cost change, Plunderers, Mobile Engagement moved, Outcasts, Opportunistic Fighters, Light Fingers in v1, Capricious Flight and Veteran Raider, Contemptuous Adventurer, Diuturnal Mantles, Mistfield, Runes of Guidance, Star Charts.
- Gotchas: section 14.10. The free Dash is a cost change inside the operative's own activation only (never in counteractions); the Felarch's free action replaces it. Quick on the Trigger needs the point-blank transport for free Shoots and Guard until the shared fix lands. Nine operatives use the 9-operative kill grade row.

## 15. Warpcoven

Rule IDs `T-WC.<n>`, checklist IDs `TEAM-WC-<nnn>`. Sources: the Warpcoven team PDF (Kill Team 2024, Faction version 3, April '26 update log state; the layout and flow extracts were read together, and the update log's errata and rules commentary are applied) as the primary source, cross-checked against the Wahapedia Warpcoven page (Faction version 3; its header still says January '26, but its text already carries the April '26 items: Rubric Marine Save 2+, the Astral Bombardment and Master of the Immaterium additions, the new Brotherhood of Sorcerers, Aetherial Warding and Psychic Cabal wording, and the Psychic Cabal FAQ). The two agree on every stat and weapon; they differ in four places of wording, listed in 15.10, where the PDF update log wins. Facts read from the PDF are Confirmed; our own calls are Unsourced. All rule text is restated in our own words; team, operative, weapon, ploy, boon and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 15.1 Team selection

- T-WC.1 Roster is exactly 5 selections from one list (T-WC.2). There is no leader slot and no LEADER keyword in this edition of the team (the update log deleted the old "one SORCERER is the LEADER, +1 wound" clause). Each TZAANGOR operative counts as half a selection, so a roster fields 5 to 9 operatives.
  - MECH: team.json one slot `main`, `count: 5`, `halfSelections` = the four Tzaangor datacards; no leader slot | CLASS: data
  - RULING: Warpcoven no leader | the team has no LEADER operative; the scaffold's first datacard (Sorcerer of Destiny) is not a leader, and any rule of another team that names "the LEADER" finds none on this team | the April '26 update log deletes the LEADER clause and no Warpcoven datacard prints the keyword | Confirmed
  - RULING: Warpcoven odd Tzaangor | an odd number of Tzaangors rounds up (a lone Tzaangor uses a whole selection), so the slot still needs exactly 5 selections | "two halves make one selection" leaves an unpaired half unused, and the roster validator's `slotCost` already rounds halves up | Unsourced
- T-WC.2 List: SORCERER OF DESTINY, SORCERER OF TEMPYRION, SORCERER OF WARPFIRE, RUBRIC MARINE GUNNER, RUBRIC MARINE ICON BEARER, RUBRIC MARINE WARRIOR, TZAANGOR CHAMPION, TZAANGOR HORN BEARER, TZAANGOR ICON BEARER, TZAANGOR WARRIOR. At least one SORCERER must be taken. Every WARRIOR (Rubric Marine Warrior and Tzaangor Warrior) may be taken any number of times; every other entry at most once (so at most three Sorcerers, one of each, and one Gunner).
  - MECH: slot `repeatable: ["wc.rubric-marine-warrior", "wc.tzaangor-warrior"]`; team `selection.caps: [{ keyword: "SORCERER", min: 1 }]` | CLASS: data
  - RULING: Warpcoven repeatable entries | both WARRIOR cards are repeatable, the Gunner is not | "other than WARRIOR operatives" names a keyword both Warrior cards carry, and the update log deleted the old GUNNER exception | Confirmed
- T-WC.3 Loadouts:
  - Each SORCERER: force stave and the PSYCHIC ranged weapons printed on its card (Destiny: doombolt; Tempyrion: fluxblast; Warpfire: firestorm and mindburn), plus one of inferno bolt pistol, Prosperine khopesh or warpflame pistol.
  - RUBRIC MARINE GUNNER: warpflamer and fists, or soulreaper cannon (both profiles) and fists.
  - RUBRIC MARINE ICON BEARER, RUBRIC MARINE WARRIOR: inferno boltgun and fists (fixed).
  - TZAANGOR CHAMPION: greataxe or greatblade.
  - TZAANGOR HORN BEARER, TZAANGOR ICON BEARER: dagger (fixed).
  - TZAANGOR WARRIOR: Tzaangor blades; or Tzaangor blade & shield; or autopistol and chainsword.
  - The kill team includes at most one warpflame pistol and at most one soulreaper cannon.
  - MECH: datacard `weapons.fixed` + `weapons.options` (`from` slot for the Sorcerer option, `sets` for Gunner, Champion and Tzaangor Warrior; the soulreaper cannon as profile group `wc.wg.soulreaper-cannon`); team `selection.loadoutCaps: [{ weapons: ["wc.w.warpflame-pistol"], max: 1 }, { weapons: ["wc.wg.soulreaper-cannon"], max: 1 }]` | CLASS: data
- T-WC.4 Archetypes: RECON, SECURITY (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["recon", "security"]` | CLASS: data
- T-WC.5 Keywords: every operative is WARPCOVEN and CHAOS. Sorcerers add HERETIC ASTARTES, PSYKER, SORCERER and DESTINY, TEMPYRION or WARPFIRE; Rubric Marines add HERETIC ASTARTES, RUBRIC MARINE and their role (GUNNER, ICON BEARER, WARRIOR); Tzaangors add TZAANGOR and their role (CHAMPION, HORN BEARER, ICON BEARER, WARRIOR). Tzaangors are not HERETIC ASTARTES, so ASTARTES (T-WC.31) never covers them. The chosen BOON OF TZEENTCH is not a keyword (T-WC.21).
  - MECH: keyword lists in operatives.json | CLASS: data
- T-WC.6 **PSYCHIC**: doombolt, fluxblast, firestorm, mindburn and force stave carry the PSYCHIC tag; PROTECTED BY FATE, RAVAGE DESTINY, RECONSTITUTION RITUAL, TEMPORAL FLUX and ALIGHT are PSYCHIC actions. Another team's Null Rod (Novitiate Condemnor) switches these off within 6" of the Condemnor, and the Condemnor cannot be picked by them. There is no perils, no psychic test and no Manifest action in this edition.
  - MECH: weapons carry `wc.a.wr-psychic`; the five abilities have `keywords: ["PSYCHIC"]`; shared files already block PSYCHIC actions and PSYCHIC ranged weapons (`psychicAllowed`); team code asks `psychicSelectable` before a PSYCHIC action picks an operative and `psychicAllowed` before every lasting PSYCHIC effect applies (T-WC.7 to T-WC.12) | CLASS: generic:psychic
  - RULING: Warpcoven PSYCHIC lasting effects under Null Rod | Protected by Fate, Ravage Destiny, Alight, Mindburn tokens and Temporal Flux have no effect at a moment when an operative they touch (the beneficiary, the affected enemy, or the shooter) is within a Condemnor's Null Rod distance; the token stays and works again once out of range | the Novitiates commentary says an operative cannot benefit from, be selected for or use a PSYCHIC rule while in range, and that PSYCHIC rules have no effect within that distance | Confirmed

### 15.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| SORCERER OF DESTINY | 3 | 6" | 3+ | 15 | 32 | WARPCOVEN, CHAOS, HERETIC ASTARTES, PSYKER, SORCERER, DESTINY |
| SORCERER OF TEMPYRION | 3 | 6" | 3+ | 15 | 32 | WARPCOVEN, CHAOS, HERETIC ASTARTES, PSYKER, SORCERER, TEMPYRION |
| SORCERER OF WARPFIRE | 3 | 6" | 3+ | 15 | 32 | WARPCOVEN, CHAOS, HERETIC ASTARTES, PSYKER, SORCERER, WARPFIRE |
| RUBRIC MARINE GUNNER | 3 | 5" | 2+ | 14 | 32 | WARPCOVEN, CHAOS, HERETIC ASTARTES, RUBRIC MARINE, GUNNER |
| RUBRIC MARINE ICON BEARER | 3 | 5" | 2+ | 14 | 32 | WARPCOVEN, CHAOS, HERETIC ASTARTES, RUBRIC MARINE, ICON BEARER |
| RUBRIC MARINE WARRIOR | 3 | 5" | 2+ | 14 | 32 | WARPCOVEN, CHAOS, HERETIC ASTARTES, RUBRIC MARINE, WARRIOR |
| TZAANGOR CHAMPION | 2 | 6" | 5+ | 10 | 32 | WARPCOVEN, CHAOS, TZAANGOR, CHAMPION |
| TZAANGOR HORN BEARER | 2 | 6" | 5+ | 9 | 32 | WARPCOVEN, CHAOS, TZAANGOR, HORN BEARER |
| TZAANGOR ICON BEARER | 2 | 6" | 5+ | 9 | 32 | WARPCOVEN, CHAOS, TZAANGOR, ICON BEARER |
| TZAANGOR WARRIOR | 2 | 6" | 5+ | 9 | 32 | WARPCOVEN, CHAOS, TZAANGOR, WARRIOR |

Notes: the PDF prints "WARPCOVEN ," with a stray space; the keyword is WARPCOVEN. Rubric Marine Save is 2+ per the April '26 errata (both sources print 2+); Sorcerer Wounds 15 per a previous errata (both sources print 15). A Tzaangor Warrior with the blade & shield has Save 4+ (T-WC.20). Bases: 32mm on every card in both sources.

### 15.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Doombolt | R | 4 | 3+ | 4/2 | PSYCHIC, Devastating 2, Lethal 5+ | Sorcerer of Destiny |
| Fluxblast | R | 4 | 3+ | 3/4 | PSYCHIC, Blast 2", Rending | Sorcerer of Tempyrion |
| Firestorm | R | 5 | 4+ | 2/3 | PSYCHIC, Saturate, Seek Light, Torrent 2" | Sorcerer of Warpfire |
| Mindburn | R | 5 | 4+ | 1/1 | PSYCHIC, Lethal 5+, Saturate, Seek Light, Mindburn | Sorcerer of Warpfire |
| Inferno bolt pistol | R | 4 | 3+ | 3/4 | Range 8", Piercing 1 | every Sorcerer (option) |
| Warpflame pistol | R | 4 | 2+ | 3/3 | Range 6", Piercing 1, Torrent 1" | every Sorcerer (option; at most one per kill team) |
| Force stave | M | 4 | 3+ | 4/6 | PSYCHIC, Shock | every Sorcerer |
| Prosperine khopesh | M | 5 | 3+ | 4/6 | Lethal 5+ | every Sorcerer (option) |
| Soulreaper cannon (focused) | R | 5 | 3+ | 4/5 | Piercing 1 | Rubric Marine Gunner (option; at most one per kill team) |
| Soulreaper cannon (sweeping) | R | 4 | 3+ | 4/5 | Piercing 1, Torrent 1" | Rubric Marine Gunner (option) |
| Warpflamer | R | 4 | 2+ | 4/4 | Range 8", Saturate, Piercing 1, Torrent 2" | Rubric Marine Gunner (option) |
| Inferno boltgun | R | 4 | 3+ | 3/4 | Piercing 1 | Rubric Marine Icon Bearer, Rubric Marine Warrior |
| Fists | M | 3 | 3+ | 3/4 | none | every Rubric Marine |
| Greataxe | M | 4 | 3+ | 4/5 | Brutal, Lethal 5+ | Tzaangor Champion (option) |
| Greatblade | M | 4 | 3+ | 4/5 | Lethal 5+, Rending | Tzaangor Champion (option) |
| Dagger | M | 4 | 4+ | 3/5 | none | Tzaangor Horn Bearer, Tzaangor Icon Bearer |
| Autopistol | R | 4 | 4+ | 2/3 | Range 8" | Tzaangor Warrior (option) |
| Chainsword | M | 4 | 4+ | 4/5 | none | Tzaangor Warrior (option) |
| Tzaangor blade & shield | M | 4 | 4+ | 3/4 | Shield | Tzaangor Warrior (option) |
| Tzaangor blades | M | 4 | 4+ | 4/5 | Balanced | Tzaangor Warrior (option) |

Notes: 20 profiles over 19 weapons. The three Sorcerers share the inferno bolt pistol, warpflame pistol, force stave and khopesh records. Team-local weapon rules: PSYCHIC (`wc.a.wr-psychic`, a tag, T-WC.6), Mindburn (`wc.a.wr-mindburn`, T-WC.11) and Shield (`wc.a.wr-shield`, T-WC.20); every other rule is core (R-10). The Rubric Marine fists (3/4 Dmg) are a team record, not a shared core fists profile.

UNCLEAR (resolved): the PDF layout extract scrambles the Gunner table (Hit and Dmg of all four rows in one block, WR column shifted). Read top to bottom it gives focused 3+ 4/5, sweeping 3+ 4/5, warpflamer 2+ 4/4, fists 3+ 3/4, which matches Wahapedia row for row.
UNCLEAR (resolved): the cards print "Prosperine khopesh" while the update log heading spells it "Proserpine". The card spelling is used for the display name; the errata itself (Atk 5, Balanced removed) is applied, and both sources print Atk 5 with Lethal 5+ only.
UNCLEAR (resolved): the doombolt prints Dmg 4/2 (crit lower than normal, offset by Devastating 2 and Lethal 5+) and mindburn prints 1/1. RULING: Warpcoven doombolt and mindburn Dmg | 4/2 and 1/1 as printed | identical in the PDF and Wahapedia, and the doombolt value comes from a listed errata | Confirmed

### 15.4 Operative rules and unique actions

- T-WC.7 **PROTECTED BY FATE** (Sorcerer of Destiny, 1 AP, PSYCHIC): pick one friendly WARPCOVEN operative visible to the Sorcerer (itself included). Until the Sorcerer's next activation starts, the Sorcerer is incapacitated, or any friendly operative performs this action again (whichever is first), whenever that operative is being shot its player may re-roll any of its defence dice. Not while in an enemy's control range.
  - MECH: unique action with a friendly-target choice (visible); token `wc.protected` (cap 1, one live token per seat: a new use removes the old one), expiries `sourceActivationStart` and `sourceIncapacitated`; `modifyDefenceDice` adds `RerollGrant { mode: 'any' }` when the target holds the token and `psychicAllowed` holds for it | CLASS: team-hook
  - RULING: Warpcoven "until it's incapacitated" | in Protected by Fate, Ravage Destiny and Alight the "it" is the Sorcerer that performed the action: its incapacitation ends the effect; the picked operative's own removal ends it anyway | the clause would add nothing if it meant the picked operative, and it sits in the list of the performer's timers | Unsourced
  - RULING: Warpcoven Protected by Fate self-target | the Sorcerer may pick itself | an operative is visible to and within any distance of itself (R-8.3) and the text does not say "other" | Confirmed
- T-WC.8 **RAVAGE DESTINY** (Sorcerer of Destiny, 1 AP, PSYCHIC): pick one enemy operative visible to and within 9" of the Sorcerer (12" with Master of the Immaterium). With the same three end conditions as T-WC.7: (a) whenever that enemy is shooting, fighting or retaliating, its player must re-roll every attack die showing 6; (b) when marker control is worked out, that enemy's APL counts as 1 lower (not an APL change, so it stacks with APL changes and ignores R-9.6). Not while in an enemy's control range.
  - MECH: unique action with an enemy-target choice (visible, within the distance, `psychicSelectable`); token `wc.ravaged` (as T-WC.7); attack hook `diceRolled` calls `attack-common.forcedReroll` on the holder's attack dice showing 6 (shooting, and both fight roles); provider `controlApl` returns apl - 1 for the holder | CLASS: team-hook
  - RULING: Warpcoven Ravage Destiny forced re-roll | applied at once after the holder's attack roll, before any optional re-roll; the forced dice cannot be re-rolled again; defence dice and cover saves are untouched | a die can be re-rolled only once (R-9.2) and the rule names attack dice; same as the Omen ruling (T-HA.23) | Unsourced
- T-WC.9 **RECONSTITUTION RITUAL** (Sorcerer of Tempyrion, 1 AP, PSYCHIC): one friendly WARPCOVEN operative visible to and within 6" (9" with Master of the Immaterium) regains up to 2D3 lost wounds. Not while in an enemy's control range, and not if any friendly operative already performed this action this TP.
  - MECH: unique action with a friendly-target filter (visible, within the distance); `effects.regainWounds(2D3)`; team-wide once-per-TP ledger (counts a use borrowed through Psychic Cabal) | CLASS: data (limit part team-hook)
  - RULING: Warpcoven Reconstitution Ritual self-target | the Tempyrion may heal itself | an operative is within any distance of itself (R-8.3) | Confirmed
- T-WC.10 **TEMPORAL FLUX** (Sorcerer of Tempyrion, 1 AP, PSYCHIC): pick one friendly WARPCOVEN operative visible to and within 6" (9" with Master of the Immaterium) and place your Temporal Flux marker within that operative's control range. At the end of that operative's next activation: if it is not incapacitated and is wholly within 6" of the marker (never extended), remove it and set it up again in a placeable spot with the marker in its control range (or as near as possible), then remove the marker; otherwise just remove the marker. Not while in an enemy's control range or while your Temporal Flux marker is in the killzone.
  - MECH: unique action placing a team marker in the target's control range (`placementSpots`); `activation.end` handler for the marked operative: set `pos` to the placeable spot nearest the marker, emit `OperativeMoved` with action `'forced'` and one `'fly'` segment (the brief's re-place fallback), remove the marker; `operative.incapacitated` removes the marker | CLASS: team-hook
  - RULING: Warpcoven Temporal Flux "next activation" | the activation in which the action was performed never counts (picking itself, the Tempyrion returns at the end of its following activation); a counteraction is not an activation, so it neither triggers nor uses up the effect | "next activation" is the core term and counteracting is instead of activating | Confirmed
  - RULING: Warpcoven Temporal Flux set-up spot | team code sets the operative up at the placeable spot nearest the marker (the marker inside its control range when possible), keeping its order and facing; it may end within an enemy's control range; no decision is raised | lifecycle hooks never raise decisions, the rule names no other limit, and the nearest spot is the one the text asks for | Unsourced
  - RULING: Warpcoven Temporal Flux under Null Rod | no set-up if the operative was activated within, or ends its activation within, a Condemnor's Null Rod distance; the marker is then removed | the Warpcoven rules commentary answers "no to both"; removing the marker follows the rule's own "otherwise" branch | Confirmed
  - RULING: Warpcoven Temporal Flux after incapacitation | the marker is removed as soon as the picked operative is incapacitated | the rule removes the marker whenever the operative is not wholly within 6", incapacitation included, and an incapacitated operative has no next activation | Unsourced
- T-WC.11 **Mindburn** (team-local weapon rule, mindburn): in the Resolve Attack Dice step, if any of your crits inflict damage, the operative attacked gains one of your Mindburn tokens unless it has one. The token goes at the end of that operative's next activation, at its incapacitation, or when a friendly operative next uses the mindburn (whichever is first). While an operative has your Mindburn token, its weapons' Hit is worsened by 1; this does not stack with being injured.
  - MECH: `onDamageInflicted` from a mindburn sequence with source `crit` and amount > 0 adds token `wc.mindburn` (cap 1, expiries `holderActivationEnd`, holder incapacitation); declaring a Shoot with mindburn removes every Mindburn token of that seat first; `modifyAttackDice` hitDelta +1 on the holder's attacks, skipped when its own injury penalty already applies and when `psychicAllowed` fails for it (Quicksilver Speed pattern, T-LG.30) | CLASS: team-hook
  - RULING: Warpcoven Mindburn trigger | only a crit that deals damage in the Resolve Attack Dice step counts; Devastating damage dealt on retention does not, and a crit reduced to 0 damage does not | the rule names the Resolve Attack Dice step, and Devastating is resolved on retention (R-5.15) | Unsourced
  - RULING: Warpcoven Mindburn and injury | an injured holder that suffers the injury Hit penalty gets nothing more; a holder that ignores injury (or is not injured) has Hit worsened by 1 on every weapon, ranged and melee | "not cumulative with being injured" | Unsourced
- T-WC.12 **ALIGHT** (Sorcerer of Warpfire, 1 AP, PSYCHIC): pick one enemy operative visible to the Sorcerer (no distance); with the same three end conditions as T-WC.7 it gains one of your Alight tokens unless it has one. Whenever a friendly WARPCOVEN operative is shooting, fighting or retaliating against an enemy with your Alight token, its weapons have Ceaseless. Not while in an enemy's control range.
  - MECH: unique action with an enemy-target choice (visible, `psychicSelectable`); token `wc.alight` (as T-WC.7); `modifyWeaponRules` with `targetId` adds Ceaseless when the target holds the token and `psychicAllowed` holds for both the friendly attacker and the target | CLASS: team-hook
- T-WC.13 **Sorcerous Automata** (every Rubric Marine): when it is activated, its APL is 1 lower until that activation ends unless a friendly WARPCOVEN SORCERER is within 9" of it at that moment. It is an APL change (R-9.6 cap applies). Counteracting is not an activation, so it never applies there.
  - MECH: `activation.start` handler: no friendly SORCERER (in the killzone) within 9" -> `applyAplEffect(-1)` expiring at activation end | CLASS: team-hook
  - RULING: Warpcoven Sorcerous Automata check | measured once, when the activation starts; a Sorcerer moving away or arriving later in the activation changes nothing | "whenever this operative is activated" fixes the moment, and the effect lasts "until the end of that activation" | Unsourced
- T-WC.14 **Icon Bearer** (Rubric Marine Icon Bearer and Tzaangor Icon Bearer): when marker control is worked out, its APL counts as 1 higher (not an APL change; stacks with changes and ignores R-9.6).
  - MECH: provider `controlApl` (apl + 1) | CLASS: team-hook
- T-WC.15 **Slow and Purposeful** (Rubric Marine Warrior): while it is shooting, its ranged weapons have Ceaseless if it has not performed Charge or Reposition in the current activation, or if it is counteracting. It may still Charge or Reposition after shooting. Dash and Fall Back do not switch it off.
  - MECH: `modifyWeaponRules` adds Ceaseless when the activation's `performed` has no `charge` or `reposition`, or the frame is a counteraction | CLASS: team-hook
- T-WC.16 **Savage Brutality** (Tzaangor Champion): the first time it performs Fight in each of its activations, if it is still in play afterwards, it may at once perform a free Fight (against any enemy, not necessarily the same one). This overrides the once-per-activation action limit (R-3.7).
  - MECH: provider `reactions` after the Champion's first Fight action in its activation (not in counteractions); offered only when an enemy is in its control range; `startFreeAction({ action: 'fight' })` with the repeat ban lifted (`maxRepeats` 2 for fight on the Champion while the offer is live) | CLASS: team-hook
  - RULING: Warpcoven Savage Brutality scope | only in the Champion's own activations (a Mutant Herd joint activation counts), never when counteracting or retaliating; the free Fight is optional, keeps every other Fight condition, and leaves no third Fight | the rule says "during each of its activations" and only lifts action restrictions | Unsourced
- T-WC.17 **BRAYHORN** (Tzaangor Horn Bearer, 0 AP): until the Ready step of the next Strategy phase, friendly WARPCOVEN TZAANGOR operatives get +1" Move. Not while in an enemy's control range.
  - MECH: unique action costing 0 AP; team effect read by provider `moveDelta` (+1 for friendly TZAANGOR) cleared at the next `turningPoint.start` | CLASS: team-hook
  - RULING: Warpcoven Brayhorn as a counteraction | it cannot be the counteraction action | a counteraction must cost exactly 1 AP (R-3.12) | Confirmed
- T-WC.18 **Herd Banner** (Tzaangor Icon Bearer): whenever an attack die would inflict Normal Dmg of 3 or more on a friendly WARPCOVEN TZAANGOR operative visible to and within 3" of the Icon Bearer (itself included), that damage is 1 lower. Crit damage, Devastating and non-dice damage are untouched.
  - MECH: `onDamageInflicted` for sources `normal` and `strike-normal`, amount >= 3, holder a friendly TZAANGOR in range of a live Icon Bearer -> amount - 1 | CLASS: team-hook
- T-WC.19 **Relic Hunters** (Tzaangor Warrior): once per battle for the whole kill team, one friendly TZAANGOR WARRIOR that is in the opponent's territory may perform Pick Up Marker, Place Marker or a mission action for 1 less AP.
  - MECH: provider `actionCostDelta` -1 for `marker:pickUp`, `marker:place` and MISSION abilities on a TZAANGOR WARRIOR in the opponent's territory while the battle ledger is unspent; `action.ended` spends it | CLASS: team-hook
  - RULING: Warpcoven Relic Hunters use | applied automatically to the first qualifying action (never below 0 AP) | every use saves the same 1 AP, and a cost provider cannot ask | Unsourced
- T-WC.20 **Shield** (team-local weapon rule, Tzaangor blade & shield): an operative with this weapon has Save 4+; whenever it is fighting or retaliating with this weapon, each of its blocks may block two unresolved successes instead of one (a normal success blocks two normals, a crit any two).
  - MECH: Save set to 4+ at set-up for operatives whose loadout includes `wc.w.tzaangor-blade-and-shield` (a set, as Warded Armour T-LG.36); provider `blockCapacity` returns 2 while that weapon is the operative's fight weapon (option `block2:`) | CLASS: team-hook
  - RULING: Warpcoven Shield blocks | each block keeps the core matching (normal on normal, crit on anything) for both successes it blocks; Brutal still allows crit blocks only | the rule changes how many successes a block covers, not which | Unsourced

### 15.5 Faction rules

- T-WC.21 **BOONS OF TZEENTCH**: when the roster is chosen, each SORCERER takes one BOON OF TZEENTCH for the battle, and no two Sorcerers may take the same boon. Boons are public and are tags, not keywords. Only Sorcerous Scrolls (T-WC.43) changes one. The boons are T-WC.22 to T-WC.30.
  - MECH: team.json `operativeChoices: [{ id: "boon", forKeyword: "SORCERER", unique: true, keyword: false, keywords: ["INCORPOREAL SIGHT", "TIME-WALK", "ECHOES FROM THE WARP", "WARP SWELL", "MUTANT APPENDAGE", "IMMATERIAL FLIGHT", "TWIST OF FATE", "ASTRAL BOMBARDMENT", "MASTER OF THE IMMATERIUM"] }]`; team code reads `op.picks.boon`; `defaults.operativePicks` gives each default Sorcerer a different boon | CLASS: generic:operativeChoices
  - RULING: Warpcoven boons visibility | the boon of each Sorcerer is open information from set-up | nothing in the rule makes it secret; same as the Marks of Chaos ruling | Unsourced
- T-WC.22 **Incorporeal Sight**: its ranged weapons have Saturate, and while it shoots, enemy operatives cannot be obscured.
  - MECH: `modifyWeaponRules` adds Saturate (ranged); `target.status` sets `obscured: false` when it is the shooter | CLASS: team-hook
- T-WC.23 **Time-Walk**: +1" to its Move (injury still takes 2"; floor per R-9.6).
  - MECH: provider `moveDelta` +1 | CLASS: team-hook
- T-WC.24 **Echoes from the Warp**: once per battle, when it counteracts, you may change its order, and it may perform one more 1 AP action for free in that counteraction; the two actions must differ.
  - MECH: 0 CP offer at the counteraction's start window (the one AoD Wrath of Vengeance uses); on use flip the order if asked, set `act.bonus += 1` and push `'wrath'` onto `act.used` (the shared "two counteraction actions differ" flag); battle ledger | CLASS: team-hook (the brief's Echoes fallback)
  - RULING: Warpcoven Echoes from the Warp move cap | the counteract 2" cap covers both actions together, and each must cost exactly 1 AP (never Guard) | R-3.12 caps all movement "while counteracting" and the extra action is part of that counteraction | Unsourced
  - RULING: Warpcoven Echoes once per battle | the use belongs to the boon, so a Sorcerer that gains Echoes through Sorcerous Scrolls after another Sorcerer used it gets no fresh use | the boon is one team rule with one battle limit | Unsourced
- T-WC.25 **Warp Swell**: its melee weapons' Normal Dmg is 1 higher (no cap printed).
  - MECH: `modifyDamage` normal +1 for its melee weapons | CLASS: team-hook
- T-WC.26 **Mutant Appendage**: an enemy in its control range does not stop it performing Pick Up Marker or mission actions; once per activation it may perform Pick Up Marker, Place Marker or a mission action for 1 less AP.
  - MECH: provider `markerActionRelief` (`ignoreEnemyControlRange` for `marker:pickUp` and MISSION abilities); provider `actionCostDelta` -1 with a per-activation ledger spent by `action.ended` | CLASS: team-hook
  - RULING: Warpcoven Mutant Appendage discount | applied automatically to the first qualifying action of each activation, never in a counteraction (not an activation), never below 0 AP | the rule says "once per activation", and every use saves the same 1 AP | Unsourced
- T-WC.27 **Immaterial Flight**: once per TP, when it performs Charge or Reposition during its activation, it may FLY: set it up again wholly within its Move horizontally of where it started (no +2" for Charge), in a placeable spot, outside every enemy's control range unless the action is a Charge. In a close-quarters killzone it cannot measure through Walls or cross an access point (no effect in the open killzone).
  - MECH: provider `canFly` for `charge` and `reposition` in its own activation while the once-per-TP ledger is unspent; `move.path` payload `fly: true` (`movement.planFly`); `action.ended` spends the ledger | CLASS: team-hook
- T-WC.28 **Twist of Fate**: its PSYCHIC ranged weapons have Piercing Crits 1.
  - MECH: `modifyWeaponRules` adds Piercing Crits 1 to its ranged weapons with the PSYCHIC tag | CLASS: team-hook
- T-WC.29 **Astral Bombardment**: one of its PSYCHIC ranged weapons gains Devastating 1. Chosen doombolt: it has 2" Devastating 2 instead of its printed Devastating 2 (other operatives within 2" of the target, friend or foe, also take 2). Chosen firestorm or mindburn (Sorcerer of Warpfire): at each Shoot with it, pick Seek Light or Devastating 1 for that action; it cannot have both, so picking Devastating 1 drops its printed Seek Light for that action.
  - MECH: Destiny and Tempyrion have one PSYCHIC ranged weapon each (no pick); the Warpfire's weapon is a second roster pick `operativeChoices` `{ id: "bombard", forKeyword: "WARPFIRE", keyword: false, keywords: ["FIRESTORM", "MINDBURN"] }` read only while its boon is Astral Bombardment; `modifyWeaponRules` adds Devastating 1 / swaps Devastating 2 for 2" Devastating 2; for the Warpfire, a 0 CP offer in the `firefight.actionDeclared` window of its Shoot ("Devastating 1 this action, losing Seek Light"; declining keeps Seek Light) | CLASS: team-hook
  - RULING: Warpcoven Astral Bombardment weapon pick | the weapon is picked with the boon at roster time (the Warpfire's `bombard` pick; Destiny and Tempyrion need none) and stays for the battle; the Warpfire's per-Shoot choice is made when the Shoot is declared, before weapon and target selection | "select one of this operative's PSYCHIC ranged weapons" is a pick made with the boon, and Seek Light must be fixed before targets are chosen | Unsourced
  - RULING: Warpcoven Astral Bombardment Seek Light | picking Devastating 1 for firestorm or mindburn removes their printed Seek Light for that action | the April '26 errata says the weapon "cannot have both" | Confirmed
- T-WC.30 **Master of the Immaterium**: +3" to every distance requirement of its PSYCHIC actions: Ravage Destiny 12", Reconstitution Ritual 9", Temporal Flux's pick 9" (the later "wholly within 6"" check is not extended). Protected by Fate and Alight have no distance, so nothing changes.
  - MECH: the team's distance filters of T-WC.8 to T-WC.10 add 3 when the performer has the boon (a borrowed action included) | CLASS: team-hook
  - RULING: Warpcoven Master of the Immaterium and Psychic Cabal | the performer's own boon extends a borrowed PSYCHIC action's distance; Psychic Cabal's 9" is a ploy distance and is never extended | the boon covers "this operative's PSYCHIC actions", which a borrowed action is while it has it | Unsourced
- T-WC.31 **ASTARTES**: in each activation a friendly WARPCOVEN HERETIC ASTARTES operative (Sorcerers and Rubric Marines) may perform two Shoot actions or two Fight actions (overrides R-3.7). There is no bolt-weapon condition. If both Shoots use a soulreaper cannon or both use a warpflamer, the second costs 1 more AP. The same PSYCHIC ranged weapon cannot be picked for both Shoots. Every friendly WARPCOVEN HERETIC ASTARTES operative may counteract whatever its order. Tzaangors get none of this.
  - MECH: provider `maxRepeats` (2 for `shoot` and `fight`, 1 once two of the other kind are performed) and `counteract: 'any'` for HERETIC ASTARTES; the AP surcharge through the `astartes` code param `repeatSurcharge { nameContains: ["soulreaper cannon", "warpflamer"], ap: 1 }` (do not rely on its bolt check: the provider answers for Shoot); provider `weaponForbidden` bars a PSYCHIC ranged weapon already in `act.weaponsUsed` | CLASS: team-hook (`repeatSurcharge` compares profile groups since the batch C prep)
  - RULING: Warpcoven Astartes soulreaper profiles | the focused and sweeping profiles are one weapon: a second Shoot with either profile after a Shoot with the cannon costs 1 more AP | the rule names the soulreaper cannon, not a profile | Unsourced
  - RULING: Warpcoven Astartes free Shoots | the surcharge applies only to a Shoot the operative pays for; a free Shoot or a counteraction pays none | as the AoD surcharge (`surchargeFor`) | Unsourced

### 15.6 Ploys

Neither source prints a cost: every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5). Each firefight ploy at most once per TP.

- T-WC.32 **AETHERIAL WARDING** | Strategy | 1 CP | Gambit step | Whenever any operative is shooting a friendly WARPCOVEN operative, a weapon with Piercing 1 has Piercing Crits 1 instead (Piercing 2 and Piercing Crits are unchanged).
  - MECH: `modifyWeaponRules` on the shooter's weapon when the target is a friendly WARPCOVEN of the ploy's seat (swap `piercing 1` for `piercing 1 crits`; the Implacable pattern T-LG.29) | CLASS: team-hook
- T-WC.33 **FATE ITSELF IS MY WEAPON** | Strategy | 1 CP | Gambit step | Roll two D6 and keep them aside (public). In this TP's Firefight phase, in any shooting, fighting or retaliating sequence (either player's), after attack dice are rolled and before re-rolls, you may replace one D6 rolled for that sequence (yours or the opponent's) with one reserved die. The replacement keeps that value: it cannot be changed or re-rolled, and if it is not a success (or not a crit) it cannot be retained as one; it is discarded when the sequence ends. If the two reserved dice summed to less than 9, the other reserved die is discarded after the first use. At most one reserved die per sequence; leftovers are discarded at the end of the TP.
  - MECH: ploy effect rolls 2D6 into the team ledger (event for the feed, shown on the HUD); 0 CP offers through ploy rule `extraOffers` to the Warpcoven seat in `shoot.beforeAttackRerolls` (the shooter's attack dice) and `fight.beforeRerolls` (both fighters' attack dice): choose reserved die x rolled die; team code sets the die's value and kind (success by Hit, crit by the weapon's crit threshold), sets `rerolled: true`, and tags it `wc.fate`; the brief's reserved-dice fallback | CLASS: team-hook (see 15.9 `dieLock`)
  - RULING: Warpcoven Fate Itself dice scope | only attack dice (both players' in a fight, the shooter's in shooting) can be replaced; defence dice cannot | the trigger is "after you or your opponent roll their attack dice", and in shooting no defence dice exist at that point | Unsourced
  - RULING: Warpcoven Fate Itself errata | the replacement die can be neither changed nor re-rolled, nor retained as a success or a crit it does not show, so Rending, Severe, Punishing and other conversions skip it | the April '26 errata adds "changed" and "critical success"; Wahapedia and the PDF card text still show the older wording | Corrected
  - RULING: Warpcoven Fate Itself order | a forced re-roll (Ravage Destiny, Omen) happens at the roll; the replacement is offered after it and before optional re-rolls, and may replace a die that was already force-re-rolled | forced re-rolls act on the fresh roll, and the ploy names the moment "before re-rolls" | Unsourced
- T-WC.34 **BROTHERHOOD OF SORCERERS** | Strategy | 1 CP | Gambit step | Friendly WARPCOVEN SORCERER operatives' PSYCHIC weapons (ranged and the force stave) have Balanced, or Ceaseless instead if another friendly WARPCOVEN SORCERER is within 9" of that operative (checked when it attacks).
  - MECH: `modifyWeaponRules` on PSYCHIC-tagged weapons of friendly SORCERER operatives (Balanced, or Ceaseless when another friendly SORCERER in the killzone is within 9") | CLASS: team-hook
- T-WC.35 **SAVAGE HERD** | Strategy | 1 CP | Gambit step | Friendly WARPCOVEN TZAANGOR operatives' melee weapons have Accurate 1. A friendly TZAANGOR's melee weapons also have Severe while it is assisted by a friendly WARPCOVEN operative, or while it is fighting visible to and within 6" of a friendly WARPCOVEN SORCERER.
  - MECH: `modifyWeaponRules` (Accurate 1; Severe when the friendly side's `assists` is not empty, or when it is the attacker of the fight and a friendly SORCERER is visible to and within 6") | CLASS: team-hook
  - RULING: Warpcoven Savage Herd Severe | the assist clause works when fighting or retaliating; the Sorcerer clause only when the Tzaangor is fighting (its own Fight action), not retaliating | assists exist in both roles, while 2024 rules keep "fighting" apart from "retaliating" (Blood for the Blood God precedent, T-LG.28) | Unsourced
- T-WC.36 **ALL IS DUST** | Firefight | 1 CP | An attack die inflicts Normal Dmg on a friendly WARPCOVEN RUBRIC MARINE | That die inflicts 1 damage instead.
  - MECH: defender offer at `shoot.defenceRolled` (the Rubric is the target) and `fight.rolled` (the Rubric is a fighter); using it arms a sequence flag; `onDamageInflicted` sets amount to 1 for the first `normal` / `strike-normal` die that damages that Rubric in the sequence | CLASS: team-hook
  - RULING: Warpcoven All Is Dust timing | the ploy is committed before damage, once the defence (or fight) dice are final, and applies to the first normal success that damages the Rubric in that sequence; unused if none does | the engine has no per-die decision point, and every normal success in a sequence carries the same Dmg | Unsourced
- T-WC.37 **CAPRICIOUS PLAN** | Firefight | 1 CP | At the end of a friendly WARPCOVEN SORCERER's activation | It may perform a free Dash even if an action it performed (Charge) would bar Dash, and/or you may change its order.
  - MECH: firefight ploy in `firefight.activationEnded` (activations only, not counteractions); choice dash / order / both; `startFreeAction({ action: 'dash' })` with the Charge bar lifted; order flip after the Dash | CLASS: team-hook
  - RULING: Warpcoven Capricious Plan errata | Dash and order change can both be taken | the April '26 errata changes "or" to "and/or"; Wahapedia lags | Corrected
  - RULING: Warpcoven Capricious Plan Dash conditions | only the action-restriction bar is lifted; the Dash still cannot start in an enemy's control range | the ploy names actions that prevent the Dash, not other conditions | Unsourced
  - RULING: Warpcoven end-of-activation order | Temporal Flux (T-WC.10) resolves first, in `activation.end`; the Capricious Plan window opens after it | a lifecycle hook cannot wait for a ploy choice, and both rules are the active player's (R-9.4 lets that player order them) | Unsourced
- T-WC.38 **PSYCHIC CABAL** | Firefight | 1 CP | A friendly WARPCOVEN SORCERER is activated | Pick another friendly WARPCOVEN SORCERER visible to and within 9" of it, then one of that Sorcerer's PSYCHIC unique actions or PSYCHIC ranged weapons; the activated Sorcerer has it until its activation ends. A PSYCHIC ranged weapon the lender used this TP cannot be picked, and the lender cannot use a picked weapon for the rest of the TP. Per the rules commentary the borrower gains none of the lender's boon benefits.
  - MECH: firefight ploy in `firefight.activationStart`; borrowed weapon: push its id onto `op.weapons` for the activation and take it off at `activation.end`, provider `weaponForbidden` bars it for the lender until TP end (the brief's borrowed-weapon fallback); borrowed action: provider `extraActions` for the activation; per-TP ledger of weapons each Sorcerer used | CLASS: team-hook
  - RULING: Warpcoven Psychic Cabal boons | the lender's boon never follows the weapon or action (an Astral Bombardment doombolt is lent without it); the borrower's own boon applies to what it holds (its Twist of Fate gives the borrowed weapon Piercing Crits 1) | the Warpcoven rules commentary answers "no" for the lender's boons; the borrower's boon covers "this operative's" weapons and actions | Confirmed
  - RULING: Warpcoven Psychic Cabal shared limits | a borrowed action shares the team's limits (Reconstitution Ritual once per TP, one Temporal Flux marker) and re-performing Protected by Fate, Ravage Destiny or Alight through the borrower ends the lender's earlier effect; the borrower's timers then run from the borrower's activations | the limits name "a friendly operative" and the action, not the card | Unsourced
- T-WC.39 **MUTANT HERD** | Firefight | 1 CP | A friendly WARPCOVEN TZAANGOR is activated | Pick another ready friendly WARPCOVEN TZAANGOR visible to and within 2" of it; both activate together, their actions done one at a time in any order.
  - MECH: firefight ploy in `firefight.activationStart`; `firefight.joinActivation` (`Activation.partner`, option `switch`; Extremis Mind-Link pattern) | CLASS: team-hook

### 15.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-WC.40 **ENSORCELLED ROUNDS** | Friendly WARPCOVEN operatives' inferno boltguns, inferno bolt pistols and autopistols have Devastating 1.
  - MECH: equipment effect `grantWeaponRule` Devastating 1 on `wc.w.inferno-boltgun`, `wc.w.inferno-bolt-pistol`, `wc.w.autopistol` (or `modifyWeaponRules` in team code if the data filter cannot name weapon ids) | CLASS: data
- T-WC.41 **DAEMONMAW WEAPONS** | Friendly WARPCOVEN RUBRIC MARINE operatives' melee weapons get +1 Atk; while a Rubric Marine is retaliating, its melee weapons have Accurate 1.
  - MECH: `modifyAttackDice` atk +1 for RUBRIC MARINE melee; `modifyWeaponRules` Accurate 1 when it is the defender of a fight | CLASS: team-hook
- T-WC.42 **ARCANE ROBES** | Once per TP, when an attack die would inflict Critical Dmg on a friendly WARPCOVEN SORCERER, you may make it inflict that weapon's Normal Dmg instead.
  - MECH: `onDamageInflicted` for sources `crit` and `strike-crit` on a friendly SORCERER: amount = the weapon's Normal Dmg (after `modifyDamage`); once-per-TP team ledger | CLASS: team-hook
  - RULING: Warpcoven Arcane Robes frequency | once per TP for the whole kill team; the older errata sentence ("not more than once per TP for each Sorcerer") adds nothing beyond the opening "once per turning point" | the current card text opens with a team-wide once per TP | Unsourced
  - RULING: Warpcoven Arcane Robes use | applied automatically to the first crit in the TP whose Critical Dmg is higher than the weapon's Normal Dmg (never on a 4/2 doombolt or a 6/3 melta crit); Devastating damage is not Critical Dmg and is never reduced | the hook cannot ask, and spending the use where it changes nothing would waste it | Unsourced
- T-WC.43 **SORCEROUS SCROLLS** | Once per battle, when a friendly WARPCOVEN SORCERER is activated or counteracts, you may give it a different BOON OF TZEENTCH for the rest of the battle (it loses its old one). The new boon cannot be one another friendly operative has; this beats the normal boon rules (a boon held by an incapacitated Sorcerer may be taken). Picking Echoes from the Warp at a counteraction lets it be used in that same counteraction.
  - MECH: 0 CP equipment offer in `firefight.activationStart` (activations and counteractions), before the Echoes offer; choice from `pickAlternatives` (unique honours other live holders); `setOperativePick(ctx, opId, 'boon', boon, 'wc.e.sorcerous-scrolls')`; battle ledger | CLASS: generic:operativeChoices
  - RULING: Warpcoven Sorcerous Scrolls precedence | a boon that only an incapacitated Sorcerer held may be picked again | the update log adds "this takes precedence over the normal Boons of Tzeentch rules" (missing from both card texts), and "any other friendly operative has" reads the boons in play | Confirmed

Marker/token guide (UI): Protected by Fate, Ravage Destiny, Alight and Mindburn tokens; Temporal Flux marker; the two Fate Itself reserved dice (HUD); a boon chip per Sorcerer; Brayhorn and Sorcerous Scrolls use markers.

### 15.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-WC: TEAM-WC-000 to TEAM-WC-034.

### 15.9 Generic capabilities (survey; resolved in the Engine map below)

- **operativeChoices** (built, batch C): the boon pick per Sorcerer (`forKeyword`, `unique`, `keyword: false`), changeable by `setOperativePick`. Used by T-WC.21, T-WC.29, T-WC.43.
- **halfSelections and selection.caps min** (built): five selections, Tzaangors half, at least one SORCERER. Used by T-WC.1, T-WC.2. **loadoutCaps** (built): one warpflame pistol, one soulreaper cannon. Used by T-WC.3.
- **psychic** (built, batch C): PSYCHIC tag and action keyword, `psychicAllowed`, `psychicSelectable`. Used by T-WC.6 to T-WC.12.
- **forcedReroll + controlApl** (built): Ravage Destiny. **applyAplEffect** at `activation.start`: Sorcerous Automata. **canFly**: Immaterial Flight. **blockCapacity**: Shield. **joinActivation**: Mutant Herd. **markerActionRelief**: Mutant Appendage. **reactions** + `startFreeAction`: Savage Brutality. **weaponForbidden**: Psychic Cabal and ASTARTES.
- Team-local fallbacks named in the brief: borrowed weapons (Psychic Cabal), reserved dice (Fate Itself), re-placing without a path (Temporal Flux), counteraction extra action (Echoes from the Warp).
- **Gaps found here (not in the brief's tables)**:
  - `repeatSurchargeGroup` (NICE): `abilities.repeatSurcharge` compares profile ids, so a soulreaper cannon Shoot with the other profile escapes the +1 AP. Resolved in the batch C prep: `repeatSurcharge` now treats two profiles of one profile group as the same weapon (GEN-085), so the `astartes` code param covers the soulreaper cannon's focused / sweeping switch with no team code.
  - `dieLock` (NICE): no flag stops other rules (Rending, Severe, Punishing, another team's conversions) from reclassifying a Fate Itself replacement die. Fallback: tag the die `wc.fate` and re-derive its kind from its value in the team's own `afterAttackRoll` handler; a conversion made later by another team's hook may still slip through (RULING Fate Itself errata applies as far as the hooks allow).
  - `conditionalPick` (NICE): Astral Bombardment needs a weapon pick only for the Warpfire and only with that boon. Fallback: an unconditional `bombard` operative choice on WARPFIRE (`keyword: false`) read only while the boon is Astral Bombardment; the Team Builder shows it for every Warpfire.
  - `activationEndDecision` (NICE): Temporal Flux's set-up spot is a player choice at activation end, where hooks cannot ask. Fallback: nearest placeable spot (RULING).
  - `perDieDefenderPloy` (NICE): All Is Dust is a per-die choice. Fallback: pre-commit in `shoot.defenceRolled` / `fight.rolled` (RULING).

### 15.10 Gotchas

- PDF update log over Wahapedia in two places with practical effect, each with a Corrected ruling: Fate Itself's replacement die cannot be changed or turned into a crit; Capricious Plan gives Dash and/or order change. Two more are wording only: Wahapedia's ASTARTES says "friendly HERETIC ASTARTES" without WARPCOVEN, and its Brotherhood of Sorcerers omits "instead" (same meaning). The Sorcerous Scrolls precedence sentence and the Arcane Robes per-Sorcerer sentence exist only in the update log.
- No LEADER, no leader slot: 5 selections, Tzaangors are halves, at least one Sorcerer. A roster fields 5 to 9 operatives, so the kill grade row follows the actual starting count. Both WARRIOR cards repeat; the Gunner does not.
- ASTARTES here has no bolt-weapon condition (unlike T-AOD.15, T-PM.16, T-LG.27): a Gunner may Shoot twice with its warpflamer or soulreaper cannon for +1 AP on the second (across both soulreaper profiles). The same PSYCHIC ranged weapon never twice in one activation (doombolt then inferno bolt pistol is fine; firestorm then mindburn is fine). Tzaangors are not HERETIC ASTARTES: one Shoot, one Fight, Engage order to counteract.
- Sorcerous Automata makes a Rubric APL 2 when no Sorcerer is within 9" at activation start: then its two Shoots with a heavy weapon (1 + 2 AP) are impossible. It never affects counteractions.
- Boons are tags on Sorcerers only, unique across the roster, public. Sorcerous Scrolls changes one once per battle, also at a counteraction.
- Astral Bombardment on the doombolt replaces Devastating 2 with 2" Devastating 2 (hits friends within 2" of the target too); on firestorm or mindburn it is Seek Light or Devastating 1 per Shoot, never both, so Devastating 1 costs the printed Seek Light.
- Master of the Immaterium extends Ravage Destiny, Reconstitution Ritual and Temporal Flux's pick, never Temporal Flux's 6" return check, Psychic Cabal's 9" or any non-PSYCHIC distance.
- Mindburn: only crit damage dealt in the Resolve step gives the token; Hit worse by 1 on every weapon of the holder, not with injury; it ends when the holder's next activation ends or when any friendly operative uses mindburn again.
- Ravage Destiny forces re-rolls of 6s (crits included) on the enemy's attack dice and lowers its control APL by 1 (not an APL change). Protected by Fate gives the friendly defender any re-rolls. Both, and Alight, end at the performing Sorcerer's next activation start, its incapacitation, or a new use of the same action by any friendly operative.
- Temporal Flux: one marker at a time; return at the end of the target's next activation (never a counteraction), only if wholly within 6" of the marker and not under Null Rod; the set-up may land in an enemy's control range.
- Null Rod (another team) shuts off these PSYCHIC actions, the four PSYCHIC ranged weapons and every lasting PSYCHIC effect within 6" of the Condemnor; the force stave loses its weapon rules there (the Novitiates' side applies that), so Brotherhood of Sorcerers adds nothing to it.
- Savage Brutality: one extra free Fight per activation of the Champion, after its first Fight, against any enemy. Brayhorn is 0 AP (not a counteraction) and lasts to the next Ready step. Herd Banner cuts Normal Dmg 3+ by 1 on Tzaangors within 3" of the Icon Bearer. Shield is Save 4+ always, and double blocks only while fighting with that weapon.
- Slow and Purposeful: Ceaseless unless the Warrior Charged or Repositioned earlier in the activation; Dash and Fall Back keep it; always on in a counteraction.
- Fate Itself: attack dice only, one reserved die per sequence, the second die survives only if the pair summed to 9 or more; leftovers vanish at TP end.
- Edition leaks to reject: no 2021 Warpcoven (no psychic phase or Manifest Psychic Power action, no perils of the warp, no Cabbalistic rituals or psychic powers table, no 2021 All Is Dust "+1 save"), no 40k 10th Thousand Sons (no Cabal of Sorcerers points, no Rituals, no 4++ invulnerable save; the only 4+ is the Shield Save); inches only, three defence dice, every printed number from the April '26 cards.

### 15.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (5 selections, Tzaangors half, at least one SORCERER, Warriors repeatable) | team.json slot `main` (`count: 5`, `halfSelections`, `repeatable`), `selection.caps [{ keyword: SORCERER, min: 1 }]` |
| Loadouts, one warpflame pistol, one soulreaper cannon | datacard `weapons.options`; `selection.loadoutCaps`; `defaults.loadouts` where the first legal loadout breaks a cap |
| Boons of Tzeentch, Sorcerous Scrolls | `operativeChoices` (`boon`: `forKeyword` SORCERER, `unique`, `keyword: false`; `bombard` for WARPFIRE); `setOperativePick` / `pickAlternatives`; `defaults.operativePicks` |
| PSYCHIC tag and actions, Null Rod | `wc.a.wr-psychic`; ability `keywords: ["PSYCHIC"]`; `psychicAllowed`, `psychicSelectable` in team code |
| Protected by Fate, Ravage Destiny, Alight, Mindburn | `tokens.ts` (`wc.protected`, `wc.ravaged`, `wc.alight`, `wc.mindburn`); `modifyDefenceDice` re-roll grant; `diceRolled` + `forcedReroll`; provider `controlApl`; `modifyWeaponRules` Ceaseless; `modifyAttackDice` hitDelta |
| Reconstitution Ritual | `effects.regainWounds(2D3)`, team once-per-TP ledger |
| Temporal Flux | team marker; `activation.end` re-place (`pos` + `OperativeMoved` `'forced'` with one `'fly'` segment); `operative.incapacitated` cleanup |
| Sorcerous Automata | `activation.start` + `applyAplEffect(-1)` |
| Icon Bearers | provider `controlApl` |
| Slow and Purposeful, Incorporeal Sight, Twist of Fate, Astral Bombardment, Alight, Brotherhood, Savage Herd, Aetherial Warding, Daemonmaw Accurate | `modifyWeaponRules` (with `targetId` where needed); `target.status` for Incorporeal Sight |
| Savage Brutality | provider `reactions` after the first Fight + `startFreeAction({ action: 'fight' })` |
| Brayhorn, Time-Walk | provider `moveDelta` (Brayhorn ledger cleared at `turningPoint.start`) |
| Herd Banner, All Is Dust, Arcane Robes | `onDamageInflicted` (normal / strike-normal; crit / strike-crit) |
| Relic Hunters, Mutant Appendage | provider `actionCostDelta` with ledgers; `markerActionRelief` |
| Shield | Save set at set-up; provider `blockCapacity` |
| Echoes from the Warp | counteraction start offer; `act.bonus`, `act.used` `'wrath'`; order flip |
| Immaterial Flight | provider `canFly` (Charge, Reposition, activation only, once per TP) |
| Warp Swell | `modifyDamage` |
| ASTARTES | providers `maxRepeats`, `counteract: 'any'`, `weaponForbidden`; `astartes` param `repeatSurcharge` (profile groups count as one weapon) |
| Fate Itself is My Weapon | ploy effect + team ledger; `extraOffers` in `shoot.beforeAttackRerolls` and `fight.beforeRerolls` |
| All Is Dust | offers in `shoot.defenceRolled` / `fight.rolled`, sequence flag |
| Capricious Plan | `firefight.activationEnded`; `startFreeAction({ action: 'dash' })`; order flip |
| Psychic Cabal | `firefight.activationStart`; `op.weapons` push/pop; `extraActions`; `weaponForbidden` |
| Mutant Herd | `firefight.joinActivation` |
| Ensorcelled Rounds | equipment `grantWeaponRule` on three weapon ids |
| Daemonmaw Weapons | `modifyAttackDice` atk +1; `modifyWeaponRules` Accurate 1 when retaliating |

### 15.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/warpcoven/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `wc.<name>` such as `wc.sorcerer-destiny`, `wc.rubric-marine-gunner`, `wc.tzaangor-warrior`; weapons `wc.w.`, group `wc.wg.soulreaper-cannon`, abilities and team weapon rules `wc.a.` / `wc.a.wr-psychic`, `wc.a.wr-mindburn`, `wc.a.wr-shield`, ploys `wc.p.`, equipment `wc.e.`); keep the scaffold's ids where they already exist
  - `src/engine/teams/warpcoven.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/warpcoven.ts` (weapon flavour, VFX family, sound, attachments; figure stand-ins `wc-sorcerer-destiny`, `wc-sorcerer-tempyrion`, `wc-sorcerer-warpfire`, `wc-rubric-marine-gunner`, `wc-rubric-marine-icon-bearer`, `wc-rubric-marine-warrior`, `wc-rubric-marine-warrior-b`, `wc-tzaangor-champion`, `wc-tzaangor-horn-bearer`, `wc-tzaangor-icon-bearer`, `wc-tzaangor-warrior`, `wc-tzaangor-warrior-b`; the v2 concept names add the loadout, e.g. `wc-sorcerer-destiny-khopesh`, `wc-tzaangor-warrior-blade-shield`, so attachments follow the loadout; boon chip and token labels)
  - `tests/engine/teams/warpcoven.test.ts` (TEAM-WC-nnn tests) and `tests/engine/teams/warpcoven.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 15 and `12-rules-test-checklist.md` section TEAM-WC (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/warpcoven/team.json`. Flip it (with `defaults` filled: a legal 5-selection roster with at least one Sorcerer, a different boon per default Sorcerer, loadouts within the caps; and every weapon in `src/client/teams/warpcoven.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above; every batch A, B and C capability it names exists. Roster and boons first (TEAM-WC-001 to TEAM-WC-003), then ASTARTES (TEAM-WC-005) and the PSYCHIC/Null Rod gating (TEAM-WC-004), then the Sorcerer actions and Mindburn (TEAM-WC-013 to TEAM-WC-018). Team-local fallbacks: borrowed weapons (Psychic Cabal), reserved dice (Fate Itself), re-place without a path (Temporal Flux), counteraction bonus action (Echoes), plus the five gaps in 15.9 (`repeatSurchargeGroup`, `dieLock`, `conditionalPick`, `activationEndDecision`, `perDieDefenderPloy`), each with its fallback.
- Team-local weapon rules the data needs: `wc.a.wr-psychic` (doombolt, fluxblast, firestorm, mindburn, force stave), `wc.a.wr-mindburn` (mindburn), `wc.a.wr-shield` (Tzaangor blade & shield).
- RULING lines expected: no leader, odd Tzaangor, repeatable entries, PSYCHIC lasting effects under Null Rod, doombolt and mindburn Dmg, "until it's incapacitated", Protected by Fate self-target, Ravage Destiny forced re-roll, Reconstitution Ritual self-target, Temporal Flux (next activation, set-up spot, Null Rod, after incapacitation), Mindburn trigger and injury, Sorcerous Automata check, Savage Brutality scope, Brayhorn as a counteraction, Relic Hunters use, Shield blocks, boons visibility, Echoes move cap and once per battle, Mutant Appendage discount, Astral Bombardment weapon pick and Seek Light, Master of the Immaterium and Psychic Cabal, Astartes soulreaper profiles and free Shoots, Fate Itself dice scope, errata (Corrected) and order, Savage Herd Severe, All Is Dust timing, Capricious Plan errata (Corrected), Dash conditions and end-of-activation order, Psychic Cabal boons and shared limits, Arcane Robes frequency and use, Sorcerous Scrolls precedence.
- Gotchas: section 15.10. No LEADER and 5 to 9 operatives; ASTARTES without a bolt condition but with the soulreaper/warpflamer surcharge; boons are unique tags, not keywords; every lasting PSYCHIC effect asks `psychicAllowed` of each operative it touches; the AI should use Fate Itself on its own fails and the opponent's crits, and Ravage Destiny on the enemy best placed to shoot or hold a marker.

## 16. Farstalker Kinband

Rule IDs `T-FK.<n>`, checklist IDs `TEAM-FK-<nnn>`. Sources: the team PDF (Farstalker Kinband, faction version 3, June '26 update log state, including the June '26 rules commentary and the earlier errata it lists; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia page (faction version 3; its history lists June 2026 and a later July 2026 row, and every rule text we read matches the PDF's June '26 state) and its FAQ panel (one entry: Call the Kill with Blast or Torrent, the same answer as the PDF rules commentary). The two agree on every number; they differ in one place, the Hound's Bad-tempered, where Wahapedia puts the errata's order-change clause in the wrong sentence (16.3, UNCLEAR); the PDF wins. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 16.1 Team selection

- T-FK.1 Roster is exactly 12 operatives: 1 KROOT KILL-BROKER (leader) plus 11 picks from the main list (T-FK.2). Nothing counts as two selections or half a selection.
  - MECH: roster validator: leader slot count 1 (`fk.kill-broker`), main slot count 11 | CLASS: data
- T-FK.2 Main list: BOW-HUNTER, COLD-BLOOD, CUT-SKIN, HEAVY GUNNER, HOUND, LONG-SIGHT, PISTOLIER, STALKER, TRACKER, WARRIOR. HOUND and WARRIOR may be taken more than once; at most two HOUNDs; every other entry at most once. Eight single cards plus two Hounds make ten, so every legal roster has at least one WARRIOR.
  - MECH: main slot `repeatable: ["fk.hound", "fk.warrior"]`, `selection.caps: [{ from: ["fk.hound"], max: 2 }]` | CLASS: data
- T-FK.3 Loadouts:
  - KILL-BROKER: ritual blade plus either the Kroot rifle (its 3+ profile) or the pulse weapon.
  - HEAVY GUNNER: blade plus either the Dvorgite skinner or the Londaxi tribalest.
  - WARRIOR: blade plus either the Kroot rifle (4+) or the Kroot scattergun.
  - BOW-HUNTER (accelerator bow, all three profiles, and blade), COLD-BLOOD (Kroot rifle 3+, blade), CUT-SKIN (Cut-skin's blades), HOUND (ripping fangs), LONG-SIGHT (Kroot hunting rifle, all three profiles, and blade), PISTOLIER (dual Kroot pistols, both profiles, and blade), STALKER (Kroot scattergun, Stalker's blade), TRACKER (Kroot rifle 4+, blade): fixed, no picker.
  - MECH: datacard `weapons.options` `sets` for the Kill-Broker, Heavy Gunner and Warrior; profile groups bring every profile | CLASS: data
- T-FK.4 Archetypes: INFILTRATION, RECON (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["infiltration", "recon"]` | CLASS: data
- T-FK.5 Keywords: every operative carries FARSTALKER KINBAND, T'AU EMPIRE and KROOT plus its role keyword (KILL-BROKER, BOW-HUNTER, COLD-BLOOD, CUT-SKIN, HEAVY GUNNER, HOUND, LONG-SIGHT, PISTOLIER, STALKER, TRACKER, WARRIOR); the Kill-Broker also has LEADER. T'AU EMPIRE is stored exactly as the Pathfinders store it (straight apostrophe), so any rule reading that keyword sees both teams. The PDF prints "FARSTALKER KINBAND ," with a stray space; the keyword is FARSTALKER KINBAND.
  - MECH: keyword lists in operatives.json (the Keyword pattern accepts the apostrophe and hyphens) | CLASS: data
- T-FK.6 Team-local weapon rules: **Concealed Position** (Kroot hunting rifle (concealed), T-FK.18) and **Salvo** (dual Kroot pistols (salvo), T-FK.20). Every other weapon rule on the cards is core (R-10).
  - MECH: weapon records carry `{ "rule": "fk.a.wr-concealed-position" }` / `{ "rule": "fk.a.wr-salvo" }` resolved by the team file | CLASS: team-hook

### 16.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| KROOT KILL-BROKER | 2 | 6" | 5+ | 9 | 32 | FARSTALKER KINBAND, T'AU EMPIRE, LEADER, KROOT, KILL-BROKER |
| KROOT BOW-HUNTER | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, BOW-HUNTER |
| KROOT COLD-BLOOD | 2 | 6" | 5+ | 9 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, COLD-BLOOD |
| KROOT CUT-SKIN | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, CUT-SKIN |
| KROOT HEAVY GUNNER | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, HEAVY GUNNER |
| KROOT HOUND | 2 | 8" | 5+ | 7 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, HOUND |
| KROOT LONG-SIGHT | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, LONG-SIGHT |
| KROOT PISTOLIER | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, PISTOLIER |
| KROOT STALKER | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, STALKER |
| KROOT TRACKER | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, TRACKER |
| KROOT WARRIOR | 2 | 6" | 5+ | 8 | 28 | FARSTALKER KINBAND, T'AU EMPIRE, KROOT, WARRIOR |

Notes: every card is APL 2 and Save 5+; the Kill-Broker and the Cold-Blood have 9 wounds, the Hound 7 and Move 8". Stats and bases agree between the PDF and Wahapedia on all eleven cards (the Kill-Broker is 32mm, everyone else 28mm).

### 16.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Kroot rifle (3+) | R | 4 | 3+ | 3/4 | none | Kill-Broker (option), Cold-Blood |
| Kroot rifle | R | 4 | 4+ | 3/4 | none | Tracker, Warrior (option) |
| Pulse weapon | R | 4 | 4+ | 4/5 | none | Kill-Broker (option) |
| Ritual blade | M | 4 | 3+ | 4/5 | none | Kill-Broker |
| Accelerator bow (fused arrow) | R | 4 | 3+ | 4/5 | Piercing 1 | Bow-Hunter |
| Accelerator bow (glide arrow) | R | 4 | 3+ | 3/4 | Silent | Bow-Hunter |
| Accelerator bow (voltaic arrow) | R | 4 | 3+ | 3/5 | Blast 1" | Bow-Hunter |
| Blade | M | 3 | 3+ | 3/5 | none | Bow-Hunter, Cold-Blood, Heavy Gunner, Long-Sight, Pistolier, Tracker, Warrior |
| Cut-skin's blades | M | 4 | 3+ | 3/5 | Ceaseless, Lethal 5+ | Cut-Skin |
| Dvorgite skinner | R | 5 | 2+ | 3/3 | Range 6", Heavy (Reposition only), Piercing 2, Torrent 2" | Heavy Gunner (option) |
| Londaxi tribalest | R | 5 | 4+ | 4/5 | Heavy (Reposition only), Piercing 1, Rending | Heavy Gunner (option) |
| Ripping fangs | M | 4 | 3+ | 3/4 | Rending | Hound |
| Kroot hunting rifle (concealed) | R | 4 | 2+ | 3/3 | Heavy, Devastating 3, Silent, Concealed Position | Long-Sight |
| Kroot hunting rifle (mobile) | R | 4 | 3+ | 3/4 | none | Long-Sight |
| Kroot hunting rifle (stationary) | R | 4 | 2+ | 3/3 | Heavy, Devastating 3 | Long-Sight |
| Dual Kroot pistols (focused) | R | 4 | 3+ | 3/5 | Range 8", Ceaseless, Lethal 5+ | Pistolier |
| Dual Kroot pistols (salvo) | R | 4 | 3+ | 3/5 | Range 8", Salvo | Pistolier |
| Kroot scattergun | R | 4 | 3+ | 3/3 | Range 6" | Stalker, Warrior (option) |
| Stalker's blade | M | 4 | 3+ | 3/5 | Balanced, Rending | Stalker |

Notes: 19 profiles over 13 weapons. Ids: `fk.w.kroot-rifle` (4+) and `fk.w.kroot-rifle-elite` (3+; display name "Kroot rifle" for both, so name tests see both), `fk.w.pulse-weapon`, `fk.w.ritual-blade`, `fk.w.blade`, `fk.w.cut-skins-blades`, `fk.w.dvorgite-skinner`, `fk.w.londaxi-tribalest`, `fk.w.ripping-fangs`, `fk.w.kroot-scattergun`, `fk.w.stalkers-blade`; profile groups `fk.wg.accelerator-bow` (fused, glide, voltaic), `fk.wg.kroot-hunting-rifle` (concealed, mobile, stationary), `fk.wg.dual-kroot-pistols` (focused, salvo). Heavy without a bracket on the hunting rifle means no move at all in that activation or counteraction (R-10.9). No faction equipment adds a weapon.

UNCLEAR (resolved): the Kroot rifle exists at Hit 3+ (Kill-Broker, Cold-Blood) and 4+ (Tracker, Warrior) in both sources. RULING: Farstalker Kinband Kroot rifle profiles | two records, 3+ for the Kill-Broker and the Cold-Blood, 4+ for the Tracker and the Warrior | both the PDF and Wahapedia print these values on those cards | Confirmed
UNCLEAR (resolved): the PDF layout extract scrambles the Heavy Gunner table (it prints the Londaxi tribalest name against the skinner's row). The flow extract and Wahapedia agree: the Dvorgite skinner is the Range 6" Torrent weapon at 2+, the Londaxi tribalest the 4+ Rending weapon.
UNCLEAR (resolved): every "Blade", the Cut-skin's blades, both pistol profiles and the Stalker's blade print Dmg 3/5 in both sources, matching the errata in the update log; no number differs.
UNCLEAR (resolved): Piercing Shot and Toxin Shot (T-FK.37, T-FK.38) name "Kroot rifle"; the Long-Sight's weapon is a different weapon whose name is "Kroot hunting rifle". RULING: Farstalker Kinband hunting rifle and ammunition | the Kroot hunting rifle is not a Kroot rifle, so Piercing Shot and Toxin Shot cannot pick it | R-9.8 matches the primary name exactly, and "Kroot hunting rifle" is not "Kroot rifle" | Confirmed
UNCLEAR (resolved): Bad-tempered (T-FK.16): Wahapedia puts "you can change its order to Engage to do so" inside the enemy's Charge clause, which makes no sense; the PDF card and its errata entry put it after the Hound's free Charge. RULING: Farstalker Kinband Bad-tempered order change | the Hound may switch to Engage for its free Charge; nothing changes the enemy's order | the PDF errata states the amended sentence; Wahapedia misplaces the clause | Corrected

### 16.4 Operative rules and unique actions

- T-FK.7 **Call the Kill** (Kill-Broker): a STRATEGIC GAMBIT usable while the Kill-Broker is in the killzone. Pick one enemy operative anywhere in the killzone (no visibility or range) as your mark for the TP. Whenever a friendly FARSTALKER KINBAND operative shoots, fights or retaliates against the mark, its weapons have Balanced. Whenever the mark is incapacitated, you may pick another enemy operative as the new mark for the rest of the TP, and keep doing so each time a mark falls. The Kill-Broker need not be in the killzone for the re-pick.
  - MECH: 0 CP strategic gambit ability with an enemy pick (Combat Doctrine / Eye of the Ancestors pattern), gate "Kill-Broker in the killzone"; token `fk.callTheKill` (cap 1 per seat, `turningPointEnd`); `modifyWeaponRules` adds `core.wr.balanced` per `targetId`; the re-pick is a 0 CP offer in the `operative.killed` window (the FK seat, after removal) when the removed operative carried the token, with the pending fallback of 16.9 | CLASS: team-hook
  - RULING: Farstalker Kinband Call the Kill new mark timing | the new mark is picked at the end of the action, after the incapacitated operatives are removed, for every way the mark can fall | the June '26 rules commentary (and Wahapedia FAQ) answers this for Blast and Torrent; one timing for all cases keeps the mark stable during an action | Confirmed
  - RULING: Farstalker Kinband Call the Kill pending re-pick | when no `operative.killed` window opens for the FK seat (the mark fell to its own Hot, a mine, direct damage, or a killer that fell in the same action), the re-pick and Victory Shriek wait as a 0 CP offer at the FK seat's next `firefight.activationStart`, `firefight.actionEnded` or `operative.killed` window in the same TP, and lapse at the TP's end | the engine opens the kill window only for a living killer of the other seat; the rule itself says "whenever the mark is incapacitated", whatever the cause | Unsourced
- T-FK.8 **Victory Shriek** (Kill-Broker): whenever your mark is incapacitated, you may pick one friendly FARSTALKER KINBAND operative within 6" of the Kill-Broker (no visibility); its weapons have Balanced for the rest of the battle. No operative can be picked for this more than once per battle.
  - MECH: offered together with the T-FK.7 re-pick (same window, a separate choice); token `fk.victoryShriek` (`expires: ['battle']`) on the picked operative; `modifyWeaponRules` adds Balanced while it carries the token; battle ledger of picked ids | CLASS: team-hook
  - RULING: Farstalker Kinband Victory Shriek details | needs the Kill-Broker in the killzone when the pick is made (after removal, as T-FK.7); the 6" is measured then; the Kill-Broker may pick itself; a mark that fell only counts if Call the Kill set it this TP | the rule measures from the Kill-Broker, an operative is within any distance of itself (R-8.3), and only Call the Kill creates a mark | Unsourced
  - RULING: Farstalker Kinband Balanced from several sources | Balanced from Call the Kill, Victory Shriek and the Stalker's blade never stacks (one re-roll), and a weapon holding Balanced from any of them "already has Balanced" for Prey (T-FK.31) | a weapon rule is either present or not; Prey's own fallback clause exists because a second Balanced adds nothing | Unsourced
- T-FK.9 **ENERGISE** (Bow-Hunter, 1 AP): until the end of the TP, or until the Bow-Hunter has finished a Shoot action with its accelerator bow, every profile of the bow has Lethal 5+. Not while in an enemy's control range.
  - MECH: unique action setting an operative effect (`turningPointEnd`); `modifyWeaponRules` adds `core.wr.lethal` 5+ to `fk.wg.accelerator-bow` profiles; `action.ended` of a Shoot with a bow profile clears it | CLASS: team-hook
  - RULING: Farstalker Kinband Energise expiry | the bonus lasts for the whole Shoot action that uses the bow (every voltaic Blast sequence keeps Lethal 5+) and ends when that action ends; a Guard interrupt Shoot with the bow also uses it up; fighting with the blade does not | "has shot" is complete only once the action is finished | Unsourced
- T-FK.10 **Hardy** (Cold-Blood): whenever an attack die would deal its Critical Dmg to the Cold-Blood, you may have it deal the weapon's Normal Dmg instead. Devastating and other non-die damage are untouched.
  - MECH: `onDamageInflicted` on this operative for sources `crit` and `strike-crit`: `amount = min(amount, normal Dmg of that weapon against it after modifiers)` (weapon from `weaponId`) | CLASS: team-hook
  - RULING: Farstalker Kinband Hardy use | applied automatically whenever the Normal Dmg is lower; never applied when it is not lower (a 6/3 melta-style crit keeps its 3) | the damage hook cannot ask, and the choice is a pure gain | Unsourced
- T-FK.11 **Cold-blooded** (Cold-Blood): when it shoots, fights or retaliates against a wounded enemy operative, its weapons have Lethal 5+; if that enemy is also injured, they also have Rending.
  - MECH: `modifyWeaponRules` per `targetId` (wounds below starting wounds: Lethal 5+; below half: also Rending) | CLASS: team-hook
- T-FK.12 **Vicious Duellist** (Cut-Skin): whenever it fights or retaliates, each attack die the enemy fighter discards as a fail deals 1 damage to that enemy.
  - MECH: `afterAttackRoll` for the enemy fighter's side of a fight involving the Cut-Skin (hooks run for every team; filter on the Cut-Skin being the other fighter): count that side's `fail` dice after re-rolls, minus one if the enemy weapon's Punishing will turn a fail into a success (it holds a crit); then `effects.directDamage(count)` on the enemy with the Cut-Skin as the source | CLASS: team-hook (see 16.9 `fightRetained`)
  - RULING: Farstalker Kinband Vicious Duellist timing | the damage lands when both fighters' dice are final (after all re-rolls, at retention) and before the first die is resolved; if it incapacitates the enemy the sequence ends at once (R-6.7) and the Cut-Skin counts as the operative that incapacitated it; it is direct damage, so the enemy's per-die reductions do not apply | the fails are discarded at retention, and "inflict 1 damage" is plain damage (R-7.5) | Unsourced
- T-FK.13 **Savage Assault** (Cut-Skin): the first time it performs the Fight action in each of its activations, if neither it nor the enemy it fought is incapacitated, it may at once perform a free Fight against that same enemy only (and only if that enemy can still be fought). This beats the action restriction (R-3.7).
  - MECH: 0 CP offer to the FK seat in the `firefight.actionEnded` window after the Cut-Skin's first Fight of its own activation (ledger per activation; paid or free Fight both count as the first); `startFreeAction({ action: 'fight' })` with provider `fightTargets` returning only that enemy during that free Fight. `startFreeAction` does not apply the repeat check, so no `maxRepeats` change is needed; a later paid Fight in the same activation stays barred by R-3.7 | CLASS: team-hook
  - RULING: Farstalker Kinband Savage Assault scope | only in the Cut-Skin's own activation (a counteraction is not an activation); the free Fight is optional; the precedence covers that free Fight only | "during each of its activations" and "this takes precedence over action restrictions" for the free action | Unsourced
- T-FK.14 **Beast** (Hound): the Hound can only perform Charge, Dash, Fall Back, Fight, GATHER, Guard, Reposition, Pick Up Marker and Place Marker (so no Shoot, no mission actions, no equipment or grenade actions), and can only use the weapon on its own card (no grenades or other granted weapons). It can counteract with any of those that costs 1 AP.
  - MECH: provider `actionForbidden` for every other action id (universal, `ability:<id>` except `fk.a.gather`, mission ids); provider `equipmentEligible` false for the Hound on every equipment that grants weapons; provider `weaponForbidden` for any weapon id not `fk.w.ripping-fangs` | CLASS: team-hook
  - RULING: Farstalker Kinband Beast scope | Guard is allowed (its interrupt can only be a Fight); Meat and Trophy exclude the Hound by their own text; universal equipment actions (grenades, barricade moves) and mission actions are barred | the card lists the allowed actions exhaustively and bars weapons off its card | Confirmed
- T-FK.15 **Bad-tempered: forced target** (Hound): whenever an enemy operative performs the Fight action and the Hound is one of the operatives it could fight, you may make it fight the Hound.
  - MECH: 0 CP offer to the FK seat in `firefight.opponentActionDeclared` when the declared action is Fight (free ones included) and a Hound is in the enemy's control range; one option per eligible Hound; the pick is stored for that action and provider `fightTargets` returns only that Hound | CLASS: team-hook
  - RULING: Farstalker Kinband Bad-tempered choice | offered as a choice when the Fight is declared (the target filter itself cannot ask); with two eligible Hounds the FK player picks one; the AI forces the Hound unless it is injured | "you can force" is optional and the declaration window is the only point before the target is picked | Unsourced
- T-FK.16 **Bad-tempered: free Charge** (Hound): whenever an enemy operative ends a Charge action in the control range of another friendly FARSTALKER KINBAND operative that is within 3" of the Hound, and the Hound is not in any enemy's control range, the Hound may at once perform a free Charge (switching to Engage to do so if needed) that must end in that enemy's control range.
  - MECH: provider `reactions` for the FK seat on `ReactionInfo` with `action: 'charge'` by an enemy actor; conditions measured when the Charge ends; `startFreeAction({ action: 'charge', endWithinCrOf: enemyId })` with an optional order flip (Butcher pattern, T-LG.14) | CLASS: team-hook
  - RULING: Farstalker Kinband Bad-tempered free Charge | a normal Charge move (Move + 2"); it happens outside the Hound's activation, so it is not a counteraction, does not use the Hound's counteract, and does not bar a later Charge in its own activation; it is offered whether the Hound is ready or expended; each Hound may react to the same enemy Charge | free actions outside an activation follow R-3.9; the rule caps nothing but the end point | Unsourced
- T-FK.17 **GATHER** (Hound, 1 AP): the Hound performs a free Dash or Reposition; part-way through the move it may perform a free Pick Up Marker or Place Marker (control may be worked out during that action for this), then it may use whatever move distance it has left.
  - MECH: brief fallback: split into a free move (`startFreeAction` Dash or Reposition with the player's distance), a free Pick Up / Place Marker, and a second free move of the same kind with `maxMove` = the remaining distance (from `movedThisActivation`); the whole counts as one Dash or one Reposition for R-3.7 and for later restrictions | CLASS: team-hook
  - RULING: Farstalker Kinband Gather in v1 | v1 missions have no marker that Pick Up Marker can be used on (R-4.5), so the middle step only matters for Place Marker; Gather still works as a free Dash or Reposition; its control check during the action overrides R-8.6's "between actions" for that Pick Up | the rule lets control be worked out mid-action; v1 has no pick-up markers | Unsourced
- T-FK.18 **Concealed Position** (team-local weapon rule, Kroot hunting rifle (concealed)): the profile can only be used during the first Shoot action the Long-Sight performs in the battle.
  - MECH: battle ledger "has shot" set when the Long-Sight's first Shoot action ends (any profile, any frame); provider `weaponForbidden` bars the concealed profile once set | CLASS: generic:weaponForbidden
  - RULING: Farstalker Kinband Concealed Position | the first Shoot action of any kind (with any weapon, free, counteracting or as a Guard interrupt) uses up the profile; Guard itself is not a Shoot action | "the first time it performs the Shoot action" counts actions, not the profile used | Unsourced
- T-FK.19 **LONG-SIGHT** (Long-Sight, 1 AP): until the start of the Long-Sight's next activation, the concealed and stationary hunting-rifle profiles have Lethal 5+, and whenever it shoots with any hunting-rifle profile the target cannot be obscured. Not while in an enemy's control range.
  - MECH: unique action setting an operative effect removed in its `activation.start` hook; `modifyWeaponRules` adds Lethal 5+ to the two profiles; `target.status` sets `obscured: false` for its hunting-rifle shots | CLASS: team-hook
  - RULING: Farstalker Kinband Long-Sight duration | the effect survives counteractions and enemy activations (it ends only when the Long-Sight is next activated, possibly next TP) | a counteraction is not an activation (R-3.12) | Confirmed
- T-FK.20 **Salvo** (team-local weapon rule, dual Kroot pistols (salvo)): pick up to two different valid targets, neither in a friendly operative's control range, and shoot each in its own sequence, in the order you choose.
  - MECH: provider `extraTargets` for `fk.w.dual-kroot-pistols-salvo` returning `{ candidates: other valid targets within 8" not in a friendly CR, max: 1 }` | CLASS: generic:extraTargets
  - RULING: Farstalker Kinband Salvo targets | the second target is optional and is a primary target in its own right (its own cover and obscured, its own valid-target test, never a Blast secondary) | each is "a valid target" selected as normal | Unsourced
- T-FK.21 **Quick Draw** (Pistolier): once per TP, when an enemy operative performing the Shoot action picks the ready Pistolier as its target (or will hit it as a Blast secondary), you may interrupt: the Pistolier performs a free Shoot with its dual Kroot pistols (focused) against that enemy (switching to Engage if needed), which must be a valid target for it.
  - MECH: brief fallback (16.9): 0 CP offer to the FK seat in `firefight.opponentActionDeclared` when the enemy declares Shoot, the Pistolier is ready, is a valid target for at least one of that enemy's ranged weapons, and the enemy is a valid target for the focused pistols; `startFreeAction({ action: 'shoot', weaponNameContains: 'focused' })` with `beforeShootTargetSelect` keeping only that enemy; order flip when Conceal; once-per-TP ledger, Quick Draw token | CLASS: team-hook
  - RULING: Farstalker Kinband Quick Draw timing | offered when the enemy declares Shoot (before its target is picked), because the engine cannot run a nested attack at target selection; the enemy then picks its target freely; if the shooter is incapacitated, its Shoot ends with no attack and its AP stays spent; the Pistolier stays ready | the brief's fallback for the unbuilt target-selection interrupt | Unsourced
- T-FK.22 **Stalker** (Stalker): it may perform the Charge action while it has a Conceal order.
  - MECH: provider `chargeUnderConceal` | CLASS: team-hook
- T-FK.23 **STEALTH ATTACK** (Stalker, 2 AP): the Stalker performs a free Charge that may not move further than its Move stat (no extra 2"), then at once a free Fight. The first time it strikes in that Fight, it may immediately resolve another of its successes as a strike, before the enemy resolves. Not while it has an Engage order, not while in an enemy's control range, and only while within 1" of Light or Heavy terrain.
  - MECH: unique action; availability needs a legal Charge path within Move; `startFreeAction({ action: 'charge', maxMove: Move })` then, on resume, `startFreeAction({ action: 'fight' })`; provider `afterFightResolution` returns `[{ seat: Stalker's seat, strikeOnly: true }]` after its first strike in that Fight (per-action ledger) | CLASS: team-hook (generic `strikeOnly`, built)
  - RULING: Farstalker Kinband Stealth Attack | offered only when a legal Charge within the Move stat exists (injury included); the Charge and Fight count as performed (no later Reposition, Dash, Fall Back, Charge or Fight that activation); the extra resolution is always taken and is a strike (owed queue entry with `strikeOnly`) | R-3.8 would cancel an impossible Charge; R-3.9 free actions count | Unsourced
- T-FK.24 **MARKED FOR THE HUNT** (Tracker, 1 AP): remove your Pech'ra marker if it is in the killzone, then place it at a point visible to the Tracker, or on the Vantage terrain of a terrain feature visible to the Tracker (no distance limit). Whenever a friendly FARSTALKER KINBAND operative shoots an enemy operative that has the marker in its control range, the shooter's ranged weapons have Seek Light. The marker is removed at the start of the Tracker's next activation or when the Tracker leaves the killzone, whichever comes first. Not while in an enemy's control range.
  - MECH: unique action placing a team marker (smoke placement validator without the 6" limit); `modifyWeaponRules` adds `core.wr.seek-light` when the target has the marker visible to and within 1" of it; `beforeShootTargetSelect` adds the Conceal-in-Light-cover candidate Seek Light makes valid (Spot pattern, T-HK.22); removal in the Tracker's `activation.start` hook and on its removal | CLASS: team-hook
  - RULING: Farstalker Kinband Pech'ra marker | one marker at a time; no range limit; the marker survives the Tracker's counteractions; "in its control range" means visible to and within 1" of that enemy (R-8.2) | the action names no range; a counteraction is not an activation | Unsourced
- T-FK.25 **FROM THE EYE ABOVE** (Tracker, 1 AP, SUPPORT): pick another friendly FARSTALKER KINBAND operative visible to and within 6" of the Tracker; it gets APL +1 until the end of its next activation (R-9.6 cap). Not while in an enemy's control range. A Comms Device the Tracker controls makes it 9" (M-5.1).
  - MECH: unique action, support APL boost to a filtered friendly target (as T-PF.10) | CLASS: data
- T-FK.26 **Ready for Anything** (Warrior): once per TP for the whole team, during a friendly WARRIOR's activation, you may use the Meat, Piercing Shot or Toxin Shot rule for that Warrior; this use does not count against that rule's own once-per-TP limit. The chosen rule's own conditions still apply.
  - MECH: extra 0 CP offers alongside T-FK.37 to T-FK.39 for a WARRIOR in its own activation, with a separate once-per-TP team ledger; Ready for Anything token | CLASS: team-hook
  - RULING: Farstalker Kinband Ready for Anything | usable whether or not that equipment was selected; not during counteractions (not an activation); Piercing Shot and Toxin Shot still cannot both apply in one action; a Warrior may take Meat from the equipment and from this rule in the same activation | the rule names the rules, not the selection; each use has its own limit | Unsourced

### 16.5 Faction rules

- T-FK.27 **FARSTALKER (Ready step)**: in the Ready step of each Strategy phase you may change the order of up to three friendly FARSTALKER KINBAND operatives that are not in an enemy's control range.
  - MECH: brief fallback for Ready-step decisions: a 0 CP offer (not a STRATEGIC GAMBIT) at the FK seat's first turn in the gambit step, once per Strategy phase: up to three picks, each flips one eligible operative's order (`ability.choice` loop with Done); an order change ends Guard (R-4.9) | CLASS: team-hook
  - RULING: Farstalker Kinband Ready-step order changes | offered at the FK player's first gambit-step turn and lost if that turn is spent on anything else; it takes that turn but costs nothing, and the step goes on until both players pass | lifecycle hooks cannot raise decisions, and the first gambit-step turn is the nearest decision point after the Ready step | Unsourced
- T-FK.28 **FARSTALKER (counteract)**: whenever it is your turn to counteract, you may instead change the order of one friendly FARSTALKER KINBAND operative that is not in an enemy's control range. That counts as your counteraction for the turn (play passes to the opponent) but not as that operative's counteraction for the TP.
  - MECH: provider `counteractAlternatives` (one `ReactionOffer` per eligible operative, option `alt:<n>`); its choice flips the order and calls `firefight.counteractAlternativeDone` | CLASS: generic:counteractAlternatives
  - RULING: Farstalker Kinband counteract alternative | any eligible operative, whatever its order or whether it already counteracted; usable on every turn to counteract, even when no operative could counteract; flipping a guarding operative ends its Guard | "whenever it's your turn to counteract" is R-3.11's precondition, not the existence of a legal counteractor | Unsourced

### 16.6 Ploys

The source prints no costs: every ploy is 1 CP (R-2.4). Strategy ploys last until the end of the TP (R-2.5).

- T-FK.29 **CUT-THROATS** | Strategy | 1 CP | Gambit step | Friendly FARSTALKER KINBAND operatives' melee weapons get +1 Atk, to at most 5 (Blade 4, every 4-Atk melee weapon 5).
  - MECH: `modifyAttackDice` atk +1 capped at 5 for melee weapons of friendly FK operatives (fighting or retaliating) | CLASS: team-hook
- T-FK.30 **ROGUE** | Strategy | 1 CP | Gambit step | Whenever any operative shoots a friendly FARSTALKER KINBAND operative: the shooter's weapon loses Saturate; and if the defender can retain cover saves, it may retain one more, or retain one as a crit. That improvement does not add to Vantage's improved cover save (one improvement only).
  - MECH: `modifyWeaponRules` removes `core.wr.saturate` when the target is a friendly FK operative; provider `stealthyCover` returns 1 for friendly FK operatives (the shared `improvedCover` flag is one improvement whatever its source) | CLASS: team-hook
  - RULING: Farstalker Kinband Rogue scope | applies to Blast and Torrent secondaries and to friendly fire on FK operatives (Blast 1" voltaic arrow) as well; the target must still be in cover to retain anything | the trigger is "an operative is shooting a friendly FK operative" | Confirmed
- T-FK.31 **PREY** | Strategy | 1 CP | Gambit step | Whenever a friendly FARSTALKER KINBAND operative shoots during an activation in which it has not performed Charge, Fall Back or Reposition, its ranged weapons have Balanced and Severe; a weapon that already has Balanced gets Ceaseless and Severe instead. Those actions stay allowed after it shoots.
  - MECH: `modifyWeaponRules` adds Balanced + Severe, or Ceaseless + Severe when Balanced is already present (after other rules, T-FK.7, T-FK.8); reads `act.performed` of the current frame | CLASS: team-hook
  - RULING: Farstalker Kinband Prey activation | the check is the operative's current activation or counteraction; free Charges and Repositions count (Stealth Attack, Gather's Reposition); a shot outside its own activation (Guard interrupt, Quick Draw) qualifies because it has performed none of those in that activation | "during an activation in which it hasn't performed" reads the frame it shoots in | Unsourced
- T-FK.32 **BOUND** | Strategy | 1 CP | Gambit step | During each friendly FARSTALKER KINBAND operative's activation, the first 2" of vertical distance of one climb up it makes is ignored.
  - MECH: provider `moveSurcharge` returns `-min(2, climb cost of the first climb)` for the first move in the activation with a climb; `action.ended` marks the use (Climbing Rigs pattern, T-HK.38) | CLASS: team-hook
  - RULING: Farstalker Kinband Bound | once per activation, the first climb that happens; a climb counted as the 2" minimum (R-12.2) costs nothing; never during counteractions (not an activation); Dash cannot climb, so it never benefits | "during each activation ... one climb up" | Unsourced
- T-FK.33 **SAVAGE AMBUSH** | Firefight | 1 CP | An enemy operative performing Fight picks a ready friendly FARSTALKER KINBAND operative that has Light or Heavy terrain in its control range | In that sequence's Resolve Attack Dice step the defender (you) resolves first.
  - MECH: firefight ploy for the defender in the `fight.weaponsSelected` window; provider `fightResolveStart` returns `first` = the FK seat for that sequence | CLASS: team-hook
  - RULING: Farstalker Kinband Savage Ambush timing | offered once the target is picked (`fight.weaponsSelected`), checking readiness and terrain in control range then; against another resolve-first rule the active operative's player decides (R-9.4) | the earliest defender window after "selected to fight against" | Unsourced
- T-FK.34 **SLIP AWAY** | Firefight | 1 CP | During a friendly FARSTALKER KINBAND operative's activation, before or after an action | For the rest of that activation, Fall Back costs it 1 less AP (so 1 AP).
  - MECH: firefight ploy in `firefight.activationStart` / `firefight.actionEnded`; provider `actionCostDelta` -1 on `fallBack` for that operative until `activation.end` | CLASS: team-hook
- T-FK.35 **POACH** | Firefight | 1 CP | During a friendly FARSTALKER KINBAND operative's activation | Until that activation ends, Pick Up Marker and mission actions that need it to control a marker need it only to contest that marker.
  - MECH: firefight ploy in `firefight.activationStart` / `firefight.actionEnded`; provider `markerActionRelief` returns `{ contestSuffices: true }` for `marker:pickUp` and MISSION `ability:<id>` | CLASS: generic:markerActionRelief
  - RULING: Farstalker Kinband Poach in v1 | it covers SECURE, LOOT, INITIATE TRANSMISSION and AMMO RESUPPLY (each needs control, M-3.1, M-3.3, M-3.5, M-5.3); Pick Up Marker has no v1 target | those are the v1 actions that require control | Confirmed
- T-FK.36 **VENGEANCE FOR THE KINBAND** | Firefight | 1 CP | A friendly FARSTALKER KINBAND operative is incapacitated by an enemy operative | For the rest of the battle, whenever another friendly FK operative shoots, fights or retaliates against that enemy, its weapons have Relentless. The ploy cannot be used again in the battle until that enemy has been incapacitated.
  - MECH: firefight ploy in the `operative.incapacitated` window (the FK victim's seat, before removal), offered when `removal.killers[victim]` is an enemy operative; token `fk.vengeance` on that enemy (`expires: ['battle']`); `modifyWeaponRules` adds `core.wr.relentless` per `targetId` for other FK operatives; a ploy rule bars the ploy while the marked enemy is in the killzone | CLASS: team-hook
  - RULING: Farstalker Kinband Vengeance trigger | offered only for incapacitations the engine attributes to an enemy operative's attack (the window exists only there); a kill by an enemy unique action's direct damage gets no offer; the victim itself never gains Relentless ("another") | the incapacitation window opens only for attack removals; "another friendly operative" | Unsourced

### 16.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-FK.37 **PIERCING SHOT** | Once per TP, when a friendly FARSTALKER KINBAND operative performing the Shoot action selects a Kroot rifle, Kroot scattergun or the dual Kroot pistols (focused), that weapon has Piercing 1 until the action ends. Not in the same action as Toxin Shot.
  - MECH: equipment use (0 CP offer) in the `shoot.targetSelected` window, once-per-TP ledger, per-action flag shared with Toxin Shot; `modifyWeaponRules` adds `core.wr.piercing` 1; weapon name test (R-9.8) | CLASS: team-hook
  - RULING: Farstalker Kinband Piercing and Toxin Shot window | offered at `shoot.targetSelected` (the weapon is chosen; nothing has been rolled); a Torrent or Blast action keeps the rule for every sequence | the earliest window after the weapon is selected (Tainted Rounds pattern) | Unsourced
- T-FK.38 **TOXIN SHOT** | As Piercing Shot, but the weapon has Lethal 5+ and Stun until the action ends. Not in the same action as Piercing Shot.
  - MECH: as T-FK.37 with `core.wr.lethal` 5+ and `core.wr.stun` | CLASS: team-hook
- T-FK.39 **MEAT** | Once per TP, when a friendly FARSTALKER KINBAND operative other than a HOUND is activated and is not in an enemy's control range, it regains up to D3+1 lost wounds.
  - MECH: 0 CP offer in `firefight.activationStart` (Kauyon pattern), once-per-TP ledger; `effects.regainWounds('D3+1')` | CLASS: team-hook
- T-FK.40 **TROPHY** | Once per battle, during a friendly FARSTALKER KINBAND operative's activation (not a HOUND), before or after an action, if it is not in an enemy's control range: its APL is +1 until the end of that activation (R-9.6 cap).
  - MECH: 0 CP offer in `firefight.activationStart` / `firefight.actionEnded`, once-per-battle ledger; `applyAplEffect` +1 to activation end | CLASS: team-hook

Marker/token guide (UI): Quick Draw, Call the Kill (mark), Victory Shriek, Ready for Anything, Vengeance for the Kinband, Pech'ra marker, Piercing Shot, Meat, Toxin Shot, Trophy.

### 16.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-FK: TEAM-FK-000 to TEAM-FK-033.

### 16.9 Generic capabilities (survey; resolved in the Engine map below)

- **counteractAlternatives** (built, batch C): the FARSTALKER order change instead of counteracting. Used by T-FK.28.
- **extraTargets** (built): Salvo's second target. Used by T-FK.20.
- **weaponForbidden** (built): Concealed Position; the Hound's off-card weapons. Used by T-FK.14, T-FK.18.
- **fightTargets** (built): Bad-tempered's forced target; Savage Assault's same-enemy free Fight. Used by T-FK.13, T-FK.15.
- **markerActionRelief** (built): Poach's `contestSuffices`. Used by T-FK.35.
- Brief fallbacks used (not built, named in the brief): Quick Draw (the target-selection interrupt: 0 CP offer at `firefight.opponentActionDeclared`, T-FK.21); Ready-step decisions (0 CP offer in the gambit step, T-FK.27); a move with a marker action in the middle (Gather split, T-FK.17).
- **strikeOnly** (built in the batch C prep after this survey): an owed resolution from `fightResolveStart` / `afterFightResolution` with `strikeOnly: true` offers strikes only (mirror of `blockOnly`). Used by T-FK.23 (Stealth Attack).
- **anyKillWindow** (GAP, NICE): a window for the opposing seat whenever one of its marked enemies is incapacitated by any cause. `operative.killed` opens only for a living killer of the other seat after an attack, so the mark's Hot, a mine, direct damage (Vicious Duellist) or a killer that fell too open nothing. Fallback: Call the Kill re-pick and Victory Shriek wait as a pending 0 CP offer at the FK seat's next `firefight.activationStart`, `firefight.actionEnded` or `operative.killed` window in the TP (T-FK.7 RULING). Vengeance (T-FK.36) only fires on attack incapacitations (RULING).
- **fightRetained** (GAP, NICE): a fight hook with `engine` after both sides are retained (Punishing and Rending done) and before the first resolution. Vicious Duellist (T-FK.12) counts the enemy's discarded fails. Fallback: `afterAttackRoll` on the enemy's side (after re-rolls, before retention), predicting Punishing's fail-to-normal conversion.
- Everything else maps onto existing providers, hooks, windows and 0 CP offers (Engine map).

### 16.10 Gotchas

- Roster is 12 operatives (1 + 11): up to two Hounds, any number of Warriors, everything else once; a legal roster always has at least one Warrior. Twelve operatives use the 12-operative kill grade row.
- Two Kroot rifles: 3+ (Kill-Broker, Cold-Blood) and 4+ (Tracker, Warrior); both are "Kroot rifle" for Piercing Shot and Toxin Shot. The Kroot hunting rifle is not.
- The Farstalker faction rule has two halves: a Ready-step order change for up to three operatives (offered in the gambit step), and an order change instead of counteracting that passes the turn without spending that operative's counteract.
- Call the Kill is a gambit only while the Kill-Broker is in the killzone; the mark is public, lasts the TP, and a fallen mark is replaced after the action (FAQ). Victory Shriek needs the Kill-Broker in the killzone and each operative only once per battle. Balanced never stacks; Prey turns an already-Balanced ranged weapon into Ceaseless + Severe.
- The Hound is a Beast: no Shoot, no mission or equipment actions, no grenades; it can Guard and GATHER. Bad-tempered has two halves: forcing an enemy Fight onto the Hound (declaration offer) and a free Charge reaction when an enemy charges a friend within 3" of it.
- Cut-Skin: Vicious Duellist is direct damage per enemy fail and can end the fight before any strike; Savage Assault is a second free Fight against the same enemy only, in its own activation only.
- Stalker charges under Conceal; STEALTH ATTACK needs a Conceal order, 1" from Light or Heavy terrain, no enemy in control range; Move only (no +2"); the first strike is followed at once by another strike.
- Long-Sight: the concealed profile is only for its first Shoot of the battle; both Heavy profiles forbid moving in that activation; LONG-SIGHT lasts until its next activation (through counteractions) and denies obscured to any hunting-rifle profile.
- Pistolier: Salvo shoots two different primary targets as separate sequences; Quick Draw is once per TP, needs the Pistolier ready, and in our build is offered when the enemy declares Shoot.
- Tracker's Pech'ra has no range limit and gives Seek Light against enemies within 1" of it (visible); it goes when the Tracker next activates.
- Rogue strips Saturate and gives one cover improvement that does not stack with Vantage; Cut-Throats caps melee Atk at 5; Bound saves 2" on one climb per activation; Slip Away makes Fall Back 1 AP (so a legal counteraction).
- Meat and Trophy exclude the Hound; Ready for Anything (Warriors only) is a separate once-per-TP use of Meat, Piercing Shot or Toxin Shot.
- Edition leaks to reject: nothing from the 2021 book (shape distances, Overwatch, older datacards, ploys or tac ops), no 40k 10th Kroot rules (datasheet abilities, scout moves, wound rolls, invulnerable saves); inches only, three defence dice, every printed number from the June '26 cards.

### 16.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (leader 1, main 11, Hound and Warrior repeatable, Hound max 2) | team.json slots, `repeatable: ["fk.hound", "fk.warrior"]`, `selection.caps` Hound max 2 |
| Loadouts | datacard `weapons.options` `sets` (Kill-Broker, Heavy Gunner, Warrior); profile groups `fk.wg.accelerator-bow`, `fk.wg.kroot-hunting-rifle`, `fk.wg.dual-kroot-pistols` |
| Farstalker Ready step (T-FK.27) | 0 CP offer at the FK seat's first gambit-step turn (`registerPloyRule` `extraOffers`), `ability.choice` loop flipping orders |
| Farstalker counteract (T-FK.28) | provider `counteractAlternatives` + `firefight.counteractAlternativeDone` |
| Call the Kill, Victory Shriek | 0 CP gambit ability with an enemy pick; tokens `fk.callTheKill` (`turningPointEnd`), `fk.victoryShriek` (`battle`); `modifyWeaponRules` Balanced; re-pick and Shriek offers in `operative.killed` with the pending fallback |
| Energise, Long-Sight, Cold-blooded, Pech'ra Seek Light, Prey, Rogue (Saturate), Vengeance, Piercing / Toxin Shot | `modifyWeaponRules` (with `targetId`); Long-Sight `target.status` (no obscured); Pech'ra `beforeShootTargetSelect` (Spot pattern) |
| Hardy | `onDamageInflicted` (`crit`, `strike-crit`) |
| Vicious Duellist | `afterAttackRoll` on the enemy fighter's side + `effects.directDamage` |
| Savage Assault | 0 CP offer in `firefight.actionEnded`; `startFreeAction({ action: 'fight' })`; provider `fightTargets` |
| Beast | providers `actionForbidden`, `equipmentEligible`, `weaponForbidden` |
| Bad-tempered | 0 CP offer in `firefight.opponentActionDeclared` + provider `fightTargets`; provider `reactions` (enemy Charge ended) + `startFreeAction({ action: 'charge', endWithinCrOf })` with order flip |
| GATHER | free move, free Pick Up / Place Marker, free move with the remainder (`movedThisActivation`) |
| Concealed Position | provider `weaponForbidden` + battle ledger |
| Salvo | provider `extraTargets` (`max: 1`) |
| Quick Draw | 0 CP offer in `firefight.opponentActionDeclared`; `startFreeAction({ action: 'shoot', weaponNameContains: 'focused' })`; `beforeShootTargetSelect` |
| Stalker | provider `chargeUnderConceal` |
| STEALTH ATTACK | unique action; `startFreeAction` Charge (`maxMove` = Move) then Fight; provider `afterFightResolution` owed strike |
| MARKED FOR THE HUNT | team marker (smoke placement validator, no 6" limit); removal in `activation.start` and on removal |
| FROM THE EYE ABOVE | data support APL boost (as T-PF.10) |
| Ready for Anything, Meat, Trophy | 0 CP offers at `firefight.activationStart` / `firefight.actionEnded` / `shoot.targetSelected` with ledgers; `effects.regainWounds`; `applyAplEffect` |
| Cut-Throats | `modifyAttackDice` atk +1, cap 5 |
| Rogue | `modifyWeaponRules` (remove Saturate), provider `stealthyCover` |
| Bound | provider `moveSurcharge` (negative) + `action.ended` ledger |
| Savage Ambush | ploy at `fight.weaponsSelected`; provider `fightResolveStart` (`first`) |
| Slip Away | provider `actionCostDelta` (`fallBack` -1) |
| Poach | provider `markerActionRelief` (`contestSuffices`) |
| Vengeance for the Kinband | ploy in `operative.incapacitated` (`removal.killers`); token `fk.vengeance`; ploy rule lock |

### 16.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/farstalker-kinband/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `fk.<name>`, `fk.w.`, `fk.wg.`, `fk.a.`, `fk.p.`, `fk.e.`; team weapon rules `fk.a.wr-concealed-position`, `fk.a.wr-salvo`)
  - `src/engine/teams/farstalker-kinband.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/farstalker-kinband.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins `fk-kill-broker-kroot-rifle`, `fk-kill-broker-pulse-weapon`, `fk-bow-hunter`, `fk-cold-blood`, `fk-cut-skin`, `fk-heavy-gunner-dvorgite-skinner`, `fk-heavy-gunner-londaxi-tribalest`, `fk-hound`, `fk-hound-b`, `fk-long-sight`, `fk-pistolier`, `fk-stalker`, `fk-tracker`, `fk-warrior-kroot-rifle`, `fk-warrior-kroot-scattergun` (pose variants `-b`, `-c` for repeated Warriors); Pech'ra marker and mark token)
  - `tests/engine/teams/farstalker-kinband.test.ts` (TEAM-FK-nnn tests) and `tests/engine/teams/farstalker-kinband.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 16 and `12-rules-test-checklist.md` section TEAM-FK (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/farstalker-kinband/team.json`. Flip it (with `defaults` filled, a default roster with at least one Warrior, and every weapon in `src/client/teams/farstalker-kinband.ts`) only when the team is complete and all gates pass.
- Scaffold: the Kill-Broker record and its weapons (`fk.w.kroot-rifle-elite` at 3+, `fk.w.pulse-weapon`, `fk.w.ritual-blade`) are in the scaffold; the 4+ Kroot rifle is a separate record for the Tracker and Warrior. Add `fk.a.wr-concealed-position` and `fk.a.wr-salvo` when the team file resolves them.
- Capabilities to use: the Engine map above. Batch C generics: `counteractAlternatives`, `extraTargets`, `weaponForbidden`, `fightTargets`, `markerActionRelief`; batch A/B: `reactions`, `afterFightResolution`, `fightResolveStart`, `stealthyCover`, `moveSurcharge`, `actionForbidden`, `equipmentEligible`, `chargeUnderConceal`, `actionCostDelta`, tokens, `startFreeAction`, gambit abilities, 0 CP offers. Do first: TEAM-FK-001 to TEAM-FK-004 (roster, loadouts, both Farstalker halves), then Call the Kill and Victory Shriek (TEAM-FK-005 to TEAM-FK-007), then the Hound (TEAM-FK-013 to TEAM-FK-016).
- Gaps with fallbacks (16.9): `anyKillWindow` (pending re-pick offer), `fightRetained` (Vicious Duellist from `afterAttackRoll`); brief fallbacks for Quick Draw, Ready-step order changes and Gather.
- RULING lines expected: Kroot rifle profiles, hunting rifle and ammunition, Bad-tempered order change (Corrected), Call the Kill new mark timing (Confirmed) and pending re-pick, Victory Shriek details, Balanced from several sources, Energise expiry, Hardy use, Vicious Duellist timing, Savage Assault scope, Beast scope, Bad-tempered choice and free Charge, Gather in v1, Concealed Position, Long-Sight duration, Salvo targets, Quick Draw timing, Stealth Attack, Pech'ra marker, Ready for Anything, Ready-step order changes, counteract alternative, Rogue scope, Prey activation, Bound, Savage Ambush timing, Poach in v1, Vengeance trigger, Piercing and Toxin Shot window.
- Gotchas: section 16.10. Twelve operatives; two Kroot rifle records; the Hound is a Beast; Call the Kill re-picks happen after the action; Quick Draw is offered at the enemy's Shoot declaration; Vicious Duellist damage is direct and can end a fight before any strike.

## 17. Imperial Navy Breachers

Rule IDs `T-NB.<n>`, checklist IDs `TEAM-NB-<nnn>`. Sources: the Imperial Navy Breachers team PDF (Kill Team 2024, Faction version 3, August '26 update log state; the flow and layout extracts were read together) as the primary source, cross-checked against the Wahapedia page (faction version 3, August 2026; its FAQ panel is empty for this team) and the core rules page for terms. The two agree on every stat line and weapon profile; Wahapedia lags the August '26 errata in three places (listed in 17.10), and the PDF errata wins there. Facts read from the PDF are Confirmed; our own calls are Unsourced. All rule text is restated in our own words; team, operative, weapon, ploy and equipment names are used as printed. Core terms per `10-rules-core.md` (R-x.y), missions and universal equipment per `11-missions.md` (M-x.y). Ploys and equipment are one bullet per record so each can carry its MECH line.

We play only the open Volkus killzone. Every clause that needs hatchways, Wall terrain or close quarters (Operate Hatch, Weld Shut, System Override Device, the hatch half of Deck Hand) has a RULING "no effect in the open killzone"; Accessible terrain does exist in the open killzone (building doorways, Breach markers), so the Accessible clauses still work.

Weapon type column: R = ranged, M = melee. Dmg is `normal/crit`. Base is in mm.

### 17.1 Team selection

- T-NB.1 Roster: 1 IMPERIAL NAVY BREACHER SERGEANT-AT-ARMS (leader) plus 10 selections from the main list (T-NB.2). A full roster is 11 operatives, or 12 when both half selections (T-NB.3) are taken.
  - MECH: roster validator: leader slot count 1, main slot count 10 | CLASS: data
- T-NB.2 Main list: ARMSMAN, AXEJACK, C.A.T. UNIT, ENDURANT, GHEISTSKULL, GRENADIER, GUNNER (three printed entries: with Navis las-volley, with meltagun, with plasma gun; each with a gun butt), HATCHCUTTER, SURVEYOR, VOID-JAMMER. ARMSMAN may be taken any number of times. After the August '26 errata GUNNER is also exempt from the "each entry once" limit, but at most two GUNNER operatives may be taken in total, and two Gunners may carry the same weapon. Every other entry at most once. A GHEISTSKULL needs a VOID-JAMMER on the roster; a C.A.T. UNIT needs a SURVEYOR.
  - MECH: three Gunner datacards (`nb.gunner-las-volley`, `nb.gunner-meltagun`, `nb.gunner-plasma-gun`), each in `repeatable` with `nb.armsman`; slot `caps: [{ from: <three gunner ids>, max: 2 }]`; `selection.requires: [{ id: "nb.gheistskull", needs: "nb.void-jammer" }, { id: "nb.cat-unit", needs: "nb.surveyor" }]` | CLASS: data
  - RULING: Imperial Navy Breachers Gunner selection | up to two GUNNER operatives with any weapons, duplicates allowed (three repeatable Gunner cards under a cap of 2) | the August '26 errata changes the exemption to "other than ARMSMAN and GUNNER operatives"; the PDF selection page and Wahapedia still print the older text | Corrected
- T-NB.3 **Half selections**: C.A.T. UNIT and GHEISTSKULL each count as half a selection; taking both uses one selection in total.
  - MECH: slot `halfSelections: ["nb.cat-unit", "nb.gheistskull"]` (the roster cost rounds the halves up) | CLASS: data
  - RULING: Imperial Navy Breachers lone half selection | a C.A.T. Unit or Gheistskull taken without the other still uses one whole selection | the selection count must be met in whole selections and a single half cannot be paired with anything else | Unsourced
- T-NB.4 Loadouts:
  - SERGEANT-AT-ARMS: either Navis shotgun (both profiles) and Navis hatchet, or one of bolt pistol / heirloom autopistol plus one of chainsword / power weapon: 5 loadouts.
  - GUNNER: its card's weapon (both profiles for the las-volley and the plasma gun) and a gun butt.
  - ARMSMAN, AXEJACK, ENDURANT, GRENADIER, HATCHCUTTER, SURVEYOR, VOID-JAMMER: every weapon on the card (fixed). C.A.T. UNIT and GHEISTSKULL have no weapons.
  - MECH: datacard `weapons.options` (`sets` for the Sergeant: one set `[nb.wg.navis-shotgun, nb.w.navis-hatchet]`, four pistol x melee sets); profile groups `nb.wg.navis-shotgun`, `nb.wg.navis-heavy-shotgun`, `nb.wg.navis-las-volley`, `nb.wg.plasma-gun` | CLASS: data
- T-NB.5 Archetypes: SECURITY, SEEK & DESTROY (tac ops out of scope for v1).
  - MECH: team.json `archetypes: ["security", "seek-destroy"]` | CLASS: data
- T-NB.6 Keywords: every operative carries IMPERIAL NAVY BREACHER and IMPERIUM plus its role keyword (the leader also LEADER). The role keyword C.A.T. UNIT is stored as `CAT UNIT` (display name keeps the dots). Team-local weapon rules: **Shield** (T-NB.20) and **Detonate** (T-NB.28); every other weapon rule on the cards is core (R-10).
  - MECH: keyword lists in operatives.json; weapon records carry `nb.a.wr-shield` / `nb.a.wr-detonate` resolved by the team file | CLASS: data
  - RULING: Imperial Navy Breachers keyword spelling | the role keyword C.A.T. UNIT is stored as CAT UNIT | the data schema's Keyword pattern has no dots, and no rule compares this keyword with another team's | Unsourced

### 17.2 Operative stats

| Operative | APL | Move | Save | Wounds | Base | Keywords |
|---|---|---|---|---|---|---|
| NAVIS SERGEANT-AT-ARMS | 2 | 6" | 4+ | 9 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, LEADER, SERGEANT-AT-ARMS |
| NAVIS ARMSMAN | 2 | 6" | 4+ | 8 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, ARMSMAN |
| NAVIS AXEJACK | 2 | 6" | 4+ | 8 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, AXEJACK |
| NAVIS C.A.T. UNIT | 2 | 8" | 5+ | 5 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, CAT UNIT |
| NAVIS ENDURANT | 2 | 4" | 2+ | 11 | 28 | IMPERIAL NAVY BREACHER, IMPERIUM, ENDURANT |
| NAVIS GHEISTSKULL | 2 | 8" | 5+ | 5 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, GHEISTSKULL |
| NAVIS GRENADIER | 2 | 6" | 4+ | 8 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, GRENADIER |
| NAVIS GUNNER (each weapon card) | 2 | 6" | 4+ | 9 | 28 | IMPERIAL NAVY BREACHER, IMPERIUM, GUNNER |
| NAVIS HATCHCUTTER | 2 | 6" | 4+ | 8 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, HATCHCUTTER |
| NAVIS SURVEYOR | 2 | 6" | 4+ | 8 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, SURVEYOR |
| NAVIS VOID-JAMMER | 2 | 6" | 4+ | 8 | 25 | IMPERIAL NAVY BREACHER, IMPERIUM, VOID-JAMMER |

Notes: wounds follow the update log (Sergeant and Gunner 9, Endurant 11, Armsman, Axejack, Grenadier, Hatchcutter, Surveyor and Void-Jammer 8); both sources already print the errata values. The PDF prints "IMPERIAL NAVY BREACHER ," with a stray space; the keyword is IMPERIAL NAVY BREACHER. Bases agree between the PDF and Wahapedia for all eleven cards.

### 17.3 Weapon profiles

| Weapon | Type | Atk | Hit | Dmg | Rules | Held by |
|---|---|---|---|---|---|---|
| Bolt pistol | R | 4 | 4+ | 3/4 | Range 8" | Sergeant-at-Arms (option) |
| Heirloom autopistol | R | 4 | 3+ | 2/4 | Range 8", Lethal 5+ | Sergeant-at-Arms (option) |
| Navis shotgun (close range) | R | 4 | 3+ | 3/3 | Range 6" | Sergeant-at-Arms (option), Armsman, Grenadier, Surveyor, Void-Jammer |
| Navis shotgun (long range) | R | 4 | 5+ | 1/2 | none | Sergeant-at-Arms (option), Armsman, Grenadier, Surveyor, Void-Jammer |
| Chainsword | M | 4 | 3+ | 4/5 | none | Sergeant-at-Arms (option) |
| Navis hatchet | M | 3 | 4+ | 3/4 | none | Sergeant-at-Arms (option), Armsman, Grenadier, Surveyor, Void-Jammer |
| Power weapon | M | 4 | 3+ | 4/6 | Lethal 5+ | Sergeant-at-Arms (option), Axejack |
| Autopistol | R | 4 | 4+ | 2/3 | Range 8" | Axejack, Hatchcutter |
| Navis heavy shotgun (close range) | R | 4 | 3+ | 3/3 | Range 6", Relentless | Endurant |
| Navis heavy shotgun (long range) | R | 4 | 5+ | 1/2 | Relentless | Endurant |
| Shield bash | M | 3 | 4+ | 1/2 | Brutal, Shield | Endurant |
| Demolition charge | R | 4 | 3+ | 4/6 | Range 3", Blast 2", Heavy (Reposition only), Limited 1, Piercing 1, Saturate | Grenadier |
| Meltagun | R | 4 | 4+ | 6/3 | Range 6", Devastating 4, Piercing 2 | Gunner (meltagun card) |
| Navis las-volley (focused) | R | 5 | 4+ | 4/5 | Heavy (Dash only), Rending | Gunner (las-volley card) |
| Navis las-volley (sweeping) | R | 4 | 4+ | 4/5 | Heavy (Dash only), Rending, Torrent 1" | Gunner (las-volley card) |
| Plasma gun (standard) | R | 4 | 4+ | 4/6 | Piercing 1 | Gunner (plasma gun card) |
| Plasma gun (supercharge) | R | 4 | 4+ | 5/6 | Hot, Lethal 5+, Piercing 1 | Gunner (plasma gun card) |
| Gun butt | M | 3 | 4+ | 2/3 | none | every Gunner card |
| Chainfist | M | 4 | 4+ | 5/6 | Brutal, Rending | Hatchcutter |
| Gheistskull detonator | R | 4 | 3+ | 3/4 | Blast 1", Lethal 4+, Limited 1, Silent, Stun, Detonate | Void-Jammer |

Notes: 20 profiles over 15 weapons. The Sergeant's shotgun, hatchet and power weapon are the same profiles as everyone else's (shared ids). Profile groups: `nb.wg.navis-shotgun` (close range, long range), `nb.wg.navis-heavy-shotgun` (close range, long range), `nb.wg.navis-las-volley` (focused, sweeping), `nb.wg.plasma-gun` (standard, supercharge). The Grenadier may also use frag, krak and stun grenades (T-NB.23). Shield and Detonate are team-local weapon rules (T-NB.20, T-NB.28).

UNCLEAR (resolved): the PDF layout extract lists the Sergeant's, Endurant's, Grenadier's, Gunner's and Void-Jammer's weapon names and stat rows in separate blocks, out of row order. The flow extract keeps the order and matches Wahapedia row for row; the table above follows both.
UNCLEAR (resolved): the Sergeant's bolt pistol prints Hit 4+ while its heirloom autopistol prints 3+. RULING: Imperial Navy Breachers Sergeant bolt pistol | Hit 4+ as printed | the PDF flow extract and Wahapedia agree on 4+ | Confirmed
UNCLEAR (resolved): the meltagun prints Dmg 6/3. RULING: Imperial Navy Breachers meltagun Dmg | 6/3 as printed, Devastating 4 on each retained crit | identical in both sources; the 2024 melta pattern | Confirmed
UNCLEAR (resolved): the plasma gun prints no Range in either source. RULING: Imperial Navy Breachers plasma gun range | no Range rule | both sources omit it while every pistol and shotgun on the cards prints one | Confirmed
UNCLEAR (resolved): the update log lists the detonator's Lethal 5+ changed to Lethal 4+; both sources already print 4+.

### 17.4 Operative rules and unique actions

- T-NB.7 **Command Breach: free orders** (Sergeant-at-Arms): while the Sergeant is in the killzone, the Attack Order and Defence Order strategy ploys (T-NB.33, T-NB.34) cost 0 CP.
  - MECH: ployRule `costAdjust` setting the cost of `nb.p.attack-order` / `nb.p.defence-order` to 0 while the Sergeant has status `active` in the killzone | CLASS: team-hook
- T-NB.8 **Command Breach: redirect** (Sergeant-at-Arms): once in each of the Sergeant's activations, before or after one of its actions, if your Attack Order or Defence Order marker is in the killzone, you may do one (not both) of: pick the marker up and put it down again anywhere in the killzone; or turn the ploy into the other one (an Attack Order becomes a Defence Order or the reverse; the marker stays where it is). No CP is spent.
  - MECH: 0 CP offer in the owner's `firefight.activationStart` and `firefight.actionEnded` windows during the Sergeant's activation (not counteractions), per-activation ledger; option A re-places the team marker (`placementSpots` sample, as Cloud of Flies); option B uses the brief fallback for changing the ploy in effect: `effects.removeEffects` for the current order, add the other order's effect, and switch the marker's kind (event for the feed and the marker model) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Command Breach swap | the swap keeps the marker in place, ends the old order's effect and starts the other's for the rest of the TP; it is not a use of the other ploy, so the "not both in the same Strategy phase" clause does not block it | the card says no CP is spent to change the ploy and the exclusivity clause is about using the ploys in the Strategy phase | Unsourced
- T-NB.9 **Group Activation** (Armsman): when an Armsman is expended, you must next activate one other ready friendly ARMSMAN (if any) before the opponent activates; after that one is expended the opponent activates as normal, so at most two in a row. This rule is ignored for both operatives of a Breach and Clear pair (T-NB.32).
  - MECH: provider `chainActivation(state, expended, wasChained)`: when `expended` is an Armsman, `wasChained` is false and neither it nor its partner is part of this TP's Breach and Clear pair, return every ready friendly Armsman (the player picks one); otherwise null | CLASS: team-hook
  - RULING: Imperial Navy Breachers Group Activation | mandatory when another ready Armsman exists, the player picks which; an Armsman activated through the chain does not chain again; an Armsman that is either member of a Breach and Clear pair neither starts nor receives a Group Activation chain | the card says "must", caps the run at two, and tells you to ignore it when Breach and Clear is in use | Unsourced
- T-NB.10 **Emboldened** (Axejack): during a TP in which the Axejack has performed a Charge, whenever an attack die would inflict 3 or more damage on it, roll one D6; on 5+ that damage is 1 less. An Emboldened token marks it once it has Charged.
  - MECH: `onDamageInflicted` on the Axejack for dice sources (`normal`, `crit`, `strike-normal`, `strike-crit`) and Devastating from a die, not `splash` and not non-dice damage, when `amount >= 3` and `actionsThisTp` holds a Charge (free Charges included); D6 via `ctx.roll` | CLASS: team-hook
  - RULING: Imperial Navy Breachers Emboldened scope | shooting and fight dice, normal or crit, Blast and Torrent secondaries, and Devastating damage tied to a retained crit all qualify; the check uses the damage left after other reductions (T-NB.36 runs first) | the rule says "attack dice inflicts damage", the Disgustingly Resilient ruling (T-PM.19) counts Devastating, and the active player orders simultaneous rules (core precedence 5) | Unsourced
- T-NB.11 **Machine: activation bar** (C.A.T. Unit only): the C.A.T. Unit cannot be activated or perform any action (free actions and counteractions included) while it is in an enemy operative's control range, or once a friendly SURVEYOR has been incapacitated. The TP can end while it is still ready.
  - MECH: provider `activationBarred` (condition above); provider `actionForbidden` for every action while the condition holds (so `startDelegatedAction` and counteracting refuse it); the barred C.A.T. counts as expended for counteracting (`firefight.activatableOps`) | CLASS: generic:activationBarred
  - RULING: Imperial Navy Breachers C.A.T. Unit bar | the bar also stops Remote Control's free action and counteracting; a Surveyor incapacitated once keeps the bar on for the rest of the battle; while barred the C.A.T. lets its seat counteract as if it were expended | "cannot be activated or perform actions" covers every action, and "has been incapacitated" is permanent | Unsourced
- T-NB.12 **Machine: actions** (C.A.T. Unit and Gheistskull): the C.A.T. Unit may perform only Charge, Dash, Fall Back, Reposition and SPOT; the Gheistskull only BOOST, Charge, Dash, Fall Back and Reposition. Neither may Shoot, Fight, Pick Up Marker, Place Marker or perform mission actions (neither has a weapon).
  - MECH: provider `actionForbidden` (whitelist per card, universal ids and `ability:<id>`) | CLASS: team-hook
  - RULING: Imperial Navy Breachers C.A.T. Unit and Fall Back | the C.A.T. Unit can never Fall Back: Fall Back needs an enemy in its control range, where the activation bar (T-NB.11) forbids every action | consequence of the two printed bullets | Confirmed
- T-NB.13 **Machine: no retaliating, no assisting, no climbing** (C.A.T. Unit and Gheistskull): neither can retaliate or assist a friendly fighter; the C.A.T. Unit also cannot climb or jump (it can still drop). The Gheistskull has no FLY rule.
  - MECH: no melee weapon, so no retaliation; `modifyAttackDice` removes Machine ids from the Breacher side's `assists`; provider `moveRestrictions` `{ noClimb: true, noJump: true }` for the C.A.T. Unit | CLASS: team-hook
  - RULING: Imperial Navy Breachers Gheistskull flight | the Gheistskull moves like any operative (no FLY) | the datacard prints no FLY rule; the flight is background text only | Confirmed
- T-NB.14 **Machine: control** (C.A.T. Unit and Gheistskull): when marker control is worked out, its APL counts as 1 lower (not an APL change, so it stacks with real changes and ignores the R-9.6 cap).
  - MECH: provider `controlApl` (apl - 1) | CLASS: team-hook
- T-NB.15 **Machine: hidden in cover** (C.A.T. Unit and Gheistskull): while it has a Conceal order and is in cover, the opponent cannot select it as a valid target, whatever other rule says (Seek, Vantage terrain and the like), unless the shooter is within 2" of it.
  - MECH: `beforeShootTargetSelect` drops the Machine from the opponent's candidates when its order is Conceal, `target.status` reports cover, and the distance to the shooter is more than 2" | CLASS: team-hook
  - RULING: Imperial Navy Breachers Machine target protection | it removes the Machine from primary and Torrent secondary selection (both are selected valid targets); Blast secondaries are not selected and still include it; the 2" is measured from the shooter | Blast secondaries are determined, not selected, while Torrent says "select" | Unsourced
- T-NB.16 **Machine: wide view** (C.A.T. Unit only): visibility from the C.A.T. Unit may be drawn from any part of the miniature.
  - MECH: none: the engine draws visibility from the head point | CLASS: data
  - RULING: Imperial Navy Breachers C.A.T. Unit visibility | visibility from the C.A.T. Unit uses the normal head point | the batch C fallback; the engine has no whole-model viewpoint and the C.A.T. Unit is a low model whose head point lies near its top | Unsourced
- T-NB.17 **Expendable** (C.A.T. Unit and Gheistskull): ignored for the opponent's kill op, both when incapacitated and in your starting count of operatives (and for escape or survive conditions, which v1 missions do not use).
  - MECH: datacard `expendable: true` | CLASS: data
  - RULING: Imperial Navy Breachers starting count | the kill op starting count is 11 without Machines and 10 with one or both | the Sergeant plus 10 selections, minus the half selections, which Expendable removes from the count | Confirmed
- T-NB.18 **SPOT** (C.A.T. Unit, 1 AP): pick one enemy operative visible to the C.A.T. Unit; it gains your Spot token. Whenever a friendly IMPERIAL NAVY BREACHER shoots that enemy, its ranged weapons have Seek Light and the enemy cannot be obscured. The effect ends at the end of the TP, as soon as the enemy is no longer visible to the C.A.T. Unit, or when the C.A.T. Unit performs SPOT again, whichever comes first. Not while in an enemy's control range.
  - MECH: unique action, enemy-target choice (visible); token `nb.spot` (`turningPointEnd`, `sourceIncapacitated`, cap 1 per source); an `action.ended` handler (any operative) removes the token when the enemy is no longer visible to the C.A.T. Unit; `modifyWeaponRules` adds `core.wr.seek-light`; `beforeShootTargetSelect` adds the Conceal-in-Light-cover candidate that Seek Light makes valid (as T-PF.30, T-HK.22); `target.status` sets `obscured: false` | CLASS: team-hook
  - RULING: Imperial Navy Breachers Spot use and end | the effect is always used (no downside); visibility is re-checked after every action, so a break in sight ends it even if sight returns | the card says the effect lasts "until" the enemy is no longer visible | Unsourced
- T-NB.19 **Breachwall** (Endurant): while the Endurant has an Engage order, when the opponent selects a valid target they cannot pick another friendly IMPERIAL NAVY BREACHER whose base touches the Endurant's if the Endurant is intervening. The rule does nothing while more than one other friendly operative's base touches the Endurant's.
  - MECH: `beforeShootTargetSelect` for the opponent's shots: drop the protected operative when the Endurant is Engage, exactly one other friendly base touches the Endurant (edge gap <= 0.01"), and the Endurant is intervening (team-local test below) | CLASS: team-hook (see 17.9 `operativeIntervening`)
  - RULING: Imperial Navy Breachers Breachwall intervening | the Endurant is intervening when, from every sampled point of the shooter's base, at least one top-down targeting line to the facing half of the target's base crosses the Endurant's base (the shooter picks its origin point to avoid it; core intervening rule) | core targeting lines are drawn from a point of the shooter's player's choice | Unsourced
  - RULING: Imperial Navy Breachers Breachwall selection | it removes the protected operative from primary and Torrent secondary selection; Blast secondaries still include it; it never affects the Breacher player's own Detonate | the rule names the opponent selecting a valid target | Unsourced
- T-NB.20 **Shield** (Endurant's shield bash, team-local weapon rule): while the Endurant fights or retaliates with the shield bash, each of its blocks may cancel two unresolved enemy successes instead of one.
  - MECH: provider `blockCapacity` returns 2 for the Endurant's seat when its fight weapon is `nb.w.shield-bash` (option `block2:`) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Shield blocks | every block (normal or crit) cancels two successes, still subject to the core block rules (a normal success cannot block a crit) | the card says "each of your blocks" | Confirmed
- T-NB.21 **Disengage** (Endurant): its Fall Back costs 1 AP less (1 AP), so it can Fall Back as a counteraction.
  - MECH: data `costDelta { actions: ['fallBack'], delta: -1 }` | CLASS: data
- T-NB.22 **BOOST** (Gheistskull, 1 AP): the next Charge it performs in this activation may move 4" further instead of 2" (Move 8", so a 12" Charge). Once per battle; not in the first TP.
  - MECH: unique action with TP >= 2 and once-per-battle ledger; sets a per-activation flag consumed by the next Charge; provider `moveLimitDelta(op, 'charge')` returns +2 while the flag is set | CLASS: generic:moveLimitDelta
  - RULING: Imperial Navy Breachers Boost timing | the bonus lasts only to the end of the Gheistskull's current activation and is used by its next Charge in it; performed as a counteraction it has no later Charge to boost, and the AI never does so | the errata wording ties it to "this activation", and a counteraction is not an activation | Unsourced
- T-NB.23 **Grenadier** (Grenadier): it may use frag and krak grenades (M-5.6) and perform STUN GRENADE (M-5.5) even when the team has not picked them, without using up the team's grenade uses; whenever it uses a frag or krak grenade (its own or the team's), that grenade's Hit improves by 1 (to 3+). It gets no smoke grenade.
  - MECH: provider `ownGrenades` (weapons frag 1, krak 1; actions stun 1, offered through `extraActions`); `modifyAttackDice` hitDelta -1 on frag and krak for this operative | CLASS: generic:ownGrenades
  - RULING: Imperial Navy Breachers Grenadier allowance | its own allowance is frag 1, krak 1 and stun 1 per battle, kept apart from the team's picks; no smoke | the card gives no number; the T-AOD.9, T-PF.9 and T-HK.13 precedents use one each, and this card omits smoke | Unsourced
- T-NB.24 **WELD SHUT** (Hatchcutter, 1 AP): seal a closed hatchway so other operatives pay extra AP to open it.
  - MECH: action listed in data; its condition (within 1" of a closed hatchway) never holds in the open killzone | CLASS: data
  - RULING: Imperial Navy Breachers Weld Shut | no effect in the open killzone; the action is never available | it needs hatchways, which exist only in close-quarters killzones | Confirmed
- T-NB.25 **BREACH POINT** (Hatchcutter, 1 AP): place one of your Breach markers within the Hatchcutter's control range, as close as possible to a terrain feature within its control range. While an operative (either side) is within 1" of that marker, the parts of that feature no thicker than 1" are Accessible for it. Not while in an enemy's control range or with no terrain feature in its control range.
  - MECH: unique action placing a marker with `equipmentId: 'breach'` and `featureId` (the Kommandos BREACH mechanics, T-KOM.12, without the in-move clause) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Breach Point | each use places a new Breach marker that stays for the battle (no cap besides once per activation, R-3.7); unlike the Kommandos BREACH it cannot be performed inside a move | the card gives no limit or removal and prints no in-move clause | Unsourced
- T-NB.26 **WAYFIND** (Surveyor, 1 AP, SUPPORT): pick one other friendly IMPERIAL NAVY BREACHER (not a C.A.T. UNIT or GHEISTSKULL) visible to and within 6" of the Surveyor, or visible to and within 6" of a friendly C.A.T. UNIT; its APL goes up by 1 until the end of its next activation (R-9.6 cap). For the Comms Device (M-5.1), the operative the 6" is measured from must itself control the Comms Device marker. Not while in an enemy's control range.
  - MECH: unique action, friendly-target filter from two measuring points; Comms Device +3" per measuring operative; timed APL +1 (`applyAplEffect`, expiring at the target's next activation end) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Wayfind and the Comms Device | the 9" applies only from whichever of the Surveyor or the C.A.T. Unit controls the Comms Device marker | the card states it | Confirmed
- T-NB.27 **REMOTE CONTROL** (Surveyor, 1 AP): pick a friendly C.A.T. UNIT; it may at once perform one free action, moving no more than 3" in it. Not while in an enemy's control range or with no friendly C.A.T. UNIT in the killzone.
  - MECH: unique action then `startDelegatedAction({ operativeId: cat, rules: { maxMove: 3 } })`; the Machine whitelist and bar (T-NB.11, T-NB.12) still apply through `actionForbidden` | CLASS: team-hook
  - RULING: Imperial Navy Breachers Remote Control | the C.A.T. Unit may act whether ready or expended; its free action still follows the Machine rules and normal conditions; the 3" cap counts full move costs; when the Surveyor is counteracting, the 2" counteract cap binds only the Surveyor, not the C.A.T. Unit | free actions ignore readiness, and the counteract cap names the counteracting operative | Unsourced
- T-NB.28 **Detonate** (Void-Jammer's Gheistskull detonator, team-local weapon rule): no valid target is picked; the friendly GHEISTSKULL is always the primary target and cannot be in cover or obscured. The weapon cannot be picked while the Gheistskull is not in the killzone. Blast 1" adds every other operative (friend or foe) visible to and within 1" of the Gheistskull as secondary targets. Silent lets the Void-Jammer use it on a Conceal order; Limited 1 removes it after one use.
  - MECH: provider `fixedTargets(state, shooter, 'nb.w.gheistskull-detonator')` -> `{ targets: [gheistskullId], noCover: true, noObscured: true }` (empty when the Gheistskull is not in the killzone, so the weapon cannot be selected); provider `weaponForbidden` agrees; Blast secondaries added by the engine | CLASS: generic:fixedTargets
  - RULING: Imperial Navy Breachers Detonate shooting | the Void-Jammer needs no visibility or range to the Gheistskull but must otherwise be able to Shoot (not in an enemy's control range); the Breacher player rolls defence for its own Gheistskull and friendly Breacher secondaries normally, Void Armour (T-NB.30) included; the AI never re-rolls the Gheistskull's defence dice | the weapon replaces target selection only; the core Shoot conditions still apply | Unsourced
- T-NB.29 **INTERFERENCE PULSE** (Void-Jammer, 1 AP): pick one enemy operative visible to and within 8" of a friendly GHEISTSKULL. Roll one D6, +1 if that enemy is a valid target for the Gheistskull; on 3+ its APL is reduced by 1 until the end of its next activation (R-9.6 cap). Not while in an enemy's control range or with no friendly GHEISTSKULL in the killzone.
  - MECH: unique action, enemy-target choice measured from the Gheistskull (`visibleTo`), valid-target check from the Gheistskull's viewpoint (`targetInfo` with `viewpointId`), D6 through `engine`, timed APL -1 (`applyAplEffect`) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Interference Pulse | "valid target" is judged as if the Gheistskull were shooting (visible, and not Conceal in cover from the Gheistskull) | the card names the Gheistskull as the operative the target is valid for | Unsourced

### 17.5 Faction rules

- T-NB.30 **VOID ARMOUR (re-roll)**: whenever an operative shoots a friendly IMPERIAL NAVY BREACHER with a ranged weapon that has Blast or Torrent, unless that weapon has a sweeping profile, you may re-roll one of your defence dice (up to two if the target is a GRENADIER). Primary and secondary targets both qualify.
  - MECH: `modifyDefenceDice` pushes one `RerollGrant { mode: 'one' }` (two for a GRENADIER) when the attack weapon has Blast or Torrent and its profile group holds no profile named sweeping | CLASS: team-hook
  - RULING: Imperial Navy Breachers Void Armour sweeping | any weapon whose profiles include one named "sweeping" is excluded, whichever profile is used; Torrent weapons without one (flamers) qualify | the card excludes "weapons that have a sweeping profile" | Unsourced
  - RULING: Imperial Navy Breachers Void Armour Grenadier | the Grenadier re-rolls up to two different defence dice, each once | R-9.2 allows one re-roll per die | Confirmed
- T-NB.31 **VOID ARMOUR (blast shrapnel)**: friendly IMPERIAL NAVY BREACHER operatives take no damage from x" Devastating x unless they are the target of that sequence.
  - MECH: `onDamageInflicted` with `splash: true` on a friendly Breacher sets `amount` to 0 | CLASS: generic:splash
- T-NB.32 **BREACH AND CLEAR**: once per TP, when a ready friendly IMPERIAL NAVY BREACHER is activated, you may pick one other ready friendly IMPERIAL NAVY BREACHER visible to and within 3" of it. When the first is expended, you may activate the picked operative before the opponent activates; when that one is expended, the opponent activates as normal.
  - MECH: 0 CP offer in the owner's `firefight.activationStart` (once-per-TP ledger) with a partner choice; provider `chainActivation` returns the partner after the first is expended (`wasChained` false); a partner that is no longer ready or is `activationBarred` is dropped | CLASS: generic:chainActivation
  - RULING: Imperial Navy Breachers Breach and Clear opt-in | the choice to use the rule is made when picking the partner; once picked, the partner is activated next if it is still ready and can be activated, otherwise the chain is skipped | `chainActivation` owes the activation, and choosing a partner is the only point the card offers a choice | Unsourced

### 17.6 Ploys

No ploy prints a cost: every ploy is 1 CP (R-2.4), except that Command Breach makes Attack Order and Defence Order 0 CP while the Sergeant is in the killzone (T-NB.7). Strategy ploys last until the end of the TP (R-2.5) unless stated.

- T-NB.33 **ATTACK ORDER** | Strategy | 1 CP (0 with Command Breach) | Gambit step | Place your Attack Order marker anywhere in the killzone. A friendly IMPERIAL NAVY BREACHER within 3" of it has Ceaseless on its weapons while shooting, fighting or retaliating. The marker is removed in the next Ready step. Cannot be used in the same Strategy phase as Defence Order.
  - MECH: ploy with a free-placement team marker (`placementSpots` sample, Cloud of Flies pattern); `modifyWeaponRules` adds `core.wr.ceaseless` when the attacker is within 3" of the marker; `turningPoint.start` removes it; ploy exclusivity check against Defence Order in the same phase | CLASS: team-hook
  - RULING: Imperial Navy Breachers order marker placement | anywhere in the killzone, no visibility or range | the card says "in the killzone" with no limit | Confirmed
- T-NB.34 **DEFENCE ORDER** | Strategy | 1 CP (0 with Command Breach) | Gambit step | Place your Defence Order marker anywhere in the killzone. When an operative shoots a friendly IMPERIAL NAVY BREACHER within 3" of it, you may re-roll every defence die showing one chosen result. Removed in the next Ready step. Cannot be used in the same Strategy phase as Attack Order.
  - MECH: as T-NB.33; `modifyDefenceDice` pushes `RerollGrant { mode: 'result' }` | CLASS: team-hook
- T-NB.35 **CLOSE ASSAULT** | Strategy | 1 CP | Gambit step | Whenever a friendly IMPERIAL NAVY BREACHER is fighting or shooting an operative within 3" of it: its Navis shotgun and Navis heavy shotgun profiles get +1 to both Dmg values; and if its attack roll has two or more fails, one fail is discarded and another kept as a normal success. Checked per target (Blast and Torrent secondaries separately).
  - MECH: `modifyDamage` +1/+1 for `nb.wg.navis-shotgun` and `nb.wg.navis-heavy-shotgun` profiles when the target is within 3"; `afterAttackRoll` on the Breacher pool turns one `fail` into `normal` when fails >= 2 (after re-rolls) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Close Assault and retaliating | no effect while retaliating | the errata text names fighting and shooting only, and 2024 rules keep fighting and retaliating apart (as T-LG.28) | Confirmed
- T-NB.36 **BRACE FOR COUNTERATTACK** | Strategy | 1 CP | Gambit step | Whenever an enemy shoots, fights or retaliates against a friendly IMPERIAL NAVY BREACHER that is within your territory, or that has not performed a Charge, Fall Back or Reposition this TP, each attack die whose Normal or Critical Dmg is 3 or more inflicts 1 less damage on it. Devastating and non-dice damage are not reduced.
  - MECH: `onDamageInflicted` for sources `normal`, `crit`, `strike-normal`, `strike-crit` when the die's Dmg >= 3 and (`equipment.territoryOf(own seat)` contains part of the base, or `actionsThisTp` holds no charge/fallBack/reposition, free ones included) gives -1 | CLASS: team-hook
  - RULING: Imperial Navy Breachers Brace for Counterattack | "within your territory" means any part of the base inside it; Dash does not count as moving here; it reads the Dmg stat, so it runs before Emboldened, which then reads the reduced damage | core "within" is partial, the card lists only three actions, and the active player orders simultaneous rules (core precedence 5) | Unsourced
- T-NB.37 **OVERWHELM TARGET** | Firefight | 1 CP | When you activate either operative of a Breach and Clear pair (T-NB.32) | Pick one of the two; its APL goes up by 1 until the end of its activation (R-9.6 cap).
  - MECH: firefight ploy in `firefight.activationStart` while the pair is live, with a choice of the two; `applyAplEffect` +1 removed at that operative's `activation.end` | CLASS: team-hook
  - RULING: Imperial Navy Breachers Overwhelm Target errata | either operative of the pair may be picked, whichever one is being activated | the August '26 errata adds "select one of those operatives"; Wahapedia omits it | Corrected
  - RULING: Imperial Navy Breachers Overwhelm Target on the partner | picked during the first operative's activation, the partner gets +1 APL from then until the end of its own (chained) activation | the effect lasts until the end of "that operative's activation", which for the partner is the next one | Unsourced
- T-NB.38 **BLITZ** | Firefight | 1 CP | A friendly IMPERIAL NAVY BREACHER performs Shoot or Fight and picks an enemy within 6" as its target or opponent | If it is the first friendly operative to perform Shoot or Fight this TP, its weapons have Accurate 1 for that action; if it is also the first friendly operative activated this TP, they have Severe as well.
  - MECH: firefight ploy at `shoot.targetSelected` and `fight.weaponsSelected`; TP ledger of the first friendly Shoot/Fight and first activation; `modifyWeaponRules` adds `core.wr.accurate` x1 and `core.wr.severe` for the action | CLASS: team-hook
  - RULING: Imperial Navy Breachers Blitz conditions | offered only when the Accurate clause holds (otherwise it does nothing); free Shoot and Fight actions count as performing them; a counteraction is not an activation, so a counteracting operative never gets Severe | the Severe clause adds to the Accurate clause ("also") | Unsourced
- T-NB.39 **LOCK IT DOWN** | Firefight | 1 CP | A friendly IMPERIAL NAVY BREACHER is activated | Pick one objective marker. Until the end of the battle, or until you use this ploy again, that operative's APL counts as 1 higher when control of that marker is worked out (not an APL change: it stacks with changes and ignores R-9.6). A Lock it Down token marks it.
  - MECH: firefight ploy in `firefight.activationStart` with an objective choice; team ledger `{ operativeId, markerId }` replaced on reuse; provider `controlApl` +1 | CLASS: team-hook
  - RULING: Imperial Navy Breachers Lock It Down | only the operative it was used on gains the bonus, only for the chosen marker; using the ploy again (on anyone) ends the old bonus | as printed | Confirmed
- T-NB.40 **DECK HAND** | Firefight | 1 CP | During a friendly IMPERIAL NAVY BREACHER's activation, before or after one of its actions, if its APL stat is 1 or 2 | For the rest of that activation it may move through one Accessible terrain feature without paying the extra 1", including during a Charge or Fall Back. (The free Operate Hatch half has no use here.)
  - MECH: firefight ploy in `firefight.activationStart` / `firefight.actionEnded`, gated on the current APL (base plus modifiers) <= 2; provider `moveSurcharge` returns `-min(1, breakdown.accessible)` for the first move of the activation that crosses Accessible terrain, then the use is spent (`action.ended` ledger) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Deck Hand errata | the ploy needs the operative's APL stat to be 1 or 2 when used (a Wayfind or Overwhelm Target +1 makes it 3 and shuts it off) | the August '26 errata adds the APL clause; Wahapedia omits it | Corrected
  - RULING: Imperial Navy Breachers Deck Hand Accessible | one Accessible crossing (1") is free once in that activation, in the first move that crosses Accessible terrain (Breach marker parts included) | Accessible terrain costs 1" per crossing and the ploy names one feature | Unsourced
  - RULING: Imperial Navy Breachers Deck Hand hatch | the free Operate Hatch and the weld-shut clause have no effect in the open killzone | they need hatchways | Confirmed

### 17.7 Faction equipment

Universal equipment (M-5) can also be chosen; the four-option limit covers faction and universal options together (M-5.12).

- T-NB.41 **REBREATHERS** | Friendly IMPERIAL NAVY BREACHER operatives may ignore changes to their APL stat, and enemy operatives' Shock weapon rule does nothing against them.
  - MECH: Shock: `modifyWeaponRules` strips `core.wr.shock` from an enemy weapon when the target or fight opponent is a friendly Breacher. APL: team code scrubs negative APL entries (`aplFx` with delta < 0, emitting the correction) on friendly Breachers in `action.ended` (any operative) and `activation.start` handlers, keeping positive ones; not provider `flags.ignoreApl`, which would also drop Wayfind and Overwhelm Target | CLASS: team-hook (see 17.9 `ignoreAplDecreases`)
  - RULING: Imperial Navy Breachers Rebreathers APL | only decreases are ignored; increases from friendly rules are kept | the card says "can ignore", so the player keeps the changes that help | Unsourced
  - RULING: Imperial Navy Breachers Rebreathers Shock | an enemy weapon's Shock never discards a Breacher's success | as printed | Confirmed
- T-NB.42 **SLUGS** | Up to three times per TP (team-wide), when a friendly IMPERIAL NAVY BREACHER performing Shoot selects a Navis shotgun (long range), you may use this rule: until the action ends that weapon's Hit improves by 1, both Dmg values go up by 1, and it has Accurate 1 (5+ 1/2 becomes 4+ 2/3 with Accurate 1).
  - MECH: equipment use in the `shoot.targetSelected` window (0 CP, TP ledger of 3), `modifyAttackDice` hitDelta -1, `modifyDamage` +1/+1, `modifyWeaponRules` `core.wr.accurate` x1, for that action | CLASS: team-hook
  - RULING: Imperial Navy Breachers Slugs and the heavy shotgun | the Endurant's Navis heavy shotgun (long range) is not eligible | Close Assault names both shotguns while Slugs names only the Navis shotgun | Confirmed
  - RULING: Imperial Navy Breachers Slugs count | three uses per TP for the whole team, one per Shoot action | "up to three times per turning point" with no per-operative wording | Unsourced
- T-NB.43 **COMBAT STIMMS** | Friendly IMPERIAL NAVY BREACHER operatives ignore the Move reduction from being injured (the Hit penalty still applies).
  - MECH: provider `moveDelta` +2 while the operative is injured and not already ignoring injury (the 4" floor is applied to the sum) | CLASS: team-hook
  - RULING: Imperial Navy Breachers Combat Stimms | Move only, never weapon Hit | the card names the Move stat | Confirmed
- T-NB.44 **SYSTEM OVERRIDE DEVICE** | Once per TP, one friendly operative may perform Operate Hatch for 1 less AP.
  - MECH: selectable option with no effect (no hatchways) | CLASS: data
  - RULING: Imperial Navy Breachers System Override Device | selectable but does nothing in the open killzone | Operate Hatch needs hatchways | Confirmed

Marker/token guide (UI): Emboldened token, Spot token, Attack Order marker, Defence Order marker, Demolition Charge token (Limited use), Gheistskull Detonator token (Limited use), Lock it Down token, Slugs token (uses this TP), Breach marker, Weld Shut marker and System Override Device token (never used in the open killzone).

### 17.8 Checklist

Rows in `12-rules-test-checklist.md` section TEAM-NB: TEAM-NB-000 to TEAM-NB-035.

### 17.9 Generic capabilities (survey; resolved in the Engine map below)

Every rule maps onto the batch A, B and C layers except these, each built team-local:
- **ignoreAplDecreases** (gap): Rebreathers ignores APL changes at the player's option, so only decreases. `flags.ignoreApl` drops every change, positives included (and `applyAplEffect` refuses new ones), which would cancel Wayfind and Overwhelm Target. Fallback: team code removes negative `aplFx` entries from friendly Breachers in `action.ended` and `activation.start` handlers (RULING T-NB.41).
- **operativeIntervening** (gap): Breachwall needs "is this operative intervening" between a shooter and a target; `los.interveningTraits` covers terrain only. Fallback: team-local top-down segment-versus-disc test from sampled points of the shooter's base to the facing half of the target's base (RULING T-NB.19).
- **wholeModelViewpoint** (gap, listed in the brief): C.A.T. Unit visibility from any part of the model. Fallback: head point (RULING T-NB.16).
- **ploySwap** (gap, listed in the brief): Command Breach turns one strategy ploy into the other. Fallback: `effects.removeEffects` then add the other ploy's effect and switch the marker kind.
- **optionalChain** (minor): `chainActivation` owes the activation, while Breach and Clear says "can". Fallback: the opt-in is the partner pick (RULING T-NB.32).

### 17.10 Gotchas

- PDF wins over Wahapedia in three places, each with a Corrected RULING: GUNNER is exempt from the once-each limit (two Gunners, same weapon allowed); Deck Hand needs APL 1 or 2; Overwhelm Target lets you pick either operative of the pair. The PDF's own selection page also still prints the old Gunner text; the update log wins.
- Eleven operatives, not ten: the Sergeant plus 10 selections. C.A.T. Unit and Gheistskull share one selection, need the Surveyor / Void-Jammer, and are Expendable (no kill op value either way).
- Machines have no weapons, cannot retaliate or assist, count APL -1 for control, and cannot be picked as a target on Conceal in cover beyond 2" (Seek and Vantage do not help). The C.A.T. Unit also cannot climb or jump, cannot act or activate in an enemy's control range or after its Surveyor dies, and so can never Fall Back. The Gheistskull does not fly.
- Group Activation is mandatory and stops at two Armsmen; it is switched off for both members of a Breach and Clear pair. Breach and Clear is once per TP and the partner must be visible and within 3" when picked.
- Command Breach: Attack/Defence Order cost 0 CP only while the Sergeant is in the killzone; the in-activation move or swap is once per Sergeant activation, one option only, and never in a counteraction.
- Void Armour re-rolls only against Blast or Torrent weapons with no sweeping profile, two dice for the Grenadier; separately, x" Devastating cannot hurt a friendly Breacher that is not the sequence's target.
- Brace for Counterattack reduces Normal and Critical Dmg of 3+ only (never Devastating), needs the operative in your territory or unmoved by Charge/Fall Back/Reposition this TP; Dash does not count. Emboldened runs after it on the reduced value.
- Close Assault is not for retaliating; its Dmg bonus is for Navis shotguns and heavy shotguns, its fail-to-normal clause for any weapon. Slugs are for the Navis shotgun (long range) only, three per TP across the team.
- Detonate: the Gheistskull is always the primary target (no cover, no obscured, no visibility needed), Blast 1" also hits friends, Lethal 4+ and Stun, one use per battle; the weapon cannot be picked without the Gheistskull in the killzone. Boost is once per battle, never in TP1, and only boosts a Charge later in the same activation.
- The Endurant is Move 4", Save 2+, 11 wounds; Disengage makes its Fall Back 1 AP (counteract-legal); Shield makes each block cancel two successes; Breachwall needs Engage, intervening, and exactly one other friendly base touching.
- Rebreathers ignores only APL decreases (keep Wayfind, Overwhelm Target) and switches off enemy Shock. Combat Stimms restores Move, not Hit.
- Open killzone only: Weld Shut, System Override Device and Deck Hand's hatch half do nothing; Breach Point and Deck Hand's Accessible crossing still work.
- Edition leaks to reject: no 2021 Breacher rules (no 2021 Gheistskull or C.A.T. profiles, no Overwatch, no shape distances), no 40k 10th mechanics (no wound rolls, no invulnerable or void shield saves); inches only, three defence dice, every printed number from the August '26 cards.

### 17.11 Engine map

| Rule or capability | Built as |
|---|---|
| Roster (Sergeant 1, main 10, ARMSMAN and the three Gunner cards repeatable, Gunners max 2, half selections, requires) | team.json slots: `repeatable`, `caps`, `halfSelections`; `selection.requires` |
| Loadouts | datacard `weapons.options` (`sets` for the Sergeant); profile groups |
| Command Breach cost | ployRule `costAdjust` |
| Command Breach redirect | 0 CP offers in `firefight.activationStart` / `firefight.actionEnded`; `placementSpots`; `effects.removeEffects` + add the other order (brief fallback) |
| Group Activation, Breach and Clear | provider `chainActivation` (B&C partner from a TP ledger; GA skipped for pair members and when `wasChained`) |
| Overwhelm Target, Wayfind, Interference Pulse | `applyAplEffect` (timed APL) with team expiry |
| Emboldened, Brace for Counterattack | `onDamageInflicted` (dice sources), D6 via `ctx.roll`; `equipment.territoryOf`; `actionsThisTp` |
| Machine bar (C.A.T.) | provider `activationBarred`; `actionForbidden` while barred |
| Machine whitelist | provider `actionForbidden` |
| Machine no climb/jump, no assist | provider `moveRestrictions`; `modifyAttackDice` (`assists` filter) |
| Machine control | provider `controlApl` (-1); Lock It Down +1 |
| Machine target protection, Breachwall | `beforeShootTargetSelect` + `target.status`; team-local intervening geometry |
| Expendable | datacard `expendable: true` |
| SPOT | token `nb.spot`; `action.ended` visibility check; `modifyWeaponRules` Seek Light; `beforeShootTargetSelect`; `target.status` |
| Shield | provider `blockCapacity` (2) |
| Disengage | data `costDelta` on `fallBack` |
| BOOST | provider `moveLimitDelta` (charge +2) |
| Grenadier | provider `ownGrenades` (frag 1, krak 1, stun 1) + `extraActions`; `modifyAttackDice` hitDelta |
| BREACH POINT | Breach marker (`equipmentId: 'breach'`, `featureId`) |
| REMOTE CONTROL | `startDelegatedAction({ maxMove: 3 })` |
| Detonate | provider `fixedTargets` (`noCover`, `noObscured`); `weaponForbidden` |
| Void Armour | `modifyDefenceDice` re-roll grants; `onDamageInflicted` `splash` -> 0 |
| Attack Order, Defence Order | team marker placement; `modifyWeaponRules` Ceaseless; `modifyDefenceDice` grant `result`; `turningPoint.start` removal |
| Close Assault | `modifyDamage`; `afterAttackRoll` fail-to-normal |
| Blitz | windows `shoot.targetSelected`, `fight.weaponsSelected`; `modifyWeaponRules` Accurate 1, Severe |
| Lock It Down | provider `controlApl` |
| Deck Hand | provider `moveSurcharge` (negative) + `action.ended` ledger |
| Rebreathers | `modifyWeaponRules` (strip Shock); team-local negative APL scrub (gap `ignoreAplDecreases`) |
| Slugs | 0 CP equipment use at `shoot.targetSelected`; `modifyAttackDice`, `modifyDamage`, `modifyWeaponRules` |
| Combat Stimms | provider `moveDelta` (+2 while injured) |
| Weld Shut, System Override Device, Deck Hand hatch | inert in the open killzone |

### 17.12 Implementer brief

- Files you own (nothing else):
  - `src/data/teams/imperial-navy-breachers/team.json`, `operatives.json`, `weapons.json`, `abilities.json`, `ploys.json`, `equipment.json` (ids `nb.<name>`, `nb.w.`, `nb.wg.`, `nb.a.`, `nb.p.`, `nb.e.`)
  - `src/engine/teams/imperial-navy-breachers.ts` (code hooks, `registerTeamRules`, hook handlers, ploy rules)
  - `src/client/teams/imperial-navy-breachers.ts` (weapon flavour, VFX family, sound, attachments, figure stand-ins `nb-sergeant-at-arms-shotgun-hatchet`, `nb-sergeant-at-arms-bolt-pistol-chainsword`, `nb-sergeant-at-arms-bolt-pistol-power-weapon`, `nb-sergeant-at-arms-autopistol-chainsword`, `nb-sergeant-at-arms-autopistol-power-weapon`, `nb-armsman` (with `-b` for repeats), `nb-axejack`, `nb-cat-unit`, `nb-endurant`, `nb-gheistskull`, `nb-grenadier`, `nb-gunner-las-volley`, `nb-gunner-meltagun`, `nb-gunner-plasma-gun`, `nb-hatchcutter`, `nb-surveyor`, `nb-void-jammer`; Attack/Defence Order, Breach and Spot markers)
  - `tests/engine/teams/imperial-navy-breachers.test.ts` (TEAM-NB-nnn tests) and `tests/engine/teams/imperial-navy-breachers.hooks.ts` (code-hook firing scenarios)
  - append-only: `docs/needs-rules-check.md` (RULING lines), `docs/spec/13-teams.md` section 17 and `12-rules-test-checklist.md` section TEAM-NB (refinements only)
- Activation flag: `"playable": false` in `src/data/teams/imperial-navy-breachers/team.json`. Flip it (with `defaults` filled, a legal default roster honouring the Gunner cap, half selections and requires, and every weapon in `src/client/teams/imperial-navy-breachers.ts`) only when the team is complete and all gates pass.
- Capabilities to use: the Engine map above (`chainActivation`, `activationBarred`, `actionForbidden`, `moveRestrictions`, `controlApl`, `beforeShootTargetSelect`, `target.status`, `fixedTargets`, `weaponForbidden`, `splash`, `moveLimitDelta`, `ownGrenades`, `blockCapacity`, `startDelegatedAction`, `moveSurcharge`, `moveDelta`, `halfSelections`, `selection.requires`, datacard `expendable`, the Breach marker, ployRule `costAdjust`). Do first: roster (TEAM-NB-001 to 004), then the activation chains (TEAM-NB-007, 008), the Machine rules (TEAM-NB-012 to 016) and Detonate (TEAM-NB-025).
- Team-local weapon rules the scaffold leaves out: `nb.a.wr-shield` (shield bash) and `nb.a.wr-detonate` (Gheistskull detonator); the leader's weapons carry none. Gunners are three datacards `nb.gunner-las-volley`, `nb.gunner-meltagun`, `nb.gunner-plasma-gun`, each repeatable, capped at two together.
- Team-local fallbacks (17.9): negative-APL scrub for Rebreathers, operative-intervening geometry for Breachwall, head-point visibility for the C.A.T. Unit, `removeEffects` swap for Command Breach, partner pick as the Breach and Clear opt-in.
- RULING lines expected: Gunner selection (Corrected), lone half selection, keyword spelling, Sergeant bolt pistol, meltagun Dmg, plasma gun range, Command Breach swap, Group Activation, Emboldened scope, C.A.T. Unit bar, C.A.T. Unit and Fall Back, Gheistskull flight, Machine target protection, C.A.T. Unit visibility, starting count, Spot use and end, Breachwall intervening and selection, Shield blocks, Boost timing, Grenadier allowance, Weld Shut, Breach Point, Wayfind and the Comms Device, Remote Control, Detonate shooting, Interference Pulse, Void Armour sweeping and Grenadier, Breach and Clear opt-in, order marker placement, Close Assault and retaliating, Brace for Counterattack, Overwhelm Target errata (Corrected) and partner, Blitz conditions, Lock It Down, Deck Hand errata (Corrected), Accessible and hatch, Rebreathers APL and Shock, Slugs heavy shotgun and count, Combat Stimms, System Override Device.
- Gotchas: section 17.10. Eleven operatives (twelve with both Machines); the kill op count skips Expendable Machines. Group Activation is forced; Breach and Clear is optional and switches Group Activation off for its pair. The C.A.T. barred state must never leave the seat stuck (it counts as expended for counteracting and the TP may end with it ready).
