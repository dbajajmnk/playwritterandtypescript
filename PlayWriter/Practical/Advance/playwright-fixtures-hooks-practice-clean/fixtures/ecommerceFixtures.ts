import { test as base, expect, type Page } from '@playwright/test';
import { login, regularUser, type TestUser } from '../utils/auth';

type EcommerceFixtures = {
  testUser: TestUser;
  testProduct: string;
  loggedInPage: Page;
  productPage: Page;
};

export const test = base.extend<EcommerceFixtures>({
  testUser: async ({}, use) => {
    await use(regularUser);
  },

  testProduct: async ({}, use) => {
    await use('Laptop');
  },

  loggedInPage: async ({ page, testUser }, use) => {
    await login(page, testUser);
    await use(page);

    // Fixture cleanup keeps each test isolated.
    await page.getByRole('button', { name: 'Logout' }).click().catch(() => {});
  },

  productPage: async ({ page }, use) => {
    await page.goto('/#products');
    await expect(page.getByTestId('product-page-message')).toHaveText('Product page loaded.');
    await use(page);
  }
});

export { expect };
