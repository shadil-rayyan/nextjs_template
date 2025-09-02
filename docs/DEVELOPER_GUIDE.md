# Developer Guide

This document is a practical guide for developers working on the project. It covers setup, project structure, testing, common pitfalls, and conventions.

## Tech Stack

- Next.js (App Router)
- React 19, TypeScript 5
- Tailwind CSS
- Jest + React Testing Library (unit/integration)
- Playwright (e2e)
- Firebase (client SDK)

Key files:
- `package.json` scripts
- `tsconfig.json` path aliases (`@/*` → `src/*`)
- `jest.config.js` and `jest.setup.js`
- `playwright.config.ts`

## Project Structure

- `src/app/` — Next.js App Router pages, layouts, API routes
- `src/components/` — UI components (e.g., `topNavbar.tsx`)
- `src/data/` — static data sources
- `public/` — static assets
- `tests/unit/` — Jest unit/integration tests
- `tests/e2e/` — Playwright e2e tests
- `doc/` — project docs

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
npm run dev
```

3) Type check

```bash
npm run typecheck
```

4) Build and start

```bash
npm run build
npm start
```

## Environment Variables

For Firebase and any external services, create `.env.local` in the project root. Example (placeholders):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

Do not commit secrets. Prefer `NEXT_PUBLIC_` for values required in the browser.

## Testing

Scripts:

- `npm run test` — Jest test run
- `npm run test:unit` — Jest with coverage
- `npm run test:e2e` — Playwright e2e
- `npm run update-snapshot` — Update Jest snapshots

### Unit/Integration (Jest + RTL)

- Config: `jest.config.js`
- Global setup: `jest.setup.js`
  - Mocks `next/navigation` App Router hooks (e.g., `useRouter`) to avoid “expected app router to be mounted” errors
  - Mocks legacy `next/router` when necessary
  - Mocks icon libraries to avoid JSX transform issues

Path aliases:
- `@/*` resolves to `src/*` via `tsconfig.json`
- If you see "Cannot find module '@/...'" in tests, ensure Jest is using `next/jest` preset in `jest.config.js`

Router mocking in tests:

```ts
import * as nextNavigation from 'next/navigation';

jest.spyOn(nextNavigation, 'useRouter').mockReturnValue({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
} as unknown as ReturnType<typeof nextNavigation.useRouter>);
```

Firebase in tests:
- Some components attach auth listeners on mount
- To keep tests clean, mock your auth layer (e.g., export a thin wrapper and swap it in tests) to prevent log noise and side effects

Snapshots:
- Prefer explicit, semantic assertions
- Use snapshots sparingly for stable markup

### End-to-End (Playwright)

- Config: `playwright.config.ts`
- Run: `npm run test:e2e`
- Ensure dev server is running or configure Playwright to launch it

## Conventions

- Components should be pure and side-effect free; isolate effects into hooks and providers for easier mocking
- Prefer test IDs and roles over class-based assertions; test visible behavior
- Keep imports using the `@/` alias for consistency
- Keep PRs small and focused; include tests for changed behavior

## Troubleshooting

- Cannot find module '@/...'
  - Confirm `tsconfig.json` has `baseUrl: "."` and `paths: { "@/*": ["./src/*"] }`
  - Ensure Jest uses `next/jest` (see `jest.config.js`) so aliases resolve

- “expected app router to be mounted” in tests
  - Validate `jest.setup.js` mocks for `next/navigation`
  - In individual tests, prefer `jest.spyOn(nextNavigation, 'useRouter')` as above

- Firebase auth warnings during tests
  - Mock auth layer in tests to avoid real listeners
  - If needed, stub with no-op functions in `jest.setup.js`

- Flaky CSS/timing assertions
  - Avoid asserting render time or Tailwind class strings unless essential to behavior

## Useful Scripts

```json
{
  "test": "jest --config jest.config.js",
  "update-snapshot": "jest --config jest.config.js --updateSnapshot",
  "typecheck": "tsc -p tsconfig.json --noEmit",
  "test:unit": "jest --config jest.config.js --coverage",
  "test:e2e": "playwright test",
  "test:all": "npm run typecheck && npm run test:unit && npm run test:e2e"
}
```

## CI

- See `.github/workflows/` for pipelines
- Typical stages: typecheck, unit tests, e2e (headless)

## Contribution Workflow

1) Branch from the active development branch (often `dev`)
2) Make focused changes with tests
3) Run `npm run test:all`
4) Open a PR with a clear description and screenshots if UI changes

## Notes

- Keep documentation in `doc/` up to date
- Add technical decisions and trade-offs to `ARCHITECTURE.md` when relevant
