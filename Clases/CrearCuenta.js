class CrearCuenta{
    constructor(numeroCuenta, titular){
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this._saldoInicial = 0; //con guin bajo lo declaramos como privado
    }
    set saldoInicial(valor){
        //typeof valor === "number"
        if(valor > 0 && typeof valor === "number"){
            this._saldoInicial = valor;
        }
    }
    get saldoInicial(){
        return this._saldoInicial;
    }

    retirar(cantidad){
        if( cantidad > 0 && typeof cantidad === "number"){
            if(cantidad <= this._saldoInicial){
                this._saldoInicial -= cantidad;
            }
        }
    }

    depositar(cantidad){
        if( cantidad > 0 && typeof cantidad === "number"){
            this._saldoInicial += cantidad;
        }
    }

    informacion(){
        console.log(`
            -------Datos de la Cuenta-------
            Número de Cuenta: ${this.numeroCuenta}
            Titular de la Cuenta: ${this.numeroCuenta}
            Saldo Total: ${this._saldoInicial}
        `);        
    }
}

let cuentajuan = new CrearCuenta("5664654981231", "Juan");
cuentajuan.informacion();
cuentajuan.depositar(2000);
cuentajuan.informacion();
cuentajuan.retirar(800);
cuentajuan.informacion();