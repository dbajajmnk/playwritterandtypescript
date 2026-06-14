package com.techlambda.testng.foundations.tests;

import com.techlambda.testng.foundations.base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * This class demonstrates parallel execution awareness.
 *
 * Important rule:
 * Parallel tests should avoid shared mutable state.
 */
public class ParallelExecutionPracticeTest extends BaseTest {

    @Test(description = "Parallel test example one")
    public void parallelTestOneShouldRunIndependently() {
        String threadName = Thread.currentThread().getName();
        System.out.println("Parallel Test One running on: " + threadName);

        Assert.assertNotNull(threadName, "Thread name should be available");
    }

    @Test(description = "Parallel test example two")
    public void parallelTestTwoShouldRunIndependently() {
        String threadName = Thread.currentThread().getName();
        System.out.println("Parallel Test Two running on: " + threadName);

        Assert.assertTrue(threadName.length() > 0, "Thread name should not be empty");
    }
}
