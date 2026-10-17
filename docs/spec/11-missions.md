# 11 - Missions, killzone layout and universal equipment

Rule IDs here are `M-<section>.<n>`. Core mechanics are in `10-rules-core.md` (cited as R-x.y). All text is our own wording.

## 1. Preliminary Ops (the v1 mission pack)

- M-1.1 Head-to-head, four TPs, two operations scored: **kill op** and **crit op**. Most VP at the end of TP4 wins; equal VP is a draw.
- M-1.2 Map choice: the setup-initiative player rolls one D6; 1-3 uses map 1, 4-6 uses map 2. RULING: the map pictures (terrain positions, drop zone shapes) are images that are not in our sources. v1 builds a symmetric-but-varied Volkus layout from the R-13.1 terrain list and uses the geometry in R-1 (player edges are the short edges); map 1 and map 2 are two generated layouts, the second mirrored on the long axis. Status Unsourced.
- M-1.3 Objective markers (40mm, on the killzone floor): first the player without setup initiative places one on the centreline, more than 2" from neutral killzone edges. Then, starting with the setup-initiative player, each player places one marker that is wholly within a territory different from the other player's marker's territory, within 3" of the centreline, more than 5" from every other objective marker, and more than 2" from neutral killzone edges. Result: three markers.
  - RULING: "different territories" is read literally, so the first placer chooses a side and the second must take the other. Status Unsourced.
- M-1.4 Crit op choice: the setup-initiative player rolls one D3; 1 gives Secure, 2 gives Loot, 3 gives Transmission. Both players score the same crit op.
- M-1.5 Drop zone, territory, centreline (restating R-1 RULING): territory = half-board per side of the centreline; the centreline belongs to both; a thing can be wholly within a territory and on the centreline, but then it is not within the other territory. Drop zone = within 3" of the owner's killzone edge inside the owner's territory. Neutral edges are the two long edges.

## 2. Kill op

- M-2.1 A kill grade starts at 0 and rises as enemy operatives are incapacitated, to a maximum of 5. Each time a player reaches a higher grade they score 1 VP. At the end of TP4, if a player's grade is higher than the opponent's, they score 1 VP. Maximum 6 VP.
- M-2.2 Operatives with the Expendable rule (Bomb Squig) are not counted in the starting number and their incapacitation does not count towards grades.
- M-2.3 Thresholds: the number of enemy operatives that must be incapacitated for each grade depends on the starting number N of enemy operatives. The sources give a table image we cannot read, and only one example: for N = 8, grade 1 needs 2 incapacitated and grade 2 needs 3 in total.
  - RULING: provisional table `T(g) = min(N, max(T(g-1)+1, round_half_up(N*g/5)))` for g = 1..5 (T(0)=0), so grade 5 means every enemy operative. This reproduces the N=8 example (2, 3, 5, 6, 8). Examples: N=6 gives 1, 2, 4, 5, 6; N=10 gives 2, 4, 6, 8, 10; N=11 gives 2, 4, 7, 9, 11. A grade whose threshold would exceed N is unreachable. Status Unsourced; the real table is the image `KillGrade.png` on the Wahapedia missions page and should replace this formula (data lives in `mission.json`, not code).

## 3. Crit ops

All three use objective markers and operative control (R-8.5, R-8.6). Nothing can be done in TP1 for these crit ops; scoring starts at the end of TP2.

### 3.1 Secure
- M-3.1 Mission action SECURE, 1 AP: one objective marker the active operative controls becomes secured by its team. Not in TP1; not in an enemy's CR. A marker stays secured by a team until the enemy team secures that marker.
- M-3.2 Scoring: at the end of each TP after the first: 1 VP if your team has any secured marker, and another 1 VP if your team has more secured markers than the enemy. Maximum 2 VP per TP.

### 3.2 Loot
- M-3.3 Mission action LOOT, 1 AP: one objective marker the active operative controls is looted. Not in TP1; not in an enemy's CR; not if that marker has already been looted in this TP (by either team).
- M-3.4 Scoring: 1 VP each time one of your operatives performs Loot, to a maximum of 2 VP per TP.

### 3.3 Transmission
- M-3.5 Mission action INITIATE TRANSMISSION, 1 AP: one objective marker the active operative controls is transmitting until the start of the next TP (it stops transmitting before the next Strategy phase). Not in TP1; not in an enemy's CR.
- M-3.6 Scoring: at the end of each TP after the first: 1 VP if friendly operatives control any transmitting marker; and another 1 VP if they control more transmitting markers than enemy operatives do. Maximum 2 VP per TP.

