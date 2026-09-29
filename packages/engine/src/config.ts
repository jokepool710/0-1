export const GameConfig = {
  task: { minDifficulty: 1, maxDifficulty: 10, minMinutes: 5, maxMinutes: 480, baseMultiplier: 8, difficultyExponent: 1.4, earlyMaxBonus: 0.25, lateMultiplier: 0.85, apexMultiplier: 1.15, apexDailyLimit: 3, shortQuestMinutes: 15, shortQuestDailyLimit: 5, priority: { LOW: 0.9, MEDIUM: 1, HIGH: 1.15, CRITICAL: 1.3 } },
  level: { min: 1, max: 100, coefficient: 5700, exponent: 0.0592, boundaryEpsilon: 1e-12 },
  tier: { width: 10 },
  streak: { balancedCompletionRatio: 0.6, multiplierPerDay: 0.02, multiplierCap: 0.4, milestones: [7, 30, 100, 365], freezeEveryDays: 7, balancedFreezeCap: 3, hardcoreFreezeCap: 1, secondBalancedMissPenalty: 0.1, hardcoreWeeklyPenalty: 0.3, nextLevelPenaltyCap: 0.5 },
  league: { cohortSize: 30, movementSize: 7, tieBreakEpochSeconds: 2_000_000_000 }
} as const;
export type Priority = keyof typeof GameConfig.task.priority;
export type Mode = 'BALANCED' | 'HARDCORE';
export type LeagueTier = 'OBSIDIAN' | 'PLATINUM' | 'SOVEREIGN' | 'APEX';
