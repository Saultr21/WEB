
let palabraSecreta = '';
let letrasErroneas = [];
let aciertos = [];
let maximoIntentos = 6;
let modoJuego = ''; // 'unJugador' o 'variosJugadores'


function pedirPalabraSecreta() {
  let modal = document.getElementById("modalPalabraSecreta");
  let span = document.getElementsByClassName("close")[0];

 
  modal.style.display = "block";


  span.onclick = function () {
    modal.style.display = "none";
  }


  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function establecerPalabraSecreta() {
  let input = document.getElementById("inputPalabraSecreta");
  palabraSecreta = input.value.toUpperCase();

  if (!palabraSecreta) {
    alert("No se ingresó ninguna palabra. Intenta de nuevo.");
    reiniciarJuego();
    return;
  }
  mostrarGuiones();
  let modal = document.getElementById("modalPalabraSecreta");
  modal.style.display = "none";
  generarTeclado();
  document.getElementById('letrasErroneas').textContent = '';
  document.getElementById('estadoJuego').innerHTML = 'Intentos fallidos: ' + letrasErroneas.length + ' de ' + maximoIntentos;

}


async function obtenerPalabrasDesdeJson() {
  try {
    const respuesta = await fetch('palabras.json');
    const datos = await respuesta.json();
    return datos.palabras;
  } catch (error) {
    console.error('Error al cargar las palabras desde el archivo JSON:', error);
    return [];
  }
}

async function iniciarJuego(modo) {
  modoJuego = modo;
  letrasErroneas = [];
  aciertos = [];
  if (modo === 'unJugador') {

    const palabras = await obtenerPalabrasDesdeJson();
    let indiceAleatorio = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[indiceAleatorio];
    generarTeclado();
    document.getElementById('letrasErroneas').textContent = '';
    document.getElementById('estadoJuego').innerHTML = 'Intentos fallidos: ' + letrasErroneas.length + ' de ' + maximoIntentos;
  } else {

    pedirPalabraSecreta();

  }
  palabraSecreta = palabraSecreta.toUpperCase();
  document.getElementById('imagenAhorcado').src = 'media/0.png';
  mostrarGuiones();
}

function generarTeclado() {
  const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  let botonesHTML = '';
  for (let letra of letras) {
    botonesHTML += `<button class="letra-boton m-1" id="letra${letra}" onclick="seleccionarLetra('${letra}')">${letra}</button>`;
  }
  document.getElementById('letras').innerHTML = botonesHTML;
}

function reiniciarJuego() {
  palabraSecreta = '';
  letrasErroneas = [];
  aciertos = [];
  modoJuego = '';
  document.getElementById('palabra').textContent = '';
  document.getElementById('letrasErroneas').textContent = '';
  document.getElementById('estadoJuego').textContent = '';
  document.getElementById('letras').innerHTML = '';
  var imagenAhorcado = document.getElementById('imagenAhorcado');
  if (imagenAhorcado) imagenAhorcado.src = '';
}


function mostrarGuiones() {
  let html = '';
  for (let letra of palabraSecreta) {
    html += aciertos.includes(letra) ? letra : '_';
    html += ' ';
  }
  document.getElementById('palabra').textContent = html.trim();
}

function seleccionarLetra(letra) {
  document.getElementById(`letra${letra}`).disabled = true;
  document.getElementById(`letra${letra}`).classList.add('letra-usada');

  if (palabraSecreta.includes(letra)) {
    if (!aciertos.includes(letra)) {
      aciertos.push(letra);
    }
  } else {
    if (!letrasErroneas.includes(letra)) {
      letrasErroneas.push(letra);
      document.getElementById('letrasErroneas').textContent = letrasErroneas.join(' ');
      actualizarImagenAhorcado(letrasErroneas.length);
    }
  }

  document.getElementById('estadoJuego').innerHTML = 'Intentos fallidos: ' + letrasErroneas.length + ' de ' + maximoIntentos;
  mostrarGuiones();
  verificarFinJuego();
}

function actualizarImagenAhorcado(numeroErrores) {
  if (numeroErrores <= maximoIntentos) {
    let imagenAhorcado = document.getElementById('imagenAhorcado');
    let nuevoSrc = `media/${numeroErrores}.png`;
    imagenAhorcado.src = nuevoSrc;
  }
}

function verificarFinJuego() {
  let ganado = palabraSecreta.split('').every(letra => aciertos.includes(letra));
  if (ganado) {
    setTimeout(function () {
      alert('¡Has ganado!');
      deshabilitarTeclado();
    }, 100); 
  } else if (letrasErroneas.length >= maximoIntentos) {
    setTimeout(function () {
      alert('¡Has perdido! La palabra era: ' + palabraSecreta);
      deshabilitarTeclado();
    }, 100);
  }
}


function deshabilitarTeclado() {
  const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  for (let letra of letras) {
    document.getElementById(`letra${letra}`).disabled = true;
    document.getElementById(`letra${letra}`).classList.add('letra-usada');
  }

}
