# Playwright Basics Practice Project

This project is for practicing **Playwright Basics**:

- Browser contexts
- Pages
- Locators
- Auto waiting
- Simple login simulation
- Browser context isolation

## Install

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm run test
```

## Run In Headed Mode

```bash
npm run test:headed
```

## Open HTML Report

```bash
npm run report
```

## Demo Login

```text
Email: user@test.com
Password: 123456
```

## Learning Flow

1. Browser = Actual browser engine.
2. Context = Isolated browser session.
3. Page = Browser tab.
4. Locator = Element targeting mechanism.
5. Auto waiting = Playwright waits for element readiness automatically.

## Folder Structure

```text
sample-site/        Local demo website
data/               Test data
tests/              Playwright test files
playwright.config.ts Playwright configuration
```
