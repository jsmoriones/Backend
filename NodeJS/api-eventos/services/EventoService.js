const EventoModel = require("../models/EventoModel");
const Inscribirse = require("../models/InscribirseModel")
const Usuario = require("../models/UsuarioModel")

class Evento {
  static async obtener() {
    try{
      let result = await EventoModel.findAll();
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async crear(body) {
    try{
      let result = await EventoModel.create(body);
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async actualizar(id, body) {
    try{
      let existsEvento = await EventoModel.findByPk(id);
      if(!existsEvento){
        throw new Error("No se encontraron resultados");
      }else{
        let eventoUpdate = await existsEvento.update(body, {
          where: {id}
        });
        await eventoUpdate.save();
        console.log("Se actualizo")
        return existsEvento;
      }
    } catch(error) {
      console.log(error)
      return error.message
    }
  }

  static async eliminar(id) {
    try{
      let existsEvento = await EventoModel.findByPk(id);
      if(existsEvento == null){
        throw new Error("No se encontraron resultados");
      }else{
        let EventoEliminado = await existsEvento.destroy();
        await EventoEliminado.save();
        console.log("Se elimino");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }

  static async obtenerUnRegistro(id) {
    try{
      let result = await EventoModel.findByPk(id);
      if(!result){
        throw new Error("Evento no encontrado");
      }else{
        return result;
      }
    } catch(error) {
      return error.message;
    }
  }
}

module.exports = Evento;