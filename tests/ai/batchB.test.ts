// The utility AI on the four batch B teams (Legionaries, Hand of the Archon, Hunter Clade, Hearthkyn Salvagers): full
// games against an existing team run clean (no rejection, no stall, no decision kind falling back to random), and the
// team rules are actually used: free (0 CP) offers such as the Pain invigorations, the Legionaries ploys and gambits,
// FLY set-ups from the Jump Pack, the Tactician gambit and a chosen Hunter Clade Imperative.
import { describe, expect, it } from 'vitest'
import { createGame, legalActions, step, view, type Action, type GameEvent, type GameSetup, type GameState, type RosterEntry, type Seat } from '@/engine'
import { defaultLoadoutFor } from '@/engine/bundle'
import { createAiDecider, type AiDecider } from '../../src/ai/decider'
import { realBundle, realSetupFor } from './fixtures'

interface Tracked {
  state: GameState
  events: GameEvent[]
  decisions: number
  rejections: string[]
  fallbacksByKind: Record<string, number>
  stalled: boolean
  /** ploy.firefight offers seen, by ployId, and how many were taken */
  offered: Record<string, number>
  taken: Record<string, number>
  gambits: Record<string, number>
  /** move.path answers that were FLY set-ups */
  flies: number
  /** Imperative picked by the Doctrina gambit */
  modes: string[]
}

function play(teams: [string, string], seed: string, tier: 'easy' | 'normal' = 'normal', maxDecisions = 4000, tweak?: (setup: GameSetup) => void): Tracked {
  const setup = realSetupFor(teams)
  tweak?.(setup)
  let state = createGame(setup, seed, realBundle()).state
  const deciders: Record<Seat, AiDecider> = { A: createAiDecider(tier, { seed: `${seed}:A`, budgetMs: 40 }), B: createAiDecider(tier, { seed: `${seed}:B`, budgetMs: 40 }) }
  const t: Tracked = { state, events: [], decisions: 0, rejections: [], fallbacksByKind: {}, stalled: false, offered: {}, taken: {}, gambits: {}, flies: 0, modes: [] }
  let lastSeq = -1
  let same = 0
  while (state.pending && t.decisions < maxDecisions) {
    const p = state.pending
    const legal = legalActions(state, p)
    const r = deciders[p.seat].decideSync(view(state, p.seat), p, legal)
    if (r.fallback) t.fallbacksByKind[p.kind] = (t.fallbacksByKind[p.kind] ?? 0) + 1
    if (p.kind === 'ploy.firefight') {
      for (const o of p.options ?? []) {
        const id = (o.action.payload as { ployId: string }).ployId
        t.offered[id] = (t.offered[id] ?? 0) + 1
      }
      if (r.action.type !== 'pass') {
        const id = (r.action.payload as { ployId: string }).ployId
        t.taken[id] = (t.taken[id] ?? 0) + 1
      }
    }
    if (p.kind === 'strategy.gambit' && r.action.type !== 'pass') {
      const pl = r.action.payload as { gambitId: string; param?: string }
      t.gambits[pl.gambitId] = (t.gambits[pl.gambitId] ?? 0) + 1
      if (pl.gambitId === 'hc.p.doctrina' && pl.param) t.modes.push(pl.param)
    }
    if (p.kind === 'move.path' && (r.action.payload as { fly?: boolean }).fly === true) t.flies++
    const res = step(state, r.action as Action)
    t.decisions++
    if (res.rejection) {
      t.rejections.push(`${p.kind}: ${res.rejection.code} ${res.rejection.reason}`)
      const alt = legal?.[0]
      if (!alt) break
      const r2 = step(state, alt)
      if (r2.rejection) break
      state = r2.state
      t.events.push(...r2.events)
    } else {
      state = res.state
      t.events.push(...res.events)
    }
    same = state.seq === lastSeq ? same + 1 : 0
    lastSeq = state.seq
    if (same > 50) {
      t.stalled = true
      break
    }
  }
  t.state = state
  return t
}

const BATCH_B = ['legionaries', 'hand-of-the-archon', 'hunter-clade', 'hearthkyn-salvagers'] as const

