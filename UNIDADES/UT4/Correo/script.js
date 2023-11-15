document.getElementById('formularioCorreo').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let correo = document.getElementById('correo').value;
    let expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let mensajeElement = document.getElementById('mensaje'); 

    if (!expresionRegular.test(correo)) {
        mensajeElement.innerText = 'Correo inválido';
        mensajeElement.style.color = "red";
    } else {
        mensajeElement.innerText = 'Correo válido';
        mensajeElement.style.color = "green";
    }
});
