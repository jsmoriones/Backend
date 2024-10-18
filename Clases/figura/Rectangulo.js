import Figura from "./Figura.js";

class Rectangulo extends Figura {
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura;
    }
    calcularPerimetro(){
        return (2 * this.base) + (2 * this.altura);
    }
}

export default Rectangulo;