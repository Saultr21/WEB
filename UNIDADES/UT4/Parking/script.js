
 function actualizarHora() {
  let fechaActual = new Date();
  document.getElementById("fechaActual").textContent = fechaActual.toLocaleString();
}


function calcularPrecio() {
  let entrada = new Date(document.getElementById("fechayhora").value);
  let salida = new Date();
  let fee = 0.0;

 
  if (isNaN(entrada.getTime()) || entrada >= salida) {
    alert("Por favor, introduzca una fecha y hora de entrada válidas y anteriores a la fecha y hora actual.");
    return;
  }

  let diffHoras = Math.ceil((salida - entrada) / (1000 * 60 * 60));

 
  if (diffHoras > 0) {
    fee = 1.2; 
    if (diffHoras > 1) {
      fee += (diffHoras - 1) * 1.5; 
    }
  }

  
  let diaCompleto = Math.floor(diffHoras / 24);
  fee = Math.min(fee, 20 * diaCompleto + (fee - (20 * diaCompleto)));

  
  document.getElementById("precio").value = fee.toFixed(2) + " €";
}


setInterval(actualizarHora, 1000);
