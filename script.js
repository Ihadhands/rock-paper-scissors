
const choices = ['rock', 'paper', 'scissors'];






function playRound(playerSelection, computerSelection) {
    
    function computerPlay() {
    const selection = choices[Math.floor(Math.random()* choices.length)];
    return selection;
}
    function user() {
    const userInput = prompt('Choose Rock, Paper, Scissors?');
    return userInput;
}
    console.log(computerPlay);
    console.log(user);
    const computerSelection = computerPlay();
    console.log(computerSelection);
    const playerSelection = user();
    console.log(playerSelection);
    
    /*if ('rock' < 'paper') {
            return alert('Paper beats Rock, you lose');
        } else if ('paper' < 'scissors') {
            return alert('Scissors beats paper, you lose');
        } else if ('scissors' < 'rock') {
            return alert('Rock beats Scissors, you lose');
        } else if ('rock' === 'rock' || 'paper' === 'paper' || 'scissors' === 'scissors') {
            return alert('It\'s a tie, try again');
        } else {
            return 'You win!'
        } 
    
} */

console.log(playRound(playerSelection, computerSelection));


