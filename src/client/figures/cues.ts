// Rigid whole-body cues (docs/spec/30-figures.md section 4): idle breathe, walk bob, shoot recoil, melee lunge,
// hit flinch, death topple. Pure maths (`cuePose`) plus a tiny trigger store fed from the engine event log once
// the presentation cursor passes an event's seq, so a cue never plays before its beat.
import { useGame } from '../store/game'
import { usePresentedStore } from '../presentation/presentedStore'
import { requestRepaint } from '../presentation/animStore'
import type { GameEvent } from '@/engine'

export type CueKind = 'shoot' | 'melee' | 'hit' | 'death'
export const CUE_MS: Record<CueKind, number> = { shoot: 240, melee: 380, hit: 300, death: 900 }

interface Active {
  kind: CueKind
  t0: number
}
const active = new Map<string, Active>()
const dead = new Map<string, number>()

export function triggerCue(id: string, kind: CueKind, now = performance.now()): void {
  if (kind === 'death') dead.set(id, now)
  else if (!dead.has(id)) active.set(id, { kind, t0: now })
  requestRepaint()
}
export function clearCues(): void {
  active.clear()
  dead.clear()
}
export const isDying = (id: string): boolean => dead.has(id)
export const deathAge = (id: string, now = performance.now()): number => (dead.has(id) ? now - dead.get(id)! : -1)
export const cueActive = (id: string, now = performance.now()): boolean => {
  const a = active.get(id)
  return dead.has(id) || (!!a && now - a.t0 < CUE_MS[a.kind])
}

export interface CuePose {
  /** local offset (inches): +z forward */
  dy: number
  dz: number
  /** pitch about X (positive tips the head forward), roll about Z */
  rx: number
  rz: number
  /** uniform y squash used for breathing */
  sy: number
  /** 0 = gone .. 1 = fully visible (death sink-and-shrink stands in for a fade) */
  vis: number
}

const smooth = (t: number) => t * t * (3 - 2 * t)

/** Pose for one figure. `walking` adds the bob, `phase` de-syncs idle breathing between figures. */
export function cuePose(id: string, now: number, walking: boolean, phase = 0): CuePose {
  const p: CuePose = { dy: 0, dz: 0, rx: 0, rz: 0, sy: 1 + 0.012 * Math.sin(now / 520 + phase), vis: 1 }
  if (walking) {
    const s = Math.sin(now / 90)
    p.dy += Math.abs(s) * 0.045
    p.rz += s * 0.05
    p.rx += 0.04
  }
  const d = dead.get(id)
  if (d !== undefined) {
    const t = (now - d) / CUE_MS.death
    p.rx = -smooth(Math.min(1, t / 0.6)) * (Math.PI / 2)
    p.dy -= Math.max(0, (t - 0.6) / 0.4) * 0.5
    p.vis = 1 - smooth(Math.min(1, Math.max(0, (t - 0.6) / 0.4)))
    return p
  }
  const a = active.get(id)
  if (a) {
    const t = (now - a.t0) / CUE_MS[a.kind]
    if (t >= 1) active.delete(id)
    else {
      const bump = Math.sin(Math.PI * t) // 0 -> 1 -> 0
      if (a.kind === 'shoot') {
        p.dz -= 0.07 * bump
        p.rx -= 0.14 * bump
      } else if (a.kind === 'melee') {
        p.dz += 0.28 * bump
        p.rx += 0.3 * bump
      } else {
        p.dz -= 0.09 * bump
        p.rz += 0.18 * Math.sin(Math.PI * 3 * t) * (1 - t)
        p.rx -= 0.12 * bump
      }
    }
  }
  return p
}

/** Which cue (if any) an engine event triggers on which operative. */
export function cueOf(ev: GameEvent): { id: string; kind: CueKind } | null {
  switch (ev.type) {
    case 'ShootStarted':
      return { id: ev.operativeId, kind: 'shoot' }
    case 'FightStarted':
    case 'Struck':
      return { id: ev.operativeId, kind: 'melee' }
    case 'DamageInflicted':
      return { id: ev.operativeId, kind: 'hit' }
    case 'OperativeIncapacitated':
      return { id: ev.operativeId, kind: 'death' }
    default:
      return null
  }
}

let installed = false
let lastSeq = -1
/** Idempotent: starts turning presented events into cues. Safe to call from every figure. */
export function installCueFeed(): void {
  if (installed) return
  installed = true
  lastSeq = usePresentedStore.getState().presentedSeq
  usePresentedStore.subscribe((s) => {
    if (s.presentedSeq < lastSeq) {
      lastSeq = s.presentedSeq
      return
    }
    if (s.presentedSeq === lastSeq) return
    const from = lastSeq
    lastSeq = s.presentedSeq
    const now = performance.now()
    for (const ev of useGame.getState().events) {
      if (ev.seq <= from || ev.seq > s.presentedSeq) continue
      const c = cueOf(ev)
      if (c) triggerCue(c.id, c.kind, now)
    }
  })
}
