// SIGHT-001..006: the sight panel never shows a visible enemy as a shot the engine would refuse, and when a visible
// enemy cannot be shot the row says why with the engine's own reasons (owner report: the Angels of Death Eliminator
// Sniper, unlimited range, "sees" an enemy it cannot shoot).
import { describe, expect, it } from 'vitest'
import { createGame, legalActions, step, view, type Activation, type Action, type GameState, type Seat } from '@/engine'
import { buildScenario } from '@/client/dev/scenarios'
import { buildGameSetup, dataBundle, engineBundle } from '@/client/game/adapter'
import { fullBuild, resolveLayout, resolveMission, resolveTeam } from '@/client/game/defaults'
import { evaluateSight } from '@/client/interaction/sightlines'
import { actionAvailability } from '@/engine/firefight'
import { shootBlockers } from '@/engine/shoot'
import { cloneState } from '@/engine/state'
import { playableTeams } from '@/engine/bundle'
import { createAiDecider } from '../../src/ai/decider'
import { realBundle, realSetupFor } from '../ai/fixtures'

const SNIPER = 'A4'
const EXECUTIONER = 'aod.w.bolt-sniper-rifle-executioner'

/** shoot-cover with the Eliminator Sniper (A4) at (-3.5, 0.5) on Engage and the Grot (B11) in the open 8.9" away. */
function sniperState(): GameState {
  const b = dataBundle()
  const setup = buildGameSetup(b, fullBuild(b, resolveTeam(b, 'aod')), fullBuild(b, resolveTeam(b, 'kom')), {
    layoutId: resolveLayout(b, '01').id,
    missionId: resolveMission(b, 'secure').id,
    mapId: 'prelim-1',
    auto: true,
  })
  const s = cloneState(buildScenario('shoot-cover', createGame(setup, 'scenario-shoot-cover', engineBundle()).state))
  s.operatives.A6!.pos = { x: -14, y: 0, z: 10.5 }
  s.operatives[SNIPER]!.pos = { x: -3.5, y: 0, z: 0.5 }
  s.operatives[SNIPER]!.order = 'engage'
  s.operatives.B11!.pos = { x: -1.8, y: 0, z: 10.5 }
  return s
}

function activate(s: GameState, a: Partial<Activation>): Activation {
  const act: Activation = { operativeId: SNIPER, seat: 'A', counteract: false, stage: 'action', apSpent: 0, performed: [], declared: null, weaponsUsed: [], ...a }
  s.firefight.activation = act
  return act
}

const sightOf = (s: GameState) => evaluateSight(s, { opId: SNIPER, at: s.operatives[SNIPER]!.pos, performed: s.firefight.activation?.performed ?? [] })
const entry = (s: GameState, id: string) => sightOf(s).entries.find((e) => e.id === id)!

