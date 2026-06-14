package com.techlambda.selenium.frameworkdesign.utils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * ScreenshotUtility is another reusable utility.
 * It demonstrates how common support logic is separated from test logic.
 */
public final class ScreenshotUtility {

    private ScreenshotUtility() {
    }

    public static void capture(WebDriver driver, String fileName) {
        try {
            Path screenshotDir = Path.of("target", "screenshots");
            Files.createDirectories(screenshotDir);

            File source = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            Files.copy(source.toPath(), screenshotDir.resolve(fileName + ".png"));
        } catch (IOException ex) {
            throw new RuntimeException("Unable to capture screenshot", ex);
        }
    }
}