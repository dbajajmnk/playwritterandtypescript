package com.techlambda.interview.tests;

import com.techlambda.interview.base.BrowserFactory;
import com.techlambda.interview.base.DriverManager;
import com.techlambda.interview.pages.InterviewScenariosPage;
import com.techlambda.interview.utils.LocalPagePath;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

/**
 * Interview scenario: Parallel execution risks.
 * Strong answer: Do not share one static driver. Use separate driver per thread.
 */
public class ParallelExecutionScenarioTest {

    @BeforeMethod(alwaysRun = true)
    public void setUp() {
        WebDriver driver = BrowserFactory.createDriver();
        DriverManager.setDriver(driver);
        driver.manage().window().maximize();
        driver.get(LocalPagePath.interviewScenariosPage());
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        DriverManager.quitDriver();
    }

    @Test(description = "Parallel test A uses its own driver session")
    public void parallelScenarioAShouldUseOwnDriverSession() {
        InterviewScenariosPage page = new InterviewScenariosPage(DriverManager.getDriver());
        page.generateSessionText();
        Assert.assertTrue(page.getSessionOutput().startsWith("session-"));
    }

    @Test(description = "Parallel test B uses its own driver session")
    public void parallelScenarioBShouldUseOwnDriverSession() {
        InterviewScenariosPage page = new InterviewScenariosPage(DriverManager.getDriver());
        page.generateSessionText();
        Assert.assertTrue(page.getSessionOutput().startsWith("session-"));
    }
}
