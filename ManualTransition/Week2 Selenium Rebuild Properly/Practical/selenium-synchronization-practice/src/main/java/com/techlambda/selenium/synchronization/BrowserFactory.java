package com.techlambda.selenium.synchronization;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory centralizes browser creation.
 * Selenium 4 Selenium Manager automatically manages browser drivers in most systems,
 * so learners normally do not need to download ChromeDriver, GeckoDriver, or EdgeDriver manually.
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
