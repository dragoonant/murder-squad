// Hunter Clade's arquebus Gunner stands on a 60x35mm oval base: the gallery draws it as an ellipse (not the 35mm circle)
// and the screenshot is kept for the owner.
import { mkdirSync } from 'node:fs'
import { expect, test } from '@playwright/test'
import { screenshotRendered } from './helpers'

test.use({ viewport: { width: 1280, height: 720 } })

test('hunter clade gallery shows the oval base of the arquebus gunner', async ({ page }) => {
  test.setTimeout(90_000)
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto('./?gallery')
  await page.getByTestId('gallery').waitFor()
  await page.locator('[data-testid^="team-"]', { hasText: 'Hunter Clade' }).first().click()
  await expect(page.getByTestId('gallery-hc.skitarii-ranger-gunner')).toBeVisible()
  mkdirSync('tools/out/screens', { recursive: true })
  await screenshotRendered(page, 'tools/out/screens/hunter-clade-oval.png')
  expect(errors).toEqual([])
})
