import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productsSection: Locator;
  readonly searchInput: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsSection = page.locator('#products-section');
    this.searchInput = page.getByLabel('Search Products');
    this.productCards = page.locator('.product-card');
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
  }

  productCard(productName: string) {
    return this.page.locator('.product-card', { hasText: productName });
  }

  async viewProduct(productName: string) {
    await this.productCard(productName).getByRole('button', { name: `View ${productName}` }).click();
  }

  async addProductToCart(productName: string) {
    await this.productCard(productName).getByRole('button', { name: `Add ${productName} To Cart` }).click();
  }
}
