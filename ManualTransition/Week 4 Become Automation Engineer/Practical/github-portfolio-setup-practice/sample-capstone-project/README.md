# Selenium REST Assured Capstone Project

## Project Overview

This is a beginner-friendly automation capstone project that demonstrates:

- UI automation using Selenium
- API verification using REST Assured
- Test execution using TestNG
- Combined UI + API validation flow

## Tools Used

- Java
- Selenium WebDriver
- REST Assured
- TestNG
- Maven
- GitHub

## Test Scenario

Search product flow:

1. Open application UI.
2. Search product.
3. Verify product in UI result.
4. Call API using the same product search keyword.
5. Verify API response.
6. Compare UI result with API response.

## Test Data

```text
Search Keyword: top
Expected Product: Blue Top
```

## How To Run

```bash
mvn clean test
```

## Project Structure

```text
src/
  main/
    java/
      api/
      pages/
      utils/
      config/
  test/
    java/
      base/
      tests/
pom.xml
testng.xml
README.md
```

## Skills Demonstrated

- Selenium automation
- API testing
- TestNG assertions
- Framework structure
- GitHub project presentation
