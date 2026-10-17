// The data the engine consumes. Defined here so the engine never imports src/data in M2a.
// TODO(M2b): data adapter `fromDataBundle(bundle: DataBundle): EngineBundle` (maps src/data JSON
// records onto these runtime shapes: base mm, weapon rules, abilities, gambits from ploys.json).
import type {
  GameData,
  RuntimeAbility,
  RuntimeDatacard,
  RuntimeGambit,
  RuntimeTeam,
  RuntimeWeapon,
} from './types'

export interface EngineBundle {
  dataVersion: string
  datacards: Record<string, RuntimeDatacard>
  weapons: Record<string, RuntimeWeapon>
  abilities: Record<string, RuntimeAbility>
  teams: Record<string, RuntimeTeam>
  gambits: RuntimeGambit[]
}

export function snapshotData(bundle: EngineBundle, datacardIds: Iterable<string>): GameData {
  const datacards: GameData['datacards'] = {}
  const weapons: GameData['weapons'] = {}
  const abilities: GameData['abilities'] = {}
  for (const id of datacardIds) {
    const card = bundle.datacards[id]
    if (!card || datacards[id]) continue
    datacards[id] = card
    const wIds = [...card.fixedWeapons, ...card.weaponOptions.flatMap((o) => o.from)]
    for (const w of wIds) {
      const def = bundle.weapons[w]
      if (def) weapons[w] = def
    }
    for (const a of [...card.abilities, ...card.uniqueActions]) {
      const def = bundle.abilities[a]
      if (def) abilities[a] = def
    }
  }
  return {
    dataVersion: bundle.dataVersion,
    datacards,
    weapons,
    abilities,
    teams: { ...bundle.teams },
    gambits: [...bundle.gambits],
  }
}
