package com.techlambda.selenium.pom.utils;

import java.nio.file.Paths;

/**
 * Utility class for opening the local HTML practice page.
 *
 * Keeping this path logic in one place avoids duplicate file path code
 * in every test class.
 */
public class LocalPagePath {

    public static String getPracticePageUrl() {
        return Paths.get("sample-site", "pom-practice.html")
                .toAbsolutePath()
                .toUri()
                .toString();
    }
}
