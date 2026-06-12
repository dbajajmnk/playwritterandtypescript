import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: false,
  reporter: [['html'], ['list']],

  // This command starts our local sample API before tests run.
  // reuseExistingServer allows you to keep the API running while practicing locally.
  webServer: {
    command: 'npm run api',
    url: 'http://127.0.0.1:3000/health',
    reuseExistingServer: !process.env.CI,
    timeout: 15_000
  },

  use: {
    // Base URL is used by Playwright request fixture and by our custom API clients.
    baseURL: 'http://127.0.0.1:3000'
  }
});
