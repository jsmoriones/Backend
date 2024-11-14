const Products = require("../models/ProductModels"),
    ModelProduct = new Products();

const traerProductos = (async (req, res) => {
    try {
        const result = await ModelProduct.traerProductos()
        res.json({result})
    } catch (error) {
        res.json({err: `Error en la base de datos: ${error}`})
    }
});

const agregarProducto = (async (req, res) => {
    try {
        const result = await ModelProduct.agregarProducto(req.body);
        res.json({result})
    } catch (error) {
        res.json({err: `Error al crear un Producto: ${error}`});
    }
});

const actualizarProducto = (async (req, res) => {
    try{
      const result = await ModelProduct.actualizarProducto(req.params.id, req.body);
      res.json({result});
    } catch(error) {
      res.json({err: `Error al editar un Producto: ${error}`});
    }
});

const eliminarProducto = (async (req, res) => {
    try{
      const result = await ModelProduct.eliminarProducto(req.params.id);
      if(result){
        res.json({msg: "Producto eliminado con exito"});
      }
    } catch(error) {
      res.json({err: `Error al eliminar un Producto: ${error}`});
    }
});

module.exports = {
    traerProductos,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
};