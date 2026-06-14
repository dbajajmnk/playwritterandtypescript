import { test, expect } from '@playwright/test';

test.describe('Parallel Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('cart starts from zero for every test because of isolation', async ({ page }) => {
    await expect(page.getByTestId('cart-count')).toHaveText('0');
  });

  test('adding laptop updates cart only inside this test context', async ({ page }) => {
    await page.getByTestId('add-laptop').click();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-list')).toContainText('Laptop');
  });

  test('adding mouse does not reuse laptop test state', async ({ page }) => {
    await page.getByTestId('add-mouse').click();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-list')).toContainText('Mouse');
    await expect(page.getByTestId('cart-list')).not.toContainText('Laptop');
  });
});
