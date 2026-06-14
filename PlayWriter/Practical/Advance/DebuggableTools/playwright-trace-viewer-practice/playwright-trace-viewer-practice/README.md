# Playwright Trace Viewer Practice Project

This project teaches Playwright Trace Viewer using a local sample website.

## What You Will Learn

- How to enable trace recording
- How to run tests with trace enabled
- How to open trace files
- How to inspect actions, DOM snapshots, screenshots, console logs, and errors
- How to debug a failing test using Trace Viewer

## Install

```bash
npm install
npx playwright install
```

## Run All Tests

```bash
npm run test
```

## Run With Browser Visible

```bash
npm run test:headed
```

## Force Trace Recording For Every Test

```bash
npm run test:trace-on
```

## Run Intentional Failure Demo

```bash
npm run test:trace-failure
```

This test is intentionally designed to fail. It expects `Payment Successful`, but the application shows `Payment Failed`.

## Open HTML Report

```bash
npm run report
```

From the HTML report, open the failed test and click the trace attachment.

## Open Trace Directly

After a trace zip is generated, use:

```bash
npx playwright show-trace path/to/trace.zip
```

Example:

```bash
npx playwright show-trace test-results/trace-failure-demo-Trace-Viewer-Practice-Intentional-Failure-intentional-failure-use-trace-viewer-to-find-the-wrong-expected-message-chromium/trace.zip
```

Your exact folder name may be different. You can also open the trace from the HTML report.

## Important Configuration

Trace is configured in `playwright.config.ts`:

```ts
trace: 'on-first-retry'
```

For classroom debugging, this command overrides it and records trace for every test:

```bash
npx playwright test --trace on
```

## Project Structure

```text
playwright-trace-viewer-practice/
  sample-site/
    index.html
    styles.css
    app.js
    server.js

  data/
    users.ts

  utils/
    debugSteps.ts

  tests/
    trace-viewer.spec.ts
    trace-failure-demo.spec.ts

  package.json
  playwright.config.ts
  tsconfig.json
  README.md
  .npmrc
```

## Teaching Notes

- `test.step()` makes Trace Viewer easier to read.
- Trace Viewer is best used for failed tests and flaky tests.
- Avoid `trace: 'on'` permanently in large projects because it increases storage and execution overhead.
