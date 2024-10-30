class Libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

class LibroDigital extends Libro{
    constructor(titulo, autor, tamanio){
        super(titulo, autor);
        this.tamanio = tamanio;
    }
}

class LibroFisico extends Libro{
    constructor(titulo, autor, numPag){
        super(titulo, autor);
        this.numPag = numPag;
    }
}

let libros = [
    new LibroFisico("Cronicas de una muerte anunciada", "GABO", 200),
    new LibroDigital("Cien años de Soledad", "GABO", 250)
]

let listarLibros = (libros, autor) => {
    return libros.filter(libro => libro.autor === autor);
}

console.log( listarLibros(libros, "GABO") );