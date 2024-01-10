let tiempo;
let contadorAciertos = 0;
let contadorIntentos = 0;
function moverBoton() {
    clearTimeout(tiempo);

    tiempo = setTimeout(() => {
        const button = document.getElementById("boton");
        const container = document.getElementById("divBoton");

        const maxWidth = container.clientWidth - button.clientWidth;
        const maxHeight = container.clientHeight - button.clientHeight;

        const newPositionX = Math.floor(Math.random() * maxWidth);
        const newPositionY = Math.floor(Math.random() * maxHeight);

        button.style.left = newPositionX + "px";
        button.style.top = newPositionY + "px";

        contadorIntentos+= 1;
        let intentos = document.getElementById("intentos");
        intentos.innerHTML = "Intentos: " + contadorIntentos;
    },
    250); // retardo
}

function añadirPunto() {
    contadorAciertos+=1;
    let aciertos = document.getElementById("aciertos");
    aciertos.innerHTML = "Aciertos: " + contadorAciertos;
    }

