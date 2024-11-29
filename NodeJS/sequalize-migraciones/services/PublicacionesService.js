const {publicaciones} = require("../models")

const obtenerPublicacionesService = (async () => {
    try {
        let result = await publicaciones.findAll();
        return result
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    obtenerPublicacionesService
}