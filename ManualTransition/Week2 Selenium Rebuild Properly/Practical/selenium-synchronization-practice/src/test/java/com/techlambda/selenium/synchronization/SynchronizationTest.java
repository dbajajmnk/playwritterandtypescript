package com.techlambda.selenium.synchronization;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class SynchronizationTest {

    private WebDriver driver;

    @BeforeEach
    void setUp() {
        driver = BrowserFactory.createDriver();
        driver.manage().window().maximize();

        // Implicit wait is global. It applies whenever Selenium searches for an element.
        // Keep it small in real projects because explicit waits are more controlled.
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));

        driver.get(LocalPagePath.synchronizationPracticePage());
    }

    @AfterEach
    void tearDown() {
        // Always quit the driver to close the browser session properly.
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    void implicitWaitExample_canFindElementsOnPage() {
        // This demonstrates a basic element search with implicit wait configured.
        WebElement heading = driver.findElement(By.tagName("h1"));

        assertEquals("Selenium Synchronization Practice", heading.getText());
    }

    @Test
    void explicitWaitExample_waitsUntilMessageIsVisible() {
        By showMessageButton = By.id("show-message-btn");
        By delayedMessage = By.id("delayed-message");

        driver.findElement(showMessageButton).click();

        // Explicit wait waits for one specific condition.
        // This is better than Thread.sleep because it proceeds as soon as the condition is true.
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement visibleMessage = wait.until(
                ExpectedConditions.visibilityOfElementLocated(delayedMessage)
        );

        assertEquals("Message is visible after delay", visibleMessage.getText());
    }

    @Test
    void clickableWaitExample_waitsUntilButtonIsClickable() {
        By checkoutButton = By.id("checkout-btn");
        By checkoutStatus = By.id("checkout-status");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // elementToBeClickable waits until the button is visible and enabled.
        WebElement clickableButton = wait.until(
                ExpectedConditions.elementToBeClickable(checkoutButton)
        );
        clickableButton.click();

        WebElement status = wait.until(
                ExpectedConditions.visibilityOfElementLocated(checkoutStatus)
        );

        assertEquals("Checkout button clicked successfully", status.getText());
    }

    @Test
    void explicitWaitExample_waitsUntilProductCardsAreLoaded() {
        By loadProductsButton = By.id("load-products-btn");
        By productCards = By.cssSelector(".product-card");

        driver.findElement(loadProductsButton).click();

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // numberOfElementsToBe waits until the expected number of matching elements exists.
        List<WebElement> products = wait.until(
                ExpectedConditions.numberOfElementsToBe(productCards, 3)
        );

        assertEquals(3, products.size());
        assertTrue(products.get(0).getText().contains("Laptop"));
    }

    @Test
    void fluentWaitExample_pollsUntilStatusIsCompleted() {
        By startStatusButton = By.id("start-status-btn");
        By statusText = By.id("status-text");

        driver.findElement(startStatusButton).click();

        // FluentWait gives more control over timeout and polling frequency.
        // It is useful when application state changes dynamically.
        FluentWait<WebDriver> wait = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(10))
                .pollingEvery(Duration.ofMillis(500))
                .ignoring(Exception.class);

        WebElement completedStatus = wait.until(webDriver -> {
            WebElement element = webDriver.findElement(statusText);
            if (element.getText().equals("Status: Completed")) {
                return element;
            }
            return null;
        });

        assertEquals("Status: Completed", completedStatus.getText());
    }
}
