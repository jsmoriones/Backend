import Vehiculo from "./Vehiculo.js";

class Coche extends Vehiculo{
    mover(distancia, velocidad){
        console.log(`COCHE: Distancia: ${distancia} | Velocidad: ${velocidad}`);
    }
}

export default Coche;