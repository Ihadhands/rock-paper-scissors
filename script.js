
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

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return 'Paper beats rock, you lose';
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        return 'scissors beats paper, you lose';
    } else if ((playerSelection === 'scissors')&& (computerSelection === 'rock')) {
        return 'rock beats scissors, you lose';
    } else if (playerSelection === computerSelection) {
        return 'it\'s a tie'
    } else {
        return 'You Win!';
    }
} 
    
 console.log(playRound(playerChoice, computerChoice))



