const Empresa = require("../models/EmpresaModels"),
    ModelEmpresa = new Empresa();

const traerEmpresas = (async (req, res) => {
    try {
        let result = await ModelEmpresa.traerEmpresas();
        res.json(result);
    } catch (error) {
        res.json({err: `Error al traer los datos de la tabla Empresa: ${error}`});
    }
})
const agregarEmpresa = (async (req, res) => {
    try {
        let result = await ModelEmpresa.agregarEmpresa(req.body);
        res.json(result);
    } catch (error) {
        res.json({err: `Error al insertar un registro en Empresa: ${error}`});
    }
})
const actualizarEmpresa = (async (req, res) => {
    try{
      let result = await ModelEmpresa.actualizarEmpresa(req.params.id, req.body);
      res.json(result);
    } catch(error) {
      res.json({err: `Error al actualizar un registro en Empresa: ${error}`});
    }
})
const eliminarEmpresa = (async (req, res) => {
    try{
      let result = await ModelEmpresa.eliminarEmpresa(req.params.id);
      if(result){
        res.json({msg: "Se elimino correctamente una empresa"});
      }
    } catch(error) {
      res.json({err: `Error al eliminar una Empresa: ${error}`});
    }
})

module.exports = {
    traerEmpresas,
    agregarEmpresa,
    actualizarEmpresa,
    eliminarEmpresa
}