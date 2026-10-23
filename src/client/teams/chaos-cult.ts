// Chaos Cult client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `cc-<operative>[-<variant>]` so the v2 body GLBs drop in by name; until they exist every archetype is a
// stand-in. Every Chaos Cult datacard has a single loadout, so no loadoutBodies; MUTANT and TORMENT are the forms a
// Devotee takes mid-battle (Mutation), listed here so their figures exist when an operative changes datacard.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  standIns: [
    'cc-cult-demagogue',
    'cc-blessed-blade',
    'cc-blessed-blade-b',
    'cc-iconarch',
    'cc-mindwitch',
    'cc-devotee',
    'cc-devotee-b',
    'cc-devotee-c',
    'cc-mutant',
    'cc-mutant-b',
    'cc-torment',
    'cc-torment-b',
  ],
}
