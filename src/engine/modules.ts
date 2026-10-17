// Namespace -> module table. Exactly one owner per decision-kind namespace.
import { abilitiesModule } from './abilities'
import { equipmentModule } from './equipment'
import { fightModule } from './fight'
import { firefightModule } from './firefight'
import { markersModule } from './markers'
import { missionsModule } from './missions'
import { movementModule } from './movement'
import { ploysModule } from './ploys'
import type { ModuleDef } from './registry'
import { EngineInvariantError } from './state'
import { setupModule } from './setup'
import { shootModule } from './shoot'
import { strategyModule } from './strategy'
import { weaponsModule } from './weapons'

export const ALL_MODULES: ModuleDef[] = [
  setupModule,
  strategyModule,
  firefightModule,
  movementModule,
  shootModule,
  fightModule,
  weaponsModule,
  markersModule,
  ploysModule,
  equipmentModule,
  missionsModule,
  abilitiesModule,
]

let table: Map<string, ModuleDef> | null = null

function build(): Map<string, ModuleDef> {
  const m = new Map<string, ModuleDef>()
  for (const mod of ALL_MODULES) {
    for (const ns of mod.namespaces) {
      if (m.has(ns)) throw new EngineInvariantError(`namespace ${ns} has two owners`)
      m.set(ns, mod)
    }
  }
  return m
}

/** The module that owns a decision kind such as `firefight.action`. */
export function moduleFor(kind: string): ModuleDef {
  table ??= build()
  const ns = kind.split('.')[0]!
  const mod = table.get(ns)
  if (!mod) throw new EngineInvariantError(`no module owns decision kind ${kind}`)
  return mod
}
