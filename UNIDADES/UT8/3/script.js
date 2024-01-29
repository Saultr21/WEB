// Cookies.js

function grabarCookie(nombre, valor, diasExpiracion) {
    let fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + diasExpiracion);
    let valorCookie = encodeURIComponent(valor) + ((diasExpiracion == null) ? "" : "; expires=" + fechaExpiracion.toUTCString());
    document.cookie = nombre + "=" + valorCookie;
}

function leerCookie(nombre) {
    let nombreCookie = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreCookie) == 0) {
            return decodeURIComponent(cookie.substring(nombreCookie.length, cookie.length));
        }
    }
    return null;
}

function borrarCookie(nombre) {
    grabarCookie(nombre, "", -1);
}



  