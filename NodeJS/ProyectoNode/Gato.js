const Animal = require("./Animal");

class Gato extends Animal {
    hacerSonido(){
        console.log("Es es el sonido del gato");        
    }
}

module.exports = Gato;