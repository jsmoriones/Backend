import Avion from "./Avion.js";
import Coche from "./Coche.js";

const avion1 = new Avion();
const coche1 = new Coche();

// avion1.v1 = 10;
// avion1.v2 = 15;

// coche1.v1 = 50;
// coche1.v2 = 60;

function mover(hijas){
    //hijas.mover(hijas.v1,hijas.v2);
    hijas.mover(hijas);
}

mover(avion1);
mover(coche1);