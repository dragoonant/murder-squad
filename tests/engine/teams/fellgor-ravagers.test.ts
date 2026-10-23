// fellgor-ravagers engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-FG-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/fellgor-ravagers'
import { realBundle } from '../../fixtures/real'

describe('fellgor-ravagers', () => {
  it('TEAM-FG-000 the team is registered with the engine and the data (scaffold)', () => {
    expect(TEAM_ID).toBe('fellgor-ravagers')
    expect(realBundle.teams['fellgor-ravagers']).toBeDefined()
  })
})
