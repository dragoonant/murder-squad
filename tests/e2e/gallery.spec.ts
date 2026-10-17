// ?gallery: every body GLB loads, no console errors, placeholder weapons sit at the measured sockets.
import { expect, test } from '@playwright/test'
import { screenshotRendered } from './helpers'

test.use({ viewport: { width: 2200, height: 1250 } })

test('gallery loads every body GLB and draws sockets', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text())
  })
  page.on('pageerror', (e) => errors.push(String(e)))

  await page.goto('./?gallery')
  await page.getByTestId('gallery').waitFor()
  await page.waitForFunction(() => {
    const ms = window.__ms as unknown as { glbBodiesLoaded?: () => number } | undefined
    return (ms?.glbBodiesLoaded?.() ?? 0) >= 20
  }, undefined, { timeout: 60_000 })

  const stats = await page.evaluate(() => (window.__ms as unknown as { glbStats(p?: string): { loaded: number; failed: number; maxMs: number; totalMs: number } }).glbStats('bodies/'))
  console.log(`gallery bodies: ${JSON.stringify(stats)}`)
  expect(stats.loaded).toBeGreaterThanOrEqual(20)
  expect(stats.failed).toBe(0)

  await page.getByTestId('view-front').click()
  await screenshotRendered(page, 'e2e-out/gallery-01.png')

  await page.getByTestId('view-three-quarter').click()
  await page.getByTestId('toggle-sockets').click()
  await screenshotRendered(page, 'e2e-out/gallery-02.png')

  // team close-ups with sockets on, for the socket QC pass
  await page.getByTestId('team-0').click()
  await page.getByTestId('view-front').click()
  await screenshotRendered(page, 'e2e-out/gallery-03-team0-front.png')
  await page.getByTestId('view-three-quarter').click()
  await screenshotRendered(page, 'e2e-out/gallery-04-team0-3q.png')
  await page.getByTestId('team-1').click()
  await page.getByTestId('view-front').click()
  await screenshotRendered(page, 'e2e-out/gallery-05-team1-front.png')
  await page.getByTestId('view-three-quarter').click()
  await screenshotRendered(page, 'e2e-out/gallery-06-team1-3q.png')

  expect(errors).toEqual([])
})
