# 14 - Golden examples (forced dice)

Four worked sequences with every intermediate number, intended to become engine tests (`GOLD-1` to `GOLD-4`). Dice are supplied as a forced D6 stream consumed in the stated order (attack dice, then defence dice; re-rolls are consumed when the re-roll is made). Rule references are to `10-rules-core.md` and team data to `13-teams.md`. Defender and attacker choices that the rules leave open are stated; tests should pin them.

## GOLD-1: Shoot against a target in cover, one crit retained

Setup. Active operative: Intercessor Warrior (Angels of Death), bolt rifle: Atk 4, Hit 3+, Dmg 3/4, Piercing Crits 1. Target: Kommando Boy, Save 5+, 10 wounds, Engage order, visible, 7" away, intervening terrain within the Boy's CR, not obscured. No ploys, no doctrine, Boy not injured.

Dice stream: attack `6, 4, 3, 2`; defence `5`.

1. Valid target: Engage plus visible, no friendly in its CR, distance 7" is above 2" so cover applies (R-5.2, R-5.4).
2. Attack roll against 3+: 6 = crit; 4 = normal; 3 = normal; 2 = fail (discarded). Retained: 1 crit, 2 normal.
3. Piercing Crits 1 is active because a crit was retained (R-10.12). Defender collects 3 - 1 = 2 defence dice.
4. Cover save (R-5.10): one of the 2 dice is retained as a normal success without rolling. The other die is rolled: `5`, which meets 5+, a normal success.
5. Defence successes: 2 normals. Blocking options: (a) two normals block the crit, leaving two normal attack dice for 3 + 3 = 6 damage; (b) each normal blocks one attack normal, leaving the crit for 4 damage. The defender picks (b) (minimum damage).
6. Unblocked: 1 crit, which inflicts Critical Dmg 4.
7. Result: Boy wounds 10 - 4 = 6. Wounded, not injured (6 is not fewer than 5). No incapacitation.

Assertions: attackSuccesses = {crit 1, normal 2}; defenceDiceCollected = 2; coverSaveRetained = 1; damageInflicted = 4 under optimal blocking; wounds = 6.

## GOLD-2: Shoot against an obscured target

Setup. Active operative: Intercessor Gunner, bolt rifle (as GOLD-1). Target: Kommando Boy, 10 wounds, Engage, visible at 9". Intervening Heavy terrain more than 1" from both operatives, and the Boy is not in cover from that same feature, so there is no cover/obscured conflict (R-5.5). Not in cover from any other feature. The Boy is obscured and has no cover save.

Dice stream: attack `6, 6, 4, 1`; defence `5, 3, 2`.

1. Attack roll against 3+: 6 crit, 6 crit, 4 normal, 1 fail.
2. Obscured (R-5.8): both crits are retained as normal successes and cannot be crits; then the attacker discards one success of their choice. Retained: 2 normals (3 successes minus 1).
3. No retained crit, so Piercing Crits 1 does not take effect. Defender collects 3 dice; no cover save.
4. Defence roll against 5+: 5 normal success; 3 fail; 2 fail. One normal success.
5. The normal defence success blocks one normal attack die. Unblocked: 1 normal, Normal Dmg 3.
6. Result: Boy wounds 10 - 3 = 7.

Contrast (informational, not a forced test): the same attack dice with no obscuring retain 2 crits and 1 normal, trigger Piercing Crits 1 (2 defence dice), and deal 4 + 4 = 8 if only one normal defence success were rolled to block the normal.

Assertions: retainedAfterObscured = {crit 0, normal 2}; piercingCritsApplied = false; defenceDiceCollected = 3; damageInflicted = 3; wounds = 7.

Variant pin: if the Heavy terrain were within 1" of either operative, the Boy would not be obscured and the crits would stay crits.

## GOLD-3: Fight with an assist and alternating block and strike

Setup. Attacker (active): Assault Intercessor Warrior, chainsword: Atk 5, Hit 3+, Dmg 4/5, 14 wounds. A friendly Assault Intercessor Grenadier is in the CR of the target and not in the CR of any other enemy, so it assists: attacker Hit improves by 1 to 2+ (R-6.3). Defender (retaliating): Kommando Boy, Choppa: Atk 4, Hit 3+, Dmg 4/5, 10 wounds, no assisters. Neither player has re-rolls or ploys and both pass in the re-roll window.

Dice stream: attacker `6, 5, 3, 2, 1`; defender `6, 4, 3, 2`.

