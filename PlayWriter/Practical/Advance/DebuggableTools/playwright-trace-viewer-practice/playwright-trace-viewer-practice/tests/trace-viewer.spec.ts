import { expect, test } from '@playwright/test';
import { users } from '../data/users';
import { logBrowserMessage, openHomePage } from '../utils/debugSteps';

test.describe('Trace Viewer Practice - Passing Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Hook Layer
    // This runs before each test and opens the sample website.
    await logBrowserMessage(page);
    await openHomePage(page);
  });

  test('records login, search, add to cart and checkout steps in trace', async ({ page }) => {
    // Test Layer
    // Each test.step creates a readable section inside Trace Viewer.
    await test.step('Login with valid credentials', async () => {
      await page.getByTestId('login-email').fill(users.validUser.email);
      await page.getByTestId('login-password').fill(users.validUser.password);
      await page.getByTestId('login-button').click();
      await expect(page.getByTestId('login-message')).toHaveText('Login successful');
    });

    await test.step('Search product', async () => {
      await page.getByTestId('search-input').fill('Laptop');
      await page.getByTestId('search-button').click();
      await expect(page.getByTestId('search-message')).toContainText('laptop');
    });

    await test.step('Add product to cart', async () => {
      await page.getByTestId('add-laptop').click();
      await expect(page.getByTestId('cart-count')).toHaveText('1');
      await expect(page.getByTestId('checkout-button')).toBeEnabled();
    });

    await test.step('Complete checkout', async () => {
      await page.getByTestId('checkout-button').click();
      await expect(page.getByTestId('checkout-message')).toHaveText('Checkout completed');
    });
  });

  test('records failed login flow for trace analysis', async ({ page }) => {
    await test.step('Try login with invalid credentials', async () => {
      await page.getByTestId('login-email').fill(users.invalidUser.email);
      await page.getByTestId('login-password').fill(users.invalidUser.password);
      await page.getByTestId('login-button').click();
      await expect(page.getByTestId('login-message')).toHaveText('Invalid login');
    });
  });
});
