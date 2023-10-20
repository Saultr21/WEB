function ver_code(elementId, button) {

    var demoElement = document.getElementById(elementId);


    if (demoElement.textContent.trim() === "") {
        switch (elementId) {
            case 'UT1_1':
                demoElement.innerText =
                    `<body>
    <script>alert("Saúl Trujillo")</script>
</body>`;
                break;
            case 'UT1_2':
                demoElement.innerText =
                    `<script>
    function mensajeAlert(texto) {
        alert(texto);
    }
</script>
            
<body>
    <script>mensajeAlert("Saúl Trujillo");</script>
</body>`;
                break;
                case 'UT1_3':
                demoElement.innerText =
                    `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mysecondpage</title>
    <script type = "text/javascript" src=funcion.js> </script>
</head>
<body>
    <script>mensajeAlert("Saúl Trujillo");</script>
</body>`;
                break;

        }
    }

    // Cambiar el texto del botón y mostrar u ocultar el contenido
    if (demoElement.style.display === "none") {
        demoElement.style.display = "block";
        button.textContent = "Ocultar código";
    } else {
        demoElement.style.display = "none";
        button.textContent = "Mostrar código";
    }
}








