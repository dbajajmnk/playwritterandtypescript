package com.techlambda.selenium.frameworkdesign.pages;

import com.techlambda.selenium.frameworkdesign.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * DashboardPage is reused after login.
 * It exposes meaningful page methods instead of exposing raw Selenium calls to tests.
 */
public class DashboardPage {

    private final WaitUtility wait;

    private final By dashboardTitle = By.id("dashboardTitle");
    private final By welcomeMessage = By.id("welcomeMessage");
    private final By roleBadge = By.id("roleBadge");

    public DashboardPage(WebDriver driver, WaitUtility wait) {
        // Driver is accepted to keep constructor style consistent with other page objects.
        this.wait = wait;
    }

    public String getTitleText() {
        return wait.visible(dashboardTitle).getText();
    }

    public String getWelcomeMessage() {
        return wait.visible(welcomeMessage).getText();
    }

    public String getRole() {
        return wait.visible(roleBadge).getText();
    }
}