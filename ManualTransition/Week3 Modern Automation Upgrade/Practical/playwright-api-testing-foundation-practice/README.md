# Playwright API Testing Foundation Practice

This project is a beginner-friendly runnable practice project for **API Testing Foundations using Playwright**.

It includes a local Express API and Playwright API tests.

## What You Will Practice

- GET API testing
- POST API testing
- PUT API testing
- DELETE API testing
- Query parameter testing
- Path parameter testing
- Status code assertion
- JSON field validation
- Nested JSON validation
- Negative API testing
- Reusable data and utility layers

## Folder Structure

```text
playwright-api-testing-foundation-practice/
  sample-api/
    server.js

  config/
    testConfig.ts

  data/
    users.ts

  utils/
    apiAssertions.ts

  tests/
    api-testing-foundation.spec.ts

  package.json
  playwright.config.ts
  tsconfig.json
  .npmrc
  README.md
```

## Run Commands

```bash
npm install
npx playwright install
npm run test
```

Run only API test file:

```bash
npm run test:api
```

Open HTML report:

```bash
npm run report
```

## Important Notes

- The API server starts automatically through Playwright `webServer` configuration.
- The project uses `.npmrc` with public npm registry.
- `package-lock.json` is intentionally not included to avoid registry lock issues.

## Demo API Endpoints

```text
GET    /health
GET    /users
GET    /users/:id
POST   /users
PUT    /users/:id
DELETE /users/:id
```

## Teaching Focus

API testing should not validate only status codes. Always validate meaningful response payload fields also.
