let options = ["rock", "paper", "scissors"];

// Returns a random value in the options array
function getComputerChoice(choice) {
    indexValue = Math.floor(Math.random() * choice.length);
    return choice[indexValue].toString();
}



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
        console.log(`Computer chose ${computerInput} and you entered ${playerInput}`);
        console.log('You loose! Rock beats scissors.');
        console.log('Computer wins!');
    } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        console.log(`Computer chose ${computerInput} and you entered ${playerInput}`);
        console.log('You loose! Scissors beats paper.')
        console.log('Computer wins!');
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log(`Computer chose ${computerInput} and you entered ${playerInput}`);
        console.log('You loose! Paper beats rock.');
        console.log('Computer wins!');
    } else {
        console.log('Something went wrong');
    }
}

let playerInput= prompt('Enter your choice (rock, paper or scissor): ').toString();
let computerInput = getComputerChoice(options).toString();

function game() {
    for(let i = 0; i < 5; i++) {
        playRound(playerInput, computerInput);
   }
}

game();