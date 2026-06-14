import { Locator, Page } from '@playwright/test';

// PAGE LAYER / POM
// CartPage contains only cart-related locators and actions.
export class CartPage {
  readonly page: Page;
  readonly cartCount: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly checkoutMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartCount = page.getByTestId('cart-count');
    this.cartItems = page.getByTestId('cart-item');
    this.checkoutButton = page.getByTestId('checkout-button');
    this.checkoutMessage = page.getByTestId('checkout-message');
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
