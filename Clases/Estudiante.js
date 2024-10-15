class Persona {
    constructor(nombre, apellido, direccion, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
    }

    setNombre(valor){
        this.nombre = valor;
    }
    getNombre(){
        return this.nombre;
    }

    setApellido(valor){
        this.apellido = valor;
    }
    getApellido(){
        return this.apellido;
    }

    setDireccion(valor){
        this.direccion = valor;
    }
    getDireccion(){
        return this.direccion;
    }

    setEdad(valor){
        this.edad = valor;
    }
    getEdad(){
        return this.edad;
    }
}

class Estudiante extends Persona {
    id //publico
    #notas //privado
    constructor(id, nombre, apellido, direccion, edad){
        super(nombre, apellido, direccion, edad);
        this.id = id;
        this.#notas = [];
    }

    setId(valor){
        this.id = valor;
    }
    getId(){
        return this.id;
    }

    agregarNota(nota){
        this.#notas.push(nota);
    } 
    

    listarNotas(){
        console.log("Listado de Notas");        
        this.#notas.forEach(function(nota, index) {
            console.log(`
                Nota ${index+1}: ${nota}
            `);
        })
    }

    calcularPromedio(){
        let resultado = 0;
        this.#notas.forEach(function(nota){
            resultado += nota;
        });

        resultado = resultado / this.#notas.length;
        return resultado;
    }

    obtenerInformacion(){
        console.log(`
            Nombre: ${super.getNombre()}
            Apellido: ${super.getApellido()}
            Direccion: ${super.getDireccion()}
            Edad: ${super.getEdad()}
        `);
    }
}

const estudiante = new Estudiante("1236", "Juan", "Moriones", "CL 56. 87", "45");
estudiante.agregarNota(4.5);
estudiante.agregarNota(3);
estudiante.agregarNota(2.5);
estudiante.listarNotas();
estudiante.obtenerInformacion();
console.log( estudiante.calcularPromedio() )