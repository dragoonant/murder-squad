// Event union (frozen after M2). Every event carries the seq of the accepted action that caused it.
import type { DecisionKind, GameResult, Order, Phase, Seat, TimingWindowId, Vec3 } from './types'

export interface EventBase {
  seq: number
  turningPoint: number
  phase: Phase
  seat: Seat | null
}

export interface MoveSegmentEvent {
  from: Vec3
  to: Vec3
  /** straight-line horizontal length */
  length: number
  /** movement spent by this increment (rounded up, plus Accessible surcharges) */
  cost: number
  kind: 'walk' | 'climb' | 'drop' | 'jump'
}

export type GameEventBody =
  // game
  | { type: 'GameCreated'; seed: string; engineVersion: string }
  | { type: 'TurningPointStarted'; number: number }
  | { type: 'TurningPointEnded'; number: number }
  | { type: 'PhaseStarted'; name: Phase }
  | { type: 'PhaseEnded'; name: Phase }
  | { type: 'InitiativeDecided'; holder: Seat; setup: boolean }
  | { type: 'GameEnded'; result: GameResult }
  // setup (additive)
  | { type: 'DropZoneChosen'; zoneId: string }
  | { type: 'OperativeDeployed'; operativeId: string; pos: Vec3 }
  // strategy
  | { type: 'CpChanged'; delta: number; cp: number; reason: string }
  | { type: 'GambitUsed'; gambitId: string }
  | { type: 'GambitPassed' }
  | { type: 'PloyUsed'; ployId: string }
  | { type: 'OperativesReadied'; operativeIds: string[] }
  // activation
  | { type: 'OperativeActivated'; operativeId: string }
  | { type: 'OrderSet'; operativeId: string; order: Order }
  | { type: 'ActionDeclared'; operativeId: string; action: string; cost: number }
  | { type: 'ActionResolved'; operativeId: string; action: string }
  | { type: 'ActionCancelled'; operativeId: string; action: string }
  | { type: 'ApSpent'; operativeId: string; amount: number; total: number }
  | { type: 'OperativeExpended'; operativeId: string }
  | { type: 'Counteracted'; operativeId: string }
  | { type: 'CounteractSkipped' }
  | { type: 'GuardSet'; operativeId: string }
  | { type: 'GuardCleared'; operativeId: string; reason: string }
  | { type: 'GuardInterrupt'; operativeId: string }
  // movement
  | {
      type: 'OperativeMoved'
      operativeId: string
      action: string
      from: Vec3
      to: Vec3
      segments: MoveSegmentEvent[]
      cost: number
      maxInches: number
    }
  // markers
  | { type: 'ControlChanged'; markerId: string; controller: Seat | null }
  // dice
  | { type: 'DiceRolled'; purpose: string; dice: number[]; final: boolean }
  // meta
  | { type: 'ActionRejected'; code: string; reason: string }
  | { type: 'DecisionRequested'; decisionId: string; kind: DecisionKind; window: TimingWindowId }

export type GameEvent = EventBase & GameEventBody
