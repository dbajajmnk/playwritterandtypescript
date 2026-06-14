package com.techlambda.sqltesters.tests;

import org.junit.jupiter.api.Test;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;

/**
 * This class shows backend validation use cases.
 * A tester may receive an ID from UI/API flow and then verify the final data in DB.
 */
class BackendValidationUseCaseTest extends SqlTestBase {

    @Test
    void apiReturnedOrderIdShouldExistInDatabase() throws SQLException {
        // Imagine this ID came from an API response or UI checkout confirmation screen.
        int orderIdFromApiResponse = 302;

        String sql = "SELECT id, amount, status FROM orders WHERE id = ?";

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, orderIdFromApiResponse);

            try (ResultSet resultSet = statement.executeQuery()) {
                assertTrue(resultSet.next(), "Order from API response should exist in DB");
                assertEquals(800.00, resultSet.getDouble("amount"));
                assertEquals("PAID", resultSet.getString("status"));
            }
        }
    }

    @Test
    void pendingOrdersShouldBeIdentifiedForValidation() throws SQLException {
        String sql = "SELECT COUNT(*) AS pending_count FROM orders WHERE status = ?";

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "PENDING");

            try (ResultSet resultSet = statement.executeQuery()) {
                assertTrue(resultSet.next());
                assertEquals(1, resultSet.getInt("pending_count"), "There should be one pending order");
            }
        }
    }
}
