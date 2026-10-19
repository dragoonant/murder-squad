// Orbit camera clamped above the mat: right-drag orbit, middle-drag / WASD pan, wheel zoom; touch is two fingers
// (one finger belongs to the game): pinch zoom, drag pan, twist turns the view around the board. Left-drag only moves the camera with Alt (orbit) or Shift (pan) held, so a
// plain left click is always the game's. Presets: home overview, top-down and 45-degree turns left / right, tweened. Exposes the e2e/dev
// camera API (`project`, `lookAt`, `get`) through cameraApi.
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { MathUtils, MOUSE, Vector3 } from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useUi } from '../ui/uiStore'
import { cameraApi } from './cameraApi'

const HOME_POS: [number, number, number] = [0, 25, 21]
const TOP_POS: [number, number, number] = [0, 36, 0.01]
const MARGIN = 4
const PAN_SPEED = 20
const TURN_STEP = Math.PI / 4
/** radians the two fingers must twist before the turn engages, so a pinch or a pan never wobbles the view */
const TWIST_DEADZONE = 0.12
const UP = new Vector3(0, 1, 0)
const PAN_KEYS: Record<string, [number, number]> = { w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0] }

interface Tween {
  t0: number
  fromP: Vector3
  toP: Vector3
  fromT: Vector3
  toT: Vector3
  /** set for a turn: fromP swings about the target by this many radians instead of lerping to toP */
  turn?: number
}

