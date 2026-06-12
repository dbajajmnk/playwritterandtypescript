import { expect, test } from '@playwright/test';
import { openHomePage } from '../utils/debugSteps';

test.describe('Trace Viewer Practice - Intentional Failure', () => {
  test.beforeEach(async ({ page }) => {
    await openHomePage(page);
  });

  test('intentional failure: use trace viewer to find the wrong expected message', async ({ page }) => {
    await test.step('Click payment button', async () => {
      await page.getByTestId('payment-button').click();
    });

    await test.step('Assert payment message', async () => {
      // Intentional failure for classroom debugging.
      // Actual message is: Payment Failed
      // Expected message below is wrong so students can open Trace Viewer and inspect the failure.
      await expect(page.getByTestId('payment-message')).toHaveText('Payment Successful');
    });
  });
});
