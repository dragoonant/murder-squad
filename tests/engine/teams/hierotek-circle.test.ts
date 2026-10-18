// hierotek-circle engine tests, named by checklist id (docs/spec/12-rules-test-checklist.md, TEAM-HIE-nnn).
// Owned by the team implementer. The scaffold test below changes when the team data is complete.
import { describe, expect, it } from 'vitest'
import { TEAM_ID } from '@/engine/teams/hierotek-circle'
import { realBundle } from '../../fixtures/real'

describe('hierotek-circle', () => {
  it('TEAM-HIE-000 the team is registered with the engine and data (scaffold)', () => {
    expect(TEAM_ID).toBe('hierotek-circle')
    expect(realBundle.teams['hierotek-circle']).toBeDefined()
  })
})
