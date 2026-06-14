package com.techlambda.selenium.frameworkdesign.utils;

import java.nio.file.Path;

/**
 * Converts a local HTML file path into a browser-friendly file URL.
 * This allows the practice project to run without any external website dependency.
 */
public final class LocalPagePath {

    private LocalPagePath() {
    }

    public static String fromProjectRoot(String relativePath) {
        return Path.of(relativePath).toAbsolutePath().toUri().toString();
    }
}