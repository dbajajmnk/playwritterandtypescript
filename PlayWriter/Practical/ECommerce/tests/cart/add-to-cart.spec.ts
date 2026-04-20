import { test } from '@playwright/test';
import { Login } from '../../pages/Login';
import { Inventory } from '../../pages/Inventory';
import { Cart } from '../../pages/Cart';
import { USERS } from '../../test-data/users';

test('user should add backpack to cart', async ({ page }) => {
  const loginPage = new Login(page);
  const inventoryPage = new Inventory(page);
  const cartPage = new Cart(page);

  await loginPage.goto();
  await loginPage.login(USERS.standard.username, USERS.standard.password);
  await inventoryPage.validateInventoryPageLoaded();

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.validateCartHasItems();
});