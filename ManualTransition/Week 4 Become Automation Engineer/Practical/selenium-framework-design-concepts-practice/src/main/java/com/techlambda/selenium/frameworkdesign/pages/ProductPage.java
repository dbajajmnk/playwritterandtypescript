package com.techlambda.selenium.frameworkdesign.pages;

import com.techlambda.selenium.frameworkdesign.data.ProductData;
import com.techlambda.selenium.frameworkdesign.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * ProductPage demonstrates reusable product actions.
 * The same addProductToCart method can be used with multiple datasets.
 */
public class ProductPage {

    private final WebDriver driver;
    private final WaitUtility wait;

    private final By cartMessage = By.id("cartMessage");

    public ProductPage(WebDriver driver, WaitUtility wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void addProductToCart(ProductData product) {
        By addButton = By.cssSelector("button[data-product='" + product.productName() + "']");
        wait.clickable(addButton).click();
    }

    public String getCartMessage() {
        return wait.visible(cartMessage).getText();
    }
}