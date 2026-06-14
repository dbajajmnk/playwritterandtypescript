package com.techlambda.capstone.base;

import com.techlambda.capstone.config.ConfigReader;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import java.time.Duration;

/**
 * BaseTest controls common test lifecycle.
 * It is placed under src/test/java because it uses TestNG annotations.
 */
public class BaseTest {

    protected WebDriver driver;
    protected String baseUrl;
    protected String searchKeyword;
    protected String expectedProduct;
    protected int explicitWaitSeconds;

    @BeforeClass
    public void setup() {
        baseUrl = ConfigReader.get("baseUrl");
        searchKeyword = ConfigReader.get("searchKeyword");
        expectedProduct = ConfigReader.get("expectedProduct");
        explicitWaitSeconds = ConfigReader.getInt("explicitWaitSeconds");

        String browserFromCommandLine = System.getProperty("browser");
        String browser = browserFromCommandLine == null ? ConfigReader.get("browser") : browserFromCommandLine;

        driver = BrowserFactory.createDriver(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(ConfigReader.getInt("implicitWaitSeconds")));
    }

    @AfterClass(alwaysRun = true)
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
