CREATE DATABASE tacos_DB;

USE tacos_DB;

CREATE TABLE tacos (
id INTEGER AUTO_INCREMENT NOT NULL,
taco_name VARCHAR (255) NOT NULL,
devoured BOOLEAN DEFAULT false,

PRIMARY KEY (id)
);
