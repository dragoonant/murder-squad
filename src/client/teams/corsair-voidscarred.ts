// Corsair Voidscarred client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `cv-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts)
  loadoutBodies: {
    'cv.felarch': [
      { weapons: ['cv.w.shuriken-rifle', 'cv.w.shuriken-pistol', 'cv.w.power-weapon'], archetype: 'cv-felarch-shuriken-rifle' },
      { weapons: ['cv.w.neuro-disruptor', 'cv.w.power-weapon'], archetype: 'cv-felarch-neuro-disruptor' },
    ],
  },
  standIns: [
    'cv-felarch',
    'cv-felarch-shuriken-rifle',
    'cv-felarch-neuro-disruptor',
    'cv-fate-dealer',
    'cv-gunner-blaster',
    'cv-gunner-shredder',
    'cv-heavy-gunner-shuriken-cannon',
    'cv-heavy-gunner-wraithcannon',
    'cv-kurnathi',
    'cv-kurnite-hunter',
    'cv-shade-runner',
    'cv-soul-weaver',
    'cv-starstorm-duellist',
    'cv-warrior-pistol-power-weapon',
    'cv-warrior-rifle-fists',
    'cv-way-seeker',
  ],
}
