const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");
const missesDisplay = document.getElementById("misses");
const gameArea = document.getElementById("gameArea");

let score = 0;
let misses = 0;
let gameOver = false;

function moveCircle() {
    if (gameOver) return;
    
    let maxX = gameArea.clientWidth - circle.clientWidth;
    let maxY = gameArea.clientHeight - circle.clientHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

circle.addEventListener("click", () => {
    if (gameOver) return;

    score++;
    scoreDisplay.textContent = score;
    moveCircle();
});

function missedClick() {
    if (gameOver) return;

    misses++;
    missesDisplay.textContent = misses;

    if (misses >= 3) {
        gameOver = true;
        alert(`Game Over! Your Score: ${score}`);
    }
}

gameArea.addEventListener("click", (event) => {
    if (event.target !== circle) {
        missedClick();
    }
});

setInterval(moveCircle, 1000);
moveCircle();
