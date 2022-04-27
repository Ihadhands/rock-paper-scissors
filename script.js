
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

let roundCounter = 0;

function playRound(playerSelection, computerSelection) {
       
    let outcome = '';

        if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
            console.log('Paper beats rock, you lose');
            alert('Paper beats rock, you lose');
            computerScore++;
            return outcome = `Paper beats rock, you lose player ${playerScore} computer ${computerScore}`;
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            console.log('scissors beats paper, you lose');
            alert('scissors beats paper, you lose');
            computerScore++;
            return outcome = `scissors beats paper, you lose player ${playerScore} computer ${computerScore}`
        } else if ((playerSelection === 'scissors')&& (computerSelection === 'rock')) {
            console.log('rock beats scissors, you lose');
            alert('rock beats scissors, you lose');
            computerScore++;
            return outcome = `rock beats scissors, you lose player ${playerScore} computer ${computerScore}`
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            console.log('rock beats scissors, you win');
            alert('rock beats scissors, you win');
            playerScore++;
            return outcome = `rock beats scissors, you win player ${playerScore} computer ${computerScore}`
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
            console.log('scissors beats paper, you win');
            alert('scissors beats paper, you win');
            playerScore++;
            
            return outcome = `scissors beats paper, you win player ${playerScore} computer ${computerScore}`
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
            console.log('paper beats rock, you win');
            alert('paper beats rock, you win');
            playerScore++;
            return outcome = `paper beats rock, you win player ${playerScore} computer ${computerScore}`
        } else {
            alert('its a tie')
            return outcome = 'its a tie'
        }
} 

let playerScore = 0;
let computerScore = 0;

function game () {
    
    
    let roundCounter = 0;
    let gameOver = '';
    for (roundCounter = 0; roundCounter < 5; roundCounter++) {
        console.log(playRound(user(), computerPlay()));
    }

    if (playerScore > computerScore) {
        console.log( gameOver = `You win`);
    } else if (computerScore > playerScore) {
        console.log(gameOver = `you lose`);
    } else {
        console.log(`It's a draw`);
    }

    console.log(`${playerScore} ${computerScore}`);
}

game();


