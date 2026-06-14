# Playwright Introduction Practice Project

This project is for the topic **3.1 Introduction to Playwright**.

It demonstrates:

- Why modern automation frameworks matter
- Selenium vs Playwright basic difference
- Browser concept
- Browser Context concept
- Page concept
- Locator concept
- Simple navigation and action flow
- Built-in `page` fixture
- Manual `browser -> context -> page` flow

## Install

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm run test
```

## Run in Headed Mode

```bash
npm run test:headed
```

## Debug Mode

```bash
npm run test:debug
```

## View HTML Report

```bash
npm run report
```

## Important Learning Point

In normal Playwright tests, use the built-in `page` fixture:

```ts
test('example', async ({ page }) => {
  await page.goto('/');
});
```

For architecture understanding, this project also shows the manual flow:

```ts
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
```

## Folder Structure

```text
sample-site/       Local website used for practice
data/              Reusable test data
tests/             Playwright test cases
playwright.config.ts
package.json
```
