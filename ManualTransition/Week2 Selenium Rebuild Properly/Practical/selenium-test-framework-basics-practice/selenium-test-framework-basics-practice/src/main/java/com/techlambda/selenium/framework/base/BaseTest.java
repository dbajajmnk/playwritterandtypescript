package com.techlambda.selenium.framework.base;

import com.techlambda.selenium.framework.config.ConfigReader;
import com.techlambda.selenium.framework.utils.LocalPagePath;
import com.techlambda.selenium.framework.utils.ScreenshotUtility;
import com.techlambda.selenium.framework.utils.WaitUtility;

import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/**
 * BaseTest contains common setup and teardown logic.
 *
 * Main responsibility:
 * - Launch browser before each test.
 * - Open the application URL from config.
 * - Create reusable utility objects.
 * - Capture screenshot if a test fails.
 * - Quit browser after each test.
 */
public class BaseTest {

    protected WebDriver driver;
    protected WaitUtility waitUtility;

    @BeforeMethod
    public void setup() {
        String browser = ConfigReader.getBrowser();
        driver = BrowserFactory.createDriver(browser);
        driver.manage().window().maximize();

        waitUtility = new WaitUtility(driver, ConfigReader.getExplicitWaitSeconds());

        String appUrl = LocalPagePath.toFileUrl(ConfigReader.get("app.url"));
        driver.get(appUrl);
    }

    @AfterMethod
    public void teardown(ITestResult result) {
        try {
            if (!result.isSuccess() && driver != null) {
                String screenshotPath = ScreenshotUtility.takeScreenshot(driver, result.getName());
                System.out.println("Failure screenshot saved at: " + screenshotPath);
            }
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }
}
