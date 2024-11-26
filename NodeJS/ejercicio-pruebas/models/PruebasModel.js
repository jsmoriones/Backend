const conn = require("../config/database");

class Prueba {
    async obtenerPruebas(){
        let [rows] = await conn.query("SELECT * FROM pruebas");
        return rows;
    }
    async agregarPrueba(data){
        const {idProyecto, idTester, fechaF} = data;
        let [result] = await conn.query("INSERT INTO pruebas(idProyecto, idTester, fechaF) VALUES (?, ?, ?)", [idProyecto, idTester, fechaF]);

        return {id: result.insertId, ...data};
    }
    async actualizarPrueba(id, data){
        const {idProyecto, idTester, fechaF} = data;
        let [result] = await conn.query("UPDATE pruebas SET idProyecto = ?, idTester = ?, fechaF = ? WHERE id = ?", [idProyecto, idTester, fechaF, id]);

        return {id: result.insertId, ...data};
    }
    async eliminarPrueba(id){
        const [result] = await conn.query("DELETE FROM pruebas WHERE id = ?", [id]);
        return result;
    }
    async xProyecto(){
        const [result] = await conn.query("SELECT proyecto.nombre, COUNT(pruebas.idTester) AS 'xProyecto' FROM pruebas, proyecto WHERE pruebas.idProyecto = proyecto.id GROUP BY nombre ORDER BY COUNT(pruebas.idTester) DESC");
        return result;
    }
    async xPersona(){
        const [result] = await conn.query("SELECT tester.nombre, tester.apellido, COUNT(pruebas.idTester) AS 'xPersona' FROM pruebas, tester WHERE pruebas.idTester = tester.id GROUP BY nombre,apellido ORDER BY COUNT(pruebas.idTester) DESC");
        return result;
    }
}

module.exports = Prueba;