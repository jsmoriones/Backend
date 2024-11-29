/*
    Crea una clase base Vehiculo con atributos como marca, modelo y año. Luego, crea clases derivadas como Auto y Moto que hereden de Vehiculo. Agrega métodos específicos a cada clase, como conducir() en Auto. Usa un arreglo para almacenar vehículos y crea un método que los liste según su tipo.
*/

class Vehiculo {
    #almacenDeVehiculos;
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.#almacenDeVehiculos = {autos: [], motos: []};
    }
    getMarca() {
        return this._marca;
    }
    setMarca(in_marca) {
        this._marca = in_marca;
    }

    getModelo() {
        return this._modelo;
    }
    setModelo(in_modelo) {
        this._modelo = in_modelo;
    }

    getAnio() {
        return this._anio;
    }
    setAnio(in_anio) {
        this._anio = in_anio;
    }

    almacenV(tipo, vehiculo){
        if(tipo.toLowerCase() === "auto"){
            this.#almacenDeVehiculos.autos.push(vehiculo);
        }else{
            this.#almacenDeVehiculos.motos.push(vehiculo);
        }
    }
    listarVehiculos(tipo){
        if(tipo.toLowerCase() === "auto"){
            /*console.log("----Lista de Autos----");
            this.#almacenDeVehiculos.autos.map(auto => {
                console.log(`
                Marca del Auto: ${auto.marca}
                Modelo: ${auto.modelo}
                año: ${auto.anio}
                `);
            });*/
            return this.#almacenDeVehiculos.autos
        }else{
            /*console.log("----Lista de Motos----");
            this.#almacenDeVehiculos.motos.map(moto => {
                console.log(`
                Marca de la Moto: ${moto.marca}
                Modelo: ${moto.modelo}
                año: ${moto.anio}
                `);
            });*/
            return this.#almacenDeVehiculos.motos
        }
    }
}

class Auto extends Vehiculo {
    #categoriaAuto;
    constructor(marca, modelo, anio){
        super(marca, modelo, anio);
        this.#categoriaAuto = "";
    }

    conducir(){
        return `El auto con marca: ${this.marca} arranco sobre la carretera`;
    }

    setCategoriaAuto(valor){
        this.#categoriaAuto = valor;
    }
    getCategoriaAuto(){
        return this.#categoriaAuto;
    }
}

class Moto extends Vehiculo {
    #usoMoto;
    constructor(marca, modelo, anio){
        super(marca, modelo, anio);
        this.#usoMoto = "Personal";
    }

    setUsoMoto(valor){
        this.#usoMoto = valor;
    }
    getUsoMoto(){
        return this.#usoMoto;
    }
}
/*const vehiculo = new Vehiculo();
const auto1 = new Auto("BMW", "Chevrolet", 2008);
const auto2 = new Auto("Audi", "A5", 2010);
const moto1 = new Moto("Honda", "C3", 2010);
vehiculo.almacenV("auto", auto1);
vehiculo.almacenV("auto", auto2);
vehiculo.almacenV("moto", moto1);
vehiculo.listarVehiculos("auto");
vehiculo.listarVehiculos("moto");*/
