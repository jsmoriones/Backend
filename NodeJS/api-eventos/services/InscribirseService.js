const Evento = require("../models/EventoModel");
const InscribirseModel = require("../models/InscribirseModel");
const Usuario = require("../models/UsuarioModel");

class Inscribirse {
  static async obtener() {
    try{
      let result = await InscribirseModel.findAll({
        include: [
          {
            model: Evento,
            attributes: ["nombre", "lugar"]
          },
          {
            model: Usuario,
            attributes: ["nombre", "apellido"]
          }
        ]
      });
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async crear(body) {
    const {idEvento} = body;
    try{
      let evento = await Evento.findByPk(idEvento);

      if(!evento){
        throw new Error("No existe el evento")
      }else{
        const inscripciones = await InscribirseModel.count({
          where: {idEvento, cancelado: false}
        });

        if(inscripciones >= evento.capacidad){
          throw new Error("No se pueden realizar mas inscripciones");
        }
        
        let result = await InscribirseModel.create(body);
        return result;
      }

    } catch(error) {
      return error.message
    }
  }

  static async actualizar(id, body) {
    try{
      let existsInscribir = await InscribirseModel.findByPk(id);
      if(!existsInscribir){
        throw new Error("No se encontraron resultados");
      }else{
        let inscribirseUpdate = await existsInscribir.update(body, {
          where: {id}
        });
        await inscribirseUpdate.save();
        console.log("Se actualizo")
        return existsInscribir;
      }
    } catch(error) {
      console.log(error)
      return error.message
    }
  }

  static async eliminar(id) {
    try{
      let existsInscribir = await InscribirseModel.findByPk(id);
      if(existsInscribir == null){
        throw new Error("No se encontraron resultados");
      }else{
        let IniscribirseEliminar = await existsInscribir.destroy();
        await IniscribirseEliminar.save();
        console.log("Se elimino");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }

  static async obtenerUnRegistro(id) {
    try{
      let result = await InscribirseModel.findByPk(id);
      if(!result){
        throw new Error("Inscripcion no encontrado");
      }else{
        return result;
      }
    } catch(error) {
      return error.message;
    }
  }

  static async eventosExistentes(){
    try{
      let result = await InscribirseModel.findAll({
        where: { cancelado: false }
      });
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async eventosInscripciones(id){
    try{
      let eventoExists = await Evento.findByPk(id);

      if(!eventoExists){
        throw new Error("No existe el evento")
      }else{

        const inscripciones = await InscribirseModel.findAll({
          where: {idEvento: id},
          include: { model: Usuario, attributes: ['nombre', 'email'] }
        });

        return {
          evento: {
            nombre: eventoExists.nombre,
            descripcion: eventoExists.descripcion,
            fecha_hora: eventoExists.fecha_hora,
            lugar: eventoExists.lugar,
            capacidad: eventoExists.capacidad
          },
          inscripciones
        }
      }
    } catch(error) {
      console.log(error);
    }
  }
}

module.exports = Inscribirse;