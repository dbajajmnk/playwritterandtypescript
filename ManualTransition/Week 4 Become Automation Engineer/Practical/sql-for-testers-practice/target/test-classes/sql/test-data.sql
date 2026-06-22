-- Test data used by automated SQL validation tests.

INSERT INTO users (id, username, email, status, active) VALUES
(1, 'admin', 'admin@test.com', 'Active', TRUE),
(2, 'deepak', 'deepak@test.com', 'Active', TRUE),
(3, 'blocked_user', 'blocked@test.com', 'Inactive', FALSE);

INSERT INTO customers (id, name, city) VALUES
(101, 'Deepak Bajaj', 'Delhi'),
(102, 'Kapil Gupta', 'Mumbai'),
(103, 'Kamla Kant Pandey', 'Mumbai');

INSERT INTO products (id, name, category, price) VALUES
(201, 'Laptop', 'Electronics', 75000.00),
(202, 'Mouse', 'Electronics', 800.00),
(203, 'Notebook', 'Stationery', 120.00);

INSERT INTO orders (id, customer_id, product_id, amount, status) VALUES
(301, 101, 201, 75000.00, 'PAID'),
(302, 102, 202, 800.00, 'PAID'),
(303, 103, 203, 120.00, 'PENDING');
