// Blooded client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for this
// team's weapons and datacards (teams/types.ts). Owned by the team implementer; filled in when the team data exists.
// Coverage tests require an entry for every weapon once team.json says `playable`. Figure archetypes use the concept
// slugs `bl-<operative>[-<loadout or variant>]` so the v2 body GLBs drop in by name; until they exist every
// archetype is a stand-in.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  // BLOODED is also a Pathfinders keyword (the veteran Pathfinder); this entry replaces theirs, so it covers both
  glossary: [
    {
      term: 'BLOODED',
      kind: 'keyword',
      body: "Faction keyword of the Blooded kill team: traitor guardsmen led by a Chieftain, with brutes and ogryns at their back. On a Pathfinders datacard it marks the veteran Pathfinder instead, whose Veteran ability lets it swap the Art of War option (Mont'ka or Kauyon) for itself alone in an activation.",
    },
  ],
  // v2 bodies hold their weapons: one body per leader loadout (concept slugs in art/unit-concepts/v2/prompts); the
  // laspistol sets share the autopistol bodies (same silhouette)
  loadoutBodies: {
    'bl.chieftain': [
      { weapons: ['bl.w.autopistol', 'bl.w.chainsword'], archetype: 'bl-chieftain-autopistol-chainsword' },
      { weapons: ['bl.w.autopistol', 'bl.w.power-weapon'], archetype: 'bl-chieftain-autopistol-power-weapon' },
      { weapons: ['bl.w.laspistol', 'bl.w.chainsword'], archetype: 'bl-chieftain-autopistol-chainsword' },
      { weapons: ['bl.w.laspistol', 'bl.w.power-weapon'], archetype: 'bl-chieftain-autopistol-power-weapon' },
      { weapons: ['bl.w.bolt-pistol', 'bl.w.chainsword'], archetype: 'bl-chieftain-bolt-pistol' },
      { weapons: ['bl.w.boltgun', 'bl.w.bayonet-chieftain'], archetype: 'bl-chieftain-boltgun' },
      { weapons: ['bl.wg.plasma-pistol', 'bl.w.improvised-blade'], archetype: 'bl-chieftain-plasma-pistol' },
    ],
  },
  standIns: [
    'bl-chieftain',
    'bl-chieftain-autopistol-chainsword',
    'bl-chieftain-autopistol-power-weapon',
    'bl-chieftain-bolt-pistol',
    'bl-chieftain-boltgun',
    'bl-chieftain-plasma-pistol',
    'bl-brimstone-grenadier',
    'bl-butcher',
    'bl-commsman',
    'bl-corpseman',
    'bl-enforcer',
    'bl-flenser',
    'bl-gunner-flamer',
    'bl-gunner-grenade-launcher',
    'bl-gunner-meltagun',
    'bl-gunner-plasma-gun',
    'bl-ogryn',
    'bl-sharpshooter',
    'bl-thug',
    'bl-trench-sweeper',
    'bl-trooper',
    'bl-trooper-b',
  ],
}
