import Circulo from "./Circulo.js";
import Rectangulo from "./Rectangulo.js";

let rectangulo1 = new Rectangulo(8,6);
//hallar el area y perimetro de rectangulo
console.log( rectangulo1.calcularArea() );
console.log( rectangulo1.calcularPerimetro() );

let circulo1 = new Circulo(8);
console.log( circulo1.calcularArea() );
console.log( circulo1.calcularPerimetro() );