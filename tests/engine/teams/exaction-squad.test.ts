// exaction-squad engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-EX-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/exaction-squad'
import { realBundle } from '../../fixtures/real'

describe('exaction-squad', () => {
  it('TEAM-EX-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('exaction-squad')
    expect(realBundle.teams['exaction-squad']).toBeDefined()
  })
})
