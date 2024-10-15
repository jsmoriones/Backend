function crearCuenta(saldoDisponible){
    let saldo = saldoDisponible;
    
    function incrementar(cantidad){
        if(cantidad > 0){
            saldo += cantidad;
        }else{
            console.log("Cero no es un valor correcto")
        }
        console.log(`Incrementaste ${cantidad} tu saldo actual es: ${saldo}`);
        return saldo;
    }

    function decrementar(cantidad){
        if(saldo > cantidad && cantidad > 0){
            saldo -= cantidad;
        }else{
            console.log(`El valor: ${cantidad} es superior a tu saldo actual`)
        }
        console.log(`Decrementaste ${cantidad} tu saldo actual es: ${saldo}`);
        return saldo;
    }

    function verSaldo(){
        console.log("Saldo Actual ", saldo);
        return saldo;
    }

    return {incrementar, decrementar, verSaldo};
}

const cuentaJuan = crearCuenta(200);

cuentaJuan.incrementar(100);
cuentaJuan.decrementar(50);
cuentaJuan.verSaldo();