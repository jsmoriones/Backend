const route = require("express").Router();
const Usuario = require("../controllers/UsuarioController");

route.get("/usuario", Usuario.obtener);
route.post("/usuario", Usuario.crear);
route.put("/usuario/:id", Usuario.actualizar);
route.delete("/usuario/:id", Usuario.eliminar);
route.get("/usuario/:id", Usuario.obtenerUnRegistro);

module.exports = route;