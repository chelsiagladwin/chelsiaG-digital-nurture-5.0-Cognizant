CREATE TABLE department_transfer_log (log_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, old_department INT, new_department INT, transfer_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

DELIMITER $$ 
  CREATE PROCEDURE sp_enroll_student(IN p_student_id INT, IN p_course_id INT, IN p_enrollment_date DATE) 
  BEGIN IF EXISTS (SELECT * FROM enrollments WHERE student_id=p_student_id AND course_id=p_course_id) 
  THEN SIGNAL SQLSTATE '45000' 
  SET MESSAGE_TEXT='Duplicate enrollment not allowed'; 
ELSE INSERT INTO enrollments(student_id,course_id,enrollment_date) 
  VALUES(p_student_id,p_course_id,p_enrollment_date); END IF; 
END$$ 
  DELIMITER;


DELIMITER $$ 
  CREATE PROCEDURE sp_transfer_student(IN p_student_id INT, IN p_new_department INT)
  BEGIN DECLARE old_dept INT; 
START TRANSACTION;
SELECT department_id INTO old_dept 
  FROM students WHERE student_id=p_student_id; 
UPDATE students SET department_id=p_new_department WHERE student_id=p_student_id; 
INSERT INTO department_transfer_log(student_id,old_department,new_department) VALUES(p_student_id,old_dept,p_new_department); 
COMMIT; 
END$$ 
  DELIMITER ;

CALL sp_transfer_student(1,999);
SELECT * FROM students WHERE student_id=1;

START TRANSACTION;
INSERT INTO enrollments(student_id,course_id,enrollment_date) VALUES(2,1,CURDATE());
SAVEPOINT sp1;
INSERT INTO enrollments(student_id,course_id,enrollment_date) VALUES(2,999,CURDATE());
ROLLBACK TO sp1;
COMMIT;
