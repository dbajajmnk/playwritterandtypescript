import { expect, test } from '@playwright/test';
import { users } from '../data/users';
import { attachBrowserLogCollectors, attachLogsToReport } from '../utils/logCollectors';
import { captureStepScreenshot } from '../utils/screenshotHelper';

test.describe('Screenshots and Logs Practice', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('manual screenshot: capture login page state', async ({ page }, testInfo) => {
    // Manual screenshots are useful for visual proof at important checkpoints.
    await captureStepScreenshot(page, testInfo, 'login-page-before-action');

    await expect(page.getByRole('heading', { name: 'Debug Store' })).toBeVisible();
  });

  test('console logs: capture browser console messages', async ({ page }, testInfo) => {
    const logs = attachBrowserLogCollectors(page);

    await page.getByRole('button', { name: 'Create Console Log' }).click();

    await expect(page.locator('#error-message')).toHaveText('Console logs generated');

    // We attach logs to the Playwright HTML report for debugging review.
    await attachLogsToReport(testInfo, logs);

    expect(logs.consoleLogs.some(log => log.text.includes('Manual console log'))).toBeTruthy();
    expect(logs.consoleLogs.some(log => log.type === 'warning')).toBeTruthy();
  });

  test('network logs: capture API request during add to cart', async ({ page }, testInfo) => {
    const logs = attachBrowserLogCollectors(page);

    await page.getByRole('button', { name: 'Add To Cart' }).click();

    await expect(page.locator('#cart-message')).toContainText('Cart updated');

    await attachLogsToReport(testInfo, logs);

    expect(logs.networkLogs.some(log => log.url.includes('/api/status'))).toBeTruthy();
  });

  test('page error logs: capture uncaught JavaScript error', async ({ page }, testInfo) => {
    const logs = attachBrowserLogCollectors(page);

    await page.getByRole('button', { name: 'Create Page Error' }).click();

    await expect(page.locator('#error-message')).toHaveText('Page error generated');

    // Give the browser a short moment to emit the pageerror event.
    await expect.poll(() => logs.pageErrors.length).toBeGreaterThan(0);

    await attachLogsToReport(testInfo, logs);

    expect(logs.pageErrors[0]).toContain('Demo page error');
  });

  test('combined debugging: screenshot plus console and network logs', async ({ page }, testInfo) => {
    const logs = attachBrowserLogCollectors(page);

    await page.getByLabel('Email').fill(users.validUser.email);
    await page.getByLabel('Password').fill(users.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#login-message')).toHaveText('Login successful');

    await page.getByRole('button', { name: 'Add To Cart' }).click();
    await expect(page.locator('#cart-message')).toContainText('Cart updated');

    await captureStepScreenshot(page, testInfo, 'combined-debug-success-state');
    await attachLogsToReport(testInfo, logs);

    expect(logs.consoleLogs.length).toBeGreaterThan(0);
    expect(logs.networkLogs.some(log => log.url.includes('/api/status'))).toBeTruthy();
  });
});
