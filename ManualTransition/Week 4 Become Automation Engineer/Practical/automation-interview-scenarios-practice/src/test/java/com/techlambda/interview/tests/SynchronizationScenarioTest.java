package com.techlambda.interview.tests;

import com.techlambda.interview.pages.InterviewScenariosPage;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * Interview scenario: Element not clickable intermittently.
 * Strong answer: avoid Thread.sleep and wait for the correct condition.
 */
public class SynchronizationScenarioTest extends BaseInterviewTest {

    @Test(description = "Fix flaky clickable element using explicit wait")
    public void shouldHandleFlakyElementUsingExplicitWait() {
        InterviewScenariosPage page = new InterviewScenariosPage(driver);

        page.loadDynamicButton();
        page.clickDynamicButtonAfterItIsClickable();

        Assert.assertEquals(page.getSyncResult(), "Dynamic action completed");
    }
}
