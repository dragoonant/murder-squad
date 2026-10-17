// Plays a real game slice through the UI against the random bot: deploy every operative by clicking the
// board, get through the strategy phase, then at least two activations that each move. Screenshots land in
// e2e-out/play-01..04.png.
import { expect, test, type Page } from '@playwright/test'
import { boardPixel, nextHumanDecision, screenshotRendered, startBattle, type Pending } from './helpers'

interface Op {
  id: string
  seat: 'A' | 'B'
  status: string
  pos: { x: number; y: number; z: number }
  baseRadius: number
}

const state = (page: Page) =>
  page.evaluate(() => {
    const s = window.__ms!.getState() as { operatives: Record<string, Op>; log: { type: string; seat: string }[]; phase: string; turningPoint: number }
    return { ops: Object.values(s.operatives), moves: s.log.filter((a) => a.type === 'move.path' && a.seat === 'A').length, phase: s.phase, tp: s.turningPoint }
  })

/** Deploy one operative: ask the engine for legal spots whose pixel is not under a panel, click until one is accepted
 *  (a tall wall in front of a spot catches the click and the engine rejects it, which is a legitimate miss). */
async function deployOne(page: Page): Promise<void> {
  const seq0 = await page.evaluate(() => (window.__ms!.getState() as { seq: number }).seq)
  for (let skip = 0; skip < 600; skip += 9) {
    const spot = await page.evaluate((k) => window.__ms!.suggestSpot(k), skip)
    if (!spot) throw new Error('no legal deploy spot')
    const px = await boardPixel(page, spot.x, spot.y, spot.z)
    if (!px) continue
    await page.mouse.move(px.x, px.y)
    await page.mouse.click(px.x, px.y)
    await page.waitForTimeout(60)
    const seq = await page.evaluate(() => (window.__ms!.getState() as { seq: number }).seq)
    if (seq > seq0) return
  }
  throw new Error('no clickable deploy spot')
}

/** Click a short step toward the board centre; confirm if the engine accepts it, else try another direction. */
async function moveOne(page: Page, p: Pending): Promise<void> {
  const opId = p.constraints!.operativeId!
  const { ops } = await state(page)
  const op = ops.find((o) => o.id === opId)!
  const dirs = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (i * Math.PI) / 4)
  const toCentre = Math.atan2(-op.pos.x, -op.pos.z)
  for (const d of [toCentre, ...dirs]) {
    for (const len of [2.5, 1.5]) {
      const x = op.pos.x + Math.sin(d) * len
      const z = op.pos.z + Math.cos(d) * len
      const px = await boardPixel(page, x, op.pos.y, z)
      if (!px) continue
      await page.mouse.move(px.x, px.y)
      await page.mouse.click(px.x, px.y)
      const confirm = page.getByTestId('move-confirm')
      await expect(page.getByTestId('move-total')).toContainText(/Path/)
      if (await confirm.isEnabled()) {
        await confirm.click()
        return
      }
      await page.getByTestId('move-clear').click()
    }
  }
  // Could not find a legal step: cancel the action (no AP spent).
  await page.getByTestId('move-cancel').click()
}

test('deploy, strategy phase and two moving activations on the real engine', async ({ page }) => {
  test.setTimeout(150_000)
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await startBattle(page)
  await expect(page.getByTestId('hud')).toBeVisible()
  await expect(page.getByTestId('hud-phase')).toContainText(/Roll off/i)
  await screenshotRendered(page, 'e2e-out/play-01.png')

  let last: string | null = null
  let sawStrategy = false
  let sawFirefight = false
  let shot2 = false
  let shot3 = false
  let activationsWithMove = 0
  let movesBefore = 0
  for (let step = 0; step < 400; step++) {
    const p = await nextHumanDecision(page, last)
    if (!p) break
    last = p.id
    const s = await state(page)
    if (s.phase === 'strategy') sawStrategy = true
    if (s.phase === 'firefight') sawFirefight = true
    if (!shot2 && p.kind === 'firefight.activate') {
      shot2 = true
      await screenshotRendered(page, 'e2e-out/play-02.png')
    }
    switch (p.kind) {
      case 'setup.deploy':
        await deployOne(page)
        break
      case 'firefight.activate':
        await page.getByTestId(`activate-${(p.context.ready as string[])[0]}`).click()
        break
      case 'firefight.order':
        await page.getByTestId('order-engage').click()
        break
      case 'firefight.action': {
        const want = s.moves - movesBefore < 1 ? ['reposition', 'dash'] : []
        let clicked = false
        for (const a of want) {
          const btn = page.getByTestId(`act-${a}`)
          if (await btn.isEnabled()) {
            await btn.click()
            clicked = true
            break
          }
        }
        if (!clicked) {
          if (s.moves - movesBefore >= 1) {
            activationsWithMove++
            movesBefore = s.moves
          }
          await page.getByTestId('act-end').click()
        }
        break
      }
      case 'move.path':
        if (activationsWithMove === 1 && !shot3) {
          shot3 = true
          const op = (await state(page)).ops.find((o) => o.id === p.constraints!.operativeId)!
          const px = await boardPixel(page, op.pos.x + 2, op.pos.y, op.pos.z + 2)
          if (px) await page.mouse.move(px.x, px.y)
          await screenshotRendered(page, 'e2e-out/play-03.png')
        }
        await moveOne(page, p)
        break
      case 'strategy.gambit':
        await page.getByTestId('opt-pass').click()
        break
      default: {
        // rolls, initiative choices, drop zones, ties: take the first offered option
        await page.locator('[data-testid^="opt-"]').first().click()
      }
    }
    if (activationsWithMove >= 2) break
  }
  const end = await state(page)
  expect(sawStrategy).toBe(true)
  expect(sawFirefight).toBe(true)
  expect(end.ops.filter((o) => o.status === 'active').length).toBe(end.ops.length)
  expect(end.moves).toBeGreaterThanOrEqual(2)
  expect(activationsWithMove).toBeGreaterThanOrEqual(2)
  await screenshotRendered(page, 'e2e-out/play-04.png')
  expect(errors).toEqual([])
})
