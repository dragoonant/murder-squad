// Policies for the `ability.choice` decisions team rules raise (docs/spec/40-ai): where to emerge from HIDING, where a
// reanimated or time-shifted operative lands, where a Cryptek's marker goes, which friend a Recon Sweep or Divert and
// Disappear moves, whether a falling Neophyte's last gasp is worth it. Heuristics only; the engine owns legality
// (the answer is always one of the offered options). Unknown hooks take the first useful option, never a pass unless
// that is the only way out.
import type { Action, DecisionOption, GameState, Operative } from '@/engine'
import { expectedDamage } from '@/engine/query'
import { bodyOf } from '@/engine/los'
import { distanceBetween } from '@/engine/measure'
import { killEstimate, objectiveTargets, openMean, shotScore } from './eval'
import { fightEstimate } from './fight'
import { passAction } from './random'
import type { AiCtx } from './tiers'

interface Spot {
  x: number
  z: number
  order?: string
}

/** A board spot an option offers: its data, else the numbers in its id ("engage@3,-4", "1,0,2", "4.5,-2"). */
function spotOf(o: DecisionOption): Spot | null {
  const d = o.data ?? {}
  if (typeof d.x === 'number' && typeof d.z === 'number') return { x: d.x, z: d.z, ...(typeof d.order === 'string' ? { order: d.order } : {}) }
  const m = /^(?:(engage|conceal)@)?(-?[\d.]+),(?:(-?[\d.]+),)?(-?[\d.]+)$/.exec(o.id)
  if (!m) return null
  return { x: Number(m[2]), z: Number(m[4]), ...(m[1] ? { order: m[1] } : {}) }
}

function best(opts: DecisionOption[], score: (o: DecisionOption) => number): DecisionOption | null {
  let top: DecisionOption | null = null
  let ts = -Infinity
  for (const o of opts) {
    const s = score(o)
    if (s > ts) {
      ts = s
      top = o
    }
  }
  return top
}

const hasRangedWeapon = (v: GameState, o: Operative): boolean => o.weapons.some((w) => v.data.weapons[w]?.type === 'ranged')

/** The option a reaction offer carries (`shoot`, `fight`, `charge`...), read from the pending decision's offers by option id. */
function offerOption(ctx: AiCtx, o: DecisionOption): string {
  const i = Number(/^react:(\d+)$/.exec(o.id)?.[1] ?? -1)
  const offers = Array.isArray(ctx.pending.context.offers) ? (ctx.pending.context.offers as { option?: string }[]) : []
  return String(offers[i]?.option ?? '')
}

/** Value of a reaction the bot's own seat may take (One Step Ahead, Erudite Hunter, a Hound's Bad-tempered Charge...). */
function reactionValue(ctx: AiCtx, o: DecisionOption): number {
  const view = ctx.view
  const d = o.data ?? {}
  const hook = String(d.hook ?? '')
  const me = view.operatives[String(d.operativeId ?? '')]
  const actor = view.operatives[String(d.actorId ?? d.targetId ?? ctx.pending.context.actorId ?? '')]
  if (!me || !actor || actor.status !== 'active') return 1
  const melee = (): number => {
    const m = Math.max(0, ...me.weapons.filter((w) => view.data.weapons[w]?.type === 'melee').map((w) => openMean(view, me, w, actor))) * 0.8
    return shotScore(ctx, view, actor, m, killEstimate(m, actor.wounds)) - (me.wounds * 2 <= me.maxWounds ? 1 : 0)
  }
  switch (hook) {
    case 'oneStepAhead': {
      // a D6 must beat the enemy's APL; the use is spent either way and the Felarch then has 1 less APL
      const p = (6 - Math.max(1, Math.min(5, actor.apl))) / 6
      let gain = 0
      if (offerOption(ctx, o) === 'shoot') {
        for (const w of me.weapons) {
          if (view.data.weapons[w]?.type !== 'ranged') continue
          try {
            const ed = expectedDamage(view, me.id, w, actor.id)
            gain = Math.max(gain, shotScore(ctx, view, actor, ed.mean, ed.killProbability))
          } catch {
            // not a usable weapon from here
          }
        }
      } else {
        const f = fightEstimate(ctx, view, me, actor)
        gain = f ? Math.max(0, f.value) : 0
      }
      // the single use is held for a clear chance early, and spent more freely in the last turning points
      return p * gain - 0.5 + (view.turningPoint >= 3 ? 0.4 : 0)
    }
    case 'eruditeHunter':
      // a free Charge at the marked enemy (maybe after switching to Engage), or a Reposition towards it (worth little)
      return offerOption(ctx, o) === 'reposition' ? 0.2 : melee() - 0.2
    case 'fkBadTempered':
      // the Hound is cheap and fast: a free Charge is worth the melee it brings
      return melee() + 0.3
    default:
      return 1
  }
}

