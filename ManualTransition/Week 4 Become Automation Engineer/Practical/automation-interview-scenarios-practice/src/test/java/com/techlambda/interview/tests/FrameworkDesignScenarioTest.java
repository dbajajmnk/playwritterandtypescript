package com.techlambda.interview.tests;

import com.techlambda.interview.pages.InterviewScenariosPage;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * Interview scenario: How would you design an automation framework?
 * This test demonstrates layer separation:
 * Test = scenario + assertions
 * Page Object = locators + actions
 * Base = setup and teardown
 * Utility = waits and reusable helpers
 */
public class FrameworkDesignScenarioTest extends BaseInterviewTest {

    @Test(description = "Use POM-style framework flow for login validation")
    public void shouldExplainFrameworkDesignUsingLoginFlow() {
        InterviewScenariosPage page = new InterviewScenariosPage(driver);

        page.login("interview@test.com", "Password@123");

        Assert.assertEquals(page.getLoginMessage(), "Login successful");
        Assert.assertEquals(page.getDashboardTitle(), "Dashboard");
    }
}
