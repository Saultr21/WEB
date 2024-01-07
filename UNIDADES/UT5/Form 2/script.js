document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validateNombre()) {
            event.preventDefault();
            return;
        }

        if (!validateExpediente()) {
            event.preventDefault();
            return;
        }

        if (!validateApellido()) {
            event.preventDefault();
            return;
        }

        if (!validateApellido2()) {
            event.preventDefault();
            return;
        }

        if (!validateEdad()) {
            event.preventDefault();
            return;
        }

        if (!validateFechaPermiso()) {
            event.preventDefault();
            return;
        }

        if (!validateMatricula()) {
            event.preventDefault();
            return;
        }

        if (!validateImporte()) {
            event.preventDefault();
            return;
        }

        if (!validateMesExpiracion()) {
            event.preventDefault();
            return;
        }

        if (!validateAnioExpiracion()) {
            event.preventDefault();
            return;
        }


        if (!validar_tarjeta(document.getElementById("numero_tarjeta"), document.getElementById("tipo_tarjeta"))) {
            return;
        }

        // Si todo está bien, permitir el envío del formulario
        alert('Todo está correcto. Enviando formulario...');
    });
});

function validateNombre() {
    let nombre = document.getElementById('nombre').value;
    let regexNombre = /^[a-zA-Z]+$/;
    if (!regexNombre.test(nombre)) {
        alert('El nombre solo puede contener caracteres alfabéticos.');
        return false;
    }
    return true;
}

function validateExpediente() {
    let expediente = document.getElementById('expediente').value;
    if (expediente < 340000000000 || expediente > 349999999999) {
        alert('Número de expediente debe estar en el rango 340000000000 a 349999999999.');
        return false;
    }
    return true;
}

function validateApellido() {
    let apellido = document.getElementById('apellido').value;
    let regexApellido = /^[a-zA-Z]+$/;
    if (!regexApellido.test(apellido)) {
        alert('El primer apellido solo puede contener caracteres alfabéticos.');
        return false;
    }
    return true;
}

function validateApellido2() {
    let apellido2 = document.getElementById('apellido2').value;
    let regexApellido2 = /^[a-zA-Z]+$/;
    if (!regexApellido2.test(apellido2)) {
        alert('El segundo apellido solo puede contener caracteres alfabéticos.');
        return false;
    }
    return true;
}

function validateEdad() {
    let edad = document.getElementById('edad').value;
    if (edad < 18 || edad > 120) {
        alert('La edad debe estar en el rango 18 a 120.');
        return false;
    }
    return true;
}

function validateFechaPermiso() {
    return true;
}

function validateMatricula() {
    let matricula = document.getElementById('matricula').value;
    let regexMatricula = /^[0-9]{4}[BCDFGHJKLMNPQRSTVWXYZ]{1}[BCDFGHJKLMNPQRSTVWXYZ]{1}[BCDFGHJKLMNPQRSTVWXYZ]{1}$/;
    if (!regexMatricula.test(matricula)) {
        alert('Formato de matrícula no válido [0000AAA].');
        return false;
    }
    return true;
}

function validateImporte() {
    let importe = document.getElementById('importe').value;
    if (isNaN(importe) || importe <= 0) {
        alert('Importe debe ser un número entero o real positivo.');
        return false;
    }
    return true;
}



function validateMesExpiracion() {
    let mesExpiracion = document.getElementById('mesExpiracion').value;
    if (mesExpiracion < 1 || mesExpiracion > 12) {
        alert('El mes de expiración debe estar en el rango 1 a 12.');
        return false;
    }
    return true;
}

function validateAnioExpiracion() {
    let anioExpiracion = document.getElementById('anioExpiracion').value;
    if (anioExpiracion < 2001 || anioExpiracion > 2100) {
        alert('El año de expiración debe estar en el rango 2001 a 2100.');
        return false;
    }
    return true;
}

