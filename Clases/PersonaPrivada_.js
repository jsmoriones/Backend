/* Convencion (_) */
class Persona {
    /* Como son atributos privados los agregamos arriba del constructor, antes del constructor */
    nombre;
    apellido;
    _edad;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this._edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(valor) {
        this.nombre = valor;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(valor) {
        this.apellido = valor;
    }
    getEdad() {
        return this._edad;
    }
    setEdad(valor) {
        this._edad = valor;
    }

    obtenerInformacion(){
        console.log(`
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Edad: ${this._edad}
        `);
    }
}

let pedro = new Persona("Pedro", "Arcinega", "50");
pedro.obtenerInformacion();
pedro._edad = "80";
pedro.obtenerInformacion();