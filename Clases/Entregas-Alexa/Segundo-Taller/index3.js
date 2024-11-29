/*
  Crea una clase Persona con atributos básicos como nombre, edad y un método saludar(). Luego crea una clase Estudiante que herede de Persona y agregue un atributo calificaciones (un arreglo). Añade métodos para agregar una calificación y calcular el promedio del estudiante.
*/

class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(){
    console.log(`
      Saludos: ${this.nombre}, Tu tienes ${this.edad} años de edad
    `)
  }
}

class Estudiante extends Persona{
  #calificaciones;
  constructor(nombre, edad){
    super(nombre, edad);
    this.#calificaciones = [];
  }

  agregarCalificacion(calificacion){
    if(calificacion >= 1 && calificacion <= 5){
      this.#calificaciones.push( calificacion );
    }else{
      console.log(" Por favor agrega un valor que este entre 1 y 5 ");
    }
  }

  calcularPromedio(){
    if(this.#calificaciones.length >= 2){
      let resultado = 0;
      this.#calificaciones.forEach(cal => {
        resultado = cal + resultado;
      });

      resultado = resultado / this.#calificaciones.length;
      console.log(resultado);
    }else{
      console.log("Debes agregar por lo menos 2 calificaciones para obtener un promedio");
    }
  }
}

const est1 = new Estudiante("Juan", 25);
est1.saludar();
est1.agregarCalificacion(2.3);
est1.agregarCalificacion(1.9);
est1.agregarCalificacion(3.5);
est1.calcularPromedio();
est1.agregarCalificacion(7);