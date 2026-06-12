package com.techlambda.selenium.frameworkdesign.base;

import com.techlambda.selenium.frameworkdesign.utils.ConfigReader;
import com.techlambda.selenium.frameworkdesign.utils.LocalPagePath;
import com.techlambda.selenium.frameworkdesign.utils.ScreenshotUtility;
import com.techlambda.selenium.frameworkdesign.utils.WaitUtility;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/**
 * BaseTest is part of the test layer because it uses TestNG lifecycle annotations.
 * Keeping it in src/test/java avoids TestNG compilation issues in main code.
 */
public class BaseTest {

    protected WebDriver driver;
    protected WaitUtility wait;

    @BeforeMethod
    public void setUp() {
        String browser = System.getProperty("browser", ConfigReader.get("browser"));
        int timeoutSeconds = ConfigReader.getInt("timeoutSeconds");

        driver = BrowserFactory.createDriver(browser);
        wait = new WaitUtility(driver, timeoutSeconds);

        driver.manage().window().maximize();
        driver.get(LocalPagePath.fromProjectRoot(ConfigReader.get("applicationPage")));
    }

    @AfterMethod
    public void tearDown(ITestResult result) {
        if (driver != null) {
            if (!result.isSuccess()) {
                ScreenshotUtility.capture(driver, result.getMethod().getMethodName());
            }
            driver.quit();
        }
    }
}