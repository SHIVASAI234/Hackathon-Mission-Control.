# Contributing

Use the pnpm version in `package.json` and keep its lockfile consistent. Read the PRD and architecture before changing behaviour. Add focused tests for authorization, persistence or synchronization changes.

Before a pull request, run `pnpm check:syntax`, `pnpm test` and `pnpm build`. Explain what changed, why, validation and limitations. Keep credentials and runtime data out of commits. Never modify an applied migration; append a new one.

Contributions to the application use the MIT licence. Retain applicable third-party notices.
