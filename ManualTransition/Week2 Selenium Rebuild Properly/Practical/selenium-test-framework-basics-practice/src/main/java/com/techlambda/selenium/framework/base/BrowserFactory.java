package com.techlambda.selenium.framework.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory has only one responsibility: create the correct WebDriver instance.
 *
 * This avoids repeating new ChromeDriver(), new EdgeDriver(), etc. inside every test.
 * Selenium 4 uses Selenium Manager, so browser drivers are usually managed automatically.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class: object creation is not required.
    }

    public static WebDriver createDriver(String browserName) {
        String browser = browserName == null ? "chrome" : browserName.toLowerCase();

        switch (browser) {
            case "edge":
                return new EdgeDriver();
            case "firefox":
                return new FirefoxDriver();
            case "chrome":
            default:
                return new ChromeDriver();
        }
    }
}
