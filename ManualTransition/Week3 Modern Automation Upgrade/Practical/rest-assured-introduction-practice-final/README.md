# REST Assured Introduction Practice Project

This is a beginner-friendly Java Maven project for learning **REST Assured Introduction**.

## What This Project Covers

- API automation concepts
- REST Assured starter tests
- GET API testing
- POST API testing
- Status code validation
- JSON field validation
- Header/content-type validation
- Query parameter testing
- Path parameter testing
- Negative API testing
- Local sample API server

## Prerequisites

Install:

- Java JDK 17 or higher
- Maven

Check installation:

```bash
java -version
mvn -version
```

## How To Run

```bash
mvn clean test
```

## Project Structure

```text
rest-assured-introduction-practice/
  src/main/java/com/techlambda/restassured/intro/api/
    SampleApiServer.java

  src/test/java/com/techlambda/restassured/intro/tests/
    RestAssuredIntroductionTest.java

  pom.xml
  README.md
```

## Important Learning Flow

```text
Request
↓
API Server
↓
Response
↓
Assertion
```

## REST Assured Pattern

```java
given()
  .contentType(ContentType.JSON)
.when()
  .get("/api/users")
.then()
  .statusCode(200);
```

## Why Local API Server Is Used

The project starts a local API server automatically before tests.
This avoids dependency on internet APIs and makes the tests stable for classroom practice.

## Test File

Main test file:

```text
src/test/java/com/techlambda/restassured/intro/tests/RestAssuredIntroductionTest.java
```


## Fix Note: JSON Serialization

This project includes `jackson-databind` because REST Assured needs a JSON serializer when `.body(payload)` receives a Java `Map` or object. Without Jackson/Gson/Yasson, POST tests fail with: `Cannot serialize object because no JSON serializer found in classpath`.
