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
	constructor(nombre, edad, raza){
		super(nombre, edad);
		this.raza = raza;
	}

	set establecerRaza(valor){
		this.raza = valor;
	}

	get obtenerRaza(){
		return this.raza;
	}

	hacerSonido(){
		super.hacerSonido();
		console.log("El perro ladra: ¡Guau!");
	}
}

console.log("_________CLASE ANIMAL_________");
// Comprobando la creación de la clase Animal
const pato = new Animal("Donald", "2 años");
console.log( pato.obtenerNombre );
console.log( pato.obtenerEdad );
pato.hacerSonido();

console.log("_________CLASE PERRO_________");
//Creando ejemplo de la clase Perro extendida de Animal
const nicolas = new Perro("Nicolas", "16 años", "Labrador");
console.log( nicolas.obtenerNombre );
console.log( nicolas.obtenerEdad );
console.log( nicolas.obtenerRaza );
nicolas.hacerSonido();