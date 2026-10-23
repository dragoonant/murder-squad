// scout-squad engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-SS-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/scout-squad'
import { realBundle } from '../../fixtures/real'

describe('scout-squad', () => {
  it('TEAM-SS-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('scout-squad')
    expect(realBundle.teams['scout-squad']).toBeDefined()
  })
})
