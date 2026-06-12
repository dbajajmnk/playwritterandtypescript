# Automation Interview Scenario Answer Cheatsheet

## Flaky Element / Synchronization

Good answer:

- First identify whether the element is loading late, disabled, hidden, or covered.
- Avoid Thread.sleep because it is static and unreliable.
- Use explicit wait for the correct condition such as visibility or clickability.

Example:

```java
wait.until(ExpectedConditions.elementToBeClickable(locator));
```

## Stale Element

Good answer:

- Stale means the DOM changed after the element was located.
- Do not reuse the old WebElement.
- Re-locate the element and optionally use a small retry wrapper.

## Framework Design

Good answer:

- Base Layer: driver setup and teardown.
- Page Layer: locators and page actions.
- Utility Layer: waits, screenshots, config helpers.
- Test Layer: test flow and assertions.
- Data Layer: test data and environment data.

## Parallel Execution

Good answer:

- Main risk is shared state.
- Each test/thread should get its own WebDriver.
- Use ThreadLocal for driver isolation.
- Avoid static shared mutable data.
