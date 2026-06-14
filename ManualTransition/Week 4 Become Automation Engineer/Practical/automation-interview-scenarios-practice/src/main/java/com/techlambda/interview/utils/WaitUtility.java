package com.techlambda.interview.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

/**
 * Centralized wait utility.
 * Interview point: Prefer condition-based waits over Thread.sleep().
 */
public class WaitUtility {

    private final WebDriverWait wait;

    public WaitUtility(WebDriver driver) {
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public WebElement waitUntilVisible(By locator) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public WebElement waitUntilClickable(By locator) {
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    public boolean waitUntilTextPresent(By locator, String expectedText) {
        return wait.until(ExpectedConditions.textToBePresentInElementLocated(locator, expectedText));
    }
}
