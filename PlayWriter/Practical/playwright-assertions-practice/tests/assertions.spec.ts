import { expect, test } from '@playwright/test';

async function loginSuccessfully(page: import('@playwright/test').Page) {
  await page.goto('/login');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('user@test.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByText('Welcome, Test User')).toBeVisible();
}

test.describe('Playwright Assertions Practice', () => {
  test('page assertions: title and URL are correct on login page', async ({ page }) => {
    await page.goto('/login');

    await expect(page).toHaveTitle(/TechLambda Assertion Practice/);
    await expect(page).toHaveURL(/login/);
  });

  test('locator assertions: login elements are visible, attached, enabled and hidden correctly', async ({ page }) => {
    await page.goto('/login');

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.locator('#login-form')).toBeAttached();
    await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeEnabled();
    await expect(page.locator('#loading-message')).toBeHidden();
    await expect(page.locator('#login-error')).toBeHidden();
  });

  test('input and focused assertions: email field keeps the entered value', async ({ page }) => {
    await page.goto('/login');

    const emailInput = page.getByRole('textbox', { name: 'Email', exact: true });
    await emailInput.focus();
    await expect(emailInput).toBeFocused();

    await emailInput.fill('student@test.com');
    await expect(emailInput).toHaveValue('student@test.com');
  });

  test('real login flow: valid credentials navigate to dashboard', async ({ page }) => {
    await loginSuccessfully(page);

    await expect(page).toHaveTitle(/Dashboard/);
    await expect(page.locator('#dashboard-page')).toBeVisible();
    await expect(page.locator('#user-card')).toContainText('Role: Admin');
  });

  test('text assertion: invalid login shows error message', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('wrong@test.com');
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('wrong-password');
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page.getByRole('alert')).toHaveText('Invalid credentials');
    await expect(page.getByRole('alert')).toContainText('credentials');
  });

  test('count assertion: search result list shows matching products', async ({ page }) => {
    await loginSuccessfully(page);

    await page.getByRole('searchbox', { name: 'Search' }).fill('p');
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await expect(page.locator('.search-result-item')).toHaveCount(2);
    await expect(page.locator('#search-summary')).toHaveText('2 result(s) found');
  });

  test('empty and count assertions: cart is empty first and then contains one item', async ({ page }) => {
    await loginSuccessfully(page);

    await expect(page.locator('#cart-items')).toBeEmpty();
    await expect(page.locator('.cart-item')).toHaveCount(0);

    await page.getByRole('button', { name: 'Add Laptop To Cart' }).click();

    await expect(page.locator('#cart-badge')).toHaveText('1');
    await expect(page.locator('.cart-item')).toHaveCount(1);
    await expect(page.locator('.cart-item')).toHaveText('Laptop');
  });

  test('checkbox, enabled and disabled assertions: contact submit becomes enabled after accepting terms', async ({ page }) => {
    await loginSuccessfully(page);

    const termsCheckbox = page.getByLabel('Accept Terms');
    const submitButton = page.getByRole('button', { name: 'Submit Contact' });

    await expect(termsCheckbox).not.toBeChecked();
    await expect(submitButton).toBeDisabled();
    await expect(page.getByRole('alert')).toContainText('Please accept terms');

    await termsCheckbox.check();

    await expect(termsCheckbox).toBeChecked();
    await expect(submitButton).toBeEnabled();
    await expect(page.locator('#contact-error')).toBeHidden();
  });

  test('attribute and class assertions: contact email and status badge are configured correctly', async ({ page }) => {
    await loginSuccessfully(page);

    await expect(page.locator('#contact-email')).toHaveAttribute('type', 'email');
    await expect(page.getByRole('link', { name: 'Profile' })).toHaveAttribute('href', '/profile');
    await expect(page.locator('#status-badge')).toHaveClass(/success/);
  });

  test('form success assertion: success toast appears after valid contact submission', async ({ page }) => {
    await loginSuccessfully(page);

    await page.getByLabel('Accept Terms').check();
    await page.getByRole('button', { name: 'Submit Contact' }).click();

    await expect(page.getByTestId('success-msg')).toHaveText('Contact saved successfully');
    await expect(page.getByTestId('success-msg')).toContainText('saved');
  });

  test('role-based UI assertion: admin panel is hidden for regular user', async ({ page }) => {
    await loginSuccessfully(page);

    await expect(page.locator('#admin-panel')).toBeVisible();
    await page.getByRole('button', { name: 'Switch To Regular User' }).click();

    await expect(page.locator('#admin-panel')).toBeHidden();
    await expect(page.getByRole('button', { name: 'Switch To Admin' })).toBeVisible();
  });

  test('auto-retrying assertion: saved message appears after delay without manual wait', async ({ page }) => {
    await loginSuccessfully(page);

    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByTestId('delayed-save-message')).toBeVisible();
    await expect(page.getByTestId('delayed-save-message')).toHaveText('Saved');
  });

  test('soft assertions: dashboard can validate multiple UI pieces in one test', async ({ page }) => {
    await loginSuccessfully(page);

    await expect.soft(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect.soft(page.locator('#status-badge')).toHaveText('Active');
    await expect.soft(page.locator('#role-label')).toHaveText('Admin');
    await expect.soft(page.getByRole('button', { name: 'Save' })).toBeVisible();
  });

  test('JavaScript value assertions: normal expect checks variables and computed values', async () => {
    const totalProducts = 3;
    const frameworkName = 'playwright';
    const isReady = true;
    const emptyValue = null;

    expect(totalProducts + 2).toBe(5);
    expect(frameworkName).toContain('wright');
    expect(isReady).toBeTruthy();
    expect(emptyValue).toBeNull();
  });
});
