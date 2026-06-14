package com.techlambda.selenium.locators;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory is a small utility class for creating WebDriver objects.
 *
 * Teaching point:
 * - Test code should not directly create ChromeDriver everywhere.
 * - Keeping browser creation in one place makes the framework easier to maintain.
 * - Selenium 4 uses Selenium Manager, so browser drivers are normally managed automatically.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class: object creation is not required.
    }

    public static WebDriver createDriver() {
        String browser = System.getProperty("browser", "chrome").toLowerCase();

        switch (browser) {
            case "firefox":
                return new FirefoxDriver();
            case "edge":
                return new EdgeDriver();
            case "chrome":
            default:
                return new ChromeDriver();
        }
    }
}
