import type { DataBundle, DataRecord, KillzoneLayoutData, MissionData, TeamData } from './types'
import { MANIFEST } from './manifest'
import { TYPE_OF_SCHEMA, buildIndex, checkRefs, recordCodes, type RecordType } from './refs'
import f0 from './core/weapon-rules.json'
import f1 from './core/weapons.json'
import f2 from './core/abilities.json'
import f3 from './core/ploys.json'
import f4 from './core/universal-equipment.json'
import f5 from './teams/angels-of-death/team.json'
import f6 from './teams/angels-of-death/operatives.json'
import f7 from './teams/angels-of-death/weapons.json'
import f8 from './teams/angels-of-death/abilities.json'
import f9 from './teams/angels-of-death/ploys.json'
import f10 from './teams/angels-of-death/equipment.json'
import f11 from './teams/kommandos/team.json'
import f12 from './teams/kommandos/operatives.json'
import f13 from './teams/kommandos/weapons.json'
import f14 from './teams/kommandos/abilities.json'
import f15 from './teams/kommandos/ploys.json'
import f16 from './teams/kommandos/equipment.json'
// M9 prep: scaffolded teams (team.json `playable: false` until complete)
import pfTeam from './teams/pathfinders/team.json'
import pfOperatives from './teams/pathfinders/operatives.json'
import pfWeapons from './teams/pathfinders/weapons.json'
import pfAbilities from './teams/pathfinders/abilities.json'
import pfPloys from './teams/pathfinders/ploys.json'
import pfEquipment from './teams/pathfinders/equipment.json'
import hieTeam from './teams/hierotek-circle/team.json'
import hieOperatives from './teams/hierotek-circle/operatives.json'
import hieWeapons from './teams/hierotek-circle/weapons.json'
import hieAbilities from './teams/hierotek-circle/abilities.json'
import hiePloys from './teams/hierotek-circle/ploys.json'
import hieEquipment from './teams/hierotek-circle/equipment.json'
import pmTeam from './teams/plague-marines/team.json'
import pmOperatives from './teams/plague-marines/operatives.json'
import pmWeapons from './teams/plague-marines/weapons.json'
import pmAbilities from './teams/plague-marines/abilities.json'
import pmPloys from './teams/plague-marines/ploys.json'
import pmEquipment from './teams/plague-marines/equipment.json'
import wyrTeam from './teams/wyrmblade/team.json'
import wyrOperatives from './teams/wyrmblade/operatives.json'
import wyrWeapons from './teams/wyrmblade/weapons.json'
import wyrAbilities from './teams/wyrmblade/abilities.json'
import wyrPloys from './teams/wyrmblade/ploys.json'
import wyrEquipment from './teams/wyrmblade/equipment.json'
// M9 batch B scaffold (team.json `playable: false` until complete)
import lgTeam from './teams/legionaries/team.json'
import lgOperatives from './teams/legionaries/operatives.json'
import lgWeapons from './teams/legionaries/weapons.json'
import lgAbilities from './teams/legionaries/abilities.json'
import lgPloys from './teams/legionaries/ploys.json'
import lgEquipment from './teams/legionaries/equipment.json'
import haTeam from './teams/hand-of-the-archon/team.json'
import haOperatives from './teams/hand-of-the-archon/operatives.json'
import haWeapons from './teams/hand-of-the-archon/weapons.json'
import haAbilities from './teams/hand-of-the-archon/abilities.json'
import haPloys from './teams/hand-of-the-archon/ploys.json'
import haEquipment from './teams/hand-of-the-archon/equipment.json'
import hcTeam from './teams/hunter-clade/team.json'
import hcOperatives from './teams/hunter-clade/operatives.json'
import hcWeapons from './teams/hunter-clade/weapons.json'
import hcAbilities from './teams/hunter-clade/abilities.json'
import hcPloys from './teams/hunter-clade/ploys.json'
import hcEquipment from './teams/hunter-clade/equipment.json'
import hkTeam from './teams/hearthkyn-salvagers/team.json'
import hkOperatives from './teams/hearthkyn-salvagers/operatives.json'
import hkWeapons from './teams/hearthkyn-salvagers/weapons.json'
import hkAbilities from './teams/hearthkyn-salvagers/abilities.json'
import hkPloys from './teams/hearthkyn-salvagers/ploys.json'
import hkEquipment from './teams/hearthkyn-salvagers/equipment.json'
import f17 from './missions/preliminary-ops-secure.json'
import f18 from './missions/preliminary-ops-loot.json'
import f19 from './missions/preliminary-ops-transmission.json'
import f20 from './killzones/volkus-01.json'
import f21 from './killzones/volkus-02.json'
import f22 from './killzones/volkus-03.json'

