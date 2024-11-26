const Pruebas = require("../models/PruebasModel"),
    PruebasModel = new Pruebas();

const obtenerPruebas = (async (req, res) => {
    try {
        const result = await PruebasModel.obtenerPruebas();
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al traer los pruebas " + error});
    }
});

const agregarPrueba = (async (req, res) => {
    try {
        let result = await PruebasModel.agregarPrueba(req.body);
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al agregar el prueba " + error});
    }
});

const actualizarPrueba = (async (req, res) => {
    try {
        let result = await PruebasModel.actualizarPrueba(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al actualizar el prueba " + error});
    }
});

const eliminarPrueba = (async (req, res) => {
    try {
        let result = await PruebasModel.eliminarPrueba(req.params.id);
        if(result){
            res.json({msg: "Se elimino el Proyecto"})
        }
    } catch (error) {
        res.json({err: "Hay un error al eiminar el prueba " + error});
    }
})

module.exports = {
    obtenerPruebas,
    agregarPrueba,
    actualizarPrueba,
    eliminarPrueba
}