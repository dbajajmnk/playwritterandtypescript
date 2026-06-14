
# Selenium User Actions Practice

This project covers **Selenium User Actions** using Java, Maven, JUnit 5, and Selenium 4.

## What You Will Practice

- Hover using `moveToElement()`
- Right click using `contextClick()`
- Double click using `doubleClick()`
- Drag and drop using `dragAndDrop()`
- Keyboard shortcuts using `keyDown()`, `sendKeys()`, and `keyUp()`
- Enter key using `Keys.ENTER`
- Click and hold using `clickAndHold()`
- Release using `release()`
- Action chaining using multiple actions before `perform()`

## Prerequisites

- Java JDK 17 or higher
- Maven
- Chrome, Edge, or Firefox browser

Selenium 4 includes Selenium Manager, so in normal cases you do not need to manually download browser drivers.

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
selenium-user-actions-practice/
  sample-site/
    user-actions-practice.html

  src/main/java/com/techlambda/selenium/actions/
    BrowserFactory.java
    LocalPagePath.java

  src/test/java/com/techlambda/selenium/actions/
    UserActionsTest.java

  pom.xml
  README.md
```

## Key Learning Point

The `Actions` class is used for advanced interactions beyond simple click and type.

Important rule:

```java
new Actions(driver)
    .moveToElement(element)
    .perform();
```

Without `perform()`, the action chain will not execute.


## Drag-and-drop stability note

Selenium's `dragAndDrop()` may not trigger native HTML5 `dataTransfer` events consistently in every browser-driver combination.
For this learner project, the drag-and-drop test uses a stable Actions chain:

```java
 actions.clickAndHold(source)
        .moveToElement(target)
        .release(target)
        .perform();
```

The sample page supports mouse-based drag simulation so the test remains reliable for local practice.
