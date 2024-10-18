import Figura from "./Figura.js";

class Circulo extends Figura {
    constructor(radio){
        super();
        this.radio = radio;
    }
    calcularArea(){
        return Math.PI * this.radio ** 2;
    }
    calcularPerimetro(){
        return  2 * Math.PI * this.radio;
    }
}

export default Circulo;