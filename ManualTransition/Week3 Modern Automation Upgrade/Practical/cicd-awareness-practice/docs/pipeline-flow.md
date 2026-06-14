# CI/CD Pipeline Flow

```text
Code Commit
↓
Checkout Code
↓
Install Dependencies
↓
Build
↓
Run Smoke Tests
↓
Deploy Dry Run
↓
Publish Result
```

## Where Automation Fits

Automation normally fits in the test stage.

Examples:

- Unit Tests
- Smoke Tests
- Selenium Tests
- Playwright Tests
- API Tests
- Regression Tests

## Important Point

Do not run every long test suite on every commit. Keep commit pipelines fast and stable.
