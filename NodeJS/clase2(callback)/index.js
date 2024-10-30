const app = require("./app");

//Base de datos empleados tabla usuarios(id, nombre, email)
let empleados = [
    {id: 1, nombre: "Alicia", email: "alicia@gmail.com"},
    {id: 2, nombre: "Maria", email: "maria@gmail.com"},
    {id: 3, nombre: "Perez", email: "perez@gmail.com"},
    {id: 4, nombre: "Ramon", email: "ramon@gmail.com"},
    {id: 5, nombre: "Andrea", email: "andrea@gmail.com"}
]

function sumar(a,b, callback){
    let resultado = a + b;
    callback(resultado);
}

function mostrarResultado(resultado){
    console.log(resultado);
}


//creacion de rutas
app.get("/postman", (req, res) => {
    res.json({
        message: "Hola Mundo desde POSTMAN, hoy veremos callback"
    })
});

app.get("/suma", (req, res) => {
    console.log(req.query);
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    sumar(a,b, (resultado) => {
        res.status(200).send(`El resultado de la suma es: ${resultado}`);
    });
});

app.get("/suma/:a/:b", (req, res) => {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);

    sumar(a, b, (resultado) => {
        res.status(200).send(`El resultado de la suma es: ${resultado}`);
    })
});

//Metodo POST
app.post("/suma", (req, res) => {    
    let {a, b} = req.body;
    sumar(a, b, (resultado) => {
        res.status(200).send(`El resultado de la suma es: ${resultado}`);
    })
});