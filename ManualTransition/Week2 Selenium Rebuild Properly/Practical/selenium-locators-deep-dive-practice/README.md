# Selenium Locators Deep Dive Practice Project

This project is created for the lesson **2.2 Locators Deep Dive**.

It demonstrates how Selenium locators identify web elements on a page and why good locators make automation stable, maintainable, and reliable.

## Covered Topics

- ID Locator
- CSS Selector
- CSS Class Selector
- CSS Attribute Selector
- XPath Attribute Locator
- XPath Text Locator
- Dynamic XPath using `contains()`
- Dynamic XPath using `starts-with()`
- Short and stable locator best practices
- Common locator mistakes

## Project Structure

```text
selenium-locators-deep-dive-practice/
  sample-site/
    locators-practice.html

  src/main/java/com/techlambda/selenium/locators/
    BrowserFactory.java
    LocalPagePath.java

  src/test/java/com/techlambda/selenium/locators/
    LocatorsDeepDiveTest.java

  pom.xml
  README.md
```

## Prerequisites

Install these:

1. Java JDK 17 or above
2. Maven
3. Chrome / Edge / Firefox browser

Selenium 4 uses Selenium Manager, so manual browser driver download is normally not required.

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

## Learning Flow

### 1. ID Locator

```java
By.id("username")
```

Use ID when it is unique and stable.

### 2. CSS Class Locator

```java
By.cssSelector(".loginBtn")
```

Use class selector when class name is stable.

### 3. CSS Attribute Locator

```java
By.cssSelector("input[name='email']")
```

Use attribute selector when ID is not available.

### 4. XPath Attribute Locator

```java
By.xpath("//input[@id='username']")
```

XPath is useful for flexible element search.

### 5. XPath Text Locator

```java
By.xpath("//button[text()='Login']")
```

Use when visible text is stable.

### 6. Dynamic XPath

```java
By.xpath("//article[contains(@id,'dynamic-product')]")
By.xpath("//*[starts-with(@id,'product-101')]")
```

Use dynamic XPath when a part of the attribute changes but a stable pattern exists.

## Best Practice Order

```text
ID
↓
CSS Selector
↓
XPath
```

## Common Mistakes

- Using absolute XPath like `/html/body/div[1]/div[2]`
- Using generated dynamic IDs blindly
- Overusing XPath when ID or CSS is available
- Writing very long and unreadable locators

## Mini Assignment

Create locator examples using:

- ID
- CSS selector
- XPath
- Dynamic XPath

Then perform actions and validate results.