export * from './types'
export * from './kill-grades'
export * from './loadout'
export * from './roster'
export { MANIFEST } from './manifest'

/** Bumped whenever a data file changes in a way that invalidates saved games or replays. */
export const DATA_VERSION = '0.1.0'


const FILES: Record<string, unknown> = {
  'core/weapon-rules.json': f0,
  'core/weapons.json': f1,
  'core/abilities.json': f2,
  'core/ploys.json': f3,
  'core/universal-equipment.json': f4,
  'teams/angels-of-death/team.json': f5,
  'teams/angels-of-death/operatives.json': f6,
  'teams/angels-of-death/weapons.json': f7,
  'teams/angels-of-death/abilities.json': f8,
  'teams/angels-of-death/ploys.json': f9,
  'teams/angels-of-death/equipment.json': f10,
  'teams/kommandos/team.json': f11,
  'teams/kommandos/operatives.json': f12,
  'teams/kommandos/weapons.json': f13,
  'teams/kommandos/abilities.json': f14,
  'teams/kommandos/ploys.json': f15,
  'teams/kommandos/equipment.json': f16,
  'teams/pathfinders/team.json': pfTeam,
  'teams/pathfinders/operatives.json': pfOperatives,
  'teams/pathfinders/weapons.json': pfWeapons,
  'teams/pathfinders/abilities.json': pfAbilities,
  'teams/pathfinders/ploys.json': pfPloys,
  'teams/pathfinders/equipment.json': pfEquipment,
  'teams/hierotek-circle/team.json': hieTeam,
  'teams/hierotek-circle/operatives.json': hieOperatives,
  'teams/hierotek-circle/weapons.json': hieWeapons,
  'teams/hierotek-circle/abilities.json': hieAbilities,
  'teams/hierotek-circle/ploys.json': hiePloys,
  'teams/hierotek-circle/equipment.json': hieEquipment,
  'teams/plague-marines/team.json': pmTeam,
  'teams/plague-marines/operatives.json': pmOperatives,
  'teams/plague-marines/weapons.json': pmWeapons,
  'teams/plague-marines/abilities.json': pmAbilities,
  'teams/plague-marines/ploys.json': pmPloys,
  'teams/plague-marines/equipment.json': pmEquipment,
  'teams/wyrmblade/team.json': wyrTeam,
  'teams/wyrmblade/operatives.json': wyrOperatives,
  'teams/wyrmblade/weapons.json': wyrWeapons,
  'teams/wyrmblade/abilities.json': wyrAbilities,
  'teams/wyrmblade/ploys.json': wyrPloys,
  'teams/wyrmblade/equipment.json': wyrEquipment,
  'teams/legionaries/team.json': lgTeam,
  'teams/legionaries/operatives.json': lgOperatives,
  'teams/legionaries/weapons.json': lgWeapons,
  'teams/legionaries/abilities.json': lgAbilities,
  'teams/legionaries/ploys.json': lgPloys,
  'teams/legionaries/equipment.json': lgEquipment,
  'teams/hand-of-the-archon/team.json': haTeam,
  'teams/hand-of-the-archon/operatives.json': haOperatives,
  'teams/hand-of-the-archon/weapons.json': haWeapons,
  'teams/hand-of-the-archon/abilities.json': haAbilities,
  'teams/hand-of-the-archon/ploys.json': haPloys,
  'teams/hand-of-the-archon/equipment.json': haEquipment,
  'teams/hunter-clade/team.json': hcTeam,
  'teams/hunter-clade/operatives.json': hcOperatives,
  'teams/hunter-clade/weapons.json': hcWeapons,
  'teams/hunter-clade/abilities.json': hcAbilities,
  'teams/hunter-clade/ploys.json': hcPloys,
  'teams/hunter-clade/equipment.json': hcEquipment,
  'teams/hearthkyn-salvagers/team.json': hkTeam,
  'teams/hearthkyn-salvagers/operatives.json': hkOperatives,
  'teams/hearthkyn-salvagers/weapons.json': hkWeapons,
  'teams/hearthkyn-salvagers/abilities.json': hkAbilities,
  'teams/hearthkyn-salvagers/ploys.json': hkPloys,
  'teams/hearthkyn-salvagers/equipment.json': hkEquipment,
  'missions/preliminary-ops-secure.json': f17,
  'missions/preliminary-ops-loot.json': f18,
  'missions/preliminary-ops-transmission.json': f19,
  'killzones/volkus-01.json': f20,
  'killzones/volkus-02.json': f21,
  'killzones/volkus-03.json': f22,
}

