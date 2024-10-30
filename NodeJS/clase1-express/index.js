//express
const express = require("express");
const app = express();
const PORT = 3000;

app.get('/ejemplo', (req, res) => {
    res.json({
        message: "Hola Mundo"
    })
});

//servidor
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en la URL: http://localhost:${PORT}`);
});