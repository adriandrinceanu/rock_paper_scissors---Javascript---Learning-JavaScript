

function getComputerChoice() {
    const strings = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}

// function getPlayerChoice() {
//     const strings = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * strings.length);
//     return strings[randomIndex]
// }

let playerSelection = prompt("rock, paper, or scissors?", '')
const computerSelection = getComputerChoice();
console.log('computer:', computerSelection)
function playRound(playerSelection, computerSelection) {
    let result;
    'use strict'
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return result = 'You win, paper beats rock.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return result - 'You win, rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return result = 'You win, scissors beat paper'
    } else if (playerSelection === computerSelection){
        return result = "it's a draw"
    } else {
        return result = `You lose, ${computerSelection} beats ${playerSelection}`
    }
  }
  

console.log(playRound(playerSelection, computerSelection));   