DROP DATABASE IF EXISTS garf_db;

CREATE DATABASE garf_db;

USE garf_db;

CREATE TABLE characters(
  id INT AUTO_INCREMENT PRIMARY KEY,
  character_name VARCHAR(250) NOT NULL
);

CREATE TABLE lasagnas(
  id INT AUTO_INCREMENT PRIMARY KEY,
  pasta VARCHAR(250) NOT NULL,
  cheese_type VARCHAR(250) NOT NULL,
  sauce VARCHAR(250) NOT NULL,
  chef_id INT NOT NULL,
  FOREIGN KEY (chef_id) REFERENCES characters (id)
);



