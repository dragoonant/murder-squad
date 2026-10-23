// Scout Squad client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `ss-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'ss.sergeant': [
      { weapons: ['ss.w.astartes-shotgun', 'ss.w.fists-sergeant'], archetype: 'ss-sergeant-astartes-shotgun' },
      { weapons: ['ss.w.boltgun', 'ss.w.fists-sergeant'], archetype: 'ss-sergeant-boltgun' },
      { weapons: ['ss.w.bolt-pistol', 'ss.w.chainsword'], archetype: 'ss-sergeant-bolt-pistol-chainsword' },
    ],
  },
  standIns: [
    'ss-sergeant',
    'ss-sergeant-astartes-shotgun',
    'ss-sergeant-boltgun',
    'ss-sergeant-bolt-pistol-chainsword',
    'ss-heavy-gunner-heavy-bolter',
    'ss-heavy-gunner-missile-launcher',
    'ss-hunter',
    'ss-sniper',
    'ss-tracker',
    'ss-warrior-shotgun',
    'ss-warrior-shotgun-b',
    'ss-warrior-boltgun',
    'ss-warrior-boltgun-b',
    'ss-warrior-bolt-pistol-blade',
    'ss-warrior-bolt-pistol-blade-b',
  ],
}
