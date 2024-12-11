import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
const app = express(),
    PORT = process.env.PORT_APP,
    URL_MONGO = process.env.URL_MONGO_DB;

import cancionesRouter from "./routes/cancionesRoutes.js";

//middleware
app.use( bodyParser.json() );

//routes
app.use( "/api", cancionesRouter );

//conexion a BD
mongoose.connect(URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Se conecto correctamente a la BD de MongoDB"))
    .catch(err => console.log("Error al Conectarse a la BD de Mongo: ", err));

app.listen(PORT, () => console.log(`Se conecto correctamente al servidor http://localhost:${PORT}`));