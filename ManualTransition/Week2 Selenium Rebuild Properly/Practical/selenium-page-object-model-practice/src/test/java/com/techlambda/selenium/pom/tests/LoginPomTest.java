package com.techlambda.selenium.pom.tests;

import com.techlambda.selenium.pom.base.BaseTest;
import com.techlambda.selenium.pom.pages.DashboardPage;
import com.techlambda.selenium.pom.pages.LoginPage;
import com.techlambda.selenium.pom.utils.LocalPagePath;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * This test class demonstrates the main POM benefit:
 * test class contains only test flow and assertions.
 *
 * Locators and browser actions are hidden inside page classes.
 */
public class LoginPomTest extends BaseTest {

    @Test
    public void validUserCanLoginSuccessfully() {
        driver.get(LocalPagePath.getPracticePageUrl());

        LoginPage loginPage = new LoginPage(driver);
        DashboardPage dashboardPage = new DashboardPage(driver);

        loginPage.login("user@test.com", "123456");

        Assert.assertEquals(
                dashboardPage.getDashboardStatus(),
                "Dashboard loaded successfully"
        );

        Assert.assertTrue(
                dashboardPage.getWelcomeMessage().contains("user@test.com")
        );
    }

    @Test
    public void invalidUserCanSeeLoginErrorMessage() {
        driver.get(LocalPagePath.getPracticePageUrl());

        LoginPage loginPage = new LoginPage(driver);

        loginPage.login("wrong@test.com", "wrong-password");

        Assert.assertEquals(
                loginPage.getLoginMessage(),
                "Invalid email or password"
        );
    }
}
