import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { USERS } from '../../test-data/users';

test.describe('Authentication - Login', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.validateLoginPageVisible();
  });

  test('valid login should open inventory page', async () => {
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await inventoryPage.validateInventoryPageLoaded();
  });

  test('locked user should not login successfully', async () => {
    await loginPage.login(USERS.locked.username, USERS.locked.password);
    await loginPage.validateLoginErrorVisible();
  });
});