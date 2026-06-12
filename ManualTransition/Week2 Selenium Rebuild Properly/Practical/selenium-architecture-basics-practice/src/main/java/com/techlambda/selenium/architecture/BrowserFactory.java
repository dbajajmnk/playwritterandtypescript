package com.techlambda.selenium.architecture;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

/**
 * BrowserFactory represents the Browser Driver layer in Selenium architecture.
 *
 * Test Code -> WebDriver API -> Browser Driver -> Real Browser
 *
 * This class keeps browser creation in one place so test files do not repeat
 * ChromeDriver, EdgeDriver, or FirefoxDriver setup again and again.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class: object creation is not required.
    }

    /**
     * Creates a WebDriver session based on the browser name.
     * Selenium Manager automatically resolves browser drivers in Selenium 4.6+.
     *
     * Supported command examples:
     * mvn test -Dbrowser=chrome
     * mvn test -Dbrowser=edge
     * mvn test -Dbrowser=firefox
     */
    public static WebDriver createDriver() {
        String browser = System.getProperty("browser", "chrome").toLowerCase();
        boolean headless = Boolean.parseBoolean(System.getProperty("headless", "false"));

        switch (browser) {
            case "firefox":
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                if (headless) {
                    firefoxOptions.addArguments("-headless");
                }
                return new FirefoxDriver(firefoxOptions);

            case "edge":
                EdgeOptions edgeOptions = new EdgeOptions();
                if (headless) {
                    edgeOptions.addArguments("--headless=new");
                }
                return new EdgeDriver(edgeOptions);

            case "chrome":
            default:
                ChromeOptions chromeOptions = new ChromeOptions();
                if (headless) {
                    chromeOptions.addArguments("--headless=new");
                }
                chromeOptions.addArguments("--start-maximized");
                return new ChromeDriver(chromeOptions);
        }
    }
}
