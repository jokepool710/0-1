# Decisions

## M0 — Tooling baseline

- pnpm 12 workspaces and Turborepo provide the monorepo task graph. Exact package versions are pinned in each `package.json` to make installs reproducible.
- The canonical design-token source is `packages/design-tokens/src/tokens.ts`. A generation script derives the committed CSS custom properties, Tailwind preset, and React Native theme from it; generated artifacts are reviewed in Git.
- The M0 API is deliberately limited to `GET /healthz`; application routes, database access, and authentication begin in their assigned milestones.
- Docker Compose starts PostgreSQL 16 and Redis 7 locally. Application processes run directly under Turborepo for fast development.
- pnpm permits install scripts only for `esbuild` and `sharp`, transitive build-time requirements of Vitest/Expo and Next.js respectively. No other dependency lifecycle scripts are approved.
- pnpm is pinned through `packageManager` and GitHub Actions. Turbo 2.11.5 is used because it supports pnpm 12's package-manager lockfile document.

## M1 — Engine

- The engine clamps difficulty and estimated duration to the specified safe ranges before calculating XP; server validation remains responsible for rejecting invalid persisted input.
- JavaScript `Math.round` produces all four specified golden values exactly: 10, 129, 309, and 682.
- `react-native-web` is required for Expo's M0 static export. Tailwind is installed in the web app and consumes the generated shared preset.
- Expo's Hermes export uses `unstable_transformImportMeta` because the resolved development toolchain contains `import.meta`; this is a build compatibility transform, not application logic.
