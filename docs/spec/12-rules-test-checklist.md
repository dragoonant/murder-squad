# 12 - Rules test checklist

Engine tests are named by these IDs (for example `it('SHOOT-004 ...')`). Format: `ID | rule ref | expected behaviour`. Rule refs: R-x.y = `10-rules-core.md`, M-x.y = `11-missions.md`, T-AOD.n / T-KOM.n / T-PF.n / T-HIE.n / T-PM.n / T-WYR.n = `13-teams.md`, GOLD-n = `14-golden-examples.md`. Every test pins its dice with a forced stream unless it checks pure legality.

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
MISSION-013b | M-5.6 | A real Shoot with a team-limited grenade counts the use when the weapon is picked and strips the spent grenade from the team after the action.

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

## GEN - generic team capabilities (M9 engine prep)

GEN-001 | tokens.ts | Tokens stack per owner up to a cap, emit TokenChanged, can be removed, and are visible to both seats.
GEN-002 | tokens.ts | A token that lasts until its source next activates is removed when that operative activates.
GEN-003 | effects.regainWounds | Regained wounds never exceed starting wounds and clear the injured state.
GEN-004 | hooks activation.start | The hook runs after the order is chosen; damage that incapacitates there ends the activation.
GEN-005 | hooks turningPoint.start | The hook runs in the Ready step before CP are gained and operatives readied.
GEN-006 | team-rules.ts | A provider changes repeats, orders, counteract, forbidden actions and action costs.
GEN-007 | reserve.ts | An operative set aside at set-up (within the cap) stays out of the killzone, is readied, is visible in view, and can return.
GEN-008 | reserve.ts | An operative that never comes back is incapacitated and counts for the kill op.
GEN-009 | reserve.ts, M-2 | A removed operative that returns lowers the opponent's kill grade and takes back its VP.
GEN-010 | team-rules chainActivation | A chained activation makes the same seat activate a named operative next, once.
GEN-011 | team-rules gateActivation | A gate stops the picked operative this time and the seat picks another.
GEN-012 | team-rules reactions | The non-active player may react after an action; reacting or passing carries on the activation.
GEN-013 | firefight.startDelegatedAction | A delegated free action offers only allowed actions, caps its move and returns to the activation.
GEN-014 | firefight.startFreeAction | A free Charge can be capped and tied to one enemy control range.
GEN-015 | team-rules controlApl / controlTotal | Control providers change an operative's contribution and a side total without touching APL.
GEN-016 | team-rules moveDelta / injuredEquivalent | Move changes apply with the 4" floor; an injury-equivalent worsens Hit once and never stacks with injury.
GEN-017 | hooks modifyDamage | Dmg can change against one target only.
GEN-018 | hooks beforeIncapacitated, damage.inflicted | An incapacitation can be stopped; damage.inflicted reports wounds actually lost.
GEN-019 | team-rules rerollsBanned | A re-roll ban removes every re-roll option of a side, Command Re-roll included.
GEN-020 | team-rules fightResolveStart | Fight providers set an owed block-only resolution before the alternation and bar blocking for a seat.
GEN-021 | team-rules shootViewpoints | A shooter may use a viewpoint operative; the Shoot records it.
GEN-022 | team.json weights / caps | An entry can count as several selections and a group of entries can be capped.
GEN-023 | equipment grants.to | Granted weapons go only to the operatives the equipment data names.
GEN-024 | Operative.movedThisActivation / actionsThisTp | Moves add to the distance spent this activation; actions join the TP history.
GEN-025 | reserve.placementSpots | Placement spots are placeable, pass the rule's test and are capped.
GEN-026 | attack-common.redirectAttack | A Shoot target or fight opponent can be swapped, keeping a given cover verdict.
GEN-027 | team-rules moveSurcharge | A surcharge adds to a move's cost and can push it over its limit.
GEN-028 | team-rules actionForbidden | An action a team rule forbids cannot be taken as a free action either.
GEN-029 | markers.isMine, ignoresMine, equipment excludes | Equipment with the mines code is a mine; a rule can exempt operatives; excluded options are rejected together.
GEN-030 | team-rules stealthyCover | Stealthy-style cover sources from team rules add to the defender's level.
GEN-031 | team-rules shootViewpoints, shootAvailability | The Shoot action is available when only a team-rule viewpoint (Magnify) has a valid target.
GEN-032 | window firefight.activationEnded | The owner gets a ploy window at the end of an activation, before the operative is expended; nothing is asked without a usable ploy.
GEN-033 | window operative.incapacitated | An operative incapacitated by an attack gives its owner a ploy window before removal; code ploys without ploy handlers are not offered there.
GEN-034 | team-rules reactions (strategy) | A free move in the Strategy phase is a reaction point for the other seat; the gambit step and the free-move queue go on afterwards.
GEN-035 | abilities maxRepeats | A unique action is taken once per activation unless a team rule's maxRepeats allows more.
GEN-036 | windows shoot.beforeDefenceRerolls, fight.beforeRerolls | The attacker gets a ploy window on the fresh defence roll before any re-roll (both fighters on the fresh fight rolls).
GEN-037 | window firefight.start | The Firefight phase opens with a ploy window; strategy and firefight ploys may name it.
GEN-038 | team-rules reactions (interrupt) | A finished Guard interrupt is a reaction point for the interrupted seat; its activation goes on afterwards.
## TEAM-PF - Pathfinders

