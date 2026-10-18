// Oval bases (Hunter Clade arquebus Gunner, 60x35mm): the engine models one as three discs on its long axis
// (footprint.ts) with `ovalHalfAxis` the centre-to-end-disc distance and `facing` the bearing of the long axis. The
// client draws the same footprint as an ellipse whose semi-axes are the base radius (across) and the base radius plus
// `ovalHalfAxis` (along the facing). Everything is drawn in the operative's local frame (+Z = facing), so a wrapper
// group rotated by the facing is all a caller needs; round bases keep the plain disc and ring.
import { useMemo } from 'react'
import { DoubleSide, Path, Shape } from 'three'

/** Semi-axes of the base: x across the facing, z along it. */
export function baseAxes(baseRadius: number, ovalHalfAxis?: number): { rx: number; rz: number } {
  return { rx: baseRadius, rz: baseRadius + (ovalHalfAxis && ovalHalfAxis > 0 ? ovalHalfAxis : 0) }
}

export const isOvalBase = (ovalHalfAxis?: number): boolean => !!ovalHalfAxis && ovalHalfAxis > 0

function ellipseShape(rx: number, rz: number, holeRx: number, holeRz: number): Shape {
  const s = new Shape()
  s.absellipse(0, 0, rx, rz, 0, Math.PI * 2, false, 0)
  if (holeRx > 0 && holeRz > 0) {
    const h = new Path()
    h.absellipse(0, 0, holeRx, holeRz, 0, Math.PI * 2, true, 0)
    s.holes.push(h)
  }
  return s
}

/**
 * A flat ring (or disc when `inner` is 0 and `solid` is set) lying on the ground around a base, in the local frame.
 * `inner` and `outer` are offsets from the base edge in inches (negative goes inside). Round bases draw a plain ring.
 */
export function BaseRing({
  baseRadius,
  ovalHalfAxis,
  inner,
  outer,
  color,
  opacity = 1,
  y = 0,
  solid = false,
  depthWrite = true,
}: {
  baseRadius: number
  ovalHalfAxis?: number
  inner: number
  outer: number
  color: string
  opacity?: number
  y?: number
  /** draw a filled ellipse out to `outer` instead of a ring */
  solid?: boolean
  depthWrite?: boolean
}) {
  const { rx, rz } = baseAxes(baseRadius, ovalHalfAxis)
  const oval = isOvalBase(ovalHalfAxis)
  const shape = useMemo(() => (oval ? ellipseShape(rx + outer, rz + outer, solid ? 0 : Math.max(0.01, rx + inner), solid ? 0 : Math.max(0.01, rz + inner)) : null), [oval, rx, rz, inner, outer, solid])
  const material = <meshBasicMaterial color={color} transparent={opacity < 1} opacity={opacity} side={DoubleSide} depthWrite={depthWrite} />
  return (
    <mesh position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {shape ? <shapeGeometry args={[shape, 48]} /> : solid ? <circleGeometry args={[baseRadius + outer, 36]} /> : <ringGeometry args={[Math.max(0.01, baseRadius + inner), baseRadius + outer, 36]} />}
      {material}
    </mesh>
  )
}

/** A small wedge at the front end of an oval base so the facing reads even on a flat ellipse. */
export function FrontMark({ baseRadius, ovalHalfAxis, color, y = 0 }: { baseRadius: number; ovalHalfAxis?: number; color: string; y?: number }) {
  const { rx, rz } = baseAxes(baseRadius, ovalHalfAxis)
  const tri = useMemo(() => {
    const s = new Shape()
    // drawn pointing along shape +y, which the rotation below lays onto world -z; the mirror keeps it at the +Z end
    s.moveTo(-rx * 0.35, 0)
    s.lineTo(rx * 0.35, 0)
    s.lineTo(0, -0.45)
    s.closePath()
    return s
  }, [rx])
  if (!isOvalBase(ovalHalfAxis)) return null
  return (
    <mesh position={[0, y, rz + 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
      <shapeGeometry args={[tri]} />
      <meshBasicMaterial color={color} side={DoubleSide} />
    </mesh>
  )
}

/**
 * Base radius and oval half-axis of a datacard in inches, as the engine sets them up (the oval applies to every loadout or
 * only to loadouts with the named weapons). `weaponIds` omitted counts as "any loadout".
 */
export function baseOfCard(card: { base: number; ovalBase?: { long: number; short: number; weapons?: string[] } }, weaponIds?: string[]): { baseRadius: number; ovalHalfAxis?: number } {
  const o = card.ovalBase
  if (o && o.long > o.short && (!o.weapons || !weaponIds || o.weapons.some((w) => weaponIds.includes(w)))) {
    return { baseRadius: Math.round((o.short / 25.4 / 2) * 1000) / 1000, ovalHalfAxis: Math.round(((o.long - o.short) / 25.4 / 2) * 1000) / 1000 }
  }
  return { baseRadius: card.base / 25.4 / 2 }
}
