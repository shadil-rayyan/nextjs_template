# Contributing to Gecian Hub

Thank you for your interest in contributing! This document describes how to set up your environment, coding standards, workflows, and how to submit great pull requests.

## Development Setup
- Node.js 20.x, npm 10+
- Install dependencies: `npm ci`
- Run dev server: `npm run dev`
- Typecheck: `npm run typecheck`
- Unit tests: `npm run test:unit`
- E2E tests (Playwright): `npm run test:e2e`

## Branching & Workflow
- Create feature branches from `main`: `feat/<short-name>` or `fix/<short-name>`
- Keep PRs focused and under ~300 lines where possible
- Link related issues (e.g., `Fixes #123`)

## Commit Message Convention
- Use Conventional Commits:
  - feat: add something new
  - fix: bug fix
  - docs: documentation changes
  - test: add or fix tests
  - refactor: code change that neither fixes a bug nor adds a feature
  - chore: tooling, CI, etc.

## Code Style
- TypeScript strict mode is enabled; fix all type errors
- Prefer functional React components with hooks
- Accessible UI: proper aria- attributes and keyboard support
- Use `data-testid` for stable selectors in tests where appropriate

## Testing
- Unit tests live under `__test__/` or `tests/unit/`
- Integration tests can live under `tests/integration/`
- E2E tests live under `tests/e2e/` (Playwright)
- Ensure coverage does not regress (see `jest.config.ts`)

## Pull Request Checklist
- [ ] Feature or fix is covered by unit/e2e tests
- [ ] `npm run typecheck` passes
- [ ] `npm run test:unit` passes locally
- [ ] `npm run build` succeeds
- [ ] Screenshots for UI changes (attach to PR)
- [ ] Updated docs/README if behavior changes

## Reporting Issues
- Use the Bug Report issue template
- Include steps to reproduce, expected vs actual behavior, and environment details

## Security
- Do not disclose vulnerabilities publicly. Follow SECURITY.md.

Thanks for contributing! 🙌
