# 12 - Rules test checklist

Engine tests are named by these IDs (for example `it('SHOOT-004 ...')`). Format: `ID | rule ref | expected behaviour`. Rule refs: R-x.y = `10-rules-core.md`, M-x.y = `11-missions.md`, T-AOD.n / T-KOM.n = `13-teams.md`, GOLD-n = `14-golden-examples.md`. Every test pins its dice with a forced stream unless it checks pure legality.

## SEQ - game sequence

SEQ-001 | R-1.2 | Setup roll-off winner decides setup initiative; drop zones are chosen alternately starting with that player and must differ.
SEQ-002 | R-1.3 | Selecting operatives gives each player 2 CP; a fifth equipment option, or a repeated option, is rejected.
SEQ-003 | R-1.5 | A 6-operative roster sets up in batches 2/2/2 and a 10-operative roster 4/4/2, alternating from the setup-initiative player.
SEQ-004 | R-1.5 | An operative set up outside the owner's drop zone is rejected; a set-up operative has a Conceal order.
SEQ-005 | R-2.1 | A tied Initiative roll is decided by the player who did not previously hold initiative (TP1: the one who lacked it in setup).
SEQ-006 | R-2.2 | CP: TP1 both +1; TP2 onwards the non-initiative player +2 and the initiative player +1; CP carry over.
SEQ-007 | R-2.3 | The Gambit step alternates from the initiative player and ends only after two consecutive passes; a pass does not bar a later gambit.
SEQ-008 | R-2.4 | A STRATEGIC GAMBIT cannot be used twice by one player in one TP, and cannot be used with 0 CP.
SEQ-009 | R-1.7 | The battle ends after TP4; a player with no operatives left does not stop the other from playing remaining TPs; most VP wins, equal VP draws.
SEQ-010 | R-2.6 | Guard status and transmitting status end at the start of the next TP, before the Strategy phase.

## ORD - orders, activation, counteract

ORD-001 | R-3.1 | Activations alternate starting with the initiative player; the same operative cannot activate twice in a TP.
ORD-002 | R-3.4 | A Conceal operative cannot Shoot (except a Silent weapon) or Charge, but can Fight and Reposition.
ORD-003 | R-3.4, R-3.5 | A Conceal operative cannot counteract; an Engage operative can.
ORD-004 | R-3.6 | AP spent in an activation never exceeds current APL (an APL cut mid-activation caps remaining AP), and an action's cost never drops below 0.
ORD-005 | R-3.7 | A second Shoot (or Reposition etc.) in the same activation is rejected unless a rule grants it.
ORD-006 | R-3.8 | An action that cannot be completed is cancelled: state is restored and no AP is spent.
ORD-007 | R-3.9 | A free action costs 0 AP and still counts as performed; a free action outside an activation does not block the same action later.
ORD-008 | R-3.11 | Counteract is offered only when every friendly operative is expended and the opponent still has a ready one.
ORD-009 | R-3.12 | A counteraction must be a 1 AP action, never Guard, once per operative per TP, Engage order only, and action restrictions do not apply.
ORD-010 | R-3.12 | A counteraction cannot move more than 2" counted with Accessible +1" and drop costs; set-up by a rule must be wholly within 2".
ORD-011 | R-3.2 | A player with no ready operative on their turn may counteract or skip; activation then returns to the opponent; the phase ends when neither side has a ready operative.
ORD-012 | R-3.14 | Command Re-roll costs 1 CP and re-rolls one die once; it can be used repeatedly in a TP while CP remain.
ORD-013 | R-9.6 | APL modifiers net out and never exceed 1 above or below printed APL; Move never drops below 4".

## MOVE - movement, markers, Guard

