package com.techlambda.selenium.frameworkdesign.data;

/**
 * ProductData represents product input for data-driven tests.
 */
public record ProductData(String productName, String expectedCartMessage) {

    public static ProductData laptop() {
        return new ProductData("Laptop", "Laptop added to cart");
    }

    public static ProductData mouse() {
        return new ProductData("Mouse", "Mouse added to cart");
    }
}