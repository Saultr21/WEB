function actualizarSubcategorias() {
    let categoria = document.getElementById("categoria").value;
    let subcategoriaSelect = document.getElementById("subcategoria");
    let subcategoriaLabel = document.getElementById("subcategoriaLabel");
    // Limpiar la lista de subcategorías
    subcategoriaSelect.innerHTML = "";

    // Añadir subcategorías según la categoría seleccionada
    switch (categoria) {
        case "Videos":
            agregarOpcion(subcategoria, "Humor");
            agregarOpcion(subcategoria, "Drama");
            agregarOpcion(subcategoria, "Ficción");
            agregarOpcion(subcategoria, "Otros");
            break;
        case "Discos":
            agregarOpcion(subcategoria, "Pop");
            agregarOpcion(subcategoria, "Rock");
            agregarOpcion(subcategoria, "Latino");
            agregarOpcion(subcategoria, "Otros");
            break;
        case "Juegos":
            agregarOpcion(subcategoria, "Simulador");
            agregarOpcion(subcategoria, "Rol");
            agregarOpcion(subcategoria, "Medieval");
            agregarOpcion(subcategoria, "Otros");
            break;
    }

    // Añadir el label en función de la categoría
    subcategoriaLabel.textContent = "Género de " + categoria;

    // Limpiar el resultado
    document.getElementById("resultado").value = "";


}

function agregarOpcion(select, opcion) {
    let option = document.createElement("option");
    option.text = opcion;
    select.add(option);
}

function mostrarTexto() {
    let categoria = document.getElementById("categoria").value;
    let subcategoria = document.getElementById("subcategoria").value;
    let resultadoTextarea = document.getElementById("resultado");

    // Actualizar el texto 
    resultadoTextarea.value = "Texto de " + categoria + " -> " + subcategoria;
}