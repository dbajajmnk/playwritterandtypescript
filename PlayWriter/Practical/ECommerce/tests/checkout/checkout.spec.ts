import { test } from '@playwright/test';
import { Login } from '../../pages/Login';
import { Inventory } from '../../pages/Inventory';
import { Cart } from '../../pages/Cart';
import { Checkout } from '../../pages/Checkout';
import { USERS } from '../../test-data/users';

test('user should complete checkout successfully', async ({ page }) => {
  const loginPage = new Login(page);
  const inventoryPage = new Inventory(page);
  const cartPage = new Cart(page);
  const checkoutPage = new Checkout(page);

  await loginPage.goto();
  await loginPage.login(USERS.standard.username, USERS.standard.password);
  await inventoryPage.validateInventoryPageLoaded();

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.validateCartHasItems();
  await cartPage.clickCheckout();

  await checkoutPage.fillCheckoutInfo('Deepak', 'Bajaj', '148033');
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();
  await checkoutPage.validateOrderSuccess();
});