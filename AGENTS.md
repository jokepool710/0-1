# Side Questing — Binding Build Specification

Build Side Questing as a production iOS, Android, and laptop-web daily task/habit manager presented as an executive RPG progression system. The visual direction is dark, sharp, minimalist, and luxurious: obsidian surfaces, titanium borders, restrained glow; never cartoony, saturated, or emoji-led.

## Engineering rules

- Work only one milestone at a time; do not begin the next milestone until the current one has code, tests, docs, and passing `pnpm typecheck && pnpm lint && pnpm test`.
- Server authority governs XP, levels, streaks, and leagues. Game math belongs only in `packages/engine`, as pure, fully-tested TypeScript and with all constants in one `GameConfig`.
- Every XP award or penalty is idempotent and recorded in the append-only `XpLedger` transactionally.
- Use strict TypeScript with `noUncheckedIndexedAccess`; zod validates every API input; Prisma is the only database access; secrets remain environment variables and `.env.example` stays current.
- Record conservative decisions and dependency rationales in `DECISIONS.md`; put all human-only actions in `HUMAN_TODO.md`; use small Conventional Commits.

## Locked stack and layout

Use pnpm workspaces/Turborepo, Expo + Expo Router for mobile, Next App Router/Tailwind PWA for web, Fastify REST under `/v1`, zod contracts, PostgreSQL 16/Prisma, Redis/BullMQ, TanStack Query, Vitest/Testcontainers/Playwright/Maestro, and GitHub Actions. Repository folders are `apps/{api,web,mobile}`, `packages/{engine,contracts,db,design-tokens,config}`, `infra`, and `.github/workflows`.

## Milestones

M0 foundation; M1 engine; M2 database/auth; M3 quests/XP; M4 streaks/rollover; M5 client core loop; M6 leagues; M7 notifications/polish; M8 launch readiness. Keep scope strictly inside the active milestone. The detailed formulas, data model, endpoint contracts, visual tokens, and acceptance criteria are the supplied Side Questing Build Package and must be preserved as the product contract.
