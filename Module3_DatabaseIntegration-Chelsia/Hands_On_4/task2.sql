CREATE INDEX idx_students_enrollment_year 
ON students(enrollment_year);

CREATE UNIQUE INDEX idx_enrollments_student_course 
ON enrollments(student_id, course_id);

CREATE INDEX idx_courses_course_code 
ON courses(course_code);

EXPLAIN
SELECT 
  s.first_name, 
  s.last_name, 
  c.course_name
FROM enrollments e
JOIN students s ON s.student_id = e.student_id
JOIN courses c ON c.course_id = e.course_id
WHERE s.enrollment_year = 2022;

-- Comparison:
-- Before indexes: Sequential Scan / Full Table Scan.
-- After creating indexes:
-- The number of rows examined is reduced.
-- Query performance improves because matching rows are located using the index.

CREATE INDEX idx_null_grades
ON enrollments(student_id)
WHERE grade IS NULL;

--MySQL does not support partial indexes with a WHERE clause.
