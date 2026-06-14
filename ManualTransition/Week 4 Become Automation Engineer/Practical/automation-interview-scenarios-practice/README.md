# Automation Interview Scenarios Practice Project

This project contains practical Selenium + TestNG examples for common automation interview scenarios.

## Covered Topics

- Synchronization problem and explicit wait solution
- Stale element handling by re-locating element
- Framework design explanation using layered code
- Parallel execution basics using ThreadLocal driver

## Requirements

- Java JDK 17 or higher
- Maven
- Chrome, Edge, or Firefox browser

Selenium 4 uses Selenium Manager, so normally you do not need to download browser drivers manually.

## Run All Main Tests

```bash
mvn clean test
```

## Run With Specific Browser

```bash
mvn clean test -Dbrowser=chrome
mvn clean test -Dbrowser=edge
mvn clean test -Dbrowser=firefox
```

## Run Parallel Scenario Suite

```bash
mvn clean test -Dsurefire.suiteXmlFiles=testng-parallel.xml
```

## Interview Learning Point

In interviews, do not give only tool names. Explain:

1. Problem
2. Root cause
3. Solution strategy
4. Example code or framework design decision
