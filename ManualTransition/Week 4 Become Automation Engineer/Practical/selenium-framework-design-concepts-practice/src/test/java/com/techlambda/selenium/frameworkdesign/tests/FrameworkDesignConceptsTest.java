package com.techlambda.selenium.frameworkdesign.tests;

import com.techlambda.selenium.frameworkdesign.base.BaseTest;
import com.techlambda.selenium.frameworkdesign.data.ProductData;
import com.techlambda.selenium.frameworkdesign.data.UserData;
import com.techlambda.selenium.frameworkdesign.pages.CartPage;
import com.techlambda.selenium.frameworkdesign.pages.DashboardPage;
import com.techlambda.selenium.frameworkdesign.pages.LoginPage;
import com.techlambda.selenium.frameworkdesign.pages.ProductPage;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

/**
 * Test class should contain test flow and assertions only.
 * Locators stay inside page classes.
 * Test data stays inside the data layer or DataProvider.
 */
public class FrameworkDesignConceptsTest extends BaseTest {

    @Test(description = "POM reuse: same LoginPage and DashboardPage are used for admin login")
    public void adminCanLoginUsingReusablePageObjects() {
        UserData admin = UserData.adminUser();

        LoginPage loginPage = new LoginPage(driver, wait);
        DashboardPage dashboardPage = new DashboardPage(driver, wait);

        loginPage.loginAs(admin);

        Assert.assertEquals(dashboardPage.getTitleText(), "Dashboard");
        Assert.assertEquals(dashboardPage.getWelcomeMessage(), "Welcome, " + admin.expectedName());
        Assert.assertEquals(dashboardPage.getRole(), admin.expectedRole());
    }

    @Test(description = "POM reuse: same login flow works for a regular user also")
    public void regularUserCanLoginUsingSameReusablePageObjects() {
        UserData user = UserData.regularUser();

        LoginPage loginPage = new LoginPage(driver, wait);
        DashboardPage dashboardPage = new DashboardPage(driver, wait);

        loginPage.loginAs(user);

        Assert.assertEquals(dashboardPage.getWelcomeMessage(), "Welcome, " + user.expectedName());
        Assert.assertEquals(dashboardPage.getRole(), user.expectedRole());
    }

    @DataProvider(name = "productData")
    public Object[][] productData() {
        return new Object[][]{
                {ProductData.laptop()},
                {ProductData.mouse()}
        };
    }

    @Test(dataProvider = "productData", description = "Data-driven testing: same test runs with multiple products")
    public void productCanBeAddedToCartUsingDataDrivenTesting(ProductData product) {
        LoginPage loginPage = new LoginPage(driver, wait);
        ProductPage productPage = new ProductPage(driver, wait);
        CartPage cartPage = new CartPage(driver, wait);

        loginPage.loginAs(UserData.regularUser());
        productPage.addProductToCart(product);

        Assert.assertEquals(productPage.getCartMessage(), product.expectedCartMessage());
        Assert.assertEquals(cartPage.getCartCount(), 1);
    }

    @Test(description = "Negative test: invalid data remains separate from page logic")
    public void invalidLoginShouldShowErrorMessage() {
        UserData invalidUser = new UserData("wrong@test.com", "badpass", "", "");

        LoginPage loginPage = new LoginPage(driver, wait);
        loginPage.loginAs(invalidUser);

        Assert.assertEquals(loginPage.getLoginMessage(), "Invalid credentials");
    }
}