const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const publicacionesRoute = require("./routes/PublicacionesRoute.js")

app.use( '/api', publicacionesRoute );

app.listen(PORT, () => console.log(`Escuchando servidor en el puerto: http://localhost:${PORT}`));