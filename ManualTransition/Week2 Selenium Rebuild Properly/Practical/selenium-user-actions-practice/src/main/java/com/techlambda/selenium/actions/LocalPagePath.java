
package com.techlambda.selenium.actions;

import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * LocalPagePath converts the local HTML file into a browser-friendly file URL.
 *
 * This keeps the practice project simple:
 * - No web server required
 * - No internet required
 * - The same sample page works on Windows, Mac, and Linux
 */
public final class LocalPagePath {

    private LocalPagePath() {
        // Utility class: object creation is not required.
    }

    public static String userActionsPageUrl() {
        Path pagePath = Paths.get("sample-site", "user-actions-practice.html").toAbsolutePath();
        return pagePath.toUri().toString();
    }
}