function es_numero(car) {
    var NUMEROS = "0123456789";
    return NUMEROS.indexOf(car) >= 0;
}

function crear_error() {
    this.mensaje = "";
    this.posicion = 0;
    this.rellenar = rellenar;
}

function rellenar(mensaje, posicion) {
    this.mensaje = mensaje;
    this.posicion = posicion;
    return false;
}

var error = new crear_error();

function comprobar_tarjeta_credito(contenido, tipo, error) {
    if (tipo != "")//se conoce el tipo
    {
        switch (tipo) {
            case "VISA":
                if (!(contenido.length == 13 || contenido.length == 16))
                    return error.rellenar("Numero incorrecto de digitos la tarjeta" +
                        " VISA tiene 13 o 16", contenido.length);
                if (contenido.substring(0, 1) != "4")
                    return error.rellenar("Las tarjetas VISA comienzan" +
                        " por el digito 4", 1);
                break;
            case "AMERICANEXPRESS":
                if (contenido.length != 15)
                    return error.rellenar("Numero incorrecto de digitos la tarjeta" +
                        " AMERICAN EXPRESS tiene 15", contenido.length);
                if (!(contenido.substring(0, 2) == "34" || contenido.substring(0, 2) == "37"))
                    return error.rellenar("Las tarjetas AMERICAN EXPRESS comienzan" +
                        " por los digitos 34 o 37", 1);
                break;
            case "MASTERCARD":
                if (contenido.length != 16)
                    return error.rellenar("Numero incorrecto de digitos la tarjeta" +
                        " MASTERCARD tiene 16", contenido.length);
                if (!(contenido.substring(0, 2) >= "51" && contenido.substring(0, 2) <= "55"))
                    return error.rellenar("Las tarjetas MASTERCARD comienzan" +
                        " por los digitos 51, 52, 53, 54 o 55", 1);
                break;
            case "DINERSCLUB":
                if (contenido.length != 14)
                    return error.rellenar("Numero incorrecto de digitos la tarjeta" +
                        " DINER'S CLUB tiene 14", contenido.length);
                if (!(contenido.substring(0, 3) >= "300" &&
                    contenido.substring(0, 3) <= "305") &&
                    !(contenido.substring(0, 2) == "36" ||
                        contenido.substring(0, 2) == "38"))
                    return error.rellenar("Las tarjetas DINER'S CLUB comienzan" +
                        " por los digitos 300, 301, 302, 303, 304, 305, 36 o 38", 1);
                break;
        }
    }
    else //no se conoce el tipo
    {
        if (contenido.length < 13 || contenido.length > 16)
            return error.rellenar("Numero incorrecto de digitos las tarjetas" +
                " de credito tienen entre 13 y 16 digitos", contenido.length);
    }
    //comprobaci�n del n�mero de tarjeta
    var sum1 = 0;
    var sum2 = 0;
    var impar = true;
    for (var i = (contenido.length - 1); i >= 0; i--) {
        if (!es_numero(contenido.charAt(i)))
            return error.rellenar("Las tarjetas de credito" +
                " solo contienen digitos", contenido.length);
        else if (impar) {
            sum1 += contenido.charAt(i) * 1;
        }
        else {
            var aux = contenido.charAt(i) * 2;
            if (aux >= 10)
                aux -= 9;
            sum2 += aux;
        }
        impar = (impar == true ? false : true);
    }
    //alert(sum1+sum2);
    if ((sum1 + sum2) % 10 != 0)
        return error.rellenar("No concuerda" +
            " el digito de control", contenido.length);
    return true;
}

function validar_tarjeta(elemento1, elemento2) {
    try {
        if (!comprobar_tarjeta_credito(elemento1.value,
            elemento2.value, error))
            throw new Error("ERROR: " + error.mensaje + " en la posicion " + error.posicion);
        return true;
    }
    catch (ex) {
        alert(ex.message);
        return false;
    }
}