/** Pick a friend to take a free Dash (Righteous Advance, Relocate, Plunderers), or stop when none gains from it. */
function freeDash(ctx: AiCtx, opts: DecisionOption[], toObjective: (s: Spot) => number, toEnemy: (s: Spot) => number): DecisionOption | null {
  const done = opts.find((o) => o.id === 'done') ?? null
  let top: DecisionOption | null = null
  let ts = 0.4
  for (const o of opts) {
    const op = ctx.view.operatives[o.id]
    if (o.id === 'done' || !op || op.status !== 'active') continue
    const here = { x: op.pos.x, z: op.pos.z }
    const s = 0.12 * Math.min(toObjective(here), 15) + 0.06 * Math.max(0, toEnemy(here) - 9) + (hasRangedWeapon(ctx.view, op) ? 0.05 : 0) + ctx.rand() * 0.01
    if (s > ts) {
      ts = s
      top = o
    }
  }
  return top ?? done
}

export function abilityChoice(ctx: AiCtx): Action | null {
  const { pending, view } = ctx
  const opts = pending.options ?? []
  if (opts.length === 0) return pending.canPass ? passAction(pending) : null
  const hook = String(pending.context.hook ?? '')
  const step = String(pending.context.step ?? '')
  const objs = objectiveTargets(ctx, view)
  const enemies = Object.values(view.operatives).filter((o) => o.status === 'active' && o.seat !== ctx.seat)
  const toObjective = (s: Spot): number => (objs.length ? Math.min(...objs.map((t) => Math.hypot(t.x - s.x, t.z - s.z))) : 0)
  const toEnemy = (s: Spot): number => (enemies.length ? Math.min(...enemies.map((e) => Math.hypot(e.pos.x - s.x, e.pos.z - s.z))) : 0)
  const byId = (id: string): DecisionOption | null => opts.find((o) => o.id === id) ?? null
  const answer = (o: DecisionOption | null): Action | null => o?.action ?? null

  // landing spots: close to an objective, and engaged (so the operative can act at once)
  const landing = (o: DecisionOption): number => {
    const s = spotOf(o)
    if (!s) return -Infinity
    return -0.15 * toObjective(s) - 0.04 * toEnemy(s) + (s.order === 'engage' ? 0.5 : 0) + ctx.rand() * 0.01
  }

  switch (hook) {
    case 'reaction': {
      // a reaction offered to this seat: take the best one that is worth it, else decline
      let top: DecisionOption | null = null
      let ts = 0.3
      for (const o of opts) {
        const v = reactionValue(ctx, o)
        if (v > ts) {
          ts = v
          top = o
        }
      }
      return top ? answer(top) : pending.canPass ? passAction(pending) : answer(opts[0]!)
    }
    case 'nvRighteousAdvance':
    case 'ksRelocate':
    case 'cvPlunderers':
      return answer(freeDash(ctx, opts, toObjective, toEnemy))
    case 'nvAutoBroadcaster': {
      // enemies within 3 inches cannot re-roll: put it where the fight will be, among friends
      const friends = Object.values(view.operatives).filter((o) => o.status === 'active' && o.seat === ctx.seat)
      const near = (s: Spot, list: Operative[], r: number): number => list.filter((o) => Math.hypot(o.pos.x - s.x, o.pos.z - s.z) <= r).length
      return answer(
        best(opts, (o) => {
          const s = spotOf(o)
          return s ? near(s, enemies, 3) + 0.4 * near(s, friends, 3) - 0.1 * toEnemy(s) - 0.05 * toObjective(s) + ctx.rand() * 0.01 : -Infinity
        }),
      )
    }
    case 'ksPlaceMine': {
      // 2D6+3 for the first other operative in reach, friend or foe: between us and them, never beside a friend
      const friends = Object.values(view.operatives).filter((o) => o.status === 'active' && o.seat === ctx.seat && o.id !== pending.context.operativeId)
      return answer(
        best(opts, (o) => {
          const s = spotOf(o)
          if (!s) return -Infinity
          if (friends.some((f) => Math.hypot(f.pos.x - s.x, f.pos.z - s.z) < f.baseRadius + 1.9)) return -1000
          return -Math.abs(toEnemy(s) - 4) - 0.1 * toObjective(s) + ctx.rand() * 0.01
        }),
      )
    }
    case 'ksTacticalCommand': {
      if (pending.context.mode === 'sweep') {
        // Clearance Sweep: friends shooting enemies, both within 5 inches of the marker
        const friends = Object.values(view.operatives).filter((o) => o.status === 'active' && o.seat === ctx.seat)
        return answer(
          best(opts, (o) => {
            const s = spotOf(o)
            if (!s) return -Infinity
            const f = friends.filter((x) => Math.hypot(x.pos.x - s.x, x.pos.z - s.z) <= 5).length
            const e = enemies.filter((x) => Math.hypot(x.pos.x - s.x, x.pos.z - s.z) <= 5).length
            return Math.min(f, e) * 2 + 0.2 * f + 0.1 * e + ctx.rand() * 0.01
          }),
        )
      }
      // a Skill at Arms for one operative: Severe for a shooter, +1 Atk and a strike for a fighter, a damage cut under fire
      const t = view.operatives[String(pending.context.targetId ?? '')]
      const want = t ? (hasRangedWeapon(view, t) ? ['light-em-up', 'ice-in-your-veins', 'for-cadia'] : ['for-cadia', 'ice-in-your-veins', 'strike-fast']) : []
      return answer(want.map(byId).find((o) => o) ?? opts.find((o) => o.id !== 'none') ?? opts[0]!)
    }
    case 'fkMarkedForTheHunt':
      // the Pech'ra marker gives Seek Light to shooters near it: close to the enemy
      return answer(
        best(opts, (o) => {
          const s = spotOf(o)
          return s ? -toEnemy(s) - 0.15 * toObjective(s) + ctx.rand() * 0.01 : -Infinity
        }),
      )
    case 'fkReadyStep': {
      // change an order before the Strategy phase goes on: only an exposed operative with several enemies in sight hides
      const spotted = (o: Operative): number => enemies.filter((e) => distanceBetween(bodyOf(o), bodyOf(e)) <= 18).length
      let top: DecisionOption | null = null
      let ts = 1.5
      for (const o of opts) {
        const op = view.operatives[o.id]
        if (!op || o.id === 'done') continue
        const s = op.order === 'engage' ? spotted(op) - (op.wounds * 2 <= op.maxWounds ? 0 : 1) : 0
        if (s > ts) {
          ts = s
          top = o
        }
      }
      return answer(top ?? byId('done') ?? opts[0]!)
    }
    case 'emerge':
    case 'hieReanimate':
    case 'hieTimesplinter':
      if (step === 'order') return answer(byId('engage') ?? opts[0]!)
      return answer(best(opts, landing))
    case 'hieMarker': {
      // Nanomine / Despair markers work on enemies who come close: put them between us and the nearest enemy
      const score = (o: DecisionOption): number => {
        const s = spotOf(o)
        return s ? -toEnemy(s) - 0.3 * toObjective(s) : -Infinity
      }
      return answer(best(opts, score))
    }
    case 'planGenerations': {
      // Overthrow the Oppressors: the 0 CP mission action first; the 1 CP ploy comes from the incapacitation ploy window
      const order = ['overthrow-plan', 'overthrow-shoot', 'none']
      return answer(order.map(byId).find((o) => o) ?? opts[0]!)
    }
    case 'reconSweep':
    case 'divertAndDisappear':
      return answer(opts.find((o) => o.id !== 'done') ?? byId('done') ?? opts[0]!)
    case 'hieSupport':
      return answer(opts[0]!)
    default: {
      const spotted = best(opts, landing)
      if (spotted && spotOf(spotted)) return answer(spotted)
      return answer(opts.find((o) => !['none', 'done', 'pass'].includes(o.id)) ?? opts[0]!)
    }
  }
}
