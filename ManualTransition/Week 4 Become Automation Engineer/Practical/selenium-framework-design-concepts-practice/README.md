# Selenium Framework Design Concepts Practice

This project demonstrates framework design concepts using Selenium Java.

## Topic Coverage

- Page Object Model revisited
- Data-driven testing
- Reusable framework thinking
- Base layer
- Page layer
- Data layer
- Utility layer
- Config layer
- Screenshot on failure

## Why This Structure Matters

A script puts everything in one place.
A framework separates responsibilities:

```text
Tests -> Page Objects -> Data Layer -> Utilities -> Browser
```

## Run Tests

```bash
mvn clean test
```

Run with a specific browser:

```bash
mvn clean test -Dbrowser=chrome
mvn clean test -Dbrowser=edge
mvn clean test -Dbrowser=firefox
```

## Important Structure Note

`BaseTest.java` is inside `src/test/java` because it uses TestNG annotations:

```java
@BeforeMethod
@AfterMethod
```

This avoids the common Maven compilation issue where TestNG classes are not available during main source compilation.

## Demo Credentials

```text
admin@test.com / 123456
user@test.com / 123456
```