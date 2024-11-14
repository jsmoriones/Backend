require('dotenv').config() // variables de .env

//importacion de dependencias y llamando archivos js
const express = require("express"),
    app = express(),
    ProductRoutes = require("./routes/ProductRoutes"),
    ProveedorRoutes = require("./routes/ProveedorRoutes"),
    EmpresaRoutes = require("./routes/EmpresaRoutes")
    PORT = process.env.PORT;

app.use( express.json() ); // req.body

//definicion de rutas
app.use( "/api/products", ProductRoutes );
app.use( "/api/proveedor", ProveedorRoutes );
app.use( "/api/empresa", EmpresaRoutes );

//levantando servidor
app.listen(PORT, () => {
    console.log("Escuchando en el puerto: "+PORT);
})