// Side panels of the battle screen: operative card, event feed, dice log, mission panel, settings. On the
// compact (phone) layout they become right-edge drawers opened from the HUD menu; on desktop they stack in
// two columns. All numbers are read from the DISPLAY state.
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import type { DatacardData } from '@/data'
import type { Seat } from '@/engine'
import { effectiveApl } from '@/engine/state'
import { killStatus, mission } from '../game/kill'
import { dataBundle } from '../game/adapter'
import { humanize, SEAT_NAME } from '../game/labels'
import { useFeedStore } from '../presentation/feedStore'
import { useDisplayState } from '../presentation/presentedStore'
import { useSettings, type AnimSpeed } from '../presentation/settings'
import { useGame } from '../store/game'
import { useSession } from '../store/session'
import { useFormFactor } from './formFactor'
import { colors, fontStack, panel } from './theme'
import { Tooltip } from './Tooltip'
import { useUi, type DrawerId } from './uiStore'
import { Btn, Die, Dot, Muted, seatColor } from './widgets'

const drawerStyle: CSSProperties = {
  ...panel,
  position: 'absolute',
  top: 60,
  right: 0,
  bottom: 0,
  width: 'min(330px, 60vw)',
  borderRadius: '10px 0 0 10px',
  background: colors.bgSolid,
  padding: 10,
  boxSizing: 'border-box',
  overflowY: 'auto',
  pointerEvents: 'auto',
  zIndex: 50,
  fontFamily: fontStack,
}

const floatStyle: CSSProperties = { ...panel, padding: 10, boxSizing: 'border-box', pointerEvents: 'auto', fontFamily: fontStack, overflowY: 'auto' }

