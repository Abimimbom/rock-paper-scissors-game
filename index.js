const options = ["rock", "paper", "scissors"];

// Returns a random index (item) from above array
// which will serve as the computers choice against player.
function getComputerChoice(choice) {
    indexValue = Math.floor(Math.random() * choice.length);
    return choice[indexValue].toString();
}


// Allows user to play 5 rounds in succession
// function game() {
//     let playerInput = window.prompt('Enter your choice (rock, paper or scissor): ');
//     let computerInput = getComputerChoice(options).toString();

//     function playRound(playerSelection, computerSelection) {
//         if (playerSelection === computerSelection || computerSelection === playerSelection) {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('It\'s a tie! Try Again!');
//         } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('You win! Rock beats Scissors.');
//             console.log('Player wins!');
//         } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('You win! Scissors beat Paper.');
//             console.log('Player wins!');
//         } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('You win! Paper beats Rock.');
//             console.log('Player wins!');
//         } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('You loose! Rock beats Scissors.');
//             console.log('Computer wins!');
//         } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('You loose! Scissors beats Paper.')
//             console.log('Computer wins!');
//         }
//         else if (computerSelection === 'paper' && playerSelection === 'rock') {
//             console.log(`You entered ${playerInput} and computer chose ${computerInput}`);
//             console.log('You loose! Paper beats Rock.');
//             console.log('Computer wins!');
//         } else {
//             console.log('Invalid input! Try again!');
//         }
//     }

//     playRound(playerInput.toLowerCase(), computerInput.toLowerCase());
// }

// game();