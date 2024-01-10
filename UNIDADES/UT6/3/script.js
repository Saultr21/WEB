document.addEventListener('DOMContentLoaded', function () {
document.getElementById('buttonContainer').addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'BUTTON') {
        cambiarColor(event.target, 'orchid');
        
    }
});

document.getElementById('buttonContainer').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        cambiarColor(event.target, 'skyblue');
    }
});

document.getElementById('buttonContainer').addEventListener('dblclick', function (event) {
    if (event.target.tagName === 'BUTTON') {
        cambiarColorCopiar(event.target, 'red');
    }
});

function cambiarColor(button, color) {
    if (button.style.backgroundColor !== 'red') {
        button.style.backgroundColor = color;
        document.getElementById("span" + button.id.slice(-1)).style.backgroundColor = color;
    }
}

function cambiarColorCopiar(button, color) {
    if (button.style.backgroundColor !== 'red') {
        button.style.color = 'black';
        button.style.backgroundColor = color;
        document.getElementById("output").value += document.getElementById("span" + button.id.slice(-1)).innerHTML.trim() + ' ';
        document.getElementById("span" + button.id.slice(-1)).style.backgroundColor = 'coral';
        button.disabled = true;
        button.style.cursor = 'default';
    }
}
});