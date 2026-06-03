import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  firstName = '#first-name';
  lastName = '#last-name';
  postalCode = '#postal-code';
  continueButton = '#continue';
  finishButton = '#finish';
  successHeader = '.complete-header';

  async fillCheckoutInfo(first: string, last: string, zip: string) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async validateOrderSuccess() {
    await expect(this.page.locator(this.successHeader)).toHaveText('Thank you for your order!');
  }
}