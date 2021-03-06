CREATE DATABASE db_links;

USE db_links;

-- USERS TABLE
CREATE TABLE users(
  id INT(11) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(50) NOT NULL,
  fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- LINKS TABLE
CREATE TABLE links(
  id INT NOT NULL,
  title VARCHAR(50) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  user_id iNT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
  ADD PRIMARY KEY (id);

DESCRIBE links;