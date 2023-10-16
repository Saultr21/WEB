function ver_code(elementId, button) {
    // Obtener el elemento <p> por su ID
    var demoElement = document.getElementById(elementId);

    // Cambiar el contenido del elemento <p> según el ID
    if (demoElement.textContent.trim() === "") {
        switch (elementId) {
            case 'UT3.1_1':
                demoElement.innerText =
`function capturarResultado() {
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
}`;
                break;
            case 'UT3.1_2':
                demoElement.innerText = 
`function incrementarNumero() {
    let numeroActual = parseInt(document.getElementById("resultado").innerText);
    let numeroIncrementado = numeroActual + 1;
    document.getElementById("resultado").innerText = numeroIncrementado;
}`
                    break;
            case 'UT3.1_3':
                demoElement.innerText = 
`function procesarValores() {
    let a = parseFloat(document.getElementById('numero1').value);
    let b = parseFloat(document.getElementById('numero2').value);
    if (a > b) {
        alert("El primer valor es mayor que el segundo");
    } else {
        document.getElementById("output2").innerText = "La suma de los valores es: " + (a + b);
    }
}`
                break;
            // Agrega más casos según sea necesario para otros ejercicios
            case 'UT3.1_4':
                demoElement.innerText = 
`function addNumbers(){
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

result = 0;

// Mostrar el valor de 'result' antes de llamar a 'addNumbers'
alert("Valor de 'result' antes de llamar a 'addNumbers': " + result);

sum = addNumbers();

// Mostrar el valor de 'result' después de llamar a 'addNumbers'
alert("Valor de 'result' después de llamar a 'addNumbers': " + result);
`
                break;
                case 'UT2.1_4':
                demoElement.innerText = `<script>
    let contenido;
    contenido = prompt("Introduce algo");
    if (contenido === null || contenido === "") {
        document.write("Hola");
    } else {
     document.write(contenido);
    }
</script>`
                break;
                case 'UT2.1_5':
                demoElement.innerText = `<script>
    let N1, N2;
    N1 = parseInt(prompt("Primer número", ""));
    N2 = parseInt(prompt("Segundo número", ""));
    (N1 > N2 ? document.write(N1 + " > " + N2) : document.write(N2 + " > " + N1));
</script>`
                break;
                case 'UT2.1_6':
                demoElement.innerText = `<script>
    let contador;
    for(contador = 1; contador <= 6; contador++) {
        document.write("<h\${contador}>Encabezado de nivel \${contador}</h\${contador}>"); 
    }
</script>`
                break;
                case 'UT2.1_7':
                demoElement.innerText = `<script>
    let contador = 1;
    while (contador < 7) {
        document.write("<h\${contador}>Encabezado de nivel \${contador}</h\${contador}>");
        contador++;
    }
</script>`
                break;
        
                case 'UT2.1_8':
                demoElement.innerText = `<script>
    let valor = parseInt(prompt("Introduzca un número: "));
    let cont;
    for (cont = 0; cont <= valor; cont++) {
      document.write(cont + "<br>");
    }
        
    document.write("--------------------------------<br>")
        
    for (cont = valor; cont >= 0; cont--) {
        document.write(cont + "<br>");
    } 
</script>`
                break;
        
                case 'UT2.1_9':
                demoElement.innerText = `<script>
    let valor = parseInt(prompt("Introduzca un número: "));
    let cont = 0;
    while (cont <= valor) {
        document.write(cont + "<br>");
        cont++;
    }
        
    document.write("--------------------------------<br>")
        
    while (valor >= 0) {
        document.write(valor + "<br>");
        valor--;
    }
</script>`
                break;
        
                case 'UT2.1_10':
                demoElement.innerText = `<script>
    for (let i = 1; i <= 50; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += i;
        }
        document.write(str + "<br>");
    }
</script>`
                break;
        
                case 'UT2.1_11':
                demoElement.innerText = `<script>
    let piramide = "";
    for (let i = 1; i <= 50; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += j;
            if (j < i) {
                fila += " ";
            }
        }
        piramide += fila + "<br>";
    }
    document.write(piramide);
</script>`
                break;
        
        }
    }

    // Cambiar el texto del botón y mostrar u ocultar el contenido
    if (demoElement.style.display === "none") {
        demoElement.style.display = "block";
        button.textContent = "Ocultar código";
    } else {
        demoElement.style.display = "none";
        button.textContent = "Mostrar código";
    }
}








