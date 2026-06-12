# SQL for Testers - Cheatsheet

## SELECT

```sql
SELECT * FROM users;
```

Use this to retrieve records.

## SELECT Specific Columns

```sql
SELECT username, email FROM users;
```

Prefer this over `SELECT *` when you only need selected fields.

## WHERE

```sql
SELECT * FROM users WHERE status = 'Active';
```

Use this to filter exact records.

## JOIN

```sql
SELECT o.id, c.name
FROM orders o
JOIN customers c ON o.customer_id = c.id;
```

Use JOIN to validate relationships between tables.

## Tester Validation Pattern

1. Perform UI/API action.
2. Capture generated ID or expected value.
3. Run SQL query.
4. Assert database value.
