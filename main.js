const rockUser = document.querySelector('#rock-user');
const paperUser = document.querySelector('#paper-user');
const scissorsUser = document.querySelector('#scissors-user');

const resultText = document.querySelector('#result-text');

const playerScore = document.querySelector('#player-score');
const drawScore = document.querySelector('#draw-score');
const computerScore = document.querySelector('#computer-score');

let playerCounter = 0;
let drawCounter = 0;
let computerCounter = 0;

rockUser.addEventListener('click', () => playRound('rock', computerPlay()));
paperUser.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsUser.addEventListener('click', () => playRound('scissors', computerPlay()));

// Computer chooses from Rock, Paper or Scissors
function computerPlay() {
    var selection = Math.floor(Math.random() * 3);

    console.log("hello world");

    switch(selection) {
        case 0: 
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

// Plays a round and returns a string dependent on who won
function playRound(playerSelection, computerSelection) {
    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {

        playerScore.textContent = ++playerCounter;
        resultText.textContent = ("You Win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
        + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase());

    } else if(playerSelection === computerSelection) {

        drawScore.textContent = ++drawCounter;
        resultText.textContent = ("It's a draw!")

    } else {

        computerScore.textContent = ++computerCounter;
        resultText.textContent = ("You Lose! " + computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()
        + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase());

    }
}