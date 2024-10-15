let deportes = {
    conBalon: ["Futbol", "Baloncesto", "Basketball", "Futbol Americano"],
    sinBalon: ["Trompo", "Natacion", "Atletismo", "Tejo"]
};

let persona = {
    nombre: "Luquitas",
    edad: "20",
    estudios: {
        nombreCarrera: "Arquitectura",
        semestre: "4"
    }
}

console.log( "deportes: ", deportes.conBalon[1] );
console.log("Sinbalon ", deportes.sinBalon);
console.log("Nombre de la persona: ", persona.nombre + " Edad de la persona: " + persona.edad);

//Asignar
persona.nombre = "Martin"

console.log("Nombre de la persona: ", persona.nombre + " Edad de la persona: " + persona.edad);

/*deportes.sinBalon.forEach(function(val){
    console.log("Deporte sin Balon: ", val)
})*/

console.log( persona.estudios.nombreCarrera );

persona.estudios.nombreCarrera = "Analisis y Desarrollo de Software";

console.log( persona.estudios.nombreCarrera );

var marcasAutos = {};
console.log(marcasAutos);
marcasAutos.marca = ["Honda", "Ford"];
console.log(marcasAutos);

//Eliminando la clave marca de marcasAutos
delete marcasAutos.marca;

console.log(marcasAutos);

var mascota = {
    nombre: "Akira",
    raza: "Criollo",
    edad: "5",
    informacion: function() {
        console.log(`Mascotas ${this.nombre}, Raza ${this.raza}`);        
    }
}

mascota.informacion()