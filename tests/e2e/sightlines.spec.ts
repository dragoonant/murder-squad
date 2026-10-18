// Sight-line tools: the move preview evaluates the planned end point (visible / cover / obscured / unseen, valid target,
// expected damage, distance), the threat view shows who could hit the operative there on Engage vs Conceal, and the
// measure tool (M) reads distances and sight both ways without touching the game. Fixtures: shoot-cover, vantage.
import { expect, test, type Page } from '@playwright/test'
import { boardPixel, screenshotRendered, startBattle } from './helpers'

interface Pt {
  x: number
  z: number
}

async function seq(page: Page): Promise<number> {
  return page.evaluate(() => (window.__ms!.getState() as { seq: number }).seq)
}

/** Activate A6 on Engage and open its Reposition path prompt. */
async function openReposition(page: Page, query: string): Promise<void> {
  await startBattle(page, query)
  await page.waitForFunction(() => window.__ms!.settled())
  await page.getByTestId('activate-A6').click()
  await page.getByTestId('order-engage').click()
  await page.getByTestId('act-reposition').click()
  await expect(page.getByTestId('move-total')).toBeVisible()
}

/** Click the first candidate end point the engine accepts as a path (a staged, unconfirmed move). Returns it. */
async function stagePath(page: Page, y: number, candidates: Pt[], click: (p: { x: number; y: number }) => Promise<void>): Promise<Pt> {
  for (const p of candidates) {
    const px = await boardPixel(page, p.x, y, p.z)
    if (!px) continue
    await page.mouse.move(px.x, px.y)
    await click(px)
    await page.waitForTimeout(80)
    if (await page.getByTestId('move-confirm').isEnabled()) return p
    await page.evaluate(() => (window.__ms!.ui() as { resetPath(): void }).resetPath())
  }
  throw new Error('no end point accepted')
}

const SHOOT_COVER_ENDS: Pt[] = [
  { x: -5, z: 3.5 },
  { x: -6, z: 2.5 },
  { x: -4, z: 5.2 },
  { x: -5.5, z: 6 },
  { x: -7, z: 3 },
]

test('shoot-cover: the staged move shows what the end point sees, badges, panel, threat on Engage vs Conceal', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await openReposition(page, '?scenario=shoot-cover&speed=instant')

  // before any path: the mover is evaluated where it stands
  await expect(page.getByTestId('sight-panel')).toBeVisible()
  await expect(page.getByTestId('sight-where')).toContainText('where it stands')

  const seq0 = await seq(page)
  await stagePath(page, 0, SHOOT_COVER_ENDS, async (p) => page.mouse.click(p.x, p.y))
  await expect(page.getByTestId('sight-where')).toContainText('planned end point')

  // every enemy is listed with the engine's verdict; the Grot and the Boy are targets, the Breacha Boy in cover on Conceal is not
  const list = page.getByTestId('sight-list')
  await expect(list.getByTestId('sight-row-B11')).toBeVisible()
  const rows = await list.locator('[data-testid^="sight-row-"]').evaluateAll((els) =>
    els.map((e) => ({ id: e.getAttribute('data-testid')!.replace('sight-row-', ''), status: e.getAttribute('data-status')!, text: e.textContent ?? '', dmg: e.querySelector('[data-testid^="sight-dmg-"]')?.textContent ?? '' })),
  )
  expect(rows.length).toBe(11)
  const byId = Object.fromEntries(rows.map((r) => [r.id, r]))
  expect(['valid', 'cover', 'obscured']).toContain(byId.B11!.status)
  expect(byId.B3!.text).toMatch(/\d+\.\d″/)
  expect(rows.some((r) => r.status === 'unseen')).toBe(true)
  // sorted by expected damage, high to low (rows without a number sit last)
  const nums = rows.map((r) => {
    const m = /^(\d+\.\d) dmg$/.exec(r.dmg)
    return m ? Number(m[1]) : -1
  })
  expect(nums).toEqual([...nums].sort((a, b) => b - a))
  expect(nums[0]).toBeGreaterThan(0)
  // the before / after comparison
  await expect(list.getByTestId('sight-was-B11')).toContainText('was')

  // badges on the enemies in the 3D view
  const badge = page.getByTestId('sight-badge-B11')
  await expect(badge).toBeVisible()
  await expect(badge).toContainText(/dmg|not visible|no shot/)
  await expect(page.getByTestId('sight-badge-B3')).toBeVisible()

  // the threat view is on by default while a move is staged: a line per order with the totals
  await expect(page.getByTestId('threat-block')).toBeVisible()
  await expect(page.getByTestId('threat-engage')).toContainText(/If Engage/)
  await expect(page.getByTestId('threat-conceal')).toContainText(/If Conceal/)

  // T flips it off, then on again
  await page.keyboard.press('t')
  await expect(page.getByTestId('threat-block')).toHaveCount(0)
  // a top-down camera, centred on the action, shows the lines clear of the prompt
  await page.evaluate(() => (window.__ms!.ui() as { requestCamera(id: 'top'): void }).requestCamera('top'))
  await page.waitForTimeout(900)
  await page.evaluate(() => window.__ms!.camera.current!.lookAt(-1, 4.5, 29))
  await screenshotRendered(page, 'e2e-out/sightlines-01.png')
  await page.keyboard.press('t')
  await expect(page.getByTestId('threat-block')).toBeVisible()
  await page.waitForTimeout(200)
  await screenshotRendered(page, 'e2e-out/sightlines-02.png')

  // looking never changes the game
  expect(await seq(page)).toBe(seq0)
  expect(errors).toEqual([])
})

