import { Page, expect } from '@playwright/test';

export class Login {
  constructor(private page: Page) {}

  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';
  errorMessage = '[data-test="error"]';

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async validateLoginPageVisible() {
    await expect(this.page.locator(this.loginButton)).toBeVisible();
  }

  async validateLoginErrorVisible() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}