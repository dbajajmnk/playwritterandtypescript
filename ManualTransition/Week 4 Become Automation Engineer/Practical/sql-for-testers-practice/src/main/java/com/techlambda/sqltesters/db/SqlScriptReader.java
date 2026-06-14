package com.techlambda.sqltesters.db;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

/**
 * Utility class for reading SQL files from src/test/resources.
 * In real projects, testers often keep schema and test data outside Java code.
 */
public final class SqlScriptReader {

    private SqlScriptReader() {
        // Utility class should not be instantiated.
    }

    public static String readFromClasspath(String resourcePath) {
        InputStream inputStream = SqlScriptReader.class.getClassLoader().getResourceAsStream(resourcePath);

        if (inputStream == null) {
            throw new IllegalArgumentException("Resource not found: " + resourcePath);
        }

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
            return reader.lines().collect(Collectors.joining("\n"));
        } catch (IOException ex) {
            throw new RuntimeException("Unable to read resource: " + resourcePath, ex);
        }
    }
}
