// Board effects driven by the presentation director: a tracer per weapon flavour (bolter streaks, slugga
// bursts, plasma bolt, flamer cone, rokkit arc), an impact flash, a floating damage number and an expanding
// ring (melee shock, objective control change). Frames are requested only while an effect is alive (the board
// is demand-driven).
import { useMemo, useRef } from 'react'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'
import { useFx, type Fx } from '../presentation/fxStore'

const STYLE_ID = 'ms-fx-style'
function ensureStyle(): void {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return
  const s = document.createElement('style')
  s.id = STYLE_ID
  s.textContent = '@keyframes ms-fx-rise { 0% { transform: translateY(0) scale(0.7); opacity: 0 } 15% { opacity: 1; transform: translateY(-8px) scale(1.15) } 100% { transform: translateY(-46px) scale(1); opacity: 0 } }'
  document.head.appendChild(s)
}

interface StreakSpec {
  count: number
  gap: number
  travel: number
  len: number
  thick: number
  arc: number
}

function streakFor(f: Fx): StreakSpec {
  switch (f.flavour) {
    case 'slugga':
      return { count: 4, gap: 55, travel: 150, len: 0.8, thick: 0.05, arc: 0 }
    case 'plasma':
      return { count: 1, gap: 0, travel: 340, len: 0.5, thick: 0.2, arc: 0 }
    case 'rokkit':
      return { count: 1, gap: 0, travel: 480, len: 0.7, thick: 0.16, arc: 2.4 }
    default:
      return { count: 3, gap: 80, travel: 160, len: 1, thick: 0.06, arc: 0 }
  }
}

function Streaks({ fx }: { fx: Fx }) {
  const spec = useMemo(() => streakFor(fx), [fx])
  const refs = useRef<(Group | null)[]>([])
  const dx = fx.to[0] - fx.from[0]
  const dy = fx.to[1] - fx.from[1]
  const dz = fx.to[2] - fx.from[2]
  const yaw = Math.atan2(dx, dz)
  const pitch = -Math.atan2(dy, Math.hypot(dx, dz))
  useFrame((state) => {
    const t = performance.now() - fx.t0
    let live = false
    for (let i = 0; i < spec.count; i++) {
      const g = refs.current[i]
      if (!g) continue
      const u = (t - i * spec.gap) / spec.travel
      g.visible = u > 0 && u < 1
      if (u <= 1) live = true
      if (!g.visible) continue
      g.position.set(fx.from[0] + dx * u, fx.from[1] + dy * u + Math.sin(u * Math.PI) * spec.arc, fx.from[2] + dz * u)
    }
    if (live || t < 40) state.invalidate()
  })
  return (
    <>
      {Array.from({ length: spec.count }, (_, i) => (
        <group key={i} ref={(g) => void (refs.current[i] = g)} rotation={[pitch, yaw, 0]} visible={false}>
          <mesh>
            {fx.flavour === 'plasma' || fx.flavour === 'rokkit' ? <sphereGeometry args={[spec.thick, 12, 10]} /> : <boxGeometry args={[spec.thick, spec.thick, spec.len]} />}
            <meshBasicMaterial color={fx.color} />
          </mesh>
        </group>
      ))}
    </>
  )
}

function Flame({ fx }: { fx: Fx }) {
  const refs = useRef<(Mesh | null)[]>([])
  const N = 9
  const dx = fx.to[0] - fx.from[0]
  const dy = fx.to[1] - fx.from[1]
  const dz = fx.to[2] - fx.from[2]
  useFrame((state) => {
    const t = performance.now() - fx.t0
    for (let i = 0; i < N; i++) {
      const m = refs.current[i]
      if (!m) continue
      const u = Math.min(1, Math.max(0, (t / fx.dur) * 1.4 - i * 0.07))
      m.visible = u > 0 && u < 1
      m.position.set(fx.from[0] + dx * u, fx.from[1] + dy * u + Math.sin(i * 2.3) * 0.12 * u, fx.from[2] + dz * u + Math.cos(i * 1.7) * 0.12 * u)
      const s = 0.12 + u * 0.55
      m.scale.setScalar(s)
    }
    if (t < fx.dur + 60) state.invalidate()
  })
  return (
    <>
      {Array.from({ length: N }, (_, i) => (
        <mesh key={i} ref={(m) => void (refs.current[i] = m)} visible={false}>
          <sphereGeometry args={[1, 10, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#ffd45a' : i % 3 === 1 ? '#ff8a2a' : '#e8461a'} transparent opacity={0.75} depthWrite={false} />
        </mesh>
      ))}
    </>
  )
}

function Impact({ fx }: { fx: Fx }) {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    const m = ref.current
    if (!m) return
    const u = Math.min(1, (performance.now() - fx.t0) / fx.dur)
    m.scale.setScalar(0.15 + fx.size * Math.sin(u * Math.PI * 0.75) * 0.6)
    ;(m.material as { opacity: number }).opacity = (1 - u) * 0.9
    m.visible = u < 1
    if (u < 1) state.invalidate()
  })
  return (
    <mesh ref={ref} position={fx.to}>
      <sphereGeometry args={[1, 14, 10]} />
      <meshBasicMaterial color={fx.color} transparent opacity={0.9} depthWrite={false} />
    </mesh>
  )
}

function Ring({ fx }: { fx: Fx }) {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    const m = ref.current
    if (!m) return
    const u = Math.min(1, (performance.now() - fx.t0) / fx.dur)
    m.scale.setScalar(0.4 + u * fx.size)
    ;(m.material as { opacity: number }).opacity = (1 - u) * 0.9
    m.visible = u < 1
    if (u < 1) state.invalidate()
  })
  return (
    <mesh ref={ref} position={[fx.to[0], fx.to[1] + 0.1, fx.to[2]]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.85, 1, 40]} />
      <meshBasicMaterial color={fx.color} transparent opacity={0.9} depthWrite={false} />
    </mesh>
  )
}

function FloatText({ fx }: { fx: Fx }) {
  ensureStyle()
  return (
    <Html position={fx.to} center zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
      <div
        data-testid="fx-text"
        style={{ animation: `ms-fx-rise ${fx.dur}ms ease-out forwards`, color: fx.color, font: '900 22px system-ui', textShadow: '0 1px 3px #000, 0 0 8px #000', whiteSpace: 'nowrap' }}
      >
        {fx.text}
      </div>
    </Html>
  )
}

function FxView({ fx }: { fx: Fx }) {
  switch (fx.kind) {
    case 'tracer':
      return fx.flavour === 'flamer' ? <Flame fx={fx} /> : <Streaks fx={fx} />
    case 'impact':
      return <Impact fx={fx} />
    case 'ring':
      return <Ring fx={fx} />
    case 'text':
      return <FloatText fx={fx} />
  }
}

export function Vfx() {
  const list = useFx((s) => s.list)
  return (
    <>
      {list.map((f) => (
        <FxView key={f.id} fx={f} />
      ))}
    </>
  )
}
