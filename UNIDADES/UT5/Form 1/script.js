const datos = [];
let indiceSeleccionado = -1; // Variable global para almacenar el índice seleccionado

function agregar(event) {
    event.preventDefault();
    const apellidos = document.getElementById('apellidos').value;
    const nombre = document.getElementById('nombre').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const email = document.getElementById('email').value;
    const llegada = document.getElementById('llegada').value;

    // Obtener valores de los checkboxes
    const audiovisual = document.getElementById('audiovisual').checked ? "Material audiovisual" : "";
    const textos = document.getElementById('textos').checked ? "Textos electrónicos" : "";
    const libros = document.getElementById('libros').checked ? "Libros de texto" : "";

    // Filtrar los intereses seleccionados
    const intereses = [audiovisual, textos, libros].filter(interes => interes !== "");

    // Crear un objeto con todos los datos
    const nuevaLinea = {
        apellidos,
        nombre,
        sexo,
        email,
        llegada,
        intereses: intereses.length > 0 ? intereses : ["Ninguno"]
    };

    // Añadir el objeto al array
    datos.push(nuevaLinea);

    // Actualizar la lista de datos
    actualizarLista();
    // Resetear formulario
    document.getElementById("formulario").reset();
}

function visualizarDatosSeleccionado() {
    // Mostrar la información completa en un alert solo si hay una línea seleccionada
    if (indiceSeleccionado !== -1) {
        const lineaSeleccionada = datos[indiceSeleccionado];
        const mensaje = `
         Nombre: ${lineaSeleccionada.nombre}
         Apellidos: ${lineaSeleccionada.apellidos}
         Sexo: ${lineaSeleccionada.sexo}
         Email: ${lineaSeleccionada.email}
         Cómo llegó hasta aquí: ${lineaSeleccionada.llegada}
         Intereses: ${lineaSeleccionada.intereses.join(", ")}
     `;
        alert(mensaje);
    }
    // Si no hay datos 
    else if (datos.length === 0) {
        alert('No hay datos para visualizar.');
        return;
    }
    // Si no hay una línea seleccionada
    else {
        alert("Selecciona una línea para visualizar.");
    }
}

function eliminar() {
    // Confirmar la eliminación y proceder si el usuario acepta
    if (indiceSeleccionado !== -1 && confirm('¿Estás seguro de que deseas eliminar esta línea?')) {
        // Eliminar la línea del array
        datos.splice(indiceSeleccionado, 1);

        // Reiniciar el índice seleccionado
        indiceSeleccionado = -1;

        // Actualizar la lista de datos
        actualizarLista();
    }
    // Si no hay datos
    else if (datos.length === 0) {
        alert('No hay datos para eliminar.');
        return;
    }
    // Si no hay una línea seleccionada
    else {
        alert('Selecciona una línea para eliminar.');
    }
}


function actualizarLista() {
    const lista = document.getElementById('listaDatos');

    // Limpiar la lista
    lista.innerHTML = '';

    // Agregar cada elemento a la lista
    datos.forEach((linea, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${linea.nombre} ${linea.apellidos} - ${linea.email}`;
        listItem.onclick = () => seleccionar(index);

        // Resaltar la opción seleccionada
        if (index === indiceSeleccionado) {
            listItem.classList.add('seleccionado');
        }

        lista.appendChild(listItem);
    });

    // Mostrar la lista solo si hay datos
    lista.style.display = datos.length > 0 ? 'block' : 'none';
}


function seleccionar(index) {
    // Si se hace clic en la misma opción nuevamente, deseleccionar
    if (indiceSeleccionado === index) {
        indiceSeleccionado = -1;
    } else {
        // Actualizar el índice seleccionado
        indiceSeleccionado = index;
    }
    // Actualizar la lista
    actualizarLista();
}
