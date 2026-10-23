// Every team's client presentation, merged into the shared weapon tables (M9 prep). Angels of Death and
// Kommandos keep their entries in the shared tables; teams added later list theirs in teams/<team>.ts.
import type { TeamPresentation } from './types'
import { PRESENTATION as pathfinders } from './pathfinders'
import { PRESENTATION as hierotekCircle } from './hierotek-circle'
import { PRESENTATION as plagueMarines } from './plague-marines'
import { PRESENTATION as wyrmblade } from './wyrmblade'
import { PRESENTATION as legionaries } from './legionaries'
import { PRESENTATION as handOfTheArchon } from './hand-of-the-archon'
import { PRESENTATION as hunterClade } from './hunter-clade'
import { PRESENTATION as hearthkynSalvagers } from './hearthkyn-salvagers'
import { PRESENTATION as kasrkin } from './kasrkin'
import { PRESENTATION as novitiates } from './novitiates'
import { PRESENTATION as phobosStrikeTeam } from './phobos-strike-team'
import { PRESENTATION as corsairVoidscarred } from './corsair-voidscarred'
import { PRESENTATION as warpcoven } from './warpcoven'
import { PRESENTATION as farstalkerKinband } from './farstalker-kinband'
import { PRESENTATION as imperialNavyBreachers } from './imperial-navy-breachers'

export const TEAM_PRESENTATION: Record<string, TeamPresentation> = {
  pathfinders,
  'hierotek-circle': hierotekCircle,
  'plague-marines': plagueMarines,
  wyrmblade,
  legionaries,
  'hand-of-the-archon': handOfTheArchon,
  'hunter-clade': hunterClade,
  'hearthkyn-salvagers': hearthkynSalvagers,
  kasrkin,
  novitiates,
  'phobos-strike-team': phobosStrikeTeam,
  'corsair-voidscarred': corsairVoidscarred,
  warpcoven,
  'farstalker-kinband': farstalkerKinband,
  'imperial-navy-breachers': imperialNavyBreachers,
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

/**
 * M9 batch C: the body archetype for a datacard carrying `weaponIds`: the first `loadoutBodies` entry whose weapons it
 * all carries (profile ids or the weapon's profile group), else `fallback` (the datacard's figure.archetype).
 */
export function archetypeFor(datacardId: string, fallback: string, weaponIds: readonly string[], groups: Record<string, readonly string[]> = {}): string {
  for (const p of Object.values(TEAM_PRESENTATION)) {
    const list = p.loadoutBodies?.[datacardId]
    if (!list) continue
    for (const e of list) {
      if (e.weapons.every((w) => weaponIds.includes(w) || (groups[w] ?? []).some((x) => weaponIds.includes(x)))) return e.archetype
    }
  }
  return fallback
}

/** M10 batch C: the wording of a ploy option's param when a team names it (Capricious Plan's `flux-dash`), else null. */
export function ployParamLabel(ployId: string, param: string): string | null {
  for (const p of Object.values(TEAM_PRESENTATION)) {
    const l = p.ployParams?.[`${ployId}:${param}`]
    if (l) return l
  }
  return null
}

/** M9 batch C: the display name of a team resource pool (engine pools.ts), from the team files or the kind itself. */
export function poolLabel(kind: string): string {
  for (const p of Object.values(TEAM_PRESENTATION)) {
    const l = p.pools?.[kind]
    if (l) return l
  }
  const base = kind.includes('.') ? kind.slice(kind.lastIndexOf('.') + 1) : kind
  return base.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}
