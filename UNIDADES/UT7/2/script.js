function escribirMensaje() {
  let texto = document.getElementById('text-input').value;
  let contenedorSeleccionado = document.querySelector('input[name="container"]:checked').value;

  let iframe = contenedorSeleccionado === 'left' ? document.getElementById('left-iframe') : document.getElementById('right-iframe');
  iframe.contentWindow.postMessage(texto, '*');
}

function resetear() {
  document.getElementById('text-input').value = '';
  document.querySelectorAll('input[name="container"]').forEach(function (radio) {
    radio.checked = false;
  });

  document.getElementById('left-iframe').contentWindow.postMessage('', '*');
  document.getElementById('right-iframe').contentWindow.postMessage('', '*');
}

function mostrarNombresContenedores() {
  let nombreIzquierdo = "left-iframe";
  let nombreDerecho = "right-iframe";
  let nombreSuperior = "top-container";

  alert('Nombre del contenedor izquierdo: ' + nombreIzquierdo + '\n' +
    'Nombre del contenedor derecho: ' + nombreDerecho + '\n' +
    'Nombre del contenedor superior: ' + nombreSuperior);
}