## 4. Turning-point timeline for scoring

- M-4.1 TP1: no crit op action may be taken; no crit op VP. Kill op grades can still rise.
- M-4.2 End of TP2, TP3, TP4: crit op VP as above. End of TP4: kill op comparison point, then the battle ends and VP are totalled.
- M-4.3 Maximum totals: kill op 6 VP; crit op 2 VP per TP for TPs 2-4, so 6 VP, for each of the three crit ops (Loot via its per-TP cap in M-3.4).

## 5. Universal equipment (selection: up to four options per player, each option at most once; each option below is one option)

"Your territory" is per M-1.5. "Equipment terrain feature" means razor wire, barricades, ladders. Placement constraints are cumulative.

- M-5.1 **Comms Device (1 marker).** Set up wholly within your territory. While a friendly operative controls it, add 3" to every distance in that operative's SUPPORT rules that names friendly operatives (Get It Dun! and Listen In become 9"). You gain nothing from the enemy's marker.
- M-5.2 **Mines (1 marker).** Set up wholly within your territory and more than 2" from other markers, access points and Accessible terrain. The first time that marker is within any operative's CR (friend or foe), remove it and inflict D3+3 damage on that operative.
  - RULING: checked after every completed move increment and after set-up, not along continuous paths. Status Unsourced.
- M-5.3 **Ammo Cache (1 marker).** Set up wholly within your territory. Mission action AMMO RESUPPLY, 0 AP: one of your caches the active operative controls is used this TP. Until the start of the next TP, whenever this operative shoots with a datacard weapon you may re-roll one attack die (the roll stays subject to R-9.2). Not in an enemy's CR, not if the marker is not yours, not if that marker was already used this TP.
- M-5.4 **Razor Wire.** Exposed and Obstructing terrain. Set up wholly within your territory, on the floor, more than 2" from other equipment terrain features, access points and Accessible terrain. Obstructing: when an operative crosses over it within 1" of it, that crossing costs an additional 1".
- M-5.5 **Utility Grenades.** Pick two grenades when selecting: 2 smoke, 2 stun, or 1 and 1. Each pick is one unique action your team may perform in total that many times in the battle.
  - STUN GRENADE, 1 AP: pick an enemy visible to and within 6". That operative and every other operative within 1" of it takes a stun test: D6, on 3+ its APL is reduced by 1 until the end of its next activation. Not in an enemy's CR, not once the team's uses are spent.
  - SMOKE GRENADE, 1 AP: place a Smoke marker within 6" of the operative, visible to it or on Vantage terrain of a feature visible to it. It makes a smoke area extending 1" horizontally from the marker with unlimited height above it. An operative wholly in smoke is obscured to operatives more than 2" away, and vice versa. A target wholly in smoke vs a weapon with Piercing 2 or Piercing Crits 2 treats it as Piercing 1 or Piercing Crits 1 unless shooter and target are within 2" of each other. In the next TP's Ready step, roll D3; remove the marker after that many activations (both players' activations, counteractions excluded) have completed in that TP, or at that TP's end. Not in an enemy's CR, not once uses are spent.
  - RULING: smoke obscuring is applied in addition to terrain and is not subject to the cover/obscured same-feature choice because smoke is not terrain. Status Unsourced.
