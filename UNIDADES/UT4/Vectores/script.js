let vector = [];

window.onload = function() {
    mostrarVector();
};

function agregarElemento() {
    let elemento = document.getElementById("nuevoElemento").value;
    
    if(elemento) {
        vector.push(isNaN(elemento) ? elemento : Number(elemento));
        document.getElementById("nuevoElemento").value = "";
        mostrarVector();
    }
}

function mostrarVector() {

    document.getElementById("vectorDesordenado").innerText = JSON.stringify(vector);
    let vectorOrdenado = [...vector].sort(comparar);
    document.getElementById("vectorOrdenado").innerText = JSON.stringify(vectorOrdenado);
    let elementosReves = vectorOrdenado.map(elemento => elemento.toString().split('').reverse().join(''));
    document.getElementById("elementosReves").innerText = JSON.stringify(elementosReves);
}


function comparar(a, b) {
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    return a.localeCompare(b, 'es', {numeric: true});
}
