import { describe, expect, it } from 'vitest'
import { classifyDie, dieOdds, poolDistribution, classifyPool } from '@/engine/dice'

describe('dice classification and odds', () => {
  it('SHOOT-004 with Hit 3+ a 6 is a crit, 3 to 5 are normal, 2 and 1 fail', () => {
    expect([1, 2, 3, 4, 5, 6].map((d) => classifyDie(d, 3))).toEqual(['fail', 'fail', 'normal', 'normal', 'normal', 'crit'])
    // 6 always succeeds and 1 always fails whatever the target
    expect(classifyDie(6, 6)).toBe('crit')
    expect(classifyDie(1, 2)).toBe('fail')
  })

  it('SHOOT-005 the defender collects 3 dice; results at or above Save succeed, 6 is a crit, 1 fails', () => {
    const pool = classifyPool([6, 5, 1], 5)
    expect(pool.dice).toHaveLength(3)
    expect(pool.crits).toBe(1)
    expect(pool.normals).toBe(1)
    const odds = dieOdds(5)
    expect(odds.crit + odds.normal + odds.fail).toBeCloseTo(1, 12)
    expect(odds.normal).toBeCloseTo(1 / 6, 12)
    const dist = poolDistribution(3, odds)
    expect(dist.reduce((a, o) => a + o.p, 0)).toBeCloseTo(1, 12)
  })

  it('WPN-013 Lethal 5+ turns a 5 into a crit when the die already succeeds, never a failed die', () => {
    expect(classifyDie(5, 3, 5)).toBe('crit')
    expect(classifyDie(4, 3, 5)).toBe('normal')
    expect(classifyDie(5, 6, 5)).toBe('fail') // Hit 6+: the 5 failed, Lethal cannot rescue it
    expect(dieOdds(3, 5).crit).toBeCloseTo(2 / 6, 12)
  })
})
