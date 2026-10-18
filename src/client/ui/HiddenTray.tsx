// Tray of your own operatives that are out of the killzone (Wyrmblade HIDING). They are not drawn on the board, so
// they live here: a chip each, clickable to select (and to activate when the engine offers it). Only the seat(s)
// the viewer plays are shown: the opponent's hidden operatives never appear in the tray or on the board. With two
// bot seats (spectating) both trays show.
import type { Seat } from '@/engine'
import { clickOperative } from '../interaction/controller'
import { useDisplayState } from '../presentation/presentedStore'
import { useGame } from '../store/game'
import { Keyword } from './Keyword'
import { colors, fontStack, panel } from './theme'
import { Tooltip } from './Tooltip'
import { seatColor } from './widgets'

/** The seats whose hidden operatives this viewer may see. */
export function viewerSeats(seats: Record<Seat, 'human' | 'bot'>, acting: Seat | null): Seat[] {
  const humans = (['A', 'B'] as Seat[]).filter((s) => seats[s] === 'human')
  if (humans.length === 0) return ['A', 'B']
  if (humans.length === 1) return humans
  return [acting && seats[acting] === 'human' ? acting : humans[0]!]
}

export function HiddenTray() {
  const state = useDisplayState()
  const seats = useGame((g) => g.seats)
  const acting = useGame((g) => g.pending?.seat ?? null)
  if (!state) return null
  const show = viewerSeats(seats, acting)
  const hidden = Object.values(state.operatives).filter((o) => o.status === 'reserve' && o.offboard !== undefined && show.includes(o.seat))
  if (hidden.length === 0) return null
  return (
    <div
      data-testid="hidden-tray"
      style={{ ...panel, position: 'absolute', top: 62, left: 8, padding: '5px 8px', fontFamily: fontStack, fontSize: 12, pointerEvents: 'auto', zIndex: 18, maxWidth: 260 }}
    >
      <div style={{ color: colors.muted, marginBottom: 3 }}>
        <Keyword term="HIDING" /> (off the board)
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {hidden.map((o) => (
          <Tooltip key={o.id} title={`${o.name} is hiding`} body={`Out of the killzone. It still activates when it is ready${o.ready ? '' : ' (expended this turning point)'}; its only action is Emerge, which sets it up near your drop zone. If it is still hiding when turning point 2 ends, it is incapacitated.`}>
            <button
              data-testid={`hidden-${o.id}`}
              onClick={() => clickOperative(o.id)}
              style={{ border: `1px solid ${colors.border}`, borderLeft: `4px solid ${seatColor(o.seat)}`, background: 'transparent', color: o.ready ? colors.text : colors.muted, borderRadius: 4, padding: '2px 6px', cursor: 'pointer', font: 'inherit' }}
            >
              {o.name}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
