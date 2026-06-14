import { test, expect, chromium } from '@playwright/test';
import { expectedTexts, student } from '../data/testData';

test.describe('Introduction to Playwright Practice', () => {
  test('page fixture: open local practice website and verify title', async ({ page }) => {
    // page is a built-in Playwright fixture.
    // It represents one browser tab.
    await page.goto('/');

    await expect(page).toHaveTitle(expectedTexts.pageTitle);
    await expect(page.getByRole('heading', { name: expectedTexts.heading })).toBeVisible();
  });

  test('locator concept: locate elements and perform basic user action', async ({ page }) => {
    await page.goto('/');

    // Locator is Playwright's recommended way to target elements.
    // It auto-waits before performing actions like fill and click.
    await page.getByLabel('Student Name').fill(student.name);
    await page.getByRole('button', { name: 'Start Learning' }).click();

    await expect(page.getByRole('status')).toHaveText(expectedTexts.welcomeMessage);
  });

  test('core concepts list should explain browser, context, page and locator', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('concept-browser')).toContainText('Browser');
    await expect(page.getByTestId('concept-context')).toContainText('Context');
    await expect(page.getByTestId('concept-page')).toContainText('Page');
    await expect(page.getByTestId('concept-locator')).toContainText('Locator');
  });

  test('comparison panel: Selenium vs Playwright information becomes visible', async ({ page }) => {
    await page.goto('/');

    const comparisonPanel = page.locator('#comparison-panel');
    await expect(comparisonPanel).toBeHidden();

    await page.getByRole('button', { name: 'Show Comparison' }).click();

    await expect(comparisonPanel).toBeVisible();
    await expect(comparisonPanel).toContainText('Selenium');
    await expect(comparisonPanel).toContainText('Playwright');
  });

  test('manual browser, context and page flow for architecture understanding', async () => {
    // This test demonstrates the internal architecture manually:
    // Browser -> Context -> Page.
    // In most real tests, we use the built-in page fixture instead.
    const browser = await chromium.launch();

    // Context is an isolated user session, like a clean browser profile.
    const context = await browser.newContext();

    // Page is one tab inside that isolated context.
    const page = await context.newPage();

    await page.goto('http://127.0.0.1:3000');
    await expect(page.getByRole('heading', { name: expectedTexts.heading })).toBeVisible();

    // Always close browser when launching manually.
    await browser.close();
  });
});
