package com.techlambda.selenium.miniframework.utils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * ScreenshotUtility is a reusable support utility.
 * It can be called from BaseTest when a test fails.
 */
public final class ScreenshotUtility {

    private ScreenshotUtility() {
        // Utility class: object creation is not required.
    }

    public static Path capture(WebDriver driver, String testName) {
        try {
            Path screenshotDir = Path.of("target", "screenshots");
            Files.createDirectories(screenshotDir);

            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
            Path destination = screenshotDir.resolve(testName + "_" + timestamp + ".png");

            File source = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            Files.copy(source.toPath(), destination);
            return destination;
        } catch (IOException exception) {
            throw new RuntimeException("Unable to capture screenshot", exception);
        }
    }
}
