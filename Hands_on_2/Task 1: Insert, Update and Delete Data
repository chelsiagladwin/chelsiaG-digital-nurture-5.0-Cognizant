--15. Insert the sample data from the Common Schema section into all five tables (use the provided INSERT statements).

INSERT INTO departments (dept_name, hod_name, budget)
VALUES
('Computer Science', 'Dr. Smitha', 500000.00),
('Electronics', 'Dr. Johnson', 400000.00),
('Mechanical', 'Dr. Brown', 350000.00),
('Civil', 'Dr. Wilson', 300000.00);

INSERT INTO students
(first_name, last_name, email, date_of_birth, department_id, enrollment_year)
VALUES
('Chelsia', 'Gladwin', 'chelsia.gladwin@example.com', '2003-05-14', 1, 2021),
('Arjun', 'Sharma', 'arjun.sharma@example.com', '2003-05-14', 1, 2021),
('Priya', 'Patel', 'priya.patel@example.com', '2002-09-20', 2, 2020),
('Rahul', 'Verma', 'rahul.verma@example.com', '2004-01-10', 1, 2022),
('Sneha', 'Reddy', 'sneha.reddy@example.com', '2003-11-25', 3, 2021),
('Vikram', 'Nair', 'vikram.nair@example.com', '2002-07-18', 4, 2020);

INSERT INTO courses
(course_name, course_code, credits, department_id)
VALUES
('Database Management Systems', 'CS301', 4, 1),
('Data Structures', 'CS201', 3, 1),
('Digital Electronics', 'EC202', 4, 2),
('Thermodynamics', 'ME101', 3, 3),
('Structural Analysis', 'CE301', 4, 4);

INSERT INTO enrollments
(student_id, course_id, enrollment_date, grade)
VALUES
(1, 1, '2024-01-15', 'A'),
(1, 2, '2024-01-15', 'B'),
(2, 3, '2024-01-16', 'A'),
(3, 1, '2024-01-18', 'B'),
(4, 4, '2024-01-20', 'C'),
(5, 5, '2024-01-22', NULL);

INSERT INTO professors
(prof_name, email, department_id, salary)
VALUES
('Dr. Anderson', 'anderson@college.edu', 1, 85000.00),
('Dr. Thomas', 'thomas@college.edu', 2, 80000.00),
('Dr. Harris', 'harris@college.edu', 3, 78000.00),
('Dr. Clark', 'clark@college.edu', 4, 76000.00);

-- Verification 
SELECT COUNT(*) AS student_count FROM students;
SELECT COUNT(*) AS department_count FROM departments;
SELECT COUNT(*) AS course_count FROM courses;
SELECT COUNT(*) AS enrollment_count FROM enrollments;
SELECT COUNT(*) AS professor_count FROM professors;

-- 16. Insert two additional students of your own choosing into the students table.
INSERT INTO students (first_name, last_name, email, date_of_birth, department_id, enrollment_year)
VALUES
('Ananya', 'Rao', 'ananya.rao@example.com', '2004-03-12', 1, 2022),
('Karthik', 'Iyer', 'karthik.iyer@example.com', '2003-08-25', 2, 2021);
--Verfication
SELECT COUNT(*) AS student_count FROM students;

-- 17. Update the grade of student_id = 5 for course_id = 1 from 'C' to 'B'.
UPDATE enrollments SET grade = 'B' WHERE student_id = 5 AND course_id = 1;
--Verfication
SELECT * FROM enrollments WHERE student_id = 5 AND course_id = 1;

-- 18. Delete enrollments where grade IS NULL (students who never received a grade).
SET SQL_SAFE_UPDATES = 0;
DELETE FROM enrollments
WHERE grade IS NULL;
SET SQL_SAFE_UPDATES = 1;
--Verfication
SELECT * FROM enrollments WHERE grade IS NULL;

--19. Verify row counts using SELECT COUNT(*) after each operation.
SELECT COUNT(*) AS student_count FROM students;

SELECT COUNT(*) AS enrollment_count FROM enrollments;
