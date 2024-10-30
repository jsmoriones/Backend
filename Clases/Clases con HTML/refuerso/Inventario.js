class Producto {
    constructor(nombre, precio, cantidadStock){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadStock = cantidadStock;
        
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(valor) {
        this.nombre = valor;
    }
        
    getPrecio() {
        return this.precio;
    }
    setPrecio(valor) {
        this.precio = valor;
    }
        
    getCantidadStock() {
        return this.cantidadStock;
    }
    setCantidadStock(valor) {
        this.cantidadStock = valor;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadStock, marca){
        super(nombre, precio, cantidadStock);
        this.marca = marca;
    }
}

let laptop = new Electrodomestico("Laptop", 300, 5, "Lenovo");
let lavadora = new Electrodomestico("Lavadora", 600, 7, "Challenger");
let microondas = new Electrodomestico("Microhondas", 400, 10, "Samsung");
let productos = [laptop, lavadora, microondas];

let listar = (productos) => {
    let productosSeleccionados = productos.filter(producto => producto.cantidadStock < 10);

    return productosSeleccionados;
}

console.log( listar(productos) );