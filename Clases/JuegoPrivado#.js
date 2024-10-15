class Juego {
    #personaje; //Privado
    #puntaje; //Privado
    #nivel; //Privado

    constructor(personaje, puntaje, nivel){
        this.#personaje = personaje;
        this.#puntaje = puntaje;
        this.#nivel = nivel;
    }

    getPersonaje(){
        return this.#personaje;
    }
    setPersonaje(valor){
        this.#personaje = valor;
    }
    getPuntaje(){
        return this.#puntaje;
    }
    setPuntaje(valor){
        this.#puntaje = valor;
    }
    getNivel(){
        return this.#nivel;
    }
    setNivel(valor){
        this.#nivel = valor;
    }
    obtenerInformacion(){
        console.log(`
            Nombre del Personaje: ${this.#personaje}
            Puntaje del Jugador: ${this.#puntaje}
            Nivel del Jugador: ${this.#nivel}
        `);
    }
}

let amongus = new Juego("Roberto", "20", "2");
amongus.obtenerInformacion();
//amongus.#nivel = "Juan";
amongus.setPersonaje("Roberto 2");
amongus.obtenerInformacion();