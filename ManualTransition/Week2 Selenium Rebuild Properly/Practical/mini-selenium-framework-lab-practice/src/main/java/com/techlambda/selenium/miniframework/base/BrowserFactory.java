package com.techlambda.selenium.miniframework.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory belongs to the base/framework layer.
 * Its responsibility is only browser creation.
 * Selenium Manager in Selenium 4 automatically manages browser drivers.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class: object creation is not required.
    }

    public static WebDriver createDriver(String browserName) {
        String browser = browserName == null ? "chrome" : browserName.toLowerCase();

        return switch (browser) {
            case "edge" -> new EdgeDriver();
            case "firefox" -> new FirefoxDriver();
            case "chrome" -> new ChromeDriver();
            default -> throw new IllegalArgumentException("Unsupported browser: " + browserName);
        };
    }
}
