package com.techlambda.selenium.locators;

import java.nio.file.Path;

/**
 * Converts the local HTML practice page into a browser-friendly file URL.
 *
 * Teaching point:
 * - This project does not need any external website.
 * - Selenium opens a local HTML file using file:/// URL.
 */
public final class LocalPagePath {

    private LocalPagePath() {
    }

    public static String locatorsPracticePageUrl() {
        return Path.of("sample-site", "locators-practice.html")
                .toAbsolutePath()
                .toUri()
                .toString();
    }
}
