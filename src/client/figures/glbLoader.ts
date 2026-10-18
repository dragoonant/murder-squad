// Loads each figure GLB at most once (module-level cache) WITHOUT suspending: callers get `null` until it is
// ready (or forever if it failed) and keep drawing the procedural stand-in meanwhile. Geometry and materials
// are shared by every instance; only the node tree is cloned. The loader is meshopt-aware (GLBs are
// compressed by tools/models/optimize.mjs).
import { useEffect, useMemo, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, type AnimationClip, type Object3D, type SkinnedMesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js'

type Entry = { status: 'loading' | 'ready' | 'failed'; scene?: Object3D; animations?: AnimationClip[]; t0: number; ms?: number }
const cache = new Map<string, Entry>()
const listeners = new Set<() => void>()

export const glbUrl = (slug: string) => `${import.meta.env.BASE_URL}assets/models/${slug}.glb`

function request(slug: string): Entry {
  const hit = cache.get(slug)
  if (hit) return hit
  const entry: Entry = { status: 'loading', t0: performance.now() }
  cache.set(slug, entry)
  try {
    const loader = new GLTFLoader()
    loader.setMeshoptDecoder(MeshoptDecoder)
    void loader
      .loadAsync(glbUrl(slug))
      .then((gltf) => {
        gltf.scene.traverse((o) => {
          if ((o as Mesh).isMesh) (o as Mesh).castShadow = true
          // a skinned mesh's bounds move with its bones; cull by hand (never) instead of popping mid-clip
          if ((o as SkinnedMesh).isSkinnedMesh) o.frustumCulled = false
        })
        entry.scene = gltf.scene
        entry.animations = gltf.animations
        entry.status = 'ready'
        entry.ms = performance.now() - entry.t0
      })
      .catch(() => {
        entry.status = 'failed'
        entry.ms = performance.now() - entry.t0
      })
      .finally(() => listeners.forEach((l) => l()))
  } catch {
    entry.status = 'failed'
  }
  return entry
}

/** A private node-tree clone of the slug's GLB, or null while loading / if unavailable / when slug is undefined. */
export function useGlbInstance(slug: string | undefined): Object3D | null {
  const invalidate = useThree((s) => s.invalidate)
  const [, setTick] = useState(0)
  const entry = slug ? request(slug) : undefined
  useEffect(() => {
    if (!slug) return
    const l = () => {
      setTick((n) => n + 1)
      invalidate()
    }
    listeners.add(l)
    return () => {
      listeners.delete(l)
    }
  }, [slug, invalidate])
  const scene = entry?.status === 'ready' ? entry.scene : undefined
  return useMemo(() => (scene ? cloneSkinned(scene) : null), [scene])
}

/** A private clone plus the file's animation clips (skinned bodies), or null while loading / unavailable. */
export function useGlbAnimated(slug: string | undefined): { obj: Object3D; clips: AnimationClip[] } | null {
  const obj = useGlbInstance(slug)
  const clips = slug ? cache.get(slug)?.animations : undefined
  return useMemo(() => (obj ? { obj, clips: clips ?? [] } : null), [obj, clips])
}

/** True once the slug's GLB finished loading successfully (no request is started). */
export const glbReady = (slug: string | undefined): boolean => !!slug && cache.get(slug)?.status === 'ready'

/** Load counters for slugs starting with `prefix` (e.g. 'bodies/'); `maxMs` is the slowest finished load. */
export function glbStats(prefix = ''): { loaded: number; failed: number; loading: number; maxMs: number; totalMs: number } {
  let loaded = 0
  let failed = 0
  let loading = 0
  let maxMs = 0
  let totalMs = 0
  for (const [slug, e] of cache) {
    if (!slug.startsWith(prefix)) continue
    if (e.status === 'ready') loaded++
    else if (e.status === 'failed') failed++
    else loading++
    if (e.ms !== undefined) {
      maxMs = Math.max(maxMs, e.ms)
      totalMs += e.ms
    }
  }
  return { loaded, failed, loading, maxMs: Math.round(maxMs), totalMs: Math.round(totalMs) }
}
