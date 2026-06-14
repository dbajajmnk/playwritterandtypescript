# TestNG Cheatsheet

## Basic Test

```java
@Test
public void sampleTest() {
    Assert.assertTrue(true);
}
```

## Setup and Teardown

```java
@BeforeMethod
public void setup() {}

@AfterMethod
public void tearDown() {}
```

## Assertions

```java
Assert.assertEquals(actual, expected);
Assert.assertTrue(condition);
Assert.assertFalse(condition);
Assert.assertNotNull(value);
```

## Groups

```java
@Test(groups = {"smoke"})
public void smokeTest() {}
```

## Parallel XML

```xml
<suite name="Parallel Suite" parallel="tests" thread-count="2">
```
