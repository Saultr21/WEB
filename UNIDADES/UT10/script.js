let moveDirection = 1; // 1 para mover hacia la derecha, -1 para mover hacia la izquierda
let animationId;

function moverImagen() {
  const image = document.getElementById('movableImage');

  function move() {
    // Obtener la posición actual de la imagen
    const currentPosition = parseInt(window.getComputedStyle(image).left);

    // Definir la cantidad de píxeles que se moverá la imagen en cada paso
    const moveAmount = 2;

    // Calcular la nueva posición
    const newPosition = currentPosition + moveDirection * moveAmount;

    // Cambiar la posición de la imagen
    image.style.left = newPosition + 'px';

    // Cambiar la dirección y voltear la imagen al llegar al final
    const containerWidth = document.querySelector('.container').offsetWidth;
    if (newPosition >= containerWidth - image.width || newPosition <= 0) {
      moveDirection *= -1;
      image.classList.toggle('inverted');
    }

    // Continuar la animación
    animationId = requestAnimationFrame(move);
  }

  // Iniciar la animación
  move();
}

function situarImagen() {
  const image = document.getElementById('movableImage');
  
  // Restaurar la posición inicial y dirección
  image.style.left = '0px';
  moveDirection = 1;

  // Detener la animación actual, si la hay
  cancelAnimationFrame(animationId);

  // Restaurar la clase invertida
  image.classList.remove('inverted');
}

