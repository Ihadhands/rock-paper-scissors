
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const selection = choices[Math.floor(Math.random()* choices.length)];
    console.log(selection);
    return selection;
}


/*function user() {
    let userInput = prompt('Choose Rock, Paper or Scissors');
    let player = userInput.toLowerCase();
    while ((player !== 'rock') && (player !== 'paper') && (player !== 'scissors')) {
        alert('Incorrect input please try again');
        userInput = prompt('Choose Rock, Paper or Scissors');
        player = userInput.toLowerCase();
    }
    console.log(player);
    return player.toLowerCase();
}*/










function playRound() {
    
    let playerSelection = this;
    let computerSelection = computerPlay();
    let outcome = '';

        if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
            alert('Paper beats rock, you lose');
            computerScore++;
            return outcome = `Paper beats rock, you lose player`;
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            alert('scissors beats paper, you lose');
            computerScore++;
            return outcome = `scissors beats paper, you lose player`;
        } else if ((playerSelection === 'scissors')&& (computerSelection === 'rock')) {
            alert('rock beats scissors, you lose');
            computerScore++;
            return outcome = `rock beats scissors, you lose player`;
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            alert('rock beats scissors, you win');
            playerScore++;
            return outcome = `rock beats scissors, you win player`;
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
            alert('scissors beats paper, you win');
            playerScore++;
            return outcome = `scissors beats paper, you win player`
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
            alert('paper beats rock, you win');
            playerScore++;
            return outcome = `paper beats rock, you win player:`
        } else {
            alert('its a tie')
            return outcome = `It's a tie, player:`;
        }
    
    
} 



let playerScore = 0;
let computerScore = 0;


/*function game () {
    
    
    let roundCounter = 0;
    let gameOver = '';
    for (roundCounter = 0; roundCounter < 5; roundCounter++) {
        console.log(playRound(user(), computerPlay()));
    }

    if (playerScore > computerScore) {
        console.log( gameOver = `You are the winner, you scored ${playerScore}`);
        alert(`you win player score ${playerScore} computer Score ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(gameOver = `you are the loser, computer scored ${computerScore}`);
        alert(`you lose player score ${playerScore} computer Score ${computerScore}`);
    } else {
        console.log(`It's a draw`);
        alert('I don\'t know how to break this to you, but its a tie');
    }

    console.log(`Player : ${playerScore} Computer: ${computerScore}`);
}

game();*/