MOVE-001 | R-4.1 | Reposition costs the sum of increments each rounded up (0.5" + 2.75" cost 4") and must not exceed Move.
MOVE-002 | R-4.1 | Reposition is rejected while in an enemy CR and after Fall Back or Charge in the same activation.
MOVE-003 | R-4.1 | Reposition may pass through an enemy CR only if a friendly operative is already in it, and may not end there.
MOVE-004 | R-4.2 | Dash moves at most 3", cannot climb, may drop and jump, and is rejected after Charge.
MOVE-005 | R-4.3 | Fall Back needs an enemy in CR at the start, must end outside every enemy CR, and is rejected after Reposition or Charge.
MOVE-006 | R-4.4 | Charge moves up to Move + 2" and ends in an enemy CR; rejected with Conceal, from inside an enemy CR, or after Reposition, Dash or Fall Back.
MOVE-007 | R-4.4 | A Charge entering the CR of a lone enemy cannot leave that CR later in the same move.
MOVE-008 | R-7.3 | Injured operatives (fewer than half wounds) lose 2" of Move with a 4" floor.
MOVE-009 | R-4.5, R-4.6 | Pick Up Marker and Place Marker enforce their conditions; an incapacitated carrier places the marker for 0 AP first.
MOVE-010 | R-4.9 | Guard is rejected with Conceal or in an enemy CR, and ends on any action, move, set-up, order change, unused interrupt chance, or next TP.
MOVE-011 | R-4.10 | A guard interrupt happens once per enemy activation after an action, gives a free Fight or Shoot with any target, and bars that operative from counteracting.
MOVE-012 | R-4.11 | A point-blank shot targets an enemy in the guard's CR, worsens Hit by 1, and the guard cannot retaliate until the end of the interrupted activation.
MOVE-013 | R-4.9, R-10.9 | Heavy weapons do not prevent Guard; an operative that moved can still go on guard and use a Heavy weapon at an interrupt.

## SHOOT - shoot sequence

SHOOT-001 | R-5.2 | An Engage target needs only visibility; a Conceal target must also not be in cover.
SHOOT-002 | R-5.2 | A target with a friendly operative in its CR is not selectable.
SHOOT-003 | R-4.7 | Shoot is rejected while in an enemy CR.
SHOOT-004 | R-5.6 | With Hit 3+: 6 is a crit, 3 to 5 normal, 2 and 1 fail.
SHOOT-005 | R-5.9, R-5.11 | The defender collects 3 dice; results at or above Save succeed, 6 is a crit, 1 fails.
SHOOT-006 | R-5.4 | In cover requires intervening terrain within the target's CR and the target more than 2" from the shooter.
SHOOT-007 | R-5.10 | Cover save retains one normal success without rolling, so only 2 defence dice are rolled; Saturate removes it.
SHOOT-008 | R-5.5 | Obscured needs intervening Heavy terrain; Heavy parts within 1" of either operative are ignored, parts beyond 1" still obscure.
SHOOT-009 | R-5.8 | Obscured turns retained crits into normals (unchangeable) and discards one success; no crit-triggered rule fires.
SHOOT-010 | R-5.5 | If one feature would give both cover and obscured the defender chooses one for the sequence; separate features can give both.
SHOOT-011 | R-5.12 | A normal blocks a normal, two normals block a crit, a crit blocks a normal or a crit.
SHOOT-012 | R-5.13 | Each unblocked normal deals Normal Dmg and each unblocked crit deals Critical Dmg, resolved together.
SHOOT-013 | R-5.14 | Incapacitated operatives stay until the whole action, including every Blast or Torrent sequence, has finished.
SHOOT-014 | R-5.7 | A die retained by Accurate or Punishing cannot be re-retained by Rending; Severe may still change it.
SHOOT-015 | R-5.10, R-10.12 | Piercing 1 against a target in cover leaves 2 dice: 1 cover save plus 1 rolled.
SHOOT-016 | GOLD-1 | The forced-dice shoot against cover with one crit yields 4 damage under optimal blocking and 6 wounds left.
SHOOT-017 | GOLD-2 | The forced-dice shoot against an obscured target yields 3 damage and 7 wounds left.

## FIGHT - fight sequence

FIGHT-001 | R-4.8, R-6.1 | Fight is rejected with no enemy in CR; the chosen enemy retaliates with a melee weapon.
FIGHT-002 | R-6.3 | Both sides roll simultaneously against their own Hit; no cover or obscured applies.
FIGHT-003 | R-6.3 | Each assisting friendly (in the enemy's CR, not in another enemy's CR) improves that side's Hit by 1; Siege Specialist denies assists.
FIGHT-004 | R-6.5 | Resolution alternates one die at a time starting with the attacker; each die strikes or blocks.
FIGHT-005 | R-6.5 | Block allowed: normal on normal, crit on normal or crit; a block with no enemy unresolved die is still allowed and wasted.
FIGHT-006 | R-6.6 | When one side has no unresolved dice, the other resolves all its remaining dice.
FIGHT-007 | R-6.7 | If a fighter is incapacitated the sequence ends at once and unresolved dice are discarded.
FIGHT-008 | R-6.4, R-9.3 | Fight re-rolls alternate between players starting with the initiative player until both pass.
FIGHT-009 | GOLD-3 | The forced-dice fight with assist ends Boy on 1 wound and Warrior on 10.
FIGHT-010 | GOLD-4 | The forced-dice Charge then Fight incapacitates the Sniper with the first strike.

## WPN - weapon rules

WPN-001 | R-10.1 | Accurate x retains x dice as normal successes unrolled; they cannot be re-rolled.
WPN-002 | R-10.1, R-11.5 | Two Accurate sources combine into Accurate 2.
WPN-003 | R-10.2 | Balanced re-rolls one attack die once.
WPN-004 | R-10.3 | Blast shoots primary then every visible operative within x of it, friendly included, regardless of Conceal.
WPN-005 | R-10.3 | Blast secondaries are in cover and obscured exactly as the primary was, including a Vantage-improved cover save.
WPN-006 | R-10.4 | Brutal: the defender can block only with crits.
WPN-007 | R-10.5 | Ceaseless re-rolls all dice showing the chosen result, only once each.
WPN-008 | R-10.6 | Devastating 3 deals 3 per retained crit immediately and the crit still resolves later.
WPN-009 | R-10.6 | A distance Devastating also damages every operative visible to and within that distance of the target.
WPN-010 | R-10.9 | Heavy bars use after moving and moving after use, in activations and counteractions.
WPN-011 | R-10.9 | Heavy (Dash only) allows Dash but no other move.
WPN-012 | R-10.7, R-10.8 | Hot rolls one D6 after the whole action; a result below the current Hit stat deals twice the result to the user.
WPN-013 | R-10.10 | Lethal 5+ turns a 5 into a crit when the die already succeeds; it cannot turn a failed die into a crit.
WPN-014 | R-10.11 | Limited 1 removes the weapon after one use; a Blast action counts as one use.
WPN-015 | R-10.12 | Piercing 1 reduces defence dice to 2, never below 0.
WPN-016 | R-10.12 | Piercing Crits 1 reduces dice only if a crit was retained.
WPN-017 | R-10.13 | Punishing turns one failed die into a normal success only when a crit is retained.
WPN-018 | R-10.14 | Range 8" excludes targets farther than 8" from the active operative.
WPN-019 | R-10.15 | Relentless can re-roll any dice, one re-roll per die.
WPN-020 | R-10.16 | Rending turns one rolled normal success into a crit only when a crit is retained.
WPN-021 | R-10.17 | Saturate removes the defender's cover save but the target is still in cover for target selection.
WPN-022 | R-10.18 | Seek lets a Conceal target in cover be selected but keeps its cover save; Seek Light ignores only Light terrain.
WPN-023 | R-10.19 | Severe converts one normal to a crit only if no crit was retained; Punishing and Rending do not trigger from it.
WPN-024 | R-10.20 | Shock: the first striking crit discards one enemy unresolved normal (or a crit if none).
WPN-025 | R-10.21 | Silent permits Shoot under Conceal.
WPN-026 | R-10.22 | Stun reduces the defender's APL by 1 until the end of its next activation when a crit is retained, subject to the +/-1 cap.
WPN-027 | R-10.23 | Torrent picks extra valid targets within x with no friendly in their CR, each with its own cover.
WPN-028 | R-10.23 | Torrent 0" has no secondaries but still counts as Torrent for rules such as Condensed Stronghold.

## TERR - terrain, cover, climbing

TERR-001 | R-11.1, R-11.2 | Heavy can obscure; Light only gives cover.
TERR-002 | R-11.3 | Blocking terrain stops visibility and counts as intervening for cover and obscured.
TERR-003 | R-11.4 | Barred terrain blocks visibility unless the viewer or target is horizontally within 1" of it.
TERR-004 | R-11.5(a) | A Vantage shooter gains Accurate 1 against an Engage target 2" lower and Accurate 2 at 4" lower.
TERR-005 | R-11.5(b) | A Conceal target 2" lower cannot use Light terrain for cover vs a Vantage shooter, keeps its cover save, and the defender may retain it as a crit or add one more.
TERR-006 | R-11.5(c) | For obscured, Heavy terrain connected to the shooter's or target's Vantage is ignored; standing on a Volkus fire step does not ignore the stronghold.
TERR-007 | R-11.6 | Moving through Accessible terrain costs +1".
TERR-008 | R-11.7 | Insignificant terrain does not count as a climb or a drop.
TERR-009 | R-11.8 | Exposed terrain is never intervening for cover or obscured.
TERR-010 | R-11.9 | Round bases of 50mm or less (or 60x35 oval) pass under Ceiling terrain.
TERR-011 | R-12.2 | Climbing needs terrain within 1" horizontally and 3" vertically; each climb costs at least 2"; a move that cannot end in a placeable spot (mid-climb) is rejected before it begins.
TERR-012 | R-12.3 | Only the first 2" of drop per action is free in total, not per drop.
TERR-013 | R-12.4 | A jump from Vantage over 2" high covers up to 4" horizontally in one increment, then drops or climbs.
TERR-014 | R-13.3 | Blast, Torrent and distance Devastating gain Lethal 5+ when the target is wholly in a stronghold on the floor or a fire step.

## MARK - markers and control

MARK-001 | R-8.4 | Objective markers have a 40mm diameter; other markers 20mm.
MARK-002 | R-8.5 | An operative contests a marker only if the marker is in its CR (visible and within 1").
MARK-003 | R-8.6 | A side controls a marker only if its contesting total APL is strictly greater; ties leave no controller.
MARK-004 | R-8.6 | Control cannot change in the middle of an action.
MARK-005 | R-8.5 | A carrier alone contests and controls its marker.
MARK-006 | R-8.3 | Within uses any part of the base, wholly within uses the whole base; measurement is from base edges.

## PLOY - ploys and CP

PLOY-001 | R-3.14 | Command Re-roll only after dice are rolled, one die, never a die already re-rolled.
PLOY-002 | R-3.13 | A non-Command-Re-roll firefight ploy is once per player per TP.
PLOY-003 | R-2.7 | A firefight ploy cannot be played during the Strategy phase.
PLOY-004 | R-2.4 | Ploys cost 1 CP unless stated; a ploy with 0 CP available is rejected.

## MISSION - Preliminary Ops, equipment

MISSION-001 | M-1.2 | Map selection: D6 1-3 gives map 1, 4-6 gives map 2.
MISSION-002 | M-1.3 | Objective placement: the centre marker is on the centreline more than 2" from neutral edges; each player's marker is in a different territory, within 3" of the centreline, more than 5" from other markers.
MISSION-003 | M-1.4 | Crit op roll D3: 1 Secure, 2 Loot, 3 Transmission.
MISSION-004 | M-2.1 | Kill grade rises with incapacitations up to 5; each new grade gives 1 VP; a higher grade at the end of TP4 gives 1 VP.
MISSION-005 | M-2.3 | With 8 starting enemy operatives, grade 1 needs 2 incapacitated and grade 2 needs 3 (data-driven table).
MISSION-006 | M-2.2, T-KOM.10 | A Bomb Squig is excluded from the opponent's starting count and incapacitation count.
MISSION-007 | M-3.1, M-3.2 | Secure is rejected in TP1 or in an enemy CR; scoring at end of TP2 to TP4 is 1 for any secured marker plus 1 for more secured markers.
MISSION-008 | M-3.3, M-3.4 | Loot is rejected if that marker was already looted this TP; VP is capped at 2 per TP.
MISSION-009 | M-3.5, M-3.6 | A transmitting marker stops before the next TP; VP is 1 for controlling any transmitting marker plus 1 for controlling more than the enemy.
MISSION-010 | M-4.1 | No crit op action or crit op VP in TP1.
MISSION-011 | M-5.2 | A Mines marker triggers on the first operative CR contact: removed and D3+3 damage dealt.
MISSION-012 | M-5.5 | Stun Grenade: D6 3+ for the target and every operative within 1" of it gives APL -1; smoke obscures operatives wholly inside it to those more than 2" away and lasts a D3 count of activations.
MISSION-013 | M-5.6 | Frag and krak grenades are limited by the number picked and use the printed profiles.

## TEAM-AOD - Angels of Death

TEAM-AOD-001 | T-AOD.1 to T-AOD.3 | Roster validation: exactly 1 leader and 5 others; only WARRIOR operatives may repeat; other operatives at most once; loadout options per operative enforced.
TEAM-AOD-002 | T-AOD.15 | Astartes allows two Shoot or two Fight actions; two Shoots need one bolt weapon; both with bolt sniper rifle or heavy bolter cost 1 extra AP.
TEAM-AOD-003 | T-AOD.15 | Angel of Death operatives can counteract with a Conceal order.
TEAM-AOD-004 | T-AOD.16 | Combat Doctrine grants Balanced under the chosen doctrine's condition (Devastator more than 6", Tactical within 6", Assault fighting or retaliating); Adjust Doctrine changes it.
TEAM-AOD-005 | T-AOD.16 | Each of the eight Chapter Tactics applies its exact effect (Aggressive Rending, Dueller blocking, Resolute APL ignore, Stealthy, Mobile, Hardy, Sharpshooter, Siege Specialist).
TEAM-AOD-006 | T-AOD.10, T-AOD.11 | Heroic Leader and Doctrine Warfare discounts are each limited as written (once per TP, once per battle).
TEAM-AOD-007 | T-AOD.8 | Iron Halo ignores one Normal Dmg hit once per battle.
TEAM-AOD-008 | T-AOD.13, T-AOD.14 | Eliminator Camo Cloak ignores Saturate; OPTICS prevents obscured for its shots until its next activation.
TEAM-AOD-009 | T-AOD.9 | Grenadier uses frag and krak with Hit improved by 1 without spending the team's grenade uses.
TEAM-AOD-010 | T-AOD stat tables | Every operative stat, base size and weapon profile matches section 1.2 and 1.3.

## TEAM-KOM - Kommandos

TEAM-KOM-001 | T-KOM.1, T-KOM.2 | Roster validation: 1 Boss Nob plus 9 selections; only BOY repeats; Squig and Grot half-selection counting.
TEAM-KOM-002 | T-KOM.19 | Throat Slittas allows Charge under Conceal for every Kommando except the Squig; order stays Conceal.
TEAM-KOM-003 | T-KOM.8 | Bomb Squig explosives can Shoot in an enemy CR with the Squig as primary target; Boom! rolls once or twice for a 4+ free Shoot on incapacitation.
TEAM-KOM-004 | T-KOM.9, T-KOM.10 | Squig cannot take Conceal or non-listed actions and is Expendable.
TEAM-KOM-005 | T-KOM.16 | Grot cannot have Engage and cannot be targeted while in cover unless within 2".
TEAM-KOM-006 | T-KOM.17 | Grappling Hook is a Reposition-class action with the 1" landing and 2" counteract limits.
TEAM-KOM-007 | T-KOM.12 | Breach marker makes thin terrain parts Accessible near it and is a 0 AP add-on inside Charge or Reposition.
TEAM-KOM-008 | T-KOM.13 | Dakka Dash performs a free Dash and a free Shoot with a dakka shoota in either order.
TEAM-KOM-009 | T-KOM.7, T-KOM.15, M-5.1 | Get It Dun! and Listen In add 1 APL (capped) and gain 3" range when the Comms Device marker is controlled.
TEAM-KOM-010 | T-KOM strategy and firefight ploys | Dakka, Waaagh, Skulk About, Ssssshhhh, Just a Scratch, Krump 'Em, Kunnin' but Brutal and Shake It Off behave as written.
TEAM-KOM-011 | 13-teams.md section 2.3 | Concealed Position profile is usable only on the Snipa Boy's first Shoot action of the battle.
TEAM-KOM-012 | T-KOM stat tables | Every operative stat, base size and weapon profile matches sections 2.2 and 2.3.

## SIM - simulation invariants

SIM-001 | CLAUDE.md contract | A pending decision's legalActions list is never empty.
SIM-002 | CLAUDE.md contract | Illegal input returns a Rejection and never throws.
SIM-003 | R-1.7 | Every simulated game ends within four TPs and never loops.
SIM-004 | R-7.2 | No operative with 0 or fewer wounds remains in the killzone after an action finishes.
SIM-005 | R-3.6, R-2.4 | AP spent never exceeds APL (with R-3.15 exception) and CP never go negative.
SIM-006 | R-9.2 | The same seed and the same action list reproduce the same state and event log.
SIM-007 | R-8.1 | After every action no two bases overlap and none lies outside the killzone or inside terrain.
