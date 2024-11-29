/*
  Crea una clase base CuentaBancaria con atributos como numeroCuenta y saldo. Luego, crea clases derivadas como CuentaAhorros y CuentaCorriente que hereden de CuentaBancaria. Cada tipo de cuenta tendrá métodos específicos, como aplicarIntereses() en CuentaAhorros. Usa un arreglo para manejar múltiples cuentas y un método para realizar depósitos y retiros en todas ellas.
*/

class CuentaBancaria {
  numeroCuenta;
  saldo;
  titular;
  constructor(titular){
    this.titular = titular;
    this.numeroCuenta = 0;
    this.saldo = 0;
  }

  getTitular(){
    return this.titular;
  }
  setTitular(valor){
    this.titular = valor;
  }

  getNumeroCuenta(){
    return this.numeroCuenta;
  }
  setNumeroCuenta(valor){
    this.numeroCuenta = valor;
  }

  getSaldo(){
    return this.saldo;
  }
  setSaldo(valor){
    this.saldo = valor;
  }

  obtenerInformacion(){
    return `
      Propietario: ${this.titular}
      Numero de Cuenta: ${this.numeroCuenta}
      Saldo Actual: ${this.saldo}
    `
  }

  retiro(valor){
    if(this.saldo >= valor){
      this.saldo = this.saldo - valor;
    }else{
      console.log("No hay dinero para retirar");
    }
  }

  deposito(valor){
    this.saldo = this.saldo + valor;
  }
}

class CuentaAhorros extends CuentaBancaria {
  constructor(){
    super();
    //this.interesAnual = 33.09; //33,09
    this.cuentas = [];
  }

  aplicarInteres(tasaInteres){
    const intereses = super.getSaldo() * tasaInteres;
    super.setSaldo( super.getSaldo() + intereses );
  }

  agregarCuenta(cuentaNueva){
    this.cuentas.push(cuentaNueva);
  }

  listarCuentas(){
    return this.cuentas;
  }
}

class CuentaCorriente extends CuentaBancaria {
  constructor(){
    super();
    this.cuentas = [];
  }

  realizarTransferencia(numeroCuenta, valor){
    if(this.cuentas.length > 0){
      /*this.cuentas.forEach(cuenta => {
        if(cuenta.numeroCuenta === numeroCuenta){
          cuenta.saldo = cuenta.saldo + valor;

          this.cuentas.filter()
        }
      })*/

      const selectCuenta = this.cuentas.filter(cuenta => cuenta.numeroCuenta === numeroCuenta)[0];
      selectCuenta.saldo = selectCuenta.saldo + valor;
      this.cuentas.map(cuenta => {
        if(cuenta.numeroCuenta == numeroCuenta){
          cuenta = selectCuenta;
        }
      });
    }
  }

  agregarCuenta(cuentaNueva){
    if(cuentaNueva instanceof CuentaBancaria){
      this.cuentas.push(cuentaNueva);
      console.log("Cuenta Corriente agregada");
    }
  }

  listarCuentas(){
    return this.cuentas;
  }
}

/*const cuentaJuan = new CuentaBancaria("Juan Moriones");
cuentaJuan.setNumeroCuenta("4567523163");
cuentaJuan.setSaldo(12345);
const cuentaSebastian = new CuentaBancaria("Sebastian Moncayo");
cuentaSebastian.setNumeroCuenta("8632222");
cuentaSebastian.setSaldo(666666);

const cAhorros = new CuentaAhorros();
cAhorros.agregarCuenta(cuentaJuan);
cAhorros.agregarCuenta(cuentaSebastian);
console.log( cAhorros.listarCuentas() )

const cCorriente = new CuentaCorriente();
cCorriente.agregarCuenta(cuentaJuan);
cCorriente.realizarTransferencia("4567523163", 150);
cCorriente.agregarCuenta(cuentaSebastian)

console.log( cCorriente.listarCuentas() )*/

/*cuentaJuan.aplicarInteres(0.7);
console.log( cuentaJuan.obtenerInformacion() );
cuentaJuan.retiro(1000);
console.log( cuentaJuan.getSaldo() );*/


export {
  CuentaBancaria,
  CuentaAhorros,
  CuentaCorriente
}