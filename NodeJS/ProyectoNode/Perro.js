const Animal = require("./Animal");

class Perro extends Animal{
    hacerSonido(){
        console.log("Es es el sonido del perro");        
    }
}

module.exports = Perro