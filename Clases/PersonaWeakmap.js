const datosPrivados = new WeakMap();
class Persona {
    constructor(nombre,edad){
        datosPrivados.set(this,{nombre, edad}); //contexto, atributos
    }

    getNombre(){
        return datosPrivados.get(this).nombre;
    }
    setNombre(valor){
        let datos = datosPrivados.get(this);
        datos.nombre = valor;
        datosPrivados.set(this, datos);
    }

    getEdad(){
        return datosPrivados.get(this).edad;
    }
    setEdad(valor){
        let datos = datosPrivados.get(this);
        datos.edad = valor;
        datosPrivados.set(this, datos);
    }
}

const piroberta = new Persona("Piroberta", "42");
console.log( piroberta );

console.log( piroberta.getNombre() );
console.log( piroberta.getEdad() );
piroberta.setNombre("Cuenta Huesos");
console.log( piroberta.getNombre() );
console.log( piroberta.nombre ); //undefined
