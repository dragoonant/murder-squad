// Weapon rules as hooks into shoot/fight (Accurate ... Torrent). No decision namespace of its own
// besides `weapon.choice`. TODO(M2b): register every rule from docs/spec/10-rules-core.md section 10.
import { stubModule } from './registry'

export const weaponsModule = stubModule('weapons', ['weapon'])
