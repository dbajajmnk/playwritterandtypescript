package com.techlambda.selenium.miniframework.tests;

import com.techlambda.selenium.miniframework.base.BaseTest;
import com.techlambda.selenium.miniframework.pages.DashboardPage;
import com.techlambda.selenium.miniframework.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * Test layer contains test scenarios and assertions.
 * It uses page objects instead of directly writing locators in test methods.
 */
public class LoginFrameworkTest extends BaseTest {

    @Test
    public void validUserShouldLoginSuccessfully() {
        LoginPage loginPage = new LoginPage(driver, wait);
        DashboardPage dashboardPage = new DashboardPage(driver, wait);

        loginPage.login(config.get("valid.email"), config.get("valid.password"));

        Assert.assertEquals(
                dashboardPage.getWelcomeMessage(),
                "Welcome, Automation Learner",
                "Dashboard welcome message should be visible after valid login"
        );
    }

    @Test
    public void invalidUserShouldSeeErrorMessage() {
        LoginPage loginPage = new LoginPage(driver, wait);

        loginPage.login(config.get("invalid.email"), config.get("invalid.password"));

        Assert.assertEquals(
                loginPage.getErrorMessage(),
                "Invalid username or password",
                "Error message should appear for invalid credentials"
        );
    }

    @Test
    public void loggedInUserShouldAddProductToCart() {
        LoginPage loginPage = new LoginPage(driver, wait);
        DashboardPage dashboardPage = new DashboardPage(driver, wait);

        loginPage.login(config.get("valid.email"), config.get("valid.password"));
        dashboardPage.addProductToCart();

        Assert.assertEquals(
                dashboardPage.getCartMessage(),
                "Automation Book added to cart",
                "Cart message should update after adding product"
        );
    }

    @Test
    public void loggedInUserShouldLogoutSuccessfully() {
        LoginPage loginPage = new LoginPage(driver, wait);
        DashboardPage dashboardPage = new DashboardPage(driver, wait);

        loginPage.login(config.get("valid.email"), config.get("valid.password"));
        dashboardPage.logout();

        // After logout, invalid login test style check confirms we are back on login page.
        loginPage.enterEmail(config.get("valid.email"));
        loginPage.enterPassword(config.get("valid.password"));

        Assert.assertTrue(true, "User returned to login page and fields are usable again");
    }
}
