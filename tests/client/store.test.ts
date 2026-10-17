// Store reducer glue: the game store is the only step caller; it builds a real setup from src/data, answers
// bot seats, gates results behind the presentation cursor and reports rejections without changing state.
import { beforeEach, describe, expect, it } from 'vitest'
import { act } from '@/engine'
import { buildGameSetup, dataBundle, engineBundle } from '@/client/game/adapter'
import { defaultBuild, resolveLayout, resolveMission, resolveTeam } from '@/client/game/defaults'
import { useGame } from '@/client/store/game'
import { useSettings } from '@/client/presentation/settings'
import { usePresentedStore } from '@/client/presentation/presentedStore'
import { useFeedStore } from '@/client/presentation/feedStore'
import { createGame } from '@/engine'

function opts(seats: { A: 'human' | 'bot'; B: 'human' | 'bot' }, seed = 'store-1') {
  const b = dataBundle()
  const tA = resolveTeam(b, 'aod')
  const tB = resolveTeam(b, 'kom')
  return {
    builds: { A: defaultBuild(b, tA), B: defaultBuild(b, tB) },
    seats,
    seed,
    missionId: resolveMission(b, 'secure').id,
    layoutId: resolveLayout(b, '01').id,
  }
}

describe('adapter', () => {
  it('builds a legal engine setup from real data for both teams on every layout and mission', () => {
    const b = dataBundle()
    for (const layout of Object.values(b.layouts)) {
      for (const mission of Object.values(b.missions)) {
        const o = opts({ A: 'human', B: 'bot' })
        const setup = buildGameSetup(b, o.builds.A, o.builds.B, { layoutId: layout.id, missionId: mission.id })
        const r = createGame(setup, 'seed-x', engineBundle())
        expect(r.pending?.kind).toBe('setup.initiative')
        expect(Object.keys(r.state.operatives).length).toBeGreaterThanOrEqual(12)
      }
    }
  })

  it('carries rosters, loadouts and team choices into the setup', () => {
    const b = dataBundle()
    const o = opts({ A: 'human', B: 'bot' })
    const setup = buildGameSetup(b, o.builds.A, o.builds.B, { layoutId: o.layoutId, missionId: o.missionId, mapId: 'auto' })
    expect(setup.rosters.A.length).toBe(6)
    expect(setup.rosters.B.length).toBe(11)
    expect(setup.mission?.missionId).toBe(o.missionId)
    expect(setup.mission?.mapId).toBeUndefined()
    expect(Object.keys(setup.teamChoices!.A)).toContain('primary-tactic')
  })
})

describe('game store', () => {
  beforeEach(() => {
    useSettings.getState().setAnimSpeed('instant')
    useGame.getState().reset()
    useFeedStore.setState({ toasts: [] })
  })

  it('starts a game on the first decision and keeps the presentation cursor in step', async () => {
    useGame.getState().newGame(opts({ A: 'human', B: 'human' }))
    const g = useGame.getState()
    expect(g.pending?.kind).toBe('setup.initiative')
    expect(g.pending?.seat).toBe('A')
    expect(g.legal?.length).toBe(1)
    await new Promise((r) => setTimeout(r, 20))
    const p = usePresentedStore.getState()
    expect(p.presentedSeq).toBe(p.latestSeq)
  })

  it('dispatches an accepted answer through step and advances the pending decision', async () => {
    useGame.getState().newGame(opts({ A: 'human', B: 'human' }))
    const rej = useGame.getState().choose('roll')
    expect(rej).toBeNull()
    expect(useGame.getState().pending?.seat).toBe('B')
    expect(useGame.getState().state?.seq).toBe(1)
  })

  it('reports a rejection (toast + record) and leaves the state untouched', () => {
    useGame.getState().newGame(opts({ A: 'human', B: 'human' }))
    const before = useGame.getState().state
    const pending = useGame.getState().pending!
    const rej = useGame.getState().dispatch(act.deploy(pending, 'A1', 0, 0))
    expect(rej).not.toBeNull()
    expect(useGame.getState().state).toBe(before)
    expect(useGame.getState().rejection?.code).toBe(rej!.code)
    expect(useFeedStore.getState().toasts.length).toBe(1)
  })

  it('plays two bot seats through setup, strategy and several activations', async () => {
    useGame.getState().newGame(opts({ A: 'bot', B: 'bot' }, 'store-bots'))
    const deadline = Date.now() + 15000
    while (Date.now() < deadline) {
      const s = useGame.getState().state
      if (s && (s.phase === 'ended' || s.seq > 160)) break
      await new Promise((r) => setTimeout(r, 25))
    }
    const s = useGame.getState().state!
    expect(s.seq).toBeGreaterThan(80)
    expect(Object.values(s.operatives).every((o) => o.status !== 'reserve')).toBe(true)
  }, 20000)
})
