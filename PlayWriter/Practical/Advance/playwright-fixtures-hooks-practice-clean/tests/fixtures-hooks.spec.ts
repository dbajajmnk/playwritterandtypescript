import { test, expect } from '../fixtures/ecommerceFixtures';

let suiteStarted = false;
let suiteCleaned = false;

test.describe('Playwright Fixtures and Hooks Practice', () => {
  test.beforeAll(async () => {
    suiteStarted = true;
    console.log('beforeAll: Test suite setup completed once.');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Home Page' })).toBeVisible();
    await expect(page.locator('#home-message')).toHaveText('Homepage is ready for every test.');
  });

  test.afterEach(async ({ page }, testInfo) => {
    // Practice task: take screenshot on failure.
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `test-results/screenshots/${testInfo.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`,
        fullPage: true
      });
    }
  });

  test.afterAll(async () => {
    suiteCleaned = true;
    console.log('afterAll: Test suite cleanup completed once.');
  });

  test('hook demo: beforeAll and beforeEach setup are available', async ({ page }) => {
    expect(suiteStarted).toBeTruthy();
    await expect(page).toHaveTitle('Fixtures Hooks Store');
    await expect(page.getByTestId('home-link')).toBeVisible();
  });

  test('built-in fixture demo: page fixture opens the sample website', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Fixtures Hooks Store' })).toBeVisible();
    await expect(page.getByTestId('cart-count')).toHaveText('0');
  });

  test('custom data fixture demo: testUser provides reusable login data', async ({ testUser }) => {
    expect(testUser.email).toBe('user@test.com');
    expect(testUser.password).toBe('123456');
    expect(testUser.displayName).toBe('Regular User');
  });

  test('custom fixture demo: loggedInPage provides an already logged-in user', async ({ loggedInPage }) => {
    await expect(loggedInPage.getByTestId('dashboard-section')).toBeVisible();
    await expect(loggedInPage.getByTestId('welcome-message')).toHaveText('Welcome, Regular User');
  });

  test('custom fixture demo: productPage opens product section directly', async ({ productPage }) => {
    await expect(productPage.getByRole('heading', { name: 'Products' })).toBeVisible();
    await expect(productPage.getByTestId('product-card')).toHaveCount(3);
  });

  test('fixture combination demo: loggedInPage and testProduct add item to cart', async ({ loggedInPage, testProduct }) => {
    await loggedInPage.getByRole('button', { name: `Add ${testProduct} To Cart` }).click();

    await expect(loggedInPage.getByTestId('cart-count')).toHaveText('1');
    await expect(loggedInPage.getByTestId('cart-items')).toContainText(testProduct);
  });

  test('isolation demo: new test starts with empty cart after previous test', async ({ page }) => {
    await expect(page.getByTestId('cart-count')).toHaveText('0');
    await expect(page.getByTestId('cart-status')).toHaveText('Cart is empty.');
  });

  test('cleanup hook demo: cart can be cleared after adding product', async ({ productPage }) => {
    await productPage.getByRole('button', { name: 'Add Keyboard To Cart' }).click();
    await expect(productPage.getByTestId('cart-count')).toHaveText('1');

    await productPage.getByRole('button', { name: 'Clear Cart' }).click();
    await expect(productPage.getByTestId('cart-count')).toHaveText('0');
    await expect(productPage.getByTestId('cart-status')).toHaveText('Cart is empty.');
  });

  test('profile test with loggedInPage fixture: save profile message appears', async ({ loggedInPage }) => {
    await loggedInPage.getByRole('button', { name: 'Save Profile' }).click();
    await expect(loggedInPage.getByTestId('profile-save-message')).toBeVisible();
    await expect(loggedInPage.getByTestId('profile-save-message')).toHaveText('Profile saved.');
  });

  test('afterAll flag remains false during tests and becomes true only after suite', async () => {
    expect(suiteCleaned).toBeFalsy();
  });
});
