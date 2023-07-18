var numero = 24;

//console.log("Mi edad es : " + numero)
const miCostante = 3;


function saludar(nombre, edad, altura){
    console.log("hola, mi nombre es: " + nombre)
    console.log("y mi edad es: " + edad);
    console.log("y altura es: " + altura);


}
saludar("david", 24, 170)

function multiplicar(num1, num2){
    console.log("num1")
}

/*const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)

function calcular() {
    const operacion = txtOperacion.value
    const op1 = parsefloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/")
    {
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1/op2
                break;
        }
        pResultado.innerText = "=" + resultado
    }else{
        pResultado.innerText = "calculo imposible"
    }
    
}*/
