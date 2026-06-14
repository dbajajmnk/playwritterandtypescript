package com.techlambda.interview.tests;

import com.techlambda.interview.base.BrowserFactory;
import com.techlambda.interview.base.DriverManager;
import com.techlambda.interview.utils.LocalPagePath;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/**
 * Test base class used only for test lifecycle.
 * Important: This class is under src/test/java because it uses TestNG annotations.
 */
public class BaseInterviewTest {

    protected WebDriver driver;

    @BeforeMethod(alwaysRun = true)
    public void setUp() {
        driver = BrowserFactory.createDriver();
        DriverManager.setDriver(driver);
        driver.manage().window().maximize();
        driver.get(LocalPagePath.interviewScenariosPage());
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        DriverManager.quitDriver();
    }
}
