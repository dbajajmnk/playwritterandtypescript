# Mini Selenium Framework Lab Practice

This project demonstrates a beginner-friendly Selenium framework structure.

## What This Project Covers

- Base layer
- Page Object Model layer
- Test layer
- Utility layer
- Config layer
- BrowserFactory
- BaseTest setup and teardown
- ConfigReader
- WaitUtility
- ScreenshotUtility
- Local sample HTML test page

## Important Structure Note

`BaseTest.java` is placed inside `src/test/java` because it uses TestNG annotations such as:

```java
@BeforeMethod
@AfterMethod
ITestResult
```

This avoids the Maven compilation issue where TestNG test-scope dependencies are not available during main source compilation.

## Requirements

- Java JDK 17+
- Maven
- Chrome, Edge, or Firefox

Selenium 4 includes Selenium Manager, so browser drivers are managed automatically in most environments.

## Run Tests

```bash
mvn clean test
```

## Run With Specific Browser

```bash
mvn clean test -Dbrowser=chrome
mvn clean test -Dbrowser=edge
mvn clean test -Dbrowser=firefox
```

## Demo Login Credentials

```text
Email: user@test.com
Password: 123456
```

## Project Structure

```text
mini-selenium-framework-lab-practice/
  sample-site/
    mini-framework-login.html

  src/main/java/com/techlambda/selenium/miniframework/base/
    BrowserFactory.java

  src/main/java/com/techlambda/selenium/miniframework/pages/
    LoginPage.java
    DashboardPage.java

  src/main/java/com/techlambda/selenium/miniframework/utils/
    ConfigReader.java
    LocalPagePath.java
    WaitUtility.java
    ScreenshotUtility.java

  src/test/java/com/techlambda/selenium/miniframework/base/
    BaseTest.java

  src/test/java/com/techlambda/selenium/miniframework/tests/
    LoginFrameworkTest.java

  src/test/resources/
    config.properties

  pom.xml
  testng.xml
```
