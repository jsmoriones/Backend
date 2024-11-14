const express = require("express");
const EmpresaController = require("../controllers/EmpresaController");
let router = express.Router();

router.get( "/", EmpresaController.traerEmpresas );
router.post( "/", EmpresaController.agregarEmpresa );
router.put( "/:id", EmpresaController.actualizarEmpresa );
router.delete( "/:id", EmpresaController.eliminarEmpresa );

module.exports = router;