- M-5.6 **Explosive Grenades.** Pick two: 2 frag, 2 krak, or 1 and 1. Each is a ranged weapon any operative may use, with team-wide limits equal to the number picked. Frag grenade: Atk 4, Hit 4+, Dmg 2/4, Range 6", Blast 2", Saturate. Krak grenade: Atk 4, Hit 4+, Dmg 4/5, Range 6", Piercing 1, Saturate.
- M-5.7 **Light Barricades (2).** Light terrain; the feet are Insignificant and Exposed. Set up wholly within your territory, on the floor, more than 2" from other equipment terrain features, access points and Accessible terrain.
- M-5.8 **Heavy Barricade (1).** Heavy terrain. Set up wholly within 4" of your drop zone, on the floor, more than 2" from other equipment terrain features, access points and Accessible terrain.
- M-5.9 **Ladders (2).** Insignificant and Exposed. Set up wholly within your territory, upright against terrain at least 2" tall, more than 2" from other equipment terrain features, more than 1" from doors and access points. An operative may move through a ladder as if absent but not finish on it, or climb it. Once per action, when climbing the feature the ladder is against with the ladder in the operative's CR throughout that whole climb, the vertical distance of that climb is 1" (then the 2" minimum in R-12.2 does not apply to it). A further climb in the same action is costed normally.
- M-5.10 **Portable Barricade (1).** Light, Protective and Portable; the feet are Insignificant and Exposed. Set up wholly within your territory, on the floor, more than 2" from other equipment terrain features, access points and Accessible terrain. Protective: while an operative is in cover from it, its Save is improved by 1 (best 2+). Portable: it gives cover only to an operative connected to it, and only if its shield is intervening. Unique action MOVE WITH BARRICADE, 1 AP, for an operative connected to the inside: treated as Reposition, moving at most Move minus 2", no climb, drop or jump, no remove-and-reset-up team rules; remove the barricade first, then after the move set it up connected again, but not within 2" of other equipment terrain features, access points or Accessible terrain (if impossible it is not set up). Not in an enemy's CR, not with Fall Back or Charge.
- M-5.11 **Breaching Charge.** Once per battle, when a friendly operative performs a Breach action, it costs 1 less AP (minimum 1) as if the operative's card had a breach marker. RULING: v1 does not offer this option; the only Breach action is the Breacha Boy's, which already costs 1 AP and cannot be reduced below 1. Status Unsourced.
- M-5.12 Faction equipment (13-teams.md) counts towards the four-option limit.

## 6. Approved Ops (known by name only)

- M-6.1 The Approved Ops 2025 card text (crit op cards, tac op cards) is not in our sources. Names of the nine crit ops: 1 Secure, 2 Loot, 3 Transmission, 4 Orb, 5 Stake Claim, 6 Energy Cells, 7 Download, 8 Data, 9 Reboot. The 2024 pack also had Power Surge as a crit op. Secure, Loot and Transmission are fully known (section 3). Stake Claim and Energy Cells are partially quoted in the errata log (not enough for implementation).
- M-6.2 Tac ops are **out of scope for v1**. Archetypes are named so data is ready: Angels of Death are SECURITY and SEEK & DESTROY; Kommandos are INFILTRATION and SEEK & DESTROY. Tac op names seen only in errata fragments: Dominate, Sweep & Clear (Seek & Destroy), Flank, Retrieval (Recon), Martyrs, Envoy (Security), Plant Beacons, Confirm Kill, Implant, Storm Objective, Rout, Steal Intelligence.
- M-6.3 The 20 VP total in the project primer is unverified; Preliminary Ops caps are those above (kill op 6, crit op as listed).
- M-6.4 Gap summary: kill grade table, map 1 and 2 pictures, Approved Ops card text.

## Resolved from the source images (2026-10-17, session read `docs/sources/wahapedia-KillGrade.png`, `wahapedia-PreliminaryOps1_.png`, `wahapedia-PreliminaryOps2_.png`)

### Kill op grade table (authoritative; replaces the provisional formula in M-2)
Thresholds = enemy operatives incapacitated to reach each grade, by the enemy's starting number of (non-Expendable) operatives. Status Confirmed.

| Starting operatives | Grade 1 | Grade 2 | Grade 3 | Grade 4 | Grade 5 |
|---|---|---|---|---|---|
| 5 | 1 | 2 | 3 | 4 | 5 |
| 6 | 1 | 2 | 4 | 5 | 6 |
| 7 | 1 | 3 | 4 | 6 | 7 |
| 8 | 2 | 3 | 5 | 6 | 8 |
| 9 | 2 | 4 | 5 | 7 | 9 |
| 10 | 2 | 4 | 6 | 8 | 10 |
| 11 | 2 | 4 | 7 | 9 | 11 |
| 12 | 2 | 5 | 7 | 10 | 12 |
| 13 | 3 | 5 | 8 | 10 | 13 |
| 14 | 3 | 6 | 8 | 11 | 14 |

RULING: starting counts below 5 or above 14 clamp to the nearest row. Status Unsourced.

### Preliminary Ops maps (authoritative; replaces the geometry RULINGs in M-1.2 / M-1.5 and R-1)
- **Map 1:** the players' killzone edges are the two **short (22") edges**. Each drop zone is the strip **6" deep** from that player's edge, full width. The centreline is the line x = 0 (parallel to the short edges, through the centre); each territory is the half of the board on the player's side of it. The centre point is marked.
- **Map 2:** the players' killzone edges are the two **long (30") edges**. Each drop zone is the strip **3" deep** from that player's edge, full width. The centreline is z = 0 (parallel to the long edges); territories are the halves on each side.
- Both maps have no printed terrain; terrain comes from the killzone layout chosen.
- Engine convention: seat A owns the edge at negative x (map 1) / negative z (map 2); the map id is part of the mission setup and the drop zones/territories come from the data file, never hard-coded.
