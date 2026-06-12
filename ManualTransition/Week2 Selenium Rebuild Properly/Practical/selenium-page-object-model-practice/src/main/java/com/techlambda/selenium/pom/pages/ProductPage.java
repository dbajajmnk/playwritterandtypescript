package com.techlambda.selenium.pom.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * ProductPage contains product-related page actions.
 *
 * Notice that tests do not need to know the selector strategy.
 * They only call readable methods such as addProductToCart("Laptop").
 */
public class ProductPage {

    private final WebDriver driver;

    public ProductPage(WebDriver driver) {
        this.driver = driver;
    }

    public void addProductToCart(String productName) {
        By addProductButton = By.cssSelector("button[data-product='" + productName + "']");
        driver.findElement(addProductButton).click();
    }
}
