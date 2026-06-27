EXPLAIN
SELECT 
  s.first_name, 
  s.last_name, 
  c.course_name
FROM enrollments e
JOIN students s ON s.student_id = e.student_id
JOIN courses c ON c.course_id = e.course_id
WHERE s.enrollment_year = 2022;

-- Observation:
-- Query examined the students, enrollments and courses tables.
-- MySQL performed a Full Table Scan (type = ALL) because no indexes were available on the filtering column enrollment_year.
