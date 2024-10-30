/*
  Define una clase Producto con atributos como nombre, precio y cantidadEnStock. Luego crea una clase Electrodomestico que herede de Producto y agregue un atributo adicional marca. Implementa un arreglo para almacenar varios productos y un método que liste aquellos que tienen una cantidad en stock menor a 10.
*/

class Producto {
  #almacen;
  constructor(nombre, precio, cantidadEnStock){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadEnStock = cantidadEnStock;

    this.#almacen = [];
  }

  getNombre(){
    return this.nombre;
  }
  setNombre(valor){
    this.nombre = valor;
  }

  getPrecio(){
    return this.precio;
  }
  setPrecio(valor){
    this.precio = valor;
  }

  getCantidadEnStock(){
    return this.cantidadEnStock;
  }
  setCantidadEnStock(valor){
    this.cantidadEnStock = valor;
  }

  almacenarProducto(producto){
    if(producto instanceof Producto){
      this.#almacen.push( producto );
      //console.log(producto);
    }else{
      console.log("No es Producto");
    }
  }

  listarProductos(){
    let listado = [];
    this.#almacen.map(p => {
      if(p.cantidadEnStock < 10){
        listado.push(p);
      }
    });
    console.log(listado)
    //return this.#almacen;
  }
}

class Electrodomestico extends Producto {
  constructor(nombre, precio, cantidadEnStock, marca){
    super(nombre, precio, cantidadEnStock);
    this.marca = marca;
  }
}

let productos = new Producto();
let televisor = new Electrodomestico("Televisor", 12356, 5, "Samsung");
let radio = new Electrodomestico("Radio", 5633, 9, "China");
let nevera = new Electrodomestico("Nevera", 5633, 10, "Challenger");
let estufa = new Electrodomestico("Estufa", 6656, 5, "Imusa")
productos.almacenarProducto( televisor );
productos.almacenarProducto( radio );
productos.almacenarProducto(nevera);
productos.almacenarProducto(estufa);
productos.listarProductos();