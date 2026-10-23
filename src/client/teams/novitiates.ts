// Novitiates client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `nv-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'nv.superior': [
      { weapons: ['nv.wg.plasma-pistol', 'nv.w.power-weapon'], archetype: 'nv-superior-plasma-pistol' },
      { weapons: ['nv.w.relic-boltgun', 'nv.w.gun-butt-superior'], archetype: 'nv-superior-relic-boltgun' },
      { weapons: ['nv.w.relic-bolt-pistol', 'nv.w.power-weapon'], archetype: 'nv-superior-relic-bolt-pistol' },
    ],
  },
  pools: {'nv.faith': 'Faith'},
  standIns: [
    'nv-superior',
    'nv-superior-plasma-pistol',
    'nv-superior-relic-boltgun',
    'nv-superior-relic-bolt-pistol',
    'nv-condemnor',
    'nv-dialogus',
    'nv-duellist',
    'nv-exactor',
    'nv-hospitaller',
    'nv-militant-autopistol-blade',
    'nv-militant-autogun',
    'nv-penitent',
    'nv-preceptor',
    'nv-pronatus',
    'nv-purgatus',
    'nv-purgatus-b',
    'nv-reliquarius',
  ],
}
