package com.techlambda.selenium.pom.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * LoginPage represents the Login page of the application.
 *
 * POM rule:
 * - Locators stay inside page class.
 * - Page actions stay inside page class.
 * - Test class should not directly use login page locators.
 */
public class LoginPage {

    private final WebDriver driver;

    // Locators are private because tests should not directly access page internals.
    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("login-button");
    private final By loginMessage = By.id("login-message");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void enterEmail(String email) {
        driver.findElement(emailInput).clear();
        driver.findElement(emailInput).sendKeys(email);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordInput).clear();
        driver.findElement(passwordInput).sendKeys(password);
    }

    public void clickLogin() {
        driver.findElement(loginButton).click();
    }

    /**
     * Reusable business action.
     *
     * Test class can simply call loginPage.login(...)
     * instead of repeating email, password, and button steps.
     */
    public void login(String email, String password) {
        enterEmail(email);
        enterPassword(password);
        clickLogin();
    }

    public String getLoginMessage() {
        return driver.findElement(loginMessage).getText();
    }
}
