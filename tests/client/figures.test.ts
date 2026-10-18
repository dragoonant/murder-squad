// Figure manifest: every datacard archetype has a measured body entry whose GLB exists, sockets are sane,
// every hold class has a HOLDS mount, and the rigid cues behave.
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { dataBundle } from '@/client/game/adapter'
import { HOLDS } from '@/client/figures/hold'
import { cuePose, cueState, isWalking, setDeathStyle, setWalking, triggerCue, clearCues } from '@/client/figures/cues'
import { galleryAnimStep } from '@/client/figures/galleryAnim'
import type { HoldClass, ModelManifest } from '@/client/figures/manifest'

const modelsDir = resolve(__dirname, '../../public/assets/models')
const manifest = JSON.parse(readFileSync(resolve(modelsDir, 'manifest.json'), 'utf8')) as ModelManifest
const cards = Object.values(dataBundle().byId).filter((r) => 'figure' in r) as unknown as { id: string; figure: { archetype: string } }[]

describe('figure manifest', () => {
  it('has datacards to check', () => {
    expect(cards.length).toBeGreaterThanOrEqual(20)
  })

  it('every datacard archetype has a manifest entry', () => {
    const missing = cards.filter((c) => !manifest.bodies[c.figure.archetype]).map((c) => `${c.id} -> ${c.figure.archetype}`)
    expect(missing).toEqual([])
  })

  it('every manifest body and attachment file exists on disk', () => {
    for (const [slug, b] of Object.entries(manifest.bodies)) {
      const bare = b.file.replace(/\.glb$/i, '')
      const rel = bare.includes('/') ? bare : `bodies/${bare}`
      expect(existsSync(resolve(modelsDir, `${rel}.glb`)), `${slug}: ${b.file}`).toBe(true)
    }
    for (const [id, a] of Object.entries(manifest.attachments)) {
      const bare = a.file.replace(/\.glb$/i, '')
      const rel = bare.includes('/') ? bare : `attachments/${bare}`
      expect(existsSync(resolve(modelsDir, `${rel}.glb`)), `${id}: ${a.file}`).toBe(true)
    }
  })

  it('bodies are measured, sized and carry sockets inside their footprint', () => {
    for (const [slug, b] of Object.entries(manifest.bodies)) {
      expect(b.measured, slug).toBe(true)
      expect(b.archetype).toBe(slug)
      expect(b.heightIn, slug).toBeGreaterThan(0.5)
      expect(b.baseMm, slug).toBeGreaterThan(20)
      const s = b.sockets!
      for (const k of ['back', 'beltR', 'beltL', 'shoulderR', 'shoulderL', 'head'] as const) expect(s[k], `${slug}.${k}`).toBeTruthy()
      if (slug === 'kom-bomb-squig') {
        expect(s.handR).toBeUndefined()
        expect(s.handL).toBeUndefined()
      } else {
        expect(s.handR![0], `${slug} handR is on the figure's right (-x)`).toBeLessThan(0)
        expect(s.handL![0], `${slug} handL is on the figure's left (+x)`).toBeGreaterThan(0)
        expect(s.handR![1]).toBeLessThan(b.heightIn!)
      }
      expect(s.back![2], `${slug} back is on the -z side`).toBeLessThan(0)
    }
  })
})

