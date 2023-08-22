const options = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const gameUpdates = document.querySelector('.game-updates');
const resetButton = document.querySelector('.reset-button');
const choiceButtons = document.querySelectorAll('.btn');

// Add event listener to choice buttons 
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        playGame(userChoice);
    });
});

resetButton.addEventListener('click', resetGame);

function updateScore() {
    playerScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    gameUpdates.textContent = "Game Starting...";
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(userChoice) {
    if (userScore === 5 || computerScore === 5) {
        gameUpdates.textContent = "Game over! Press the Reset Button to play again.";
        return;
    }

    const computerChoice = getComputerChoice();
    const result = getWinner(userChoice, computerChoice);

    gameUpdates.textContent = `You chose ${userChoice.toUpperCase()}. Computer chose ${computerChoice.toUpperCase()}. ${result.toUpperCase()}`;
    updateScore();

    if (userScore === 5 || computerScore === 5) {
        gameUpdates.textContent += ' Game over!';
    }
}

function getWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
        userScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer Wins!'
    }
}