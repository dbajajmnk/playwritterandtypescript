# Playwright Reusable Test Architecture Practice

This project is based on the lesson **Reusable Test Architecture (Playwright)**.

It demonstrates a clean automation framework structure:

```text
Test Layer      -> Business flow and assertions
Fixture Layer   -> Setup, dependency injection, reusable logged-in state
Page Layer      -> UI abstraction using Page Object Model
Utility Layer   -> Common helper functions
Data Layer      -> Test data
Config Layer    -> Framework-level configuration
```

## Run Commands

```bash
npm install
npx playwright install
npm run test
```

For headed mode:

```bash
npm run test:headed
```

## Demo Login

```text
Email: user@test.com
Password: 123456
```

## Folder Structure

```text
sample-site/     Local testing website
pages/           Page Object Model classes
fixtures/        Custom Playwright fixtures
data/            Test data
utils/           Reusable helper functions
config/          Framework config values
tests/           Test layer
```

## Learning Notes

- Tests should not contain repeated selectors.
- Page classes should hide UI locator details.
- Fixtures should prepare reusable setup.
- Data should not be hardcoded inside page objects.
- Utility functions should not depend on browser/page objects.
