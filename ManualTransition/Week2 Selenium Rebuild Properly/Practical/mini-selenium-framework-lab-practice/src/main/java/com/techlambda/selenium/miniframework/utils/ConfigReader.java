package com.techlambda.selenium.miniframework.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ConfigReader belongs to the config/utility layer.
 * It avoids hardcoding browser name, credentials, and timeout values inside tests.
 */
public class ConfigReader {

    private final Properties properties = new Properties();

    public ConfigReader() {
        try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream("config.properties")) {
            if (inputStream == null) {
                throw new IllegalStateException("config.properties file not found inside src/test/resources");
            }
            properties.load(inputStream);
        } catch (IOException exception) {
            throw new RuntimeException("Unable to load config.properties", exception);
        }
    }

    public String get(String key) {
        return properties.getProperty(key);
    }

    public int getInt(String key) {
        return Integer.parseInt(get(key));
    }
}
