// goremongers engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-GM-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/goremongers'
import { realBundle } from '../../fixtures/real'

describe('goremongers', () => {
  it('TEAM-GM-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('goremongers')
    expect(realBundle.teams['goremongers']).toBeDefined()
  })
})
