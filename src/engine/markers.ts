// MRK: marker.* - Pick Up / Place, contest/control by APL, carrying, mission markers.
// M2a: the control update that runs after each action. TODO(M2b): marker.pickUp / marker.place flows.
import { markerControl } from './query'
import { reject, type Ctx, type ModuleDef } from './registry'

/**
 * Control cannot change in the middle of an action (R-8.6), so it is re-evaluated only between
 * actions, i.e. while no action is declared and waiting for a path.
 */
export function updateControl(ctx: Ctx): void {
  const s = ctx.state
  if (s.markers.length === 0) return
  if (s.firefight.activation?.declared) return
  for (const m of s.markers) {
    const { controller } = markerControl(s, m)
    if (controller !== m.controller) {
      m.controller = controller
      ctx.emit({ type: 'ControlChanged', markerId: m.id, controller }, null)
    }
  }
}

export const markersModule: ModuleDef = {
  id: 'markers',
  namespaces: ['marker'],
  handle(_state, action) {
    return reject('E_TODO', `${action.type} is not implemented until M2b (markers)`)
  },
}
