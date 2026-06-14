import { Locator, Page } from '@playwright/test';

// PAGE LAYER / POM
// ProductPage abstracts product search and product selection behavior.
export class ProductPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly productItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByTestId('search-box');
    this.searchButton = page.getByTestId('search-button');
    this.productItems = page.getByTestId('product-item');
  }

  async searchProduct(productName: string): Promise<void> {
    // Reusable action: test does not need to know search input or button selectors.
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  productByName(productName: string): Locator {
    // Reusable locator method for dynamic product rows.
    return this.productItems.filter({ hasText: productName });
  }

  async addProductToCart(productName: string): Promise<void> {
    // This method combines product lookup and button click into one business action.
    await this.productByName(productName).getByRole('button', { name: 'Add To Cart' }).click();
  }
}
