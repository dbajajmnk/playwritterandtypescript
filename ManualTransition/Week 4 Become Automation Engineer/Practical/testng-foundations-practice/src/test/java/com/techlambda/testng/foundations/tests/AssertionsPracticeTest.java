package com.techlambda.testng.foundations.tests;

import com.techlambda.testng.foundations.base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * This class demonstrates common TestNG assertion methods.
 *
 * Good automation should verify outcomes with assertions,
 * not only print messages in the console.
 */
public class AssertionsPracticeTest extends BaseTest {

    @Test(description = "Verify basic equality assertion")
    public void shouldValidateEqualValues() {
        String actualUserRole = "Admin";
        String expectedUserRole = "Admin";

        Assert.assertEquals(actualUserRole, expectedUserRole, "User role should be Admin");
    }

    @Test(description = "Verify boolean true assertion")
    public void shouldValidateTrueCondition() {
        boolean isLoginButtonVisible = true;

        Assert.assertTrue(isLoginButtonVisible, "Login button should be visible");
    }

    @Test(description = "Verify not null assertion")
    public void shouldValidateObjectIsNotNull() {
        String authToken = "sample-token-123";

        Assert.assertNotNull(authToken, "Auth token should not be null");
    }

    @Test(description = "Verify collection size assertion")
    public void shouldValidateProductCount() {
        int productCount = 3;

        Assert.assertTrue(productCount > 0, "Product count should be greater than zero");
        Assert.assertEquals(productCount, 3, "Product count should match expected value");
    }
}
