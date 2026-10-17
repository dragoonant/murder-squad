// 3D overlays for the two continuous decisions: the deploy ghost and the move-path preview (straight-line
// increments, per-increment length and cost, climb/drop/jump labels, ghost base at the end). Every number
// shown comes from the engine's planMove; the client only draws it.
import { useMemo } from 'react'
import { Html, Line } from '@react-three/drei'
import type { GameState, PendingDecision, Waypoint } from '@/engine'
import { deployChoice, previewMove } from './controller'
import { useUi, type Pt } from '../ui/uiStore'

const KIND_COLOR: Record<string, string> = { walk: '#ffffff', climb: '#ff9f43', drop: '#2ee6c8', jump: '#ff5ce1' }

function Ghost({ x, y, z, r, ok }: { x: number; y: number; z: number; r: number; ok: boolean }) {
  return (
    <group position={[x, y + 0.07, z]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[r, 28]} />
        <meshBasicMaterial color={ok ? '#6dff9a' : '#ff5a4f'} transparent opacity={0.35} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[r * 0.9, r, 28]} />
        <meshBasicMaterial color={ok ? '#6dff9a' : '#ff5a4f'} />
      </mesh>
    </group>
  )
}

export function DeployGhost({ state, pending }: { state: GameState; pending: PendingDecision }) {
  const hover = useUi((s) => s.hover)
  const note = useUi((s) => s.hoverNote)
  const picked = useUi((s) => s.deployOp)
  const id = deployChoice(pending, picked)
  const op = id ? state.operatives[id] : null
  if (!hover || !op) return null
  return <Ghost x={hover.x} y={hover.y} z={hover.z} r={op.baseRadius} ok={note?.ok ?? false} />
}

function Label({ at, text, color }: { at: [number, number, number]; text: string; color: string }) {
  return (
    <Html position={at} center distanceFactor={16} style={{ pointerEvents: 'none' }}>
      <div style={{ background: 'rgba(8,8,14,0.82)', color, font: '700 11px system-ui', padding: '1px 5px', borderRadius: 4, whiteSpace: 'nowrap', border: `1px solid ${color}55` }}>{text}</div>
    </Html>
  )
}

export function MovePreviewLayer({ state, pending }: { state: GameState; pending: PendingDecision }) {
  const waypoints = useUi((s) => s.waypoints)
  const hover = useUi((s) => s.hover)
  const jumpNext = useUi((s) => s.jumpNext)
  const opId = pending.constraints?.operativeId
  const op = opId ? state.operatives[opId] : null
  const committed = useMemo(() => previewMove(state, pending, waypoints), [state, pending, waypoints])
  const whatIf = useMemo(() => {
    if (!hover) return null
    const wp: Waypoint = { x: hover.x, z: hover.z, y: hover.y, ...(jumpNext ? { jump: true } : {}) }
    return previewMove(state, pending, [...waypoints, wp])
  }, [state, pending, waypoints, hover, jumpNext])
  if (!op) return null
  const start: [number, number, number] = [op.pos.x, op.pos.y + 0.12, op.pos.z]
  const segs = committed.plan?.segments ?? []
  const last = waypoints[waypoints.length - 1]
  const lastPt: [number, number, number] = last ? [last.x, (last.y ?? op.pos.y) + 0.12, last.z] : start
  return (
    <group>
      {segs.map((s, i) => (
        <group key={i}>
          <Line points={[[s.from.x, s.from.y + 0.12, s.from.z], [s.to.x, s.to.y + 0.12, s.to.z]]} color={KIND_COLOR[s.kind] ?? '#fff'} lineWidth={3} />
          <Label
            at={[(s.from.x + s.to.x) / 2, Math.max(s.from.y, s.to.y) + 0.6, (s.from.z + s.to.z) / 2]}
            text={`${s.length.toFixed(1)}″${s.kind !== 'walk' ? ` ${s.kind}` : ''} (${s.cost})`}
            color={KIND_COLOR[s.kind] ?? '#fff'}
          />
        </group>
      ))}
      {committed.plan === null && waypoints.length > 0 && (
        <Line points={[start, ...waypoints.map((w) => [w.x, (w.y ?? op.pos.y) + 0.12, w.z] as [number, number, number])]} color="#ff5a4f" lineWidth={3} />
      )}
      {committed.plan ? (
        <Ghost x={committed.plan.end.x} y={committed.plan.end.y} z={committed.plan.end.z} r={op.baseRadius} ok />
      ) : last ? (
        <Ghost x={last.x} y={last.y ?? 0} z={last.z} r={op.baseRadius} ok={false} />
      ) : null}
      {hover && whatIf && (
        <>
          <Line
            points={[lastPt, [hover.x, hover.y + 0.12, hover.z]]}
            color={whatIf.ok ? '#6dff9a' : '#ff5a4f'}
            lineWidth={2}
            dashed
            dashSize={0.3}
            gapSize={0.2}
          />
          <Label
            at={[hover.x, hover.y + 1.1, hover.z]}
            text={whatIf.plan ? `total ${whatIf.plan.cost}/${whatIf.plan.maxInches}″` : (whatIf.rejection?.reason ?? 'blocked').slice(0, 56)}
            color={whatIf.ok ? '#6dff9a' : '#ff8a80'}
          />
        </>
      )}
    </group>
  )
}
