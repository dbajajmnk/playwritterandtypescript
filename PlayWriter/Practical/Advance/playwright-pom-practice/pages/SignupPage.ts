import { Locator, Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByLabel('Signup Name');
    this.emailInput = page.getByLabel('Signup Email');
    this.passwordInput = page.getByLabel('Signup Password');
    this.submitButton = page.getByRole('button', { name: 'Create Account' });
    this.successMessage = page.locator('#signup-success');
  }

  async enterName(name: string) {
    await this.nameInput.fill(name);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async signup(name: string, email: string, password: string) {
    await this.enterName(name);
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.submitForm();
  }
}
