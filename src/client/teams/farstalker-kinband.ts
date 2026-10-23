// Farstalker Kinband client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `fk-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'fk.kill-broker': [
      { weapons: ['fk.w.kroot-rifle', 'fk.w.ritual-blade'], archetype: 'fk-kill-broker-kroot-rifle' },
      { weapons: ['fk.w.pulse-weapon', 'fk.w.ritual-blade'], archetype: 'fk-kill-broker-pulse-weapon' },
    ],
  },
  standIns: [
    'fk-kill-broker',
    'fk-kill-broker-kroot-rifle',
    'fk-kill-broker-pulse-weapon',
    'fk-bow-hunter',
    'fk-cold-blood',
    'fk-cut-skin',
    'fk-hound',
    'fk-hound-b',
    'fk-long-sight',
    'fk-pistolier',
    'fk-stalker',
    'fk-tracker',
    'fk-heavy-gunner-dvorgite-skinner',
    'fk-heavy-gunner-londaxi-tribalest',
    'fk-warrior-kroot-rifle',
    'fk-warrior-kroot-scattergun',
  ],
}