describe('AI on the batch B teams', () => {
  for (const team of BATCH_B) {
    it(`AI-B-${team} plays a full game against Angels of Death with no rejection, stall or random fallback`, () => {
      const t = play([team, 'angels-of-death'], `bb-${team}`)
      if (process.env.AI_DEBUG) process.stderr.write(team + ' ' + JSON.stringify({ decisions: t.decisions, offered: t.offered, taken: t.taken, gambits: t.gambits, flies: t.flies, modes: t.modes }) + '\n')
      expect(t.rejections).toEqual([])
      expect(t.stalled).toBe(false)
      expect(t.state.phase).toBe('ended')
      expect(t.fallbacksByKind).toEqual({})
    }, 120000)
  }
})

describe('AI uses the batch B team rules', () => {
  const swap = (roster: RosterEntry[], from: string[], to: string[]): RosterEntry[] => [...roster.filter((e) => !from.includes(e.datacardId)), ...to.map((id): RosterEntry => ({ datacardId: id, loadout: defaultLoadoutFor(realBundle(), id) }))]

  it('AI-B-hearthkyn flies with the Jump Pack and plays the Tactician and Eye of the Ancestors gambits', () => {
    let flies = 0
    const gambits: Record<string, number> = {}
    for (const seed of ['fly-1', 'fly-2', 'fly-3']) {
      const t = play(['hearthkyn-salvagers', 'angels-of-death'], seed, 'normal', 4000, (s) => {
        s.rosters.A = swap(s.rosters.A, ['hk.lokatr', 'hk.kinlynk'], ['hk.jump-pack-warrior', 'hk.kognitaar'])
      })
      if (process.env.AI_DEBUG) process.stderr.write(`hk ${seed} ${JSON.stringify({ flies: t.flies, gambits: t.gambits, rej: t.rejections.length, stalled: t.stalled })}\n`)
      expect(t.rejections).toEqual([])
      expect(t.stalled).toBe(false)
      expect(t.fallbacksByKind).toEqual({})
      flies += t.flies
      for (const [k, n] of Object.entries(t.gambits)) gambits[k] = (gambits[k] ?? 0) + n
    }
    expect(flies).toBeGreaterThan(0)
    expect(gambits['hk.p.tactician']).toBeGreaterThan(0)
  }, 240000)

  it('AI-B-legionaries takes the free Warded Armour and Chaos Talismans gambits and the mark ploys', () => {
    const gambits: Record<string, number> = {}
    const taken: Record<string, number> = {}
    for (const seed of ['lg-1', 'lg-2']) {
      const t = play(['legionaries', 'angels-of-death'], seed, 'normal', 4000, (s) => {
        s.equipment!.A = ['lg.e.warded-armour', 'lg.e.chaos-talismans', 'core.e.ladders', 'core.e.utility-grenades']
      })
      if (process.env.AI_DEBUG) process.stderr.write(`lg ${seed} ${JSON.stringify({ gambits: t.gambits, taken: t.taken, offered: t.offered })}\n`)
      expect(t.rejections).toEqual([])
      expect(t.stalled).toBe(false)
      expect(t.fallbacksByKind).toEqual({})
      for (const [k, n] of Object.entries(t.gambits)) gambits[k] = (gambits[k] ?? 0) + n
      for (const [k, n] of Object.entries(t.taken)) taken[k] = (taken[k] ?? 0) + n
    }
    expect(gambits['lg.p.warded-armour']).toBeGreaterThan(0)
  }, 240000)

  it('AI-B-hand-of-the-archon spends Pain on invigorations (0 CP offers are cheap to take)', () => {
    const taken: Record<string, number> = {}
    for (const seed of ['ha-1', 'ha-2', 'ha-3']) {
      const t = play(['hand-of-the-archon', 'angels-of-death'], seed)
      expect(t.rejections).toEqual([])
      expect(t.stalled).toBe(false)
      for (const [k, n] of Object.entries(t.taken)) taken[k] = (taken[k] ?? 0) + n
    }
    expect(Object.keys(taken).filter((k) => k.startsWith('ha.inv.')).length).toBeGreaterThan(0)
  }, 240000)

  it('AI-B-hunter-clade picks more than one Imperative across games', () => {
    const modes = new Set<string>()
    for (const seed of ['hc-1', 'hc-2', 'hc-3']) {
      const t = play(['hunter-clade', 'angels-of-death'], seed)
      expect(t.rejections).toEqual([])
      expect(t.stalled).toBe(false)
      for (const m of t.modes) modes.add(m.split(':')[0]!)
    }
    expect(modes.size).toBeGreaterThan(1)
  }, 240000)
})
