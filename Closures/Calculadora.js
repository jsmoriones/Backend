//Realizar una calculadora, dos elementos que se suma se resta multiplicar y dividir

function Calculadora(num1, num2){
    let resultado;
    function suma(){
        resultado = num1 + num2;
        console.log(`El resultado de la suma es: ${resultado}`);
        
    }
    function resta(){
        resultado = num1 - num2;
        console.log(`El resultado de la resta es: ${resultado}`);
        
    }
    function multiplicacion(){
        resultado = num1 * num2;
        console.log(`El resultado de la multiplicacion es: ${resultado}`);
        
    }
    function division(){
        resultado = num1 / num2;
        console.log(`El resultado de la division es: ${resultado}`);        
    }

    return {
        suma,
        resta,
        multiplicacion,
        division
    }
}

const operacion1 = Calculadora(5,2); //Instancia

operacion1.division();
operacion1.suma();
operacion1.resta();
operacion1.multiplicacion();




/*function Calculadora(){
    return {
        suma: function(num1, num2){
            resultado = num1 + num2;
            console.log(`El resultado de la suma es: ${resultado}`);
            return resultado;
        },
        resta: function(num1, num2){
            resultado = num1 - num2;
            console.log(`El resultado de la resta es: ${resultado}`);
            return resultado;
        },
        multiplicacion: function(num1, num2){
            resultado = num1 * num2;
            console.log(`El resultado de la multiplicacion es: ${resultado}`);
            return resultado;
        },
        division: function(num1, num2){
            resultado = num1 / num2;
            console.log(`El resultado de la division es: ${resultado}`);
            return resultado;
        }
    }
}

const operacion1 = Calculadora();

operacion1.division(1000,5);
operacion1.suma(50,30);
operacion1.resta(100,85);
operacion1.multiplicacion(100,69);*/