package com.techlambda.testng.foundations.tests;

import com.techlambda.testng.foundations.base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * This class demonstrates the most basic TestNG test structure.
 *
 * @Test marks a method as executable by the TestNG runner.
 */
public class BasicTestStructureTest extends BaseTest {

    @Test(description = "Verify that a simple TestNG test method can run")
    public void simpleTestMethodShouldRun() {
        // Arrange: prepare expected and actual values.
        String expectedMessage = "Run Test";
        String actualMessage = "Run Test";

        // Assert: verify the test outcome.
        Assert.assertEquals(actualMessage, expectedMessage, "Messages should match");
    }

    @Test(description = "Verify test flow using arrange, act and assert pattern")
    public void testShouldFollowArrangeActAssertPattern() {
        // Arrange: define test data.
        int firstNumber = 10;
        int secondNumber = 5;

        // Act: perform action/business logic.
        int result = firstNumber + secondNumber;

        // Assert: validate actual result against expected result.
        Assert.assertEquals(result, 15, "Addition result should be correct");
    }
}
