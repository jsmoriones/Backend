const route = require("express").Router();
const Inscribirse = require("../controllers/InscribirseController");

route.get("/inscribirse", Inscribirse.obtener);
route.post("/inscribirse", Inscribirse.crear);
route.put("/inscribirse/:id", Inscribirse.actualizar);
route.delete("/inscribirse/:id", Inscribirse.eliminar);
route.get("/inscribirse/:id", Inscribirse.obtenerUnRegistro);
route.get("/disponibles", Inscribirse.eventosExistentes);
route.get("/evento/inscripcion/:id", Inscribirse.eventosInscripciones)

module.exports = route;