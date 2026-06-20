-- 35. Find all students who are enrolled in more courses than the average number of enrollments per student.

SELECT s.student_id, CONCAT(s.first_name,' ',s.last_name) AS student_name 
FROM students s 
JOIN enrollments e ON s.student_id=e.student_id 
GROUP BY s.student_id, student_name 
HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM enrollments GROUP BY student_id) t);

--36. List courses in which all enrolled students have received a grade of 'A'.
SELECT c.course_name FROM courses c WHERE NOT EXISTS (SELECT * FROM enrollments e WHERE e.course_id=c.course_id AND e.grade<>'A');

--37. Find the professor with the highest salary in each department using a correlated subquery.
SELECT p1.prof_name, p1.department_id, p1.salary 
FROM professors p1 
WHERE p1.salary=(SELECT MAX(p2.salary) FROM professors p2 
WHERE p2.department_id=p1.department_id);

-- 38. Using a subquery in the FROM clause (derived table), calculate the per-department average salary and then filter to departments where that average exceeds 85,000.
SELECT * FROM (SELECT department_id, AVG(salary) AS avg_salary FROM professors GROUP BY department_id) d WHERE avg_salary>85000;
