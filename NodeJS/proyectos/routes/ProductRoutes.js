const express = require("express");
const ProductController = require("../controllers/ProductController");
let router = express.Router();

router.get( "/", ProductController.traerProductos );
router.post( "/", ProductController.agregarProducto );
router.put( "/:id", ProductController.actualizarProducto );
router.delete( "/:id", ProductController.eliminarProducto );

module.exports = router;