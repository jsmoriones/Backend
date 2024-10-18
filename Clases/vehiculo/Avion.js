import Vehiculo from "./Vehiculo.js";

class Avion extends Vehiculo{
    mover(distancia, velocidad){
        console.log(`AVION: Distancia: ${distancia} | Velocidad: ${velocidad}`);
    }
}

export default Avion;