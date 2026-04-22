import { test } from '@playwright/test';
import { LoginPage} from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { USERS } from '../../test-data/users';

test('user should complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

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