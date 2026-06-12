package com.techlambda.interview.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;

/**
 * Small helper to demonstrate stale element retry thinking.
 * Interview point: Stale element happens when DOM changes after element was located.
 */
public final class StaleElementHelper {

    private StaleElementHelper() {
    }

    public static void clickAfterRelocating(WebDriver driver, By locator, int maxAttempts) {
        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                driver.findElement(locator).click();
                return;
            } catch (StaleElementReferenceException exception) {
                if (attempt == maxAttempts) {
                    throw exception;
                }
            }
        }
    }
}
