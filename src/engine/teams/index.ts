// Every team's engine module, imported once for its side effects (registerCodeHook, registerHook,
// registerTeamRules). abilities.ts imports this file. A new team adds one line here when it is
// scaffolded; afterwards its implementer works only in teams/<team>.ts. Order is provider order.
import './angels-of-death'
import './kommandos'
import './pathfinders'
import './hierotek-circle'
import './plague-marines'
import './wyrmblade'
import './legionaries'
import './hand-of-the-archon'
import './hunter-clade'
import './hearthkyn-salvagers'
