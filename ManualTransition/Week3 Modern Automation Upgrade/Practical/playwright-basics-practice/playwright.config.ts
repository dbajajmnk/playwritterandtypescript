import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  fullyParallel: false,
  reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:4302',

    // Screenshot/video/trace settings help beginners debug failures.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  webServer: {
    command: 'node sample-site/server.js',
    url: 'http://127.0.0.1:4302',
    reuseExistingServer: !process.env.CI,
    timeout: 10_000
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
