package com.techlambda.selenium.pom.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * DashboardPage represents dashboard-related locators and actions.
 *
 * This class hides dashboard UI details from the test class.
 */
public class DashboardPage {

    private final WebDriver driver;

    private final By dashboardStatus = By.id("dashboard-status");
    private final By welcomeMessage = By.id("welcome-message");
    private final By searchBox = By.id("search-box");
    private final By searchButton = By.id("search-button");
    private final By searchResult = By.id("search-result");

    public DashboardPage(WebDriver driver) {
        this.driver = driver;
    }

    public String getDashboardStatus() {
        return driver.findElement(dashboardStatus).getText();
    }

    public String getWelcomeMessage() {
        return driver.findElement(welcomeMessage).getText();
    }

    public void searchProduct(String productName) {
        driver.findElement(searchBox).clear();
        driver.findElement(searchBox).sendKeys(productName);
        driver.findElement(searchButton).click();
    }

    public String getSearchResult() {
        return driver.findElement(searchResult).getText();
    }
}
