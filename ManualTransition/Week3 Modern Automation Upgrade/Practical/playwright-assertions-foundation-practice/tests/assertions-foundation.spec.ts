import { test, expect } from '@playwright/test';
import { profileData, users } from '../data/testData';

test.describe('Assertions in Playwright Practice', () => {
  test.beforeEach(async ({ page }) => {
    // Every test starts from the same page.
    // This keeps tests independent and avoids state leakage.
    await page.goto('/');
  });

  test('title and heading assertions validate page identity', async ({ page }) => {
    // Page-level assertion checks browser page title.
    await expect(page).toHaveTitle('Playwright Assertions Practice');

    // Locator assertion checks visible UI text.
    await expect(page.getByTestId('page-heading')).toHaveText('Playwright Assertions Practice');

    // Contain text is useful when exact full text is not required.
    await expect(page.locator('#intro-message')).toContainText('Assertions verify');
  });

  test('valid login flow validates success text, URL, and dashboard visibility', async ({ page }) => {
    // Action section: perform login.
    await page.getByTestId('email-input').fill(users.validUser.email);
    await page.getByTestId('password-input').fill(users.validUser.password);
    await page.getByTestId('login-button').click();

    // Assertion section: verify expected results.
    await expect(page.getByTestId('login-success')).toBeVisible();
    await expect(page.getByTestId('login-success')).toHaveText('Login successful');

    // URL assertion confirms navigation/state changed correctly.
    await expect(page).toHaveURL(/dashboard/);

    // Visibility assertion confirms dashboard is available after login.
    await expect(page.getByTestId('dashboard-panel')).toBeVisible();
    await expect(page.getByTestId('welcome-message')).toHaveText('Welcome, Automation Learner');
  });

  test('invalid login validates error message and hidden dashboard', async ({ page }) => {
    await page.getByTestId('email-input').fill(users.invalidUser.email);
    await page.getByTestId('password-input').fill(users.invalidUser.password);
    await page.getByTestId('login-button').click();

    // Negative validation: error should be visible.
    await expect(page.getByTestId('login-error')).toBeVisible();
    await expect(page.getByTestId('login-error')).toHaveText('Invalid email or password');

    // Dashboard should remain hidden for invalid login.
    await expect(page.getByTestId('dashboard-panel')).toBeHidden();
  });

  test('state assertions validate enabled, disabled, checked, and value states', async ({ page }) => {
    const fullNameInput = page.getByTestId('full-name-input');
    const termsCheckbox = page.getByTestId('terms-checkbox');
    const saveButton = page.getByTestId('save-profile-button');

    // Input value assertion.
    await fullNameInput.fill(profileData.fullName);
    await expect(fullNameInput).toHaveValue(profileData.fullName);

    // Before accepting terms, button should be disabled.
    await expect(saveButton).toBeDisabled();

    // Checkbox state assertion.
    await termsCheckbox.check();
    await expect(termsCheckbox).toBeChecked();

    // After accepting terms, button should be enabled.
    await expect(saveButton).toBeEnabled();

    await saveButton.click();
    await expect(page.getByTestId('profile-message')).toBeVisible();
    await expect(page.getByTestId('profile-message')).toHaveText('Profile saved');
  });

  test('attribute and class assertions validate stable element configuration', async ({ page }) => {
    await page.getByTestId('email-input').fill(users.validUser.email);
    await page.getByTestId('password-input').fill(users.validUser.password);
    await page.getByTestId('login-button').click();

    const dashboardLink = page.getByTestId('dashboard-link');
    const statusBadge = page.getByTestId('status-badge');

    // Attribute assertion validates href or data-related configuration.
    await expect(dashboardLink).toHaveAttribute('href', '#dashboard');

    // Class assertion validates state class.
    await expect(statusBadge).toHaveClass(/active/);
  });

  test('count assertion validates dynamic product list', async ({ page }) => {
    await page.getByTestId('load-products-button').click();

    // Playwright web-first assertions auto-wait until the list has 3 items.
    // No Thread.sleep or manual timeout is required.
    await expect(page.getByTestId('product-item')).toHaveCount(3);

    await expect(page.getByTestId('product-item').first()).toHaveText('Laptop');
  });

  test('auto-waiting assertion validates delayed message without manual wait', async ({ page }) => {
    await page.getByTestId('delayed-save-button').click();

    // This assertion waits automatically until the message becomes visible.
    // This is more reliable than using a fixed wait.
    await expect(page.getByTestId('delayed-message')).toBeVisible();
    await expect(page.getByTestId('delayed-message')).toHaveText('Saved after delay');
  });

  test('normal expect validates JavaScript values', async () => {
    const actualStatus = 'success';
    const products = ['Laptop', 'Keyboard', 'Mouse'];
    const user = { role: 'learner', active: true };

    // These are normal JavaScript assertions.
    // Use them for variables, arrays, objects, and computed values.
    expect(actualStatus).toBe('success');
    expect(products).toContain('Keyboard');
    expect(user.active).toBeTruthy();
    expect(user.role).not.toBeNull();
  });
});
