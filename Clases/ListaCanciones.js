class Cancion {
    constructor(titulo, artista, duracion){
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(in_titulo) {
        this.titulo = in_titulo;
    }
        
    getArtista() {
        return this.artista;
    }
    setArtista(in_artista) {
        this.artista = in_artista;
    }
        
    getDuracion() {
        return this.duracion;
    }
    setDuracion(in_duracion) {
        this.duracion = in_duracion;
    }
    mostrarInformacion(){
        console.log( this.titulo, this.artista, this.duracion );        
    }
}

class Playlist {
    #canciones;
    genero;
    nombre;
    constructor(genero, nombre){
        this.#canciones = [];
        this.genero = genero;
        this.nombre = nombre;
    }

    agregarCanciones(cancion){
        if(cancion instanceof Cancion){
            this.#canciones.push( cancion );
            console.log("Cancion agregada");            
        }else{
            console.log("Solo se puede agregar instancia de la clase cancion");
        }
    }

    buscarCanciones(titulo){
        const cancionFilter = this.#canciones.filter(cancion => cancion.titulo.toLowerCase() === titulo.toLowerCase());
        if( cancionFilter.length > 0){
            return cancionFilter[0];
        }else{
            console.log("Cancion no Encontrada");
        }
    }

    listarCanciones(){
        /*this.#canciones.forEach(cancion => {
            return cancion.mostrarInformacion()
        })*/

        return this.#canciones;
    }
}

/*const temazo = new Cancion("La Voz Dormida", "Mago de Oz", "9:58");
const temazo2 = new Cancion("Jesus de Chamberi", "Mago de Oz", "7:39");
const temazo3 = new Cancion("Despertar", "Warcry", "6:13");
const temazo4 = new Cancion("La leyenda de Gambrinus", "Saurom", "6:00");
const temazo5 = new Cancion("One Rode To Asa Bay", "Bathory", "9:09");
//console.log(temazo)
const miPlaylist = new Playlist("Folk metal", "Lo mejor de lo mejor");
miPlaylist.agregarCanciones(temazo);
miPlaylist.agregarCanciones(temazo2);
miPlaylist.agregarCanciones(temazo3);
miPlaylist.agregarCanciones(temazo4);
miPlaylist.agregarCanciones(temazo5);
console.log( miPlaylist.buscarCanciones("La Voz Dormida") );
miPlaylist.listarCanciones();*/
const salsaPlaylist = new Playlist("Salsa", "Salsa Pesada");
document.querySelector("#playlistnombre").textContent = salsaPlaylist.nombre;
document.querySelector("#playlistgenero").textContent = salsaPlaylist.genero;

document.querySelector("#sendForm").addEventListener("click", function(e){
    e.preventDefault();
    const tituloInput = document.querySelector("#titulo").value;
    const artistaInput = document.querySelector("#artista").value;
    const duracionInput = document.querySelector("#duracion").value;
    
    //creamos la instancia  de Cancion con los parametros que me pasan por el formulairo
    let nuevaCancion = new Cancion(tituloInput, artistaInput, duracionInput);

    //agregamos la cancion a la playlist
    salsaPlaylist.agregarCanciones( nuevaCancion );

    //vaciamos los inputs
    tituloInput.value = "";
    artistaInput.value = "";
    duracionInput.value = "";
});

document.querySelector("#mostrar").addEventListener("click", function(){
    let salsa = salsaPlaylist.listarCanciones();
    let listaC = document.querySelector("#listado-canciones");

    console.log(salsa);
    

    listaC.innerHTML = "";
    salsa.forEach(tema => {
        
        let lista = document.createElement("LI");
        lista.classList.add("ml-5", "mb-3", "border-b", "border-blue-50")
        lista.innerHTML = `
            <p class="text-xl"><span class="font-bold">Titulo:</span> ${tema.titulo} </p>
            <p class="text-xl"><span class="font-bold">Duracion:</span> ${tema.duracion} </p>
            <p class="text-xl"><span class="font-bold">Artista:</span> ${tema.artista} </p>`;
    
        listaC.appendChild(lista);
    })
})