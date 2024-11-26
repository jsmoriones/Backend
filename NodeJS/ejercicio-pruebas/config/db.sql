CREATE DATABASE pruebas;

USE pruebas;

CREATE TABLE proyecto(
	id INT AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    CREACION DATETIME,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE proyecto DROP COLUMN CREACION;
ALTER TABLE proyecto ADD COLUMN creacion DATETIME DEFAULT now();

SELECT * FROM proyecto;

CREATE TABLE tester(
	id INT AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE pruebas(
	id INT AUTO_INCREMENT,
    idProyecto INT NOT NULL,
    idTester INT NOT NULL,
    fechaI DATETIME DEFAULT now(),
    fechaF DATE,
    FOREIGN KEY (idProyecto) REFERENCES proyecto(id),
    FOREIGN KEY (idTester) REFERENCES tester(id),    
	PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;






SELECT proyecto.nombre, COUNT(pruebas.idTester) AS "xProyecto" FROM pruebas, proyecto
WHERE pruebas.idProyecto = proyecto.id GROUP BY nombre ORDER BY COUNT(pruebas.idTester) DESC;

SELECT tester.nombre, tester.apellido, COUNT(pruebas.idTester) AS 'xPersona' FROM pruebas, tester WHERE pruebas.idTester = tester.id GROUP BY nombre,apellido ORDER BY COUNT(pruebas.idTester) DESC;

