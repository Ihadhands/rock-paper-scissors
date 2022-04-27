
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
let roundCounter = 0;

function playRound(playerSelection, computerSelection) {
       

        if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
            console.log('Paper beats rock, you lose');
            alert('Paper beats rock, you lose');
            computerScore++;
            roundCounter++;
            return computerScore;
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            console.log('scissors beats paper, you lose');
            alert('scissors beats paper, you lose');
            computerScore++;
            roundCounter++;
            return computerScore;
        } else if ((playerSelection === 'scissors')&& (computerSelection === 'rock')) {
            console.log('rock beats scissors, you lose');
            alert('rock beats scissors, you lose');
            computerScore++;
            roundCounter++;
            return computerScore;
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            console.log('rock beats scissors, you win');
            alert('rock beats scissors, you win');
            playerScore++;
            roundCounter++;
            return playerScore;
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
            console.log('scissors beats paper, you win');
            alert('scissors beats paper, you win');
            playerScore++;
            roundCounter++;
            return playerScore;
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
            console.log('paper beats rock, you win');
            alert('paper beats rock, you win');
            playerScore++;
            roundCounter++;
            return playerScore;
        } else {
            alert('its a tie')
            roundCounter++;
            return roundCounter;
        }
} 



console.log(playRound(playerChoice, computerChoice));
console.log(playerScore);
console.log(computerScore);
console.log(roundCounter);

