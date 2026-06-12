import { expect, test } from '@playwright/test';
import { attachBrowserLogCollectors, attachLogsToReport } from '../utils/logCollectors';
import { captureStepScreenshot } from '../utils/screenshotHelper';

test.describe('Failure Debugging Demo', () => {
  test('intentional failure: checkout should show success but payment data is invalid', async ({ page }, testInfo) => {
    const logs = attachBrowserLogCollectors(page);

    await page.goto('/');

    // We intentionally enter invalid card data to create a real debugging scenario.
    await page.getByLabel('Card Number').fill('123');
    await page.getByRole('button', { name: 'Checkout' }).click();

    await captureStepScreenshot(page, testInfo, 'checkout-after-invalid-payment');
    await attachLogsToReport(testInfo, logs);

    // This assertion is intentionally wrong.
    // Purpose: show automatic screenshot/video/trace artifacts on failure.
    await expect(page.locator('#checkout-message')).toHaveText('Order placed successfully');
  });
});
