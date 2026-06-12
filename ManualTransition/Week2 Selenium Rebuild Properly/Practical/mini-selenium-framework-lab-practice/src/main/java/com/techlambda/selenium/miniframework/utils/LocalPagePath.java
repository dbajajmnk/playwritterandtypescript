package com.techlambda.selenium.miniframework.utils;

import java.nio.file.Path;

/**
 * LocalPagePath converts the local sample HTML file into a browser-friendly file URL.
 * This keeps the project runnable without any external website dependency.
 */
public final class LocalPagePath {

    private LocalPagePath() {
        // Utility class: object creation is not required.
    }

    public static String miniFrameworkLoginPageUrl() {
        return Path.of("sample-site", "mini-framework-login.html")
                .toAbsolutePath()
                .toUri()
                .toString();
    }
}
