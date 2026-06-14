package com.techlambda.interview.utils;

import java.nio.file.Path;

/**
 * Converts local HTML file path into browser-friendly file URL.
 */
public final class LocalPagePath {

    private LocalPagePath() {
    }

    public static String interviewScenariosPage() {
        return Path.of("sample-site", "interview-scenarios.html")
                .toAbsolutePath()
                .toUri()
                .toString();
    }
}
