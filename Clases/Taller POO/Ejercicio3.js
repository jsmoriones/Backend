class Vehiculo {
    constructor(marca){
        this._marca = marca;
    }
    get marca() {
        return this._marca;
    }
    set marca(in_marca) {
        this._marca = in_marca;
    }

    arrancar(){
        console.log('El vehículo ha arrancado, runnnn runnn');
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo){
        super(marca)
        this._modelo = modelo;
        
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(in_modelo) {
        this._modelo = in_modelo;
    }

    mostrarInformacion(){
        console.log( `Marca del coche: ${this.marca} Modelo del Coche: ${this._modelo}` );
    }
}

//Prueba clase vehiculo
console.log('____________CLASE VEHICULO____________');
const bus = new Vehiculo('Sotracauca');
bus.arrancar();
console.log( bus.marca );
console.log('____________CLASE COCHE____________');
const troncomovil = new Coche('Troncomovil', '10.000 A.C');
troncomovil.arrancar();
console.log( troncomovil.modelo );
console.log( troncomovil.marca );

troncomovil.mostrarInformacion();