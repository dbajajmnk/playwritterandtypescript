# Playwright Screenshots and Logs Practice Project

This project demonstrates **Screenshots & Logs in Playwright** using a local sample website.

## What You Will Practice

- Manual screenshots
- Full page screenshots
- Screenshot on failure
- Console logs
- Network request logs
- Page error logs
- Attaching logs to HTML report
- Failure debugging using screenshots, logs, video, and trace

## Install

```bash
npm install
npx playwright install
```

## Run All Tests

```bash
npm run test
```

## Run In Headed Mode

```bash
npm run test:headed
```

## Run Intentional Failure Demo

```bash
npm run test:checkout-failure
```

## Open HTML Report

```bash
npm run report
```

## Important Files

```text
sample-site/              Local testing website and API
utils/logCollectors.ts    Reusable console, network, and page error logging utility
utils/screenshotHelper.ts Reusable screenshot helper
data/users.ts             Test data layer
tests/screenshots-logs.spec.ts        Passing learning tests
tests/checkout-failure-demo.spec.ts   Intentional failure debugging demo
playwright.config.ts      Artifact configuration
```

## Artifact Configuration

```ts
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry'
}
```

## Learning Notes

- Screenshots show the visual UI state.
- Logs show technical behavior such as console messages, API calls, and browser errors.
- In CI/CD, screenshots and logs should be stored as artifacts.
- Avoid capturing screenshots everywhere because it slows execution and creates too many files.
