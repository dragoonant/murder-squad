// Skinned body (docs/spec/30-figures.md section 7): a rigged copy of a body GLB (manifest `rigged`, made by UniRig
// plus tools/models/rig-clips.py) played by an AnimationMixer that reads the same cue store as the rigid cues
// (cueCore.ts). Clips by name: `idle` and `walk` loop as the base layer (cross-faded by the walking flag), `shoot`,
// `melee` and `hit` are one-shots whose length is stretched to CUE_MS, `death` plays once and clamps, scaled to the
// fall part of the style's DEATH_MS. Attachments ride the bone nearest each manifest socket in the rest pose, so a
// weapon follows the hand; the group handed to each attachment is the display frame moved to its socket.
import { useMemo, useRef, type ReactNode } from 'react'
import { createPortal, useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Bone, Group, LoopOnce, LoopRepeat, Matrix4, SkeletonHelper, Vector3, type AnimationAction, type AnimationClip, type Object3D } from 'three'
import { animPosition } from '../presentation/animStore'
import { CUE_MS, cueState, deathAge, deathMs, isWalking, type CueKind } from './cueCore'
import type { SocketName, V3 } from './manifest'

export const CLIP_NAMES = ['idle', 'walk', 'shoot', 'melee', 'hit', 'death'] as const
export type ClipName = (typeof CLIP_NAMES)[number]

/** Fraction of DEATH_MS the rigid topple spends falling (the rest sinks and fades); the death clip covers that part. */
const DEATH_FALL = 0.6
const BASE_FADE_S = 0.15
/** One-shots ramp in and out over this fraction of their length. */
const ONESHOT_RAMP = 0.2

export interface SocketBinding {
  bone: Bone
  /** local matrix placing a child of `bone` at the socket, axes aligned with the display frame (rest pose) */
  local: Matrix4
}

/** Every bone under `root` (depth first). */
export function bonesOf(root: Object3D): Bone[] {
  const out: Bone[] = []
  root.traverse((o) => {
    if ((o as Bone).isBone) out.push(o as Bone)
  })
  return out
}

/**
 * Bind sockets to bones. `frame` is how `root` sits in the display frame (identity, or the PI turn of a -Z body),
 * so a socket given in the display frame lands on the right bone and the bound group keeps display-frame axes.
 * Must run on the rest pose (before the mixer first updates).
 */
export function bindSockets(root: Object3D, sockets: Partial<Record<SocketName, V3>>, frame = new Matrix4()): Partial<Record<SocketName, SocketBinding>> {
  root.updateMatrixWorld(true)
  const bones = bonesOf(root)
  const out: Partial<Record<SocketName, SocketBinding>> = {}
  if (!bones.length) return out
  const invFrame = frame.clone().invert()
  const pos = new Vector3()
  const socketInRoot = new Vector3()
  for (const [name, p] of Object.entries(sockets) as [SocketName, V3][]) {
    socketInRoot.set(p[0], p[1], p[2]).applyMatrix4(invFrame)
    let best: Bone | null = null
    let bestD = Infinity
    for (const b of bones) {
      b.getWorldPosition(pos)
      const d = pos.distanceToSquared(socketInRoot)
      if (d < bestD) {
        bestD = d
        best = b
      }
    }
    const local = best!.matrixWorld.clone().invert().multiply(invFrame).multiply(new Matrix4().makeTranslation(p[0], p[1], p[2]))
    out[name] = { bone: best!, local }
  }
  return out
}

interface Rig {
  mixer: AnimationMixer
  actions: Partial<Record<ClipName, AnimationAction>>
  bindings: Partial<Record<SocketName, SocketBinding>>
  groups: Partial<Record<SocketName, Group>>
}

function buildRig(obj: Object3D, clips: AnimationClip[], sockets: Partial<Record<SocketName, V3>>, frame: Matrix4): Rig {
  const bindings = bindSockets(obj, sockets, frame)
  const groups: Partial<Record<SocketName, Group>> = {}
  for (const [name, b] of Object.entries(bindings) as [SocketName, SocketBinding][]) {
    const g = new Group()
    g.name = `socket:${name}`
    g.matrixAutoUpdate = false
    g.matrix.copy(b.local)
    b.bone.add(g)
    groups[name] = g
  }
  const mixer = new AnimationMixer(obj)
  const actions: Partial<Record<ClipName, AnimationAction>> = {}
  for (const name of CLIP_NAMES) {
    const clip = clips.find((c) => c.name === name)
    if (!clip) continue
    const a = mixer.clipAction(clip)
    if (name === 'idle' || name === 'walk') {
      a.setLoop(LoopRepeat, Infinity)
      a.play()
      a.setEffectiveWeight(name === 'idle' ? 1 : 0)
    } else {
      a.setLoop(LoopOnce, 1)
      a.clampWhenFinished = name === 'death'
      a.setEffectiveWeight(0)
    }
    actions[name] = a
  }
  return { mixer, actions, bindings, groups }
}

