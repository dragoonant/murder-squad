import { Canvas } from '@react-three/fiber'
import { Grid, OrbitControls } from '@react-three/drei'

// M0 placeholder: the 30" x 22" killzone as a plane (1 unit = 1 inch, y up, centred at the origin).
export function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Canvas camera={{ position: [0, 24, 26], fov: 45 }} frameloop="demand">
        <color attach="background" args={['#0a0a10']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[30, 22]} />
          <meshStandardMaterial color="#2a2d31" />
        </mesh>
        <Grid args={[30, 22]} cellSize={1} sectionSize={6} position={[0, 0.005, 0]} fadeDistance={60} cellColor="#3a3f46" sectionColor="#5a6470" />
        <OrbitControls makeDefault target={[0, 0, 0]} />
      </Canvas>
      <div data-testid="title" style={{ position: 'absolute', top: 12, left: 16, color: '#e6e0d0', fontFamily: 'system-ui, sans-serif', fontSize: 14 }}>
        Murder Squad — M0
      </div>
    </div>
  )
}
