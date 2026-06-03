import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  checkoutButton = '#checkout';
  cartItems = '.cart_item';

  async validateCartHasItems() {
    await expect(this.page.locator(this.cartItems)).toHaveCount(1);
  }

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}