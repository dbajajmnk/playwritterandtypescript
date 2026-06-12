package com.techlambda.testng.foundations.base;

import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/**
 * BaseTest demonstrates common setup and teardown logic.
 *
 * In real Selenium frameworks, this class usually launches the browser,
 * opens the application URL and closes the browser after each test.
 *
 * Here we keep it simple so learners can focus on TestNG lifecycle.
 */
public class BaseTest {

    @BeforeMethod(alwaysRun = true)
    public void setup(ITestResult result) {
        // This method runs before every @Test method.
        System.out.println("\n[SETUP] Starting test: " + result.getMethod().getMethodName());
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown(ITestResult result) {
        // This method runs after every @Test method.
        // It is useful for cleanup, screenshots, logs, and browser closing.
        if (result.isSuccess()) {
            System.out.println("[TEARDOWN] Test passed: " + result.getMethod().getMethodName());
        } else {
            System.out.println("[TEARDOWN] Test failed: " + result.getMethod().getMethodName());
        }
    }
}
