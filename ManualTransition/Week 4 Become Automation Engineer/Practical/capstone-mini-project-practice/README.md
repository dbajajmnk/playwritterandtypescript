# Capstone Mini Project Practice

This project demonstrates a beginner-friendly combined automation flow using:

- Selenium for UI automation
- REST Assured for API verification
- TestNG for execution and assertions
- Maven for build and dependency management

## Scenario

Practice website:

```text
https://automationexercise.com
```

Test values:

```text
Search keyword = top
Expected product = Blue Top
```

## Flow

1. Open UI.
2. Search product on UI.
3. Verify product in UI result.
4. Call API using the same search keyword.
5. Verify API response.
6. Compare UI result with API result.

## Run

```bash
mvn clean test
```

## Run with browser

```bash
mvn clean test -Dbrowser=chrome
mvn clean test -Dbrowser=edge
mvn clean test -Dbrowser=firefox
```

## Project Structure

```text
src/main/java/com/techlambda/capstone/
  api/ProductApiClient.java
  base/BrowserFactory.java
  config/ConfigReader.java
  pages/ProductsPage.java
  utils/WaitUtility.java

src/test/java/com/techlambda/capstone/
  base/BaseTest.java
  tests/AutomationExerciseCapstoneTest.java

src/test/resources/config.properties
pom.xml
testng.xml
```

## Important Note

This project uses a public practice website and its public API. Internet access is required while running the tests.

## Expected Console Output

```text
UI Matched Product: Blue Top
API Verification Passed
Combined Validation Passed
UI Product  : Blue Top
API contains: Blue Top
```
