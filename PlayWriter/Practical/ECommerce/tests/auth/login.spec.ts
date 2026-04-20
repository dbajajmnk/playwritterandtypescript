import { test } from '@playwright/test';
import { Login } from '../../pages/Login';
import { Inventory } from '../../pages/Inventory';
import { USERS } from '../../test-data/users';

test('valid login should open inventory page', async ({ page }) => {
  const loginPage = new Login(page);
  const inventoryPage = new Inventory(page);

  await loginPage.goto();
  await loginPage.validateLoginPageVisible();
  await loginPage.login(USERS.standard.username, USERS.standard.password);
  await inventoryPage.validateInventoryPageLoaded();
});