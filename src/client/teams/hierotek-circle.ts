// Hierotek Circle client presentation: weapon flavours, VFX families, sounds, attachments and figure stand-ins for
// this team's weapons and datacards (teams/types.ts). Owned by the team implementer; empty until the team
// data exists. Coverage tests require an entry for every weapon once team.json says `playable`.
import type { TeamPresentation } from './types'

export const PRESENTATION: TeamPresentation = {
  flavour: {},
  vfx: {},
  sound: {},
  attachments: {},
  standIns: [],
}
