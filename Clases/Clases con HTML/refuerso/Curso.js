class Curso {
    constructor(nombreCurso){
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante){
        if(estudiante instanceof Estudiante){
            this.estudiantes.push( estudiante );
        }
    }
    calcularPromedioCurso(){
        let resultado = 0;
        this.estudiantes.map(estudiante => {
            resultado += estudiante.calcularPromedio()
        })

        return resultado / this.estudiantes.length;
    }
}

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    setNombre(valor){
        this.nombre = valor;
    }
    getNombre(){
        return this.nombre;
    }

    setEdad(valor){
        this.edad = valor;
    }
    getEdad(){
        return this.edad;
    }

    saludar(){
        return `
            Hola, persona: ${this.nombre}, tu edad es: ${this.edad}
        `;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad){
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificaion(calificacion){ //calificacion debe ser un valor numerico
        if(calificacion){
            this.calificaciones.push( parseFloat(calificacion) )
        }else{
            return "Debes ingresar un valor valido";
        }
    }

    calcularPromedio(){
        if( this.calificaciones.length >= 2 ){
            let resultado = 0;

            this.calificaciones.map(calificacion => {
                resultado += calificacion
            })

            return resultado / this.calificaciones.length;
        }
        
    }
}

const curso = new Curso("ADSO");

const estu1 = new Estudiante("Alumno 1", 12);
const estu2 = new Estudiante("Alumno 2", 15);
const estu3 = new Estudiante("Alumno 3", 18);
const estu4 = new Estudiante("Alumno 4", 15);
const estu5 = new Estudiante("Alumno 5", 17);

estu1.agregarCalificaion(2.3);
estu1.agregarCalificaion(3.5);
estu1.agregarCalificaion(4.2);

estu2.agregarCalificaion(3.6);
estu2.agregarCalificaion(1.5);
estu2.agregarCalificaion(3.7);

estu3.agregarCalificaion(4.3);
estu3.agregarCalificaion(3.7);
estu3.agregarCalificaion(4.2);

estu4.agregarCalificaion(2.3);
estu4.agregarCalificaion(1.4);
estu4.agregarCalificaion(1.3);

estu5.agregarCalificaion(4.3);
estu5.agregarCalificaion(1.1);
estu5.agregarCalificaion(2.3);

curso.agregarEstudiante(estu1);
curso.agregarEstudiante(estu2);
curso.agregarEstudiante(estu3);
curso.agregarEstudiante(estu4);
curso.agregarEstudiante(estu5);

console.log( curso.calcularPromedioCurso() )