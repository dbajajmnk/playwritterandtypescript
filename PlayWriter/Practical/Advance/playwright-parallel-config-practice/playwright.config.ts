import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // workers control how many test files/tests can run in parallel.
  // In CI we keep it lower for stability. Locally we allow Playwright to decide.
  workers: process.env.CI ? 2 : undefined,

  // Retries are useful in CI because temporary network/browser issues can happen.
  retries: process.env.CI ? 1 : 0,

  // Reporter creates a useful HTML report after test execution.
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'http://127.0.0.1:3010',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  // webServer starts the sample testing website before Playwright tests run.
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3010',
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  },

  // Multi-browser projects demonstrate how the same test suite can run
  // in Chromium, Firefox, and WebKit.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], browserName: 'firefox' }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], browserName: 'webkit' }
    }
  ]
});