/** One panel: a drawer on compact, a floating box on desktop. `open` is the desktop visibility. */
export function PanelBox({ id, title, testId, open, children, style }: { id: DrawerId; title: string; testId: string; open: boolean; children: ReactNode; style?: CSSProperties }) {
  const compact = useFormFactor().compact
  const drawer = useUi((s) => s.drawer)
  if (compact) {
    if (drawer !== id) return null
    return (
      <div data-testid={testId} style={drawerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <b>{title}</b>
          <Btn onClick={() => useUi.setState({ drawer: null })} style={{ minHeight: 36 }}>
            Close
          </Btn>
        </div>
        {children}
      </div>
    )
  }
  if (!open) return null
  return (
    <div data-testid={testId} style={{ ...floatStyle, ...style }}>
      <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 6 }}>{title}</div>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------- operative card

function rulesText(rules: { rule: string; x?: number; inches?: number; target?: number }[]): string {
  return rules
    .map((r) => {
      const val = r.inches !== undefined ? `${r.inches}″` : r.x !== undefined ? String(r.x) : r.target !== undefined ? `${r.target}+` : ''
      return `${humanize(r.rule)}${val ? ` ${val}` : ''}`
    })
    .join(', ')
}

export function OperativeCard() {
  const state = useDisplayState()
  const selected = useUi((s) => s.selectedOp)
  const hover = useUi((s) => s.hoverOp)
  const id = selected ?? hover
  const op = id && state ? state.operatives[id] : null
  const compactDrawer = useFormFactor().compact
  if (!state || !op) return null
  const card = dataBundle().byId[op.datacardId] as DatacardData | undefined
  const weapons = op.weapons.map((w) => state.data.weapons[w]).filter(Boolean)
  const body = (
    <div data-testid="operative-card" data-op={op.id}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <Dot seat={op.seat} />
        <b style={{ fontSize: 14 }}>{op.name}</b>
        <span style={{ color: colors.muted, fontSize: 12 }}>{op.id}</span>
      </div>
      <div style={{ fontSize: 12, display: 'flex', flexWrap: 'wrap', gap: '2px 12px', marginBottom: 6 }}>
        <span>
          Wounds <b>{op.wounds}/{op.maxWounds}</b>
        </span>
        <span>
          APL <b>{effectiveApl(op)}</b>
        </span>
        <span>
          Move <b>{op.move}&Prime;</b>
        </span>
        <span>
          Save <b>{op.save}+</b>
        </span>
        <span>
          <b>{humanize(op.order)}</b> &middot; {op.ready ? 'ready' : 'expended'}
        </span>
        {op.flags.guard && <b style={{ color: colors.accent }}>On Guard</b>}
        {op.flags.injured && <b style={{ color: colors.danger }}>Injured</b>}
      </div>
      <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ color: colors.muted, textAlign: 'left' }}>
            <th>Weapon</th>
            <th>A</th>
            <th>Hit</th>
            <th>Dmg</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map((w) => (
            <tr key={w!.id} style={{ borderTop: `1px solid ${colors.border}` }}>
              <td style={{ padding: '2px 0' }}>
                <Tooltip title={w!.name} body={w!.rules.length ? rulesText(w!.rules) : 'No special rules.'}>
                  <span>
                    {w!.name}
                    {w!.type === 'melee' ? ' (melee)' : ''}
                  </span>
                </Tooltip>
              </td>
              <td>{w!.atk}</td>
              <td>{w!.hit}+</td>
              <td>
                {w!.dmg.normal}/{w!.dmg.crit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {card && <Muted style={{ marginTop: 6 }}>{card.keywords.slice(0, 5).join(' · ')}</Muted>}
    </div>
  )
  if (compactDrawer) {
    return (
      <div style={{ ...floatStyle, position: 'absolute', top: 60, right: 8, width: 230, zIndex: 30 }}>
        {body}
      </div>
    )
  }
  return (
    <div style={{ ...floatStyle, position: 'absolute', top: 66, right: 8, width: 290, maxHeight: '50vh', zIndex: 20 }}>
      {body}
    </div>
  )
}

// ---------------------------------------------------------------- feed + dice

export function EventFeed() {
  const feed = useFeedStore((s) => s.feed)
  const panels = useUi((s) => s.panels)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (el) el.scrollTop = el.scrollHeight
  }, [feed.length])
  return (
    <PanelBox id="feed" title="Event feed" testId="event-feed-panel" open={panels.feed} style={{ maxHeight: '28vh' }}>
      <div ref={ref} data-testid="event-feed" style={{ maxHeight: 'calc(28vh - 40px)', overflowY: 'auto', fontSize: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {feed.length === 0 && <Muted>Nothing yet.</Muted>}
        {feed.slice(-80).map((f) => (
          <div key={f.id} style={{ borderLeft: `3px solid ${f.seat ? seatColor(f.seat) : colors.border}`, paddingLeft: 6 }}>
            {f.text}
          </div>
        ))}
      </div>
    </PanelBox>
  )
}

export function DiceLog() {
  const dice = useFeedStore((s) => s.dice)
  const panels = useUi((s) => s.panels)
  return (
    <PanelBox id="log" title="Dice log" testId="dice-log-panel" open={panels.log} style={{ maxHeight: '24vh' }}>
      <div data-testid="dice-log" style={{ maxHeight: 'calc(24vh - 40px)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {dice.length === 0 && <Muted>No rolls yet.</Muted>}
        {dice.slice(-30).map((d) => (
          <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
            <Dot seat={d.seat ?? 'A'} />
            <span style={{ width: 120, color: colors.muted }}>{humanize(d.purpose)}</span>
            {d.dice.map((n, i) => (
              <Die key={i} n={n} small kind={d.kinds?.[i]} />
            ))}
          </div>
        ))}
      </div>
    </PanelBox>
  )
}

// ---------------------------------------------------------------- mission panel

export function MissionPanel() {
  const state = useDisplayState()
  const meta = useGame((g) => g.meta)
  const panels = useUi((s) => s.panels)
  if (!state || !meta) return null
  const def = meta.mission
  const view = mission(state)
  return (
    <PanelBox id="mission" title={def.name} testId="mission-panel" open={panels.mission} style={{ maxHeight: '34vh' }}>
      <div style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Muted>{def.text}</Muted>
        {view && (
          <div data-testid="mission-crit">
            Crit op: <b>{humanize(view.critOp)}</b> &middot; map {view.mapId}
          </div>
        )}
        {(['A', 'B'] as const).map((seat) => {
          const k = killStatus(state, seat)
          return (
            <div key={seat} data-testid={`mission-kill-${seat}`}>
              <Dot seat={seat} />
              <b>{SEAT_NAME[seat]}</b>: kill grade <b>{k.grade}</b>/5 ({k.kills} down; grades at {k.thresholds.join(', ') || 'n/a'}
              {k.next !== null ? `; next at ${k.next}` : ''})
            </div>
          )
        })}
        {view && view.markers.length > 0 && (
          <div data-testid="mission-markers">
            {view.markers.map((k) => (
              <div key={k.id}>
                {humanize(k.id)}: {k.controller ? `${SEAT_NAME[k.controller]} controls` : 'uncontrolled'}
                {k.securedBy ? `, secured by ${SEAT_NAME[k.securedBy]}` : ''}
                {k.transmitting ? ', transmitting' : ''}
                {k.looted ? ', looted' : ''}
                {k.contesting.A.length + k.contesting.B.length > 0 ? ` (${k.contesting.A.length} vs ${k.contesting.B.length} contesting)` : ''}
              </div>
            ))}
          </div>
        )}
        <Muted>
          Layout {meta.layoutId.replace('kz.', '')} &middot; seed {meta.seed}
        </Muted>
      </div>
    </PanelBox>
  )
}

// ---------------------------------------------------------------- settings

const SPEEDS: { id: AnimSpeed; label: string }[] = [
  { id: 'normal', label: 'Normal' },
  { id: 'fast', label: 'Fast' },
  { id: 'instant', label: 'Instant' },
]

export function SettingsPanel() {
  const speed = useSettings((s) => s.animSpeed)
  const low = useSettings((s) => s.lowGraphics)
  const drawer = useUi((s) => s.drawer)
  const state = useGame((g) => g.state)
  if (drawer !== 'settings') return null
  return (
    <div data-testid="settings-panel" style={{ ...drawerStyle, top: 60, zIndex: 60 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <b>Settings</b>
        <Btn onClick={() => useUi.setState({ drawer: null })}>Close</Btn>
      </div>
      <div style={{ fontSize: 12, marginBottom: 4 }}>Animation speed</div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        {SPEEDS.map((s) => (
          <Btn key={s.id} data-testid={`speed-${s.id}`} variant={speed === s.id ? 'active' : 'base'} onClick={() => useSettings.getState().setAnimSpeed(s.id)}>
            {s.label}
          </Btn>
        ))}
      </div>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, marginBottom: 10 }}>
        <input data-testid="low-graphics" type="checkbox" checked={low} onChange={(e) => useSettings.getState().setLowGraphics(e.target.checked)} />
        Low graphics (no shadows, smaller mat texture)
      </label>
      <div style={{ fontSize: 12, marginBottom: 4 }}>Camera</div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        <Btn onClick={() => useUi.getState().requestCamera('home')}>Overview</Btn>
        <Btn onClick={() => useUi.getState().requestCamera('top')}>Top-down</Btn>
      </div>
      <Muted style={{ marginBottom: 10 }}>Right-drag orbit, middle-drag or WASD pan, wheel zoom. Two fingers on touch.</Muted>
      <div style={{ display: 'flex', gap: 6 }}>
        <Btn
          data-testid="btn-resign"
          variant="danger"
          disabled={!state || state.phase === 'ended'}
          onClick={() => {
            const g = useGame.getState()
            if (g.pending) g.dispatch({ type: 'resign', seat: g.pending.seat, decisionId: g.pending.id, payload: {} })
          }}
        >
          Resign
        </Btn>
        <Btn data-testid="btn-menu" onClick={() => useSession.getState().backToMenu()}>
          Quit to menu
        </Btn>
      </div>
    </div>
  )
}
