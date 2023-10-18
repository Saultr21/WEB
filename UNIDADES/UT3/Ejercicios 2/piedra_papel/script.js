const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  resetButton = document.querySelector(".reset_btn"),
  userWinsCount = document.querySelector("#userWinsCount");

let victorias = 0;
let animationInProgress = false;

function rotateImages(element, imagesArray, count) {
  element.src = imagesArray[count % imagesArray.length];
}

function determineWinner(userChoice, cpuChoice) {
  const outcome = (3 + userChoice - cpuChoice) % 3;

  switch (outcome) {
    case 1:
      result.textContent = "Ganaste";
      victorias++;
      break;
    case 2:
      result.textContent = "Perdiste";
      break;
    default:
      result.textContent = "Empate";
      break;
  }

  userWinsCount.textContent = victorias;
}

resetButton.addEventListener('click', () => {
  victorias = 0;
  userWinsCount.textContent = 0;
  result.textContent = "";
  userResult.src = "./media/piedra.png"; // Volvemos a la imagen por defecto
  cpuResult.src = "./media/piedra.png";  // Volvemos a la imagen por defecto

  // Si quieres también puedes remover la clase 'active' de todas las imágenes
  optionImages.forEach(image => {
    image.classList.remove("active");
  });
});

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    if (animationInProgress) return;
    animationInProgress = true;

    image.classList.add("active");

    optionImages.forEach((image2, index2) => {
      if (index !== index2) image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    const userChoice = index;
    const cpuChoice = Math.floor(Math.random() * 3);
    const cpuImages = ["./media/piedra.png", "./media/papel.png", "./media/tijera.png"];

    userResult.src = cpuImages[0];
    cpuResult.src = cpuImages[0];

    let count = 0;
    let interval = setInterval(() => {
      rotateImages(userResult, cpuImages, count);
      rotateImages(cpuResult, cpuImages, count);
      count++;

      if (count >= 30) {
        clearInterval(interval);

        userResult.src = cpuImages[userChoice];
        cpuResult.src = cpuImages[cpuChoice];

        animationInProgress = false; // Reset the flag before determining the winner
        determineWinner(userChoice, cpuChoice);

        gameContainer.classList.remove("start");
      }
    }, 100);
  });
});