test('shoot-cover: the measure tool (M) reads distance, control range and sight both ways, read-only', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await startBattle(page, '?scenario=shoot-cover&speed=instant')
  await page.waitForFunction(() => window.__ms!.settled())
  const seq0 = await seq(page)

  await page.keyboard.press('m')
  await expect(page.getByTestId('measure-panel')).toBeVisible()
  await expect(page.getByTestId('btn-measure')).toBeVisible()

  // two operatives: the shooter and the Boy in cover
  const px = async (x: number, z: number) => {
    const p = await boardPixel(page, x, 0.5, z)
    if (!p) throw new Error(`no free pixel for ${x},${z}`)
    return p
  }
  const a = await px(-8, 5.2)
  await page.mouse.move(a.x, a.y)
  await page.mouse.click(a.x, a.y)
  await expect(page.getByTestId('measure-hint')).toContainText('second point')
  const b = await px(1.6, 5.2)
  await page.mouse.move(b.x, b.y)
  await page.mouse.click(b.x, b.y)
  await expect(page.getByTestId('measure-distance')).toContainText(/\d+\.\d\d″/)
  await expect(page.getByTestId('measure-distance')).toContainText('rounded-up')
  await expect(page.getByTestId('measure-cr')).toContainText('Within 1″: no')
  await expect(page.getByTestId('measure-a-sees-b')).toContainText('visible, in cover')
  await expect(page.getByTestId('measure-b-sees-a')).toContainText('sees')
  await expect(page.getByTestId('measure-label')).toBeVisible()
  await page.waitForTimeout(150)
  await screenshotRendered(page, 'e2e-out/sightlines-03.png')

  // the line stays until Escape; the first Escape clears it, the second closes the tool
  await page.waitForTimeout(300)
  await expect(page.getByTestId('measure-distance')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByTestId('measure-distance')).toHaveCount(0)
  await expect(page.getByTestId('measure-panel')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByTestId('measure-panel')).toHaveCount(0)

  // two plain board points, via the HUD button
  await page.getByTestId('btn-measure').click()
  const p1 = await boardPixel(page, -2, 0, -3)
  const p2 = await boardPixel(page, 2, 0, -3)
  if (!p1 || !p2) throw new Error('board pixels covered')
  await page.mouse.click(p1.x, p1.y)
  await page.mouse.click(p2.x, p2.y)
  await expect(page.getByTestId('measure-distance')).toContainText(/\d\.\d\d″/)
  await expect(page.getByTestId('measure-distance')).toContainText(/counts as [45]″/)

  // nothing reached the engine
  expect(await seq(page)).toBe(seq0)
  expect(errors).toEqual([])
})

