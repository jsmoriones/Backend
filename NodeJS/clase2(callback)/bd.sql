CREATE DATABASE empleados;

USE empleados;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(80) NOT NULL,
    email VARCHAR(60) NOT NULL,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO usuarios(nombre, email) VALUES ("MERCEDES MARIA", "mercedes@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("BYRON DAVID", "byron@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("GONZALO LUIS", "gonzalo@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("JAIME EDUARDO", "jaime@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("CARLOS DANIEL", "carlos@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("MARLENE ESTEFANIA", "marlene@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("JOHANNA SOFIA", "johana@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("MARTHA PATRICIA", "martha@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("DIANA LUCÍA", "diana@gmail.com");
INSERT INTO usuarios(nombre, email) VALUES ("JAIME VICENTE", "jaime@gmail.com");