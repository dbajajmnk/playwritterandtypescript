package com.techlambda.selenium.miniframework.base;

import com.techlambda.selenium.miniframework.utils.ConfigReader;
import com.techlambda.selenium.miniframework.utils.LocalPagePath;
import com.techlambda.selenium.miniframework.utils.ScreenshotUtility;
import com.techlambda.selenium.miniframework.utils.WaitUtility;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/**
 * BaseTest belongs to src/test/java because it uses TestNG annotations.
 * It provides common setup and teardown for all test classes.
 */
public class BaseTest {

    protected WebDriver driver;
    protected ConfigReader config;
    protected WaitUtility wait;

    @BeforeMethod
    public void setUp() {
        config = new ConfigReader();

        // Command-line value has first priority: mvn test -Dbrowser=edge
        String browserFromCommand = System.getProperty("browser");
        String browser = browserFromCommand != null ? browserFromCommand : config.get("browser");

        driver = BrowserFactory.createDriver(browser);
        driver.manage().window().maximize();

        wait = new WaitUtility(driver, config.getInt("timeout.seconds"));

        // Local HTML page keeps the lab independent from internet/server availability.
        driver.get(LocalPagePath.miniFrameworkLoginPageUrl());
    }

    @AfterMethod
    public void tearDown(ITestResult result) {
        if (driver != null) {
            if (!result.isSuccess()) {
                ScreenshotUtility.capture(driver, result.getName());
            }
            driver.quit();
        }
    }
}
