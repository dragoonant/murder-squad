// The green check / red X beside the mover: X undoes a step, X with nothing planned cancels the move, the check finishes it.
import { expect, test, type Page } from '@playwright/test'
import { boardPixel, pending, screenshotRendered, snapshot, startBattle } from './helpers'

test.use({ viewport: { width: 1000, height: 703 } })

const steps = (page: Page): Promise<number> => page.evaluate(() => (window.__ms!.ui() as { waypoints: unknown[] }).waypoints.length)

async function clickStep(page: Page, p: { x: number; z: number }): Promise<void> {
  const px = await boardPixel(page, p.x, 0, p.z)
  if (!px) return
  await page.mouse.move(px.x, px.y)
  await page.mouse.click(px.x, px.y)
  await page.waitForTimeout(80)
}

/** Lay two straight steps of under an inch each from A6 (two clicks that both land and form a legal path). */
async function layTwoSteps(page: Page): Promise<void> {
  const me = (await snapshot(page)).ops.find((o) => o.id === 'A6')!
  for (let k = 0; k < 8; k++) {
    for (let j = 0; j < 8; j++) {
      const a = { x: me.pos.x + Math.sin(k * 0.785) * 0.95, z: me.pos.z + Math.cos(k * 0.785) * 0.95 }
      const b = { x: a.x + Math.sin(j * 0.785) * 0.95, z: a.z + Math.cos(j * 0.785) * 0.95 }
      await clickStep(page, a)
      await clickStep(page, b)
      if ((await steps(page)) >= 2 && (await page.getByTestId('move-confirm').isEnabled())) return
      await page.evaluate(() => (window.__ms!.ui() as { resetPath(): void }).resetPath())
    }
  }
  throw new Error('no two-step path accepted')
}

async function openReposition(page: Page): Promise<void> {
  await startBattle(page, '?scenario=shoot-cover&speed=instant')
  await page.waitForFunction(() => window.__ms!.settled())
  await page.getByTestId('activate-A6').click()
  await page.getByTestId('order-engage').click()
  await page.getByTestId('act-reposition').click()
  await expect(page.getByTestId('move-total')).toBeVisible()
}

test('move buttons: X undoes steps then cancels the move; the check finishes it', async ({ page }) => {
  await openReposition(page)
  const move = await pending(page)
  expect(move?.kind).toBe('move.path')
  await expect(page.getByTestId('move-ok')).toBeDisabled()
  await expect(page.getByTestId('move-x')).toBeEnabled()

  await layTwoSteps(page)
  await expect(page.getByTestId('move-ok')).toBeEnabled()
  await expect(page.getByTestId('move-ok-left')).toContainText('left')
  if (process.env.MC_SHOT) await screenshotRendered(page, process.env.MC_SHOT)

  const before = await steps(page)
  await page.getByTestId('move-x').click()
  expect(await steps(page)).toBe(before - 1)
  expect((await pending(page))?.id).toBe(move!.id)
  // pressing the button must not have laid a step on the board
  await page.getByTestId('move-x').click()
  expect(await steps(page)).toBe(0)
  expect((await pending(page))?.id).toBe(move!.id)

  // nothing planned: X cancels the move and the action choice comes back
  await page.getByTestId('move-x').click()
  await expect.poll(async () => (await pending(page))?.kind).toBe('firefight.action')

  // and the check confirms a path
  await page.getByTestId('act-reposition').click()
  await expect(page.getByTestId('move-total')).toBeVisible()
  await layTwoSteps(page)
  await page.getByTestId('move-ok').click()
  await expect.poll(async () => (await pending(page))?.kind !== 'move.path').toBe(true)
})
