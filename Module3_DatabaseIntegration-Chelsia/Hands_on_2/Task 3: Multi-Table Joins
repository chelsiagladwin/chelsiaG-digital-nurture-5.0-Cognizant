-- 25. List each student's full name (first_name + ' ' + last_name) alongside the name of their department.
SELECT CONCAT(s.first_name,' ',s.last_name) AS student_name, d.dept_name FROM students s JOIN departments d ON s.department_id = d.department_id;

--26. Show each enrollment along with the student's name and the course name.
SELECT e.enrollment_id, CONCAT(s.first_name,' ',s.last_name) AS student_name, c.course_name 
FROM enrollments e 
JOIN students s 
ON e.student_id = s.student_id 
JOIN courses c 
ON e.course_id = c.course_id;

-- 27. Find all students who are NOT enrolled in any course using a LEFT JOIN and WHERE ... IS NULL pattern.
SELECT s.student_id, CONCAT(s.first_name,' ',s.last_name) AS student_name 
FROM students s 
LEFT JOIN enrollments e 
ON s.student_id = e.student_id 
WHERE e.enrollment_id IS NULL;

--28. Find all students who are NOT enrolled in any course using a LEFT JOIN and WHERE ... IS NULL pattern.
SELECT c.course_name, COUNT(e.student_id) AS enrollment_count 
FROM courses c 
LEFT JOIN enrollments e 
ON c.course_id = e.course_id 
GROUP BY c.course_name;

--29. List each department along with its professors and their salaries. Include departments that have no professors yet.
SELECT d.dept_name, p.prof_name, p.salary FROM departments d 
LEFT JOIN professors p 
ON d.department_id = p.department_id;
