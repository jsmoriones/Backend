const {obtenerPublicacionesService} = require("../services/PublicacionesService");

const obtenerPublicaciones = (async (req, res) => {
    try {
        let result = await obtenerPublicacionesService();
        res.json(result)
    } catch (error) {
        console.log(error)
    }
});

module.exports = {
    obtenerPublicaciones
}