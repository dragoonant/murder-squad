// M9 batch B engine prep, flow capabilities (docs/spec/12-rules-test-checklist.md GEN-047 onwards): declaration
// vetoes, end-of-activation reactions, the new ploy windows, forced and value-limited re-rolls, activation blocks and
// skips, ploy surcharges, kill windows, double blocks, initiative re-rolls, FLY, forced moves, own grenades, joint
// activations and terrain queries. Throwaway providers, hooks and ploy rules are removed after each test.
import { afterEach, describe, expect, it } from 'vitest'
import { step } from '@/engine'
import { forcedReroll, rerollOptions } from '@/engine/attack-common'
import { registerCodeHook } from '@/engine/code-hooks'
import { grenadeSource } from '@/engine/core-hooks'
import { joinActivation, reactionDone, skipActivation } from '@/engine/firefight'
import { extraStrike } from '@/engine/fight'
import { registerHook, unregisterHook, type AttackHookName, type HookName } from '@/engine/hooks'
import { baseUnderVantage, interveningTraits } from '@/engine/los'
import { bodyOf } from '@/engine/measure'
import { applyForcedMove, forcedMoveSpots, planFly } from '@/engine/movement'
import { ployRules, registerPloyRule } from '@/engine/ploy-rules'
import { ScriptedRng } from '@/engine/rng'
import { registerTeamRules, unregisterTeamRules, type TeamRuleProvider } from '@/engine/team-rules'
import type { DiceSide, GameState } from '@/engine/types'
import { evs } from '../fixtures/attack'
import { defaultAnswer, expectOk } from '../fixtures/helpers'
import { activateOp, edit, hasOption, openReal, opOf, passIt, realGame, take, withCtx } from '../fixtures/real'

const cleanups: (() => void)[] = []
afterEach(() => {
  while (cleanups.length) cleanups.pop()!()
})
function provide(p: Omit<TeamRuleProvider, 'id'>): void {
  registerTeamRules({ id: 'test.provider-bf', ...p })
  cleanups.push(() => unregisterTeamRules('test.provider-bf'))
}
function hook(name: HookName | AttackHookName, fn: Parameters<typeof registerHook>[1]): void {
  registerHook(name, fn, `test-bf.${name}`)
  cleanups.push(() => unregisterHook(name, `test-bf.${name}`))
}
function rule(r: Parameters<typeof registerPloyRule>[0]): void {
  registerPloyRule(r)
  cleanups.push(() => {
    const list = ployRules()
    const i = list.indexOf(r)
    if (i >= 0) list.splice(i, 1)
  })
}
/** Open map, A to activate: A's Intercessor Warrior and Captain, B's Boy and Grot. */
function open(): { s: GameState; w: string; cap: string; boy: string; grot: string } {
  const s = openReal()
  return { s, w: opOf(s, 'A', 'aod.intercessor-warrior'), cap: opOf(s, 'A', 'aod.space-marine-captain'), boy: opOf(s, 'B', 'kom.boy'), grot: opOf(s, 'B', 'kom.grot') }
}
function withPloy(s: GameState, ploy: Record<string, unknown>): GameState {
  return edit(s, (x) => {
    x.data.ploys = { ...(x.data.ploys ?? {}), [ploy.id as string]: ploy as never }
  })
}
function endIt(s: GameState) {
  return expectOk(step(s, s.pending!.options!.find((o) => o.id === 'end')!.action))
}

