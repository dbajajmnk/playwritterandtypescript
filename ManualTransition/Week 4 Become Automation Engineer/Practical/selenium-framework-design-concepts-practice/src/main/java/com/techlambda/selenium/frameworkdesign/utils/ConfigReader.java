package com.techlambda.selenium.frameworkdesign.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ConfigReader represents the configuration layer.
 * It keeps browser, timeout, and URL/page values outside test classes.
 */
public final class ConfigReader {

    private static final Properties PROPERTIES = new Properties();

    static {
        try (InputStream input = ConfigReader.class.getClassLoader().getResourceAsStream("config.properties")) {
            if (input == null) {
                throw new IllegalStateException("config.properties not found in src/test/resources");
            }
            PROPERTIES.load(input);
        } catch (IOException ex) {
            throw new IllegalStateException("Unable to load config.properties", ex);
        }
    }

    private ConfigReader() {
    }

    public static String get(String key) {
        return PROPERTIES.getProperty(key);
    }

    public static int getInt(String key) {
        return Integer.parseInt(get(key));
    }
}