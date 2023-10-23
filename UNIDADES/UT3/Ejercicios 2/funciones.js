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

function factorialRecur() {
    var numFact = document.getElementById("numFactRecur").value;
    numFact = parseInt(numFact, 10);
  
    function factorial(num) {
      if (num < 0 || num % 1 !== 0) {
        return null;
      } else if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
    if (isNaN(numFact)) {
      alert("El número introducido no es válido");
    } else {
      var resultado = factorial(numFact);
      if (resultado !== null) {
        document.getElementById("resultFactRecur").value = resultado;
      } else {
        alert("El número introducido no es válido");
      }
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

function informacion(nombre, localidad = "LAS PALMAS DE G.C.", valor = 100) {
    let valores = "";
    valores = `${nombre}, ${localidad}, ${valor}`;
    document.getElementById("info").value = valores;
  }


  
