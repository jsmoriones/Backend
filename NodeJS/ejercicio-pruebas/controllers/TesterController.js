const Tester = require("../models/TesterModel"),
    TesterController = new Tester();

const obtenerTesters = (async (req, res) => {
    try {
        const result = await TesterController.obtenerTesters();
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al traer los testers " + error});
    }
});

const agregarTester = (async (req, res) => {
    try {
        let result = await TesterController.agregarTester(req.body);
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al agregar el tester " + error});
    }
});

const actualizarTester = (async (req, res) => {
    try {
        let result = await TesterController.actualizarTester(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al actualizar el tester " + error});
    }
});

const eliminarTester = (async (req, res) => {
    try {
        let result = await TesterController.eliminarTester(req.params.id);
        if(result){
            res.json({msg: "Se elimino el Proyecto"})
        }
    } catch (error) {
        res.json({err: "Hay un error al eiminar el tester " + error});
    }
})

module.exports = {
    obtenerTesters,
    agregarTester,
    actualizarTester,
    eliminarTester
}