describe('GEN batch B flow capabilities', () => {
  it('GEN-047 an action.declared rule can cancel an action (no AP spent) and bar it for the rest of the activation', () => {
    const { s, w } = open()
    hook('action.declared', (c) => {
      const d = c.data as { action: string; cancel: boolean; bar: boolean }
      if (c.operativeId === w && d.action === 'dash') {
        d.cancel = true
        d.bar = true
      }
      return null
    })
    const r = take(activateOp(s, w), 'dash')
    expect(evs(r.events, 'ActionCancelled').map((e) => e.action)).toEqual(['dash'])
    expect(r.state.firefight.activation!.apSpent).toBe(0)
    expect(r.state.pending).toMatchObject({ kind: 'firefight.action' })
    expect(hasOption(r.state, 'dash')).toBe(false)
    expect(hasOption(r.state, 'reposition')).toBe(true)
  })

  it('GEN-048 the other seat may react when an activation ends; the next activation is chosen afterwards', () => {
    const { s, w, boy } = open()
    let reacted = 0
    registerCodeHook({
      name: 'test-bf.endReact',
      choice(ctx) {
        reacted++
        reactionDone(ctx)
      },
    })
    provide({ reactions: (_s, seat, info) => (seat === 'B' && info.activationEnded && info.actorId === w ? [{ hook: 'test-bf.endReact', operativeId: boy, option: 'x', labelKey: 'test' }] : []) })
    const ended = endIt(activateOp(s, w))
    expect(evs(ended.events, 'OperativeExpended').map((e) => e.operativeId)).toEqual([w])
    expect(ended.state.pending).toMatchObject({ kind: 'ability.choice', seat: 'B' })
    const done = take(ended.state, 'react:0').state
    expect(reacted).toBe(1)
    expect(done.pending?.kind).toBe('firefight.activate')
    expect(passIt(ended.state).state.pending?.kind).toBe('firefight.activate')
  })

  it('GEN-049 the opponent gets a window when an action is declared; the declaring seat is not asked', () => {
    const { s, w } = open()
    const ploy = { id: 'test.p.scrap', name: 'SCRAP', team: 'kommandos', type: 'firefight', cost: 0, window: 'firefight.opponentActionDeclared', effect: { cp: 1 }, text: 't', source: 's' }
    const mine = { ...ploy, id: 'test.p.mine', team: 'angels-of-death' }
    const r = take(activateOp(withPloy(withPloy(s, ploy), mine), w), 'guard')
    expect(r.state.pending).toMatchObject({ kind: 'ploy.firefight', seat: 'B', window: 'firefight.opponentActionDeclared' })
    expect(r.state.pending!.options!.map((o) => o.id)).toEqual(['test.p.scrap'])
    const after = passIt(r.state)
    expect(evs(after.events, 'GuardSet').map((e) => e.operativeId)).toEqual([w])
  })

  it('GEN-050 a rule can force re-rolls of a fresh roll; a value-limited grant re-rolls only those values', () => {
    const { s } = open()
    const dice = [1, 6, 3, 1].map((v) => ({ value: v, kind: v === 6 ? 'crit' : v >= 3 ? 'normal' : 'fail', rerolled: false, used: false, source: 'roll' }))
    const side = { seat: 'A', operativeId: 'A1', weaponId: null, dice, need: 3, lethal: null, grants: [{ id: 'omen', source: 'omen', mode: 'any', used: false, values: [1] }], phase: 'grants', commandUsed: true } as unknown as DiceSide
    const opts = rerollOptions(s, side).grants
    expect(opts.length).toBeGreaterThan(0)
    for (const o of opts) for (const i of (o.payload as { dice: number[] }).dice) expect(side.dice[i]!.value).toBe(1)
    let rolled: number[] = []
    const r = withCtx(s, (ctx) => (rolled = forcedReroll(ctx, side, [1], 'omen', 'attack', 'test')), new ScriptedRng([2]))
    expect(rolled).toEqual([1])
    expect(side.dice[1]).toMatchObject({ value: 2, rerolled: true, kind: 'fail' })
    expect(evs(r.events, 'DiceRerolled')[0]).toMatchObject({ source: 'omen', indexes: [1] })
    // a diceRolled hook sees fresh rolls in real attacks
    let seen = 0
    hook('diceRolled', () => {
      seen++
      return null
    })
    const { s: s2, w, boy } = open()
    let st = edit(s2, (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 6, y: 0, z: 0 }
    })
    st = take(activateOp(st, w), 'shoot').state
    for (let i = 0; i < 30 && st.pending && st.pending.kind !== 'firefight.action'; i++) st = expectOk(step(st, defaultAnswer(st), new ScriptedRng(Array(40).fill(4)))).state
    expect(seen).toBeGreaterThanOrEqual(2)
  })

  it('GEN-051 a blocked operative stays out of the activate options while another is ready, never all of them', () => {
    provide({ canActivate: (state, op) => op.id !== opOf(state, 'A', 'aod.intercessor-warrior') })
    const { s, w } = open()
    const ids = s.pending!.options!.map((o) => o.id)
    expect(ids).not.toContain(w)
    expect(ids.length).toBeGreaterThan(0)
    unregisterTeamRules('test.provider-bf')
    provide({ canActivate: (_s, op) => op.seat !== 'A' })
    const again = openReal()
    expect(again.pending!.options!.length).toBeGreaterThan(0)
  })

  it('GEN-052 a ploy before the activation choice can make the seat pass its activation', () => {
    registerCodeHook({ name: 'test-bf.skip', ploy: { offers: () => [{}], apply: (ctx, seat) => skipActivation(ctx, seat) } })
    const { s, cap } = open()
    const ploy = { id: 'test.p.skip', name: 'SKIP', team: 'kommandos', type: 'firefight', cost: 0, window: 'firefight.beforeActivation', effect: { code: 'test-bf.skip' }, text: 't', source: 's' }
    const ended = endIt(activateOp(withPloy(s, ploy), cap)).state
    expect(ended.pending).toMatchObject({ kind: 'ploy.firefight', seat: 'B', window: 'firefight.beforeActivation' })
    const used = take(ended, 'test.p.skip').state
    expect(used.pending).toMatchObject({ kind: 'firefight.activate', seat: 'A' })
    // passing the window lets B activate as usual
    const passed = passIt(ended).state
    expect(passed.pending).toMatchObject({ kind: 'firefight.activate', seat: 'B' })
  })

  it('GEN-053 a cost surcharge raises a ploy cost; the other seat may answer a ploy in ploy.opponentUsed', () => {
    const { s, w } = open()
    const ploy = { id: 'test.p.at-end2', name: 'AT END', team: 'angels-of-death', type: 'firefight', cost: 0, window: 'firefight.activationEnded', effect: { cp: 1 }, text: 't', source: 's' }
    const answer = { id: 'test.p.devious', name: 'DEVIOUS', team: 'kommandos', type: 'firefight', cost: 0, window: 'ploy.opponentUsed', effect: { cp: 1 }, text: 't', source: 's' }
    rule({ costSurcharge: (_s, seat, p) => (seat === 'A' && p.id === ploy.id ? 1 : 0) })
    const r = endIt(activateOp(withPloy(withPloy(s, ploy), answer), w))
    const offer = r.state.pending!.options!.find((o) => o.id === ploy.id)!
    expect((offer.data as { cost: number }).cost).toBe(1)
    const used = take(r.state, ploy.id)
    expect(used.state.pending).toMatchObject({ kind: 'ploy.firefight', seat: 'B', window: 'ploy.opponentUsed' })
    const back = take(used.state, 'test.p.devious').state
    expect(back.windowStack).toBeUndefined()
    expect(['firefight.activate', 'ploy.firefight']).toContain(back.pending?.kind)
  })

  it('GEN-054 the gambit.passed hook runs for explicit and implicit passes', () => {
    const seen: boolean[] = []
    hook('gambit.passed', (c) => {
      seen.push((c.data as { explicit: boolean }).explicit)
      return null
    })
    openReal()
    expect(seen.length).toBeGreaterThanOrEqual(2)
  })

  it('GEN-055 an attack victim removed: the killer seat gets operative.killed after the removal', () => {
    const { s, w, boy } = open()
    const ploy = { id: 'test.p.surge', name: 'SURGE', team: 'angels-of-death', type: 'firefight', cost: 0, window: 'operative.killed', effect: { cp: 1 }, text: 't', source: 's' }
    let st = edit(withPloy(s, ploy), (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 6, y: 0, z: 0 }
      x.operatives[boy]!.order = 'engage'
      x.operatives[boy]!.wounds = 1
    })
    st = take(activateOp(st, w), 'shoot').state
    st = take(st, st.pending!.options![0]!.id).state
    const atk = st.data.weapons[st.attack!.weaponId!]!.atk
    const rng = new ScriptedRng(Array(atk).fill(6).concat(Array(60).fill(1)))
    st = take(st, st.pending!.options!.find((o) => (o.action.payload as { targetId?: string }).targetId === boy)!.id, rng).state
    let seen = false
    for (let i = 0; i < 40 && st.pending; i++) {
      const p = st.pending
      if (p.kind === 'ploy.firefight' && p.window === 'operative.killed') {
        seen = true
        expect(p.seat).toBe('A')
        expect(st.operatives[boy]!.status).toBe('removed')
        st = take(st, ploy.id).state
        continue
      }
      if (p.kind === 'firefight.action') break
      st = expectOk(step(st, defaultAnswer(st), rng)).state
    }
    expect(seen).toBe(true)
  })

  it('GEN-056 a block that cancels two successes is offered when a provider says so', () => {
    provide({ blockCapacity: () => 2 })
    const { s, w, boy } = open()
    let st = edit(s, (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 1.3, y: 0, z: 0 }
    })
    st = take(activateOp(st, w), 'fight').state
    const rng = new ScriptedRng(Array(80).fill(5))
    let found = false
    for (let i = 0; i < 30 && st.pending; i++) {
      if (st.pending.kind === 'fight.resolve') {
        found = st.pending.options!.some((o) => o.id.startsWith('block2:'))
        break
      }
      st = expectOk(step(st, defaultAnswer(st), rng)).state
    }
    expect(found).toBe(true)
  })

  it('GEN-057 a team rule may let a seat re-roll its initiative die once both dice are rolled', () => {
    let used = 0
    provide({ initiativeReroll: (_s, seat) => seat === 'B', onInitiativeReroll: () => void used++ })
    const s = realGame({}, 'real', [6, 1, 3, 6, 1, 6, 1, 6, 1, 6, 1, 6])
    const answers = s.log.filter((a) => a.type === 'strategy.initiative' && (a.payload as { reroll?: boolean }).reroll !== undefined)
    expect(answers.length).toBeGreaterThan(0)
    expect(answers.every((a) => a.seat === 'B')).toBe(true)
    expect(used).toBe(answers.filter((a) => (a.payload as { reroll?: boolean }).reroll === true).length)
  })

  it('GEN-058 FLY sets the operative up within its move horizontally, with Dash, Charge and counteract limits', () => {
    const { s, w, boy } = open()
    provide({ canFly: (_s, op) => op.id === w })
    const st = edit(s, (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 10, y: 0, z: 0 }
    })
    const op = st.operatives[w]!
    const ok = planFly(st, op, 'reposition', [{ x: 5.5, z: 0 }])
    expect(ok.ok && ok.segments[0]!.kind).toBe('fly')
    expect(ok.ok && ok.cost).toBeCloseTo(5.5, 3)
    expect(planFly(st, op, 'reposition', [{ x: 6.5, z: 0 }]).ok).toBe(false)
    expect(planFly(st, op, 'dash', [{ x: 3.5, z: 0 }]).ok).toBe(false)
    expect(planFly(st, op, 'reposition', [{ x: 2.5, z: 0 }], true).ok).toBe(false)
    expect(planFly(st, op, 'charge', [{ x: 5, z: 0 }]).ok).toBe(false)
    const near = edit(st, (x) => (x.operatives[boy]!.pos = { x: 6.5, y: 0, z: 0 }))
    expect(planFly(near, near.operatives[w]!, 'charge', [{ x: 5.2, z: 0 }]).ok).toBe(true)
    expect(planFly(near, near.operatives[w]!, 'charge', [{ x: 6.4, z: 0 }]).ok).toBe(false)
    expect(planFly(st, st.operatives[boy]!, 'reposition', [{ x: 8, z: 0 }]).ok).toBe(false)
  })

  it('GEN-059 a forced move pushes another operative up to its distance, ignoring its own control-range limits', () => {
    const { s, w, boy } = open()
    const st = edit(s, (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 1.4, y: 0, z: 0 }
    })
    expect(forcedMoveSpots(st, st.operatives[boy]!, 3).length).toBeGreaterThan(0)
    const r = withCtx(st, (ctx) => {
      expect(applyForcedMove(ctx, boy, [{ x: 4.4, z: 0 }], 3)).toBe(true)
      expect(applyForcedMove(ctx, boy, [{ x: 8.5, z: 0 }], 3)).toBe(false)
    })
    expect(r.state.operatives[boy]!.pos.x).toBeCloseTo(4.4, 3)
    expect(evs(r.events, 'OperativeMoved')[0]).toMatchObject({ operativeId: boy, action: 'forced' })
  })

  it('GEN-060 an operative with its own grenades gets the weapons and pays grenade actions from its own allowance', () => {
    provide({ ownGrenades: (state, op) => (op.id === opOf(state, 'A', 'aod.intercessor-warrior') ? { weapons: { 'core.w.frag-grenade': 1 }, actions: { 'core.a.smoke-grenade': 1 } } : null) })
    const { s, w, cap } = open()
    expect(s.operatives[w]!.weapons).toContain('core.w.frag-grenade')
    expect(grenadeSource(s, s.operatives[w]!, 'core.a.smoke-grenade')).toBe('own')
    expect(grenadeSource(s, s.operatives[cap]!, 'core.a.smoke-grenade')).toBeNull()
  })

  it('GEN-061 two operatives activated together keep their own AP; the player switches between them; both are expended', () => {
    const { s, w, cap } = open()
    const at = take(activateOp(s, w), 'guard').state
    let st = withCtx(at, (ctx) => {
      expect(joinActivation(ctx, cap, 'engage')).toBe(true)
      expect(joinActivation(ctx, cap, 'engage')).toBe(false)
    }).state
    while (st.pending?.kind === 'ploy.firefight') st = passIt(st).state
    // the pending choice was raised before the join: raise it again by ending nothing (dash then check)
    st = take(st, 'dash').state
    if (st.pending?.kind === 'move.path') st = passIt(st).state
    expect(hasOption(st, 'switch')).toBe(true)
    st = take(st, 'switch').state
    expect(st.firefight.activation!.operativeId).toBe(cap)
    expect(st.firefight.activation!.apSpent).toBe(0)
    const handed = take(st, 'end')
    expect(evs(handed.events, 'OperativeExpended').map((e) => e.operativeId)).toEqual([cap])
    st = handed.state
    while (st.pending?.kind === 'ploy.firefight') st = passIt(st).state
    expect(st.firefight.activation?.operativeId).toBe(w)
    const fin = endIt(st)
    expect(evs(fin.events, 'OperativeExpended').map((e) => e.operativeId)).toEqual([w])
  })

  it('GEN-062 terrain queries: intervening Light/Heavy terrain and a base under a Vantage floor', () => {
    const { s, w, boy } = open()
    const st = edit(s, (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 8, y: 0, z: 0 }
    })
    expect(interveningTraits(st, bodyOf(st.operatives[w]!), bodyOf(st.operatives[boy]!))).toMatchObject({ light: false, heavy: false, parts: [] })
    expect(baseUnderVantage(st, bodyOf(st.operatives[w]!))).toBe(false)
  })

  it('GEN-063 an out-of-sequence strike resolves one unresolved success through the normal strike path', () => {
    const { s, w, boy } = open()
    let st = edit(s, (x) => {
      x.operatives[w]!.pos = { x: 0, y: 0, z: 0 }
      x.operatives[boy]!.pos = { x: 1.3, y: 0, z: 0 }
    })
    st = take(activateOp(st, w), 'fight').state
    const rng = new ScriptedRng(Array(80).fill(5))
    for (let i = 0; i < 30 && st.pending && st.pending.kind !== 'fight.resolve'; i++) st = expectOk(step(st, defaultAnswer(st), rng)).state
    expect(st.pending?.kind).toBe('fight.resolve')
    const atk = st.attack!.seq!.atk
    const die = atk.dice.findIndex((d) => !d.used && d.kind !== 'fail')
    const r = withCtx(st, (ctx) => {
      expect(extraStrike(ctx, 'A', die)).toBe(true)
      expect(extraStrike(ctx, 'A', die)).toBe(false)
    })
    const struck = evs(r.events, 'Struck')
    expect(struck).toHaveLength(1)
    const foe = struck[0]!.targetId
    expect(r.state.operatives[foe]!.wounds).toBe(st.operatives[foe]!.wounds - struck[0]!.amount)
    // the strike went through the victim's damage rules (here a Kommandos ploy that can ignore it)
    expect(struck[0]!.operativeId).toBe(w)
  })
})
