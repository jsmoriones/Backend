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
    #calificaciones;
    constructor(nombre, edad){
        super(nombre, edad);
        this.#calificaciones = [];
    }

    agregarCalificaion(calificacion){ //calificacion debe ser un valor numerico
        if(calificacion){
            this.#calificaciones.push( parseFloat(calificacion) )
        }else{
            return "Debes ingresar un valor valido";
        }
    }

    calcularPromedio(){
        if( this.#calificaciones.length >= 2 ){
            let resultado = 0;

            this.#calificaciones.map(calificacion => {
                resultado += calificacion
            })

            return resultado / this.#calificaciones.length;
        }
        
    }
}

const perso1 = new Persona("Ramon Valdez", 58);
console.log(perso1.saludar());

const estu1 = new Estudiante("Sebastian Rengifo", 25);
console.log( estu1.saludar() );
estu1.agregarCalificaion(2.3);
estu1.agregarCalificaion(1.5);
estu1.agregarCalificaion(4.0);

console.log( estu1.calcularPromedio() )
