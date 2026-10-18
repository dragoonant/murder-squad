// The gallery's animate toggle: a scripted loop through the cue store (walk bursts, shoot / melee / hit one-shots,
// a death and a reset every 20 ticks) so every body shows its rigid cues, or its clips when a rigged GLB is listed.
// Plain module (no React / three) so it is unit-testable.
import { clearCues, setWalking, triggerCue, type CueKind } from './cueCore'

export const ANIM_TICK_MS = 600
const ONE_SHOTS: CueKind[] = ['shoot', 'melee', 'hit']

export function galleryAnimStep(ids: string[], n: number): void {
  const walking = n % 10 < 4
  ids.forEach((id, i) => {
    setWalking(id, walking)
    if (!walking && (n + i) % 3 === 0) triggerCue(id, ONE_SHOTS[(n + i) % ONE_SHOTS.length]!, performance.now(), 'beat')
  })
  if (n % 20 === 15 && ids.length) triggerCue(ids[Math.floor(n / 20) % ids.length]!, 'death', performance.now(), 'beat')
  if (n % 20 === 19) {
    clearCues()
    ids.forEach((id) => setWalking(id, walking))
  }
}