describe('sight panel vs engine Shoot (AoD Eliminator Sniper)', () => {
  it('SIGHT-001 after a Reposition the Heavy (Dash only) rifle is named, not the bolt pistol range', () => {
    const s = sniperState()
    expect(entry(s, 'B11').status).toBe('valid')
    activate(s, { apSpent: 1, performed: ['dash'] })
    expect(entry(s, 'B11').valid).toBe(true)
    activate(s, { apSpent: 1, performed: ['reposition'] })
    const grot = entry(s, 'B11')
    expect(grot.visible).toBe(true)
    expect(grot.valid).toBe(false)
    expect(grot.status).toBe('blocked')
    expect(grot.reason).toMatch(/^can't shoot: Bolt sniper rifle is Heavy \(Dash only\) and the operative already moved \(reposition\)/)
    expect(grot.reason).toMatch(/beyond the range of Bolt pistol \(8″\)/)
    expect(grot.reason).not.toMatch(/executioner|hyperfrag|mortis/)
  })

  it('SIGHT-002 a second Shoot that cannot pay the ASTARTES surcharge is not offered, and the panel says so', () => {
    const s = sniperState()
    s.operatives.B3!.pos = { x: 14, y: 0, z: -9 }
    s.operatives.B2!.pos = { x: 12.5, y: 0, z: -9 }
    const act = activate(s, { apSpent: 2, performed: ['shoot'], weaponsUsed: [EXECUTIONER] })
    const rej = actionAvailability(s, s.operatives[SNIPER]!, 'shoot', act)
    expect(rej?.code).toBe('E_NO_AP')
    expect(rej?.reason).toMatch(/second Shoot with the Bolt sniper rifle \(executioner\) costs 2 AP and only 1 remain/)
    const sight = sightOf(s)
    expect(sight.entries.some((e) => e.valid)).toBe(false)
    expect(sight.shootBlocked).toMatch(/costs 2 AP/)
    // with 2 AP left the repeat is affordable again
    act.apSpent = 1
    expect(actionAvailability(s, s.operatives[SNIPER]!, 'shoot', act)).toBeNull()
    expect(entry(s, 'B11').valid).toBe(true)
  })

  it('SIGHT-003 on Conceal mid-activation the odds no longer assume Engage: rows are blocked with the reasons', () => {
    const s = sniperState()
    s.operatives[SNIPER]!.order = 'conceal'
    // not activated yet: the order can still be Engage, so the Engage odds stay (with the note)
    expect(sightOf(s).concealLocked).toBe(false)
    activate(s, { apSpent: 1, performed: ['reposition'] })
    const sight = sightOf(s)
    expect(sight.concealLocked).toBe(false)
    expect(sight.entries.some((e) => e.valid)).toBe(false)
    expect(actionAvailability(s, s.operatives[SNIPER]!, 'shoot', s.firefight.activation)?.reason).toMatch(/no ranged weapon/)
    const grot = sight.entries.find((e) => e.id === 'B11')!
    expect(grot.reason).toMatch(/Bolt pistol is not Silent/)
    expect(grot.reason).toMatch(/Heavy \(Dash only\)/)
  })

  it('SIGHT-004 inside an enemy control range every visible enemy is "can\'t shoot", as the engine rules', () => {
    const s = sniperState()
    s.operatives[SNIPER]!.pos = { x: -2.5, y: 0, z: 0.2 }
    const act = activate(s, {})
    const sight = sightOf(s)
    const why = actionAvailability(s, s.operatives[SNIPER]!, 'shoot', act)!.reason
    expect(sight.shootBlocked).toBe(why)
    expect(shootBlockers(s, s.operatives[SNIPER]!, act).action).toBe(why)
    for (const e of sight.entries.filter((x) => x.visible)) {
      expect(e.status).toBe('blocked')
      expect(e.reason).toBe(`can't shoot: ${why}`)
    }
  })

  it('SIGHT-005 shootBlockers names every ranged profile with its own reason or null', () => {
    const s = sniperState()
    const act = activate(s, { apSpent: 1, performed: ['reposition'] })
    const b = shootBlockers(s, s.operatives[SNIPER]!, act)
    expect(b.action).toBeNull()
    expect(b.weapons.find((w) => w.weaponId === 'aod.w.bolt-pistol')?.reason).toBeNull()
    expect(b.weapons.find((w) => w.weaponId === EXECUTIONER)).toMatchObject({ range: null, reason: expect.stringMatching(/Heavy \(Dash only\)/) })
  })

  it('SIGHT-006 sampled real games: a row the panel shows as a shot is a target the engine offers, and back', { timeout: 120_000 }, () => {
    const teams = playableTeams(realBundle()).filter((t) => t !== 'angels-of-death')
    let checked = 0
    const mismatches: string[] = []
    for (let g = 0; g < 4; g++) {
      const seed = `sight-006-${g}`
      let state = createGame(realSetupFor(['angels-of-death', teams[(g * 5) % teams.length]!], g), seed, realBundle()).state
      const ds = { A: createAiDecider('normal', { seed: `${seed}:A`, budgetMs: 10 }), B: createAiDecider('normal', { seed: `${seed}:B`, budgetMs: 10 }) }
      for (let n = 0; n < 2500 && state.pending; n++) {
        const p = state.pending
        const act = state.firefight?.activation
        if (state.phase === 'firefight' && p.kind === 'firefight.action' && act && state.operatives[act.operativeId]?.datacardId === 'aod.eliminator-sniper') {
          const op = state.operatives[act.operativeId]!
          const offered = engineTargets(state)
          for (const e of evaluateSight(state, { opId: op.id, at: op.pos, performed: act.performed }).entries) {
            checked++
            if (e.valid !== offered.has(e.id)) mismatches.push(`${seed}@${n} ${op.id}->${e.id} panel=${e.status} engine=${offered.has(e.id)} ${e.reason ?? ''}`)
          }
        }
        const a: Action = ds[p.seat as Seat].decideSync(view(state, p.seat), p, legalActions(state, p)).action
        const r = step(state, a)
        if (r.rejection) break
        state = r.state
      }
    }
    expect(checked).toBeGreaterThan(20)
    expect(mismatches).toEqual([])
  })
})

/** The enemies the engine really lets the active operative shoot now: declare Shoot, then every weapon's targets. */
function engineTargets(s: GameState): Set<string> {
  const out = new Set<string>()
  const shoot = (s.pending!.options ?? []).find((o) => (o.action.payload as { action?: string }).action === 'shoot')
  if (!shoot) return out
  const skip = (t: GameState, until: string) => {
    for (let i = 0; i < 8 && t.pending && t.pending.kind !== until && t.pending.kind !== 'firefight.action'; i++) {
      const pass = legalActions(t, t.pending)?.find((a) => a.type === 'pass')
      if (!pass) break
      t = step(t, pass).state
    }
    return t
  }
  const w = skip(step(s, shoot.action).state, 'shoot.weapon')
  if (w.pending?.kind !== 'shoot.weapon') return out
  for (const o of w.pending.options ?? []) {
    const t = skip(step(w, o.action).state, 'shoot.target')
    if (t.pending?.kind === 'shoot.target') for (const x of t.pending.options ?? []) out.add(String((x.action.payload as { targetId?: string }).targetId))
  }
  return out
}
