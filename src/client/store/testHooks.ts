// window.__ms (docs/spec/50-client.md section 4): test hooks installed when ?test=1 (or ?gallery/?debug).
// Read-only views of the store plus `dispatch`; the store remains the only step caller.
import { suggestPlacement, type Action } from '@/engine'
import { cameraApi } from '../board/cameraApi'
import { currentParams } from '../params'
import { useAnnouncementStore } from '../presentation/announceStore'
import { usePresentedStore } from '../presentation/presentedStore'
import { useUi } from '../ui/uiStore'
import { useGame } from './game'
import { useSession } from './session'

export interface MsHooks {
  getState(): unknown
  getPending(): unknown
  legal(): Action[] | null
  dispatch(action: Action): unknown
  choose(optionId: string): unknown
  params(): unknown
  /** presentation caught up with the engine and no banner is showing */
  settled(): boolean
  /** a legal deploy spot for the pending setup.deploy (engine suggestPlacement) with its page pixel */
  suggestSpot(skip?: number): { operativeId: string; x: number; y: number; z: number; px: number; py: number } | null
  project(x: number, y: number, z: number): { x: number; y: number } | null
  camera: typeof cameraApi
  session(): unknown
  ui(): unknown
}

declare global {
  interface Window {
    __ms?: MsHooks
  }
}

export function installTestHooks(): void {
  if (typeof window === 'undefined') return
  const p = currentParams()
  if (!p.test && !p.gallery && !new URLSearchParams(location.search).has('debug')) return
  window.__ms = {
    getState: () => useGame.getState().state,
    getPending: () => useGame.getState().pending,
    legal: () => useGame.getState().legal,
    dispatch: (a) => useGame.getState().dispatch(a),
    choose: (id) => useGame.getState().choose(id),
    params: () => p,
    settled: () => {
      const s = usePresentedStore.getState()
      return s.presentedSeq >= s.latestSeq && useAnnouncementStore.getState().current === null
    },
    suggestSpot: (skip = 0) => {
      const { state, pending } = useGame.getState()
      if (!state || !pending || pending.kind !== 'setup.deploy') return null
      const picked = useUi.getState().deployOp
      const ids = pending.constraints?.operativeIds ?? []
      const id = picked && ids.includes(picked) ? picked : ids[0]
      const spot = suggestPlacement(state, pending, id, skip)
      if (!spot) return null
      const px = cameraApi.current?.project(spot.x, spot.y, spot.z)
      return { ...spot, px: px?.x ?? -1, py: px?.y ?? -1 }
    },
    project: (x, y, z) => cameraApi.current?.project(x, y, z) ?? null,
    camera: cameraApi,
    session: () => useSession.getState(),
    ui: () => useUi.getState(),
  }
}
