// App shell: routes between the start screen, team builder, briefing and battle from the session store;
// ?gallery shows the figure gallery; ?test=1 skips the menus and starts a battle with default rosters.
import { useEffect } from 'react'
import { audio, installClickSounds, startMusicDirector } from './audio'
import { Gallery } from './figures/Gallery'
import { loadModelManifest } from './figures/manifest'
import { currentParams } from './params'
import { installTestHooks } from './store/testHooks'
import { startFromParams, useSession } from './store/session'
import { Briefing } from './ui/Briefing'
import { BattleScreen } from './ui/BattleScreen'
import { StartScreen } from './ui/StartScreen'
import { TeamBuilder } from './ui/TeamBuilder'

installTestHooks()
audio.attachAutoUnlock()
installClickSounds()
startMusicDirector(audio)

let autoStarted = false

export function App() {
  const screen = useSession((s) => s.screen)
  const params = currentParams()
  useEffect(() => {
    void loadModelManifest()
    if (params.test && !autoStarted) {
      autoStarted = true
      startFromParams(params)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (params.gallery) return <Gallery />
  switch (screen) {
    case 'builder':
      return <TeamBuilder />
    case 'briefing':
      return <Briefing />
    case 'battle':
      return <BattleScreen />
    default:
      return <StartScreen />
  }
}
