package com.techlambda.selenium.pom.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * CartPage owns cart-related locators and reusable actions.
 */
public class CartPage {

    private final WebDriver driver;

    private final By cartCount = By.id("cart-count");
    private final By cartItems = By.cssSelector("#cart-items li");
    private final By clearCartButton = By.id("clear-cart-button");

    public CartPage(WebDriver driver) {
        this.driver = driver;
    }

    public String getCartCountText() {
        return driver.findElement(cartCount).getText();
    }

    public int getCartItemCount() {
        return driver.findElements(cartItems).size();
    }

    public void clearCart() {
        driver.findElement(clearCartButton).click();
    }
}
