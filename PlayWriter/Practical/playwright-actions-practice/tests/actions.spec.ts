import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Playwright Actions Practice', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('click action: user can login with valid credentials', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('user@test.com');
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('status').first()).toHaveText('Login successful');
  });

  test('fill, type with delay, clear, select, check, uncheck, upload and submit form', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Deepak Kumar');

    await page.getByLabel('Contact Email').type('deepak@test.com', { delay: 50 });
    await expect(page.getByLabel('Contact Email')).toHaveValue('deepak@test.com');

    await page.getByLabel('Contact Email').clear();
    await page.getByLabel('Contact Email').fill('trainer@test.com');

    await page.locator('#country').selectOption('India');
    await expect(page.locator('#country')).toHaveValue('India');

    await page.getByLabel('Playwright').check();
    await expect(page.getByLabel('Playwright')).toBeChecked();

    await page.getByLabel('TypeScript').check();
    await page.getByLabel('TypeScript').uncheck();
    await expect(page.getByLabel('TypeScript')).not.toBeChecked();

    await page.getByLabel('Accept Terms').check();
    await expect(page.getByLabel('Accept Terms')).toBeChecked();

    const filePath = path.join(process.cwd(), 'uploads', 'sample-file.txt');
    await page.setInputFiles('#profile-file', filePath);
    await expect(page.locator('#upload-message')).toHaveText('Uploaded: sample-file.txt');

    await page.getByRole('button', { name: 'Submit Form' }).click();
    await expect(page.locator('#form-message')).toHaveText('Form submitted successfully');
  });

  test('keyboard action: press Enter after typing search text', async ({ page }) => {
    await page.getByPlaceholder('Search').fill('Playwright Actions');
    await page.keyboard.press('Enter');

    await expect(page.locator('#search-result')).toHaveText('Search executed for: Playwright Actions');
  });

  test('hover action: menu panel becomes visible', async ({ page }) => {
    await page.locator('#menu').hover();

    await expect(page.locator('#menu-panel')).toBeVisible();
    await expect(page.locator('#menu-panel')).toContainText('Dashboard');
  });

  test('drag and drop action: source item is dropped into target', async ({ page }) => {
    await page.dragAndDrop('#source', '#target');

    await expect(page.locator('#target')).toHaveText('Dropped Successfully');
    await expect(page.locator('#drag-message')).toHaveText('Drag and drop completed');
  });

  test('double click and right click actions', async ({ page }) => {
    await page.locator('#double-click-button').dblclick();
    await expect(page.locator('#double-click-message')).toHaveText('Double click completed');

    await page.locator('#right-click-box').click({ button: 'right' });
    await expect(page.locator('#right-click-message')).toHaveText('Right click completed');
  });

  test('focus and clear actions on notes input', async ({ page }) => {
    const notes = page.locator('#notes');

    await notes.focus();
    await expect(page.locator('#focus-message')).toHaveText('Notes input focused');

    await notes.clear();
    await expect(notes).toHaveValue('');

    await notes.fill('New note added by Playwright');
    await expect(notes).toHaveValue('New note added by Playwright');
  });

  test('scroll action: user can scroll to lower section', async ({ page }) => {
    const scrollSection = page.locator('#scroll-section');

    await scrollSection.scrollIntoViewIfNeeded();

    await expect(scrollSection).toBeInViewport();
    await expect(page.locator('#scroll-message')).toHaveText('You reached the scroll section.');
  });

  test('force click demo: visually covered button can be clicked with force option', async ({ page }) => {
    await page.locator('#covered-button').click({ force: true });

    await expect(page.locator('#covered-message')).toHaveText('Covered button clicked using force');
  });
});
