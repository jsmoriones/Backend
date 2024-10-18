class Perro {
    //El mismo metodo con distintos parametros se comporta de manera distinta a esto le llamamos polimosfismo
    hacerSonido(a, b){
        console.log(a,b);        
    }
    hacerSonido(a){
        console.log(a);        
    }
    hacerSonido(a,b,c){
        console.log(a,b,c);        
    }
}

class Gato {
    hacerSonido(a,b){
        console.log(a,b);        
    }
    correr(msg){
        console.log(msg);
    }
    domir(msg){
        console.log(msg);
    }
}

const perro1 = new Perro();
perro1.hacerSonido("A", "B", "C");
perro1.hacerSonido("A", "B");
perro1.hacerSonido("A");

const gato1 = new Gato();
gato1.correr("El Gato Corre");
