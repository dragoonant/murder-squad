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
GEN-039 | footprint.ts | An oval base is three discs on its long axis: base-edge distances run from its ends along the axis and from its side across it; round bases keep one disc and the plain gap.
GEN-040 | footprint.ts, measure | Control range reaches 1" from the end of an oval's long axis but not past its side at the same centre distance; another base cannot be placed over the oval's end.
GEN-041 | movement oval | An oval keeps its facing while it moves; a turn at the end costs the long-axis tip's arc rounded up, can push the move over its limit, rides on the path payload, and can be made on the spot.
GEN-042 | movement, setup | A round base ignores a facing in the path; a datacard's ovalBase with `weapons` applies only to loadouts carrying one of them.
GEN-043 | operative-picks.ts | A per-operative keyword pick is a real keyword, public in view, defaulted to the first allowed keyword, rejected when excluded, and changed only through setOperativePick with an event.
GEN-044 | data roster.ts | Operative picks validate per datacard with exclusions and defaults.
GEN-045 | data roster.ts | A team cap counts a keyword over every slot; loadout caps count carried weapons across the roster; capAwareLoadouts picks default loadouts inside them.
GEN-046 | equipment.equipmentLimitFor | A rostered datacard with extraEquipment raises the equipment limit at setup.
GEN-047 | hooks action.declared | A declaration hook cancels an action with no AP spent and bars it for the rest of the activation.
GEN-048 | team-rules reactions (activationEnded) | The other seat may react when an activation ends; passing or reacting continues with the next activation choice.
GEN-049 | window firefight.opponentActionDeclared | The opponent of the declaring operative gets a ploy window before the action resolves; the declaring seat is not asked.
GEN-050 | attack-common.forcedReroll, RerollGrant.values, hook diceRolled | A rule can force re-rolls of a fresh roll (marked re-rolled); a value-limited grant offers only those values; diceRolled sees every fresh side.
GEN-051 | team-rules canActivate | A blocked operative is left out of the activate options while another is ready; the options are never empty.
GEN-052 | window firefight.beforeActivation, skipActivation | A ploy before the activation choice can make the seat pass its activation; passing the window lets it activate.
GEN-053 | ployRule costSurcharge, window ploy.opponentUsed | A surcharge raises a ploy's cost; after a ploy the other seat may answer in a nested window, and the interrupted window resumes.
GEN-054 | hook gambit.passed | The hook runs for explicit and implicit Gambit-step passes.
GEN-055 | window operative.killed | After an attack victim is removed, the killer's seat gets a ploy window.
GEN-056 | team-rules blockCapacity | A block that cancels two successes is offered when a provider allows it.
GEN-057 | team-rules initiativeReroll | Once both initiative dice are rolled, a seat a rule allows is asked whether to re-roll its die; the provider is told when it does.
GEN-058 | movement.planFly | FLY sets the operative up within its move horizontally (Dash 3", no Charge bonus, 2" counteracting), outside enemy control range unless charging.
GEN-059 | movement forced moves | A forced move pushes another operative up to its distance regardless of its own control-range limits and emits OperativeMoved 'forced'.
GEN-060 | team-rules ownGrenades | An operative with its own grenades gets the weapons at set-up and pays grenade actions from its own allowance.
GEN-061 | firefight.joinActivation | Two operatives activated together keep separate AP; the player switches between them; ending one hands over, and both are expended.
GEN-062 | los terrain queries | interveningTraits reports Light and Heavy terrain crossed by targeting lines; baseUnderVantage reports a base under a higher Vantage floor.
GEN-063 | fight.extraStrike | An out-of-sequence strike resolves one unresolved success through the normal strike path, once.
GEN-064 | strategy ledger | Per-TP use counts (ledger.tpUses) reset at every turning point start; Purity Seals works again in the next TP.
GEN-065 | handlers modifyStat move | A declarative modifyStat move changes Move through effectiveMove and honours its `when`.
GEN-066 | shoot.attackerDefenceRolled | The attacker is offered ploys once the defence dice are final; the defender is not.
GEN-067 | firefight.actionDeclared | The active player's declaration window also opens for Pick Up Marker and mission actions, before the opponent's.
GEN-068 | abilities marker offers | actionForbidden and a barred action remove Pick Up Marker from the offers.
GEN-069 | query conversions | Shoot odds run pure afterAttackRoll conversions per target, without counting hook fires.
GEN-070 | pools | A team pool gains (with a cap), spends only what it holds, can be set, emits PoolChanged for each change and is public in view.
GEN-071 | psychic | psychicBlocked switches off PSYCHIC ranged weapons and PSYCHIC unique actions of the operative (any team's PSYCHIC tag, the PSYCHIC ability keyword); psychicImmune makes it unselectable for PSYCHIC actions.
GEN-072 | weaponForbidden | A provider bars one weapon with a reason through weaponUnusable; the operative's other weapons stay usable.
GEN-073 | fixedTargets | A weapon with fixed targets raises no target decision and shoots each listed operative in its own sequence, never in cover or obscured.
GEN-074 | extraTargets | After the first target the shooter is offered the extra candidates and Done; the choice stops at the maximum.
GEN-075 | splash | x" Devastating damage on the target carries no splash flag; on a bystander within the distance it carries `splash: true`.
GEN-076 | afterBlock, strikeOnly | afterBlock runs when a fighter blocks; an owed strike-only resolution offers strikes and no blocks.
GEN-077 | fightTargets | A provider narrows the fight targets; an answer that would leave none is ignored.
GEN-078 | moveLimitDelta, flyLimit, moveRestrictions | A per-kind limit change affects only that kind (counteract still caps 2"); a FLY distance of its own; climbing and jumping refused.
GEN-079 | activationBarred | A barred ready operative is not activatable, its activation is rejected, and the turning point ends with it still ready.
GEN-080 | counteractAlternatives | When it is a seat's turn to counteract, an alternative option runs the team hook, the turn passes and no operative is marked as having counteracted.
GEN-081 | markerActionRelief | Pick Up Marker in an enemy control range is offered with ignoreEnemyControlRange; a contested but enemy-controlled marker only with contestSuffices.
GEN-082 | ownGrenades tpActions | A seat-wide per-TP grenade allowance is the 'ownTp' source until used that turning point.
GEN-083 | operativeChoices unique, distinctFrom, keyword | Missing picks fill around picks other entries hold and the operative's own; illegal repeats are reasons; tag picks are not keywords; alternatives skip what friends hold; roster-aware data defaults and the roster check.
GEN-084 | selection caps min, requires | A roster without the minimum keyword, or with a datacard missing the one it needs, has a reason for each.
GEN-085 | repeatSurcharge | Repeating a weapon with another profile of the same profile group still pays the ASTARTES surcharge.
## TEAM-PF - Pathfinders

TEAM-PF-000 | registration | The team is registered with the engine and the data, is `playable`, and every code hook its data names is registered and fires in a real game (the scenarios in `tests/engine/teams/pathfinders.hooks.ts`).
TEAM-PF-001 | T-PF.1 to T-PF.3 | Roster validation: 1 Shas'ui plus 11 selections; MB3 counts as two; Shas'la unlimited; Weapons Expert at most two with its loadout option; every other entry at most once.
TEAM-PF-002 | T-PF.27, T-PF.29 | Markerlight adds one token to a visible enemy, caps at 4, persists across TPs; one token is removed once per enemy activation on Dash, Charge, Fall Back or Reposition, never in a counteraction.
TEAM-PF-003 | T-PF.28, T-PF.21 | Shoot and Markerlight in one activation must share the target (both orders); the MB3 is exempt; Guard shots are not linked.
TEAM-PF-004 | T-PF.30 | Token rows apply cumulatively: 1 Saturate and Balanced, 2 Hit +1 capped at 3+, 3 no obscured, 4 Seek Light (changes valid targets), 5 Seek; fusion and frag/krak grenades get nothing.
TEAM-PF-005 | T-PF.7, T-PF.8 | Art of War: each option once per battle; Mont'ka +1" Move; Kauyon free Markerlight only for Conceal-ordered operatives with the action; Blooded may swap options for its activation.
TEAM-PF-006 | T-PF.12, T-PF.20 | Drone whitelist enforced; Remote Pilot lets a drone do a forbidden action with a 2" move cap, repeatable but never the same drone-action pair twice per activation; drone control APL counts 1 lower.
TEAM-PF-007 | T-PF.14, T-PF.15 | Medic! saves a non-drone within 3" once per TP at 1 wound, free Dash into medic CR, both -1 APL, ends that operative's activation; saved inside an enemy Guard interrupt, the Dash is a reaction once the interrupt is over; blocked if the medic is a target or either is in enemy CR; Medikit heals 2D3 capped, not the Medic! target.
TEAM-PF-008 | T-PF.16 | Group Activation forces a second ready Shas'la activation, never a third.
TEAM-PF-009 | T-PF.37, T-PF.11, T-PF.22 | Saviour Protocols redirects to a drone within 3", ignores validity, cover/obscured capped by the original, no effect vs Blast/Torrent; 0 CP with Drone Controller or MV4.
TEAM-PF-010 | T-PF.38 | Point-Blank Fusillade: ranged weapon as melee, no blocking, Devastating/Piercing/Torrent off, resolve-first only when ready, Engage and pulse.
TEAM-PF-011 | T-PF.25, T-PF.26 | Grav-inhibitor adds 2" once to enemy non-Dash moves entering its 6" visible zone, ignoring Obstructing/Accessible extras; worsens enemy melee Hit by 1 within 6".
TEAM-PF-012 | T-PF.32, T-PF.36 | Suppressing Fire bans enemy attack re-rolls when the target is not the closest non-ignored valid target; Supporting Fire allows targets within 6" that have friendly Pathfinders in their CR.
TEAM-PF-013 | T-PF.39 to T-PF.42 | Equipment limits (TAO 1/TP, HIML 2/TP, Photon 1/TP, OSU 1/TP); Photon Grenade on 3+ gives Move -2" (floor 4") and no Dash; OSU picks any enemy, never combined with HIML or Analyse.
TEAM-PF-014 | T-PF.22, T-PF.24 | MV4 ignores Piercing and Piercing Crits and one Normal Dmg per TP; Pulse Accelerator gives pulse weapons within 3" Lethal 5+ and Severe until the drone's next activation or death.
TEAM-PF-015 | stat tables | Every operative stat, base size and weapon profile matches 3.2 and 3.3 (dart round 3/4, fusion grenade 4/3).
TEAM-PF-016 | T-PF.31, T-PF.35 | Recon Sweep (not in TP1, never the own edge, order chosen by the player, Dash refused unless it ends wholly within 6" of a non-own edge) and A Worthy Cause (in the firefight.start ploy window, a free mission action only, then the window carries on).
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
TEAM-PM-010 | T-PM.10 | FLAIL deals D3+2 to every operative (friend and foe) visible and within 2"; a D3 of 3 poisons an enemy; Fight + FLAIL and FLAIL + FLAIL are legal, Fight + FLAIL + Fight is not; blocked by a Conceal order.
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
TEAM-PM-022 | T-PM.26 | Poisonous Demise poisons unpoisoned enemies visible within 3" and deals 1 damage to already-poisoned ones, including one poisoned earlier in the same action; after an attack it is offered in the operative.incapacitated ploy window before removal (passing keeps the CP).
TEAM-PM-023 | T-PM.27 | Curse of Rot: used before re-rolls (shoot.beforeDefenceRerolls, fight.beforeRerolls), each opponent 3 deals 1 damage and becomes a fail that cannot be re-rolled, shooting or fighting; not offered while retaliating, beyond the range or without a 3.
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
TEAM-WYR-007 | T-WYR.27 | With a ready hiding operative the Wyrmblade player cannot counteract; the opponent's view lists the hiding operative (open information; the client tray shows it too, M9C-009).
TEAM-WYR-008 | T-WYR.29 | Ceaseless when switched Conceal→Engage at activation start; Ceaseless when unseen at activation start; no Ceaseless on retaliation or counteract.
TEAM-WYR-009 | T-WYR.23 | Expending a Warrior forces the next decision to be a ready Warrior; after the second Warrior, the opponent activates.
TEAM-WYR-010 | T-WYR.14 | After an enemy Dash ending 2.5" from the Locus, Quicksilver Strike Charges into its CR; when no ≤3" Charge exists it is not offered and the TP use stays; an enemy gambit Dash in the Strategy phase triggers it too (FAQ).
TEAM-WYR-011 | T-WYR.13 | Retaliating Locus blocks an enemy success before the attacker's first strike.
TEAM-WYR-012 | T-WYR.22 | Assassinate is legal only vs an enemy that cannot see the Talon and is reachable within 6"; the double strike resolves before the defender acts.
TEAM-WYR-013 | T-WYR.36 | Unquestioning Loyalty swaps a Shoot target onto a Neophyte out of the shooter's sight; refused vs a Blast weapon.
TEAM-WYR-014 | T-WYR.15 | Stationary Heavy Gunner gets Ceaseless; with Cult Ambush active it gets Relentless instead.
TEAM-WYR-015 | T-WYR.17, T-WYR.37 | Neophyte shot dead near the Icon Bearer makes a free Shoot before removal; one killed in melee has an enemy in its CR, so it can neither Shoot nor take a mission action (both keep their conditions) and is simply removed; one shot dead on an objective can take Plan Generations at 0 CP through Overthrow, or at 1 CP in the operative.incapacitated ploy window.
TEAM-WYR-016 | T-WYR.33 | Divert and Disappear: a cult agent uses two of the three slots; its Fall Back applies −1 APL to its next activation.
TEAM-WYR-017 | T-WYR.40 | A Wyrmblade operative passes over its own mine without triggering it; an enemy triggers it.
TEAM-WYR-018 | T-WYR.10, 18, 19, 21, 28, 30, 31 | Rule grants: Soulsight (Saturate on the Sniper's rifle, Brutal and Balanced on the Talon's dagger), Target Vulnerability (Lethal 5+ on the stationary profile), Heroic Inspiration (Severe after a Kelermorph kill, within 3" and in sight), Crossfire (Accurate 1 after another operative shot the target), The Day Is At Hand (Rending, +1 Atk capped at 5), Cult Agent (Piercing and Saturate ignored).
TEAM-WYR-019 | T-WYR.11, 19, 32, 41 | Obscured: Hypersense, a Soulsight token and Spotlights remove it; One With The Shadows adds it from Light terrain more than 1" from both operatives.
TEAM-WYR-020 | T-WYR.8, 12, 34, 35 | After a Fight that leaves no enemy in CR the Locus is offered a free 3" Charge (not counted as its Charge action); Slink Into Darkness in the end-of-activation window (AP spent or not; never mid-activation, in a counteraction or twice per operative) costs 0 CP for a Neophyte the Leader sees (not for the Leader) and sets Conceal; Coiled Serpent makes a normal success a critical success, only after a Conceal to Engage switch.
TEAM-WYR-021 | T-WYR.9, 12, 16, 19, 20, 21 | Kelermorph shoots twice and the Locus fights twice; the Talon can Charge under Conceal; the Icon Bearer counts one more at an objective without changing its APL; one Soulsight token per team moves when the other cult agent takes the action.

## TEAM-LG - Legionaries

TEAM-LG-000 | registration | Built: the team is registered with the engine and the data, is `playable`, its default roster (Aspiring Champion plus five, one mark each) is legal and starts a game, and every code hook its data names is registered and fires in a real game (the scenarios in `tests/engine/teams/legionaries.hooks.ts`); rules verified against the October '25 sources.
TEAM-LG-001 | T-LG.1, T-LG.2 | A roster of one leader (Aspiring Champion or Chosen) plus 5 main picks validates; two leaders, a duplicate Butcher or a 7th operative is rejected; five Warriors are accepted.
TEAM-LG-002 | T-LG.3 | The Champion offers 8 legal loadouts (2 pistols x 4 melee); Gunner, Heavy Gunner, Icon Bearer and Warrior offer exactly their printed sets; Anointed has no picker.
TEAM-LG-003 | T-LG.5 | Every LEGIONARY entry must carry one of the five marks; a Balefire Acolyte with KHORNE is rejected; the mark is a keyword (`hasKeyword(op, 'NURGLE')`) and appears in `view` for both seats.
TEAM-LG-004 | T-LG.27, T-LG.6 | A Warrior may Shoot twice with its boltgun; a Gunner may Shoot flamer then bolt pistol but not flamer twice; a Balefire Acolyte cannot Shoot Fireblast then Life siphon; any LEGIONARY may Fight twice; a Conceal-ordered LEGIONARY can counteract.
TEAM-LG-005 | T-LG.8 | The Champion incapacitating an enemy in its own activation gets APL +1 after that action (one extra AP usable); a second kill in the same activation adds nothing; a kill while counteracting adds nothing.
TEAM-LG-006 | T-LG.9 | An enemy declaring Fall Back within the Chosen's control range is cancelled on a D6 of 3+ with no AP spent and cannot Fall Back again that activation; on 1-2 it moves normally.
TEAM-LG-007 | T-LG.10 | After a fight in which the Chosen incapacitates the enemy, or deals damage with a crit strike, it regains D3+1 wounds (capped at 15); a fight with neither heals nothing; an incapacitated Chosen heals nothing.
TEAM-LG-008 | T-LG.11 | After Unleash Daemon a Dmg 4 normal hit deals 3 and a Dmg 3 hit deals 3; Devastating is not reduced; the claw has Ceaseless and Lethal 5+; Pick Up Marker is no longer offered; a carried marker is placed at once for 0 AP.
TEAM-LG-009 | T-LG.11, T-LG.23 | A NURGLE Unleashed Anointed takes 3 from a Dmg 4 normal die without a Disgusting Vigour roll, and rolls Disgusting Vigour for a Dmg 3 normal die.
TEAM-LG-010 | T-LG.23 | A NURGLE operative hit by a Normal Dmg 3 success takes 2 on a D6 of 5+ and 3 otherwise; a crit of any Dmg and Devastating damage are never reduced.
TEAM-LG-011 | T-LG.22, T-LG.25 | A KHORNE operative's melee weapons and a TZEENTCH operative's ranged weapons have Severe; a KHORNE operative's ranged weapons do not.
TEAM-LG-012 | T-LG.24 | A SLAANESH operative has Move 7" (5" when injured).
TEAM-LG-013 | T-LG.26 | An UNDIVIDED operative's weapons have Ceaseless against an enemy within 6" and not against one at 7"; a Blast secondary beyond 6" gets no Ceaseless.
TEAM-LG-014 | T-LG.20, T-LG.33 | Infernal Pact changes a Warrior's mark once per battle at activation start (the new mark's rule applies to its first action); after Mutability and Change on a TZEENTCH Warrior, Infernal Pact is not offered that TP.
TEAM-LG-015 | T-LG.12 | Life siphon with Siphon Life on a friendly within 6" heals 1 per damaging normal success and D3 per damaging crit; a blocked fell dagger die heals nothing; a second use in the same TP is not offered.
TEAM-LG-016 | T-LG.13 | When the Butcher fights or retaliates, the enemy fighter gets no assist bonus from friends in control range.
TEAM-LG-017 | T-LG.14 | At the end of an enemy activation with an enemy within 2", the Butcher is offered a free Charge of at most 2" ending in that enemy's control range (order switched to Engage on request); no offer when no legal path exists or the Butcher is already in an enemy's control range; offered at the end of a counteraction too.
TEAM-LG-018 | T-LG.15, T-LG.16 | The Icon Bearer counts APL 4 for marker control; in the Ready step it taints a controlled objective and its player gains 1 CP; the same objective is not tainted again next TP.
TEAM-LG-019 | T-LG.17, T-LG.18 | A retaliating Shrivetalon resolves the first die; when it incapacitates its opponent, another enemy within 3" of it or of the victim gets APL -1 until the end of its next activation.
TEAM-LG-020 | T-LG.19 | GRISLY MARK costs 2 AP and places the marker once per battle; an enemy within 3" pays 2 AP for Pick Up Marker; an objective contested by that enemy counts the enemy seat's total APL 1 lower.
TEAM-LG-021 | T-LG.28 | Blood for the Blood God: a non-KHORNE fighter's first strike deals Dmg +1 and its second strike does not; nothing extra when retaliating; a KHORNE power fist strikes for 6/7 (cap 7) when fighting or retaliating.
TEAM-LG-022 | T-LG.29 | Implacable: a plasma pistol (Piercing 1) shooting a friendly LEGIONARY only removes a defence die if it retains a crit; a meltagun (Piercing 2) is unchanged; an injured NURGLE LEGIONARY keeps full Move and Hit.
TEAM-LG-023 | T-LG.30 | Quicksilver Speed: an enemy fighting a LEGIONARY that Repositioned this TP has melee Hit worse by 1 (not when the enemy is injured); a shooter 7" from a moved SLAANESH LEGIONARY has Hit worse by 1, a shooter at 5" does not.
TEAM-LG-024 | T-LG.31 | Fickle Fates: shooting a ready enemy gives Balanced; shooting an expended one does not; a ready TZEENTCH defender that retains a crit also retains one fail as a normal success.
TEAM-LG-025 | T-LG.32 | Unending Bloodshed: a KHORNE fighter incapacitated with an unresolved crit strikes the enemy for its crit Dmg before removal, and the strike can incapacitate the enemy.
TEAM-LG-026 | T-LG.33, T-LG.34, T-LG.35 | Mutability and Change gives APL 4 for that activation and blocks a second Shoot; Malignant Aura gives Piercing 1 against a target within 3" and not at 4"; Sickening Captivation gives a visible enemy within 4" APL -1 until the end of its next activation.
TEAM-LG-027 | T-LG.36, T-LG.37 | Warded Armour sets one LEGIONARY's Save to 2+ until the next Ready step; Tainted Rounds gives a boltgun Rending for one Shoot, once per TP, and is not offered for the tainted bolt pistol.
TEAM-LG-028 | T-LG.38, T-LG.39 | Chaos Talismans on the picked mark turns a roll with 2 fails into 1 extra normal success for D3 self-damage, once per activation; a Shoot continues if that damage incapacitates the shooter; every LEGIONARY with Malefic Blades has the malefic blade (5/3+/3/4).

## TEAM-HA - Hand of the Archon

TEAM-HA-000 | registration | Built: the team is registered with the engine and the data, is `playable`, its default roster (Archsybarite plus eight, two darklight weapons) is legal and starts a game, and every code hook its data names is registered and fires in a real game (the scenarios in `tests/engine/teams/hand-of-the-archon.hooks.ts`); rules verified against the January '26 sources.
TEAM-HA-001 | T-HA.1, T-HA.2 | Roster of Archsybarite plus 8 main picks validates with several Agents; a second Gunner (or any repeated non-Agent) or a 10th operative is rejected.
TEAM-HA-002 | T-HA.3, T-HA.4 | Archsybarite blast pistol + Gunner blaster validates; adding Heavy Gunner dark lance (third darklight weapon) is rejected; swapping it for the splinter cannon validates.
TEAM-HA-003 | T-HA.7 | Archsybarite on the board and its player passes first in the Gambit step: +1 CP; using a team strategy ploy first gives nothing; using a mission strategic gambit first then passing still gives +1 CP.
TEAM-HA-004 | T-HA.8 | Archsybarite with no Pain token selecting a Shoot target is offered a free Pain token once per activation; not offered when it already holds one or while counteracting.
TEAM-HA-005 | T-HA.9 | First Pain gain in a TP also gives a token to an Agent without one; a second gain in the same TP gives no extra token.
TEAM-HA-006 | T-HA.10 | Crimson Duellist kills an enemy in its control range; the chosen second enemy (within 6") cannot Pick Up Marker or perform a mission action and adds 0 APL to marker control until the next TP starts.
TEAM-HA-007 | T-HA.11, T-HA.12 | Crimson Duellist may Fight twice in one activation; with the razorflail one normal block removes two unresolved enemy normal successes, and a normal block cannot take an enemy crit.
TEAM-HA-008 | T-HA.13 | Stinger pistol incapacitates an enemy: every other operative visible within 2" (friendly included) takes D3 rolled separately; an operative downed by it bursts in turn.
TEAM-HA-009 | T-HA.14 | Torment grenade: the target and all operatives within 1" (either side) roll a poison test with +1 for Save 4+ or worse; on 3+ D3 damage and one `ha.poison` token (never two); a holder takes D3 when activated, not when counteracting.
TEAM-HA-010 | T-HA.25 | A Shoot that takes an enemy from full to injured gives the shooter 1 Pain token; a Shoot that only damages an already-injured enemy gives none.
TEAM-HA-011 | T-HA.25 | Incapacitating a Wounds 12+ enemy gives 2 Pain tokens; incapacitating a Wounds 8 enemy and injuring another in one Torrent action gives 1 token in total.
TEAM-HA-012 | T-HA.25 | Pain tokens are gained after free actions, counteractions and Guard interrupts too, appear in `view` for both seats, and are cleared when the holder is removed.
TEAM-HA-013 | T-HA.26, T-HA.27 | Dark Animus spends one Pain token, gives +1 AP in the current activation and +1 control APL until that operative's next activation, where it ends before the first action.
TEAM-HA-014 | T-HA.26, T-HA.28 | Accelerated Rejuvenation spends one token and heals D3+1 capped at starting wounds; after it, Dark Animus is not offered in the same activation.
TEAM-HA-015 | T-HA.29 | After a Charge-then-Fight kill, Vitalised Surge offers a free Dash (spending the token just gained from the kill); while counteracting the Dash is capped at 2"; not offered while still in an enemy's control range.
TEAM-HA-016 | T-HA.26, T-HA.30 | Stimulated Senses after an attack roll re-rolls every die of one chosen result for one token, and is offered in addition to one other invigoration in the same activation, but only once.
TEAM-HA-017 | T-HA.15, T-HA.16 | The Combat Drugs pick gives every friendly operative that drug; with Painbringer a 3+ damage attack die is reduced by 1 on a D6 of 6 only.
TEAM-HA-018 | T-HA.17, T-HA.18 | Adrenalight gives one Pain token in the Ready step; Hypex keeps an injured operative's Move at 7" while its Hit still worsens.
TEAM-HA-019 | T-HA.19 | Administer Drug heals a friendly within 3" by up to 2D3 or swaps only that operative's drug; it can target the Elixicant itself and is not offered in an enemy's control range.
TEAM-HA-020 | T-HA.20, T-HA.21 | Dark lance against the Flayer deals 5/6; Devastating damage is not reduced; the Flayer's first crit strike in a sequence offers one Pain token to a friendly within 6".
TEAM-HA-021 | T-HA.22 | Skysplinter Assassin may Shoot twice with razorwing then shardcarbine; razorwing twice is refused; after two Shoots MARK is not offered; after MARK no second Shoot.
TEAM-HA-022 | T-HA.23 | Omen on an enemy: its rolled 6s are re-rolled at once and cannot be re-rolled again; Omen on a friendly: only its 1s are offered for re-roll.
TEAM-HA-023 | T-HA.24 | After MARK, a Conceal enemy in Light cover becomes a valid target for the Assassin and is not obscured behind Heavy terrain; other shooters see no change.
TEAM-HA-024 | T-HA.31 | Splinter rifle gets Accurate 1 in an activation without Charge, Fall Back or Reposition; not after a Reposition, not while counteracting.
TEAM-HA-025 | T-HA.32, T-HA.33, T-HA.41 | Blade Artists gives melee weapons Rending; Merciless Sadists gives Balanced only against a wounded enemy; Wicked Blades makes array of blades Atk 4.
TEAM-HA-026 | T-HA.34, T-HA.35 | From Darkness, Death offers only enemies the friendly was not a valid target for and converts one normal to a crit at the first sequence against it; Denizens of Night grants one defence re-roll only when more than 2" from enemies with Light or Heavy terrain intervening.
TEAM-HA-027 | T-HA.36, T-HA.38 | Cruel Deception makes Fall Back cost 1 AP for that activation only; Heinous Arrogance passes the turn without activating and spends 1 CP.
TEAM-HA-028 | T-HA.37 | After the opponent pays CP for a firefight ploy, Devious Scheme makes their next use of that ploy cost 1 more, then ends; it cannot be used again while its effect waits; a 0CP use cannot trigger it.
TEAM-HA-029 | T-HA.39 | Prey on the Wounded after the attack roll against a wounded enemy re-rolls any attack dice for 1 CP; not offered against an unwounded enemy.
TEAM-HA-030 | T-HA.40, T-HA.42, T-HA.43 | Chain Snare stops a Fall Back on any 4+ (no AP spent, locked for the TP) and stays available after a miss; Toxin Coating gives Lethal 5+ for one sequence twice per TP; Refined Poison gives +1 Normal Dmg for a whole Torrent action twice per TP.

## TEAM-HC - Hunter Clade

TEAM-HC-000 | registration | Built: the team is registered with the engine and the data, is `playable`, its default roster (Ranger Alpha plus nine) is legal and starts a game, and every code hook its data names is registered and fires in a real game (the scenarios in `tests/engine/teams/hunter-clade.hooks.ts`); rules-review fixes in `tests/engine/teams/hunter-clade.rules.test.ts`.
TEAM-HC-001 | T-HC.1, T-HC.2, T-HC.3 | A roster of one leader plus nine main picks validates; a second Diktat (Ranger plus Vanguard), a second Surveyor, a duplicate non-repeatable card or an 11th operative is rejected; repeated Ranger and Vanguard Warriors are accepted.
TEAM-HC-002 | T-HC.4, T-HC.5 | With a Sicarian Princeps leader, a fifth main-list Sicarian is rejected (six Sicarians); with a Skitarii Alpha leader five main-list Sicarians are accepted; eight of (Sicarian Warriors plus Gunners) are rejected.
TEAM-HC-003 | T-HC.6, T-HC.7 | Two arc rifles (Ranger Gunner plus Vanguard Gunner) are rejected; one of each special weapon is accepted; the Ranger Alpha loadout picker offers exactly the three sets and set (c) asks for one pistol and one melee weapon.
TEAM-HC-004 | T-HC.9, T-HC.20 | An arquebus Gunner has a 60x35 oval footprint along its facing: a visible enemy whose base edge is 2.0" from the Gunner's centre along the long axis is in its control range (gap 0.82"), the same enemy along the short axis is not (gap 1.31"); bases may not overlap the oval; a round 25mm Gunner keeps a circle.
TEAM-HC-005 | T-HC.20 | An arquebus Gunner with Move 6" that moves 5" straight and turns 90 degrees is rejected (5" plus a turn of 1.181 x 1.571 rounded up to 2"); the same 5" without turning (crab-walk) is accepted; a pure turn counts as moving for Targeting Protocol.
TEAM-HC-006 | T-HC.15 | A Ranger Warrior that has not moved shoots its galvanic rifle with Lethal 5+ (a 5 is a crit); after a Dash in the same activation it has no Lethal; while counteracting after a 2" move it has Lethal 5+; a Vanguard Warrior never gets it.
TEAM-HC-007 | T-HC.17, T-HC.16 | An enemy within 2" of a Vanguard Warrior (no visibility) shoots with Hit worse by 1; an injured enemy there is worsened only once; within 3" of the Vanguard Alpha as well it also loses 1 Atk; at 2.1" from every Vanguard there is no change.
TEAM-HC-008 | T-HC.10 | A Ruststalker Warrior within 3" of the Ruststalker Princeps fighting deals 1 extra damage on its first crit strike only; the same operative retaliating gets nothing; beyond 3" nothing.
TEAM-HC-009 | T-HC.12 | An Infiltrator Warrior on Conceal in cover within 3" of the Infiltrator Princeps is not offered as a target to a shooter 6" away even with Seek or from Vantage; a shooter within 2" can target it; a Blast secondary still hits it.
TEAM-HC-010 | T-HC.21, T-HC.22 | The Primary Mode is stored from the team choice and visible in both seats' view; the gambit offers the five imperatives plus "<primary> without Deprecation" until that option is used once in the battle.
TEAM-HC-011 | T-HC.23, T-HC.24 | Under Protector a friendly ranged weapon has Ceaseless and a melee weapon's Hit is worse by 1 (not worse again when injured); under Conqueror the reverse.
TEAM-HC-012 | T-HC.25 | Under Bulwark a weapon with Normal Dmg 4 deals 3 per normal success to a friendly HC operative, its crits deal full damage, a Normal Dmg 2 weapon is unchanged, Devastating is unchanged; friendly Move is 5".
TEAM-HC-013 | T-HC.26 | Under Aggressor friendly Move is 7" and a friendly 4+ Save becomes 5+ when shot.
TEAM-HC-014 | T-HC.22 | Choosing the Primary Mode with its Deprecation ignored gives only the Optimisation that TP; the next TP the same pick has both; the doctrine is gone after the TP ends.
TEAM-HC-015 | T-HC.34, T-HC.13 | COMMAND OVERRIDE at activation gives one operative a different imperative (token visible in view) while others keep the team's; it costs 0 CP when the leader can see that operative and 1 CP when it cannot.
TEAM-HC-016 | T-HC.18 | SIGNAL gives another friendly HC operative within 6" and visible APL 3 for its next activation only; it cannot target itself or be used in an enemy's control range; a second APL boost does not exceed +1.
TEAM-HC-017 | T-HC.19 | After SPOT on an enemy, a friendly HC shooter within 3" of the Surveyor gets Seek Light and the enemy is not obscured; a shooter 4" from the Surveyor does not; the mark is gone next TP.
TEAM-HC-018 | T-HC.11 | A Ruststalker shot in cover may retain two cover saves or one as a crit; on Vantage with improved cover it gets no extra; against Saturate nothing.
TEAM-HC-019 | T-HC.14 | A Ranger Warrior within 3" of the Ranger Alpha shoots with Punishing; a Vanguard Warrior there does not.
TEAM-HC-020 | T-HC.28 | With DEBILITATING IRRADIATION a Rad-Saturated enemy shooting a Vanguard has Normal Dmg 4 lowered to 3 and Normal Dmg 3 unchanged; shooting a Ranger it is unchanged.
TEAM-HC-021 | T-HC.29 | With NEUROSTATIC INTERFERENCE an enemy within 6" of an Infiltrator gets no re-roll offers (Balanced, Ceaseless, Command Re-roll) when shooting, fighting or retaliating; at 6.1" re-rolls work.
TEAM-HC-022 | T-HC.30 | SCOUTING PROTOCOL is not offered in TP1; in TP2 each Conceal Ranger more than 6" from all enemies may Dash 3" in the chosen order, and an Engage Ranger or one at 5" from an enemy is skipped.
TEAM-HC-023 | T-HC.31 | With ACCELERANT AGENTS a Ruststalker Charges, Fights and Fights again for 2 AP total; a third Fight is not offered.
TEAM-HC-024 | T-HC.32 | CONTROL EDICT activates the leader, then its partner within 3" before the opponent activates; a Sicarian Princeps cannot pick a Sicarian partner; a partner 4" away is not offered.
TEAM-HC-025 | T-HC.33 | After SCRAPCODE OVERLOAD, an objective contested by an APL 2 enemy within 3" of the Infiltrator and an APL 2 friendly is controlled by the friendly; the effect ends at the Infiltrator's next activation start; the ploy is offered when an enemy within 3" declares Pick Up Marker.
TEAM-HC-026 | T-HC.35 | OMNISSIAH'S IMPERATIVE under Protector gives Severe; under Bulwark used at the end of the enemy's Roll Attack Dice step the operative saves on 3+ with 4 defence dice that sequence; under Neutral it is not offered; it deals no self-damage.
TEAM-HC-027 | T-HC.35 | Omnissiah Conqueror lets the fighter resolve its first two attack dice before the opponent resolves any; Omnissiah Aggressor makes a 2" climb cost 0".
TEAM-HC-028 | T-HC.36 | RAD BOMBARDMENT is offered once per battle from TP2: each enemy in the picked objective's control range rolls; 4+ gives APL -1 to the end of its next activation, 6 adds D3 damage, and an enemy under Vantage turns a 6 into 5.
TEAM-HC-029 | T-HC.37, T-HC.38 | REDUNDANCY SYSTEMS heals D3+2 at activation (never above starting wounds, not in an enemy's control range, once per TP); REFRACTOR FIELD turns Piercing 1 into none and Piercing 2 into 1 for one sequence, once per TP.
TEAM-HC-030 | T-HC.39 | With EXTREMIS MIND-LINK, CONTROL EDICT costs 0 CP once per battle and both operatives are active together: the player alternates their actions in any order, each spends its own AP, and both are expended at the end.
TEAM-HC-031 | T-HC.33 | SCRAPCODE OVERLOAD is offered when the friendly Infiltrator itself declares a mission action or Pick Up Marker, in its activation and in a counteraction, and not for its other actions.

## TEAM-HK - Hearthkyn Salvagers

TEAM-HK-000 | registration | Built: the team is registered with the engine and the data, is `playable`, and every code hook its data names is registered and fires in a real game (the scenarios in `tests/engine/teams/hearthkyn-salvagers.hooks.ts`); rules-review fixes in `tests/engine/teams/hearthkyn-salvagers.rules.test.ts`.
TEAM-HK-001 | T-HK.1, T-HK.2 | Theyn plus 9 picks validates with three Warriors and three different Gunner cards; a second Dôzr, a fourth Gunner, the same Gunner card twice, or an 11th operative is rejected.
TEAM-HK-002 | T-HK.3 | The Theyn must take exactly one of the six ranged weapons and one of the two melee weapons; a Warrior (and Kinlynk, Kognitâar, Lokâtr, Lugger) takes bolter or ion blaster plus fists, never both guns; the rotary cannon and missile launcher cards bring both profiles.
TEAM-HK-003 | T-HK.27 | An enemy that incapacitates a friendly Hearthkyn operative gains one Grudge token (a second kill makes 2); a kill by a mine, by the Hearthkyn operative's own Hot, or a Medic! save gives none; tokens show in `view` for both seats.
TEAM-HK-004 | T-HK.28 | Shooting an enemy with 2 Grudge tokens converts two normal successes (an Accurate die included) to crits and the tokens stay; against an obscured target nothing converts; a Grudge crit lets the auto rifle's Rending trigger.
TEAM-HK-005 | T-HK.7 | Eye of the Ancestors puts one Grudge token on one chosen enemy; with three friendly operatives incapacitated it may pick two different enemies; it is not offered when the Theyn is not in the killzone.
TEAM-HK-006 | T-HK.8 | Weavefield Crest ignores one Normal Dmg die that would incapacitate the Theyn, once per battle; a crit die or Devastating damage is never ignored.
TEAM-HK-007 | T-HK.9 | Fighting the Dôzr, enemy assists are removed; an enemy normal strike of 4 deals 3; a Dôzr taken to 0 wounds mid-fight first strikes the enemy with an unresolved crit, then is removed.
TEAM-HK-008 | T-HK.10 | Knux Smash pushes an enemy up to 3" (never further), deals D3+1, applies APL -1 on a D3 of 3, then offers a free Charge of at most 3"; it is not offered without an enemy in control range; a mine triggered by the push does not end the action.
TEAM-HK-009 | T-HK.11 | Medic! keeps a friendly operative within 3" on 1 wound, both get APL -1, the saved operative may Dash into the Field Medic's control range; once per TP; not when either is in an enemy's control range or when the Field Medic is the Shoot target.
TEAM-HK-010 | T-HK.12 | Medikit restores up to 2D3 wounds capped at starting wounds, may target the Field Medic itself, and cannot target the operative Medic! saved this TP.
TEAM-HK-011 | T-HK.13 | Without any team grenade picks the Grenadier can throw a frag grenade at Hit 3+ and perform Smoke and Stun Grenade; its throws do not reduce the team's picked totals.
TEAM-HK-012 | T-HK.14 | With a Utility Grenade marker within 3", any operative (either side) pays +1 AP for mission actions and Pick Up Marker; the marker is removed after the D3 activations rolled in the next Ready step.
TEAM-HK-013 | T-HK.15 | Each retained beamer crit deals D3 to each other operative on the chosen beam line (friendly ones too) but not to the target; Heavy terrain on the line excludes an operative; an obscured target causes no beam.
TEAM-HK-014 | T-HK.16 | The Jump Pack Warrior can FLY to any placeable spot within 8" horizontally (3" on a Dash) ignoring terrain and height, cannot land in an enemy's control range except by Charge, gets no +2" on Charge, and only 2" when counteracting.
TEAM-HK-015 | T-HK.17 | The Jump Pack Warrior's plasma weapon has Brutal when it has Charged this activation, and not when it fights without charging or retaliates.
TEAM-HK-016 | T-HK.18 | Signal gives +1 APL to another friendly operative anywhere in the killzone until the end of its next activation; it cannot target the Kinlynk itself or be used in an enemy's control range.
TEAM-HK-017 | T-HK.19 | A System Jammed enemy is absent from the opponent's activate options while they have an unjammed ready operative, is offered once only jammed ones remain, and loses the token when activated; an enemy already jammed cannot be picked again.
TEAM-HK-018 | T-HK.20, T-HK.21 | The Attack marker gives Balanced against enemies within 3" of it, the Defence marker gives one defence re-roll to Hearthkyn targets within 3"; only one marker is in play; both go in the next Ready step; Accelerated Appraisal replaces it.
TEAM-HK-019 | T-HK.22 | After Spot, a friendly shooter within 3" of the Lokâtr can select the spotted Conceal enemy in Light cover (Seek Light) and that enemy is not obscured; a shooter 4" away gets nothing; the token ends with the TP.
TEAM-HK-020 | T-HK.23 | Shooting an enemy within 3" of the Pan Spectral Scan marker grants Accurate 1 and Saturate; the marker is removed when the Lokâtr next activates or is incapacitated, but not by a counteraction.
TEAM-HK-021 | T-HK.24, T-HK.25 | A roster with the Lugger may take five equipment options (four without it) and gains 1 extra CP in TP1 only; the Lugger performs one mission action per activation for 1 AP less, the second at full cost.
TEAM-HK-022 | T-HK.26 | A Warrior contesting an objective marker takes 1 less damage from the first damaging success of each enemy sequence; off the marker it takes full damage.
TEAM-HK-023 | T-HK.29, T-HK.30 | Need Keeps adds 1 to the Hearthkyn control total on the chosen marker and turns Atk 3 melee into Atk 4 (Atk 4 gains Balanced) within 3"; Toil Earns makes a token-less enemy within 3" of its marker convert one success.
TEAM-HK-024 | T-HK.31, T-HK.32 | Wrought Defence turns one fail into a normal success when the rolled defence dice show at most one success; Proximate Firepower improves a 4+ weapon to 3+ against an enemy within 6" and leaves a 3+ weapon unchanged.
TEAM-HK-025 | T-HK.33 | The Ancestors Are Watching gives one free Shoot or Fight in that activation (not a second Shoot if it already shot) and an injured operative's weapons keep their printed Hit while its Move stays reduced.
TEAM-HK-026 | T-HK.34 | Worth It lets an incapacitated Hearthkyn operative perform one free mission action whose conditions hold before it is removed.
TEAM-HK-027 | T-HK.35 | Sturdy turns the attacker's retained crits into normals after Devastating damage and Piercing Crits have already been applied.
TEAM-HK-028 | T-HK.36 | Engage to Acquire re-rolls attack dice only when the enemy target controls an objective or mission marker; it is not offered against a non-controlling enemy or when retaliating.
TEAM-HK-029 | T-HK.37, T-HK.38, T-HK.39, T-HK.40 | Plasma Knives gives every Hearthkyn operative but the Field Medic the 3-Atk knife; Climbing Rigs makes one 4" climb cost 2" once per activation; Excavation Tools makes Pick Up Marker cost 0 AP; Writ of Claim re-rolls the initiative die once per battle only while contesting two objectives.

## TEAM-KS - Kasrkin

TEAM-KS-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-KS-001 | T-KS.1, T-KS.2 | Sergeant plus 9 validates with four Troopers, three Gunners with different weapons and the Sharpshooter; a fifth Gunner-or-Sharpshooter, two Gunners with the same weapon, a second Combat Medic, or an 11th operative is rejected; five Troopers plus four Gunners and no Sharpshooter is legal.
TEAM-KS-002 | T-KS.3, 11.3 | The Sergeant accepts only the four printed sets (plasma pistol brings both profiles); the Gunner takes exactly one of the five weapons plus gun butt, and grenade launcher, volley gun and plasma gun bring both profiles; the Sergeant's gun butt rolls at 3+, a Trooper's at 4+; the Sergeant's power weapon has Lethal 5+; the meltagun is 6/3.
TEAM-KS-003 | T-KS.20, T-KS.8 | The SKILL AT ARMS gambit is offered in the Strategy phase, the pick shows in `view` for both seats and lasts until the next Ready step; with the Sergeant in the killzone two different picks are asked for, with the Sergeant incapacitated only one; the gambit cannot be used twice in a TP.
TEAM-KS-004 | T-KS.21 | With Light 'Em Up, a hot-shot lasgun roll of no crits and two normals changes one normal to a crit; against an obscured target nothing changes; melee weapons do not gain Severe.
TEAM-KS-005 | T-KS.22 | With Strike Fast, a Reposition may cover 7" (5" when injured); a Dash is still 3" and a Charge still Move plus 2".
TEAM-KS-006 | T-KS.23 | With Ice In Your Veins, the first normal hit of Dmg 3 in a Shoot deals 2 and the second deals 3; a crit is never reduced; a Dmg 2 normal is not reduced and does not use up the reduction; a Blast secondary's sequence gets its own reduction.
TEAM-KS-007 | T-KS.24 | With For Cadia!, a Trooper's gun butt and combat dagger roll 4 dice and the Sergeant's chainsword stays at 4; the attacker's first strike deals 1 extra damage; a retaliating Kasrkin gets the Atk bonus but no extra damage.
TEAM-KS-008 | T-KS.25 | A Trooper that has not moved Shoots twice with the hot-shot lasgun; after a Reposition only one Shoot is allowed; a Gunner whose first Shoot used the flamer gets no second; after two Shoots, Reposition, Dash and Guard are not offered; Shoot then Reposition is legal.
TEAM-KS-009 | T-KS.7 | Tactical Command (0 AP) gives one operative a skill the team does not have (the team's skill is not offered); a second use on that operative replaces the first; both effects end at the next Ready step; its alternative mode moves the Clearance Sweep marker; it is not offered in an enemy's control range or as a counteraction.
TEAM-KS-010 | T-KS.9 | A friendly Trooper within 3" of the Combat Medic taken to 0 wounds is left on 1, takes a free Dash ending in the Medic's control range, both get APL -1, and its activation ends if it was its own; a second save in the same TP is not offered; not offered when the Medic is a Blast secondary target.
TEAM-KS-011 | T-KS.10 | MEDIKIT (0 AP) heals a friendly operative in control range by 2D3 (capped at starting wounds), the Combat Medic itself included; the Medic! target of this TP is not selectable.
TEAM-KS-012 | T-KS.11 | The Demo-Trooper starts carrying the Melta Mine; Place Marker puts it in its control range (spots in an enemy's control range refused) and offers a free Dash; it can Pick Up the marker again; incapacitated while carrying with no legal spot, the marker is removed with it.
TEAM-KS-013 | T-KS.12 | An enemy ending a move within 1" of the placed Melta Mine takes 2D6+3, the marker is removed and it triggers only once; a friendly Trooper sets it off too; the Demo-Trooper never does; a carried mine never triggers.
TEAM-KS-014 | T-KS.13 | Shot by a frag grenade launcher (Blast) the Demo-Trooper may re-roll one defence die; shot by the sweeping or focused hot-shot volley gun it may not; 1" Devastating splash from a sequence aimed at another operative deals it 0, while as the target it takes full damage.
TEAM-KS-015 | T-KS.14, T-KS.29 | Relocate costs 0 CP when the Recon-Trooper is the first pick and 1 CP otherwise; it is not offered in TP1; the first pick and every friendly within 3" of it that is more than 3" from enemies may each take an optional free Dash in a chosen order.
TEAM-KS-016 | T-KS.15 | After AUSPEX SCAN an enemy within 8" of the Recon-Trooper is scanned and a Kasrkin shooting it ignores obscured; an enemy at 9" is not; the scan survives a counteraction and ends when the Recon-Trooper next activates or is incapacitated.
TEAM-KS-017 | T-KS.16, T-KS.6 | The Sharpshooter can use the concealed profile while on Conceal in its first Shoot of the battle; in any later Shoot that profile is not offered (also after a first Shoot with the mobile profile); the stationary profile is not offered after it moved this activation.
TEAM-KS-018 | T-KS.17 | Shooting the Sharpshooter in cover with a flamer lets it retain its cover save (Saturate ignored) plus one improvement (an extra save or a crit save); on Vantage the improvements do not stack.
TEAM-KS-019 | T-KS.18 | In one TP one Trooper performs Smoke Grenade and another Stun Grenade with no grenade equipment taken; a second Smoke Grenade by a Trooper that TP is refused; a Gunner is not offered either; team-picked grenades are not used up.
TEAM-KS-020 | T-KS.19 | BATTLE COMMS gives another friendly Trooper APL 3 until the end of its next activation; the Vox-Trooper may perform it twice in one activation; a Sergeant at APL 3 gains nothing; it cannot pick itself.
TEAM-KS-021 | T-KS.26 | With Elimination Pattern a hot-shot lasgun shooting a target not in cover has Piercing Crits 1, a target in cover does not unless scanned; the hot-shot volley gun gets Piercing 1; a meltagun gains nothing; a Severe crit triggers the Piercing Crits.
TEAM-KS-022 | T-KS.27 | With Engage from Cover a Kasrkin shot while in cover re-rolls one defence die; out of cover it does not.
TEAM-KS-023 | T-KS.28 | With Clearance Sweep placed, a Kasrkin within 5" horizontally of the marker shooting an enemy within 5" of it has Ceaseless; an enemy at 6" does not; the marker is gone at the next Ready step.
TEAM-KS-024 | T-KS.30 | Seize the Initiative is offered only to the player without initiative at the start of the Firefight phase; the chosen operative may Shoot for free but is not offered Reposition, Dash, Charge or a 0 AP action; it can Shoot again in its activation.
TEAM-KS-025 | T-KS.31 | When a Kasrkin Falls Back within 6" of a ready, visible friendly Kasrkin outside enemy control range, that friend may Shoot for free after the move (Conceal flipped to Engage); an expended friend is not offered.
TEAM-KS-026 | T-KS.32 | Neutralise Target re-rolls any attack dice when the target is not in cover or is scanned; it is not offered against a target in cover that is not scanned.
TEAM-KS-027 | T-KS.33 | Give No Ground on an objective with one 2 APL Kasrkin and one 2 APL enemy contesting gives Kasrkin control; with 3 against 3 it does nothing; used at the end of the Firefight phase it decides the TP's scoring.
TEAM-KS-028 | T-KS.34 | With Foregrip a hot-shot lasgun shooting an enemy within 3" has Accurate 1; a hot-shot laspistol, a plasma pistol or a frag grenade does not; at 4" nothing.
TEAM-KS-029 | T-KS.35 | With Long-Range Scope a hot-shot lasgun shooting at 8" that retains a crit has Saturate (no cover save retained); without a crit, or at 5", or with the hot-shot laspistol, cover saves are kept.
TEAM-KS-030 | T-KS.36 | Relics of Cadia turns one of two fails into a normal success once per TP, in a Shoot or a fight (retaliating included); a roll with one fail is not offered; the second use in a TP is refused.
TEAM-KS-031 | T-KS.37 | With Combat Daggers every Kasrkin operative has the combat dagger (3 4+ 3/4) as a fight option.
TEAM-KS-032 | T-KS.5 | The hot-shot name test marks the lasgun, laspistol, both volley gun profiles and all marksman rifle profiles as hot-shot weapons and nothing else; every operative carries KASRKIN, IMPERIUM and ASTRA MILITARUM, the Combat Medic also MEDIC.

## TEAM-NV - Novitiates

TEAM-NV-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-NV-001 | T-NV.1, T-NV.2 | A roster is 1 Superior plus 9: three Militants and two Purgatus are legal; a third Purgatus, a second copy of any other entry, or an 11th operative is rejected.
TEAM-NV-002 | T-NV.3, T-NV.5 | The Superior offers exactly its three weapon pairs (the plasma pistol brings both profiles), the Militant its two; every other card is fixed (Preceptor has only the mace); the Superior's gun butt is Hit 3+ and the others' 4+; every operative has NOVITIATE and the Hospitaller has MEDIC.
TEAM-NV-003 | T-NV.29 | In the Ready step the Faith pool gains ceil(alive NOVITIATE / 2): 5 in TP1 with ten operatives, 4 after three are incapacitated; the pool carries over with no cap and each change emits PoolChanged.
TEAM-NV-004 | T-NV.30, T-NV.31 | Guidance costs 1 Faith and adds a one-die re-roll on a Novitiate's attack roll (shoot and fight) and defence roll; it cannot re-roll an already re-rolled die or a cover save, and is not offered while the side's re-rolls are banned.
TEAM-NV-005 | T-NV.32 | Blessing costs 2 Faith and turns one normal into a crit before Rending/Punishing/Severe (Rending then triggers, Severe does not); it is not offered against an obscured target.
TEAM-NV-006 | T-NV.33 | Intervention costs 3 Faith and turns one fail into a normal success, on attack dice and on defence dice (an extra save that blocks).
TEAM-NV-007 | T-NV.30 | Only one act per sequence; each Blast or Torrent target is a new sequence with its own act; no act is offered when the pool cannot pay, nor on the enemy's dice.
TEAM-NV-008 | T-NV.42 | With Icon of Faith a second, different act is offered in the same sequence once per TP; the same act twice is never offered; the TP use is spent only when the second act is taken.
TEAM-NV-009 | T-NV.44 | Auto-chastisers (once per TP, attack rolls only) deals self-damage equal to the act's cost and applies that act at 0 Faith; it is not offered when the damage would incapacitate; it uses the sequence's one act.
TEAM-NV-010 | T-NV.43 | Sanctified Rounds: an autopistol/autogun/relic bolt pistol/relic boltgun gains Piercing Crits 1 for the sequence after a Faith spend (act or standalone 1 point); a flamer never does; a free Auto-chastisers act does not qualify.
TEAM-NV-011 | T-NV.36 | Blessed Rejuvenation: each Faith spend heals the operative it was spent on D3 at the end of the action (also in the enemy's Shoot); nothing for a 0-Faith act or if it was incapacitated.
TEAM-NV-012 | T-NV.19 | Militant Faith refunds the act's Faith when an enemy is incapacitated in that sequence while the Militant shoots, fights or retaliates; not when the Militant was the one shot; with Icon only one act is refunded.
TEAM-NV-013 | T-NV.7 | The Superior incapacitating an enemy gains 1 Faith (2 against a Wounds stat of 12+); Glorious Martyrdom damage from a dying Superior gives none.
TEAM-NV-014 | T-NV.22 | The Preceptor gains Faith for incapacitating a ready enemy within its control range (including one fighting in its own activation), not an expended or out-of-range one.
TEAM-NV-015 | T-NV.8, T-NV.9, T-NV.10 | Within 6" of a Condemnor an enemy cannot use a PSYCHIC ranged weapon or PSYCHIC action; the Condemnor and any operative within 6" of it cannot be picked by a PSYCHIC action; a PSYCHIC ranged weapon from beyond 6" deals 0 damage to the Condemnor; nothing applies once the Condemnor is incapacitated.
TEAM-NV-016 | T-NV.11 | A PSYCHIC melee weapon wielded within 6" of a Condemnor has no weapon rules and deals at most 3/4 even with another team's Dmg bonus.
TEAM-NV-017 | T-NV.12 | Stakethrower and null rod gain +1/+1 Dmg and Lethal 5+ against a PSYKER (Legionaries Balefire Acolyte), not against other operatives; Devastating stays 2.
TEAM-NV-018 | T-NV.13, T-NV.14 | Stirring Rhetoric gives +1 APL to a friendly within 6" of the Dialogus or of the Auto-broadcaster marker (never the Superior); the 0 AP Auto-broadcaster places/moves the marker 8" horizontally and enemies within 3" of it cannot re-roll attack dice; the marker goes when the Dialogus is removed.
TEAM-NV-019 | T-NV.15 | A Duellist crit block inflicts 5 damage on the enemy fighter as a crit strike (the enemy's per-die reduction applies) and ends the fight if it incapacitates.
TEAM-NV-020 | T-NV.16 | Whip Into Frenzy gives a friendly non-Superior within 3" +1 APL, +1" Move and two Fights in its next activation, the first at 0 AP; it cannot be stacked and ends with that activation.
TEAM-NV-021 | T-NV.21, T-NV.16 | A Penitent's Fight is followed by an optional free Fight that does not chain; under Whip Into Frenzy it performs four Fights in one activation (two Whip Fights, each followed by an Absolution Fight).
TEAM-NV-022 | T-NV.20 | The eviscerator has Ceaseless when the Penitent fights and not when it retaliates.
TEAM-NV-023 | T-NV.17, T-NV.18 | Medic! saves another Novitiate within 3" once per TP (1 wound, free Dash into the Hospitaller's control range, both APL -1, activation ends); Chirurgeon's Tools heals 2D3 (self allowed) but not this TP's Medic! target.
TEAM-NV-024 | T-NV.23 | Friendly Novitiates within 3" of the Preceptor have Severe on their weapons; one at 4" does not.
TEAM-NV-025 | T-NV.24, T-NV.25 | The Pronatus's first mission action in an activation costs 1 AP less; SECURE by the Pronatus gains Faith equal to the TP number once per TP.
TEAM-NV-026 | T-NV.27, T-NV.28 | The Reliquarius counts APL +1 for marker control; Raise Icon gains 1 Faith, plus the TP number while it controls an objective, once per TP.
TEAM-NV-027 | T-NV.39, T-NV.26 | Blazing Inferno after flamer crit damage gives one target a Blaze token; that operative takes D3 at each activation start and may take APL -1 to remove it; a Purgatus makes it 0 CP once per TP, but the ploy is still once per TP.
TEAM-NV-028 | T-NV.34 | Ardent Vengeance gives Punishing against an expended enemy and not against a ready one (nor when retaliating against an enemy in its own activation).
TEAM-NV-029 | T-NV.35 | Defenders of the Faith halves one normal success's damage (round up, minimum 2) on a Novitiate contesting an objective; crits are never halved; no effect off the objective.
TEAM-NV-030 | T-NV.37 | Righteous Advance (not TP1) lets floor(n/3), at least 1, Novitiates Dash for free; a Dash that ends closer to none of closest enemy, closest objective or the enemy drop zone is not allowed.
TEAM-NV-031 | T-NV.38 | Glorious Martyrdom on an incapacitated Novitiate gains 1 Faith and deals D3 to each enemy visible within 2"; it is not offered after a Medic! save.
TEAM-NV-032 | T-NV.40 | Blinding Aura makes the shooter re-pick another valid target (the Novitiate stays unpickable while more than 2" away for that activation); with no other target the Shoot ends as performed; a Blast secondary pick does not trigger it.
TEAM-NV-033 | T-NV.41 | Guided by Faith gives the chosen ranged weapon Seek Light against targets within 6" (a Conceal enemy in Light cover within 6" becomes a valid target), not beyond 6".
TEAM-NV-034 | T-NV.45 | With Holy Embrocations an injured Novitiate keeps its full Move but still suffers the Hit worsening.

## TEAM-PH - Phobos Strike Team

TEAM-PH-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-PH-001 | T-PH.1, T-PH.2 | One Sergeant plus 5 picks validates with two Infiltrator Warriors, an Incursor Warrior and two Reiver Warriors; a second Saboteur, two Sergeants, a 7th operative or a 5-operative roster is rejected.
TEAM-PH-002 | T-PH.3 | A Reiver (Sergeant or Warrior) takes either pistol and combat knife or bolt carbine and fists, never a mix; the Incursor Sergeant has the occulus bolt carbine (Saturate); every other card has its fixed weapons.
TEAM-PH-003 | T-PH.25, T-PH.5 | A Phobos operative may Shoot twice in one activation with the same marksman bolt carbine and Fight twice; it counteracts with a Conceal order; the remote detonator is not a bolt weapon and frag grenades are not either.
TEAM-PH-004 | T-PH.23 | Omni-Scrambler with three INFILTRATORs in the killzone keeps the chosen enemy out of the activate options and bars its free actions until the opponent has activated three operatives, or earlier when it is their last ready operative; it is not offered without an INFILTRATOR in the killzone or without a qualifying enemy.
TEAM-PH-005 | T-PH.24 | An enemy within 3" of a Reiver pays +1 AP for a mission action (one +1 with two Reivers near) and its side's contesting APL total drops by 1; an enemy 4" away is unaffected.
TEAM-PH-006 | T-PH.26 | An Incursor shooting an enemy that would be obscured treats it as not obscured (no discarded success, crits kept) while its cover save still applies; an Infiltrator gets no such benefit.
TEAM-PH-007 | T-PH.7 | The Phobos player may re-roll its initiative die once per battle while its Sergeant is in the killzone; a second TP offers nothing; an incapacitated Sergeant offers nothing.
TEAM-PH-008 | T-PH.8 | The first Critical Shot for the Sergeant costs 0 CP and the second (next TP) costs 1; Command Re-roll on the Sergeant's dice is free when unused; Patient Ambush is free only while the Sergeant is ready and out of enemy control range.
TEAM-PH-009 | T-PH.9 | With the Commsman in the killzone and out of enemy control range a Ready-step roll of 4+ adds 1 CP and 3 adds none; the Commsman in an enemy's control range rolls nothing.
TEAM-PH-010 | T-PH.10 | During a friendly activation Comms Array swaps Deadly Shots for Lethal Assaults at 0 CP (Balanced moves from ranged to melee weapons); it is offered once per TP, not without the Commsman in the killzone, and never to a ploy already used this TP.
TEAM-PH-011 | T-PH.11 | Medic! keeps a friendly within 3" on D3 wounds, both get APL -1, the saved operative may Dash into the Helix Adept's control range; once per TP; not when either is in an enemy's control range or the Helix Adept is the Shoot target.
TEAM-PH-012 | T-PH.12 | Helix Gauntlet restores up to D3+3 wounds capped at starting wounds, may target the Helix Adept itself, and cannot target this TP's Medic! operative.
TEAM-PH-013 | T-PH.13 | The Saboteur starts carrying the Explosives marker; Place Marker puts it within 1" and offers a free Dash; no other operative of either side can pick the marker up; the Saboteur can pick it up again in a later activation.
TEAM-PH-014 | T-PH.14 | Detonate shoots every operative within 2" of the Explosives marker (a friendly one and a Conceal enemy out of sight included) as separate sequences with no cover and no obscuring; an operative behind Heavy terrain that wholly intervenes is not shot.
TEAM-PH-015 | T-PH.14 | The remote detonator cannot be selected while the marker is carried or with nobody within 2"; after it fires the marker is removed and the weapon is spent (Limited 1); after a Reposition it cannot be fired, after a Dash it can.
TEAM-PH-016 | T-PH.15 | The Veteran's two Custom picks must differ and are only offered for the Veteran; Rending plus Lethal 5+ picks make a 5 a crit and let Rending upgrade a normal.
TEAM-PH-017 | T-PH.16 | An enemy within 6" of the Voxbreaker cannot use Balanced, Ceaseless or Command Re-roll on its attack dice or re-roll its defence dice; at 7" it can.
TEAM-PH-018 | T-PH.17 | After Auspex Scan an Infiltrator shooting an enemy within 8" of the Voxbreaker ignores obscuring, an Incursor also gets Seek Light and can target a Conceal enemy in Light cover; the effect ends at the Voxbreaker's next activation or incapacitation.
TEAM-PH-019 | T-PH.18 | The first mission action by a Warrior in a TP costs 1 AP less and the second Warrior's costs full price in the same TP; the discount returns next TP.
TEAM-PH-020 | T-PH.19 | The Incursor Marksman may perform Guard with a Conceal order; when it interrupts, its order becomes Engage before the shot; another operative cannot Guard under Conceal.
TEAM-PH-021 | T-PH.20 | The Minelayer starts carrying the Haywire Mine; Place Marker is refused while an enemy is close enough that a spot in its control range could be in that enemy's control range; a Minelayer incapacitated in melee loses the mine when no legal spot exists.
TEAM-PH-022 | T-PH.21 | An enemy Reposition crossing within 1" of the placed Haywire Mine stops at that point, takes 2D3+3 and APL -1, and its action ends; a friendly Phobos operative also sets it off; the Minelayer never does; it fires only once.
TEAM-PH-023 | T-PH.22 | A Reiver climbing a 3" wall pays 2" vertical and drops 4" for free; a non-Reiver pays 3" and 2" respectively.
TEAM-PH-024 | T-PH.27 | With Guerrilla Warfare used, a Phobos operative may spend 1 AP to change its order (also as a counteraction); not in an enemy's control range; the action is gone next TP.
TEAM-PH-025 | T-PH.28 | With And They Shall Know No Fear used, an injured Phobos operative keeps 7" Move and its weapons' printed Hit.
TEAM-PH-026 | T-PH.29 | Deadly Shots gives Balanced to a Shoot after a Dash, not after a Reposition unless the target is out of cover and more than 6" away; checked per target.
TEAM-PH-027 | T-PH.30 | Lethal Assaults gives Balanced to a Phobos operative's own Fight, plus Lethal 5+ after a Charge in that activation, and nothing when it retaliates.
TEAM-PH-028 | T-PH.31 | Patient Ambush passes the turn without activating a Phobos operative, once per TP, and is not offered on a counteract turn.
TEAM-PH-029 | T-PH.32 | Critical Shot with a bolt weapon adds D3 to the first unblocked crit's damage, once per TP; it is not offered for the remote detonator or without a retained crit.
TEAM-PH-030 | T-PH.33 | Transhuman Physiology turns one retained normal defence success (the cover save included) into a crit, so it can block a crit.
TEAM-PH-031 | T-PH.34 | A Conceal operative activated on Engage that Charges then Fights resolves two dice before the enemy's first; not after any other first action, and not on its second Fight.
TEAM-PH-032 | T-PH.35 | Purity Seals turns one of two attack fails into a normal success (shooting, fighting or retaliating), once per TP for the team; not offered with one fail.
TEAM-PH-033 | T-PH.36 | Additional Utility Grenades gives four smoke and stun uses in total; it cannot be taken with the universal Utility Grenades.
TEAM-PH-034 | T-PH.37, T-PH.38 | Every Phobos operative may fight with the combat blade (a pistol-and-knife Reiver too); Special Issue Ammunition gives an occulus bolt carbine Piercing 1 for the rest of the TP (its second Shoot too) once per TP, and is not offered for the stalker marksman bolt carbine.

## TEAM-CV - Corsair Voidscarred

TEAM-CV-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-CV-001 | T-CV.1, T-CV.2 | A roster of the Felarch plus 8 main-list picks validates; several WARRIORs are accepted; a second copy of any other main-list operative, a 10th operative or a missing Felarch is rejected.
TEAM-CV-002 | T-CV.2 | A roster with a blaster Gunner and a wraithcannon Heavy Gunner is rejected by the loadout cap; either one alone validates, and the default roster is cap-legal.
TEAM-CV-003 | T-CV.3, T-CV.5 | Loadouts: the Felarch offers exactly the two printed options; the Warrior offers pistol + power weapon or rifle + fists; the shuriken cannon option brings both profiles; fixed cards show no picker; PSYKER is on the Soul Weaver and Way Seeker, MEDIC on the Soul Weaver.
TEAM-CV-004 | T-CV.24 | In its own activation a Corsair's first Dash costs 0 AP and can be taken after all AP are spent; a second Dash is barred (R-3.7), a Dash after a Charge is barred, and a Charge after the free Dash is barred.
TEAM-CV-005 | T-CV.24 | A counteracting Corsair can Dash (cost 1 AP, no discount), and a free Dash frame from another rule is unaffected; the discount never makes a counteraction illegal.
TEAM-CV-006 | T-CV.7, T-CV.31 | The Felarch's first 1 AP action of its activation costs 0 and the second costs 1; a 2 AP Fall Back is not discounted but a Fall Back at 1 AP under Capricious Flight is; the Felarch gets no extra free Dash.
TEAM-CV-007 | T-CV.23 | A shuriken rifle or ranger long rifle gains Accurate 1 when the operative has not Charged, Fallen Back or Repositioned this activation (Dash keeps it, Reposition removes it); the shuriken pistol never gains it; a counteraction Shoot qualifies.
TEAM-CV-008 | T-CV.8 | After an enemy action (also a counteraction), a ready Felarch may use One Step Ahead: a D6 above the enemy's APL gives a free Shoot or Fight against that enemy only, then APL -1 until the end of the Felarch's next activation; a failed roll spends the battle use with no penalty; an expended Felarch is never offered it.
TEAM-CV-009 | T-CV.9 | Shooting the Fate Dealer with a Saturate weapon still lets it retain cover saves, and with a cover save available it retains one extra cover save or one as a crit; not stacked with the Vantage improved cover save.
TEAM-CV-010 | T-CV.10 | A Kurnathi that Charged 6" of its 9" (and whose enemy was then incapacitated) may Dash up to 3"; one that Charged 8" may Dash only 1"; the Dash is free under Aeldari Raiders; it is never offered without a Charge or while in an enemy's control range.
TEAM-CV-011 | T-CV.11 | When the Kurnathi fights or retaliates its player is offered one block before the normal order (or a pass); it can never strike with that early resolution.
TEAM-CV-012 | T-CV.12 | The Kurnite Hunter's first retaliation of a TP while ready resolves first; its second retaliation that TP follows the normal order; a first retaliation while expended spends the rule for the TP.
TEAM-CV-013 | T-CV.13 | The Erudite Hunter gambit marks an enemy within 9" (one at 10" cannot be picked); after that enemy moves, the Kurnite Hunter may take a free Charge ending in its control range (flipping Conceal to Engage) or a free Reposition, and a Reposition path ending further from the enemy is rejected; only once per TP.
TEAM-CV-014 | T-CV.14 | The Shade Runner's warp-jump Reposition sets it up 7" away across terrain it could not walk through, never in an enemy's control range; a warp-jump Charge ends in an enemy's control range; Dash offers no warp jump; a counteraction warp jump is limited to 2".
TEAM-CV-015 | T-CV.15 | After a warp-jump Reposition an enemy beside the route (bent line of 7" or less) can take D3+2; an enemy that needs a longer line, or that was not visible when the action began, is not offered; no offer after a warp-jump Charge or a walked Reposition.
TEAM-CV-016 | T-CV.16, T-CV.17 | Soul Channel gives another friendly Corsair visible and within 6" APL +1 until its next activation ends (not the Soul Weaver itself); Soul Heal restores 2D3 (capped) and may pick the Soul Weaver; neither is offered in an enemy's control range.
TEAM-CV-017 | T-CV.6, T-CV.16, T-CV.21, T-CV.22 | Within 6" of a Novitiate Condemnor the Way Seeker cannot perform its PSYCHIC actions or shoot freezing grasp or lightning strike (shuriken pistol still works), and PSYCHIC actions cannot pick an operative the Null Rod protects.
TEAM-CV-018 | T-CV.18 | The Starstorm Duellist in an enemy's control range can Shoot, may target only enemies in its own control range (even with another friendly operative in that enemy's control range), and takes no point-blank Hit penalty.
TEAM-CV-019 | T-CV.18 | A guarding Duellist in an enemy's control range interrupts with a normal Shoot (FAQ): no Hit worsening, target limited to its control range, and it can still retaliate later in that activation.
TEAM-CV-020 | T-CV.19 | Pistol Barrage makes one free Shoot with each pistol in the chosen order; it is barred under Conceal and after a Shoot in the activation, and a Shoot is barred after it; with no fusion pistol target left the second Shoot is skipped; it works in an enemy's control range.
TEAM-CV-021 | T-CV.20, T-CV.30, T-CV.31 | Capricious Flight and Light Fingers cost 0 CP when a WARRIOR is the subject and 1 CP otherwise; each is still usable once per TP.
TEAM-CV-022 | T-CV.21 | Warp Fold swaps two friendly Corsairs within 5" (the Way Seeker may be one); the ready one cannot Reposition, Fall Back or Charge in its activation this TP if the other already Repositioned; a guard on a swapped operative ends; an operative at 6" cannot be picked.
TEAM-CV-023 | T-CV.22 | Warding Shield ignores the first Normal Dmg die on the shielded operative, not a crit or Devastating damage; it ends at the start of the Way Seeker's next activation, on its incapacitation, or when it casts the shield again.
TEAM-CV-024 | T-CV.35 | With Runes of Guidance, Soul Heal can pick an operative 8" away once per TP (the use is spent then, not when picking one within 6"); Warp Fold stays at 5".
TEAM-CV-025 | T-CV.25 | Plunderers is not offered in TP1; in TP2 up to D3 picked Corsairs Dash at once; each of them cannot Dash (free or Blademaster) in its activation that TP, while the Felarch keeps Veteran Raider.
TEAM-CV-026 | T-CV.26 | Under Piratical Profiteers a Corsair's weapons gain Balanced when it or the enemy in the sequence contests an objective marker, and not otherwise.
TEAM-CV-027 | T-CV.27 | Under Mobile Engagement a Corsair that moved in an action this TP (a free Dash counts) re-rolls one defence die; one that has not moved, or was only swapped by Warp Fold, does not.
TEAM-CV-028 | T-CV.28 | Under Outcasts a Corsair more than 5" from every friendly operative has Punishing; one within 5" of a friend does not.
TEAM-CV-029 | T-CV.29 | Opportunistic Fighters on an enemy Fall Back with two Corsairs in its control range deals 2D3 twice before it moves; if that incapacitates it, it never moves.
TEAM-CV-030 | T-CV.30 | Light Fingers lets a Corsair in an enemy's control range perform a mission action (SECURE) that activation; the next activation the enemy blocks it again.
TEAM-CV-031 | T-CV.32 | Contemptuous Adventurer is offered only for the seat's first activation of the TP with the operative more than 5" from every friend; its first Shoot (all sequences) or first Fight has Relentless, and a later Shoot or Fight in that activation does not.
TEAM-CV-032 | T-CV.33 | With Diuturnal Mantles a Corsair shot by a Blast or Torrent weapon re-rolls one defence die; a Corsair within 2" of a lightning strike or other x" Devastating target takes no splash damage while the target still does.
TEAM-CV-033 | T-CV.34 | Mistfield, used against a shooter more than 3" away, turns Piercing 2 into Piercing 1 and Piercing 1 into none for that sequence; it is not offered for a shooter within 3" and only once per TP.
TEAM-CV-034 | T-CV.36 | Star Charts in TP1 gains 1 CP on a D3 of 2 or 3 and is then never offered again; a failed TP1 roll lets it be tried in TP2; it is not offered from TP3.
TEAM-CV-035 | T-CV.4, T-CV.24, T-CV.23 | A full simulated game with the default Corsair roster against another team completes without engine errors, with at least one free Dash and one Rifles Accurate shot recorded.

## TEAM-WC - Warpcoven

TEAM-WC-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-WC-001 | T-WC.1, T-WC.2 | A roster is exactly 5 selections with no leader slot: two Tzaangors cost one selection (a lone Tzaangor costs a whole one), both WARRIOR cards repeat, every other card at most once, and a roster with no SORCERER is rejected.
TEAM-WC-002 | T-WC.3 | Loadouts: every Sorcerer has its force stave and card PSYCHIC weapons plus one of inferno bolt pistol, khopesh or warpflame pistol; a second warpflame pistol is rejected; the soulreaper cannon brings both profiles and is capped at one; Champion and Tzaangor Warrior options resolve.
TEAM-WC-003 | T-WC.21, T-WC.5 | Each Sorcerer takes exactly one boon, two Sorcerers cannot share one, the boon is not a keyword (`hasKeyword` false), it is visible to both seats, and defaults give each default Sorcerer a different boon.
TEAM-WC-004 | T-WC.6 | Doombolt, fluxblast, firestorm, mindburn and force stave are PSYCHIC weapons and the five Sorcerer actions are PSYCHIC; within 6" of a Null Rod the actions and PSYCHIC ranged weapons are unavailable, the Condemnor cannot be picked, and a lasting effect (Alight Ceaseless) does nothing while an operative it touches is in range.
TEAM-WC-005 | T-WC.31 | A Rubric Gunner may Shoot twice with its warpflamer with the second costing 1 more AP (also soulreaper focused then sweeping); a Sorcerer cannot pick the doombolt for both Shoots but may Shoot doombolt then pistol; Sorcerers and Rubrics counteract under Conceal; a Tzaangor gets one Shoot and needs Engage to counteract.
TEAM-WC-006 | T-WC.22, T-WC.28 | Incorporeal Sight gives Saturate to the Sorcerer's ranged weapons and its targets are never obscured; Twist of Fate gives its PSYCHIC ranged weapons Piercing Crits 1 and not its pistol.
TEAM-WC-007 | T-WC.23, T-WC.25 | Time-Walk adds 1" Move (still -2" when injured); Warp Swell adds 1 to the Normal Dmg of its melee weapons only.
TEAM-WC-008 | T-WC.24 | Echoes from the Warp, once per battle in a counteraction, may flip the order and allows a second free 1 AP action that differs from the first, within one shared 2" move cap; a second counteraction in a later TP gets no extra action.
TEAM-WC-009 | T-WC.26 | Mutant Appendage lets the Sorcerer perform a mission action with an enemy in its control range and makes the first Pick Up Marker, Place Marker or mission action of each activation cost 1 less AP.
TEAM-WC-010 | T-WC.27 | Immaterial Flight sets the Sorcerer up within its Move horizontally on a Reposition or Charge (no +2" on Charge), never in an enemy's control range unless Charging, once per TP, never while counteracting.
TEAM-WC-011 | T-WC.29 | Astral Bombardment turns the doombolt's Devastating 2 into 2" Devastating 2 (a friendly operative within 2" of the target also takes 2), gives the fluxblast Devastating 1, and on the Warpfire's picked weapon offers Devastating 1 at Shoot declaration, which removes Seek Light for that action.
TEAM-WC-012 | T-WC.30 | Master of the Immaterium lets Ravage Destiny pick an enemy at 11.5" and Reconstitution Ritual a friend at 8.5", while Temporal Flux's return still needs the operative wholly within 6" of the marker.
TEAM-WC-013 | T-WC.7 | Protected by Fate grants re-rolls of any defence dice to the picked friendly operative when shot, and ends when the Destiny Sorcerer next activates, is incapacitated, or the action is performed again on another operative.
TEAM-WC-014 | T-WC.8 | Ravage Destiny forces the enemy to re-roll its attack dice showing 6 (shooting and fighting) before optional re-rolls, lowers its control APL by 1 without being an APL change, and cannot pick an enemy beyond 9".
TEAM-WC-015 | T-WC.9 | Reconstitution Ritual heals 2D3 (capped at starting wounds), may target the Tempyrion itself, and is refused for any friendly operative once performed this TP.
TEAM-WC-016 | T-WC.10 | Temporal Flux returns the picked operative next to the marker at the end of its next activation when wholly within 6" of it, removes the marker without a set-up when it is not, ignores counteractions, refuses a second use while the marker is down, and does not set up an operative that ends its activation within a Null Rod's 6".
TEAM-WC-017 | T-WC.11 | A mindburn crit that deals damage in the Resolve step gives a Mindburn token; the holder's weapons are Hit +1 worse unless it is injured; the token goes at the end of the holder's next activation or when mindburn is used again.
TEAM-WC-018 | T-WC.12 | Alight gives friendly WARPCOVEN operatives Ceaseless when shooting or fighting the token holder (and when retaliating against it), and the token ends at the Warpfire's next activation start.
TEAM-WC-019 | T-WC.13, T-WC.14 | A Rubric Marine activated with no friendly Sorcerer within 9" has APL 2 for that activation and keeps APL 3 with one in range; both Icon Bearers count APL +1 for marker control.
TEAM-WC-020 | T-WC.15 | The Rubric Warrior's inferno boltgun has Ceaseless when it has not Charged or Repositioned this activation (also after a Dash, and when counteracting), and loses it after a Reposition.
TEAM-WC-021 | T-WC.16 | After the Tzaangor Champion's first Fight in its activation it may perform a free Fight against a different enemy; no third Fight is offered, and nothing is offered while counteracting or when no enemy is in its control range.
TEAM-WC-022 | T-WC.17, T-WC.18 | Brayhorn (0 AP) gives every friendly Tzaangor +1" Move until the next Ready step and is never offered as a counteraction; Herd Banner reduces a Normal Dmg 3+ die on a Tzaangor within 3" of the Icon Bearer by 1 and leaves crits alone.
TEAM-WC-023 | T-WC.19 | Relic Hunters makes one Tzaangor Warrior's action in the opponent's territory cost 1 less AP once per battle; a second Tzaangor Warrior then pays full cost.
TEAM-WC-024 | T-WC.20 | A Tzaangor Warrior with blade & shield has Save 4+ and, while fighting or retaliating with it, one block cancels two unresolved enemy successes; the other Tzaangor Warrior loadouts keep Save 5+ and single blocks.
TEAM-WC-025 | T-WC.32 | Aetherial Warding turns an enemy weapon's Piercing 1 into Piercing Crits 1 against friendly WARPCOVEN operatives and leaves Piercing 2 alone.
TEAM-WC-026 | T-WC.33 | Fate Itself reserves two public D6; one replaces an attack die (either side) before re-rolls and cannot be re-rolled or upgraded by Rending; the second is discarded when the pair summed under 9 and kept when 9 or more; at most one per sequence; leftovers vanish at TP end.
TEAM-WC-027 | T-WC.34 | Brotherhood of Sorcerers gives a lone Sorcerer's PSYCHIC weapons Balanced and Ceaseless instead when another friendly Sorcerer is within 9".
TEAM-WC-028 | T-WC.35 | Savage Herd gives Tzaangor melee weapons Accurate 1, and Severe when assisted or when fighting within 6" of a visible friendly Sorcerer, but not from the Sorcerer clause while retaliating.
TEAM-WC-029 | T-WC.36 | All Is Dust makes the first normal success that damages the friendly Rubric Marine in that sequence deal 1 damage, in shooting and in a fight, and never touches crits or Devastating.
TEAM-WC-030 | T-WC.37 | Capricious Plan at a Sorcerer's activation end allows a free Dash after a Charge, an order change, or both, and is not offered after a counteraction.
TEAM-WC-031 | T-WC.38 | Psychic Cabal lends another Sorcerer's PSYCHIC weapon or action within 9" for the activation; the lender cannot use a lent weapon for the rest of the TP, a weapon the lender already used this TP cannot be lent, and the lender's boon does not travel with it.
TEAM-WC-032 | T-WC.39 | Mutant Herd activates a second ready Tzaangor within 2" with the first, their actions interleaved, and both end expended.
TEAM-WC-033 | T-WC.40, T-WC.41 | Ensorcelled Rounds gives inferno boltguns, inferno bolt pistols and autopistols Devastating 1; Daemonmaw Weapons gives Rubric fists Atk 4 and Accurate 1 only while retaliating.
TEAM-WC-034 | T-WC.42, T-WC.43 | Arcane Robes downgrades the first damaging enemy crit (Crit Dmg above Normal) on a Sorcerer each TP to Normal Dmg; Sorcerous Scrolls swaps a Sorcerer's boon once per battle at activation or counteraction, never to a boon a live friendly operative holds, and an Echoes pick at a counteraction works at once.

## TEAM-FK - Farstalker Kinband

TEAM-FK-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-FK-001 | T-FK.1, T-FK.2 | Kill-Broker plus 11 picks validates with two Hounds and several Warriors; a third Hound, a second Stalker (or any other single card twice), or a 13th operative is rejected.
TEAM-FK-002 | T-FK.3, T-FK.5 | The Kill-Broker takes the 3+ Kroot rifle or the pulse weapon plus the ritual blade; the Heavy Gunner takes skinner or tribalest plus blade; the Warrior takes the 4+ Kroot rifle or the scattergun plus blade; the bow, hunting rifle and pistols bring every profile; every operative has FARSTALKER KINBAND, T'AU EMPIRE and KROOT.
TEAM-FK-003 | T-FK.27 | At the FK seat's first gambit-step turn a 0 CP offer flips the orders of up to three FK operatives not in an enemy's control range; an operative in an enemy's control range is not offered; the offer is gone after that turn.
TEAM-FK-004 | T-FK.28 | With every FK operative expended and the opponent holding a ready one, the activate decision offers an order change instead of counteracting; taking it flips the order, passes the turn, and the changed operative can still counteract later that TP; a guarding operative flipped this way leaves Guard.
TEAM-FK-005 | T-FK.7 | Call the Kill is offered as a gambit only while the Kill-Broker is in the killzone; FK operatives shooting, fighting or retaliating against the mark have Balanced, and against any other enemy they do not.
TEAM-FK-006 | T-FK.7 | When a voltaic-arrow Blast incapacitates the mark, the new-mark pick is offered after the action ends and the removal is done; a mark that dies to its own Hot gets the pick at the FK seat's next activation-start window in the same TP; the mark lapses at the TP's end.
TEAM-FK-007 | T-FK.8 | When the mark falls, a friendly FK operative within 6" of the Kill-Broker (the Kill-Broker included) gains Balanced for the battle; the same operative cannot be picked again; with the Kill-Broker out of the killzone nothing is offered.
TEAM-FK-008 | T-FK.9 | After ENERGISE every accelerator bow profile has Lethal 5+ until a Shoot with the bow ends (all voltaic Blast sequences keep it) or the TP ends; the action is barred in an enemy's control range.
TEAM-FK-009 | T-FK.10 | A crit from a 4/5 weapon deals 4 to the Cold-Blood; Devastating damage is not reduced; a crit whose Normal Dmg is higher is left as is.
TEAM-FK-010 | T-FK.11 | The Cold-Blood's Kroot rifle has Lethal 5+ against a wounded enemy and Lethal 5+ plus Rending against an injured one; nothing against an unwounded one.
TEAM-FK-011 | T-FK.12 | With the enemy fighter rolling two fails, the Cut-Skin deals 2 direct damage before any die is resolved; if that incapacitates the enemy the sequence ends with no strikes and the kill counts for the Cut-Skin.
TEAM-FK-012 | T-FK.13 | After its first Fight of an activation, with both fighters alive, the Cut-Skin may take a free Fight that can only pick the same enemy; not offered when it counteracts or after its second Fight; a later paid Fight is barred.
TEAM-FK-013 | T-FK.14 | The Hound is offered no Shoot, mission action, equipment action or grenade weapon; Charge, Dash, Fall Back, Fight, GATHER, Guard, Reposition and the marker actions stay; Meat and Trophy are never offered for it.
TEAM-FK-014 | T-FK.15 | An enemy declaring Fight with a Hound and another FK operative in its control range triggers the FK offer; taking it leaves the Hound as the only fight target; free Fights trigger it too.
TEAM-FK-015 | T-FK.16 | An enemy Charge ending in the control range of an FK operative within 3" of a Hound (not itself in an enemy's control range) offers the Hound a free Charge ending in that enemy's control range, flipping Conceal to Engage; a Charge onto the Hound itself does not.
TEAM-FK-016 | T-FK.17 | GATHER performs a free Reposition of part of the Move, a free Place Marker of a carried marker, then the remaining distance; the total never exceeds the Move; the Hound cannot Charge afterwards in that activation.
TEAM-FK-017 | T-FK.18, T-FK.6 | The concealed hunting-rifle profile is selectable (under Conceal, as Silent) in the Long-Sight's first Shoot of the battle and is never offered after any first Shoot ends, whatever profile it used.
TEAM-FK-018 | T-FK.19 | After LONG-SIGHT the concealed and stationary profiles have Lethal 5+ and a target behind Heavy terrain is not obscured for any hunting-rifle profile, through an enemy activation, until the Long-Sight's next activation starts.
TEAM-FK-019 | T-FK.20 | The salvo profile shoots a second, different valid target as its own sequence with its own cover and obscured; a target in a friendly operative's control range is not offered; one target alone is allowed.
TEAM-FK-020 | T-FK.21 | When an enemy declares Shoot with the ready Pistolier a valid target, the FK seat may make a free focused-pistol Shoot at that shooter first (Conceal flipped to Engage); the Pistolier stays ready; once per TP; not offered when the Pistolier is expended.
TEAM-FK-021 | T-FK.22, T-FK.23 | The Stalker Charges under Conceal; STEALTH ATTACK (2 AP, needs Conceal, terrain within 1", no enemy in control range) charges no further than Move, then fights, and its first strike is followed at once by another of its strikes before the enemy resolves.
TEAM-FK-022 | T-FK.24 | MARKED FOR THE HUNT places the Pech'ra marker (moving the old one) anywhere visible to the Tracker; an FK shooter gets Seek Light against an enemy within 1" of it (a Conceal enemy in Light cover becomes a valid target); the marker goes when the Tracker next activates or is removed.
TEAM-FK-023 | T-FK.25 | FROM THE EYE ABOVE gives another FK operative visible and within 6" APL +1 until the end of its next activation (9" with a controlled Comms Device); it cannot pick the Tracker itself.
TEAM-FK-024 | T-FK.26 | A Warrior can use Toxin Shot through Ready for Anything after the team already used Toxin Shot this TP, and without the equipment selected; a second Ready for Anything that TP is refused; Piercing and Toxin Shot never apply to one action together.
TEAM-FK-025 | T-FK.29 | Cut-Throats makes the Blade Atk 4 and the ritual blade, Stalker's blade, Cut-skin's blades and ripping fangs Atk 5, never above 5.
TEAM-FK-026 | T-FK.30 | With Rogue, a flamer-style Saturate weapon shooting an FK operative in cover lets the defender retain a cover save, and may retain two or one as a crit; on Vantage against a lower shooter there is still only one improvement.
TEAM-FK-027 | T-FK.31 | With Prey, an FK operative that has only Dashed shoots with Balanced and Severe; one that already has Balanced from Call the Kill gets Ceaseless and Severe as well; one that Repositioned or Charged this activation gets nothing.
TEAM-FK-028 | T-FK.32 | With Bound, an FK operative's first climb in its activation costs 2" less (a 2" climb is free) and a second climb is costed in full; no saving while counteracting.
TEAM-FK-029 | T-FK.33 | Savage Ambush is offered to the FK defender only when it is ready and has Light or Heavy terrain in its control range; the FK fighter then resolves the first die.
TEAM-FK-030 | T-FK.34, T-FK.35 | After Slip Away the operative's Fall Back costs 1 AP that activation; with Poach an FK operative contesting (not controlling) an objective may perform SECURE.
TEAM-FK-031 | T-FK.36 | When an enemy's shot incapacitates an FK operative, Vengeance gives other FK operatives Relentless against that enemy for the battle; the ploy is refused while that enemy is in the killzone and offered again after it falls.
TEAM-FK-032 | T-FK.37, T-FK.38 | Piercing Shot gives a Kroot rifle Piercing 1 and Toxin Shot gives Lethal 5+ and Stun for one action, each once per TP; neither is offered for the Kroot hunting rifle or the pulse weapon.
TEAM-FK-033 | T-FK.39, T-FK.40 | Meat heals D3+1 at activation start once per TP, never for a Hound or an operative in an enemy's control range; Trophy gives APL +1 for the activation once per battle, never for a Hound.

## TEAM-NB - Imperial Navy Breachers

TEAM-NB-000 | scaffold | The team is registered with the engine and the data and flagged `playable: false` until complete (replace when the team is done).
TEAM-NB-001 | T-NB.1, T-NB.2 | A roster is the Sergeant-at-Arms plus 10 selections; ARMSMAN may repeat; a second Axejack (or any other non-repeatable entry) is rejected.
TEAM-NB-002 | T-NB.2 | Two Gunners are legal, including two with the same weapon card (errata); a third Gunner is rejected.
TEAM-NB-003 | T-NB.3, T-NB.2 | C.A.T. Unit and Gheistskull together use one selection, one alone uses a whole one; a C.A.T. Unit without a Surveyor or a Gheistskull without a Void-Jammer is rejected.
TEAM-NB-004 | T-NB.4 | The Sergeant has exactly five legal loadouts (shotgun with both profiles plus hatchet, or bolt pistol / heirloom autopistol with chainsword / power weapon); each Gunner card brings its whole profile group plus gun butt.
TEAM-NB-005 | T-NB.30 | Shot by a Blast or Torrent weapon without a sweeping profile, a Breacher gets one defence re-roll (a Grenadier two); a sweeping-profile Torrent weapon or a non-Blast weapon gives none.
TEAM-NB-006 | T-NB.31 | x" Devastating damage deals nothing to a friendly Breacher that is not the sequence's target, but still damages the target.
TEAM-NB-007 | T-NB.32 | Breach and Clear: the partner (visible, within 3", ready) activates right after the first is expended, before the opponent; the opponent activates next; the rule works once per TP.
TEAM-NB-008 | T-NB.9 | An expended Armsman forces another ready Armsman's activation; the second one does not chain a third; neither member of a Breach and Clear pair triggers it.
TEAM-NB-009 | T-NB.7, T-NB.8 | Attack/Defence Order cost 0 CP with the Sergeant in the killzone and 1 CP without; once per Sergeant activation the marker can be re-placed or the order swapped (not both), and the swapped effect applies at once.
TEAM-NB-010 | T-NB.33, T-NB.34 | Attack Order gives Ceaseless within 3" of its marker; Defence Order re-rolls all defence dice of one result within 3"; the marker goes in the next Ready step; both cannot be used in one Strategy phase.
TEAM-NB-011 | T-NB.10 | After the Axejack Charged this TP, a die dealing 3+ damage rolls a D6 and 5+ takes 1 off; without a Charge this TP nothing is rolled.
TEAM-NB-012 | T-NB.11 | A C.A.T. Unit in an enemy's control range, or after its Surveyor is incapacitated, cannot be activated or act; the TP ends with it ready and its seat may counteract meanwhile.
TEAM-NB-013 | T-NB.12, T-NB.13 | The C.A.T. Unit offers only Charge, Dash, Reposition and Spot (never Fall Back), cannot climb or jump; the Gheistskull offers only Boost and the move actions; neither adds an assist to a friendly fighter.
TEAM-NB-014 | T-NB.14 | Machines count APL 1 for marker control (2 - 1), stacking with Lock It Down to 2, without changing their APL.
TEAM-NB-015 | T-NB.15 | A Conceal Machine in cover cannot be picked as a target even with Seek or from Vantage unless the shooter is within 2"; it is still hit as a Blast secondary.
TEAM-NB-016 | T-NB.17 | Incapacitating a C.A.T. Unit or Gheistskull scores no kill op progress, and the opponent's kill op starting count excludes them (11 without Machines, 10 with).
TEAM-NB-017 | T-NB.18 | After SPOT, a friendly Breacher shooting the spotted enemy has Seek Light and the enemy is not obscured; the effect ends at TP end, when sight is lost, or on a new Spot.
TEAM-NB-018 | T-NB.19 | An Engage Endurant intervening between shooter and target protects the one friendly Breacher touching its base; with two touching, on Conceal, or not intervening, the target is legal.
TEAM-NB-019 | T-NB.20, T-NB.21 | Fighting with the shield bash, one Endurant block cancels two enemy successes; the Endurant's Fall Back costs 1 AP and is legal as a counteraction.
TEAM-NB-020 | T-NB.22 | Boost lets the Gheistskull's next Charge in that activation move 12" (8" + 4"); it is refused in TP1 and after its one use.
TEAM-NB-021 | T-NB.23 | The Grenadier uses its own frag, krak and stun grenade without spending the team's picks; its frag and krak hit on 3+; it has no smoke grenade.
TEAM-NB-022 | T-NB.25, T-NB.24 | BREACH POINT places a Breach marker that makes thin parts of the feature Accessible within 1"; WELD SHUT is never available in the open killzone.
TEAM-NB-023 | T-NB.26 | WAYFIND gives +1 APL to another friendly Breacher within 6" of the Surveyor or of the C.A.T. Unit (not to a Machine); the Comms Device extends only from the operative that controls it.
TEAM-NB-024 | T-NB.27 | REMOTE CONTROL lets the C.A.T. Unit perform one free action capped at 3" (e.g. Reposition 3", Spot); it is refused while the C.A.T. Unit is barred.
TEAM-NB-025 | T-NB.28 | The detonator always shoots the friendly Gheistskull as primary (no cover, no obscured, no visibility needed), adds operatives within 1" as Blast secondaries, works from Conceal, is gone after one use, and cannot be picked without the Gheistskull in the killzone.
TEAM-NB-026 | T-NB.29 | INTERFERENCE PULSE rolls D6 (+1 when the enemy is a valid target for the Gheistskull) and on 3+ the enemy loses 1 APL until the end of its next activation.
TEAM-NB-027 | T-NB.35 | Close Assault: Navis shotguns gain +1/+1 Dmg against a target within 3", two or more fails turn one into a normal success; nothing while retaliating.
TEAM-NB-028 | T-NB.36, T-NB.10 | Brace for Counterattack takes 1 off each die of Dmg 3+ against an unmoved or in-territory Breacher, never off Devastating; a Repositioned Breacher outside the territory gets nothing; Emboldened then reads the reduced value.
TEAM-NB-029 | T-NB.37 | Overwhelm Target is offered only during a Breach and Clear pair and gives the picked member +1 APL until the end of its activation (the partner when picked early).
TEAM-NB-030 | T-NB.38 | Blitz gives Accurate 1 to the first friendly Shoot or Fight of the TP against an enemy within 6", plus Severe when that operative was the first activated; it is not offered for a later Shoot.
TEAM-NB-031 | T-NB.39 | Lock It Down adds 1 to that operative's control APL on the chosen objective until the ploy is used again.
TEAM-NB-032 | T-NB.40 | Deck Hand makes one Accessible crossing free for that activation (also in a Charge or Fall Back) and is refused for an operative at APL 3.
TEAM-NB-033 | T-NB.41 | With Rebreathers an enemy Stun or APL -1 effect is ignored while Wayfind's +1 is kept, and an enemy Shock crit discards nothing.
TEAM-NB-034 | T-NB.42 | Slugs turn the Navis shotgun (long range) into 4+ 2/3 with Accurate 1 for the action, three uses per TP across the team; the heavy shotgun is not eligible.
TEAM-NB-035 | T-NB.43, T-NB.44 | Combat Stimms keep an injured Breacher's Move (Hit still worsens); System Override Device is selectable and does nothing.

## SIM - simulation invariants

SIM-001 | CLAUDE.md contract | A pending decision's legalActions list is never empty.
SIM-002 | CLAUDE.md contract | Illegal input returns a Rejection and never throws.
SIM-003 | R-1.7 | Every simulated game ends within four TPs and never loops.
SIM-004 | R-7.2 | No operative with 0 or fewer wounds remains in the killzone after an action finishes.
SIM-005 | R-3.6, R-2.4 | AP spent never exceeds APL (with R-3.15 exception) and CP never go negative.
SIM-006 | R-9.2 | The same seed and the same action list reproduce the same state and event log.
SIM-007 | R-8.1 | After every action no two bases overlap and none lies outside the killzone or inside terrain.
SIM-008 | R-8.x kill op, R-3.4 | VP falls only by the kill op VP a returning operative takes back; a Conceal shooter firing a non-Silent weapon without a viewpoint or team rule is flagged.
SIM-009 | R-4.x forced moves | The MOVE invariant exempts forced moves (pushes, Timesplinter) that end in an enemy control range.
