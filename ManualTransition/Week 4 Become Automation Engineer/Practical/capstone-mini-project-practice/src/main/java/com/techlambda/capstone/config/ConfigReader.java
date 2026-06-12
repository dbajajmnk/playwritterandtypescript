package com.techlambda.capstone.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ConfigReader keeps environment values outside test code.
 * This helps learners understand why real frameworks avoid hardcoded URLs and test values.
 */
public final class ConfigReader {

    private static final Properties PROPERTIES = new Properties();

    static {
        try (InputStream inputStream = ConfigReader.class.getClassLoader()
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
        // Utility class should not be instantiated.
    }

    public static String get(String key) {
        String value = PROPERTIES.getProperty(key);
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException("Missing config value for key: " + key);
        }
        return value.trim();
    }

    public static int getInt(String key) {
        return Integer.parseInt(get(key));
    }
}
