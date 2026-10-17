// Shared e2e helpers: start a battle through the test URL parameters, wait for the presentation to settle,
// and take a screenshot only once the demand-driven canvas has actually been drawn.
import type { Page } from '@playwright/test'

export const TEST_QUERY = '?test=1&seats=human,bot&seed=e2e-1&mission=secure&layout=01&teams=aod,kom&speed=instant'

export async function startBattle(page: Page, query = TEST_QUERY): Promise<void> {
  await page.goto(`./${query}`)
  await page.getByTestId('battle').waitFor()
  await page.waitForFunction(() => !!window.__ms?.getState())
}

export interface Pending {
  id: string
  seat: 'A' | 'B'
  kind: string
  canPass: boolean
  options?: { id: string; action: { type: string; payload: Record<string, unknown> } }[]
  constraints?: { operativeId?: string; operativeIds?: string[]; maxInches?: number; kind?: string }
  context: Record<string, unknown>
}

export async function pending(page: Page): Promise<Pending | null> {
  return page.evaluate(() => (window.__ms?.getPending() as Pending | null) ?? null)
}

/** True when the presentation has caught up and a prompt for the human seat is on screen. */
export async function humanTurn(page: Page): Promise<Pending | null> {
  const p = await pending(page)
  if (!p || p.seat !== 'A') return null
  const settled = await page.evaluate(() => window.__ms?.settled() ?? false)
  return settled ? p : null
}

/** Wait until the human seat has a settled decision (or the battle is over); returns it. */
export async function nextHumanDecision(page: Page, afterId: string | null, timeoutMs = 20_000): Promise<Pending | null> {
  const t0 = Date.now()
  while (Date.now() - t0 < timeoutMs) {
    const over = await page.evaluate(() => (window.__ms?.getState() as { phase?: string } | null)?.phase === 'ended')
    if (over) return null
    const p = await humanTurn(page)
    if (p && p.id !== afterId) {
      await page.getByTestId('decision-prompt').waitFor({ timeout: 5000 })
      return p
    }
    await page.waitForTimeout(40)
  }
  throw new Error(`no human decision after ${afterId} within ${timeoutMs}ms`)
}

/** A canvas pixel for a world point that is not covered by any DOM panel (so a click reaches the board). */
export async function boardPixel(page: Page, x: number, y: number, z: number): Promise<{ x: number; y: number } | null> {
  return page.evaluate(
    ([wx, wy, wz]) => {
      const p = window.__ms?.project(wx!, wy!, wz!)
      if (!p) return null
      const el = document.elementFromPoint(p.x, p.y)
      return el && el.tagName === 'CANVAS' ? p : null
    },
    [x, y, z] as const,
  )
}

/** Screenshot that waits for the board to be drawn: the canvas uses a demand-driven frame loop, so a shot taken
 *  right after a layout change can catch a cleared canvas. Nudges a repaint, lets two animation frames pass and
 *  retries when the PNG is implausibly small for a 3D scene. */
export async function screenshotRendered(page: Page, path: string, minBytes = 60_000): Promise<void> {
  for (let i = 0; i < 6; i++) {
    await page.evaluate(() => {
      window.__ms?.camera.current?.repaint()
      return new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())))
    })
    await page.waitForTimeout(250 + i * 250)
    const buf = await page.screenshot({ path })
    if (buf.length >= minBytes) return
  }
}
