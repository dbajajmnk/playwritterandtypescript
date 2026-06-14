package com.techlambda.interview.tests;

import com.techlambda.interview.pages.InterviewScenariosPage;
import com.techlambda.interview.utils.StaleElementHelper;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * Interview scenario: StaleElementReferenceException.
 * Strong answer: DOM changed, so re-locate the element instead of reusing the old reference.
 */
public class StaleElementScenarioTest extends BaseInterviewTest {

    @Test(description = "Handle stale element by re-locating element after DOM refresh")
    public void shouldHandleStaleElementByRelocatingElement() {
        InterviewScenariosPage page = new InterviewScenariosPage(driver);

        WebElement oldReference = page.locateStaleButtonBeforeDomRefresh();
        page.refreshDom();

        // Do not use oldReference.click() here. That reference may now be stale.
        StaleElementHelper.clickAfterRelocating(driver, page.staleButtonLocator(), 3);

        Assert.assertEquals(page.getStaleResult(), "Stale scenario fixed by re-locating element");
    }
}
