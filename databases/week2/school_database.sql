
/* Part 2: School database */
/* 1. Create a new database containing the following tables: */
/*   - Class: with the columns: id, name, begins (date), ends (date) */
/*   - Student: with the columns: id, name, email, phone, class_id (foreign key) */
/* 2. If you are done with the above tasks, you can continue with these advanced tasks: */
/*   - Create an index on the name column of the student table. */
/*   - Add a new column to the class table named status which can only have */
/* the following values: not-started, ongoing, finished (hint: enumerations). */


/* Setup school database */
CREATE DATABASE school_database;
Use school_database;

/* Create class table */
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL
);

/* Create student table */
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) UNSIGNED NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
);

/* Add class data */
INSERT INTO class (id, name, begins, ends)
VALUES (1, "Class01", "2020-08-01", "2020-10-01");
INSERT INTO class (id, name, begins, ends)
VALUES (2, "Class02", "2020-11-02", "2021-01-02");
INSERT INTO class (id, name, begins, ends)
VALUES (3, "Class03", "2021-02-03", "2020-04-03");
INSERT INTO class (id, name, begins, ends)
VALUES (4, "Class04", "2021-06-04", "2021-08-04");

/* Add student data */
INSERT INTO student (id, name, email, phone, class_id)
VALUES (1, "Student01", "student01@email.com", "111-111-1111", "1");
INSERT INTO student (id, name, email, phone, class_id)
VALUES (2, "Student02", "student02@email.com", "222-222-2222", "1");
INSERT INTO student (id, name, email, phone, class_id)
VALUES (3, "Student03", "student03@email.com", "333-333-3333", "2");
INSERT INTO student (id, name, email, phone, class_id)
VALUES (4, "Student04", "student04@email.com", "444-444-4444", "2");
INSERT INTO student (id, name, email, phone, class_id)
VALUES (5, "Student05", "student05@email.com", "555-555-5555", "3");
INSERT INTO student (id, name, email, phone, class_id)
VALUES (6, "Student06", "student06@email.com", "666-666-6666", "4");

/* Create an index on the name column of the student table */
CREATE UNIQUE INDEX index_name ON student(name);
ALTER TABLE class
ADD status ENUM("not-started", "ongoing", "finished") NOT NULL;




