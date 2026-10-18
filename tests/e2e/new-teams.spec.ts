// The four M9 teams in a real battle through the client: each one (played by the normal AI in the bot seat) meets an
// existing team (played by the random bot through the human seat's auto-step), the game runs to turning point 3 without
// page errors or error toasts, and the battle is screenshotted to tools/out/screens/<team>.png. Wyrmblade also checks
// the HIDING control at set-up and the tray of hidden operatives (both seats' hidden operatives show: open information).
import { mkdirSync } from 'node:fs'
import { expect, test, type Page } from '@playwright/test'
import { screenshotRendered } from './helpers'

const OLD_TEAMS = ['aod', 'kom']
const NEW_TEAMS = ['pathfinders', 'hierotek-circle', 'plague-marines', 'wyrmblade'] as const

test.use({ viewport: { width: 1280, height: 720 } })

async function prepare(page: Page): Promise<string[]> {
  await page.addInitScript(() => {
    try {
      localStorage.setItem('murder-squad.settings.v1', JSON.stringify({ animSpeed: 'instant', lowGraphics: true }))
    } catch {
      /* storage unavailable */
    }
  })
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => {
    if (m.type() === 'error' && !/Failed to load resource|WebGL|GPU/i.test(m.text())) errors.push(m.text())
  })
  return errors
}

interface Progress {
  tp: number
  phase: string
  tokensSeen: string[]
  errorToasts: number
}

/** Answer the human seat with the random bot until the battle reaches `untilTp` (or ends); report what was seen on the way. */
async function playTo(page: Page, untilTp: number, onDecision?: () => Promise<boolean>): Promise<Progress> {
  const t0 = Date.now()
  const tokensSeen = new Set<string>()
  let errorToasts = 0
  let last = { tp: 0, phase: '' }
  while (Date.now() - t0 < 150_000) {
    const snap = await page.evaluate(() => {
      const ms = window.__ms!
      const s = ms.getState() as { phase: string; turningPoint: number; operatives: Record<string, { tokens?: { kind: string; count: number }[] }> }
      const toks: string[] = []
      for (const o of Object.values(s.operatives)) for (const t of o.tokens ?? []) if (t.count > 0) toks.push(t.kind)
      return { phase: s.phase, tp: s.turningPoint, toks, errors: ms.toasts().filter((t) => t.kind === 'error').length, mine: (ms.getPending() as { seat: string } | null)?.seat === 'A', settled: ms.settled() }
    })
    last = { tp: snap.tp, phase: snap.phase }
    for (const k of snap.toks) tokensSeen.add(k)
    errorToasts = Math.max(errorToasts, snap.errors)
    if (snap.phase === 'ended' || (snap.phase === 'firefight' && snap.tp >= untilTp && snap.settled && snap.mine)) break
    if (snap.mine && snap.settled) {
      if (onDecision && (await onDecision())) continue
      await page.evaluate(() => window.__ms!.autoStep())
    } else {
      await page.waitForTimeout(15)
    }
  }
  return { ...last, tokensSeen: [...tokensSeen], errorToasts }
}

for (const team of NEW_TEAMS) {
  test(`${team} plays a battle against an existing team and is screenshotted`, async ({ page }) => {
    test.setTimeout(240_000)
    const errors = await prepare(page)
    const foe = OLD_TEAMS[NEW_TEAMS.indexOf(team) % OLD_TEAMS.length]!
    await page.goto(`./?test=1&bot=normal&seats=human,bot&seed=nt-${team}&mission=secure&layout=01&teams=${foe},${team}&speed=instant`)
    await page.getByTestId('battle').waitFor()
    await page.waitForFunction(() => !!window.__ms?.getState())
    const p = await playTo(page, 3)
    expect(errors).toEqual([])
    expect(p.errorToasts).toBe(0)
    expect(p.phase === 'ended' || p.tp >= 3).toBe(true)
    if (team === 'pathfinders') expect(p.tokensSeen).toContain('pf.markerlight')
    if (team === 'plague-marines') expect(p.tokensSeen).toContain('pm.poison')
    // a token chip on the operative card: select an operative that carries one
    const carrier = await page.evaluate(() => {
      const s = window.__ms!.getState() as { operatives: Record<string, { id: string; status: string; tokens?: { count: number }[] }> }
      return Object.values(s.operatives).find((o) => o.status === 'active' && (o.tokens ?? []).some((t) => t.count > 0))?.id ?? null
    })
    if (carrier) {
      await page.evaluate((id) => (window.__ms!.ui() as { set(p: object): void }).set({ selectedOp: id }), carrier)
      await expect(page.getByTestId('card-tokens').first()).toBeVisible()
    }
    mkdirSync('tools/out/screens', { recursive: true })
    await screenshotRendered(page, `tools/out/screens/${team}.png`)
  })
}

test('wyrmblade: the set-up offers HIDING and hidden operatives wait in the tray (open information, the opponent sees them too)', async ({ page }) => {
  test.setTimeout(240_000)
  const errors = await prepare(page)
  await page.goto('./?test=1&bot=normal&seats=human,bot&seed=nt-hide&mission=secure&layout=01&teams=wyrmblade,aod&speed=instant')
  await page.getByTestId('battle').waitFor()
  await page.waitForFunction(() => !!window.__ms?.getState())
  let hid = 0
  // stop at the first firefight decision, while the hidden operatives are still hiding
  const p = await playTo(page, 1, async () => {
    const pend = await page.evaluate(() => window.__ms!.getPending() as { kind: string; context: { setAsideIds?: string[] } } | null)
    if (pend?.kind !== 'setup.deploy' || hid >= 2 || !(pend.context.setAsideIds ?? []).length) return false
    const id = pend.context.setAsideIds![0]!
    await expect(page.getByTestId('hiding-control')).toBeVisible()
    await page.getByTestId(`hide-op-${id}`).click()
    hid++
    return true
  })
  expect(errors).toEqual([])
  expect(p.errorToasts).toBe(0)
  expect(hid).toBe(2)
  // the opponent's operatives never go off the board; ours sit in the tray, which names them
  const status = await page.evaluate(() => {
    const s = window.__ms!.getState() as { operatives: Record<string, { seat: string; status: string; offboard?: string; name: string }> }
    const off = Object.values(s.operatives).filter((o) => o.offboard !== undefined)
    return { seats: [...new Set(off.map((o) => o.seat))], names: off.map((o) => o.name) }
  })
  expect(status.names).toHaveLength(2)
  expect(status.seats).toEqual(['A'])
  await expect(page.getByTestId('hidden-tray')).toBeVisible()
  await expect(page.getByTestId('hidden-tray')).toContainText(status.names[0]!)
  // the hidden operatives are not drawn on the board, and the HUD still counts the whole team
  await expect(page.getByTestId('hud-seat-A')).toContainText('14')
  mkdirSync('tools/out/screens', { recursive: true })
  await screenshotRendered(page, 'tools/out/screens/wyrmblade-hiding.png')
})
