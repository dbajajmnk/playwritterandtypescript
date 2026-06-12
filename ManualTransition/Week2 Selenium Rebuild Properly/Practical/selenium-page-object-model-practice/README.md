# Selenium Page Object Model Practice Project

This project is created for the topic:

**2.5 Page Object Model**

## What You Will Learn

This project demonstrates:

- Page Object Model structure
- Separate page classes
- Locators inside page classes
- Reusable page methods
- Clean test classes
- Base test setup
- Browser factory
- Local sample HTML testing website
- Login and mini e-commerce flow

## Folder Structure

```text
selenium-page-object-model-practice/
  sample-site/
    pom-practice.html

  src/main/java/com/techlambda/selenium/pom/base/
    BrowserFactory.java
    BaseTest.java

  src/main/java/com/techlambda/selenium/pom/pages/
    LoginPage.java
    DashboardPage.java
    ProductPage.java
    CartPage.java

  src/main/java/com/techlambda/selenium/pom/utils/
    LocalPagePath.java

  src/test/java/com/techlambda/selenium/pom/tests/
    LoginPomTest.java
    EcommercePomTest.java

  pom.xml
  testng.xml
```

## Prerequisites

Install:

- Java JDK 17 or above
- Maven
- Chrome, Edge, or Firefox browser

Check installation:

```bash
java -version
mvn -version
```

## Run Tests

Default browser is Chrome:

```bash
mvn test
```

Run with Chrome:

```bash
mvn test -Dbrowser=chrome
```

Run with Edge:

```bash
mvn test -Dbrowser=edge
```

Run with Firefox:

```bash
mvn test -Dbrowser=firefox
```

## Important Learning Point

Without POM, test files usually contain:

- Locators
- Clicks
- Inputs
- Assertions
- Test data

That becomes hard to maintain.

With POM:

- Page classes contain locators and page actions
- Test classes contain test flow and assertions
- Common setup goes into BaseTest
- Browser creation goes into BrowserFactory

## Demo Login Credentials

```text
Email: user@test.com
Password: 123456
```

## Best Practice

Keep assertions mostly inside test classes.

Page classes should mainly contain:

- Locators
- Page actions
- Reusable page methods
