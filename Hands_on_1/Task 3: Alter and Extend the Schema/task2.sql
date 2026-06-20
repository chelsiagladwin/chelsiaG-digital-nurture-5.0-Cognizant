ALTER TABLE students ADD phone_number VARCHAR(15);

ALTER TABLE courses ADD max_seats INT DEFAULT 60;

ALTER TABLE enrollments ADD CONSTRAINT CHK_grades CHECK (grade in('A', 'B', 'C', 'D', 'F', 'NULL'));

ALTER TABLE departments RENAME COLUMN hod_name TO head_of_dept;

ALTER TABLE students DROP phone_number;
