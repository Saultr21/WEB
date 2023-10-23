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

function verForLoop() {
    const code = `
    const arrayFor = [10, 20, 30, 40, 50];
    let result = '';
    for (let i = 0; i < arrayFor.length; i++) {
      result += arrayFor[i] + '-';
    }
    `;
    const result = 'Bucle for: <br>' +
      '<pre>' + code + '</pre>' +
      'Diferencias, ventajas y desventajas:<br>' +
      '- Itera basándose en el índice.<br>' +
      '- Más control sobre el bucle.<br>' +
      '- Puede ser más complicado de escribir y entender.<br>' +
      '- Funciona en arrays, strings, y más.<br><br>' +
      'Ejemplo:<br>' +
      '10-20-30-40-50 ';
    document.getElementById('result').innerHTML = result;
  }

  function verForEachLoop() {
    const code = `
    const arrayForEach = [15, 25, 35, 45, 55];
    let result = '';
    arrayForEach.forEach(function(element) {
      result += element + ' ';
    });
    `;
    const result = 'Bucle forEach: <br>' +
      '<pre>' + code + '</pre>' +
      'Diferencias, ventajas y desventajas:<br>' +
      '- Itera a través de cada elemento del array.<br>' +
      '- Más fácil y limpio si solo necesitas acceder a cada elemento.<br>' +
      '- No se puede romper el bucle (break) o continuar al siguiente ciclo (continue).<br>' +
      '- Solo funciona en arrays.<br><br>' +
      'Ejemplo:<br>' +
      '15 25 35 45 55 ';
    document.getElementById('result').innerHTML = result;
  }

  function verForInLoop() {
    const code = `
    const objetoForIn = { a: 1, b: 2, c: 3 };
    let result = '';
    for (const propiedad in objetoForIn) {
      if (objetoForIn.hasOwnProperty(propiedad)) {
        result += propiedad + ': ' + objetoForIn[propiedad] + '<br>';
      }
    }
    `;
    const result = 'Bucle for...in: <br>' +
      '<pre>' + code + '</pre>' +
      'Diferencias, ventajas y desventajas:<br>' +
      '- Itera a través de las propiedades de un objeto.<br>' +
      '- No está garantizado que recorra las propiedades en un orden específico.<br>' +
      '- Puede recorrer propiedades no deseadas (necesita usar hasOwnProperty para verificar).<br>' +
      '- Funciona en objetos.<br><br>' +
      'Ejemplo:<br>' +
      'a: 1<br>b: 2<br>c: 3';
    document.getElementById('result').innerHTML = result;
  }

  function verForOfLoop() {
    const code = `
    const arrayForOf = [5, 10, 15, 20, 25];
    const stringForOf = 'Hola';
    let result = '';
    for (const valor of arrayForOf) {
      result += valor + ' ';
    }
    result += '<br>';
    for (const caracter of stringForOf) {
      result += caracter + ' ';
    }
    `;
    const result = 'Bucle for...of: <br>' +
      '<pre>' + code + '</pre>' +
      'Diferencias, ventajas y desventajas:<br>' +
      '- Itera a través de los valores de un objeto iterable (como un array o string).<br>' +
      '- No puede acceder directamente a las propiedades del objeto.<br>' +
      '- Más limpio y directo para iterar sobre valores.<br>' +
      '- Funciona en objetos iterables.<br><br>' +
      'Ejemplo con array:<br>' +
      '5 10 15 20 25 <br>' +
      'Ejemplo con string:<br>' +
      'H o l a ';
    document.getElementById('result').innerHTML = result;
  }