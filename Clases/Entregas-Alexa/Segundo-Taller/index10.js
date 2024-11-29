/*
    Crea una clase base Mascota con atributos como nombre y tipo. Luego, crea clases derivadas como Perro y Gato, agregando métodos específicos para cada animal, como ladrar() y maullar(). Utiliza un arreglo para almacenar varias mascotas y un método para hacer que cada mascota realice su acción.
*/

class Mascota {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    setNombre(valor){
        this.nombre = valor;
    }
    getNombre(){
        return this.nombre;
    }

    setTipo(valor){
        this.tipo = valor;
    }
    getTipo(){
        return this.tipo;
    }

    mostrarDetalle(){
        return `
            Nombre de Mascota: ${this.nombre}
            Tipo de Mascota: ${this.tipo}
        `;
    }
}

class Perro extends Mascota {
    #perros;
    constructor(nombre, tipo){
        super(nombre, tipo);
        this.#perros = [];
    }

    ladrar(){
        return `El Perro ${this.nombre} esta ladrando. Guauuuu!!! Guauuuu!!!`;
    }

    corre(){
        return `El Perro ${this.nombre} corre sobre el cesped`;
    }

    agregarPerro(perro){
        if(perro instanceof Perro){
            this.#perros.push( perro );
        }
    }

    listarPerros(){
        if(this.#perros.length >= 1){
            //console.log("---- Lista de Perros ----");
            /*this.#perros.map(perro => {
                console.log(`
                    Nombre del Perro: ${perro.nombre}
                    Tipo de Macota: ${perro.tipo}
                `);                
            });*/
            return this.#perros;
        }
    }
}

class Gato extends Mascota {
    #gatos;
    constructor(nombre, tipo){
        super(nombre, tipo);
        this.#gatos = [];
    }

    maullar(){
        return `El Gato ${this.nombre} esta maullando. Miauuuuu!!! Miauuuuu!!!`;
    }

    brinca(){
        return `El Gato ${this.nombre} esta brincando sobre el tejado`;
    }

    agregarGato(gato){
        if(gato instanceof Gato){
            this.#gatos.push( gato );
        }
    }

    listarGatos(){
        if(this.#gatos.length >= 1){
            //console.log("---- Lista de Gatos ----");
            /*this.#gatos.map(gato => {
                console.log(`
                    Nombre del Gato: ${gato.nombre}
                    Tipo de Macota: ${gato.tipo}
                `);                
            });*/
            return this.#gatos;
        }
    }
}

/*const perro1 = new Perro("Mateo", "Labrador");
perro1.agregarPerro(perro1);
const perro2 = new Perro("Pepa", "Criollo");
perro1.agregarPerro(perro2);
perro1.listarPerros();
console.log( perro1.ladrar() );
console.log( perro2.ladrar() );

const gato1 = new Gato("Michu", "Angora");
const gato2 = new Gato("Cell", "Criollo");

gato1.agregarGato(gato1);
gato1.agregarGato(gato2);

gato1.listarGatos()

console.log( gato1.maullar() );
console.log( gato2.maullar() );*/