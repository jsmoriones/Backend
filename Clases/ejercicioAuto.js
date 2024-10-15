//clase auto con Marca, modelo, año y color. get y set, metodo informacion y dos objetos con distinto dato

class Auto{
    constructor(marca, modelo, anio, color){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }

    //setter
    setMarca(valor){ this.marca = valor; }
    setModelo(valor){ this.marca = valor; }
    setAnio(valor){ this.anio = valor; }
    setColor(valor){ this.color = valor; }

    //getter
    getMarca(){ return this.marca; }
    getModelo(){ return this.modelo; }
    getAnio(){ return this.anio; }
    getColor(){ return this.color; }

    //metodos
    informacion(){
        console.log(`
            -------Datos del Auto-------
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Año: ${this.anio}
            Color: ${this.color}
        `);
    }
}

const mercedes = new Auto("Mercedes Benz", "4ta generacion", "1995", "Negro");
mercedes.informacion();
mercedes.setMarca("BMW");
console.log( mercedes.getMarca() );

const ferrari = new Auto("Ferrari", "3ra Generacion", "2015", "Blanco");
ferrari.informacion();
ferrari.setMarca("Toyota");
console.log( ferrari.getMarca() );