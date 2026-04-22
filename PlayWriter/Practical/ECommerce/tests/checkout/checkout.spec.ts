import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { USERS } from '../../test-data/users';

test.describe('Checkout', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await inventoryPage.validateInventoryPageLoaded();
  });

  test('user should complete checkout successfully', async () => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.validateCartHasItems();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo('Deepak', 'Bajaj', '148033');
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();
    await checkoutPage.validateOrderSuccess();
  });
});