TEAM-PF-000 | registration | The team is registered with the engine and the data, is `playable`, and every code hook its data names is registered and fires in a real game (the scenarios in `tests/engine/teams/pathfinders.hooks.ts`).
TEAM-PF-001 | T-PF.1 to T-PF.3 | Roster validation: 1 Shas'ui plus 11 selections; MB3 counts as two; Shas'la unlimited; Weapons Expert at most two with its loadout option; every other entry at most once.
TEAM-PF-002 | T-PF.27, T-PF.29 | Markerlight adds one token to a visible enemy, caps at 4, persists across TPs; one token is removed once per enemy activation on Dash, Charge, Fall Back or Reposition, never in a counteraction.
TEAM-PF-003 | T-PF.28, T-PF.21 | Shoot and Markerlight in one activation must share the target (both orders); the MB3 is exempt; Guard shots are not linked.
TEAM-PF-004 | T-PF.30 | Token rows apply cumulatively: 1 Saturate and Balanced, 2 Hit +1 capped at 3+, 3 no obscured, 4 Seek Light (changes valid targets), 5 Seek; fusion and frag/krak grenades get nothing.
TEAM-PF-005 | T-PF.7, T-PF.8 | Art of War: each option once per battle; Mont'ka +1" Move; Kauyon free Markerlight only for Conceal-ordered operatives with the action; Blooded may swap options for its activation.
TEAM-PF-006 | T-PF.12, T-PF.20 | Drone whitelist enforced; Remote Pilot lets a drone do a forbidden action with a 2" move cap, repeatable but never the same drone-action pair twice per activation; drone control APL counts 1 lower.
TEAM-PF-007 | T-PF.14, T-PF.15 | Medic! saves a non-drone within 3" once per TP at 1 wound, free Dash into medic CR, both -1 APL, ends that operative's activation; blocked if the medic is a target or either is in enemy CR; Medikit heals 2D3 capped, not the Medic! target.
TEAM-PF-008 | T-PF.16 | Group Activation forces a second ready Shas'la activation, never a third.
TEAM-PF-009 | T-PF.37, T-PF.11, T-PF.22 | Saviour Protocols redirects to a drone within 3", ignores validity, cover/obscured capped by the original, no effect vs Blast/Torrent; 0 CP with Drone Controller or MV4.
TEAM-PF-010 | T-PF.38 | Point-Blank Fusillade: ranged weapon as melee, no blocking, Devastating/Piercing/Torrent off, resolve-first only when ready, Engage and pulse.
TEAM-PF-011 | T-PF.25, T-PF.26 | Grav-inhibitor adds 2" once to enemy non-Dash moves entering its 6" visible zone, ignoring Obstructing/Accessible extras; worsens enemy melee Hit by 1 within 6".
TEAM-PF-012 | T-PF.32, T-PF.36 | Suppressing Fire bans enemy attack re-rolls when the target is not the closest non-ignored valid target; Supporting Fire allows targets within 6" that have friendly Pathfinders in their CR.
TEAM-PF-013 | T-PF.39 to T-PF.42 | Equipment limits (TAO 1/TP, HIML 2/TP, Photon 1/TP, OSU 1/TP); Photon Grenade on 3+ gives Move -2" (floor 4") and no Dash; OSU picks any enemy, never combined with HIML or Analyse.
TEAM-PF-014 | T-PF.22, T-PF.24 | MV4 ignores Piercing and Piercing Crits and one Normal Dmg per TP; Pulse Accelerator gives pulse weapons within 3" Lethal 5+ and Severe until the drone's next activation or death.
TEAM-PF-015 | stat tables | Every operative stat, base size and weapon profile matches 3.2 and 3.3 (dart round 3/4, fusion grenade 4/3).
TEAM-PF-016 | T-PF.31, T-PF.35 | Recon Sweep (not in TP1, never the own edge, order chosen by the player, Dash refused unless it ends wholly within 6" of a non-own edge) and A Worthy Cause (a free mission action only).
TEAM-PF-017 | T-PF.10 | SIGNAL may be done in a counteraction (no ban is printed), needs sight of the friendly operative and stays within 6".

## TEAM-HIE - Hierotek Circle

TEAM-HIE-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-HIE-001 | T-HIE.1 to T-HIE.5 | Roster validation: exactly 1 Cryptek, 1 Accelerator, 1 Reanimator, 5 from the list; Deathmark and Guardian repeat; Apprentek and Despotek at most once; loadouts enforced.
TEAM-HIE-002 | T-HIE.24, T-HIE.26 | First incapacitation places a tied Reanimation marker and strips tokens; a REANIMATED operative returns within 3", outside enemy CR, at 1 wound (injured), chosen order, ready; second incapacitation places no marker.
TEAM-HIE-003 | T-HIE.25, T-HIE.29 | Ready step: Living Metal heals D3+1 first; then markers are rolled in owner order until one 3+; a reanimated operative stays at 1 wound that TP.
TEAM-HIE-004 | T-HIE.27 | Opponent kill grade and kill op VP fall when an operative is REANIMATED and rise again if it is incapacitated later.
TEAM-HIE-005 | T-HIE.19 | Reanimate: 1 AP rolls (3+), 2 AP is automatic; an operative already expended this TP returns expended, otherwise ready.
TEAM-HIE-006 | T-HIE.28, T-HIE.38 | Magnify: target validity, cover and obscured from the proxy, Ceaseless granted; Relentless Onslaught 8" from the shooter; Conduits widens the proxy set once per TP.
TEAM-HIE-007 | T-HIE.6, T-HIE.7 | Interstitial Command: free 1 AP action, 2" move cap, repeat-in-TP ban both ways, Despotek relay distance; Despotek version cannot pick Accelerate.
TEAM-HIE-008 | T-HIE.8 | Timesplinter: expended friendly within 5" re-set within 5" horizontally and visible; not TP1; once per team per TP; Comms Device does not extend it.
TEAM-HIE-009 | T-HIE.10 | Chronometron: attacker Atk -1 when shooting, fighting or retaliating against the token holder; ends at the Chronomancer's next activation, its incapacitation, or a repeat.
TEAM-HIE-010 | T-HIE.12 | Nightmare Shroud: enemy within 4" cannot re-roll attack dice (Balanced, Ceaseless, Command Re-roll) and Lethal 5+ does not make crits.
TEAM-HIE-011 | T-HIE.13 | Vision of Madness: activation denied on D6 >= current APL; token removed on successful activation or when no alternative exists.
TEAM-HIE-012 | T-HIE.9, T-HIE.11 | Nanomine -2" Move within 4" (floor 4"); Despair +1 AP on mission actions within 2" and -1 to the enemy control total.
TEAM-HIE-013 | T-HIE.14, T-HIE.15, T-HIE.16 | Canoptek Repair 2D3 capped, once per team per TP; Augment Weapon picks two rules on one profile of staff or conduit; Reinforce Metal reduces 3+ die damage by 1 but not Devastating.
TEAM-HIE-014 | T-HIE.17 | Scuttler: Conceal and in cover is untargetable beyond 2" even against Seek or from Vantage; Fall Back costs 1 AP; no grenades.
TEAM-HIE-015 | T-HIE.20 | Apprentek has the roster Cryptek's actions, only one per TP; its distances measure from itself; shared team limits.
TEAM-HIE-016 | T-HIE.21, T-HIE.23 | Deathmarked token grants Seek to Deathmarks only; Steadfast counts APL 3 for control and Despair's -1 still applies.
TEAM-HIE-017 | T-HIE.37, T-HIE.36 | Dimensional Ambush allows Guard on Conceal and flips to Engage at the interrupt; Living Lightning turns the carbine into Devastating 1 with Blast 2".

## TEAM-PM - Plague Marines

TEAM-PM-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-PM-001 | T-PM.1, T-PM.2 | Roster of Champion plus 5 distinct main-list operatives validates; a duplicate main pick or a 7th operative is rejected.
TEAM-PM-002 | T-PM.16 | Bombardier may Shoot twice with the boltgun; Champion cannot take a second Shoot (no bolt or PSYCHIC weapon); Heavy Gunner cannot use the plague spewer for both Shoots.
TEAM-PM-003 | T-PM.16 | Plaguecaster may Shoot Entropy then Plague wind but not Entropy twice; any PLAGUE MARINE with a Conceal order can counteract.
TEAM-PM-004 | T-PM.17 | A Poison weapon that inflicts damage gives the target one token; a second hit gives no second token; a friendly PLAGUE MARINE Blast secondary gains none.
TEAM-PM-005 | T-PM.18 | A poisoned enemy takes 1 damage when activated, before any other activation effect; no damage when it counteracts.
TEAM-PM-006 | T-PM.19 | A 3-damage die on a Plague Marine with D6 4+ inflicts 2; a 2-damage die is never rolled for; Poison and FLAIL damage are never reduced.
TEAM-PM-007 | T-PM.8 | Toxic adds 1/1 Dmg only against targets poisoned at the start of the action; in a Blast, an unpoisoned primary that gains a token does not upgrade the secondaries.
TEAM-PM-008 | T-PM.7 | Champion regains wounds equal to wounds a poisoned enemy within 7" lost, capped at 3 per TP and at starting wounds; nothing when the enemy is unpoisoned or beyond 7".
TEAM-PM-009 | T-PM.9 | Bombardier throws blight at 3+ with Toxic and krak at 3+ without spending the team's Blight Grenades uses; its own allowance runs out after 2 blight and 1 krak.
TEAM-PM-010 | T-PM.10 | FLAIL deals D3+2 to every operative (friend and foe) visible and within 2"; a D3 of 3 poisons an enemy; Fight + FLAIL is legal, Fight + FLAIL + Fight is not; blocked by a Conceal order.
TEAM-PM-011 | T-PM.11 | Icon Bearer with APL 3 contributes 4 to marker control, and 5 with a +1 APL change.
TEAM-PM-012 | T-PM.12, T-PM.20 | Contagion costs 0 CP while the Icon Bearer is in the opponent's territory, 1 CP otherwise.
TEAM-PM-013 | T-PM.13 | Poisonous Miasma poisons an unpoisoned target and deals 3 damage to a poisoned one; legal on a concealed enemy in cover visible within 7"; illegal in an enemy's CR.
TEAM-PM-014 | T-PM.14 | Putrescent Vitality heals 7 on a total of 7, else the higher die, capped at starting wounds; can target the Plaguecaster; second use in a TP rejected.
TEAM-PM-015 | T-PM.15 | Warrior's defence dice of 5 are crits when shot.
TEAM-PM-016 | T-PM.20 | Under Contagion a poisoned enemy within 3" of a Plague Marine has Move -2" and Hit worsened by 1; an injured enemy gets no extra penalty; an unpoisoned enemy is affected only near the Icon Bearer.
TEAM-PM-017 | T-PM.21 | Lumbering Death grants Ceaseless after a 3" move, not after a 3.5" move or a 2" move plus a 2" climb cost; always when retaliating; not while counteracting.
TEAM-PM-018 | T-PM.22 | Cloud of Flies obscures a Plague Marine wholly within 1" of the marker against a shooter more than 3" away, not against one within 3"; the marker is gone at the next Ready step.
TEAM-PM-019 | T-PM.23 | Nurglings: APL -1 on an enemy within 3", or a poisoned enemy within 7"; an unpoisoned enemy 5" away is not selectable; the cap holds with Stun.
TEAM-PM-020 | T-PM.24 | Virulent Poison poisons an enemy within 3" behind a wall, or one visible within 7"; not one hidden at 5".
TEAM-PM-021 | T-PM.25 | After Sickening Resilience a 4-damage die becomes 3 with no roll, a 3 becomes 2, a 2 stays 2.
TEAM-PM-022 | T-PM.26 | Poisonous Demise poisons unpoisoned enemies visible within 3" and deals 1 damage to already-poisoned ones, including one poisoned earlier in the same action.
TEAM-PM-023 | T-PM.27 | Curse of Rot: each opponent 3 deals 1 damage and becomes a fail that cannot be re-rolled; not offered while retaliating or beyond the range.
TEAM-PM-024 | T-PM.28 | With Plague Bells an injured Plague Marine keeps Move 5" and its printed Hit.
TEAM-PM-025 | T-PM.29 | With Plague Rounds a bolt pistol hit poisons; the Warrior's boltgun has Poison, Severe and Toxic; plasma pistols are unchanged.
TEAM-PM-026 | T-PM.30 | Third team blight grenade use in a battle is rejected.
TEAM-PM-027 | T-PM.31 | Poison Vents: a poisoned enemy activated within 3" takes D3 instead of 1; an unpoisoned one gains a token on a D3 of 3 and takes no damage that activation.

## TEAM-WYR - Wyrmblade

TEAM-WYR-000 | scaffold | Superseded: the team is complete and flagged `playable: true`; TEAM-WYR-001 to TEAM-WYR-021 below cover it.
TEAM-WYR-001 | T-WYR.1, T-WYR.5 | Roster validator accepts 1 Leader + 13 Warriors (14 ops) and Leader + 2 cult agents + 9 (12 ops); rejects 3 cult agents and 12 weighted selections.
TEAM-WYR-002 | T-WYR.4 | Two flamer Gunners rejected; flamer + webber Gunner accepted; three Heavy Gunners rejected.
TEAM-WYR-003 | T-WYR.24 | Set-up allows at most 4 NEOPHYTE in HIDING; a cult agent cannot be marked hiding.
TEAM-WYR-004 | T-WYR.25 | Emerge offers only positions wholly within 6" of the drop zone and >6" from enemies; costs 1 AP; Charge and Fall Back then illegal; expend always legal.
TEAM-WYR-005 | T-WYR.25 | An emerged Heavy Gunner cannot shoot its heavy stubber that activation.
TEAM-WYR-006 | T-WYR.26 | Operatives still hiding at end of TP2 are incapacitated and raise the opponent's kill grade.
TEAM-WYR-007 | T-WYR.27 | With a ready hiding operative the Wyrmblade player cannot counteract; the opponent's view lists the hiding operative.
TEAM-WYR-008 | T-WYR.29 | Ceaseless when switched Conceal→Engage at activation start; Ceaseless when unseen at activation start; no Ceaseless on retaliation or counteract.
TEAM-WYR-009 | T-WYR.23 | Expending a Warrior forces the next decision to be a ready Warrior; after the second Warrior, the opponent activates.
TEAM-WYR-010 | T-WYR.14 | After an enemy Dash ending 2.5" from the Locus, Quicksilver Strike Charges into its CR; when no ≤3" Charge exists it is not offered and the TP use stays.
TEAM-WYR-011 | T-WYR.13 | Retaliating Locus blocks an enemy success before the attacker's first strike.
TEAM-WYR-012 | T-WYR.22 | Assassinate is legal only vs an enemy that cannot see the Talon and is reachable within 6"; the double strike resolves before the defender acts.
TEAM-WYR-013 | T-WYR.36 | Unquestioning Loyalty swaps a Shoot target onto a Neophyte out of the shooter's sight; refused vs a Blast weapon.
TEAM-WYR-014 | T-WYR.15 | Stationary Heavy Gunner gets Ceaseless; with Cult Ambush active it gets Relentless instead.
TEAM-WYR-015 | T-WYR.17, T-WYR.37 | Neophyte shot dead near the Icon Bearer makes a free Shoot before removal; one killed in melee has an enemy in its CR, so it can neither Shoot nor take a mission action (both keep their conditions) and is simply removed; one shot dead on an objective can take Plan Generations at 0 CP through Overthrow.
TEAM-WYR-016 | T-WYR.33 | Divert and Disappear: a cult agent uses two of the three slots; its Fall Back applies −1 APL to its next activation.
TEAM-WYR-017 | T-WYR.40 | A Wyrmblade operative passes over its own mine without triggering it; an enemy triggers it.
TEAM-WYR-018 | T-WYR.10, 18, 19, 21, 28, 30, 31 | Rule grants: Soulsight (Saturate on the Sniper's rifle, Brutal and Balanced on the Talon's dagger), Target Vulnerability (Lethal 5+ on the stationary profile), Heroic Inspiration (Severe after a Kelermorph kill, within 3" and in sight), Crossfire (Accurate 1 after another operative shot the target), The Day Is At Hand (Rending, +1 Atk capped at 5), Cult Agent (Piercing and Saturate ignored).
TEAM-WYR-019 | T-WYR.11, 19, 32, 41 | Obscured: Hypersense, a Soulsight token and Spotlights remove it; One With The Shadows adds it from Light terrain more than 1" from both operatives.
TEAM-WYR-020 | T-WYR.8, 12, 34, 35 | After a Fight that leaves no enemy in CR the Locus is offered a free 3" Charge (not counted as its Charge action); Slink Into Darkness after the last AP costs 0 CP for a Neophyte the Leader sees (not for the Leader) and sets Conceal when the activation ends; Coiled Serpent makes a normal success a critical success, only after a Conceal to Engage switch.
TEAM-WYR-021 | T-WYR.9, 12, 16, 19, 20, 21 | Kelermorph shoots twice and the Locus fights twice; the Talon can Charge under Conceal; the Icon Bearer counts one more at an objective without changing its APL; one Soulsight token per team moves when the other cult agent takes the action.

## SIM - simulation invariants

SIM-001 | CLAUDE.md contract | A pending decision's legalActions list is never empty.
SIM-002 | CLAUDE.md contract | Illegal input returns a Rejection and never throws.
SIM-003 | R-1.7 | Every simulated game ends within four TPs and never loops.
SIM-004 | R-7.2 | No operative with 0 or fewer wounds remains in the killzone after an action finishes.
SIM-005 | R-3.6, R-2.4 | AP spent never exceeds APL (with R-3.15 exception) and CP never go negative.
SIM-006 | R-9.2 | The same seed and the same action list reproduce the same state and event log.
SIM-007 | R-8.1 | After every action no two bases overlap and none lies outside the killzone or inside terrain.
SIM-008 | R-8.x kill op, R-3.4 | VP falls only by the kill op VP a returning operative takes back; a Conceal shooter firing a non-Silent weapon without a viewpoint or team rule is flagged.
