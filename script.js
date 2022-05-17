
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
    
    let playerSelection = this.value;
    let computerSelection = computerPlay();
    let outcome = '';

        if ((playerSelection === 'rock') && (computerSelection === 'paper') || (playerSelection === 'paper') && (computerSelection === 'scissors')
            || (playerSelection === 'scissors')&& (computerSelection === 'rock') ) {
            alert(`${computerSelection} beats ${playerSelection}, you lose`);
            computerScore++;
            return outcome = `Paper beats rock, you lose player`;
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors') || (playerSelection === 'scissors') && (computerSelection === 'paper')
            || (playerSelection === 'paper') && (computerSelection === 'rock') ) {
            alert(`${playerSelection} beats ${computerSelection}, You win`);
            playerScore++;
            return outcome = `rock beats scissors, you win player`;
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


