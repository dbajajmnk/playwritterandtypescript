package com.techlambda.selenium.architecture;

import org.openqa.selenium.WebDriver;

/**
 * This class demonstrates the Selenium session lifecycle:
 *
 * 1. Create Session  -> new ChromeDriver()/EdgeDriver()/FirefoxDriver()
 * 2. Run Commands    -> driver.get(), getTitle(), getCurrentUrl()
 * 3. Close Session   -> driver.quit()
 */
public class SessionLifecycleDemo {

    public static void main(String[] args) {
        WebDriver driver = null;

        try {
            // Start Session: BrowserFactory internally creates the real browser driver.
            driver = BrowserFactory.createDriver();

            // Execute Command: WebDriver sends this command to the browser driver.
            driver.get("https://example.com");

            // Read browser state through WebDriver API.
            System.out.println("Page Title: " + driver.getTitle());
            System.out.println("Current URL: " + driver.getCurrentUrl());

        } finally {
            // End Session: Always quit the driver to avoid open browser sessions.
            if (driver != null) {
                driver.quit();
            }
        }
    }
}
