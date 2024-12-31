CREATE DATABASE connectReact;
USE connectReact;

CREATE TABLE roles(
	rid INT AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY(rid)
);

INSERT INTO roles(nombre) VALUES("administrador");
INSERT INTO roles(nombre) VALUES("veterinario");
INSERT INTO roles(nombre) VALUES("usuario");

CREATE TABLE users(
	uid INT AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    contrasenia VARCHAR(60) NOT NULL,
    username VARCHAR(50) NOT NULL,
    roleId INT NOT NULL DEFAULT 3,
    PRIMARY KEY (uid),
    FOREIGN KEY (roleId) REFERENCES roles(rid)
);

ALTER TABLE users ADD COLUMN ocupacion VARCHAR(50) NOT NULL;
ALTER TABLE users ADD COLUMN salario INT NOT NULL;
ALTER TABLE users ADD COLUMN puntaje INT(20) NOT NULL;

CREATE TABLE animal(
	pid INT AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
    species INT NOT NULL,
    breed VARCHAR(60) NOT NULL,
    owner INT NOT NULL,
    PRIMARY KEY(pid),
    FOREIGN KEY (owner) REFERENCES users(uid),
    FOREIGN KEY (species) REFERENCES specie(eid)
);
ALTER TABLE animal ADD COLUMN description VARCHAR(200);
ALTER TABLE animal ADD COLUMN foto VARCHAR(40);
ALTER TABLE animal ADD COLUMN nacimiento DATE;
ALTER TABLE animal DROP COLUMN breed;

ALTER TABLE animal MODIFY species INT;

ALTER TABLE animal ADD CONSTRAINT FOREIGN KEY (species) REFERENCES specie(eid);

CREATE TABLE specie(
  eid INT AUTO_INCREMENT,
  nombre VARCHAR(35) NOT NULL,
  PRIMARY KEY (eid)
);

INSERT INTO specie(nombre) VALUES("Caninos");
INSERT INTO specie(nombre) VALUES("Felinos");
INSERT INTO specie(nombre) VALUES("Roedores");
INSERT INTO specie(nombre) VALUES("Acuaticos");
INSERT INTO specie(nombre) VALUES("Aves");


CREATE TABLE reservations(
	rid INT AUTO_INCREMENT,
    pet INT NOT NULL,
    veterinario INT NOT NULL,
    reservation_date DATE NOT NULL,
    description TEXT,
	PRIMARY KEY (rid),
    FOREIGN KEY (pet) REFERENCES animal(pid),
    FOREIGN KEY (veterinario) REFERENCES users(uid)
);

CREATE TABLE tasks(
  tid INT AUTO_INCREMENT,
  title VARCHAR(180) NOT NULL,
  taskDead DATE NOT NULL,
  userAssign INT NOT NULL,
  priority INT(3) NOT NULL,
  PRIMARY KEY (tid),
  FOREIGN KEY (userAssign) REFERENCES users(uid)
);

ALTER TABLE tasks ADD COLUMN status boolean DEFAULT false;
ALTER TABLE tasks ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;