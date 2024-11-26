const route = require("express").Router();
const PruebasController = require("../controllers/PruebasController");

route.get("/", PruebasController.obtenerPruebas);
route.post("/", PruebasController.agregarPrueba);
route.put("/:id", PruebasController.actualizarPrueba);
route.delete("/:id", PruebasController.eliminarPrueba);

module.exports = route;