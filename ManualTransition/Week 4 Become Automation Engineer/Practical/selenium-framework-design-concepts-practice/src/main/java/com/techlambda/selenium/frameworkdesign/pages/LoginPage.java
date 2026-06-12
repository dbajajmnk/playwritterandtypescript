package com.techlambda.selenium.frameworkdesign.pages;

import com.techlambda.selenium.frameworkdesign.data.UserData;
import com.techlambda.selenium.frameworkdesign.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * LoginPage is a Page Object Model class.
 * It owns login page locators and login page actions.
 *
 * Test classes should call loginPage.loginAs(user), not directly use locators.
 */
public class LoginPage {

    private final WebDriver driver;
    private final WaitUtility wait;

    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("loginBtn");
    private final By loginMessage = By.id("loginMessage");

    public LoginPage(WebDriver driver, WaitUtility wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void loginAs(UserData user) {
        wait.visible(emailInput).clear();
        driver.findElement(emailInput).sendKeys(user.email());

        driver.findElement(passwordInput).clear();
        driver.findElement(passwordInput).sendKeys(user.password());

        wait.clickable(loginButton).click();
    }

    public String getLoginMessage() {
        return wait.visible(loginMessage).getText();
    }
}