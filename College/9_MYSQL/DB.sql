CREATE DATABASE IF NOT EXISTS node_db;

USE test;

CREATE TABLE IF NOT EXISTS Contacts (
  id int(12) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  phone VARCHAR(45) NOT NULL,
  PRIMARY KEY(id)
)charset=utf8;

INSERT INTO Contacts (name, email, phone) VALUES ('lee', 'lee@abcd.com', 'a123456');
INSERT INTO Contacts (name, email, phone) VALUES ('kim', 'kim@abcd.com', 'b123456');
INSERT INTO Contacts (name, email, phone) VALUES ('park', 'park@abcd.com', 'c123456');
INSERT INTO Contacts (name, email, phone) VALUES ('nam', 'nam@abcd.com', 'd123456');
INSERT INTO Contacts (name, email, phone) VALUES ('son', 'son@abcd.com', 'e123456');


SELECT id, name, email, phone FROM Contacts;

