//importacion de modulos y declaracion de variables
const express = require("express");
const PORT = 5000;
const app = express();

app.use( express.json() );//para tomar el formato json con los request

//dependencias a instalar: mysql2
//

//configuracion a la base de datos mysql
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "administrator",
    database: "empleados"
})

db.connect(err => {
    if(err){
        console.log("Hay un error en la BD: ", err);
    }else{
        console.log("Se conecto correctamente")
    }
});

//levantando el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en la URl: http://localhost:${PORT}`);
});

module.exports = app;