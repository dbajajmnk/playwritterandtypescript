# SQL for Testers Practice Project

This project is a hands-on companion for **SQL for Testers**.

It uses:

- Java 17
- Maven
- JUnit 5
- H2 in-memory database

No external database installation is required.

## What You Will Practice

- SELECT queries
- WHERE filters
- JOIN validation
- Backend data validation use cases
- Database checks using automated tests

## Run Tests

```bash
mvn clean test
```

## Project Structure

```text
src/test/resources/sql/schema.sql      Database tables
src/test/resources/sql/test-data.sql   Sample test data
src/test/java/.../SelectWhereValidationTest.java
src/test/java/.../JoinValidationTest.java
src/test/java/.../BackendValidationUseCaseTest.java
docs/sql-cheatsheet.md
```

## Learning Flow

1. Read `schema.sql` to understand tables.
2. Read `test-data.sql` to understand sample data.
3. Run `mvn clean test`.
4. Open test classes and observe how SQL queries validate data.

## Important Tester Rule

Do not validate only through UI. Use SQL when you need backend confirmation.
