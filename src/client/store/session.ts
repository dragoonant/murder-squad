// Menu-flow store: which screen is showing and the pre-game configuration (seats, teams, mission, layout,
// seed, rosters). The game itself lives in store/game.ts; this store only hands it a NewGameOptions.
import { create } from 'zustand'
import type { Seat } from '@/engine'
import { dataBundle, type SeatBuild } from '../game/adapter'
import { defaultBuild, layoutList, missionList, resolveLayout, resolveMission, resolveTeam, teamList } from '../game/defaults'
import type { SeatMode, UrlParams } from '../params'
import { useGame } from './game'

export type Screen = 'start' | 'builder' | 'briefing' | 'battle'

export interface Session {
  screen: Screen
  seats: Record<Seat, SeatMode>
  seed: string
  missionId: string
  layoutId: string
  /** 'auto' lets the seed roll the map */
  mapId: string
  builds: Record<Seat, SeatBuild>
  builderSeat: Seat
  setScreen(s: Screen): void
  setSeat(seat: Seat, mode: SeatMode): void
  setSeed(seed: string): void
  setMission(id: string): void
  setLayout(id: string): void
  setMap(id: string): void
  setTeam(seat: Seat, teamId: string): void
  setBuild(seat: Seat, build: SeatBuild): void
  setBuilderSeat(seat: Seat): void
  launch(): void
  backToMenu(): void
}

export function randomSeed(): string {
  return `ms-${Math.floor(Math.random() * 1_000_000).toString(36)}`
}

function initial(): Pick<Session, 'seats' | 'seed' | 'missionId' | 'layoutId' | 'mapId' | 'builds' | 'builderSeat'> {
  const b = dataBundle()
  const teams = teamList(b)
  const tA = teams[0]!
  const tB = teams[1] ?? teams[0]!
  return {
    seats: { A: 'human', B: 'bot' },
    seed: randomSeed(),
    missionId: missionList(b)[0]!.id,
    layoutId: layoutList(b)[0]!.id,
    mapId: 'auto',
    builds: { A: defaultBuild(b, tA), B: defaultBuild(b, tB) },
    builderSeat: 'A',
  }
}

export const useSession = create<Session>((set, get) => ({
  screen: 'start',
  ...initial(),
  setScreen: (screen) => set({ screen }),
  setSeat: (seat, mode) => set((s) => ({ seats: { ...s.seats, [seat]: mode } })),
  setSeed: (seed) => set({ seed }),
  setMission: (missionId) => set({ missionId }),
  setLayout: (layoutId) => set({ layoutId }),
  setMap: (mapId) => set({ mapId }),
  setTeam: (seat, teamId) =>
    set((s) => {
      const b = dataBundle()
      return { builds: { ...s.builds, [seat]: defaultBuild(b, b.teams[teamId]!) } }
    }),
  setBuild: (seat, build) => set((s) => ({ builds: { ...s.builds, [seat]: build } })),
  setBuilderSeat: (builderSeat) => set({ builderSeat }),
  launch() {
    const s = get()
    useGame.getState().newGame({
      builds: s.builds,
      seats: s.seats,
      seed: s.seed,
      missionId: s.missionId,
      layoutId: s.layoutId,
      mapId: s.mapId === 'auto' ? null : s.mapId,
    })
    set({ screen: 'battle' })
  },
  backToMenu() {
    useGame.getState().reset()
    set({ screen: 'start' })
  },
}))

/** ?test=1: skip the menus. Default rosters, chosen teams/mission/layout/seats/seed, straight to the battle. */
export function startFromParams(p: UrlParams): void {
  const b = dataBundle()
  const teams = teamList(b)
  const tA = resolveTeam(b, p.teams?.[0], 0)
  const tB = resolveTeam(b, p.teams?.[1], teams.length > 1 ? 1 : 0)
  const mission = resolveMission(b, p.mission)
  const layout = resolveLayout(b, p.layout)
  useSession.setState({
    seats: { A: p.seats[0], B: p.seats[1] },
    seed: p.seed ?? 'test',
    missionId: mission.id,
    layoutId: layout.id,
    mapId: p.map ?? 'auto',
    builds: { A: defaultBuild(b, tA), B: defaultBuild(b, tB) },
  })
  useSession.getState().launch()
}
