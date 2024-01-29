const imagenesSuperiores = document.querySelectorAll('.imagen-contenedor');

imagenesSuperiores.forEach(imagen => {
  imagen.addEventListener('mouseenter', () => {
    // Cambiar a las imágenes secundarias al pasar el ratón
    imagen.innerHTML = `<img src="../Imágenes/Rollover/Imagenes/secun-indir.gif" alt="Imagen 1 Secundaria">`;
  });

  imagen.addEventListener('mouseleave', () => {
    // Volver a las imágenes originales al retirar el ratón
    imagen.innerHTML = `<img src="../Imágenes/Rollover/Imagenes/prim-indir.gif" alt="Imagen 1">`;
  });

  imagen.addEventListener('click', () => {
    // Cerrar la ventana al hacer clic en la imagen secundaria superior
    if (imagen.id === 'imagenSuperiorIzquierda' || imagen.id === 'imagenSuperiorDerecha') {
      window.close();
    }
  });
});
