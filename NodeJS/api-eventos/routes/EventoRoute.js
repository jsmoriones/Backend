const route = require("express").Router();
const Evento = require("../controllers/EventoController");

route.get("/evento", Evento.obtener);
route.post("/evento", Evento.crear);
route.put("/evento/:id", Evento.actualizar);
route.delete("/evento/:id", Evento.eliminar);
route.get("/evento/:id", Evento.obtenerUnRegistro);

module.exports = route;