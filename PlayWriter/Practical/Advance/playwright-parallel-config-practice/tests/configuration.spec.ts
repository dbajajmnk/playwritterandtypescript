import { test, expect } from '@playwright/test';

test.describe('Configuration Practice Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('same test can run across Chromium, Firefox and WebKit projects', async ({ page, browserName }) => {
    await expect(page).toHaveTitle('Parallel Config Practice');
    await expect(page.getByTestId('browser-note')).toContainText('workers, projects, retries');

    // browserName comes from Playwright project configuration.
    // It helps us prove the same test runs in multiple browsers.
    expect(['chromium', 'firefox', 'webkit']).toContain(browserName);
  });

  test('auto-retrying assertion waits for delayed UI without manual wait', async ({ page }) => {
    await page.getByTestId('slow-save-button').click();

    // No waitForTimeout is needed.
    // Playwright assertion automatically retries until the message becomes visible.
    await expect(page.getByTestId('slow-save-message')).toBeVisible();
    await expect(page.getByTestId('slow-save-message')).toHaveText('Saved after delay');
  });
});
