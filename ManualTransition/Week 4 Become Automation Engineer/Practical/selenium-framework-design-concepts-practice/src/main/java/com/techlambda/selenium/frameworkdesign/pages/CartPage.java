package com.techlambda.selenium.frameworkdesign.pages;

import com.techlambda.selenium.frameworkdesign.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * CartPage owns cart-related locators and page behavior.
 */
public class CartPage {

    private final WaitUtility wait;
    private final By cartCount = By.id("cartCount");

    public CartPage(WebDriver driver, WaitUtility wait) {
        this.wait = wait;
    }

    public int getCartCount() {
        return Integer.parseInt(wait.visible(cartCount).getText());
    }
}