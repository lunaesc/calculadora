const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)
function calcular(){
    const operador = txtOperador.value 

    if (operador == "+" || operador == "-" ||  operador == "*" || operador == "/" ){
        console.log("calculo posible")
    }else{
console.log("calculo imposible")
    }
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
