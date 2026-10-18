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
  // Keywords and rule terms in our own wording (game/glossary.ts merges them over the generic fallbacks).
  glossary: [
    { term: 'NECRON', kind: 'keyword', body: 'Species keyword carried by every Hierotek Circle operative. No current rule names it, so it only identifies the operative.' },
    { term: 'CRYPTEK', kind: 'keyword', body: 'Squad commander role. A Cryptek is the team\'s Leader and carries Interstitial Command plus three unique actions that depend on its kind. Apprentek Assistance lets an Apprentek borrow them.' },
    { term: 'CHRONOMANCER', kind: 'keyword', body: 'Cryptek of time. Timesplinter re-sets an expended friend elsewhere, its Nanomine marker punishes nearby enemies, and Chronometron grants a friend extra speed.' },
    { term: 'PSYCHOMANCER', kind: 'keyword', body: 'Cryptek of fear. Harbinger of Despair marks ground enemies dread, Nightmare Shroud hampers attackers, and Vision of Madness can stop an enemy activating.' },
    { term: 'TECHNOMANCER', kind: 'keyword', body: 'Cryptek of repair. Canoptek Repair restores wounds, Augment Weapon adds weapon rules for a turn, and Reinforce Metal toughens a friend.' },
    { term: 'PLASMACYTE', kind: 'keyword', body: 'Small Canoptek helper. Its Scuttler ability keeps it from being targeted while concealed in cover unless the shooter is very close.' },
    { term: 'ACCELERATOR', kind: 'keyword', body: 'The Plasmacyte whose Accelerate action gives a Deathmark or Immortal 1 extra APL for its next activation.' },
    { term: 'REANIMATOR', kind: 'keyword', body: 'The Plasmacyte whose Reanimate action can bring an incapacitated friend back to the fight when a Reanimation marker is in reach.' },
    { term: 'MEDIC', kind: 'keyword', body: 'Healer role keyword, carried by the Pathfinder Medical Technician and the Hierotek Plasmacyte Reanimator. Rules that heal or revive look for it.' },
    { term: 'APPRENTEK', kind: 'keyword', body: 'Junior Cryptek. It can use one unique action of your Cryptek per turning point (Apprentek Assistance) and can lend its weapon the Magnify rule.' },
    { term: 'DEATHMARK', kind: 'keyword', body: 'Phase-sniper. Each Shoot it finishes can leave your Deathmarked token on the target, and Deathmarks shoot Deathmarked enemies with Seek. Repeatable.' },
    { term: 'IMMORTAL', kind: 'keyword', body: 'Necron infantry type. Immortal Guardians and Despoteks share it; its Steadfast ability lets them hold objectives as if their APL were 3.' },
    { term: 'DESPOTEK', kind: 'keyword', body: 'Immortal commander. Its Interstitial Command hands another friend a free action, and it holds markers with Steadfast.' },
    { term: 'GUARDIAN', kind: 'keyword', body: 'Steady rank-and-file Immortal with Steadfast. Repeatable.' },
    { term: 'Deathmarked token', kind: 'status', aliases: ['Deathmarked tokens', 'Deathmarked'], body: 'Placed on an enemy shot by a friendly Deathmark. It lasts the whole battle, and friendly Deathmarks shoot that enemy with Seek.' },
    { term: 'Madness token', kind: 'status', aliases: ['Madness tokens'], body: 'Placed on an enemy by Vision of Madness. Each time the opponent would activate the holder, you roll a D6; if it is equal to or above its APL it cannot activate and the opponent must pick someone else.' },
    { term: 'Chronometron token', kind: 'status', aliases: ['Chronometron tokens'], body: 'Holds a short time-boost on a friendly operative from a Chronomancer\'s Chronometron action. It ends when the Chronomancer next activates, is incapacitated, or someone uses the action again.' },
    { term: 'Reinforce token', kind: 'status', aliases: ['Reinforce tokens'], body: 'Marks a friend toughened by Reinforce Metal. It ends when the Technomancer next activates, is incapacitated, or someone uses the action again.' },
    { term: 'Augment token', kind: 'status', aliases: ['Augment tokens'], body: 'Marks a friend whose weapon was changed by Augment Weapon, until the Technomancer next activates or is incapacitated.' },
    { term: 'Shroud token', kind: 'status', aliases: ['Shroud tokens'], body: 'Marks the area of a Psychomancer\'s Nightmare Shroud while it lasts.' },
    { term: 'Reanimation marker', kind: 'rule', aliases: ['Reanimation markers'], body: 'Left beside a friendly Hierotek operative the first time it is incapacitated. A Reanimate action can bring the operative back from it.' },
  ],
}
