// phobos-strike-team engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-PH-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/phobos-strike-team'
import { realBundle } from '../../fixtures/real'

describe('phobos-strike-team', () => {
  it('TEAM-PH-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('phobos-strike-team')
    expect(realBundle.teams['phobos-strike-team']).toBeDefined()
  })
})
