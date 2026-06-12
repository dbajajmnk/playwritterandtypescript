import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Tests should be independent. Playwright creates a fresh browser context for each test by default.
  fullyParallel: true,

  // Useful reports for beginners: terminal list + HTML report.
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    // Local sample website served by webServer below.
    baseURL: 'http://127.0.0.1:3000',

    // Screenshot/video/trace help students debug when tests fail.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  // Starts the sample website automatically before tests run.
  webServer: {
    command: 'node sample-site/server.js',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 10_000
  }
});
