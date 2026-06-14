package com.techlambda.interview.pages;

import com.techlambda.interview.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Page Object for the interview scenario practice page.
 * Interview point: Page class owns locators and page actions, test class owns assertions and scenario flow.
 */
public class InterviewScenariosPage {

    private final WebDriver driver;
    private final WaitUtility waitUtility;

    private final By loadActionButton = By.id("load-action");
    private final By dynamicButton = By.id("dynamic-button");
    private final By syncResult = By.id("sync-result");
    private final By refreshDomButton = By.id("refresh-dom");
    private final By staleButton = By.id("stale-button");
    private final By staleResult = By.id("stale-result");
    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("login-button");
    private final By loginMessage = By.id("login-message");
    private final By dashboardTitle = By.id("dashboard-title");
    private final By sessionButton = By.id("session-button");
    private final By sessionOutput = By.id("session-output");

    public InterviewScenariosPage(WebDriver driver) {
        this.driver = driver;
        this.waitUtility = new WaitUtility(driver);
    }

    public void loadDynamicButton() {
        driver.findElement(loadActionButton).click();
    }

    public void clickDynamicButtonAfterItIsClickable() {
        waitUtility.waitUntilClickable(dynamicButton).click();
    }

    public String getSyncResult() {
        waitUtility.waitUntilVisible(syncResult);
        return driver.findElement(syncResult).getText();
    }

    public WebElement locateStaleButtonBeforeDomRefresh() {
        return driver.findElement(staleButton);
    }

    public void refreshDom() {
        driver.findElement(refreshDomButton).click();
    }

    public By staleButtonLocator() {
        return staleButton;
    }

    public String getStaleResult() {
        waitUtility.waitUntilVisible(staleResult);
        return driver.findElement(staleResult).getText();
    }

    public void login(String email, String password) {
        driver.findElement(emailInput).sendKeys(email);
        driver.findElement(passwordInput).sendKeys(password);
        driver.findElement(loginButton).click();
    }

    public String getLoginMessage() {
        waitUtility.waitUntilVisible(loginMessage);
        return driver.findElement(loginMessage).getText();
    }

    public String getDashboardTitle() {
        waitUtility.waitUntilVisible(dashboardTitle);
        return driver.findElement(dashboardTitle).getText();
    }

    public void generateSessionText() {
        driver.findElement(sessionButton).click();
    }

    public String getSessionOutput() {
        waitUtility.waitUntilVisible(sessionOutput);
        return driver.findElement(sessionOutput).getText();
    }
}
