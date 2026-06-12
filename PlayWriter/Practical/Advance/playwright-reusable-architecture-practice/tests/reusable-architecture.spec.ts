import { test, expect } from '../fixtures/appFixtures';
import { users } from '../data/users';
import { products } from '../data/products';
import { buildOrderNote, normalizeText } from '../utils/stringUtils';
import { testConfig } from '../config/testConfig';

// TEST LAYER
// Tests should focus on business flow and assertions.
// Selectors and repeated setup are handled by Page Layer and Fixture Layer.

test.describe('Reusable Test Architecture Practice', () => {
  test.beforeAll(async () => {
    // beforeAll runs once before all tests in this file.
    // Use it for file-level setup, not for test-specific browser actions.
    console.log('Starting reusable architecture test suite');
  });

  test.beforeEach(async ({ page }) => {
    // beforeEach runs before every test.
    // This example keeps browser state clean and predictable.
    await page.context().clearCookies();
  });

  test.afterEach(async ({ page }, testInfo) => {
    // afterEach runs after every test.
    // Screenshot on failure helps debugging in real projects and CI/CD.
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({ path: `test-results/${testInfo.title}-failure.png`, fullPage: true });
    }
  });

  test.afterAll(async () => {
    // afterAll runs once after all tests in this file.
    console.log('Reusable architecture test suite completed');
  });

  test('config layer: app title comes from centralized config', async ({ loginPage, page }) => {
    await loginPage.expectLoginPageVisible();

    // Test gets expected value from config layer, not a hardcoded string.
    await expect(page).toHaveTitle(testConfig.appName);
  });

  test('page layer: invalid login uses LoginPage actions and test assertions', async ({ loginPage }) => {
    await loginPage.login(users.invalidUser.email, users.invalidUser.password);

    // Assertion stays in test layer so business expectation is visible here.
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Invalid login details');
  });

  test('fixture layer: loggedInApp provides already logged-in page objects', async ({ loggedInApp }) => {
    // No login code is written here because the fixture already handled it.
    await expect(loggedInApp.dashboardPage.title).toHaveText('Dashboard');
    await expect(loggedInApp.dashboardPage.welcomeMessage).toContainText(users.validUser.name);
  });

  test('data + page layer: search product without duplicate selectors', async ({ loggedInApp }) => {
    await loggedInApp.productPage.searchProduct(products.laptop);

    await expect(loggedInApp.productPage.productItems).toHaveCount(1);
    await expect(loggedInApp.productPage.productByName(products.laptop)).toBeVisible();
  });

  test('e-commerce flow: add product to cart and checkout using reusable pages', async ({ loggedInApp }) => {
    await loggedInApp.productPage.searchProduct(products.mobile);
    await loggedInApp.productPage.addProductToCart(products.mobile);

    await expect(loggedInApp.cartPage.cartCount).toHaveText('1');
    await expect(loggedInApp.cartPage.cartItems).toHaveCount(1);
    await expect(loggedInApp.cartPage.checkoutButton).toBeEnabled();

    await loggedInApp.cartPage.checkout();

    await expect(loggedInApp.cartPage.checkoutMessage).toBeVisible();
    await expect(loggedInApp.cartPage.checkoutMessage).toHaveText('Order placed successfully');
  });

  test('utility layer: helper functions support test logic', async () => {
    // Utility methods are tested separately because they are normal TypeScript functions.
    expect(normalizeText('  Order   Placed Successfully  ')).toBe('order placed successfully');
    expect(buildOrderNote(products.headphones)).toBe('Order created for Headphones');
  });
});
