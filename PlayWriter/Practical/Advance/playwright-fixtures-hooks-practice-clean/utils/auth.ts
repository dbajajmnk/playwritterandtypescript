import { Page, expect } from '@playwright/test';

export type TestUser = {
  email: string;
  password: string;
  displayName: string;
};

export const regularUser: TestUser = {
  email: 'user@test.com',
  password: '123456',
  displayName: 'Regular User'
};

export async function login(page: Page, user: TestUser = regularUser): Promise<void> {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Login Email' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Login Password' }).fill(user.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByTestId('dashboard-section')).toBeVisible();
  await expect(page.getByTestId('welcome-message')).toContainText(user.displayName);
}
