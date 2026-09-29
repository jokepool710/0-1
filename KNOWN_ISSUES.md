# Known issues

## Tooling

- pnpm 12.4.2 writes a duplicate YAML document to `pnpm-lock.yaml` in this environment; Turborepo warns while parsing it, although `pnpm typecheck`, `pnpm lint`, and `pnpm test` all pass. Resolve by upgrading pnpm after confirming its lockfile compatibility in CI.
