class ListaTarea {
    constructor(){
        this.tareas = [];
    }
    agregatTarea(tarea){
        this.tareas.push(tarea);
        console.log( "tarea: " + tarea );
    }
    mostrarInformacion(){
        console.log("------------------");
        console.log( "Listado de Tareas" );
        console.log("------------------");
        for(let i = 0; i < this.tareas.length; i++){
            console.log( this.tareas[i] );
        }
    }
    buscarTarea(palabraABuscar){
        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i] === palabraABuscar){
                console.log( "Tarea Buscada: " + this.tareas[i] + " Número de veces buscada: " + i );
            }else{
                console.log("No se Encontro Tarea");
            }
        }
    }
    eliminarTarea(tareaAEliminar){
        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i] === tareaAEliminar){
                console.log("Se elimino: " + this.tareas[i]);
                this.tareas.splice(i, 1);
            }else{
                console.log("No se Encontro Tarea");
            }
        }
    }
}

let tareas = new ListaTarea();
tareas.agregatTarea("comprar leche");
tareas.agregatTarea("Aprender javascript");
tareas.agregatTarea("lavar la ropa");
tareas.agregatTarea("Ir a la Galeria");
tareas.mostrarInformacion();
tareas.buscarTarea("Ir a la Galeria");
tareas.eliminarTarea("lavar la ropa");
tareas.mostrarInformacion();