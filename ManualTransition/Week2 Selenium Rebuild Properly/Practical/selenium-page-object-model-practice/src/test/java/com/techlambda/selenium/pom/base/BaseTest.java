package com.techlambda.selenium.pom.base;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/**
 * BaseTest contains common test setup and cleanup.
 *
 * Test classes extend this class so every test gets:
 * 1. A fresh browser session
 * 2. Browser maximize setup
 * 3. Proper session cleanup using quit()
 */
public class BaseTest {

    protected WebDriver driver;

    @BeforeMethod
    public void setupBrowser() {
        driver = BrowserFactory.createDriver();
        driver.manage().window().maximize();
    }

    @AfterMethod
    public void closeBrowser() {
        if (driver != null) {
            // quit() closes the full browser session, not only one tab.
            driver.quit();
        }
    }
}
