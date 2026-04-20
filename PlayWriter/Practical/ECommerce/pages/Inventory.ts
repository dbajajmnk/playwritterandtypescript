import { Page, expect } from '@playwright/test';

export class Inventory {
  constructor(private page: Page) {}

  backpackAddButton = '#add-to-cart-sauce-labs-backpack';
  bikeLightAddButton = '#add-to-cart-sauce-labs-bike-light';
  cartLink = '.shopping_cart_link';
  title = '.title';

  async validateInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.page.click(this.backpackAddButton);
  }

  async addBikeLightToCart() {
    await this.page.click(this.bikeLightAddButton);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}