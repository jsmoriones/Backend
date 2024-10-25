class Libro {
  constructor(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
  }

  setTitulo(valor){
    this.titulo = valor;
  }
  getTitulo(){
    return this.titulo;
  }

  setAutor(valor){
    this.autor = valor;
  }
  getAutor(){
    return this.autor;
  }

  mostrarInformacion(){
    return `
      Titulo del Libro: ${this.titulo}
      Autor del Libro: ${this.autor}
    `;
  }
}

class LibroDigital extends Libro {
  constructor(titulo, autor, urlWeb){
    super(titulo, autor);
    this.urlWeb = urlWeb;
    this.libros = [];
  }

  agregarLibro(libro){
    if(libro instanceof Libro){
      this.libros.push( libro );
    }
  }

  listarLibros(){
    console.log("----Libros Digitales----");
    this.libros.forEach(libro => {
      console.log(`
        Titulo: ${libro.titulo}
        Autor: ${libro.autor}
        URL Web: ${libro.urlWeb}
      `);
    });
    //return this.libros;
  }

  buscarLibro(autorBusqueda){
    let libroEncontrado = this.libros.filter(libro => libro.autor.toLoweCase() === autorBusqueda);
    if(libroEncontrado){
      console.log(libroEncontrado)
    }else{
      console.log("No existe un libro con este autor")
    }
  }
}

class LibroFisico extends Libro {
  constructor(titulo, autor, isbn){
    super(titulo, autor)
    this.isbn = isbn;
    this.libros = [];
  }

  agregarLibro(libro){
    if(libro instanceof Libro){
      this.libros.push( libro );
    }
  }

  listarLibros(){
    console.log("----Libros Digitales----");
    this.libros.forEach(libro => {
      console.log(`
        Titulo: ${libro.titulo}
        Autor: ${libro.autor}
        ISBN: ${libro.isbn}
      `);
    });
    //return this.libros;
  }

  buscarLibro(autorBusqueda){
    let libroEncontrado = this.libros.filter(libro => libro.autor.toLoweCase() === autorBusqueda);
    if(libroEncontrado){
      console.log(libroEncontrado)
    }else{
      console.log("No existe un libro con este autor")
    }
  }
}

class Biblioteca{
  constructor(nombre, direccion){
    this.nombre = nombre;
    this.direccion = direccion
  }
}

const libro1 = new LibroDigital("La Puta de Babilonia", "Fernando Vallejo", "http://vallejo.com")
libro1.agregarLibro(libro1)