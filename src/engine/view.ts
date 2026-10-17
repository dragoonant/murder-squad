// Per-seat redacted view (frozen after M2). Kill Team hides almost nothing; M2a is a pass-through
// minus the RNG state and the action log. TODO(M2b): hide opponent equipment markers (Mines) until triggered.
import type { GameState, PlayerView, Seat } from './types'

export function view(state: GameState, seat: Seat): PlayerView {
  const { rng: _rng, log: _log, ...rest } = state
  return { ...rest, viewer: seat }
}
