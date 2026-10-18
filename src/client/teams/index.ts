// Every team's client presentation, merged into the shared weapon tables (M9 prep). Angels of Death and
// Kommandos keep their entries in the shared tables; teams added later list theirs in teams/<team>.ts.
import type { TeamPresentation } from './types'
import { PRESENTATION as pathfinders } from './pathfinders'
import { PRESENTATION as hierotekCircle } from './hierotek-circle'
import { PRESENTATION as plagueMarines } from './plague-marines'
import { PRESENTATION as wyrmblade } from './wyrmblade'

export const TEAM_PRESENTATION: Record<string, TeamPresentation> = {
  pathfinders,
  'hierotek-circle': hierotekCircle,
  'plague-marines': plagueMarines,
  wyrmblade,
}

type TableKey = 'flavour' | 'vfx' | 'sound' | 'attachments'

/** Every team's entries for one shared table. */
export function teamTable<K extends TableKey>(key: K): NonNullable<TeamPresentation[K]> {
  const out: Record<string, unknown> = {}
  for (const p of Object.values(TEAM_PRESENTATION)) Object.assign(out, p[key] ?? {})
  return out as NonNullable<TeamPresentation[K]>
}

/** Archetypes drawn as procedural stand-ins on purpose (no body GLB yet). */
export const STAND_INS: ReadonlySet<string> = new Set(Object.values(TEAM_PRESENTATION).flatMap((p) => p.standIns ?? []))
