/*
  Crea una clase base llamada Animal con atributos como nombre y especie. Luego, crea clases derivadas como Leon, Elefante y Tigre que hereden de Animal. Cada clase derivada debe tener un método específico (por ejemplo, rugir() para Leon). Utiliza un arreglo para almacenar varios animales y crea un método para recorrerlos y hacer que cada uno ejecute su acción específica.
*/

class Animal {
  constructor(nombre, especie){
    this.nombre = nombre;
    this.especie = especie;
  }


}

class Leon extends Animal {
  #contenedor;
  constructor(nombre, especie){
    super(nombre, especie);
    this.#contenedor = [];
  }
  
  rugir(){
    console.log("El Léon Ruge");
  }

  agregarAnimal(animal){
    if(animal instanceof Animal){
      this.#contenedor.push( animal );
    }
  }

  listarLeon(){
    console.log("----Lista de Leones----");
    this.#contenedor.map(leon => {
      console.log(`
        Nombre: ${leon.nombre}
        Especie: ${leon.especie}
      `);
    })

    //return this.#contenedor;
  }
}

class Elefante extends Animal {
  #contenedor;
  constructor(nombre, especie){
    super(nombre, especie);
    this.#contenedor = [];
  }

  trompetear(){
    console.log("El elefante trompetea");
  }

  agregarAnimal(animal){
    if(animal instanceof Animal){
      this.#contenedor.push( animal );
    }
  }

  listarElefante(){
    console.log("----Lista de Elefantes----");
    this.#contenedor.map(elefante => {
      console.log(`
        Nombre: ${elefante.nombre}
        Especie: ${elefante.especie}
      `);
    })

    //return this.#contenedor;
  }
}

class Tigre extends Animal {
  #contenedor;
  constructor(nombre, especie){
    super(nombre, especie);
    this.#contenedor = [];
  }

  rugir(){
    console.log("El Tigre Ruge fuerte");
  }

  agregarAnimal(animal){
    if(animal instanceof Animal){
      this.#contenedor.push( animal );
    }
  }

  listarTigres(){
    console.log("----Lista de Tigres----");
    this.#contenedor.map(tigre => {
      console.log(`
        Nombre: ${tigre.nombre}
        Especie: ${tigre.especie}
      `);
    })

    //return this.#contenedor;
  }
}

const tigres = new Tigre("Marcelo", "Tigre");
const tigre2 = new Tigre("Pepe", "Tigre Africano");
const tigre3 = new Tigre("Mantequlla", "Tigre Ruso");
tigres.agregarAnimal(tigres);
tigres.agregarAnimal(tigre2);
tigres.agregarAnimal(tigre3);

tigres.listarTigres();