export function CameraRig({ halfX, halfZ }: { halfX: number; halfZ: number }) {
  const controls = useRef<OrbitControlsImpl | null>(null)
  const tween = useRef<Tween | null>(null)
  const keys = useRef(new Set<string>())
  const { camera, gl } = useThree()
  const invalidate = useThree((s) => s.invalidate)
  const preset = useUi((s) => s.cameraPreset)

  useEffect(() => {
    const c = controls.current
    if (!c) return
    c.mouseButtons.MIDDLE = MOUSE.PAN
    c.mouseButtons.RIGHT = MOUSE.ROTATE
    c.mouseButtons.LEFT = undefined
    ;(c.touches as { ONE: number; TWO: number }).ONE = -1
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0 || !controls.current) return
      controls.current.mouseButtons.LEFT = e.shiftKey ? MOUSE.PAN : e.altKey ? MOUSE.ROTATE : undefined
    }
    window.addEventListener('pointerdown', onDown, { capture: true })
    const onStart = () => {
      tween.current = null
    }
    c.addEventListener('start', onStart)

    // Two-finger twist: OrbitControls' two-finger mode is dolly + pan, so the turn is added here by spinning the
    // camera about the target's vertical axis by the change in the angle between the fingers. Twisting clockwise
    // turns the board clockwise on screen.
    const el = gl.domElement
    const touches = new Map<number, { x: number; y: number }>()
    let lastAngle: number | null = null
    let pending = 0
    let engaged = false
    const fingerAngle = () => {
      const [a, b] = [...touches.values()]
      return Math.atan2(b!.y - a!.y, b!.x - a!.x)
    }
    const resetTwist = () => {
      lastAngle = touches.size === 2 ? fingerAngle() : null
      pending = 0
      engaged = false
    }
    const onTouchDown = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY })
      resetTwist()
    }
    const onTouchMove = (e: PointerEvent) => {
      if (e.pointerType !== 'touch' || !touches.has(e.pointerId)) return
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY })
      if (touches.size !== 2 || lastAngle === null || !controls.current) return
      const angle = fingerAngle()
      let d = angle - lastAngle
      if (d > Math.PI) d -= 2 * Math.PI
      if (d < -Math.PI) d += 2 * Math.PI
      lastAngle = angle
      if (!engaged) {
        pending += d
        if (Math.abs(pending) < TWIST_DEADZONE) return
        engaged = true
        d = pending
      }
      tween.current = null
      const t = controls.current.target
      camera.position.sub(t).applyAxisAngle(UP, d).add(t)
      controls.current.update()
      invalidate()
    }
    const onTouchUp = (e: PointerEvent) => {
      if (!touches.delete(e.pointerId)) return
      resetTwist()
    }
    el.addEventListener('pointerdown', onTouchDown)
    el.addEventListener('pointermove', onTouchMove)
    el.addEventListener('pointerup', onTouchUp)
    el.addEventListener('pointercancel', onTouchUp)

    c.target.set(0, 0, 1)
    c.update()
    invalidate()
    return () => {
      window.removeEventListener('pointerdown', onDown, { capture: true })
      c.removeEventListener('start', onStart)
      el.removeEventListener('pointerdown', onTouchDown)
      el.removeEventListener('pointermove', onTouchMove)
      el.removeEventListener('pointerup', onTouchUp)
      el.removeEventListener('pointercancel', onTouchUp)
    }
  }, [invalidate, camera, gl])

  useEffect(() => {
    if (!preset) return
    const c = controls.current
    if (!c) return
    if (preset.id === 'left' || preset.id === 'right') {
      // turn about the current target, keeping height and distance; 'right' turns the board clockwise on screen
      const turn = preset.id === 'left' ? -TURN_STEP : TURN_STEP
      const toP = camera.position.clone()
      tween.current = { t0: performance.now(), fromP: camera.position.clone(), toP, fromT: c.target.clone(), toT: c.target.clone(), turn }
      invalidate()
      return
    }
    const pos = preset.id === 'top' ? TOP_POS : HOME_POS
    tween.current = {
      t0: performance.now(),
      fromP: camera.position.clone(),
      toP: new Vector3(...pos),
      fromT: c.target.clone(),
      toT: new Vector3(0, 0, preset.id === 'top' ? 0 : 1),
    }
    invalidate()
  }, [preset, camera, invalidate])

  useEffect(() => {
    const typing = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      return !!t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)
    }
    const down = (e: KeyboardEvent) => {
      if (typing(e) || e.ctrlKey || e.metaKey) return
      const k = e.key.toLowerCase()
      if (k in PAN_KEYS) {
        keys.current.add(k)
        tween.current = null
        invalidate()
      }
    }
    const up = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase())
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [invalidate])

  useEffect(() => {
    cameraApi.current = {
      project(x, y, z) {
        camera.updateMatrixWorld()
        const v = new Vector3(x, y, z).project(camera)
        const r = gl.domElement.getBoundingClientRect()
        return { x: r.left + ((v.x + 1) / 2) * r.width, y: r.top + ((1 - v.y) / 2) * r.height }
      },
      lookAt(x, z, distance) {
        const c = controls.current
        if (!c) return
        tween.current = null
        const dir = camera.position.clone().sub(c.target)
        dir.y = Math.max(dir.y, 0.1)
        dir.normalize().multiplyScalar(MathUtils.clamp(distance, 4, 60))
        c.target.set(x, 0, z)
        camera.position.copy(c.target).add(dir)
        c.update()
        invalidate()
      },
      get() {
        const c = controls.current
        return { x: c?.target.x ?? 0, z: c?.target.z ?? 0, distance: c ? c.getDistance() : camera.position.length() }
      },
      repaint: () => invalidate(),
    }
    return () => {
      cameraApi.current = null
    }
  }, [camera, gl, invalidate])

  const fwd = useRef(new Vector3())
  const right = useRef(new Vector3())
  const step = useRef(new Vector3())
  useFrame((state, dt) => {
    const c = controls.current
    if (!c) return
    const tw = tween.current
    if (tw) {
      const f = Math.min(1, (performance.now() - tw.t0) / 450)
      const e = f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2
      if (tw.turn !== undefined) camera.position.copy(tw.fromP).sub(tw.fromT).applyAxisAngle(UP, tw.turn * e).add(tw.fromT)
      else camera.position.lerpVectors(tw.fromP, tw.toP, e)
      c.target.lerpVectors(tw.fromT, tw.toT, e)
      if (f >= 1) tween.current = null
      state.invalidate()
    }
    if (keys.current.size) {
      camera.getWorldDirection(fwd.current)
      fwd.current.y = 0
      fwd.current.normalize()
      right.current.crossVectors(fwd.current, camera.up).normalize()
      const sp = PAN_SPEED * Math.min(dt, 0.05)
      for (const k of keys.current) {
        const [dx, dz] = PAN_KEYS[k]!
        step.current.copy(right.current).multiplyScalar(dx * sp).addScaledVector(fwd.current, -dz * sp)
        camera.position.add(step.current)
        c.target.add(step.current)
      }
      state.invalidate()
    }
    c.target.x = MathUtils.clamp(c.target.x, -halfX - MARGIN, halfX + MARGIN)
    c.target.z = MathUtils.clamp(c.target.z, -halfZ - MARGIN, halfZ + MARGIN)
    c.target.y = 0
    c.update()
  })

  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enableDamping={false}
      minDistance={5}
      maxDistance={58}
      minPolarAngle={MathUtils.degToRad(4)}
      maxPolarAngle={Math.PI / 2.05}
      screenSpacePanning={false}
    />
  )
}
