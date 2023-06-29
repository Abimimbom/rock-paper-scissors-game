let options = ["rock", "paper", "scissors"];

// Returns a random value from above array
// which will serve as the computers choice against player.
function getComputerChoice(choice) {
    indexValue = Math.floor(Math.random() * choice.length);
    return choice[indexValue].toString();
}

// Allows user to play 5 rounds in succession
function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = window.prompt('Enter your choice (rock, paper or scissor): ');
        let computerInput = getComputerChoice(options).toString();

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection || computerSelection === playerSelection) {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('It\'s a tie! Try Again!');
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('You win! Rock beats scissors.');
                console.log('Player wins!');
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('You win! Scissors beat paper.');
                console.log('Player wins!');
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('You win! Paper beats rock.');
                console.log('Player wins!');
            } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('You loose! Rock beats scissors.');
                console.log('Computer wins!');
            } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('You loose! Scissors beats paper.')
                console.log('Computer wins!');
            }
            else if (computerSelection === 'paper' && playerSelection === 'rock') {
                console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
                console.log('You loose! Paper beats rock.');
                console.log('Computer wins!');
            } else {
                console.log('Something went wrong');
            }
        }

        playRound(playerInput.toLowerCase(), computerInput.toLowerCase());
   }
}

game();