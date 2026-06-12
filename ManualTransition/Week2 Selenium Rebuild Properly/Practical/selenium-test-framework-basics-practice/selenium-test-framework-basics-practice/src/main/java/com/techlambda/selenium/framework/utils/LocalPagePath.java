package com.techlambda.selenium.framework.utils;

import java.nio.file.Path;

/**
 * Converts a local HTML file path into a browser-friendly file URL.
 *
 * This allows our Selenium practice project to run without any external website.
 */
public final class LocalPagePath {

    private LocalPagePath() {
    }

    public static String toFileUrl(String relativePathFromProjectRoot) {
        return Path.of(relativePathFromProjectRoot)
                .toAbsolutePath()
                .normalize()
                .toUri()
                .toString();
    }
}
