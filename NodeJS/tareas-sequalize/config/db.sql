CREATE DATABASE tareasdb;
USE tareasdb;
CREATE TABLE tareas(
    id INT AUTO_INCREMENT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descripcion text,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tareas(titulo, descripcion) VALUES ("comprar", "comprar, frijoles en el mercado de la paz");

SELECT * FROM tareas;