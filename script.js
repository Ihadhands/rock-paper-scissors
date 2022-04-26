
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const selection = choices[Math.floor(Math.random()* choices.length)];
    console.log(selection);
    return selection;
}


function user() {
    const userInput = prompt('Choose Rock, Paper or Scissors');
    console.log(userInput);
    return userInput.toLowerCase();
        
}

const playerChoice = user();
const computerChoice = computerPlay();
let playerScore = 0;
let computerScore = 0;


    
function playRound(playerSelection, computerSelection) {

    if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        computerScore++;
        console.log('Paper beats rock, you lose');
        alert('Paper beats rock, you lose');
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        computerScore++;
        console.log('scissors beats paper, you lose');
        alert('scissors beats paper, you lose');
    } else if ((playerSelection === 'scissors')&& (computerSelection === 'rock')) {
        computerScore++;
        console.log('rock beats scissors, you lose');
        alert('rock beats scissors, you lose');
    } else if (playerSelection === computerSelection) {
        console.log('it\'s a tie');
        alert('it\'s a tie');
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        playerScore++;
        console.log('rock beats scissors, you win');
        alert('rock beats scissors, you win');
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        playerScore++;
        console.log('scissors beats paper, you win');
        alert('scissors beats paper, you win');
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        playerScore++;
        console.log('paper beats rock, you win');
        alert('paper beats rock, you win');
    } else {
        alert('its a tie')
    }
    
} 

function game() {
    
    for (let i = o; i < 5; i++) {
        
    }
}

console.log(playRound(playerChoice, computerChoice));
console.log(playerScore);
console.log(computerScore);


