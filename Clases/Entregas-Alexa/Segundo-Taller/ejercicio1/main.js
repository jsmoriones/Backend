import {
  CuentaBancaria,
  CuentaAhorros,
  CuentaCorriente
} from "./index1.js";

const enviarCuenta = document.querySelector("#enviarCuenta");
const listarCuentas = document.querySelector("#listarCuentas");
const contenedorDeValores = document.querySelector("#contenedorDeValores");
const contenedorCuentaCorriente = document.querySelector("#contenedorCuentaCorriente");
const contenedorCuentaAhorros = document.querySelector("#contenedorCuentaAhorros");

console.log(
contenedorCuentaCorriente,
contenedorCuentaAhorros
)


const cuentaAhorros = new CuentaAhorros();
const cuentaCorriente = new CuentaCorriente();
enviarCuenta.addEventListener("click", function(e) {
  e.preventDefault();
  const titularCuenta = document.querySelector("#titularCuenta").value;
  const numeroCuenta = document.querySelector("#numeroCuenta").value;
  const saldoInicial = document.querySelector("#saldoInicial").value;
  const radioCuenta = document.querySelector('input[name="default-radio"]:checked').value;

  if(radioCuenta == "ahorros"){
    const cuentaUsuario = new CuentaBancaria(titularCuenta);
    cuentaUsuario.setNumeroCuenta(numeroCuenta);
    cuentaUsuario.setSaldo(saldoInicial);
    cuentaAhorros.agregarCuenta(cuentaUsuario);
  }else if(radioCuenta == "corriente"){
    const cuentaUsuario = new CuentaBancaria(titularCuenta);
    cuentaUsuario.setNumeroCuenta(numeroCuenta);
    cuentaUsuario.setSaldo(saldoInicial);
    cuentaCorriente.agregarCuenta(cuentaUsuario);
  }

  



})

listarCuentas.addEventListener("click", function(e){
  e.preventDefault();
  /*console.log( cuentaAhorros.listarCuentas() );
  console.log( cuentaCorriente.listarCuentas() );*/
  
  if(cuentaAhorros.listarCuentas().length > 0){
    const cuentas = cuentaAhorros.listarCuentas();
    contenedorCuentaAhorros.innerHTML = ""
    cuentas.map(cuenta => {
      contenedorCuentaAhorros.innerHTML += `
        <div class="p-2 bg-zinc-400 mb-2 rounded-lg">
          <p class="text-slate-700 text-md">Propietario de la Cuenta: <span class="font-bold">${cuenta.titular}</span></p>
          <p class="text-slate-700 text-md">Número de la Cuenta: <span class="font-bold">${cuenta.numeroCuenta}</span></p>
          <p class="text-slate-700 text-md">Número de la Cuenta: <span class="font-bold">${cuenta.saldo}</span></p>
        </div>
      `;
    })
  }
  if(cuentaCorriente.listarCuentas().length > 0){
    const cuentas = cuentaCorriente.listarCuentas();
    contenedorCuentaCorriente.innerHTML = ""
    cuentas.map(cuenta => {
      contenedorCuentaCorriente.innerHTML += `
        <div class="p-2 bg-zinc-400 mb-2 rounded-lg">
          <p class="text-slate-700 text-md">Propietario de la Cuenta: <span class="font-bold">${cuenta.titular}</span></p>
          <p class="text-slate-700 text-md">Número de la Cuenta: <span class="font-bold">${cuenta.numeroCuenta}</span></p>
          <p class="text-slate-700 text-md">Número de la Cuenta: <span class="font-bold">${cuenta.saldo}</span></p>
        </div>
      `;
    });
  }
  if(cuentaCorriente.listarCuentas().length == 0 && cuentaAhorros.listarCuentas().length == 0){
    contenedorDeValores.innerHTML = "<p class='bg-red-500 p-2 text-center text-white text-sm font-bold'>No hay Resultados que mostrar</p>"
  }
})