package com.techlambda.capstone.tests;

import com.techlambda.capstone.api.ProductApiClient;
import com.techlambda.capstone.base.BaseTest;
import com.techlambda.capstone.pages.ProductsPage;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.List;

/**
 * Capstone flow:
 * 1. Search product in UI with Selenium.
 * 2. Search same product through API with REST Assured.
 * 3. Compare UI result with API response using TestNG assertions.
 */
public class AutomationExerciseCapstoneTest extends BaseTest {

    private ProductsPage productsPage;
    private ProductApiClient productApiClient;
    private String uiMatchedProduct;

    @BeforeClass(alwaysRun = true)
    public void createPageObjectsAndApiClients() {
        productsPage = new ProductsPage(driver, explicitWaitSeconds);
        productApiClient = new ProductApiClient(baseUrl);
    }

    @Test(priority = 1, description = "Search product from UI and validate expected product is visible")
    public void uiAutomationFlow() {
        driver.get(baseUrl);

        productsPage.openProductsPage();
        productsPage.searchProduct(searchKeyword);

        Assert.assertTrue(
                productsPage.isSearchedProductsHeadingVisible(),
                "Searched Products heading should be visible after product search"
        );

        List<String> uiProducts = productsPage.getVisibleProductNames();
        Assert.assertFalse(uiProducts.isEmpty(), "UI search should return at least one product");

        uiMatchedProduct = productsPage.findProductByName(expectedProduct)
                .orElseThrow(() -> new AssertionError("Expected product not found on UI: " + expectedProduct));

        System.out.println("UI Matched Product: " + uiMatchedProduct);
    }

    @Test(priority = 2, description = "Call product search API and validate status plus response body")
    public void apiVerificationFlow() {
        Response response = productApiClient.searchProduct(searchKeyword);

        Assert.assertEquals(response.getStatusCode(), 200, "API status code mismatch");

        String responseBody = response.getBody().asString();
        Assert.assertNotNull(responseBody, "API response body should not be null");
        Assert.assertFalse(responseBody.isBlank(), "API response body should not be empty");
        Assert.assertTrue(responseBody.contains("products"), "API response should contain products key");
        Assert.assertTrue(
                responseBody.toLowerCase().contains(expectedProduct.toLowerCase()),
                "Expected product should be present in API response: " + expectedProduct
        );

        System.out.println("API Verification Passed");
    }

    @Test(
            priority = 3,
            dependsOnMethods = {"uiAutomationFlow", "apiVerificationFlow"},
            description = "Compare UI matched product with API response"
    )
    public void combinedValidation() {
        Response response = productApiClient.searchProduct(searchKeyword);
        Assert.assertEquals(response.getStatusCode(), 200, "Combined validation API call failed");

        String responseBody = response.getBody().asString();

        Assert.assertEquals(uiMatchedProduct, expectedProduct, "UI matched product is incorrect");
        Assert.assertTrue(
                responseBody.toLowerCase().contains(uiMatchedProduct.toLowerCase()),
                "UI product should also exist in API response"
        );

        System.out.println("Combined Validation Passed");
        System.out.println("UI Product  : " + uiMatchedProduct);
        System.out.println("API contains: " + uiMatchedProduct);
    }
}
