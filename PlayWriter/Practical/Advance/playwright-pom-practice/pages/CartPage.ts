import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly section: Locator;
  readonly cartItems: Locator;
  readonly emptyCartMessage: Locator;
  readonly cartCount: Locator;
  readonly totalItems: Locator;
  readonly clearCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.section = page.locator('#cart-section');
    this.cartItems = page.locator('#cart-items li');
    this.emptyCartMessage = page.locator('#empty-cart-message');
    this.cartCount = page.getByTestId('cart-count');
    this.totalItems = page.getByTestId('total-items');
    this.clearCartButton = page.getByRole('button', { name: 'Clear Cart' });
  }

  async clearCart() {
    await this.clearCartButton.click();
  }
}