describe('HOLDS and cues', () => {
  it('every hold class has a mount with a grip fraction and a box', () => {
    const classes: HoldClass[] = ['pistol', 'rifle', 'long', 'heavy', 'melee1h', 'melee2h', 'shield', 'pack', 'grenade', 'tool']
    for (const c of classes) {
      expect(HOLDS[c], c).toBeTruthy()
      expect(HOLDS[c].gripAt).toBeGreaterThanOrEqual(0)
      expect(HOLDS[c].gripAt).toBeLessThanOrEqual(1)
      expect(HOLDS[c].box.every((n) => n > 0)).toBe(true)
    }
    // guns point forward (+Z): ry = -PI/2 maps barrel-right to forward
    expect(HOLDS.rifle.socket).toBe('handR')
    expect(HOLDS.rifle.rot[1]).toBeCloseTo(-Math.PI / 2)
  })

  it('cues recoil, lunge, flinch and topple, then settle', () => {
    clearCues()
    const t0 = 1000
    triggerCue('a', 'shoot', t0)
    expect(cuePose('a', t0 + 120, false).dz).toBeLessThan(0)
    triggerCue('b', 'melee', t0)
    expect(cuePose('b', t0 + 190, false).dz).toBeGreaterThan(0)
    triggerCue('c', 'hit', t0)
    expect(Math.abs(cuePose('c', t0 + 100, false).dz)).toBeGreaterThan(0)
    expect(cuePose('a', t0 + 5000, false).dz).toBe(0)
    triggerCue('d', 'death', t0)
    expect(cuePose('d', t0 + 700, false).rx).toBeCloseTo(-Math.PI / 2)
    expect(cuePose('d', t0 + 1000, false).vis).toBe(0)
    expect(cuePose('e', t0, true).dy).toBeGreaterThanOrEqual(0)
    clearCues()
  })

  it('skinned pose keeps only the aim turn alive, drops the fall for topple and slump, keeps the blast tumble', () => {
    clearCues()
    const t0 = 1000
    triggerCue('s', 'shoot', t0)
    const p = cuePose('s', t0 + 120, false, 0, true)
    expect(p.dz).toBe(0)
    expect(p.rx).toBe(0)
    expect(p.sy).toBe(1)
    expect(cueState('s', t0 + 120)).toEqual({ kind: 'shoot', t: 0.5 })
    expect(cueState('s', t0 + 5000)).toBeNull()
    setWalking('w', true)
    expect(isWalking('w')).toBe(true)
    expect(cuePose('w', t0 + 45, true, 0, true).dy).toBe(0)
    expect(cuePose('w', t0 + 45, true).dy).toBeGreaterThan(0)
    triggerCue('d', 'death', t0)
    expect(cuePose('d', t0 + 700, false, 0, true).rx).toBe(0)
    expect(cuePose('d', t0 + 700, false).rx).toBeCloseTo(-Math.PI / 2)
    expect(cuePose('d', t0 + 1000, false, 0, true).vis).toBe(0)
    setDeathStyle('b', { style: 'blast', dx: 0, dz: 1 })
    triggerCue('b', 'death', t0)
    const bl = cuePose('b', t0 + 300, false, 0, true)
    expect(Math.abs(bl.rx)).toBeGreaterThan(0)
    expect(bl.dz).toBeGreaterThan(0)
    clearCues()
    expect(isWalking('w')).toBe(false)
  })

  it('the gallery animate script walks, fires one-shots, kills one and resets every 20 ticks', () => {
    clearCues()
    const ids = ['g-a', 'g-b', 'g-c']
    galleryAnimStep(ids, 0)
    expect(ids.every((id) => isWalking(id))).toBe(true)
    galleryAnimStep(ids, 4)
    expect(isWalking('g-a')).toBe(false)
    expect(ids.some((id) => cueState(id) !== null)).toBe(true)
    galleryAnimStep(ids, 15)
    expect(ids.some((id) => cuePose(id, performance.now() + 2000, false, 0, true).vis === 0)).toBe(true)
    galleryAnimStep(ids, 19)
    expect(ids.every((id) => cuePose(id, performance.now() + 2000, false).vis === 1)).toBe(true)
    clearCues()
  })
})

// ---------------------------------------------------------------- rigged bodies (docs/spec/30-figures.md section 7)
function glbJson(path: string): { nodes: { name?: string; mesh?: number; skin?: number }[]; meshes: { primitives: { attributes: Record<string, number> }[] }[]; accessors: { min?: number[]; max?: number[] }[]; skins?: { joints: number[] }[]; animations?: { name: string; channels: unknown[] }[] } {
  const buf = readFileSync(path)
  const len = buf.readUInt32LE(12)
  return JSON.parse(buf.subarray(20, 20 + len).toString('utf8'))
}

describe('rigged bodies', () => {
  const rigged = Object.entries(manifest.bodies).filter(([, b]) => b.rigged)

  it('every rigged GLB exists, is skinned, carries the six clips and keeps the base disc unskinned', () => {
    for (const [slug, b] of rigged) {
      const file = resolve(modelsDir, b.rigged!.replace(/^bodies\//, 'bodies/'))
      expect(existsSync(file), `${slug}: ${b.rigged}`).toBe(true)
      const g = glbJson(file)
      expect(g.skins?.length, slug).toBeGreaterThanOrEqual(1)
      expect(g.skins![0]!.joints.length, `${slug} joints`).toBeGreaterThanOrEqual(8)
      const names = (g.animations ?? []).map((a) => a.name)
      for (const c of ['idle', 'walk', 'shoot', 'melee', 'hit', 'death']) expect(names, `${slug} clip ${c}`).toContain(c)
      for (const a of g.animations ?? []) expect(a.channels.length, `${slug} ${a.name}`).toBeGreaterThan(0)
      // the figure mesh is skinned, the flat base disc is not
      const meshNodes = g.nodes.filter((n) => n.mesh !== undefined)
      const heightOf = (n: { mesh?: number }) => {
        const acc = g.accessors[g.meshes[n.mesh!]!.primitives[0]!.attributes.POSITION!]!
        return acc.max![1]! - acc.min![1]!
      }
      const tallest = meshNodes.reduce((a, n) => (heightOf(n) > heightOf(a) ? n : a))
      expect(tallest.skin, `${slug} figure mesh skinned`).toBeDefined()
      for (const n of meshNodes) if (heightOf(n) < 0.25 * heightOf(tallest)) expect(n.skin, `${slug} base disc unskinned`).toBeUndefined()
    }
  })
})