export interface SkinnedMount {
  key: string
  socket: SocketName
  /** authored at socket [0, 0, 0] in the display frame */
  node: ReactNode
}

export interface SkinnedBodyProps {
  /** cue-store id (operative id in battle, a gallery id otherwise) */
  id: string
  obj: Object3D
  clips: AnimationClip[]
  sockets: Partial<Record<SocketName, V3>>
  /** the body faces -Z and is displayed turned by PI */
  flip?: boolean
  mounts: SkinnedMount[]
  /** fixed walking override (gallery); battle figures walk while their move tween runs or `setWalking` is on */
  walking?: boolean
  /** QC: draw the skeleton (gallery "bones" toggle) */
  bones?: boolean
}

const ramp = (t: number) => Math.min(1, t / ONESHOT_RAMP, (1 - t) / ONESHOT_RAMP)
const smooth = (t: number) => t * t * (3 - 2 * t)

export function SkinnedBody({ id, obj, clips, sockets, flip, mounts, walking, bones }: SkinnedBodyProps) {
  const frame = useMemo(() => new Matrix4().makeRotationY(flip ? Math.PI : 0), [flip])
  const rig = useMemo(() => buildRig(obj, clips, sockets, frame), [obj, clips, sockets, frame])
  const scene = useThree((s) => s.scene)
  // the helper draws in world space, so it lives at the scene root (a transformed parent would double the transform)
  const helper = useMemo(() => (bones ? new SkeletonHelper(obj) : null), [obj, bones])
  const st = useRef({ last: -1, walk: 0, oneshot: null as { kind: CueKind; t0: number } | null, dying: false })
  useFrame((state) => {
    const now = performance.now()
    const s = st.current
    const dt = s.last < 0 ? 0 : Math.min(0.1, (now - s.last) / 1000)
    s.last = now
    const { actions, mixer } = rig
    const isWalkingNow = walking ?? (!!animPosition(id) || isWalking(id))
    const age = deathAge(id, now)
    const dying = age >= 0 && !!actions.death
    let busy = isWalkingNow || dying

    // death: once, clamped, started at its true age when (re)mounted mid-fall (the corpse layer remounts the body)
    if (dying && !s.dying) {
      s.dying = true
      const a = actions.death!
      const dur = a.getClip().duration
      a.timeScale = dur / ((deathMs(id) / 1000) * DEATH_FALL)
      a.reset().play()
      a.time = Math.min(dur, (age / 1000) * a.timeScale)
      a.setEffectiveWeight(1)
    }
    // base layer: idle <-> walk cross-fade, silenced under a death
    const walkTarget = isWalkingNow ? 1 : 0
    if (s.walk !== walkTarget) {
      s.walk = dt === 0 ? walkTarget : s.walk + Math.sign(walkTarget - s.walk) * Math.min(Math.abs(walkTarget - s.walk), dt / BASE_FADE_S)
      busy = true
    }
    const baseGain = dying ? Math.max(0, 1 - smooth(Math.min(1, age / 100))) : 1
    // one-shots: full weight with a short ramp, the base layer gives way underneath
    const cue = cueState(id, now)
    let oneGain = 0
    if (cue && !dying) {
      const a = actions[cue.kind]
      if (a) {
        if (!s.oneshot || s.oneshot.kind !== cue.kind || now - s.oneshot.t0 > CUE_MS[cue.kind]) {
          s.oneshot = { kind: cue.kind, t0: now - cue.t * CUE_MS[cue.kind] }
          const dur = a.getClip().duration
          a.timeScale = dur / (CUE_MS[cue.kind] / 1000)
          a.reset().play()
          a.time = Math.min(dur, cue.t * dur)
        }
        oneGain = ramp(cue.t)
        a.setEffectiveWeight(oneGain)
        busy = true
      }
    } else if (s.oneshot) {
      actions[s.oneshot.kind]?.setEffectiveWeight(0)
      s.oneshot = null
    }
    actions.idle?.setEffectiveWeight((1 - s.walk) * baseGain * (1 - oneGain))
    actions.walk?.setEffectiveWeight(s.walk * baseGain * (1 - oneGain))
    mixer.update(dt)
    if (busy) state.invalidate()
  })
  return (
    <>
      <primitive object={obj} />
      {mounts.map((m) => {
        const g = rig.groups[m.socket]
        return g ? <group key={m.key}>{createPortal(m.node, g)}</group> : null
      })}
      {helper && createPortal(<primitive object={helper} />, scene)}
    </>
  )
}
