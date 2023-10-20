function ver_code(elementId, button) {

    var demoElement = document.getElementById(elementId);


    if (demoElement.textContent.trim() === "") {
        switch (elementId) {
            case 'UT2.1_1':
                demoElement.innerText =
`let cadena1 = "Hola, ";
let cadena2 = "Mundo!";

let resultado = cadena1 + cadena2;

console.log(resultado);
document.write(resultado);`;
                break;
            case 'UT2.1_2':
                demoElement.innerText = `// Declara variables sin inicializar
let variable1;
let variable2;
let variable3;
    
// tipo de las variables sin inicializar
let tipoVariable1 = typeof variable1;
let tipoVariable2 = typeof variable2;
let tipoVariable3 = typeof variable3;
    
document.write("variable1 sin inicializar: " + tipoVariable1 + "<br>");
document.write("variable2 sin inicializar: " + tipoVariable2 + "<br>");
document.write("variable3 sin inicializar: " + tipoVariable3 + "<br>");
    
// Inicializa las variables con valores
variable1 = "Hola, mundo!";
variable2 = 42;
variable3 = true;
    
tipoVariable1 = typeof variable1;
tipoVariable2 = typeof variable2;
tipoVariable3 = typeof variable3;
    
document.write("variable1 después de la inicialización: " + tipoVariable1 + "<br>");
document.write("variable2 después de la inicialización: " + tipoVariable2 + "<br>");
document.write("variable2 después de la inicialización: " + tipoVariable3 + "<br>");`
                break;
            // Agrega más casos según sea necesario para otros ejercicios
            case 'UT2.1_3':
                demoElement.innerText = `let numero1;
let numero2;
    
numero1 = parseInt(prompt("Introduce el primer numero"));
numero2 = parseInt(prompt("Introduce el segundo numero"));
    
if (!isNaN(numero1) && !isNaN(numero2)){
    if (numero1 == numero2) {
        alert(numero1 + " Es igual que " + numero2);
    }
    if (numero1 < numero2) {
        alert(numero1 + " Es menor que " + numero2);
    }
    if (numero1 > numero2) {
        alert(numero1 + " Es mayor que " + numero2);
    }
}
else {
    if (isNaN(numero1)) {
        alert("El primer dato no es un número");
    }
    if (isNaN(numero2)) {
        alert("El segundo dato no es un número");
    }
}`
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








