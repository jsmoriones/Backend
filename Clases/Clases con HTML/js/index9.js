/*
    Define una clase Transporte con atributos como capacidad y tipoCombustible. Luego, crea subclases como Autobus y Bicicleta que hereden de Transporte. Agrega métodos específicos, como arrancar() para Autobus. Usa un arreglo para almacenar varios medios de transporte y recorre el arreglo ejecutando una acción específica según el tipo de transporte.
*/

class Transporte {
    #contenedor;
    constructor(capacidad, tipoCombustible){
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
        this.#contenedor = {autobus: [], bicicleta: []};
    }
    getCapacidad() {
        return this._capacidad;
    }
    setCapacidad(in_capacidad) {
        this._capacidad = in_capacidad;
    }
        
    getTipoCombustible() {
        return this._tipoCombustible;
    }
    setTipoCombustible(in_tipoCombustible) {
        this._tipoCombustible = in_tipoCombustible;
    }

    guardarTransporte(transporte){
        if(transporte instanceof Autobus){
            this.#contenedor.autobus.push( transporte )
        }else if(transporte instanceof Bicicleta){
            this.#contenedor.bicicleta.push( transporte )
        }
    }

    listarTransporte(tipoTransporte){
        if(tipoTransporte === "autobus" && this.#contenedor.autobus.length >= 1){
            return this.#contenedor.autobus;
        }else if(tipoTransporte === "bicicleta" && this.#contenedor.bicicleta.length >= 1){
            return this.#contenedor.bicicleta;
        }
    }
}

class Autobus extends Transporte {
    #placa;
    #modelo;
    constructor(capacidad, tipoCombustible, potencia){
        super(capacidad, tipoCombustible);
        this.potencia = potencia;
    }
    getModelo() {
        return this.#modelo;
    }
    setModelo(valor) {
        this.#modelo = valor;
    }
        
    getPlaca() {
        return this.#placa;
    }
    setPlaca(valor) {
        this.#placa = valor;
    }
        
    getPotencia() {
        return this.potencia;
    }
    setPotencia(valor) {
        this.potencia = valor;
    }

    arrancar(){
        return `El autobus con placa ${this.#placa} esta arrancado a una potencia de ${this.potencia}`;
    }
}

class Bicicleta extends Transporte {
    #kilometrosRecorridos;
    constructor(capacidad, tipoCombustible, marca){
        super(capacidad, tipoCombustible);
        this.marca = marca;
        
    }

    getMarca() {
        return this.marca;
    }
    setMarca(valor) {
        this.marca = valor;
    }

    setKilometros(valor){
        this.#kilometrosRecorridos = valor;
    }
    getKilometros(){
        return this.#kilometrosRecorridos;
    }
}