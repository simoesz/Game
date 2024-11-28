
const startButton = document.getElementById("start-btn");
const gameArea = document.getElementById("game-area");
const targetCircle = document.getElementById("target-circle");
const scoreValue = document.getElementById("score-value");
const timerValue = document.getElementById("timer");

let score = 0;
let timer = 30;
let gameInterval;
let circleInterval;

function startGame() {
    console.log("Jogo iniciado!");
    score = 0;
    timer = 30;
    scoreValue.textContent = score;
    timerValue.textContent = timer;
    targetCircle.style.display = "block";
    moveTargetCircle();
    startTimer();
    startButton.disabled = true;
}
function startTimer() {
    gameInterval = setInterval(() => {
        timer--;
        timerValue.textContent = timer;
        if (timer <= 0) {
            clearInterval(gameInterval);
            clearInterval(circleInterval);
            alert("Fim de jogo! Sua pontuação final é " + score);
            startButton.disabled = false; 
        }
    }, 1000);
}

function moveTargetCircle() {
    circleInterval = setInterval(() => {
        const maxWidth = gameArea.offsetWidth - targetCircle.offsetWidth;
        const maxHeight = gameArea.offsetHeight - targetCircle.offsetHeight;

        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;

        targetCircle.style.left = `${randomX}px`;
        targetCircle.style.top = `${randomY}px`;

    }, 1000);
}
targetCircle.addEventListener("click", () => {
    score++;
    scoreValue.textContent = score;
    console.log("Círculo clicado! Pontuação: " + score);
});
startButton.addEventListener("click", () => {
    console.log("Botão Iniciar clicado!");
    startGame();
});

