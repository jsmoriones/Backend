/*
    Crea una clase Curso con atributos como nombreCurso y un arreglo de Estudiantes (usa la clase Estudiante del Ejercicio 1). Cada curso tendrá métodos para agregar estudiantes y calcular el promedio del curso en función de las calificaciones de los estudiantes. Hereda esta clase en subclases como CursoOnline y CursoPresencial.
*/

class Curso{
    #estudiantes;
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.#estudiantes = [];
    }
    agregarEstu(param){
        if(param instanceof Estudiante){
            this.#estudiantes.push(param);
            console.log(param)
        }
    }

    calcularNotas(nombreEstudiante){
        this.#estudiantes.map(est => {
            if(est.nombre == nombreEstudiante){
                console.log( `Resultado del promedio del estudiante: ${est.nombre} el promedio es: ${est.calcularPromedio()}` )
            }
        });
    }
}

class CursoOnline extends Curso{

}
class CursoPresencial extends Curso{

}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`
        Saludos: ${this.nombre}, Tu tienes ${this.edad} años de edad
      `)
    }
}

class Estudiante extends Persona {
    #calificaciones;
    constructor(nombre, edad) {
        super(nombre, edad);
        this.#calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        if (calificacion >= 1 && calificacion <= 5) {
            this.#calificaciones.push(calificacion);
        } else {
            console.log(" Por favor agrega un valor que este entre 1 y 5 ");
        }
    }

    calcularPromedio() {
        if (this.#calificaciones.length >= 2) {
            let resultado = 0;
            this.#calificaciones.forEach(cal => {
                resultado = cal + resultado;
            });

            resultado = resultado / this.#calificaciones.length;
            return resultado;
        } else {
            console.log("Debes agregar por lo menos 2 calificaciones para obtener un promedio");
        }
    }
}

const curso = new Curso("ADSO");
const est1 = new Estudiante("juan", 23);
const est2 = new Estudiante("Kevin", 98);

est1.agregarCalificacion(2.3);
est1.agregarCalificacion(1.3);

curso.agregarEstu(est1);
curso.agregarEstu(est2);

curso.calcularNotas("juan")