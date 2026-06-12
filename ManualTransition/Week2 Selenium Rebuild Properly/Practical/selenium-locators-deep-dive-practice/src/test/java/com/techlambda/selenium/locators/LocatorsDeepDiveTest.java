package com.techlambda.selenium.locators;

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
 * This test class demonstrates Selenium locator strategies.
 *
 * Lesson mapping:
 * - ID locator
 * - CSS selector
 * - XPath
 * - Text XPath
 * - Dynamic XPath using contains and starts-with
 * - Attribute based locator
 * - Common best practices
 */
class LocatorsDeepDiveTest {

    private WebDriver driver;

    @BeforeEach
    void setUp() {
        // Create browser session before each test.
        driver = BrowserFactory.createDriver();

        // Open the local practice website.
        driver.get(LocalPagePath.locatorsPracticePageUrl());

        // Maximize window to keep element visibility consistent for learners.
        driver.manage().window().maximize();
    }

    @AfterEach
    void tearDown() {
        // Always close the browser session after the test.
        // This prevents unused sessions from remaining open.
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    @DisplayName("ID Locator: locate username and password fields")
    void idLocatorExample() {
        // ID locator is usually the first preference because it is simple and stable.
        WebElement username = driver.findElement(By.id("username"));
        WebElement password = driver.findElement(By.id("password"));

        username.sendKeys("admin");
        password.sendKeys("password");

        assertEquals("admin", username.getAttribute("value"));
        assertEquals("password", password.getAttribute("value"));
    }

    @Test
    @DisplayName("CSS Locator: locate button by class and perform login")
    void cssClassLocatorExample() {
        driver.findElement(By.id("username")).sendKeys("admin");
        driver.findElement(By.id("password")).sendKeys("password");

        // CSS class selector starts with dot.
        // .loginBtn means element having class="loginBtn".
        driver.findElement(By.cssSelector(".loginBtn")).click();

        String message = driver.findElement(By.id("login-message")).getText();
        assertEquals("Login successful", message);
    }

    @Test
    @DisplayName("CSS Attribute Locator: locate email input by name and data-testid")
    void cssAttributeLocatorExample() {
        // Attribute selector is useful when id is not available.
        WebElement emailByName = driver.findElement(By.cssSelector("input[name='email']"));
        emailByName.sendKeys("student@test.com");

        // data-testid is a very stable locator when developers provide it for automation.
        WebElement emailByTestId = driver.findElement(By.cssSelector("[data-testid='profile-email']"));

        assertEquals("student@test.com", emailByTestId.getAttribute("value"));
    }

    @Test
    @DisplayName("XPath Locator: locate input by attribute")
    void xpathAttributeLocatorExample() {
        // XPath can find elements by attributes.
        WebElement username = driver.findElement(By.xpath("//input[@id='username']"));
        username.sendKeys("admin");

        assertEquals("admin", username.getAttribute("value"));
    }

    @Test
    @DisplayName("Text XPath: locate button using exact visible text")
    void xpathTextLocatorExample() {
        // Text XPath is useful when a button/link is identified by visible text.
        driver.findElement(By.xpath("//button[text()='Login Using Text XPath']")).click();

        String message = driver.findElement(By.id("xpath-message")).getText();
        assertEquals("Text XPath button clicked", message);
    }

    @Test
    @DisplayName("Dynamic XPath: locate product using contains")
    void dynamicXpathContainsExample() {
        // contains() is useful when full id/value is dynamic but partial value is stable.
        WebElement dynamicProduct = driver.findElement(
                By.xpath("//article[contains(@id,'dynamic-product')]")
        );

        assertTrue(dynamicProduct.getText().contains("Dynamic Locator Course"));
    }

    @Test
    @DisplayName("Dynamic XPath: locate product using starts-with")
    void dynamicXpathStartsWithExample() {
        // starts-with() helps when an id begins with a stable prefix but suffix can change.
        WebElement product = driver.findElement(
                By.xpath("//*[starts-with(@id,'product-101')]")
        );

        assertTrue(product.getText().contains("Playwright Course"));
    }

    @Test
    @DisplayName("Best Practice: prefer short, unique CSS over long absolute XPath")
    void shortStableLocatorExample() {
        // Good locator: short and based on stable attribute.
        WebElement saveButton = driver.findElement(By.cssSelector("[data-action='save-profile']"));
        saveButton.click();

        String message = driver.findElement(By.id("profile-message")).getText();
        assertEquals("Profile saved", message);
    }

    @Test
    @DisplayName("Mini Assignment: use id, css, xpath, and dynamic locator together")
    void miniAssignmentExample() {
        // ID locator
        driver.findElement(By.id("username")).sendKeys("admin");

        // CSS locator
        driver.findElement(By.cssSelector("input[name='password']")).sendKeys("password");

        // XPath locator with text
        driver.findElement(By.xpath("//button[text()='Login']")).click();

        // Dynamic XPath locator
        WebElement seleniumCourse = driver.findElement(
                By.xpath("//article[contains(@id,'product-202')]")
        );

        assertEquals("Login successful", driver.findElement(By.id("login-message")).getText());
        assertTrue(seleniumCourse.getText().contains("Selenium Course"));
    }
}
