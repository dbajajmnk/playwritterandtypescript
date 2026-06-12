import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  fullyParallel: false,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: 'http://127.0.0.1:3045',

    // Automatic artifact configuration.
    // Screenshot is captured only when a test fails.
    screenshot: 'only-on-failure',

    // Video is kept only when a test fails.
    video: 'retain-on-failure',

    // Trace is recorded on retry, useful for CI debugging.
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3045',
    reuseExistingServer: !process.env.CI,
    timeout: 15_000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
