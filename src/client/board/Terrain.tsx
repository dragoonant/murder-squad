// Terrain drawn from the same Solids the engine uses (terrainOf), so what you see is what the rules measure.
// Procedural prisms per part with trait-based colour and transparency; Vantage floors are drawn as lighter
// platform plates at their placeable heights. GLB terrain fitting arrives with the art pipeline (M5).
import { useMemo } from 'react'
import type { ThreeEvent } from '@react-three/fiber'
import { BufferGeometry, EdgesGeometry, ExtrudeGeometry, Shape, ShapeGeometry } from 'three'
import type { MapDef } from '@/engine'
import { terrainOf, type Solid } from '@/engine/terrain'
import type { Pt } from '../ui/uiStore'

interface Look {
  color: string
  opacity: number
  edge: string
}

export function lookOf(s: Pick<Solid, 'heavy' | 'light' | 'blocking' | 'vantage' | 'accessible' | 'insignificant' | 'exposed' | 'ceiling' | 'barred'>): Look {
  if (s.accessible) return { color: '#2a8f8f', opacity: 0.55, edge: '#7fe3e3' }
  if (s.barred) return { color: '#3d6a52', opacity: 0.4, edge: '#8bd0a8' }
  if (s.ceiling) return { color: '#7b8290', opacity: 0.5, edge: '#c3cad6' }
  if (s.blocking) return { color: '#30333a', opacity: 1, edge: '#7a808c' }
  if (s.vantage) return { color: '#5c6c80', opacity: 1, edge: '#b6c8de' }
  if (s.heavy) return { color: '#4c5059', opacity: 1, edge: '#9298a6' }
  if (s.exposed) return { color: '#7a5a5a', opacity: 0.85, edge: '#d29c9c' }
  if (s.insignificant) return { color: '#5a554c', opacity: 0.9, edge: '#a39b8c' }
  if (s.light) return { color: '#94724a', opacity: 0.72, edge: '#d9b17d' }
  return { color: '#555a63', opacity: 1, edge: '#9aa0ac' }
}

function shapeOf(poly: { x: number; z: number }[]): Shape {
  // shape space is XY; after rotateX(-90deg) shape +y maps to world -z, so feed y = -z
  const sh = new Shape()
  poly.forEach((p, i) => (i === 0 ? sh.moveTo(p.x, -p.z) : sh.lineTo(p.x, -p.z)))
  sh.closePath()
  return sh
}

function prism(s: Solid): BufferGeometry {
  const depth = Math.max(0.05, s.top - s.bottom)
  const g = new ExtrudeGeometry(shapeOf(s.polygon), { depth, bevelEnabled: false })
  g.rotateX(-Math.PI / 2)
  g.translate(0, s.bottom, 0)
  return g
}

function plate(s: Solid): BufferGeometry {
  const g = new ShapeGeometry(shapeOf(s.polygon))
  g.rotateX(-Math.PI / 2)
  return g
}

function Part({ solid, onPoint }: { solid: Solid; onPoint(p: Pt | null, click: boolean): void }) {
  const look = lookOf(solid)
  const geo = useMemo(() => prism(solid), [solid])
  const edges = useMemo(() => new EdgesGeometry(geo, 30), [geo])
  const plateGeo = useMemo(() => (solid.floors.length ? plate(solid) : null), [solid])
  const pointFor = (e: ThreeEvent<PointerEvent | MouseEvent>): Pt => {
    // Landing on a top face of a part with placeable floors snaps to the nearest floor; anything else is the ground.
    const hitTop = e.point.y >= solid.top - 0.2
    if (hitTop && solid.floors.length > 0) {
      const y = solid.floors.reduce((best, f) => (Math.abs(f - e.point.y) < Math.abs(best - e.point.y) ? f : best), solid.floors[0]!)
      return { x: e.point.x, z: e.point.z, y }
    }
    return { x: e.point.x, z: e.point.z, y: 0 }
  }
  return (
    <group>
      <mesh
        geometry={geo}
        castShadow
        receiveShadow
        onPointerMove={(e) => {
          e.stopPropagation()
          onPoint(pointFor(e), false)
        }}
        onClick={(e) => {
          if (e.delta > 6) return
          e.stopPropagation()
          onPoint(pointFor(e), true)
        }}
      >
        <meshStandardMaterial color={look.color} transparent={look.opacity < 1} opacity={look.opacity} roughness={0.85} metalness={0.1} depthWrite={look.opacity >= 0.9} />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={look.edge} transparent opacity={0.7} />
      </lineSegments>
      {plateGeo &&
        [...new Set(solid.floors)].map((f) => (
          <mesh key={f} geometry={plateGeo} position={[0, f + 0.012, 0]}>
            <meshBasicMaterial color="#9fb6d0" transparent opacity={0.28} depthWrite={false} />
          </mesh>
        ))}
    </group>
  )
}

export function Terrain({ map, onPoint }: { map: MapDef; onPoint(p: Pt | null, click: boolean): void }) {
  const solids = useMemo(() => terrainOf(map).solids, [map])
  return (
    <group>
      {solids.map((s) => (
        <Part key={s.partId} solid={s} onPoint={onPoint} />
      ))}
    </group>
  )
}
