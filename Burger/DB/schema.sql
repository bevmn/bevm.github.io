### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgers varchar(255) NOT NULL,
	devoured tinyint(1) NOT NULL ,

	PRIMARY KEY (id)
	
);

