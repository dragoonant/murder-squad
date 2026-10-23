// tempestus-aquilons engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-TA-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/tempestus-aquilons'
import { realBundle } from '../../fixtures/real'

describe('tempestus-aquilons', () => {
  it('TEAM-TA-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('tempestus-aquilons')
    expect(realBundle.teams['tempestus-aquilons']).toBeDefined()
  })
})
