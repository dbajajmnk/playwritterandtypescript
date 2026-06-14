import { test, expect, chromium } from '@playwright/test';
import { validUser, invalidUser } from '../data/testData';

test.describe('Playwright Basics Practice', () => {
  test.beforeEach(async ({ page }) => {
    // The page fixture gives us one fresh browser page for each test.
    // This is the most common beginner-friendly Playwright test style.
    await page.goto('/');
  });

  test('page concept: page can navigate and verify title', async ({ page }) => {
    // Page represents one browser tab.
    await expect(page).toHaveTitle('Playwright Basics Practice');
    await expect(page.getByRole('heading', { name: 'Playwright Basics Practice' })).toBeVisible();
  });

  test('locator concept: locate elements by role, label, test id, css and text', async ({ page }) => {
    // Recommended locator: role-based locator.
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Label locator is useful for form controls.
    await page.getByLabel('Email').fill(validUser.email);
    await page.getByLabel('Password').fill(validUser.password);

    // Test id locator is stable for automation.
    await page.getByTestId('primary-action').click();
    await expect(page.locator('#action-result')).toHaveText('Primary action clicked');

    // CSS locator is still useful when needed.
    await page.locator('.secondary-action').click();
    await expect(page.locator('#action-result')).toHaveText('Secondary action clicked');

    // Text locator can be used for visible text.
    await expect(page.getByText('Auto Waiting Practice')).toBeVisible();
  });

  test('auto waiting concept: Playwright waits for delayed data automatically', async ({ page }) => {
    await page.getByRole('button', { name: 'Load Data' }).click();

    // The list appears after a delay in the application.
    // We do not use Thread.sleep or manual timeout.
    // Playwright assertion auto-retries until the condition becomes true.
    await expect(page.locator('#product-list li')).toHaveCount(3);
    await expect(page.getByText('Laptop')).toBeVisible();
  });

  test('login simulation: valid credentials show success message', async ({ page }) => {
    await page.getByLabel('Email').fill(validUser.email);
    await page.getByLabel('Password').fill(validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#login-message')).toHaveText('Login successful');
    await expect(page.locator('#login-message')).toHaveClass('success');
  });

  test('login simulation: invalid credentials show error message', async ({ page }) => {
    await page.getByLabel('Email').fill(invalidUser.email);
    await page.getByLabel('Password').fill(invalidUser.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#login-message')).toHaveText('Invalid login details');
    await expect(page.locator('#login-message')).toHaveClass('error');
  });

  test('browser context concept: two contexts behave like two isolated users', async ({ browser }) => {
    // Browser is the actual browser engine.
    // Context is like a clean user profile/session inside the browser.
    const userAContext = await browser.newContext();
    const userBContext = await browser.newContext();

    const userAPage = await userAContext.newPage();
    const userBPage = await userBContext.newPage();

    await userAPage.goto('/');
    await userBPage.goto('/');

    await userAPage.getByRole('button', { name: 'Increase Counter' }).click();
    await userAPage.getByRole('button', { name: 'Increase Counter' }).click();

    // User A has changed localStorage inside User A context.
    await expect(userAPage.locator('#counter-value')).toHaveText('2');

    // User B is isolated, so User B still sees zero.
    await expect(userBPage.locator('#counter-value')).toHaveText('0');

    await userAContext.close();
    await userBContext.close();
  });

  test('manual browser flow: launch browser, create context, create page', async () => {
    // This test shows the low-level architecture:
    // Browser -> Context -> Page -> Locator/Action.
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://127.0.0.1:4302/');
    await expect(page.locator('h1')).toHaveText('Playwright Basics Practice');

    await browser.close();
  });
});
