// Warpcoven client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `wc-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'wc.sorcerer-of-destiny': [
      { weapons: ['wc.w.inferno-bolt-pistol'], archetype: 'wc-sorcerer-destiny-inferno-pistol' },
      { weapons: ['wc.w.prosperine-khopesh'], archetype: 'wc-sorcerer-destiny-khopesh' },
      { weapons: ['wc.w.warpflame-pistol'], archetype: 'wc-sorcerer-destiny-warpflame-pistol' },
    ],
  },
  standIns: [
    'wc-sorcerer-destiny',
    'wc-sorcerer-destiny-inferno-pistol',
    'wc-sorcerer-destiny-khopesh',
    'wc-sorcerer-destiny-warpflame-pistol',
    'wc-sorcerer-tempyrion-inferno-pistol',
    'wc-sorcerer-tempyrion-khopesh',
    'wc-sorcerer-tempyrion-warpflame-pistol',
    'wc-sorcerer-warpfire-inferno-pistol',
    'wc-sorcerer-warpfire-khopesh',
    'wc-sorcerer-warpfire-warpflame-pistol',
    'wc-rubric-marine-gunner-warpflamer',
    'wc-rubric-marine-gunner-soulreaper-cannon',
    'wc-rubric-marine-icon-bearer',
    'wc-rubric-marine-warrior',
    'wc-rubric-marine-warrior-b',
    'wc-tzaangor-champion-greataxe',
    'wc-tzaangor-champion-greatblade',
    'wc-tzaangor-horn-bearer',
    'wc-tzaangor-icon-bearer',
    'wc-tzaangor-warrior-blades',
    'wc-tzaangor-warrior-blade-shield',
    'wc-tzaangor-warrior-autopistol-chainsword',
  ],
}
