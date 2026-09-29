# Side Questing

Daily execution, tracked as executive RPG progression. This repository contains the API, responsive web app, mobile app, and shared packages.

## Setup

Prerequisites: Node.js 24+, pnpm 12+, Docker Desktop.

```sh
pnpm i
pnpm dev
```

`pnpm dev` starts PostgreSQL and Redis, then runs the API on `http://localhost:3001`, web on `http://localhost:3000`, and Expo's mobile development server. Copy `.env.example` to `.env` before adding configuration that later milestones require.

## Verify

```sh
pnpm typecheck
pnpm lint
pnpm test
```

## Layout

- `apps/api` — Fastify API and future workers
- `apps/web` — Next.js laptop web/PWA app
- `apps/mobile` — Expo iOS/Android app
- `packages/design-tokens` — canonical visual tokens and generated platform outputs
- `packages/config` — strict shared TypeScript configuration
- `infra` — local infrastructure configuration

## M0 scope

M0 supplies foundation tooling and bootable shells only. Game rules, persistence, authentication, task flows, offline sync, leagues, and production integrations are intentionally deferred to their assigned milestones.
