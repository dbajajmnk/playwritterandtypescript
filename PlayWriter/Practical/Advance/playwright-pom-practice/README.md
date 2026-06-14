# Playwright Page Object Model Practice Project

This project is a runnable Playwright + TypeScript practice project for **Page Object Model (POM)**.

## Goal

Learn how to move selectors and page actions out of test files and into reusable page classes.

## Run

```bash
npm install
npx playwright install
npm run test
```

Run with visible browser:

```bash
npm run test:headed
```

## Demo Login

```text
Email: user@test.com
Password: 123456
```

## Project Structure

```text
playwright-pom-practice/
  sample-site/
    index.html
    styles.css
    app.js
    server.js

  pages/
    LoginPage.ts
    DashboardPage.ts
    SignupPage.ts
    HomePage.ts
    ProductPage.ts
    CartPage.ts
    CheckoutPage.ts

  test-data/
    users.ts

  tests/
    pom.spec.ts

  package.json
  playwright.config.ts
  tsconfig.json
```

## Covered Scenarios

- Basic POM structure
- Page class creation
- Locators inside page classes
- Actions inside page classes
- Test data outside page classes
- Assertions inside test files
- LoginPage example
- SignupPage practice task
- HomePage product search
- ProductPage detail flow
- CartPage add and clear flow
- CheckoutPage order flow
- Mini e-commerce automation flow

## Important POM Rule

Keep page classes focused on **locators and actions**.
Keep assertions inside **test files**.

Good:

```ts
await loginPage.login('user@test.com', '123456');
await expect(dashboardPage.welcomeMessage).toBeVisible();
```

Avoid:

```ts
// Avoid hiding assertions inside page object methods for beginner projects.
await loginPage.loginAndAssertSuccess();
```