function parsedFiles(): { path: string; type: RecordType; records: DataRecord[] }[] {
  return MANIFEST.map((m) => {
    const data = FILES[m.path]
    if (data === undefined) throw new Error(`data: manifest file ${m.path} is not imported`)
    return { path: m.path, type: TYPE_OF_SCHEMA[m.schema], records: (m.array ? data : [data]) as DataRecord[] }
  })
}

/**
 * Code hooks the data references, derived from the data itself (no generated file, so a new team's hooks
 * need no shared-file edit); the engine registers an implementation for each (src/engine/code-hooks.ts).
 */
export const CODE_HOOKS: readonly { name: string; usedBy: string[] }[] = (() => {
  const usage = new Map<string, Set<string>>()
  for (const f of parsedFiles()) {
    for (const rec of f.records) {
      for (const name of recordCodes(rec, f.type)) usage.set(name, (usage.get(name) ?? new Set()).add((rec as { id: string }).id))
    }
  }
  return [...usage.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)).map(([name, ids]) => ({ name, usedBy: [...ids].sort() }))
})()

/** Ids of the teams that are complete: `playable` is not false (scaffolded teams are left out of pickers and sims). */
export function playableTeamIds(bundle: { teams: Record<string, TeamData> }): string[] {
  return Object.values(bundle.teams)
    .filter((t) => t.playable !== false)
    .map((t) => t.id)
    .sort()
}

/**
 * Build the in-memory bundle from the statically imported JSON files.
 * Throws on duplicate ids or dangling references; schema validation is tools/validate-data.ts.
 */
export function loadBundle(): DataBundle {
  const parsed = parsedFiles()
  const index = buildIndex(parsed)
  const errors = [...index.errors, ...checkRefs(index)]
  if (errors.length > 0) throw new Error(`data: ${errors.length} problem(s)\n${errors.join('\n')}`)
  const teams: Record<string, TeamData> = {}
  const missions: Record<string, MissionData> = {}
  const layouts: Record<string, KillzoneLayoutData> = {}
  for (const [id, rec] of Object.entries(index.byId)) {
    const t = index.types[id]
    if (t === 'team') teams[id] = rec as TeamData
    else if (t === 'mission') missions[id] = rec as MissionData
    else if (t === 'layout') layouts[id] = rec as KillzoneLayoutData
  }
  return { byId: index.byId, teams, missions, layouts, weaponGroups: index.groups, dataVersion: DATA_VERSION }
}
