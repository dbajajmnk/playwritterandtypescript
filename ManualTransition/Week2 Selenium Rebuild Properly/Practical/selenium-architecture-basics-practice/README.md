# Selenium Architecture Basics Practice Project

This project demonstrates Selenium architecture basics with Java, Maven, Selenium WebDriver, and JUnit 5.

## Topic Covered

- WebDriver model
- Browser drivers
- Browser session lifecycle
- `driver.get()` command flow
- `findElement()` command flow
- `driver.quit()` cleanup
- Difference between test code, WebDriver API, browser driver, and browser

## Architecture Flow

```text
Test Code
  ↓
WebDriver API
  ↓
Browser Driver
  ↓
Real Browser
```

## Project Structure

```text
selenium-architecture-basics-practice/
  src/main/java/com/techlambda/selenium/architecture/
    BrowserFactory.java
    SessionLifecycleDemo.java

  src/test/java/com/techlambda/selenium/architecture/
    SeleniumArchitectureTest.java

  pom.xml
  README.md
```

## Prerequisites

Install:

- Java JDK 17 or above
- Maven
- Chrome browser

Selenium 4 includes Selenium Manager, so normally you do not need to manually download ChromeDriver.

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

## Run Headless

```bash
mvn test -Dheadless=true
```

## Run Session Lifecycle Demo

```bash
mvn exec:java -Dexec.mainClass="com.techlambda.selenium.architecture.SessionLifecycleDemo"
```

If the above command is not available, run the `SessionLifecycleDemo` class directly from IntelliJ IDEA or Eclipse.

## Learning Notes

### WebDriver

WebDriver is the automation interface used by test code.

Example:

```java
WebDriver driver = new ChromeDriver();
```

### Browser Driver

Browser driver translates Selenium commands into browser-specific commands.

Examples:

- ChromeDriver for Chrome
- GeckoDriver for Firefox
- EdgeDriver for Edge

### Session Lifecycle

```text
Create Session
  ↓
Run Commands
  ↓
Quit Session
```

Always call:

```java
driver.quit();
```

to avoid open browser sessions.
