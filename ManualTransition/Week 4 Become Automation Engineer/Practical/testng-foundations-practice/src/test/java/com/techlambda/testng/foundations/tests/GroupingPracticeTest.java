package com.techlambda.testng.foundations.tests;

import com.techlambda.testng.foundations.base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * TestNG groups help organize tests as smoke, regression, sanity, etc.
 *
 * You can run selected groups from Maven command line.
 */
public class GroupingPracticeTest extends BaseTest {

    @Test(groups = {"smoke"}, description = "Smoke test example")
    public void loginSmokeTestShouldPass() {
        boolean loginSuccessful = true;

        Assert.assertTrue(loginSuccessful, "Smoke login check should pass");
    }

    @Test(groups = {"regression"}, description = "Regression test example")
    public void dashboardRegressionTestShouldPass() {
        String dashboardTitle = "Dashboard";

        Assert.assertEquals(dashboardTitle, "Dashboard", "Dashboard title should be correct");
    }

    @Test(groups = {"smoke", "regression"}, description = "Test belonging to multiple groups")
    public void profileTestShouldPassForSmokeAndRegression() {
        boolean profileLoaded = true;

        Assert.assertTrue(profileLoaded, "Profile should load successfully");
    }
}
