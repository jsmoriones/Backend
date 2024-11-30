CREATE DATABASE DBeventos;

USE DBeventos;

CREATE TABLE evento(
  id INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  descripcion text NOT NULL,
  fecha_hora DATE NOT NULL,
  lugar VARCHAR(180) NOT NULL,
  capacidad INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE inscribirse(
  id INT AUTO_INCREMENT NOT NULL,
  idEvento INT NOT NULL,
  idUsuario INT NOT NULL,
  fechaInscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  cancelado BOOLEAN DEFAULT VALUE FALSE,
  PRIMARY KEY (id),
  FOREIGN KEY (idEvento) REFERENCES evento(id) ON DELETE CASCADE,
  FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE
);

/*El atributo permitido es para saber cual es admin y cual es usuario si esta en true es admin, si esta en false es usuario*/
CREATE TABLE usuario (
  id INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(80) NOT NULL,
  apellido VARCHAR(80) NOT NULL,
  email VARCHAR(100) NOT NULL,
  permidito BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);