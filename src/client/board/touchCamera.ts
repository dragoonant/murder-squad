// Pure helpers behind the touch camera (CameraRig): the tap-versus-drag guard and the two-finger view maths.
// Kept free of React and r3f so they can be unit tested.
import { MathUtils, Plane, Raycaster, Spherical, Vector2, Vector3, type Camera } from 'three'

/** CSS px a finger may wander and still be a tap; a pan only starts, and a click is only suppressed, past this. */
export const TAP_SLOP = 8
/** CSS px the two-finger midpoint must travel vertically before the tilt engages (a pinch never tilts by accident). */
export const TILT_DEADZONE = 14

const UP = new Vector3(0, 1, 0)

export interface TapGuard {
  /** a pointer went down; `onCanvas` is whether the board canvas itself was the target */
  down(id: number, x: number, y: number, touch: boolean, onCanvas: boolean): void
  move(id: number, x: number, y: number): void
  up(id: number): void
  /** the gesture is one finger that has not yet left the tap radius: the camera must not pan yet */
  inDeadzone(): boolean
  /** the click that follows this gesture is the end of a drag or a multi-finger gesture, so the game must not see it */
  suppressClick(): boolean
}

/** Tracks a touch gesture on the canvas. Mouse and pen pointers are never tracked, so desktop clicks are untouched. */
export function createTapGuard(slop = TAP_SLOP): TapGuard {
  const start = new Map<number, { x: number; y: number }>()
  let active = false
  let dragged = false
  let multi = false
  return {
    down(id, x, y, touch, onCanvas) {
      if (start.size === 0) {
        active = touch && onCanvas
        dragged = false
        multi = false
      }
      if (!active) return
      start.set(id, { x, y })
      if (start.size > 1) multi = true
    },
    move(id, x, y) {
      const s = start.get(id)
      if (s && Math.hypot(x - s.x, y - s.y) > slop) dragged = true
    },
    up(id) {
      start.delete(id)
    },
    inDeadzone: () => active && !dragged && !multi && start.size === 1,
    suppressClick: () => active && (dragged || multi),
  }
}

export interface ViewLimits {
  minDistance: number
  maxDistance: number
  minPolar: number
  maxPolar: number
}

/**
 * Offset of the camera from its target after a two-finger step: twist turns it about the vertical axis by `azimuth`
 * radians, `pinch` (finger spread now / before) brings it closer or further, `dPhi` tilts it (positive lowers it
 * towards the horizon). Distance and polar angle stay inside `lim`.
 */
export function twoFingerOffset(offset: Vector3, azimuth: number, pinch: number, dPhi: number, lim: ViewLimits): Vector3 {
  const o = offset.clone().applyAxisAngle(UP, azimuth)
  const s = new Spherical().setFromVector3(o)
  if (pinch > 0 && Number.isFinite(pinch)) s.radius = MathUtils.clamp(s.radius / pinch, lim.minDistance, lim.maxDistance)
  s.phi = MathUtils.clamp(s.phi + dPhi, lim.minPolar, lim.maxPolar)
  return o.setFromSpherical(s)
}

/** Polar change for a vertical midpoint drag of `dy` CSS px on a canvas `height` px tall: dragging down raises the camera. */
export function tiltFromDrag(dy: number, height: number): number {
  return height > 0 ? (-2 * Math.PI * dy) / height : 0
}

/** The disc on the ground a one-finger drag must not pan from (the move area the preview draws), in board inches. */
export interface TouchArea {
  x: number
  z: number
  r: number
  /** height of the ground plane the disc lies on */
  y: number
}

const GROUND = new Plane(UP.clone(), 0)
const RAY = new Raycaster()

/** Where the ray through normalised device coordinates (-1..1, y up) meets the horizontal plane at height `y`; null when it never does. */
export function groundHit(camera: Camera, ndcX: number, ndcY: number, y = 0): { x: number; z: number } | null {
  camera.updateMatrixWorld()
  RAY.setFromCamera(new Vector2(ndcX, ndcY), camera)
  GROUND.constant = -y
  const hit = RAY.ray.intersectPlane(GROUND, new Vector3())
  return hit ? { x: hit.x, z: hit.z } : null
}

/**
 * Does a finger that lands at `pt` start inside the move area? Then the camera stays put for that gesture and the finger
 * drives the hover preview instead; anywhere else (or with no area open) it pans as usual.
 */
export function startsInArea(area: TouchArea | null, pt: { x: number; z: number } | null): boolean {
  return !!area && !!pt && Math.hypot(pt.x - area.x, pt.z - area.z) <= area.r
}
