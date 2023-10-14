function saludar() {
  const nombreInput = document.getElementById("nombre-input");
  const mensajeOutput = document.getElementById("mensaje-output");
  const nombre = nombreInput.value;
  const mensaje = `<b>Hola ${nombre}</b>, yo soy PENTIUM 4`;
  mensajeOutput.innerHTML = mensaje;
}

function adivinarNumero() {
  // Generar un número aleatorio entre 1 y 100
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  // Inicializar el número de intentos a 1
  let intentos = 1;
  // Pedir al usuario que adivine el número
  let numeroUsuario = prompt("Adivina el número (entre 1 y 100):");
  // Mientras el usuario no adivine el número y no haya superado el límite de intentos
  while (numeroUsuario !== null && (isNaN(numeroUsuario) || parseInt(numeroUsuario) !== numeroAleatorio) && intentos < 6) {
    // Comprobar si el número del usuario es un número válido
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
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
  } else {
    // Si el usuario no adivinó el número en el límite de intentos, mostrar el número aleatorio
    alert(`Lo siento, no adivinaste el número en ${intentos} intentos. El número era ${numeroAleatorio}.`);
  }
}

function generarNumeros() {
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
  generarNumerosButton.addEventListener('click', generarNumeros);

}

function seguirPagina() {
  var resultado = confirm("¿Deseas continuar en esta página?\nAl pulsar Aceptar continuarás en esta página. Si le das a Cancelar serás redirigido a la página inicial");
  // Comprobar la respuesta del usuario
  if (resultado === false) {
    // Si el usuario hace clic en "Cancelar", redirigir a la página principal
    window.location.href = "../../../pagina_principal.html"; // Cambia "pagina_principal.html" por la URL de tu página principal
  }
};

function tryNumero() {
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
}
