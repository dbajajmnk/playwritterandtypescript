import { defineConfig, devices } from '@playwright/test';

// Playwright configuration is kept separate from tests.
// This is part of reusable architecture: config changes should not touch test logic.
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: false,
  reporter: [['html'], ['list']],
  use: {
    // Base URL allows tests and page objects to use relative URLs like '/'.
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    // Local sample app starts automatically before test execution.
    command: 'npm run site',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
