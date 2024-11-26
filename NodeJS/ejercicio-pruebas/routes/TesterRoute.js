const route = require("express").Router();
const TesterController = require("../controllers/TesterController");

route.get("/", TesterController.obtenerTesters);
route.post("/", TesterController.agregarTester);
route.put("/:id", TesterController.actualizarTester);
route.delete("/:id", TesterController.eliminarTester);

module.exports = route;