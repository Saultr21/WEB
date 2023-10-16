function capturarResultado() {
    let userAnswer = document.getElementById("userInput").value;
    let correct = verificarResultado(Number(userAnswer));
    
    if (correct) {
        document.getElementById("output").innerText = "¡Correcto!";
    } else {
        document.getElementById("output").innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}

function verificarResultado(answer) {
    const correctAnswer = 5 + 3;
    if (answer === correctAnswer) {
        return true;
    } else {
        return false;
    }
}

function incrementarNumero() {
    let numeroActual = parseInt(document.getElementById("resultado").innerText);
    let numeroIncrementado = numeroActual + 1;
    document.getElementById("resultado").innerText = numeroIncrementado;
}

function procesarValores() {
    let a = parseFloat(document.getElementById('numero1').value);
    let b = parseFloat(document.getElementById('numero2').value);
    if (a > b) {
        alert("El primer valor es mayor que el segundo");
    } else {
        document.getElementById("output2").innerText = "La suma de los valores es: " + (a + b);
    }
}

function addNumbers(){
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
    
}


