// On-board move buttons: a green check (finish the move) and a red X (undo the last step; with nothing planned,
// cancel the move) hang just below the planned end of the path while a human seat lays a `move.path`. They send exactly
// what the prompt's Confirm / Undo step / Cancel send (`confirmPath`, `undoOrCancelPath`); the inches left on the
// check are the engine plan's number. The prompt's own buttons stay as the fallback.
import type { CSSProperties, HTMLAttributes, SyntheticEvent } from 'react'
import { Html } from '@react-three/drei'
import type { GameState, PendingDecision } from '@/engine'
import { useUi } from '../ui/uiStore'
import { useFormFactor } from '../ui/formFactor'
import { Tooltip } from '../ui/Tooltip'
import { colors, fontStack } from '../ui/theme'
import { confirmPath, moveButtons, undoOrCancelPath } from './controller'

/** Keep a press on a button from reaching the board (no stray step added). */
const stop = (e: SyntheticEvent) => e.stopPropagation()

type Hover = Pick<HTMLAttributes<HTMLButtonElement>, 'onPointerEnter' | 'onPointerLeave' | 'onFocus' | 'onBlur' | 'aria-describedby'>

// The Tooltip clones its child and hands it hover / focus handlers, so the button forwards them.
function Round({ testId, label, color, size, disabled, onClick, children, ...hover }: Hover & { testId: string; label: string; color: string; size: number; disabled: boolean; onClick: () => void; children: string }) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: '2px solid rgba(255,255,255,0.85)',
    background: color,
    color: '#fff',
    font: `800 ${Math.round(size * 0.5)}px ${fontStack}`,
    lineHeight: 1,
    display: 'grid',
    placeItems: 'center',
    padding: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    boxShadow: '0 2px 10px rgba(0,0,0,0.6)',
    touchAction: 'manipulation',
  }
  return (
    <button
      {...hover}
      type="button"
      data-testid={testId}
      aria-label={label}
      disabled={disabled}
      tabIndex={-1}
      style={style}
      onMouseDown={(e) => e.preventDefault()}
      onClick={(e) => {
        stop(e)
        onClick()
      }}
    >
      {children}
    </button>
  )
}

export function MoveConfirm({ state, pending }: { state: GameState; pending: PendingDecision }) {
  const waypoints = useUi((s) => s.waypoints)
  const facing = useUi((s) => s.facing)
  const fly = useUi((s) => s.fly)
  const note = useUi((s) => s.routeNote)
  const { touch } = useFormFactor()
  const b = moveButtons(state, pending, { waypoints, facing, fly })
  if (!b) return null
  const size = touch ? 44 : 36
  const okTip = b.okEnabled ? 'Finish the move' : 'Lay a legal path to finish the move'
  const xTip = b.x === 'undo' ? 'Undo last step' : 'Cancel the move'
  return (
    <Html position={[b.anchor.x, b.anchor.y + 0.4, b.anchor.z]} zIndexRange={[30, 20]}>
      <div
        data-testid="move-confirm-buttons"
        onPointerDown={stop}
        onPointerUp={stop}
        onPointerMove={stop}
        onClick={stop}
        onWheel={stop}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, transform: `translate(-50%, ${touch ? 22 : 16}px)`, pointerEvents: 'auto' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Tooltip title={okTip} placement="top" disabled={touch} wrap={!b.okEnabled}>
            <Round testId="move-ok" label={okTip} color="#1f9d4a" size={size} disabled={!b.okEnabled} onClick={() => confirmPath()}>
              ✓
            </Round>
          </Tooltip>
          <Tooltip title={xTip} placement="top" disabled={touch} wrap={!b.xEnabled}>
            <Round testId="move-x" label={xTip} color="#c62828" size={size} disabled={!b.xEnabled} onClick={() => undoOrCancelPath()}>
              ✗
            </Round>
          </Tooltip>
        </div>
        {b.left !== null && (
          <span
            data-testid="move-ok-left"
            style={{ whiteSpace: 'nowrap', background: 'rgba(8,8,14,0.85)', color: colors.text, font: `700 11px ${fontStack}`, padding: '1px 5px', borderRadius: 4, pointerEvents: 'none' }}
          >
            {b.left}″ left
          </span>
        )}
        {note && (
          <span
            data-testid="move-route-toast"
            role="status"
            style={{ whiteSpace: 'nowrap', background: 'rgba(60,20,10,0.92)', color: '#ffcc80', font: `700 12px ${fontStack}`, padding: '2px 7px', borderRadius: 4, border: '1px solid #ff8a6588', pointerEvents: 'none' }}
          >
            {note}
          </span>
        )}
      </div>
    </Html>
  )
}
