package com.techlambda.capstone.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory is responsible only for browser creation.
 * Selenium Manager in Selenium 4 handles browser driver setup automatically in normal cases.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class should not be instantiated.
    }

    public static WebDriver createDriver(String browserName) {
        String browser = browserName == null ? "chrome" : browserName.trim().toLowerCase();

        return switch (browser) {
            case "edge" -> new EdgeDriver();
            case "firefox" -> new FirefoxDriver();
            case "chrome" -> new ChromeDriver();
            default -> throw new IllegalArgumentException("Unsupported browser: " + browserName);
        };
    }
}
