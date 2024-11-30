const EventoService = require("../services/EventoService");

class Evento {
  static async obtener(req, res){
    try{
      let result = await EventoService.obtener();
      if(!result){
        throw new Error("No hay registros");
      }else{
        res.json({result});
      }
    } catch(error) {
      console.log(error)
      res.json({error: error.message});
    }
  }
  static async crear(req, res){
    console.log(req.body)
    try{
      let result = await EventoService.crear(req.body);
      if(!result){
        throw new Error("No se pudo crear el evento, hubo un error");
      }else{
        console.log(result);
        res.json({result});
        return result;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizar(req, res){
    try{
      let result = await EventoService.actualizar(req.params.id, req.body);
      if(!result){
        throw new Error("No existe el evento")
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminar(req, res){
    try{
      let result = await EventoService.eliminar(req.params.id);
      if(result.resp == false){
        throw new Error("No existe el evento");
      }else{
        res.json({msg: "Se elimino correctamente el evento"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerUnRegistro(req, res){
    try{
      let result = await EventoService.obtenerUnRegistro(req.params.id);
      if(!result){
        throw new Error("El evento no existe");
      }else{
        res.json(result);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
}

module.exports = Evento;