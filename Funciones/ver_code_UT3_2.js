function ver_code(elementId, button) {

    var demoElement = document.getElementById(elementId);

    if (demoElement.textContent.trim() === "") {
        switch (elementId) {
            case 'UT3.2_3':
                demoElement.innerText =
`function factorial() {
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
}`;
                break;
            case 'UT3.2_4':
                demoElement.innerText = 
`function interValor() {
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








