package com.techlambda.sqltesters.tests;

import org.junit.jupiter.api.Test;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;

/**
 * These tests cover SELECT and WHERE validation use cases.
 * Testers use these queries to verify whether expected records exist in the database.
 */
class SelectWhereValidationTest extends SqlTestBase {

    @Test
    void selectShouldReturnAllUsers() throws SQLException {
        String sql = "SELECT COUNT(*) AS total_users FROM users";

        try (PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            assertTrue(resultSet.next(), "Query should return count row");
            assertEquals(3, resultSet.getInt("total_users"), "There should be exactly 3 users in test data");
        }
    }

    @Test
    void whereShouldFilterOnlyActiveUsers() throws SQLException {
        String sql = "SELECT username, active FROM users WHERE status = ?";

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            // PreparedStatement avoids hardcoded concatenation and prevents SQL injection style mistakes.
            statement.setString(1, "Active");

            try (ResultSet resultSet = statement.executeQuery()) {
                int activeUserCount = 0;

                while (resultSet.next()) {
                    activeUserCount++;
                    assertTrue(resultSet.getBoolean("active"), "Active status users should have active=true");
                }

                assertEquals(2, activeUserCount, "Only 2 users should be active");
            }
        }
    }

    @Test
    void userRecordValidationShouldFindAdminUser() throws SQLException {
        String sql = "SELECT email, status FROM users WHERE username = ?";

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "admin");

            try (ResultSet resultSet = statement.executeQuery()) {
                assertTrue(resultSet.next(), "Admin user should exist");
                assertEquals("admin@test.com", resultSet.getString("email"));
                assertEquals("Active", resultSet.getString("status"));
            }
        }
    }
}
