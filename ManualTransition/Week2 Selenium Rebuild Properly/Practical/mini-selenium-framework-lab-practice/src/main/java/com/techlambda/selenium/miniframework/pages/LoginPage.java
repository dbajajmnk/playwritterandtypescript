package com.techlambda.selenium.miniframework.pages;

import com.techlambda.selenium.miniframework.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * LoginPage is part of the Page Object Model layer.
 * It contains login page locators and login page actions only.
 */
public class LoginPage {

    private final WebDriver driver;
    private final WaitUtility wait;

    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("login-button");
    private final By loginError = By.id("login-error");

    public LoginPage(WebDriver driver, WaitUtility wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void enterEmail(String email) {
        wait.waitForVisible(emailInput).clear();
        driver.findElement(emailInput).sendKeys(email);
    }

    public void enterPassword(String password) {
        wait.waitForVisible(passwordInput).clear();
        driver.findElement(passwordInput).sendKeys(password);
    }

    public void clickLogin() {
        wait.waitForClickable(loginButton).click();
    }

    public void login(String email, String password) {
        enterEmail(email);
        enterPassword(password);
        clickLogin();
    }

    public String getErrorMessage() {
        return wait.waitForVisible(loginError).getText();
    }
}
