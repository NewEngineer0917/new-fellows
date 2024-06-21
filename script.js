const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
let score = 0;
let timeLeft = 20;
let gameInterval;
let timerInterval;

circle.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    moveCircle();
});

function moveCircle() {
    const gameContainer = document.getElementById('game-container');
    const maxX = gameContainer.clientWidth - circle.clientWidth;
    const maxY = gameContainer.clientHeight - circle.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    circle.style.left = randomX + 'px';
    circle.style.top = randomY + 'px';
}

function startGame() {
    moveCircle();
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = 'Time: ' + timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    alert('Game Over! Your score is ' + score);
}

startGame();