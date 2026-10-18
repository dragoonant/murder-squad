// pathfinders engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-PF-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/pathfinders'
import { realBundle } from '../../fixtures/real'

describe('pathfinders', () => {
  it('TEAM-PF-000 the team is registered with the engine and data (scaffold)', () => {
    expect(TEAM_ID).toBe('pathfinders')
    expect(realBundle.teams['pathfinders']).toBeDefined()
  })
})
