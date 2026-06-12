import { Page, test } from '@playwright/test';

// Utility Layer
// This helper creates named trace steps. In Trace Viewer, these step names are easier to read.
export async function openHomePage(page: Page) {
  await test.step('Open Trace Viewer demo home page', async () => {
    await page.goto('/');
  });
}

// Utility Layer
// Console logs are captured in trace, which helps students understand debugging artifacts.
export async function logBrowserMessage(page: Page) {
  page.on('console', (message) => {
    console.log(`[browser:${message.type()}] ${message.text()}`);
  });
}
