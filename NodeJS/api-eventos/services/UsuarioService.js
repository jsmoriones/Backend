const UsuarioModel = require("../models/UsuarioModel");

class Usuario {
  static async obtener() {
    try{
      let result = await UsuarioModel.findAll();
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async crear(body) {
    try{
      let result = await UsuarioModel.create(body);
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async actualizar(id, body) {
    try{
      let existsUsuario = await UsuarioModel.findByPk(id);
      if(!existsUsuario){
        throw new Error("No se encontraron resultados");
      }else{
        let usuarioUpdate = await existsUsuario.update(body, {
          where: {id}
        });
        await usuarioUpdate.save();
        console.log("Se actualizo")
        return existsUsuario;
      }
    } catch(error) {
      console.log(error)
      return error.message
    }
  }

  static async eliminar(id) {
    try{
      let existsUsuario = await UsuarioModel.findByPk(id);
      if(existsUsuario == null){
        throw new Error("No se encontraron resultados");
      }else{
        let UsuarioEliminado = await existsUsuario.destroy();
        await UsuarioEliminado.save();
        console.log("Se elimino");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }

  static async obtenerUnRegistro(id) {
    try{
      let result = await UsuarioModel.findByPk(id);
      if(!result){
        throw new Error("Usuario no encontrado");
      }else{
        return result;
      }
    } catch(error) {
      return error.message;
    }
  }
}

module.exports = Usuario;