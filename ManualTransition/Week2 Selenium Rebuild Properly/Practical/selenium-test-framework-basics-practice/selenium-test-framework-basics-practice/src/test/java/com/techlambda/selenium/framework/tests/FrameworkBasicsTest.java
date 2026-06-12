package com.techlambda.selenium.framework.tests;

import com.techlambda.selenium.framework.base.BaseTest;
import com.techlambda.selenium.framework.config.ConfigReader;
import com.techlambda.selenium.framework.utils.ScreenshotUtility;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * This test class demonstrates how a basic Selenium framework is organized.
 *
 * Notice the clean separation:
 * - Browser setup is handled by BaseTest.
 * - Environment values are handled by ConfigReader.
 * - Wait logic is handled by WaitUtility.
 * - Screenshot logic is handled by ScreenshotUtility.
 * - Test class focuses only on test flow and assertions.
 */
public class FrameworkBasicsTest extends BaseTest {

    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("login-button");
    private final By dashboard = By.id("dashboard");
    private final By welcomeMessage = By.id("welcome-message");
    private final By errorMessage = By.id("error");

    @Test
    public void configReaderShouldLoadApplicationUrl() {
        // This verifies that config values are coming from config.properties.
        String configuredUrl = ConfigReader.get("app.url");

        Assert.assertTrue(
                configuredUrl.contains("framework-basics-practice.html"),
                "App URL should come from config.properties"
        );
    }

    @Test
    public void baseTestShouldOpenPracticeApplication() {
        // Browser launch and page opening are not written here.
        // BaseTest already performed those steps before this test started.
        Assert.assertTrue(
                driver.getTitle().contains("Framework Basics Practice App"),
                "Practice application title should be visible"
        );
    }

    @Test
    public void waitUtilityShouldWaitForDashboardAfterLogin() {
        driver.findElement(emailInput).sendKeys("user@test.com");
        driver.findElement(passwordInput).sendKeys("123456");
        driver.findElement(loginButton).click();

        // WaitUtility waits for the dashboard condition instead of using Thread.sleep().
        waitUtility.waitForVisible(dashboard);

        String message = driver.findElement(welcomeMessage).getText();
        Assert.assertEquals(message, "Welcome to Dashboard");
    }

    @Test
    public void screenshotUtilityShouldCaptureManualScreenshot() {
        // Manual screenshot can be useful at important business checkpoints.
        String screenshotPath = ScreenshotUtility.takeScreenshot(driver, "manual_home_page_screenshot");

        Assert.assertTrue(
                screenshotPath.endsWith(".png"),
                "Screenshot utility should return a PNG file path"
        );
    }

    @Test
    public void invalidLoginShouldShowErrorMessage() {
        driver.findElement(emailInput).sendKeys("wrong@test.com");
        driver.findElement(passwordInput).sendKeys("wrong-password");
        driver.findElement(loginButton).click();

        String error = waitUtility.waitForVisible(errorMessage).getText();
        Assert.assertEquals(error, "Invalid credentials");
    }
}
