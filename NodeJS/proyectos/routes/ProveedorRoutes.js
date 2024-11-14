const express = require("express");
const ProveedorController = require("../controllers/ProveedorController");
let router = express.Router();

router.get( "/", ProveedorController.traerProveedores );
router.post( "/", ProveedorController.agregarProveedor );
router.put( "/:id", ProveedorController.actualizarProveedor );
router.delete( "/:id", ProveedorController.eliminarProveedor );

module.exports = router;