package com.techlambda.sqltesters.tests;

import org.junit.jupiter.api.Test;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;

/**
 * These tests cover JOIN validation.
 * Testers use JOIN when data is split across multiple tables but the business flow connects them.
 */
class JoinValidationTest extends SqlTestBase {

    @Test
    void joinShouldValidateOrderCustomerRelationship() throws SQLException {
        String sql = """
                SELECT o.id AS order_id, c.name AS customer_name, o.status AS order_status
                FROM orders o
                JOIN customers c ON o.customer_id = c.id
                WHERE o.id = ?
                """;

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, 301);

            try (ResultSet resultSet = statement.executeQuery()) {
                assertTrue(resultSet.next(), "Order 301 should exist with customer details");
                assertEquals("Deepak Bajaj", resultSet.getString("customer_name"));
                assertEquals("PAID", resultSet.getString("order_status"));
            }
        }
    }

    @Test
    void joinShouldValidateOrderProductAmount() throws SQLException {
        String sql = """
                SELECT o.id AS order_id, p.name AS product_name, p.price AS product_price, o.amount AS order_amount
                FROM orders o
                JOIN products p ON o.product_id = p.id
                WHERE p.name = ?
                """;

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "Laptop");

            try (ResultSet resultSet = statement.executeQuery()) {
                assertTrue(resultSet.next(), "Laptop order should exist");
                assertEquals(75000.00, resultSet.getDouble("product_price"));
                assertEquals(resultSet.getDouble("product_price"), resultSet.getDouble("order_amount"),
                        "Order amount should match product price for this simple test data");
            }
        }
    }
}
