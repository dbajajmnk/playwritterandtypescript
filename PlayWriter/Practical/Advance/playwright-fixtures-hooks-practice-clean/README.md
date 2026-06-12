# Playwright Fixtures and Hooks Practice Project

This project supports the lesson **Advanced: Fixtures & Hooks**.

It contains a local ecommerce-style sample testing website and Playwright tests that demonstrate:

- Built-in fixtures like `page`
- Custom data fixtures
- Custom page fixtures
- `loggedInPage` fixture
- `productPage` fixture
- `beforeAll`
- `beforeEach`
- `afterEach`
- `afterAll`
- Screenshot on test failure
- Test isolation
- Fixture cleanup

## Project Structure

```text
playwright-fixtures-hooks-practice/
  sample-site/
    index.html
    styles.css
    app.js
    server.js

  fixtures/
    ecommerceFixtures.ts

  utils/
    auth.ts

  tests/
    fixtures-hooks.spec.ts

  package.json
  playwright.config.ts
  tsconfig.json
  README.md
```

## How To Run

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run tests:

```bash
npm run test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open HTML report:

```bash
npm run report
```

## Login Credentials

```text
Email: user@test.com
Password: 123456
```

## Main Learning Concept

Fixtures answer: **What does my test need?**

Hooks answer: **When should setup or cleanup happen?**

Example:

```ts
// Fixture usage
test('dashboard test', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByTestId('dashboard-section')).toBeVisible();
});
```

```ts
// Hook usage
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
```

## Notes For Students

- Use fixtures for reusable setup.
- Use hooks for lifecycle timing.
- Avoid putting heavy repeated logic inside every test.
- Keep tests isolated from each other.
- Always call `use()` inside a custom fixture.