test('vantage: the staged move is evaluated at the end point height', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await openReposition(page, '?scenario=vantage&speed=instant')
  const seq0 = await seq(page)
  // from the upper floor first: the Boy below is a target with Accurate in the engine's number
  await expect(page.getByTestId('sight-row-B2')).toBeVisible()
  const before = await page.getByTestId('sight-dmg-B2').textContent()
  expect(before).toMatch(/\d+\.\d dmg/)
  // stage a short step along the floor
  await stagePath(
    page,
    3,
    [
      { x: -3.5, z: -4.75 },
      { x: -4.75, z: -3.5 },
      { x: -6, z: -4.75 },
      { x: -4.75, z: -6 },
    ],
    async (p) => page.mouse.click(p.x, p.y),
  )
  await expect(page.getByTestId('sight-where')).toContainText('planned end point')
  await expect(page.getByTestId('sight-row-B2')).toBeVisible()
  await expect(page.getByTestId('sight-badge-B2')).toBeVisible()
  await expect(page.getByTestId('sight-was-B2')).toContainText(/was \d+\.\d/)
  await page.waitForTimeout(200)
  await screenshotRendered(page, 'e2e-out/sightlines-vantage.png')
  expect(await seq(page)).toBe(seq0)
  expect(errors).toEqual([])
})

test.describe('phone', () => {
  test.use({ viewport: { width: 740, height: 360 }, hasTouch: true })

  test('the list folds into a bottom sheet and the ruler works with two taps', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    await startBattle(page, '?scenario=shoot-cover&speed=instant&ff=compact')
    await page.waitForFunction(() => window.__ms!.settled())
    // pick the shooter, open the move prompt
    await page.getByTestId('activate-A6').tap()
    await page.getByTestId('order-engage').tap()
    await page.getByTestId('act-reposition').tap()
    await expect(page.getByTestId('sight-sheet')).toBeVisible()
    await expect(page.getByTestId('sight-summary')).toContainText('visible')
    await stagePath(page, 0, SHOOT_COVER_ENDS, async (p) => page.touchscreen.tap(p.x, p.y))
    await expect(page.getByTestId('sight-summary')).toContainText('threat')
    await page.getByTestId('sight-sheet').getByTestId('prompt-sheet-toggle').tap()
    await expect(page.getByTestId('sight-row-B11')).toBeVisible()
    await page.waitForTimeout(200)
    await screenshotRendered(page, 'e2e-out/sightlines-04-phone.png', 30_000)
    await page.getByTestId('sight-sheet').getByTestId('prompt-sheet-toggle').tap()

    // ruler: two taps
    const seq0 = await seq(page)
    await page.getByTestId('btn-measure').tap()
    await expect(page.getByTestId('measure-panel')).toBeVisible()
    const p1 = await boardPixel(page, -2, 0, -3)
    const p2 = await boardPixel(page, 2, 0, -3)
    if (!p1 || !p2) throw new Error('board pixels covered')
    await page.touchscreen.tap(p1.x, p1.y)
    await expect(page.getByTestId('measure-hint')).toContainText('second point')
    await page.waitForTimeout(600) // a person's second tap is never inside the double-tap window
    await page.touchscreen.tap(p2.x, p2.y)
    await expect(page.getByTestId('measure-distance')).toContainText(/\d+\.\d\d″/)
    await page.waitForTimeout(200)
    await screenshotRendered(page, 'e2e-out/sightlines-05-phone-ruler.png', 30_000)
    expect(await seq(page)).toBe(seq0)
    expect(errors).toEqual([])
  })
})
