const route = require("express").Router();
const ProyectoController = require("../controllers/ProyectoController");

route.get("/", ProyectoController.obtenerProyectos);
route.post("/", ProyectoController.agregarProyecto);
route.put("/:id", ProyectoController.actualizarProyecto);
route.delete("/:id", ProyectoController.eliminarProyecto);

module.exports = route;