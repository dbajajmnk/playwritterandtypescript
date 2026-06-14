package com.techlambda.selenium.architecture;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Test Layer:
 * This file contains test scenarios and assertions only.
 * Browser setup is delegated to BrowserFactory.
 */
public class SeleniumArchitectureTest {

    private WebDriver driver;

    @BeforeEach
    void startBrowserSession() {
        // Create Session:
        // Selenium creates a new browser session before every test.
        driver = BrowserFactory.createDriver();
    }

    @AfterEach
    void closeBrowserSession() {
        // Close Session:
        // quit() closes all windows and ends the WebDriver session properly.
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    @DisplayName("WebDriver can open browser and navigate to URL")
    void openApplicationUrl() {
        // Execute Command:
        // driver.get() tells the browser driver to open the URL.
        driver.get("https://example.com");

        // Validate page title returned from the browser.
        assertEquals("Example Domain", driver.getTitle());
    }

    @Test
    @DisplayName("WebDriver can locate an element on page")
    void findElementUsingWebDriver() {
        driver.get("https://example.com");

        // WebDriver sends findElement command to browser driver.
        WebElement heading = driver.findElement(By.cssSelector("h1"));

        assertEquals("Example Domain", heading.getText());
    }

    @Test
    @DisplayName("Current URL can be verified inside active session")
    void verifyCurrentUrlInsideSession() {
        driver.get("https://example.com");

        // getCurrentUrl() reads the current browser state from active session.
        String currentUrl = driver.getCurrentUrl();

        assertTrue(currentUrl.contains("example.com"));
    }
}
