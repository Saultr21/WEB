let heads = 0;
let tails = 0;
let userWins = 0;
let userChoice = null;

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let caraBtn = document.querySelector(".cara-btn");
let cruzBtn = document.querySelector(".cruz-btn");
let gameStatus = document.querySelector("#game-status");

caraBtn.addEventListener("click", () => {
    caraBtn.classList.add("btn-selected");
    cruzBtn.classList.remove("btn-selected");
    userChoice = "cara";
});

cruzBtn.addEventListener("click", () => {
    cruzBtn.classList.add("btn-selected");
    caraBtn.classList.remove("btn-selected");
    userChoice = "cruz";
});

flipBtn.addEventListener("click", () => {
    
    if (userChoice === null) {
        alert("Por favor, elige cara o cruz antes de lanzar la moneda.");
        return;
    }
    gameStatus.textContent = "";
    coin.style.display = "block";
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(() => coin.style.animation = "spin-heads 3s forwards", 100);
        heads++;
    } else {
        setTimeout(() => coin.style.animation = "spin-tails 3s forwards", 100);
        tails++;
    }

    setTimeout(() => {
        // Check and update the game status after the animation finishes
        if (i && userChoice == "cara" || !i && userChoice == "cruz") {
            userWins++;
            gameStatus.textContent = "¡Ganaste!";
        } else {
            gameStatus.textContent = "Perdiste. ¡Inténtalo de nuevo!";
        }
        updateStats(); // Update the stats after the animation finishes
    }, 3000);

    disableButton();
});


function updateStats(){
    document.querySelector("#heads-count").textContent = `Cara: ${heads}`;
    document.querySelector("#tails-count").textContent = `Cruz: ${tails}`;
    document.querySelector("#user-score").textContent = `Victorias: ${userWins}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => flipBtn.disabled = false, 3000);
}

resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    userWins = 0;
    userChoice = null; 
    updateStats();

    caraBtn.classList.remove("btn-selected");
    cruzBtn.classList.remove("btn-selected");
    userChoice = null;
    gameStatus.textContent = "";
    coin.style.display = "none";
    document.querySelector(".container.border.d-flex.justify-content-center").style.display = "flex";
});

