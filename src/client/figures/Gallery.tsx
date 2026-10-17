// ?gallery: every datacard of every team as a stand-in or GLB (whichever the manifest provides), each with
// its default loadout (placeholder weapon at the measured hand socket), for the QC pass of the art pipeline.
// Buttons: front / three-quarter camera and a "sockets" toggle that draws a small sphere at every socket.
import { useEffect, useMemo, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { defaultLoadout, expandWeaponRef, type DatacardData } from '@/data'
import { chosenWeaponIds, dataBundle } from '../game/adapter'
import { teamList } from '../game/defaults'
import { colors, fontStack } from '../ui/theme'
import { glbStats } from './glbLoader'
import { Figure, hasGlbBody, seatColor } from './Operative'
import { useModelManifest, type SocketName, type V3 } from './manifest'

const COLS = 5
const GAP_X = 2.4
const GAP_Z = 3.0
const TARGET: V3 = [0, 0.55, 0]

type View = 'front' | 'three-quarter'
const VIEWS: Record<View, { az: number; el: number; dist: number }> = {
  front: { az: 0, el: 0.45, dist: 16 },
  'three-quarter': { az: 0.6, el: 0.5, dist: 16 },
}

const SOCKET_COLOR: Record<SocketName, string> = {
  handR: '#ff3b3b',
  handL: '#3b8bff',
  back: '#ffe14a',
  beltR: '#ff9f2e',
  beltL: '#37d6ff',
  shoulderR: '#ff7bd5',
  shoulderL: '#a06bff',
  head: '#ffffff',
}

function CameraPreset({ view, zoom }: { view: View; zoom: number }) {
  const camera = useThree((s) => s.camera)
  const controls = useThree((s) => s.controls) as { target: { set(x: number, y: number, z: number): void }; update(): void } | null
  useEffect(() => {
    const v = VIEWS[view]
    camera.position.set(TARGET[0] + v.dist * zoom * Math.sin(v.az) * Math.cos(v.el), TARGET[1] + v.dist * zoom * Math.sin(v.el), TARGET[2] + v.dist * zoom * Math.cos(v.az) * Math.cos(v.el))
    camera.lookAt(...TARGET)
    controls?.target.set(...TARGET)
    controls?.update()
  }, [view, zoom, camera, controls])
  return null
}

function Sockets({ sockets }: { sockets: Partial<Record<SocketName, V3>> }) {
  return (
    <>
      {(Object.entries(sockets) as [SocketName, V3][]).map(([name, p]) => (
        <mesh key={name} position={p} renderOrder={10}>
          <sphereGeometry args={[0.045, 12, 8]} />
          <meshBasicMaterial color={SOCKET_COLOR[name]} depthTest={false} />
        </mesh>
      ))}
    </>
  )
}

export function Gallery() {
  const b = dataBundle()
  const manifest = useModelManifest()
  const [view, setView] = useState<View>('front')
  const [sockets, setSockets] = useState(false)
  const [teamIx, setTeamIx] = useState<number | null>(null)
  const allCards = useMemo(
    () =>
      teamList(b).flatMap((t) =>
        Object.values(b.byId)
          .filter((r): r is DatacardData => (r as DatacardData).team === t.id && 'figure' in r)
          .map((c) => ({ card: c, team: t, seat: (teamList(b).indexOf(t) === 0 ? 'A' : 'B') as 'A' | 'B' })),
      ),
    [b],
  )
  const cards = teamIx === null ? allCards : allCards.filter((c) => c.team.id === teamList(b)[teamIx]?.id)
  const rows = Math.ceil(cards.length / COLS)

  // load counters for e2e (window.__ms is installed for ?gallery by store/testHooks)
  useEffect(() => {
    const publish = () => {
      const ms = (window.__ms ?? (window.__ms = {} as NonNullable<typeof window.__ms>)) as unknown as Record<string, unknown>
      ms.glbStats = (prefix = 'bodies/') => glbStats(prefix)
      ms.glbBodiesLoaded = () => glbStats('bodies/').loaded
      ms.galleryView = () => ({ view, sockets })
    }
    publish()
  }, [view, sockets])

  const btn = (active: boolean): React.CSSProperties => ({
    background: active ? colors.accent : '#262a36',
    color: active ? '#000' : colors.text,
    border: '1px solid #4a5062',
    borderRadius: 4,
    padding: '3px 10px',
    marginLeft: 6,
    cursor: 'pointer',
    font: '600 12px system-ui',
  })

  return (
    <div data-testid="gallery" style={{ position: 'fixed', inset: 0, background: '#0a0a10', color: colors.text, fontFamily: fontStack }}>
      <div style={{ position: 'absolute', top: 8, left: 12, zIndex: 5, fontSize: 13, display: 'flex', alignItems: 'center' }}>
        <b>Figure gallery</b>&nbsp;&middot; {allCards.length} datacards &middot; {Object.keys(manifest.bodies).length} GLB bodies listed &middot;&nbsp;
        <a style={{ color: colors.accent }} href="./">back</a>
        <button data-testid="view-front" style={btn(view === 'front')} onClick={() => setView('front')}>
          Front
        </button>
        <button data-testid="view-three-quarter" style={btn(view === 'three-quarter')} onClick={() => setView('three-quarter')}>
          Three-quarter
        </button>
        <button data-testid="team-all" style={btn(teamIx === null)} onClick={() => setTeamIx(null)}>
          All
        </button>
        {teamList(b).map((t, i) => (
          <button key={t.id} data-testid={`team-${i}`} style={btn(teamIx === i)} onClick={() => setTeamIx(i)}>
            {t.name}
          </button>
        ))}
        <button data-testid="toggle-sockets" style={btn(sockets)} onClick={() => setSockets((s) => !s)}>
          Sockets {sockets ? 'on' : 'off'}
        </button>
      </div>
      <Canvas camera={{ position: [0, 7, 13], fov: 28 }} frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <color attach="background" args={['#14151d']} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 12, 8]} intensity={1.6} />
        <gridHelper args={[COLS * GAP_X + 2, COLS * 2, '#3a3f4a', '#242833']} position={[0, 0, 0]} />
        {cards.map(({ card, team, seat }, n) => {
          const col = n % COLS
          const row = Math.floor(n / COLS)
          const x = (col - (COLS - 1) / 2) * GAP_X
          const z = (row - (rows - 1) / 2) * GAP_Z
          const weaponIds = [...new Set([...card.weapons.fixed.flatMap((r) => expandWeaponRef(r, b.weaponGroups)), ...chosenWeaponIds(card, defaultLoadout(card))])]
          const body = manifest.bodies[card.figure.archetype]
          const glb = hasGlbBody(card.figure.archetype, manifest)
          return (
            <group key={card.id} position={[x, 0, z]}>
              <Figure
                spec={{
                  archetype: card.figure.archetype,
                  height: Math.round(((card.base / 25.4) * 1.15 + 0.1) * 1000) / 1000,
                  baseRadius: card.base / 25.4 / 2,
                  major: team.paint.major,
                  minor: team.paint.minor,
                  weaponIds,
                  seatColor: seatColor(seat),
                }}
              />
              {sockets && body?.sockets && <Sockets sockets={body.sockets} />}
              <Html position={[0, 0, 0.75]} center distanceFactor={9} style={{ pointerEvents: 'none' }}>
                <div data-testid={`gallery-${card.id}`} style={{ font: '600 11px system-ui', color: '#fff', textAlign: 'center', whiteSpace: 'nowrap', textShadow: '0 0 3px #000' }}>
                  {card.figure.archetype}
                  <div style={{ color: glb ? '#6dff9a' : '#ffcf5a', fontWeight: 400 }}>{glb ? 'GLB body' : 'stand-in'}</div>
                </div>
              </Html>
            </group>
          )
        })}
        <OrbitControls makeDefault target={TARGET} maxPolarAngle={Math.PI / 2.05} />
        <CameraPreset view={view} zoom={teamIx === null ? 1 : 0.95} />
      </Canvas>
    </div>
  )
}
