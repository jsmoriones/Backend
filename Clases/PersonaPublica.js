/* Ningun tipo de convencion _ o # => encapsulacion */
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(valor){
        this.nombre = valor;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(valor){
        this.edad = valor;
    }
    obtenerInformacion(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);        
    }
}

let Mauricio = new Persona("Mauricio Perez", "35");
console.log( Mauricio );
Mauricio.edad = "20"; //publico
Mauricio.obtenerInformacion();
Mauricio.setEdad("26");
console.log( Mauricio.getEdad() );