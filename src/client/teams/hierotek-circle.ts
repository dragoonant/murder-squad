// Hierotek Circle client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for
// this team's weapons and datacards (teams/types.ts). Owned by the team implementer. Coverage tests require an
// entry for every weapon once team.json says `playable`.
//
// Until the Necron attachment GLBs exist (concept art: art/attachment-concepts/ht-w-*.png) every weapon reuses the
// nearest existing mesh, so the figures hold something sensible and the attachment tests stay green. The bodies
// are procedural stand-ins (ht-*). Glossary entries for this team's keywords, abilities, ploys and equipment come
// from the data records themselves (game/glossary.ts builds them), so there is nothing to register here.
import type { TeamPresentation } from './types'

const ranged = ['aeonstave-ranged', 'entropic-lance-ranged', 'abyssal-lance-ranged', 'staff-of-light-ranged', 'arcane-conduit-ranged']
const melee = ['aeonstave-melee', 'entropic-lance-melee', 'abyssal-lance-melee', 'staff-of-light-melee', 'arcane-conduit-melee']
const id = (s: string) => `hie.w.${s}`

export const PRESENTATION: TeamPresentation = {
  flavour: {
    ...Object.fromEntries(ranged.map((w) => [id(w), 'plasma' as const])),
    ...Object.fromEntries(melee.map((w) => [id(w), 'blade' as const])),
    [id('spark')]: 'plasma',
    [id('atomiser-beam')]: 'plasma',
    [id('claws')]: 'blade',
    [id('synaptic-disintegrator')]: 'bolter',
    [id('fists')]: 'crush',
    [id('gauss-blaster')]: 'bolter',
    [id('tesla-carbine')]: 'plasma',
    [id('bayonet')]: 'blade',
  },
  vfx: {
    ...Object.fromEntries(ranged.map((w) => [id(w), { family: 'plasma' as const, variant: 'supercharge' }])),
    ...Object.fromEntries(melee.map((w) => [id(w), { family: 'blade' as const, variant: 'power' }])),
    [id('spark')]: { family: 'plasma', variant: 'standard' },
    [id('atomiser-beam')]: { family: 'plasma', variant: 'supercharge' },
    [id('claws')]: { family: 'blade', variant: 'grot' },
    [id('synaptic-disintegrator')]: { family: 'bolt', variant: 'sniper' },
    [id('fists')]: { family: 'crush', variant: 'fist' },
    [id('gauss-blaster')]: { family: 'bolt', variant: 'rifle' },
    [id('tesla-carbine')]: { family: 'plasma', variant: 'standard' },
    [id('bayonet')]: { family: 'blade', variant: 'choppa' },
  },
  sound: {
    ...Object.fromEntries(ranged.map((w) => [id(w), { id: 'wpn-plasma-pistol-supercharge' as const }])),
    ...Object.fromEntries(melee.map((w) => [id(w), { id: 'wpn-power-weapon' as const }])),
    [id('spark')]: { id: 'wpn-plasma-pistol' },
    [id('atomiser-beam')]: { id: 'wpn-plasma-pistol-supercharge' },
    [id('claws')]: { id: 'wpn-squig-bite' },
    [id('synaptic-disintegrator')]: { id: 'wpn-bolt-sniper-rifle' },
    [id('fists')]: { id: 'wpn-power-fist' },
    [id('gauss-blaster')]: { id: 'wpn-bolt-rifle' },
    [id('tesla-carbine')]: { id: 'wpn-plasma-pistol-supercharge' },
    [id('bayonet')]: { id: 'wpn-power-weapon' },
  },
  attachments: {
    [id('aeonstave-ranged')]: ['w-bolt-sniper-rifle'],
    [id('aeonstave-melee')]: ['w-bolt-sniper-rifle'],
    [id('entropic-lance-ranged')]: ['w-stalker-bolt-rifle'],
    [id('entropic-lance-melee')]: ['w-stalker-bolt-rifle'],
    [id('abyssal-lance-ranged')]: ['w-stalker-bolt-rifle'],
    [id('abyssal-lance-melee')]: ['w-stalker-bolt-rifle'],
    [id('staff-of-light-ranged')]: ['w-bolt-sniper-rifle'],
    [id('staff-of-light-melee')]: ['w-bolt-sniper-rifle'],
    [id('arcane-conduit-ranged')]: ['w-plasma-pistol'],
    [id('arcane-conduit-melee')]: ['w-plasma-pistol'],
    [id('spark')]: ['w-plasma-pistol'],
    [id('atomiser-beam')]: ['w-plasma-pistol'],
    [id('claws')]: ['w-throwing-knife'],
    [id('synaptic-disintegrator')]: ['w-bolt-sniper-rifle'],
    [id('fists')]: ['w-power-fist'],
    [id('gauss-blaster')]: ['w-bolt-rifle'],
    [id('tesla-carbine')]: ['w-auto-bolt-rifle'],
    [id('bayonet')]: ['w-power-sword'],
  },
  standIns: [
    'ht-chronomancer',
    'ht-psychomancer',
    'ht-technomancer',
    'ht-plasmacyte-accelerator',
    'ht-plasmacyte-reanimator',
    'ht-apprentek',
    'ht-deathmark',
    'ht-immortal-despotek',
    'ht-immortal-guardian',
  ],
}
