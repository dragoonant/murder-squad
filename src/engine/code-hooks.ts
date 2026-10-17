// Registry of `{ "code": "<name>" }` escape hatches. Every hook needs a test proving it fires in a game.
// TODO(M2b): register team hooks (teams/<id>.ts) here.
import type { HookFn } from './hooks'

const registry = new Map<string, HookFn>()

export function registerCodeHook(name: string, fn: HookFn): void {
  registry.set(name, fn)
}

export function getCodeHook(name: string): HookFn | undefined {
  return registry.get(name)
}

export function registeredCodeHooks(): string[] {
  return [...registry.keys()].sort()
}
