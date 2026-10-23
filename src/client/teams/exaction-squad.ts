// Exaction Squad client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `ex-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'ex.proctor-exactant': [
      { weapons: ['ex.wg.combat-shotgun-proctor', 'ex.w.repression-baton-proctor'], archetype: 'ex-proctor-exactant-combat-shotgun-baton' },
      { weapons: ['ex.w.shotpistol-proctor', 'ex.w.dominator-maul-assault-shield'], archetype: 'ex-proctor-exactant-shotpistol-maul-shield' },
    ],
  },
  standIns: [
    'ex-proctor-exactant',
    'ex-proctor-exactant-combat-shotgun-baton',
    'ex-proctor-exactant-shotpistol-maul-shield',
    'ex-castigator',
    'ex-chirurgant',
    'ex-cyber-mastiff',
    'ex-gunner-grenade-launcher',
    'ex-gunner-heavy-stubber',
    'ex-gunner-webber',
    'ex-leashmaster',
    'ex-malocator',
    'ex-marksman',
    'ex-revelatum',
    'ex-subductor',
    'ex-subductor-b',
    'ex-vigilant',
    'ex-vigilant-b',
    'ex-vox-signifier',
  ],
}
