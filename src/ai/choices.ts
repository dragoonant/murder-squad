// Policies for the `ability.choice` decisions team rules raise (docs/spec/40-ai): where to emerge from HIDING, where a
// reanimated or time-shifted operative lands, where a Cryptek's marker goes, which friend a Recon Sweep or Divert and
// Disappear moves, whether a falling Neophyte's last gasp is worth it. Heuristics only; the engine owns legality
// (the answer is always one of the offered options). Unknown hooks take the first useful option, never a pass unless
// that is the only way out.
import type { Action, DecisionOption } from '@/engine'
import { objectiveTargets } from './eval'
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
