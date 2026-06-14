# Playwright API Testing Practice Project

This project demonstrates API testing using Playwright with reusable test architecture.

## What You Will Learn

- API testing using Playwright `request`
- GET, POST, PUT, PATCH, DELETE testing
- Status code assertions
- Response body assertions
- Query parameter testing
- Negative API testing
- Authentication token testing
- Reusable API client layer
- Fixture layer for dependency injection
- Data layer for test data
- Utility layer for helper functions
- Hooks in API testing

## Project Structure

```text
sample-api/       Local Express API server
api/              API client classes
fixtures/         Playwright custom fixtures
data/             Test data
utils/            Common helper functions
config/           Test configuration
tests/            API test cases
```

## Run Project

```bash
npm install
npx playwright install
npm run test
```

## Run Sample API Manually

```bash
npm run api
```

Then open:

```text
http://127.0.0.1:3000/health
```

## Important Note

This project does not include `package-lock.json` to avoid machine-specific registry issues.
A `.npmrc` file is included to use the public npm registry.
