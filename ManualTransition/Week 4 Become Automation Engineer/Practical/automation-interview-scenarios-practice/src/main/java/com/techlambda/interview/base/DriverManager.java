package com.techlambda.interview.base;

import org.openqa.selenium.WebDriver;

/**
 * ThreadLocal driver manager for parallel execution.
 * Interview point: In parallel execution, each thread should have its own WebDriver instance.
 */
public final class DriverManager {

    private static final ThreadLocal<WebDriver> DRIVER = new ThreadLocal<>();

    private DriverManager() {
    }

    public static void setDriver(WebDriver driver) {
        DRIVER.set(driver);
    }

    public static WebDriver getDriver() {
        return DRIVER.get();
    }

    public static void quitDriver() {
        WebDriver driver = DRIVER.get();
        if (driver != null) {
            driver.quit();
            DRIVER.remove();
        }
    }
}
