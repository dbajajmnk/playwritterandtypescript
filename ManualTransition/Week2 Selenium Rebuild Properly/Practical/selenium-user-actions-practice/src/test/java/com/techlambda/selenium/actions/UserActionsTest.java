
package com.techlambda.selenium.actions;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * This test class demonstrates Selenium User Actions.
 *
 * User Actions are used when normal click/type is not enough.
 * Examples:
 * - Hover menu
 * - Right click
 * - Double click
 * - Drag and drop
 * - Keyboard shortcuts
 * - Click and hold / release
 * - Action chaining
 */
public class UserActionsTest {

    private WebDriver driver;
    private WebDriverWait wait;
    private Actions actions;

    @BeforeEach
    void setUp() {
        // Create browser session before every test.
        driver = BrowserFactory.createDriver();

        // Maximize window so all practice elements are easy to interact with.
        driver.manage().window().maximize();

        // Explicit wait is used before advanced actions because elements must be ready.
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // Actions class is Selenium's advanced user interaction builder.
        actions = new Actions(driver);

        // Open local practice page.
        driver.get(LocalPagePath.userActionsPageUrl());
    }

    @AfterEach
    void tearDown() {
        // Always quit browser session to avoid leftover driver processes.
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    void hoverMenuShouldShowSubmenuAndResult() {
        WebElement menu = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("main-menu")));

        // moveToElement() simulates real user mouse hover.
        // perform() is mandatory; without perform(), action will not execute.
        actions.moveToElement(menu).perform();

        WebElement submenu = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("submenu-panel")));
        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("hover-result")));

        assertTrue(submenu.isDisplayed(), "Submenu should be visible after hover");
        assertEquals("Hover action completed", result.getText());
    }

    @Test
    void rightClickShouldOpenContextActionResult() {
        WebElement contextBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("context-box")));

        // contextClick() simulates right click.
        actions.contextClick(contextBox).perform();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("right-click-result")));
        assertEquals("Right click action completed", result.getText());
    }

    @Test
    void doubleClickShouldTriggerDoubleClickHandler() {
        WebElement button = wait.until(ExpectedConditions.elementToBeClickable(By.id("double-click-button")));

        // doubleClick() is different from normal click(); it sends two click events quickly.
        actions.doubleClick(button).perform();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("double-click-result")));
        assertEquals("Double click action completed", result.getText());
    }

    @Test
    void dragAndDropShouldMoveProductToTarget() {
        WebElement source = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("drag-source")));
        WebElement target = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("drop-target")));

        // HTML5 drag/drop can be inconsistent across browser-driver combinations.
        // This stable action chain simulates the real mouse gesture:
        // 1. Press mouse button on source
        // 2. Move to target
        // 3. Release mouse button on target
        actions.clickAndHold(source)
                .moveToElement(target)
                .release(target)
                .perform();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("drag-drop-result")));
        assertEquals("Drag and drop action completed", result.getText());
        assertTrue(target.getText().contains("dropped successfully"));
    }

    @Test
    void keyboardShortcutShouldSelectAllAndReplaceText() {
        WebElement input = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("shortcut-input")));
        WebElement checkButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("shortcut-check-button")));

        input.click();

        // Keyboard shortcut example: Ctrl + A selects all existing text.
        // Then normal sendKeys replaces selected text with new value.
        actions.keyDown(Keys.CONTROL)
                .sendKeys("a")
                .keyUp(Keys.CONTROL)
                .sendKeys("Updated by keyboard shortcut")
                .perform();

        checkButton.click();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("shortcut-result")));
        assertEquals("Current text: Updated by keyboard shortcut", result.getText());
    }

    @Test
    void enterKeyShouldSubmitSearchInput() {
        WebElement searchInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("search-input")));

        // Keys.ENTER simulates pressing Enter key from keyboard.
        searchInput.sendKeys("Selenium Actions", Keys.ENTER);

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("enter-result")));
        assertEquals("Enter key submitted: Selenium Actions", result.getText());
    }

    @Test
    void clickAndHoldThenReleaseShouldUpdateStatus() {
        WebElement holdBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("hold-box")));

        // clickAndHold() keeps mouse button pressed on the element.
        actions.clickAndHold(holdBox).perform();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("hold-result")));
        assertEquals("Mouse button is holding the element", result.getText());

        // release() releases the mouse button.
        actions.release().perform();

        wait.until(ExpectedConditions.textToBe(By.id("hold-result"), "Mouse button released"));
        assertEquals("Mouse button released", result.getText());
    }

    @Test
    void actionChainingShouldHoverThenClick() {
        WebElement chainButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("chain-button")));

        // Action chaining combines multiple interactions before one final perform().
        // Here we hover first, then click the same button.
        actions.moveToElement(chainButton)
                .click(chainButton)
                .perform();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("chain-result")));
        assertEquals("Chained hover and click completed", result.getText());
    }
}
