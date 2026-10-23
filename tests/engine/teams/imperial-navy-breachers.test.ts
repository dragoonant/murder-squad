// imperial-navy-breachers engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-NB-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/imperial-navy-breachers'
import { realBundle } from '../../fixtures/real'

describe('imperial-navy-breachers', () => {
  it('TEAM-NB-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('imperial-navy-breachers')
    expect(realBundle.teams['imperial-navy-breachers']).toBeDefined()
  })
})
