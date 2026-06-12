package com.techlambda.selenium.frameworkdesign.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory is a reusable framework component.
 * It hides browser creation logic from the tests.
 *
 * Framework idea:
 * Test classes should not know how ChromeDriver, EdgeDriver, or FirefoxDriver is created.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class should not be instantiated.
    }

    public static WebDriver createDriver(String browserName) {
        String browser = browserName == null ? "chrome" : browserName.toLowerCase();

        return switch (browser) {
            case "firefox" -> new FirefoxDriver();
            case "edge" -> new EdgeDriver();
            case "chrome" -> new ChromeDriver();
            default -> throw new IllegalArgumentException("Unsupported browser: " + browserName);
        };
    }
}