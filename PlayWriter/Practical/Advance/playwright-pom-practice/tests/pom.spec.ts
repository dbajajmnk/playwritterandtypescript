import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { DashboardPage } from '../pages/DashboardPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { SignupPage } from '../pages/SignupPage';
import { checkoutCustomer, invalidUser, signupUser, validUser } from '../test-data/users';

test.describe('Playwright Page Object Model Practice', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let signupPage: SignupPage;
  let homePage: HomePage;
  let productPage: ProductPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    signupPage = new SignupPage(page);
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.open();
  });

  test('normal login test becomes clean using LoginPage class', async () => {
    await loginPage.login(validUser.email, validUser.password);

    await expect(loginPage.successMessage).toBeVisible();
    await expect(dashboardPage.section).toBeVisible();
    await expect(dashboardPage.welcomeMessage).toHaveText(`Welcome ${validUser.email}`);
  });

  test('invalid login keeps test readable through POM methods', async () => {
    await loginPage.login(invalidUser.email, invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(dashboardPage.section).toBeHidden();
  });

  test('SignupPage practice task: enter email, password and submit form', async () => {
    await signupPage.signup(signupUser.name, signupUser.email, signupUser.password);

    await expect(signupPage.successMessage).toBeVisible();
    await expect(signupPage.successMessage).toHaveText('Account created successfully');
  });

  test('HomePage object searches product without exposing selectors in test', async () => {
    await homePage.searchProduct('Laptop');

    await expect(homePage.productCard('Laptop')).toBeVisible();
    await expect(homePage.productCard('Headphones')).toBeHidden();
    await expect(homePage.productCard('Keyboard')).toBeHidden();
  });

  test('ProductPage object opens product detail and adds selected item to cart', async () => {
    await homePage.viewProduct('Headphones');

    await expect(productPage.section).toBeVisible();
    await expect(productPage.selectedProductName).toHaveText('Headphones');
    await expect(productPage.selectedProductPrice).toHaveText('₹2500');

    await productPage.addSelectedProductToCart();

    await expect(cartPage.cartCount).toHaveText('1');
    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.cartItems.first()).toContainText('Headphones');
  });

  test('CartPage object validates add and clear cart flow', async () => {
    await homePage.addProductToCart('Laptop');
    await homePage.addProductToCart('Keyboard');

    await expect(cartPage.cartCount).toHaveText('2');
    await expect(cartPage.totalItems).toHaveText('2');
    await expect(cartPage.cartItems).toHaveCount(2);

    await cartPage.clearCart();

    await expect(cartPage.cartCount).toHaveText('0');
    await expect(cartPage.emptyCartMessage).toBeVisible();
  });

  test('CheckoutPage object shows error when cart is empty', async () => {
    await checkoutPage.fillCheckoutDetails(checkoutCustomer.name, checkoutCustomer.address);
    await checkoutPage.placeOrder();

    await expect(checkoutPage.orderError).toBeVisible();
    await expect(checkoutPage.orderError).toHaveText('Add product before checkout');
  });

  test('Mini project: login, add product, checkout using multiple page objects', async () => {
    await loginPage.login(validUser.email, validUser.password);
    await homePage.addProductToCart('Laptop');
    await checkoutPage.fillCheckoutDetails(checkoutCustomer.name, checkoutCustomer.address);
    await checkoutPage.placeOrder();

    await expect(dashboardPage.section).toBeVisible();
    await expect(cartPage.cartCount).toHaveText('1');
    await expect(checkoutPage.orderSuccess).toBeVisible();
    await expect(checkoutPage.orderSuccess).toHaveText('Order placed successfully');
  });
});
