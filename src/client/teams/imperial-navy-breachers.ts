// Imperial Navy Breachers client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `nb-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'nb.sergeant-at-arms': [
      { weapons: ['nb.wg.navis-shotgun'], archetype: 'nb-sergeant-at-arms-shotgun-hatchet' },
      { weapons: ['nb.w.bolt-pistol', 'nb.w.chainsword'], archetype: 'nb-sergeant-at-arms-bolt-pistol-chainsword' },
      { weapons: ['nb.w.bolt-pistol', 'nb.w.power-weapon'], archetype: 'nb-sergeant-at-arms-bolt-pistol-power-weapon' },
      { weapons: ['nb.w.heirloom-autopistol', 'nb.w.chainsword'], archetype: 'nb-sergeant-at-arms-autopistol-chainsword' },
      { weapons: ['nb.w.heirloom-autopistol', 'nb.w.power-weapon'], archetype: 'nb-sergeant-at-arms-autopistol-power-weapon' },
    ],
  },
  standIns: [
    'nb-sergeant-at-arms',
    'nb-sergeant-at-arms-shotgun-hatchet',
    'nb-sergeant-at-arms-bolt-pistol-chainsword',
    'nb-sergeant-at-arms-bolt-pistol-power-weapon',
    'nb-sergeant-at-arms-autopistol-chainsword',
    'nb-sergeant-at-arms-autopistol-power-weapon',
    'nb-armsman',
    'nb-armsman-b',
    'nb-axejack',
    'nb-cat-unit',
    'nb-endurant',
    'nb-gheistskull',
    'nb-grenadier',
    'nb-gunner-las-volley',
    'nb-gunner-meltagun',
    'nb-gunner-plasma-gun',
    'nb-hatchcutter',
    'nb-surveyor',
    'nb-void-jammer',
  ],
}
