import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests one by one for beginner-friendly trace analysis.
  // You can increase workers later when students understand trace files.
  workers: 1,

  // Retry once in CI. This works well with trace: 'on-first-retry'.
  retries: process.env.CI ? 1 : 0,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'http://127.0.0.1:3000',

    // Best practice: Trace is recorded only on first retry.
    // For classroom debugging, run: npm run test:trace-on
    trace: 'on-first-retry',

    // Screenshot and video help students compare trace artifacts with normal reports.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  webServer: {
    command: 'node sample-site/server.js',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
