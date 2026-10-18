// Marker hover text: every marker in a real game gets a title, a status and usage lines with no raw ids or
// undefineds; objectives explain the mission's crit op; smoke / breach / equipment markers name themselves.
import { describe, expect, it } from 'vitest'
import type { GameState, Marker } from '@/engine'
import { describeMarker } from '@/client/game/markerInfo'
import { playGame } from './support'

function firefightState(mission: string): GameState {
  let found: GameState | null = null
  playGame({ seed: `tip-${mission}`, mission, maxSteps: 400 }, (s) => {
    if (!found && s.state.phase === 'firefight' && s.state.markers.length > 0) found = s.state
  })
  if (!found) throw new Error('no firefight state with markers')
  return found
}

const clean = (text: string) => expect(text).not.toMatch(/undefined|NaN|object Object|\bobj\.|\beq\./)

describe('describeMarker', () => {
  it('names every marker of a real game and explains objectives by the crit op', () => {
    for (const [mission, word] of [['loot', /Loot/], ['secure', /Secure/], ['transmission', /transmission/i]] as const) {
      const state = firefightState(mission)
      const objectives = state.markers.filter((m) => m.kind === 'objective')
      expect(objectives.length).toBeGreaterThan(0)
      for (const m of state.markers) {
        const info = describeMarker(state, m, 'A')
        clean(info.title)
        clean(info.status)
        info.detail.forEach(clean)
        expect(info.detail.length).toBeGreaterThan(0)
        if (m.kind === 'objective') {
          expect(info.title).toBe('Objective marker')
          expect(info.detail.join(' ')).toMatch(word)
          expect(info.detail.join(' ')).toMatch(/Control range/)
          expect(info.status).toMatch(/control|Nobody|Contested|Carried/)
        } else {
          expect(info.title).not.toBe('Objective marker')
          expect(info.status).toMatch(/Yours|enemy|Unowned|placed/)
        }
      }
    }
  })

  it('says you / the enemy for the human seat and seat names when both seats are the same kind', () => {
    const state = firefightState('secure')
    const eq = state.markers.find((m) => m.kind === 'equipment' && m.owner === 'B')
    if (eq) {
      expect(describeMarker(state, eq, 'A').status).toMatch(/enemy/)
      expect(describeMarker(state, eq, 'B').status).toMatch(/Yours/)
      expect(describeMarker(state, eq, null).status).toMatch(/Seat B/)
    }
  })

  it('describes smoke and breach action markers', () => {
    const state = firefightState('loot')
    const op = Object.values(state.operatives)[0]!
    const smoke: Marker = { id: 'smoke-1', kind: 'equipment', pos: { x: 0, z: 0 }, owner: op.seat, carriedBy: null, controller: null, equipmentId: 'smoke', placedBy: op.id, clearsAfter: null }
    const s1 = describeMarker(state, smoke, op.seat)
    expect(s1.title).toBe('Smoke cloud')
    expect(s1.status).toMatch(new RegExp(`Yours, placed by ${op.name}`))
    expect(s1.detail.join(' ')).toMatch(/obscured/)
    expect(s1.detail.join(' ')).toMatch(/D3 activations/)
    const s2 = describeMarker(state, { ...smoke, clearsAfter: 1 }, op.seat)
    expect(s2.detail.join(' ')).toMatch(/1 more activation\./)
    const breach: Marker = { ...smoke, id: 'breach-1', equipmentId: 'breach', placedBy: op.id, featureId: 'f' }
    const b = describeMarker(state, breach, op.seat)
    expect(b.title).toBe('Breach point')
    expect(b.detail.join(' ')).toMatch(/accessible/)
  })
})
