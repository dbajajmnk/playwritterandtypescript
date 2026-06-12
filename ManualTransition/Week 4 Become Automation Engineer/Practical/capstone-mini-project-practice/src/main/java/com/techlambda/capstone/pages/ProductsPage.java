package com.techlambda.capstone.pages;

import com.techlambda.capstone.utils.WaitUtility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Optional;

/**
 * ProductsPage follows Page Object Model.
 * Locators and page actions stay here, while assertions stay in test classes.
 */
public class ProductsPage {

    private final WebDriver driver;
    private final WaitUtility wait;

    private final By productsMenu = By.xpath("//a[contains(text(),'Products')]");
    private final By searchInput = By.id("search_product");
    private final By searchButton = By.id("submit_search");
    private final By searchedProductsHeading = By.xpath("//*[contains(text(),'Searched Products')]");
    private final By productNames = By.xpath("//*[contains(@class,'productinfo')]//p");

    public ProductsPage(WebDriver driver, int timeoutSeconds) {
        this.driver = driver;
        this.wait = new WaitUtility(driver, timeoutSeconds);
    }

    public void openProductsPage() {
        wait.clickable(productsMenu).click();
    }

    public void searchProduct(String keyword) {
        wait.visible(searchInput).clear();
        driver.findElement(searchInput).sendKeys(keyword);
        wait.clickable(searchButton).click();
    }

    public boolean isSearchedProductsHeadingVisible() {
        return wait.visible(searchedProductsHeading).isDisplayed();
    }

    public List<String> getVisibleProductNames() {
        wait.visible(productNames);
        return driver.findElements(productNames)
                .stream()
                .map(element -> element.getText().trim())
                .filter(text -> !text.isBlank())
                .toList();
    }

    public Optional<String> findProductByName(String expectedProduct) {
        return getVisibleProductNames()
                .stream()
                .filter(name -> name.equalsIgnoreCase(expectedProduct))
                .findFirst();
    }
}