1. Attacker rolls 5 dice against 2+: 6 crit; 5, 3, 2 normal; 1 fail. Retained: 1 crit and 3 normals.
2. Defender rolls 4 dice against 3+: 6 crit; 4 and 3 normal; 2 fail. Retained: 1 crit and 2 normals.
3. Alternate resolution, attacker first (R-6.5):
   - A1: attacker strikes with the crit, Critical Dmg 5. Boy 10 - 5 = 5. Attacker unresolved: N, N, N.
   - D1: defender blocks with the crit against one attacker normal. Both discarded. Attacker unresolved: N, N. Defender unresolved: N, N.
   - A2: attacker strikes with a normal, Normal Dmg 4. Boy 5 - 4 = 1. Attacker unresolved: N.
   - D2: defender blocks that last attacker normal with a normal. Attacker unresolved: none. Defender unresolved: N.
   - The attacker has no unresolved dice, so the defender resolves all remaining (R-6.6): D3 strikes with the normal, Normal Dmg 4. Warrior 14 - 4 = 10.
4. Neither fighter is incapacitated; the sequence ends when all dice are used.
5. Post-action status: Boy 1 wound is injured (fewer than 5). Warrior 10 wounds is wounded, not injured (10 is not fewer than 7).

Assertions: attackerRetained = {crit 1, normal 3}; defenderRetained = {crit 1, normal 2}; resolutionOrder = A strike crit, D block crit, A strike normal, D block normal, D strike normal; final wounds Boy 1, Warrior 10.

## GOLD-4: Charge and Fight where the target is incapacitated mid-sequence

Setup. Active operative: Kommando Slasha Boy (APL 2, Move 6", 10 wounds) with a Conceal order. Target: Angels of Death Eliminator Sniper, 12 starting wounds but only 5 remaining (it has taken 7 earlier), so it is injured (5 is fewer than 6): its Hit is worsened by 1. Both visible; the Slasha Boy is not in any enemy CR. Throat Slittas allows Charge while Conceal (T-KOM.19). No ploys, no re-rolls except Ceaseless.

Dice stream (consumed in order): attacker `5, 4, 3, 1`; defender `6, 4, 2, 1`; Ceaseless re-roll `2`.

Action 1: Charge, 1 AP (R-4.4).
1. Charge allows Move + 2 = 8". The Slasha Boy moves in two straight-line increments of 4.2" and 1.6". Rounded up they cost 5" and 2", total 7", at most 8" (R-4.1 increment rounding).
2. The move ends within the Sniper's CR (0.9" from its base). The Sniper is a lone enemy with no other friendly in its CR, so after entering its CR the Boy never left it. AP spent: 1.

Action 2: Fight, 1 AP (R-4.8). AP spent: 2 of 2.
3. Attacker selects the Sniper. Attacker weapon: twin choppas Atk 4, Hit 3+, Dmg 4/5, Ceaseless, Lethal 5+. Defender weapon: fists Atk 4, Hit 3+ worsened to 4+ by injury, Dmg 3/4. No assists.
4. Both roll: attacker `5, 4, 3, 1`; defender `6, 4, 2, 1`.
5. Ceaseless: the attacker picks result 1 and re-rolls that one die: `2`. Attacker final dice: 5, 4, 3, 2.
6. Attacker retention against 3+: 5 is a success and meets Lethal 5+, so it is a crit; 4 normal; 3 normal; 2 fail. Retained: 1 crit, 2 normals.
7. Defender retention against 4+: 6 crit; 4 normal; 2 fail; 1 fail. Retained: 1 crit, 1 normal.
8. Resolve, attacker first: A1 strikes with the crit, Critical Dmg 5. Sniper 5 - 5 = 0 wounds, incapacitated.
9. The sequence ends immediately (R-6.7). All unresolved dice are discarded: attacker N, N; defender crit, normal. The Sniper is removed once the action finishes. The Slasha Boy took no damage.
10. End state: Slasha Boy 10 wounds, order still Conceal, 2 of 2 AP spent, Sniper removed.

Assertions: chargeCost = 7 inches for two increments; fightIncapacitatedAfter = first resolved die; defenderDiceResolved = 0; slashaWounds = 10; sniperRemoved = true.

Pin for the alternative attacker choice: striking with a normal at A1 would deal 4 and leave the Sniper on 1 wound; the sequence would then continue with D1, so the AI should prefer the crit.
