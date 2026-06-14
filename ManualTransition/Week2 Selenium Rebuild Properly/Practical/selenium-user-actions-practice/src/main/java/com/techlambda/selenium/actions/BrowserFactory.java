
package com.techlambda.selenium.actions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * BrowserFactory centralizes browser creation.
 *
 * Why this class exists:
 * - Test classes should not contain repeated browser setup code.
 * - We can switch browser using Maven command: mvn test -Dbrowser=edge
 * - Selenium 4 Selenium Manager automatically manages browser drivers in most cases.
 */
public final class BrowserFactory {

    private BrowserFactory() {
        // Utility class: object creation is not required.
    }

    public static WebDriver createDriver() {
        String browser = System.getProperty("browser", "chrome").toLowerCase();

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
