// wyrmblade engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-WYR-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/wyrmblade'
import { realBundle } from '../../fixtures/real'

describe('wyrmblade', () => {
  it('TEAM-WYR-000 the team is registered with the engine and data (scaffold)', () => {
    expect(TEAM_ID).toBe('wyrmblade')
    expect(realBundle.teams['wyrmblade']).toBeDefined()
  })
})
