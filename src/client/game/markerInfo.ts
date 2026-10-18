// What a board marker is, in words: the hover tip over objectives, equipment markers and action markers
// (smoke, breach). Control comes from the engine (`markerControl`), mission status (secured / transmitting /
// looted) from `missionView`; this file only phrases it. All prose is our own wording.
import type { GameState, Marker, Seat } from '@/engine'
import { markerControl } from '@/engine/query'
import { markerDiameterMm } from '@/engine/state'
import { dataBundle } from './adapter'
import { mission } from './kill'
import { SEAT_NAME } from './labels'

export interface MarkerInfo {
  /** e.g. "Objective marker", "Comms Device", "Smoke cloud" */
  title: string
  /** one-line status: who controls it, who owns it */
  status: string
  /** what it does / how to use it */
  detail: string[]
}

/** How the mission's crit op uses objective markers, by crit op id. */
const CRIT_OP_USE: Record<string, string> = {
  loot: 'Loot: an operative that controls it can take the Loot action for 1 VP. Each marker can be looted once per turning point.',
  secure: 'Secure: an operative that controls it can take the Secure action. The marker stays secured until the enemy secures it; secured markers score at the end of each turning point from the second.',
  transmission: 'Transmission: an operative that controls it can start a transmission, which runs until the next turning point. Controlling transmitting markers scores at the end of each turning point from the second.',
}

const ACTION_MARKERS: Record<string, { title: string; text: string }> = {
  smoke: { title: 'Smoke cloud', text: 'Operatives wholly within 1″ of it are obscured to shooters more than 2″ away.' },
  breach: { title: 'Breach point', text: 'Within 1″ of it, terrain parts no thicker than 1″ count as accessible, so operatives can move through them.' },
}

function side(seat: Seat | null, you: Seat | null, cap = false): string {
  let s: string
  if (!seat) s = 'nobody'
  else if (you) s = seat === you ? 'you' : 'the enemy'
  else s = SEAT_NAME[seat]
  return cap ? s.charAt(0).toUpperCase() + s.slice(1) : s
}

function owned(seat: Seat | null, you: Seat | null): string {
  if (!seat) return ''
  if (you) return seat === you ? 'Yours' : "The enemy's"
  return `${SEAT_NAME[seat]}'s`
}

/** Hover text for a marker. `you` is the human seat when there is exactly one, so wording can say you / the enemy. */
export function describeMarker(state: GameState, marker: Marker, you: Seat | null): MarkerInfo {
  const mm = markerDiameterMm(marker.kind)
  const c = markerControl(state, marker)
  const contesting = c.contesting.A.length + c.contesting.B.length
  let control: string
  if (marker.carriedBy) {
    const carrier = state.operatives[marker.carriedBy]
    control = `Carried by ${carrier ? carrier.name : marker.carriedBy}.`
  } else if (c.controller) {
    control = `${side(c.controller, you, true)} control${c.controller === you ? '' : 's'} it (APL ${c.apl.A} vs ${c.apl.B}).`
  } else if (contesting > 0) {
    control = `Contested, nobody controls it (APL ${c.apl.A} vs ${c.apl.B}).`
  } else {
    control = 'Nobody is in control range.'
  }

  if (marker.kind === 'objective') {
    const view = mission(state)
    const mv = view?.markers.find((k) => k.id === marker.id)
    const critOp = state.mission?.critOp ?? ''
    const detail: string[] = []
    if (mv?.securedBy) detail.push(`Secured by ${side(mv.securedBy, you)}.`)
    if (mv?.transmitting) detail.push('Transmitting this turning point.')
    if (mv?.looted) detail.push('Already looted this turning point.')
    detail.push(CRIT_OP_USE[critOp] ?? 'Score the mission’s crit op by controlling it.')
    detail.push(`Control range: within 1″ and visible. The side with the higher total APL of contesting operatives controls it. ${mm}mm marker.`)
    return { title: 'Objective marker', status: control, detail }
  }

  const eqId = marker.equipmentId ?? ''
  const action = ACTION_MARKERS[eqId]
  if (action) {
    const detail = [action.text]
    if (eqId === 'smoke') {
      detail.push(
        marker.clearsAfter === null || marker.clearsAfter === undefined
          ? 'Clears after D3 activations of the next turning point (rolled when it starts).'
          : `Clears after ${marker.clearsAfter} more activation${marker.clearsAfter === 1 ? '' : 's'}.`,
      )
    }
    const placer = marker.placedBy ? state.operatives[marker.placedBy] : undefined
    const status = `${owned(marker.owner, you) || 'A marker'}${placer ? `, placed by ${placer.name}` : ''}.`
    return { title: action.title, status, detail }
  }

  const def = dataBundle().byId[eqId] as { name?: string; text?: string } | undefined
  const title = def?.name ?? 'Equipment marker'
  const detail: string[] = []
  if (def?.text) detail.push(def.text)
  if (marker.usedTp !== undefined && marker.usedTp === state.turningPoint) detail.push('Already used this turning point.')
  detail.push(`${mm}mm equipment marker. ${control}`)
  return { title, status: `${owned(marker.owner, you) || 'Unowned'} equipment.`, detail }
}
