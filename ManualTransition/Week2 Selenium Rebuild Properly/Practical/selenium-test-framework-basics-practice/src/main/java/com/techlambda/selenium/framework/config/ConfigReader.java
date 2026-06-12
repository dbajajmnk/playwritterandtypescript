package com.techlambda.selenium.framework.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ConfigReader is responsible for reading framework configuration values.
 *
 * Why this class is useful:
 * - Test code should not hardcode URLs, browser names, and timeout values.
 * - Environment values should be managed from one place.
 * - The same tests can run against different environments by changing config only.
 */
public final class ConfigReader {

    private static final Properties PROPERTIES = new Properties();

    static {
        try (InputStream inputStream = ConfigReader.class
                .getClassLoader()
                .getResourceAsStream("config.properties")) {

            if (inputStream == null) {
                throw new IllegalStateException("config.properties file was not found in src/test/resources");
            }

            PROPERTIES.load(inputStream);
        } catch (IOException exception) {
            throw new RuntimeException("Unable to load config.properties", exception);
        }
    }

    private ConfigReader() {
        // Utility class: object creation is not required.
    }

    public static String get(String key) {
        return PROPERTIES.getProperty(key);
    }

    public static String getBrowser() {
        // Command-line value gets first priority.
        // Example: mvn test -Dbrowser=edge
        String browserFromCommandLine = System.getProperty("browser");
        if (browserFromCommandLine != null && !browserFromCommandLine.isBlank()) {
            return browserFromCommandLine;
        }
        return get("browser");
    }

    public static int getExplicitWaitSeconds() {
        return Integer.parseInt(get("explicit.wait.seconds"));
    }
}
