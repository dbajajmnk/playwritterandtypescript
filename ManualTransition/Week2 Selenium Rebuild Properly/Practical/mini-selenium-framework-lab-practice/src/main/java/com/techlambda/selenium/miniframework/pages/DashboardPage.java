package com.techlambda.selenium.miniframework.pages;

import com.techlambda.selenium.miniframework.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * DashboardPage is a separate page object.
 * It keeps dashboard-related locators and dashboard actions away from test code.
 */
public class DashboardPage {

    private final WebDriver driver;
    private final WaitUtility wait;

    private final By welcomeMessage = By.id("welcome-message");
    private final By logoutButton = By.id("logout-button");
    private final By addToCartButton = By.id("add-to-cart-button");
    private final By cartMessage = By.id("cart-message");

    public DashboardPage(WebDriver driver, WaitUtility wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public String getWelcomeMessage() {
        return wait.waitForVisible(welcomeMessage).getText();
    }

    public void addProductToCart() {
        wait.waitForClickable(addToCartButton).click();
    }

    public String getCartMessage() {
        return wait.waitForVisible(cartMessage).getText();
    }

    public void logout() {
        wait.waitForClickable(logoutButton).click();
    }
}
