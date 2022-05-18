
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const selection = choices[Math.floor(Math.random()* choices.length)];
    console.log(selection);
    return selection;
}

let computerScore = 0;
let playerScore = 0;


const buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', game);
}
    
/*function user() {
    const btn = document.querySelectorAll('button');
    
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            return btn.id;
        })

    });
    console.log( btn.id);
}*/



const outcome = document.querySelector('.outcome');
const displayUserScore = document.querySelector('.score');
const displayCompScore = document.querySelector('.computer-score')

function reset() {
    playerScore = 0;
    computerScore = 0;
    displayCompScore.textContent = 0;
    displayUserScore.textContent =0;
}

function game() {
    
    let playerSelection = this.id;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    

        if ((playerSelection === 'rock') && (computerSelection === 'paper') || (playerSelection === 'paper') && (computerSelection === 'scissors')
            || (playerSelection === 'scissors')&& (computerSelection === 'rock') ) {
            outcome.textContent = `${computerSelection} beats ${playerSelection}, you lose`;
            computerScore++;
            displayCompScore.textContent = computerScore;
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors') || (playerSelection === 'scissors') && (computerSelection === 'paper')
            || (playerSelection === 'paper') && (computerSelection === 'rock') ) {
            outcome.textContent = `${playerSelection} beats ${computerSelection}, You win`;
            playerScore++;
            displayUserScore.textContent = playerScore;
        } else {
            outcome.textContent = `It's a tie, player:`;
        }
    
    if (playerScore === 5) {
        outcome.textContent = 'Congratulations you win';
    } else if (computerScore === 5) {
        outcome.textContent = 'You lose, better luck next time';
    } else if ((playerScore > 5 && computerScore <= 5) || (playerScore <= 5 && computerScore > 5)) {
        reset();
    }
   

    
} 



    

    

    




