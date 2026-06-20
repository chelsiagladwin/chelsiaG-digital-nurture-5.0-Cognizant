-- 30. Calculate the total number of enrollments per course. Display course_name and enrollment_count.
SELECT c.course_name, COUNT(e.enrollment_id) AS enrollment_count 
FROM courses c 
LEFT JOIN enrollments e 
ON c.course_id = e.course_id 
GROUP BY c.course_name;

-- 31. Find the average salary of professors per department. Round to 2 decimal places.
SELECT d.dept_name, ROUND(AVG(p.salary),2) AS avg_salary 
FROM departments d 
LEFT JOIN professors p 
ON d.department_id = p.department_id 
GROUP BY d.dept_name;

-- 32. Find all departments where the total budget exceeds 600,000.
SELECT dept_name, budget 
FROM departments 
WHERE budget > 600000;

-- 33. Show the grade distribution for course CS101: count of each grade (A, B, C, D, F).
SELECT grade, COUNT(*) AS grade_count 
FROM enrollments 
WHERE course_id = (SELECT course_id FROM courses WHERE course_code='CS101') 
GROUP BY grade;

-- 34. Using HAVING, list departments where more than 2 students are enrolled across all courses in that department.
SELECT d.dept_name FROM departments d 
JOIN students s 
ON d.department_id=s.department_id 
JOIN enrollments e 
ON s.student_id=e.student_id 
GROUP BY d.dept_name HAVING COUNT(DISTINCT s.student_id)>2;
