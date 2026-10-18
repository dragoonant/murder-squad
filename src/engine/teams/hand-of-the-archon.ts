// Hand of the Archon (docs/spec/13-teams.md section 8, rule ids T-HA.n): the code hooks this team's data names, its team rule
// provider (team-rules.ts registerTeamRules) and its hook handlers (hooks.ts registerHook). Scaffolded
// empty in the M9 batch B engine prep; the team implementer owns this file. Generic capabilities to build on:
// tokens.ts, reserve.ts, effects.regainWounds, team-rules.ts providers, firefight.startFreeAction /
// startDelegatedAction / REACTION_DONE, and the lifecycle hooks listed in hooks.ts.
export const TEAM_ID = 'hand-of-the-archon'
