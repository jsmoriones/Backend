/*
  Crea una clase Empleado con atributos como nombre y sueldo. Luego, crea clases derivadas como EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Cada tipo de empleado tendrá un método para calcular el sueldo total en función de las horas trabajadas. Utiliza un arreglo para almacenar diferentes tipos de empleados y muestra sus sueldos.
*/

class Empleado {
  constructor(nombre, sueldo){
    this.nombre = nombre;
    this.sueldo =  sueldo;
  }

  getNombre(){
    return this.nombre;
  }
  setNombre(valor){
    this.nombre = valor;
  }

  getSueldo(){
    return this.sueldo;
  }
  setSueldo(valor){
    this.sueldo = valor;
  }
}

class EmpleadoTiempoCompleto extends Empleado{
  #empleados;
  constructor(nombre, sueldo){
    super(nombre, sueldo);
    this.#empleados = [];
  }

  calcularSueldo(){
    return this.sueldo * 8;
  }

  guardarEmpleados(empleado){
    if(empleado instanceof Empleado){
      this.#empleados.push( empleado );
    }

    console.log(this.#empleados);
  }

  listarEmpleados(){
    /*console.log("Lista de Empleados Tiempo Completo");
    this.#empleados.map(empleado => {
      console.log(`
        Nombre: ${empleado.nombre}
        Sueldo: ${empleado.sueldo}
        Sueldo Total por Horas: ${empleado.calcularSueldo()}
      `);
    });*/
    return this.#empleados;
  }
}

class EmpleadoMedioTiempo extends Empleado {
  #empleados;
  constructor(nombre, sueldo, horas){
    super(nombre, sueldo);
    this.#empleados = [];
    this.horas = horas;
  }

  setHoras(horas) {
    this.horas = horas;
  }
  getHoras(){
    return this.horas;
  }
  calcularSueldo(){
    return this.sueldo * this.horas;
  }

  guardarEmpleados(empleado){
    if(empleado instanceof Empleado){
      this.#empleados.push( empleado );
    }

    console.log(this.#empleados);
  }

  listarEmpleados(){
    /*console.log("Lista de Empleados Medio Tiempo");
    this.#empleados.map(empleado => {
      console.log(`
        Nombre: ${empleado.nombre}
        Sueldo: ${empleado.sueldo}
        Horas Trabajadas: ${empleado.horas} horas
        Sueldo Total por Horas: ${empleado.calcularSueldo()}
      `);
    });*/

    return this.#empleados;
  }
}

/*const empleado = new EmpleadoTiempoCompleto("Juan", 23000);
//const empleadoFull = new EmpleadoTiempoCompleto();
empleado.guardarEmpleados( empleado );
const sebastian = new EmpleadoTiempoCompleto("Sebastian", 33333);
empleado.guardarEmpleados( sebastian );
empleado.listarEmpleados();

const emp = new EmpleadoMedioTiempo("Andres", 55555, 6);
emp.guardarEmpleados(emp);

const emp2 = new EmpleadoMedioTiempo("Antonio", 66666, 7);
emp.guardarEmpleados( emp2 );
emp.listarEmpleados();*/