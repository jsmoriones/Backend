import mongoose from "mongoose";

const CancionesSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    artista: { type: String, required: true },
    anio: { type: String, required: true },
    album: { type: String, required: true },
    genero: { type: String, required: true },
    duracion: { type: String, required: true },
    caratula: {type: String, required: false}
});

const Canciones = mongoose.model("Canciones", CancionesSchema);

export default Canciones;

/*
    titulo
    artista
    año
    album
    genero
    duracion
*/