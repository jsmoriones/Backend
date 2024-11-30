const InscribirseService = require("../services/InscribirseService");

class Inscribirse {
  static async obtener(req, res){
    try{
      let result = await InscribirseService.obtener();
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
    try{
      let result = await InscribirseService.crear(req.body);
      if(!result){
        throw new Error("No se pudo crear la inscripcion, hubo un error");
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async actualizar(req, res){
    try{
      let result = await InscribirseService.actualizar(req.params.id, req.body);
      if(!result){
        throw new Error("No existe la inscripcion")
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminar(req, res){
    try{
      let result = await InscribirseService.eliminar(req.params.id);
      if(result.resp == false){
        throw new Error("No existe la inscripcion");
      }else{
        res.json({msg: "Se elimino correctamente la inscripcion"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerUnRegistro(req, res){
    try{
      let result = await InscribirseService.obtenerUnRegistro(req.params.id);
      if(!result){
        throw new Error("La inscripcion no existe");
      }else{
        res.json(result);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }

  static async eventosExistentes(req, res){
    try{
      let result = await InscribirseService.eventosExistentes();
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
  static async eventosInscripciones(req, res){
    try{
      let evento = await InscribirseService.eventosInscripciones(req.params.id);

      if(!evento){
        throw new Error("No hay eventos")
      }else{
        res.json(evento)
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
}

module.exports = Inscribirse;