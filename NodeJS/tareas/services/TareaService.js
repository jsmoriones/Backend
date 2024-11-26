const Tarea = require("../models/TareaModel");

class TareaService {
    async obtenerT(){
        try {
            //findAll: me permite traer todo lo que tenga el modelo
            let result = await Tarea.findAll();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TareaService