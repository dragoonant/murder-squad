// plague-marines engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-PM-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/plague-marines'
import { realBundle } from '../../fixtures/real'

describe('plague-marines', () => {
  it('TEAM-PM-000 the team is registered with the engine and data (scaffold)', () => {
    expect(TEAM_ID).toBe('plague-marines')
    expect(realBundle.teams['plague-marines']).toBeDefined()
  })
})
