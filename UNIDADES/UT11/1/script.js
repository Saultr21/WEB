document.addEventListener('DOMContentLoaded', function () {


  function prepararPizza() {
      // Obtener los ingredientes seleccionados
      const ingredientesCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const ingredientesSeleccionados = Array.from(ingredientesCheckboxes).map(checkbox => checkbox.value);

      // Obtener el tipo de masa seleccionado
      const tipoMasaRadios = document.querySelectorAll('input[name="tipoMasa"]:checked');
      const tipoMasaSeleccionado = tipoMasaRadios.length > 0 ? tipoMasaRadios[0].value : '';

      // Mostrar el resultado
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `<p>Ingredientes: ${ingredientesSeleccionados.join(", ")}</p>`;
      resultadoDiv.innerHTML += `<p>Tipo de masa: ${tipoMasaSeleccionado}</p>`;
  }

  const botonPrepararPizza = document.querySelector('.btn-light');
  botonPrepararPizza.addEventListener('click', prepararPizza);
});
