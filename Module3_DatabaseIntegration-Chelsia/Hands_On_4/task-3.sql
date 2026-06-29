--N+1 Solution

SELECT *
FROM enrollments;

-- Step 2: For every enrollment, another query is executed
-- to retrieve the student's name.

SELECT first_name, last_name
FROM students
WHERE student_id = 1;

SELECT first_name, last_name
FROM students
WHERE student_id = 2;

SELECT first_name, last_name
FROM students
WHERE student_id = 3;

-- Imagine one SELECT statement for every enrollment.
-- Total Queries = 1 + N

-- Optimised Solution
SELECT
    e.enrollment_id,
    s.first_name,
    s.last_name,
    c.course_name
FROM enrollments e
JOIN students s
    ON e.student_id = s.student_id
JOIN courses c
    ON e.course_id = c.course_id;



-- Comparison

-- N+1 approach:
-- 1 query to fetch all enrollments
-- + 1 query for each enrollment
-- = N + 1 total queries

-- JOIN approach:
-- Retrieves all required information
-- using a single query.

-- Example:
-- 12 enrollments -> 13 queries
-- 100 enrollments -> 101 queries
-- 10,000 enrollments -> 10,001 queries

-- The JOIN approach is much faster because it eliminates unnecessary database round-trips.
