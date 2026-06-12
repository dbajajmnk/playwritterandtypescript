import { expect, Locator, Page } from '@playwright/test';

// PAGE LAYER / POM
// This class represents only the Login screen.
// It hides selectors from test files and exposes readable actions.
export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators are declared once and reused by methods.
    // Using data-testid makes locators stable for automation.
    this.emailInput = page.getByTestId('login-email');
    this.passwordInput = page.getByTestId('login-password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.getByTestId('login-error');
  }

  async open(): Promise<void> {
    // Navigation is part of the page action.
    await this.page.goto('/');
  }

  async login(email: string, password: string): Promise<void> {
    // POM method should perform UI actions.
    // Test file should decide what to assert after this action.
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoginPageVisible(): Promise<void> {
    // Small page-level verification is acceptable when it verifies page readiness.
    // Business assertions should still stay in test files.
    await expect(this.loginButton).toBeVisible();
  }
}
