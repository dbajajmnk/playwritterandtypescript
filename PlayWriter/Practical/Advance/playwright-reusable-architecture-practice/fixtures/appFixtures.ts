import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../data/users';

// FIXTURE LAYER
// Fixtures prepare reusable objects or reusable states for tests.
// This is dependency injection: tests receive ready-to-use page objects.
type AppFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  productPage: ProductPage;
  cartPage: CartPage;
  loggedInApp: {
    dashboardPage: DashboardPage;
    productPage: ProductPage;
    cartPage: CartPage;
  };
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    // This fixture creates LoginPage object and opens the app before use.
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    // Dashboard object can be reused by any test that needs dashboard behavior.
    await use(new DashboardPage(page));
  },

  productPage: async ({ page }, use) => {
    // Product object keeps product selectors/actions away from tests.
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    // Cart object keeps cart selectors/actions away from tests.
    await use(new CartPage(page));
  },

  loggedInApp: async ({ page }, use) => {
    // This fixture prepares a logged-in state once for tests that need dashboard access.
    // It avoids repeating login steps in every test.
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await loginPage.open();
    await loginPage.login(users.validUser.email, users.validUser.password);

    // Tests using loggedInApp receive ready page objects after login.
    await use({ dashboardPage, productPage, cartPage });

    // Cleanup section runs after the test finishes.
    // Good place to logout, clear data, close resources, etc.
    await dashboardPage.logout().catch(() => {
      // Ignore cleanup error because the test may already have navigated away.
    });
  },
});

export { expect } from '@playwright/test';
