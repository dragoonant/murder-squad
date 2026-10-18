// Wyrmblade rules-verification fixes (M9 review), named by checklist id (docs/spec/12-rules-test-checklist.md).
import { describe, expect, it } from 'vitest'
import { offersFor, usePloy } from '@/engine/ploys'
import { place } from '../../fixtures/helpers'
import { activateOp, opOf, withCtx } from '../../fixtures/real'
import { agents } from './wyrmblade.hooks'

describe('TEAM-WYR rules verification', () => {
  it('TEAM-WYR-020 Creeping Shadow: the free Dash after a Fight is capped at 2" while counteracting (the counteract move cap)', () => {
    const base = agents()
    const talon = opOf(base, 'A', 'wyr.sanctus-talon')
    const s = activateOp(place(base, talon, 0, 0), talon)
    const info = (counteracting: boolean) => ({ window: 'firefight.actionEnded', subjectId: talon, action: 'fight', counteracting })
    const dash = (counteracting: boolean) => offersFor(s, 'A', 'firefight.actionEnded', info(counteracting)).find((o) => o.id === 'wyr.a.creeping-shadow:dash')
    expect(dash(false)).toBeDefined()
    expect(dash(true)).toBeDefined()
    // in a counteraction the free Dash starts with a 2" cap, in an activation with the normal Dash distance
    const started = (counteracting: boolean) => withCtx(s, (ctx) => usePloy(ctx, 'A', dash(counteracting)!, info(counteracting))).state.pending
    expect(started(true)).toMatchObject({ kind: 'move.path', constraints: { kind: 'dash', maxInches: 2 } })
    expect(started(false)).toMatchObject({ kind: 'move.path', constraints: { kind: 'dash' } })
    expect((started(false)!.constraints as { maxInches?: number }).maxInches ?? 3).toBe(3)
  })
})
