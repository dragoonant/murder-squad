// Per-operative keyword picks (M9 batch B, generic capability "operativeKeywordChoice"). A team's
// `operativeChoices` (team.json) give every eligible operative one keyword at selection, Legionaries Marks of
// Chaos (KHORNE, NURGLE, SLAANESH, TZEENTCH, UNDIVIDED; a BALEFIRE ACOLYTE is never KHORNE). The pick is stored
// on the roster entry and on the operative (`Operative.picks`), counts as a real keyword for every rule
// (conditions.hasKeyword), is public in view, and changes only through setOperativePick (Infernal Pact), which
// emits OperativePickChanged. Pure helpers take the state; setOperativePick takes the step Ctx.
import type { Ctx } from './registry'
import type { GameState, Operative, RuntimeDatacard, RuntimeTeam } from './types'

export type RuntimeOperativeChoice = NonNullable<RuntimeTeam['operativeChoices']>[number]

/** The team's operative choices that apply to this datacard. */
export function choicesForCard(team: RuntimeTeam | undefined, card: Pick<RuntimeDatacard, 'keywords'>): RuntimeOperativeChoice[] {
  return (team?.operativeChoices ?? []).filter((c) => !c.forKeyword || card.keywords.includes(c.forKeyword))
}

/** Keywords the datacard may take for the choice, in data order. */
export function allowedPicks(choice: RuntimeOperativeChoice, card: Pick<RuntimeDatacard, 'id'>): string[] {
  const barred = new Set((choice.exclude ?? []).filter((e) => e.datacards.includes(card.id)).flatMap((e) => e.keywords))
  return choice.keywords.filter((k) => !barred.has(k))
}

/** Picks for a roster entry: the asked ones, missing ones filled with the first allowed keyword; throws a reason when illegal. */
export function resolvePicks(team: RuntimeTeam | undefined, card: Pick<RuntimeDatacard, 'id' | 'keywords'>, asked: Record<string, string> = {}): { picks: Record<string, string>; problem: string | null } {
  const picks: Record<string, string> = {}
  const applies = choicesForCard(team, card)
  for (const key of Object.keys(asked)) if (!applies.some((c) => c.id === key)) return { picks, problem: `${card.id} has no operative choice "${key}"` }
  for (const c of applies) {
    const allowed = allowedPicks(c, card)
    const pick = asked[c.id] ?? allowed[0]
    if (!pick || !allowed.includes(pick)) return { picks, problem: `${card.id} cannot take ${pick ?? 'nothing'} for ${c.label}` }
    picks[c.id] = pick
  }
  return { picks, problem: null }
}

/** The operative's current pick for a choice, or null. */
export function pickOf(op: Operative, choiceId: string): string | null {
  return op.picks?.[choiceId] ?? null
}

/** Keywords the operative could switch to for a choice (allowed and different from its current pick). */
export function pickAlternatives(state: GameState, op: Operative, choiceId: string): string[] {
  const team = state.data.teams[state.players[op.seat].teamId]
  const card = state.data.datacards[op.datacardId]
  const choice = choicesForCard(team, card ?? { keywords: [] }).find((c) => c.id === choiceId)
  if (!choice || !card) return []
  const now = pickOf(op, choiceId)
  return allowedPicks(choice, card).filter((k) => k !== now)
}

/** Change an operative's pick (Infernal Pact). Returns false (and changes nothing) when the keyword is not allowed. */
export function setOperativePick(ctx: Ctx, opId: string, choiceId: string, keyword: string, reason: string): boolean {
  const op = ctx.state.operatives[opId]
  if (!op) return false
  const from = pickOf(op, choiceId)
  if (from === keyword) return true
  if (!pickAlternatives(ctx.state, op, choiceId).includes(keyword)) return false
  op.picks = { ...(op.picks ?? {}), [choiceId]: keyword }
  ctx.emit({ type: 'OperativePickChanged', operativeId: op.id, choiceId, from, to: keyword, reason })
  return true
}
