class Animal {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}

	//Setter, Getter para Nombre
	set establecerNombre(valor){
		this.nombre = valor;
	}
	get obtenerNombre(){
		return this.nombre;
	}
	//Setter, Getter para Edad
	set establecerEdad(valor){
		this.edad = valor;
	}
	get obtenerEdad(){
		return this.edad;
	}

	hacerSonido() {
		console.log("El animal hace un sonido")
	}
}

class Perro extends Animal { // Con extends heredo las propiedades de Animal (nombre, edad, hacerSonido, ... etc)
	constructor(nombre, edad){
		super(nombre, edad);
	}

	hacerSonido(){
		super.hacerSonido();
		console.log("El perro ladra: ¡Guau!");
	}
}

// Comprobando la creación de la clase Animal
const pato = new Animal("Donald", "2 años");
console.log( pato.obtenerNombre );
console.log( pato.obtenerEdad );
pato.hacerSonido();

//Creando ejemplo de la clase Perro extendida de Animal
const nicolas = new Perro("Nicolas", "16 años");
console.log( nicolas.obtenerNombre );
console.log( nicolas.obtenerEdad );
nicolas.hacerSonido();