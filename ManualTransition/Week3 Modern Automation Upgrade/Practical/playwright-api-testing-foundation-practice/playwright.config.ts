import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  reporter: [['html'], ['list']],
  use: {
    // baseURL is used by request fixture, so tests can call /users instead of full URL.
    baseURL: 'http://127.0.0.1:3100',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'node sample-api/server.js',
    url: 'http://127.0.0.1:3100/health',
    reuseExistingServer: !process.env.CI,
    timeout: 15_000
  }
});
