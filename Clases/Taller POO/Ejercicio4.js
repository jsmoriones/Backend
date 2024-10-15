class Empleado {
  constructor(nombre, salario){
    this._nombre = nombre;
    this._salario = salario;
  }

  set nombre(valor){
    this._nombre = valor;
  }


  get nombre(){
    return this._nombre;
  }

  set salario(valor){
    this._salario = valor;
  }

  get salario(){
    return this._salario;
  }

  obtenerDetalles(){
    return `Nombre del empleado: ${this._nombre}, Salario del Empleado: ${this._salario}`;
  }
}

const empleado1 = new Empleado("Pedro", 3000);
console.log( empleado1.nombre );
console.log( empleado1.salario );
console.log( empleado1.obtenerDetalles() );

empleado1.nombre = "Pedro 2";
empleado1.salario = 1000;
console.log( empleado1.nombre );
console.log( empleado1.salario );
console.log( empleado1.obtenerDetalles() );

class Gerente extends Empleado {
  constructor(nombre, salario, departamento){
    super(nombre, salario);

    this._departamento = departamento;
  }

  set departamento(valor){
    this._departamento = valor;
  }

  get departamento(){
    return this._departamento;
  }

  obtenerDetalles(){
    return super.obtenerDetalles() + ", Pertenece al Departamento de: " + this._departamento;
  }
}

const gerente1 = new Gerente("Albarez", 10000, "TI");

console.log( gerente1.obtenerDetalles() );