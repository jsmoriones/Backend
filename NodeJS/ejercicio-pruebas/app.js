const express = require("express");
const app  = express();
require('dotenv').config();
//const conn = require("./config/database");
//rutas
const ProyectoRoute = require("./routes/ProyectoRoute");
const TesterRoute = require("./routes/TesterRoute");
const PruebasRoute = require("./routes/PruebasRoute");

const PORT = process.env.PORT

app.use( express.json() );

app.use( "/api/proyecto", ProyectoRoute );
app.use( "/api/tester", TesterRoute );
app.use( "/api/pruebas", PruebasRoute );


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`);
});