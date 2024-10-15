class Persona {
    nombre
    apellido
    direccion
    telefono

    constructor(nombre, apellido, direccion, telefono){
        //es aquella funcion el cual utilizamos para darle valor a todos los atributos de la clase
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono
        //Con this nos referimos a los atributos declarados en la clase, osea por fuera del constructor
    }

    //setter (Cambio de valor)
    setNombre(nombre){ this.nombre = nombre; }
    setApellido(apellido){ this.apellido = apellido; }
    setTelefono(telefono){ this.apellido = telefono; }
    setDireccion(direccion){ this.direccion = direccion; }

    //getter (Obtengo el valor)
    getNombre(){ return this.nombre; }
    getApellido(){ return this.apellido; }
    getTelefono(){ return this.telefono; }
    getDireccion(){ return this.direccion; }

    informacion(){
        console.log(`
            Datos Persona
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Direccion: ${this.direccion}
            Telefono: ${this.telefono}
        `);
    }
}

const persona1 = new Persona("Pedro", "Gonzales", "Cra 90 # 10 n 98", "5436523"); //Creamos la instancia de persona
persona1.informacion();
//persona1.nombre = "Raul";//Cambiando el nombre de persona1
//persona1.informacion();
persona1.setNombre("Raul 2");
console.log( persona1.getNombre() );

const persona2 = new Persona("Maria", "Ortiz", "Cll 20 # 5 n 50", "545631284");
persona2.informacion();