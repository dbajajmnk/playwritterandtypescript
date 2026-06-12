package com.techlambda.selenium.pom.tests;

import com.techlambda.selenium.pom.base.BaseTest;
import com.techlambda.selenium.pom.pages.CartPage;
import com.techlambda.selenium.pom.pages.DashboardPage;
import com.techlambda.selenium.pom.pages.LoginPage;
import com.techlambda.selenium.pom.pages.ProductPage;
import com.techlambda.selenium.pom.utils.LocalPagePath;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * This test class demonstrates a mini e-commerce flow using multiple page objects:
 * LoginPage -> DashboardPage -> ProductPage -> CartPage
 *
 * This is better than keeping all selectors and actions inside one large test file.
 */
public class EcommercePomTest extends BaseTest {

    @Test
    public void userCanSearchProductAndAddProductToCart() {
        driver.get(LocalPagePath.getPracticePageUrl());

        LoginPage loginPage = new LoginPage(driver);
        DashboardPage dashboardPage = new DashboardPage(driver);
        ProductPage productPage = new ProductPage(driver);
        CartPage cartPage = new CartPage(driver);

        loginPage.login("user@test.com", "123456");

        dashboardPage.searchProduct("Laptop");

        Assert.assertEquals(
                dashboardPage.getSearchResult(),
                "laptop product found"
        );

        productPage.addProductToCart("Laptop");

        Assert.assertEquals(cartPage.getCartItemCount(), 1);
        Assert.assertEquals(cartPage.getCartCountText(), "Cart Items: 1");
    }

    @Test
    public void userCanClearCart() {
        driver.get(LocalPagePath.getPracticePageUrl());

        LoginPage loginPage = new LoginPage(driver);
        ProductPage productPage = new ProductPage(driver);
        CartPage cartPage = new CartPage(driver);

        loginPage.login("user@test.com", "123456");

        productPage.addProductToCart("Phone");
        productPage.addProductToCart("Keyboard");

        Assert.assertEquals(cartPage.getCartItemCount(), 2);

        cartPage.clearCart();

        Assert.assertEquals(cartPage.getCartItemCount(), 0);
        Assert.assertEquals(cartPage.getCartCountText(), "Cart Items: 0");
    }
}
