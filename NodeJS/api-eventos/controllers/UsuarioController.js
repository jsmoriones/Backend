const UsuarioService = require("../services/UsuarioService");

class Usuario {
  static async obtener(req, res){
    try{
      let result = await UsuarioService.obtener();
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
      let result = await UsuarioService.crear(req.body);
      if(!result){
        throw new Error("No se pudo crear el usuario, hubo un error");
      }else{
        res.json({result});
        return result;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizar(req, res){
    try{
      let result = await UsuarioService.actualizar(req.params.id, req.body);
      if(!result){
        throw new Error("No existe el usuario")
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminar(req, res){
    try{
      let result = await UsuarioService.eliminar(req.params.id);
      if(result.resp == false){
        throw new Error("No existe el usuario");
      }else{
        res.json({msg: "Se elimino correctamente el usuario"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerUnRegistro(req, res){
    try{
      let result = await UsuarioService.obtenerUnRegistro(req.params.id);
      if(!result){
        throw new Error("El usuario no existe");
      }else{
        res.json(result);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
}

module.exports = Usuario;