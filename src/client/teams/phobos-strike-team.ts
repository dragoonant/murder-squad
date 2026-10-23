// Phobos Strike Team client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `ph-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  standIns: [
    'ph-infiltrator-sergeant',
    'ph-incursor-sergeant',
    'ph-reiver-sergeant-pistol-knife',
    'ph-reiver-sergeant-carbine',
    'ph-infiltrator-commsman',
    'ph-infiltrator-helix-adept',
    'ph-infiltrator-saboteur',
    'ph-infiltrator-veteran',
    'ph-infiltrator-voxbreaker',
    'ph-infiltrator-warrior',
    'ph-infiltrator-warrior-b',
    'ph-incursor-marksman',
    'ph-incursor-minelayer',
    'ph-incursor-warrior',
    'ph-incursor-warrior-b',
    'ph-reiver-warrior-pistol-knife',
    'ph-reiver-warrior-carbine',
  ],
}
