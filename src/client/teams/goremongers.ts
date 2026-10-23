// Goremongers client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `gm-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // every Goremonger datacard has a single fixed loadout, so no datacard needs a body per loadout
  loadoutBodies: {},
  standIns: [
    'gm-blood-herald',
    'gm-aspirant',
    'gm-aspirant-b',
    'gm-bloodtaker',
    'gm-impaler',
    'gm-inciter',
    'gm-skullclaimer',
    'gm-stalker',
  ],
}
