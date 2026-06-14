# Playwright Parallel Execution & Configuration Practice

This project demonstrates Playwright parallel execution and configuration using a small local sample website.

## What This Covers

- Workers
- Parallel execution
- Browser contexts
- Test isolation
- Multi-browser projects
- Retries
- HTML report
- Screenshots and video on failure
- Auto-retrying assertions

## Install

```bash
npm install
npx playwright install
```

## Run All Tests

```bash
npm run test
```

## Run Headed Mode

```bash
npm run test:headed
```

## Run With 3 Workers

```bash
npm run test:workers3
```

## Run Browser-Specific Tests

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

## Key Learning

Each test gets its own browser context. That means one test's login/cart data does not leak into another test.
