# Selenium Synchronization Practice

This project demonstrates Selenium synchronization concepts using Java, Maven, JUnit 5, and Selenium 4.

## Topic Covered

- Implicit Wait
- Explicit Wait
- Fluent Wait
- Visibility Wait
- Clickable Wait
- Dynamic Element Loading
- Polling Strategy
- Replacing `Thread.sleep()` with condition-based waits

## Requirements

- Java JDK 17 or later
- Maven
- Chrome, Edge, or Firefox browser

Selenium 4 includes Selenium Manager, so browser drivers are usually managed automatically.

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

## Project Structure

```text
selenium-synchronization-practice/
  sample-site/
    synchronization-practice.html

  src/main/java/com/techlambda/selenium/synchronization/
    BrowserFactory.java
    LocalPagePath.java

  src/test/java/com/techlambda/selenium/synchronization/
    SynchronizationTest.java

  pom.xml
  README.md
```

## Learning Note

Avoid this in real automation:

```java
Thread.sleep(5000);
```

Prefer this:

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
```

Condition-based waits make tests more stable and faster.
