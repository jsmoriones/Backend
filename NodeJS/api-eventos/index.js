const express = require("express");
const app = express();
const sequelize = require("./config/database");
const EventoRoute = require("./routes/EventoRoute");
const UsuarioRoute = require("./routes/UsuarioRoute");
const InscribirseRoute = require("./routes/InscribirseRoute");

require("dotenv").config();
const PORT = process.env.PORT;

app.use( express.json() );

app.use( "/api", EventoRoute );
app.use( "/api", UsuarioRoute );
app.use( "/api", InscribirseRoute );

const startServerDB = async () => {
  try{
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Corriendo servidor en: http://localhost:${PORT}`));
  } catch(error) {
    console.log(`Error en la Base de Datos: ${error}`);
  }
}

startServerDB();