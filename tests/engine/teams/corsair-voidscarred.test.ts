// corsair-voidscarred engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-CV-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/corsair-voidscarred'
import { realBundle } from '../../fixtures/real'

describe('corsair-voidscarred', () => {
  it('TEAM-CV-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('corsair-voidscarred')
    expect(realBundle.teams['corsair-voidscarred']).toBeDefined()
  })
})
