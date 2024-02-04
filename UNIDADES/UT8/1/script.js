function abrirSelectorColores() {
    window.open("selectorColoresRGB.html", "Selector de Colores RGB", "width=400, height=300");
}

function cambiarColor() {
    const atributoSelect = document.getElementById("atributoSelect").value;
    const rojo = validarColor(document.getElementById("rojoInput").value);
    const verde = validarColor(document.getElementById("verdeInput").value);
    const azul = validarColor(document.getElementById("azulInput").value);

    const nuevoColor = `rgb(${rojo}, ${verde}, ${azul})`;


    if (atributoSelect === "backgroundColor") {
        window.opener.document.body.style.backgroundColor = nuevoColor;
    }
    

    if (atributoSelect === "color") {
        window.opener.document.body.style.color = nuevoColor;
    }

    if (atributoSelect === "a") {
        const enlaces = window.opener.document.querySelectorAll('a');
        enlaces.forEach(enlace => {
            enlace.style.color = nuevoColor;
        });
    }

    /* Por motivos de seguridad y privacidad no funciona
    if (atributoSelect === "a:visited") {
        const enlacesVisitados = window.opener.document.querySelectorAll('a:visited');
        enlacesVisitados.forEach(enlaceVisitado => {
            enlaceVisitado.style.color = nuevoColor;
        });
    }

    
    if (atributoSelect === "a:active") {
        const enlacesActivos = window.opener.document.querySelectorAll('a:active');
        enlacesActivos.forEach(enlaceActivo => {
            enlaceActivo.style.color = nuevoColor;
        });
    }*/
}






function validarColor(valor) {
    let num = parseInt(valor, 10);
    num = isNaN(num) ? 0 : Math.min(Math.max(0, num), 255);
    return num;
}
