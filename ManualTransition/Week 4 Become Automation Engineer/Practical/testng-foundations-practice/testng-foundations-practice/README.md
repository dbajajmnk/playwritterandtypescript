# TestNG Foundations Practice Project

This project is a beginner-friendly Java Maven project for practicing **TestNG Foundations**.

## Topic Coverage

- TestNG test structure
- `@Test`
- `@BeforeMethod`
- `@AfterMethod`
- Assertions
- Test groups
- TestNG XML suite
- Parallel execution basics

## Prerequisites

- Java JDK 17 or above
- Maven
- Any Java IDE such as IntelliJ IDEA, Eclipse, or VS Code

Check versions:

```bash
java -version
mvn -version
```

## Run All Tests

```bash
mvn clean test
```

## Run Parallel Suite

```bash
mvn clean test -Dsurefire.suiteXmlFiles=testng-parallel.xml
```

## Run Only Smoke Group

```bash
mvn clean test -Dgroups=smoke
```

## Run Only Regression Group

```bash
mvn clean test -Dgroups=regression
```

## Important Learning Notes

### What is `@Test`?

`@Test` tells TestNG that a method is a test case.

### What is `@BeforeMethod`?

It runs before every test method.

### What is `@AfterMethod`?

It runs after every test method.

### Why Assertions?

Assertions verify actual result against expected result.

### Why Parallel Execution?

Parallel execution helps run tests faster, but tests must be independent.
