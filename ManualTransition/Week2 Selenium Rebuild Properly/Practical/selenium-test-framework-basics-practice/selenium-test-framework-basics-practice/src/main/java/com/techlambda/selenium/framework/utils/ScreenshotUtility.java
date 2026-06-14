package com.techlambda.selenium.framework.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

/**
 * ScreenshotUtility provides reusable screenshot support.
 *
 * In real frameworks, this utility is commonly used when a test fails.
 */
public final class ScreenshotUtility {

    private ScreenshotUtility() {
    }

    public static String takeScreenshot(WebDriver driver, String screenshotName) {
        try {
            Path screenshotDirectory = Path.of("target", "screenshots");
            Files.createDirectories(screenshotDirectory);

            String timestamp = LocalDateTime.now()
                    .format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));

            String safeName = screenshotName.replaceAll("[^a-zA-Z0-9-_]", "_");
            Path destination = screenshotDirectory.resolve(safeName + "_" + timestamp + ".png");

            File source = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            Files.copy(source.toPath(), destination);

            return destination.toAbsolutePath().toString();
        } catch (IOException exception) {
            throw new RuntimeException("Unable to capture screenshot", exception);
        }
    }
}
