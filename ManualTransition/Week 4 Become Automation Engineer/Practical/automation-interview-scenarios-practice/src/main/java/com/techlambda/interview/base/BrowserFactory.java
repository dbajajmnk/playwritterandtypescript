package com.techlambda.interview.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory is a reusable framework component.
 * Interview point: Browser creation should not be repeated inside every test.
 */
public final class BrowserFactory {

    private BrowserFactory() {
    }

    public static WebDriver createDriver() {
        String browser = System.getProperty("browser", "chrome").toLowerCase();

        return switch (browser) {
            case "edge" -> new EdgeDriver();
            case "firefox" -> new FirefoxDriver();
            case "chrome" -> new ChromeDriver();
            default -> throw new IllegalArgumentException("Unsupported browser: " + browser);
        };
    }
}
