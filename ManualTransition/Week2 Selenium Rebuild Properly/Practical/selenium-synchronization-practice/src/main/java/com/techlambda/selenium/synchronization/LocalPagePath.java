package com.techlambda.selenium.synchronization;

import java.nio.file.Path;

/**
 * Converts the local HTML practice page into a browser-friendly file URL.
 * This keeps the project simple because no web server is required.
 */
public final class LocalPagePath {

    private LocalPagePath() {
    }

    public static String synchronizationPracticePage() {
        return Path.of("sample-site", "synchronization-practice.html")
                .toAbsolutePath()
                .toUri()
                .toString();
    }
}
