import { APIRequestContext } from '@playwright/test';

// API Client Layer
// Purpose: Keep product API calls reusable and readable.

export class ProductApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getProducts() {
    return this.request.get('/api/products');
  }

  async searchProducts(searchText: string) {
    return this.request.get('/api/products/search', {
      params: {
        q: searchText
      }
    });
  }
}
