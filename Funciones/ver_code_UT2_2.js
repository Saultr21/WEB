function ver_code(elementId, button) {
    // Obtener el elemento <p> por su ID
    var demoElement = document.getElementById(elementId);

    // Cambiar el contenido del elemento <p> según el ID
    if (demoElement.textContent.trim() === "") {
        switch (elementId) {
            case 'UT2.2_1':
                demoElement.innerText =
                    `<div class="form-group">
    <label for="nombre-input">Tu Nombre:</label>
    <input type="text" class="form-control" id="nombre-input">
</div>
    <div class="form-group mt-3">
        <label for="mensaje-output">Mensaje:</label>
        <div id="mensaje-output" class="border"></div>
    </div>
    <button class="btn btn-primary" onclick="saludar()">Saludar</button>
</div>
</section>
<script>
    function saludar() {
        const nombreInput = document.getElementById("nombre-input");
        const mensajeOutput = document.getElementById("mensaje-output");
        const nombre = nombreInput.value;
        const mensaje = \`<b>Hola \${nombre}</b>, yo soy PENTIUM 4\`;
        mensajeOutput.textContent = mensaje;
    }
</script>`;
                break;
            case 'UT2.2_2':
                demoElement.innerText = `function adivinarNumero(){
// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Inicializar el número de intentos a 1
let intentos = 1;
// Pedir al usuario que adivine el número
let numeroUsuario = prompt("Adivina el número (entre 1 y 100):");
// Mientras el usuario no adivine el número y no haya superado el límite de intentos                    
while (numeroUsuario !== null && parseInt(numeroUsuario) !== numeroAleatorio && intentos < 6) {
    if (!isNaN(numeroUsuario)) {
        // Incrementar el número de intentos si el número es válido
        intentos++;
      }
      // Comprobar si el número del usuario es mayor o menor que el número aleatorio
      if (isNaN(numeroUsuario)) {
        numeroUsuario = prompt("Por favor, introduce un número válido (entre 1 y 100):");
      } else if (numeroUsuario > numeroAleatorio) {
        numeroUsuario = prompt("El número es menor. Introduce otro número:");
      } else {
        numeroUsuario = prompt("El número es mayor. Introduce otro número:");
      }
    }
// Si el usuario adivinó el número, mostrar el número de intentos
    if (parseInt(numeroUsuario) === numeroAleatorio) {
        alert(\`¡Felicidades! Adivinaste el número en \${intentos} intentos.\`);
    } else {
// Si el usuario no adivinó el número en el límite de intentos, mostrar el número aleatorio
        alert(\`Lo siento, no adivinaste el número en \${intentos} intentos. El número era \${numeroAleatorio}.\`);
            }}`
                break;
            // Agrega más casos según sea necesario para otros ejercicios
            case 'UT2.2_3':
                demoElement.innerText = `function generarNumeros(){
//Con Set evitamos que se guarden numeros repetidos ya que no lo permite
const numerosGenerados = new Set();
while (numerosGenerados.size < 6) {
    const numeroAleatorio = Math.floor(Math.random() * 49) + 1;
    numerosGenerados.add(numeroAleatorio);
}
const numeros = Array.from(numerosGenerados);
const numerosGeneradosDiv = document.getElementById('numerosGenerados');
numerosGeneradosDiv.innerHTML = '<p>Números generados: ' + numeros.join(', ') + '</p>';
// Event listener para el botón
const generarNumerosButton = document.getElementById('generarNumeros');
generarNumerosButton.addEventListener('click', generarNumeros);`
                break;
      
    
            case 'UT2.2_4':
                demoElement.innerText = `function seguirPagina(){
    var resultado = confirm("¿Deseas continuar en esta página?\n
    Al pulsar Aceptar continuarás en esta página. Si le das a Cancelar serás redirigido a la página inicial");
    // Comprobar la respuesta del usuario
    if (resultado === false) {
        // Si el usuario hace clic en "Cancelar", redirigir a la página principal
        window.location.href = "../../../pagina_principal.html"; // Cambia "pagina_principal.html" por la URL de tu página principal
    }
};`
        break;
        case 'UT2.2_5':
                demoElement.innerText = `function tryNumero() {
let valor = prompt("Introduce un número:");
try {
    if (isNaN(valor)) {
        throw new Error("El valor introducido no es un número");
    } else if (valor > 10) {
        throw new Error("El valor introducido es mayor que 10");
    } else if (valor < 5) {
        throw new Error("El valor introducido es menor que 5");
    } else {
        alert("El valor introducido es válido");
    }
} catch (error) {
    alert(error.message);
    }
}`
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








