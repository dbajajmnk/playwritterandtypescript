import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly section: Locator;
  readonly selectedProductName: Locator;
  readonly selectedProductPrice: Locator;
  readonly addSelectedProductButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.section = page.locator('#product-detail-section');
    this.selectedProductName = page.getByTestId('selected-product-name');
    this.selectedProductPrice = page.getByTestId('selected-product-price');
    this.addSelectedProductButton = page.getByRole('button', { name: 'Add Selected Product To Cart' });
  }

  async addSelectedProductToCart() {
    await this.addSelectedProductButton.click();
  }
}
