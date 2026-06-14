# Playwright Assertions Foundation Practice

This project supports the topic **Assertions in Playwright**.

## Goal

Learn how to validate application behavior using Playwright assertions.

Covered concepts:

- Page title assertion
- Text assertion
- Visibility assertion
- URL assertion
- State assertion
- Attribute assertion
- Class assertion
- Count assertion
- Web-first auto-waiting assertions
- Normal JavaScript value assertions

## Install

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm run test
```

## Run Headed Mode

```bash
npm run test:headed
```

## Open HTML Report

```bash
npm run report
```

## Demo Credentials

```text
Email: user@test.com
Password: 123456
```

## Important Learning Point

Actions do something.

Assertions verify whether the result is correct.

Example:

```ts
await page.getByTestId('login-button').click();

await expect(page.getByTestId('login-success')).toBeVisible();
```

## Folder Structure

```text
sample-site/       Local practice website
data/              Test data
tests/             Playwright test files
playwright.config.ts
package.json
```
