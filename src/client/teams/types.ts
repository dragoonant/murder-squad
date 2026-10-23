// Per-team client presentation (M9 prep): a team's entries for the shared weapon tables, kept in the team's
// own file so a team implementer never edits the shared tables. Merged into WEAPON_FLAVOUR, WEAPON_VFX,
// WEAPON_SOUND and ATTACHMENT_FOR at module load (teams/index.ts). Type-only imports, so no cycles.
import type { SoundId } from '../audio/ids'
import type { WeaponVfx } from '../vfx/families'
import type { GlossaryEntry } from '../game/glossary'
import type { WeaponFlavour } from '../weaponFlavour'

export interface TeamPresentation {
  /** weapon id -> audio / hold flavour (weaponFlavour.ts) */
  flavour?: Record<string, WeaponFlavour>
  /** weapon id -> effect family and variant (vfx/families.ts) */
  vfx?: Record<string, WeaponVfx>
  /** weapon id -> sound (audio/eventSounds.ts); ids must exist in the audio manifest */
  sound?: Record<string, { id: SoundId; volume?: number }>
  /** weapon id -> attachment GLB slugs, [] for "draws nothing" (figures/attachmentFor.ts) */
  attachments?: Record<string, string[]>
  /** figure archetypes drawn as procedural stand-ins until their body GLB exists (figures test skips them) */
  standIns?: string[]
  /** keyword and rule-term entries for this team (game/glossary.ts merges them over the generic ones) */
  glossary?: GlossaryEntry[]
  /**
   * M9 batch C: v2 bodies hold their weapons, so a datacard whose loadouts look different gets one body per loadout:
   * datacard id -> bodies in order, the first whose `weapons` are all carried wins (else the datacard's
   * figure.archetype). Archetypes follow the concept slugs `<prefix><operative>[-<loadout>]`.
   */
  loadoutBodies?: Record<string, { weapons: string[]; archetype: string }[]>
  /** M9 batch C: display names of the team's resource pools (engine pools.ts kind -> label, e.g. `nv.faith` -> Faith) */
  pools?: Record<string, string>
  /** M10 batch C: wording of a ploy option's `param` that is not an operative or a data record, keyed `<ployId>:<param>` */
  ployParams?: Record<string, string>
}
