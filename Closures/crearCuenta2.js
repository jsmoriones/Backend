function crearCuenta(valorInicial){
    let saldo = valorInicial;

    return {
        depositar: function(cantidad){
            if(cantidad > 0){
                saldo += cantidad;
                console.log(`Depositaste ${cantidad} tu saldo actual es: ${saldo}`);
            }else{
                console.log("Cero no es un valor correcto")
            }
        },
        retirar: function(cantidad){
            if(saldo > cantidad && cantidad > 0){
                saldo -= cantidad;
                console.log(`Retiraste ${cantidad} tu saldo actual es: ${saldo}`);
            }else{
                console.log(`El valor: ${cantidad} es superior a tu saldo actual`)
            }
        },
        verCuenta: function(){
            console.log("Saldo Actual ", saldo);
            
        }
    }
}

const cuentaJuan = crearCuenta(100);

cuentaJuan.depositar(50);
cuentaJuan.retirar(30);
cuentaJuan.verCuenta();