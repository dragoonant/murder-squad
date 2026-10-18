// hand-of-the-archon engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-HA-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/hand-of-the-archon'
import { realBundle } from '../../fixtures/real'

describe('hand-of-the-archon', () => {
  it('TEAM-HA-000 the team is registered with the engine and data (scaffold)', () => {
    expect(TEAM_ID).toBe('hand-of-the-archon')
    expect(realBundle.teams['hand-of-the-archon']).toBeDefined()
  })
})
