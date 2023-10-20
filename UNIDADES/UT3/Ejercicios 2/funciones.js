function factorial() {
    var numFact = document.getElementById("numFact").value;
    var resultado = 1;
    if (isNaN(numFact) || numFact < 0 || numFact % 1 != 0) {
        alert("El número introducido no es válido");
    } else {
        for (var i = 1; i <= numFact; i++) {
            resultado *= i;
        }
        document.getElementById("resultFact").value = resultado;
    }
}

function interValor() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');

    let temp = num1.value;
    num1.value = num2.value;
    num2.value = temp;
}


function interReferencia() {
    let num1Obj = { value: parseFloat(document.getElementById('num1').value) };
    let num2Obj = { value: parseFloat(document.getElementById('num2').value) };

    let temp = num1Obj.value;
    num1Obj.value = num2Obj.value;
    num2Obj.value = temp;

    document.getElementById('num1').value = num1Obj.value;
    document.getElementById('num2').value = num2Obj.value;
}



  
