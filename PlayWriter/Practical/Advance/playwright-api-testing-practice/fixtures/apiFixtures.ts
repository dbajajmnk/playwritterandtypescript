import { test as base } from '@playwright/test';
import { AuthApiClient } from '../api/AuthApiClient';
import { ProductApiClient } from '../api/ProductApiClient';
import { UserApiClient } from '../api/UserApiClient';

type ApiFixtures = {
  userApi: UserApiClient;
  productApi: ProductApiClient;
  authApi: AuthApiClient;
  authToken: string;
};

// Fixture Layer
// Purpose: Inject ready-to-use API clients into tests.
// This is Dependency Injection in Playwright.
// Tests do not need to know how clients are created.

export const test = base.extend<ApiFixtures>({
  userApi: async ({ request }, use) => {
    const client = new UserApiClient(request);
    await use(client);
  },

  productApi: async ({ request }, use) => {
    const client = new ProductApiClient(request);
    await use(client);
  },

  authApi: async ({ request }, use) => {
    const client = new AuthApiClient(request);
    await use(client);
  },

  authToken: async ({ authApi }, use) => {
    // Login once for the test and pass the token to the test body.
    const response = await authApi.login('admin@test.com', '123456');
    const body = await response.json();
    await use(body.token);
  }
});

export { expect } from '@playwright/test';
