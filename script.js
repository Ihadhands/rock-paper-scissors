
const choices = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let playerSelection = prompt('Choose Rock, Paper, Scissors?');
console.log(playerSelection);


function computerPlay() {
    const selection = choices[Math.floor(Math.random()* choices.length)];
    return selection;
}



console.log(computerSelection);