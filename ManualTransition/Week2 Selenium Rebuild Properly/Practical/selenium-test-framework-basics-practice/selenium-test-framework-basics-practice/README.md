# Selenium Test Framework Basics Practice Project

This project demonstrates basic Selenium framework structure using Java, Maven, TestNG, and Selenium 4.

## Topic Covered

- BaseTest setup
- BrowserFactory
- ConfigReader
- Properties file configuration
- WaitUtility
- ScreenshotUtility
- Shared setup and teardown
- Screenshot on failure
- Clean test class responsibility

## Prerequisites

- Java JDK 17 or above
- Maven
- Chrome, Edge, or Firefox browser

Selenium 4 uses Selenium Manager, so you normally do not need to manually download browser drivers.

## Run Tests

```bash
mvn test
```

## Run With Specific Browser

```bash
mvn test -Dbrowser=chrome
mvn test -Dbrowser=edge
mvn test -Dbrowser=firefox
```

## Folder Structure

```text
src/main/java/com/techlambda/selenium/framework/base
  BrowserFactory.java
  BaseTest.java

src/main/java/com/techlambda/selenium/framework/config
  ConfigReader.java

src/main/java/com/techlambda/selenium/framework/utils
  LocalPagePath.java
  WaitUtility.java
  ScreenshotUtility.java

src/test/java/com/techlambda/selenium/framework/tests
  FrameworkBasicsTest.java

src/test/resources
  config.properties

sample-site
  framework-basics-practice.html
```

## Learning Notes

The test class should focus on test flow and assertions only. Browser setup, config reading, waits, and screenshots should be handled by reusable framework classes.
