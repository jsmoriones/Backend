const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const sequelize = require("./config/database");
const TareaRoute = require("./routes/TareaRoute");

app.use( express.json() );

app.use( "/api/tareas", TareaRoute );

let startDB = async () => {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`));
    } catch (error) {
        console.log(`Error en la Base de Datos: ${error}`)
    }
}

startDB();