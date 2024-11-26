const Tarea = require("../models/TareaModel");

class TareaService {
    static async obtenerT(){
        try {
            //findAll: me permite traer todo lo que tenga el modelo
            let result = await Tarea.findAll();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    static async agregarT(data){
        try {
            let result = await Tarea.create(data)
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    static async actualizarT(id, data){
        /*try {
            let [result] = await Tarea.update(data, {
                where: {id}
            });

            if(result == 0){
                throw new Error("No se encontraron resultadosxxxx");
            }else{
                return result;
            }

        } catch (error) {
            return error.message
        }*/
        try {
            let [result] = await Tarea.update(data, {
                where: {id}
            });

            console.log("service ", result)

            if(result == 0){
                console.log("No se encontro la tarea a actualizar")
            }else{
                return true;
            }

        } catch (error) {
            console.log("Error al actualizar")
        }
    }

    static async eliminarT(id){
        try {
            let result = await Tarea.destroy({
                where: {id}
            });
            if (result == 0) console.log("No se encontro tarea a borrar");
            else return result;
        } catch (error) {
            console.log(error)
        }
    }

    static async obtenerUnaT(id){
        try {
            let result = await Tarea.findByPk(id);
            if(!result){
                throw new Error("Tarea no encontrada")
            }else{
                return result;
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = TareaService