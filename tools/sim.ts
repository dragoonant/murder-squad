// npm run sim -- --games 20 --seed 1 [--replay tools/out/sim-report.json [index]]
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { replay, type Action } from '@/engine'
import { testBundle } from '../tests/fixtures/team'
import { runSim, setupFor, type GameReport } from './sim-core'

function arg(name: string, fallback: string): string {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 && process.argv[i + 1] !== undefined ? process.argv[i + 1]! : fallback
}

const OUT = 'tools/out/sim-report.json'

function replayMode(path: string, index: number): void {
  const report = JSON.parse(readFileSync(path, 'utf8')) as { failing: GameReport[] }
  const g = report.failing[index]
  if (!g) {
    console.error(`no failing game at index ${index}`)
    process.exit(2)
  }
  const r = replay(setupFor(g.game), g.seed, g.actions as Action[], testBundle)
  console.log(`replayed ${g.actions.length} actions of ${g.seed}: final hash ${r.state.hash}${r.rejection ? ` (rejected at ${r.failedAt}: ${r.rejection.reason})` : ''}`)
  for (const v of g.violations) console.log(`  [${v.decision}] ${v.rule}: ${v.message}`)
}

const replayPath = arg('replay', '')
if (replayPath) {
  replayMode(replayPath, Number(process.argv[process.argv.indexOf(replayPath) + 1] ?? 0) || 0)
} else {
  const games = Number(arg('games', '20'))
  const seed = arg('seed', '1')
  const report = runSim({ games, seed, setupFor, bundle: testBundle })
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, JSON.stringify({ ...report, failing: report.failing }, null, 1))
  const perSec = report.ms > 0 ? ((games / report.ms) * 1000).toFixed(1) : 'inf'
  console.log(
    `sim: ${report.completed}/${report.games} games ended cleanly, ${report.decisions} decisions, ` +
      `${report.rejections} rejections, ${report.violations} violations, ${report.ms} ms (${perSec} games/s)`,
  )
  for (const g of report.failing.slice(0, 5)) {
    console.log(` game ${g.game} (${g.seed}) ended=${g.ended}`)
    for (const v of g.violations.slice(0, 5)) console.log(`   [${v.decision}] ${v.rule}: ${v.message}`)
  }
  if (report.violations > 0 || report.completed !== report.games) process.exit(1)
}
