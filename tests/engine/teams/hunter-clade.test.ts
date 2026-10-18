// hunter-clade engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-HC-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/hunter-clade'
import { realBundle } from '../../fixtures/real'

describe('hunter-clade', () => {
  it('TEAM-HC-000 the team is registered with the engine and data (scaffold)', () => {
    expect(TEAM_ID).toBe('hunter-clade')
    expect(realBundle.teams['hunter-clade']).toBeDefined()
  })
})
