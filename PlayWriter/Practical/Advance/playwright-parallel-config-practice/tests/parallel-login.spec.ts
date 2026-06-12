import { test, expect } from '@playwright/test';
import { users } from '../data/users';

test.describe('Parallel Login Tests', () => {
  // Each test receives a fresh page and browser context.
  // This is why tests can safely run in parallel without sharing cookies/session state.
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('valid login works in isolated browser context', async ({ page }) => {
    await page.getByTestId('email-input').fill(users.validUser.email);
    await page.getByTestId('password-input').fill(users.validUser.password);
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('login-message')).toHaveText('Login successful');
  });

  test('invalid login does not affect valid login test', async ({ page }) => {
    await page.getByTestId('email-input').fill(users.invalidUser.email);
    await page.getByTestId('password-input').fill(users.invalidUser.password);
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('login-message')).toHaveText('Invalid credentials');
  });
});
