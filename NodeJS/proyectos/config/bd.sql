CREATE DATABASE bdproductos;

USE bdproductos;

CREATE TABLE productos(
	id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    precio FLOAT NOT NULL,
	descripcion text NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO productos(nombre, precio, descripcion) VALUES ("Cilantro", 500, "Cilantro cilantro");

SELECT * FROM productos;

CREATE TABLE proveedor(
	id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(80) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    telefono VARCHAR(12) NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO proveedor(nombre, direccion, telefono) VALUES ("Josefo", "Cll 50 - 80", "56468545");

CREATE TABLE empresa(
	id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(80) NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    telefono VARCHAR(12) NOT NULL,
    nit VARCHAR(11) NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO empresa(nombre, direccion, telefono, nit) VALUES ("Pleitos S.A.S", "CRA 65 - 95", "12345566", "111111111");