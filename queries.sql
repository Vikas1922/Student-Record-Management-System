CREATE DATABASE college;

USE college;

CREATE TABLE students(
id INT PRIMARY KEY UNIQUE NOT NULL,
name VARCHAR(30),
class INT,
subject VARCHAR(10) NOT NULL,
marks INT
);

INSERT INTO students (id,name,class,subject,marks) VALUES (01,'adam',10,'math',95),(02,'eve',12,'science',84);

create table register(
id VARCHAR(100) INT PRIMARY KEY UNIQUE NOT NULL,
name VARCHAR(30),
email VARCHAR(20),
password VARCHAR(8)
);