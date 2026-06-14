package com.techlambda.sqltesters.tests;

import com.techlambda.sqltesters.db.SqlScriptReader;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.UUID;

/**
 * Base class for SQL tester practice.
 * It creates a fresh in-memory database before every test.
 * This keeps tests isolated and avoids test data conflicts.
 */
public class SqlTestBase {

    protected Connection connection;

    @BeforeEach
    void setUpDatabase() throws SQLException {
        String databaseName = "testdb_" + UUID.randomUUID().toString().replace("-", "");
        connection = DriverManager.getConnection("jdbc:h2:mem:" + databaseName + ";DB_CLOSE_DELAY=0", "sa", "");

        executeSqlScript("sql/schema.sql");
        executeSqlScript("sql/test-data.sql");
    }

    @AfterEach
    void closeDatabase() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
        }
    }

    protected void executeSqlScript(String resourcePath) throws SQLException {
        String script = SqlScriptReader.readFromClasspath(resourcePath);

        // Remove SQL line comments before splitting statements.
        // The previous version skipped the first DROP statement because the script started with comments.
        // That left old tables in memory and caused foreign-key dependency errors on the next test.
        String scriptWithoutComments = script.replaceAll("(?m)^\\s*--.*$", "");

        // Split statements by semicolon for simple practice scripts.
        // For large enterprise scripts, use a dedicated SQL migration tool.
        String[] statements = scriptWithoutComments.split(";");

        try (Statement statement = connection.createStatement()) {
            for (String sql : statements) {
                String trimmedSql = sql.trim();
                if (!trimmedSql.isEmpty()) {
                    statement.execute(trimmedSql);
                }
            }
        }
    }
}
