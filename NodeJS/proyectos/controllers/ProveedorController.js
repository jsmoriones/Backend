const Proveedor = require("../models/ProveedorModels"),
    ModelProveedor = new Proveedor();

exports.traerProveedores = async (req, res) => {
    try {
        let result = await ModelProveedor.traerProveedores();
        res.json({result});
    } catch (error) {
        res.json({error: "Error al traer los datos de Proveedores " + error})
    }
};
exports.agregarProveedor = async (req, res) => {
    try{
      let result = await ModelProveedor.agregarProveedor(req.body);
      res.json({result});
    } catch(error) {
      res.json({error: "Error al agregar un Proveedor " + error});
    }
};
exports.actualizarProveedor = async (req, res) => {
    try{
      let result = await ModelProveedor.actualizarProveedor(req.params.id, req.body);
      res.json({result});
    } catch(error) {
      res.json({error: "Error al actualizar un Proveedor " + error});
    }
};
exports.eliminarProveedor = async (req, res) => {
    try{
      let result = await ModelProveedor.eliminarProveedor(req.params.id);
      if(result){
        res.json({msg: "Se elimino correctamente el proveedor"});
      }
    } catch(error) {
      res.json({error: "Error al eliminar un Proveedor " + error});
    }
};