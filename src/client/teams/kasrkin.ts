// Kasrkin client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `ks-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'ks.sergeant': [
      { weapons: ['ks.w.bolt-pistol', 'ks.w.power-weapon'], archetype: 'ks-sergeant-bolt-pistol' },
      { weapons: ['ks.w.hot-shot-lasgun', 'ks.w.gun-butt-sergeant'], archetype: 'ks-sergeant-lasgun' },
      { weapons: ['ks.w.hot-shot-laspistol', 'ks.w.power-weapon'], archetype: 'ks-sergeant-laspistol' },
      { weapons: ['ks.wg.plasma-pistol', 'ks.w.chainsword'], archetype: 'ks-sergeant-plasma-pistol' },
    ],
  },
  standIns: [
    'ks-sergeant',
    'ks-sergeant-bolt-pistol',
    'ks-sergeant-lasgun',
    'ks-sergeant-laspistol',
    'ks-sergeant-plasma-pistol',
    'ks-combat-medic',
    'ks-demo-trooper',
    'ks-gunner-flamer',
    'ks-gunner-grenade-launcher',
    'ks-gunner-volley-gun',
    'ks-gunner-meltagun',
    'ks-gunner-plasma-gun',
    'ks-recon-trooper',
    'ks-sharpshooter',
    'ks-trooper',
    'ks-trooper-b',
    'ks-vox-trooper',
  ],
}
