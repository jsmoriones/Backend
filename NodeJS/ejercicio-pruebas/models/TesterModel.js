const conn = require("../config/database");

class Tester {
    async obtenerTesters(){
        let [rows] = await conn.query("SELECT * FROM tester");
        return rows;
    }
    async agregarTester(data){
        const {nombre, apellido} = data;
        let [result] = await conn.query("INSERT INTO tester(nombre, apellido) VALUES (?, ?)", [nombre, apellido]);

        return {id: result.insertId, ...data};
    }
    async actualizarTester(id, data){
        const {nombre, apellido} = data;
        let [result] = await conn.query("UPDATE tester SET nombre = ?, apellido = ? WHERE id = ?", [nombre, apellido, id]);
        return {...data};
    }
    async eliminarTester(id){
        const [result] = await conn.query("DELETE FROM tester WHERE id = ?", [id]);
        return result;
    }
}

module.exports = Tester;