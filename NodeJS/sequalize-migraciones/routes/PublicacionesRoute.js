const route = require("express").Router();
const {obtenerPublicaciones} = require("../controllers/PublicacionesController.js")

route.get("/", obtenerPublicaciones)

module.exports = route;