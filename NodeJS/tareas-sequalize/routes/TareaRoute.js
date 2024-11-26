const routes = require("express").Router();
const { 
    obtenerTareas,
    agregarTarea,
    actualizarTarea,
    eliminarTarea,
    buscarTarea
} = require("../controllers/TareaController");

routes.get("/", obtenerTareas);
routes.post("/", agregarTarea);
routes.put("/:id", actualizarTarea);
routes.delete("/:id", eliminarTarea);
routes.get("/:id", buscarTarea);

module.exports = routes;