import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly addressInput: Locator;
  readonly placeOrderButton: Locator;
  readonly orderSuccess: Locator;
  readonly orderError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByLabel('Customer Name');
    this.addressInput = page.getByLabel('Delivery Address');
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    this.orderSuccess = page.locator('#order-success');
    this.orderError = page.locator('#order-error');
  }

  async fillCheckoutDetails(name: string, address: string) {
    await this.nameInput.fill(name);
    await this.addressInput.fill(address);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
