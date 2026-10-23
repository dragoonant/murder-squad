// Fellgor Ravagers client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for
// this team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data
// exists. Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the
// concept slugs `fg-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'fg.ironhorn': [
      { weapons: ['fg.w.corrupted-pistol', 'fg.w.corrupted-chainsword'], archetype: 'fg-ironhorn-corrupted-pistol-chainsword' },
      { weapons: ['fg.wg.plasma-pistol', 'fg.w.bludgeon'], archetype: 'fg-ironhorn-plasma-pistol-bludgeon' },
    ],
  },
  standIns: [
    'fg-ironhorn',
    'fg-ironhorn-corrupted-pistol-chainsword',
    'fg-ironhorn-plasma-pistol-bludgeon',
    'fg-deathknell',
    'fg-fluxbray',
    'fg-gnarlscar',
    'fg-gorehorn',
    'fg-herd-goad',
    'fg-mangler',
    'fg-shaman',
    'fg-toxhorn',
    'fg-vandal',
    'fg-warrior-bludgeon',
    'fg-warrior-bludgeon-b',
    'fg-warrior-cleaver',
    'fg-warrior-cleaver-b',
  ],
}
