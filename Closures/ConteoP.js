function crearConteo(num){
    let contador = num; //Variable Privada
    function contar(){
        contador += 2;
        console.log(contador);        
        return contador;
    }

    return contar;
}

const miConteo = crearConteo(5); // Insntancia de una funcion
miConteo()