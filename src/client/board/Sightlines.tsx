// 3D sight-line overlay: from the operative's position (the planned end of a staged move, else where it stands)
// a line to every enemy, coloured by the engine's verdict, a badge on each enemy and, with the threat view on,
// red lines from the enemies that could shoot back. All numbers come from interaction/sightlines.ts (engine queries).
import { Html, Line } from '@react-three/drei'
import type { ReactElement } from 'react'
import type { SightEntry, SightStatus, ThreatEntry } from '../interaction/sightlines'
import { useSightData } from '../interaction/sightData'
import { useUi } from '../ui/uiStore'

export const SIGHT_COLOR: Record<SightStatus, string> = {
  valid: '#6dff9a',
  cover: '#ffb347',
  obscured: '#ffb347',
  blocked: '#ffb347',
  unseen: '#8a8f9f',
}
export const THREAT_COLOR = '#ff5a4f'

export function sightLabel(e: SightEntry): string {
  const dmg = e.expected !== null ? ` · ${e.expected.toFixed(1)} dmg` : ''
  switch (e.status) {
    case 'valid':
      return `clear${dmg}`
    case 'cover':
      return `in cover${dmg}`
    case 'obscured':
      return `${e.inCover ? 'cover+obscured' : 'obscured'}${dmg}`
    case 'blocked':
      return e.reason?.startsWith('concealed') ? 'concealed: no shot' : 'no shot'
    default:
      return 'not visible'
  }
}

const lift = (v: { x: number; y: number; z: number }, dy = 0): [number, number, number] => [v.x, v.y + dy, v.z]

/** The same line shifted sideways, so the red threat line runs beside the verdict line instead of on top of it. */
function beside(a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }, side: number): [[number, number, number], [number, number, number]] {
  const dx = b.x - a.x
  const dz = b.z - a.z
  const len = Math.hypot(dx, dz) || 1
  const ox = (-dz / len) * side
  const oz = (dx / len) * side
  return [
    [a.x + ox, a.y, a.z + oz],
    [b.x + ox, b.y, b.z + oz],
  ]
}

export function SightlineLayer() {
  const d = useSightData()
  const hoverOp = useUi((s) => s.hoverOp)
  if (!d) return null
  const { sight, threat, threatOn } = d
  const conceal = new Map<string, ThreatEntry>((threat?.conceal.entries ?? []).map((t) => [t.id, t]))
  const engage = new Map<string, ThreatEntry>((threat?.engage.entries ?? []).map((t) => [t.id, t]))
  const ids = new Set<string>([...sight.entries.map((e) => e.id), ...engage.keys()])
  const byId = new Map(sight.entries.map((e) => [e.id, e]))
  return (
    <group>
      {[...ids].map((id) => {
        const e = byId.get(id)
        const t = engage.get(id)
        const op = d.state.operatives[id]
        if (!op) return null
        const color = e ? SIGHT_COLOR[e.status] : THREAT_COLOR
        const hot = hoverOp === id
        const lines: ReactElement[] = []
        if (e) {
          const dashed = e.status === 'unseen'
          lines.push(
            <Line
              key="sight"
              points={[lift(e.from), lift(e.to)]}
              color={color}
              lineWidth={hot ? 4 : e.status === 'unseen' ? 1.5 : 2.6}
              dashed={dashed}
              dashSize={0.35}
              gapSize={0.25}
              transparent
              opacity={e.status === 'unseen' ? 0.75 : 0.95}
            />,
          )
        }
        if (threatOn && t) {
          const still = conceal.has(id)
          // red, offset to one side so it sits beside the green / amber line rather than on top of it
          lines.push(
            <Line
              key="threat"
              points={beside(t.from, t.to, 0.22)}
              color={THREAT_COLOR}
              lineWidth={still ? 3.4 : 2}
              dashed={!still}
              dashSize={0.3}
              gapSize={0.22}
              transparent
              opacity={0.9}
            />,
          )
        }
        const tc = conceal.get(id)
        return (
          <group key={id}>
            {lines}
            <mesh position={[op.pos.x, op.pos.y + 0.09, op.pos.z]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[op.baseRadius + 0.1, op.baseRadius + (hot ? 0.4 : 0.24), 36]} />
              <meshBasicMaterial color={color} transparent opacity={hot ? 1 : 0.75} />
            </mesh>
            <Html position={[op.pos.x, op.pos.y + op.height + 1.7, op.pos.z]} center zIndexRange={[10, 0]} distanceFactor={16} style={{ pointerEvents: 'none' }}>
              <div
                data-testid={`sight-badge-${id}`}
                data-status={e?.status ?? 'threat'}
                style={{ background: 'rgba(8,8,14,0.9)', font: '700 11px system-ui', padding: '2px 7px', borderRadius: 5, whiteSpace: 'nowrap', border: `1px solid ${color}88`, textAlign: 'center' }}
              >
                {e && <div style={{ color }}>{sightLabel(e)}</div>}
                {threatOn && t && (
                  <div data-testid={`threat-badge-${id}`} style={{ color: THREAT_COLOR }}>
                    hits you {t.expected.toFixed(1)} if Engage · {tc ? tc.expected.toFixed(1) : '0'} if Conceal
                  </div>
                )}
              </div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}
