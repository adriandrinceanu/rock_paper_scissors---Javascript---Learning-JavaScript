const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function getPlayerChoice() {
    let myChoice = prompt('Rock, Paper or Scissors?', '');
    return myChoice
}


function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection){
        return result = "it's a draw"
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return result = 'You win, paper beats rock.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return result = 'You win, rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return result = 'You win, scissors beat paper'
    }  else {
        return result = `You lose, ${computerSelection} beats ${playerSelection}`
    }
  }

  const rock = document.createElement('button');
  const paper = document.createElement('button');
  const scissors = document.createElement('button');

  rock.textContent = 'Rock';
  paper.textContent = 'Paper';
  scissors.textContent = 'Scissors';


 
  function playGame() {
    let computer_winnings = 0;
    let player_winnings = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log('computer:', computerSelection);
        console.log('player:', playerSelection);

        let result = playRound(playerSelection, computerSelection);
        
        if (result === 'You win, paper beats rock.' 
        || result === 'You win, rock beats scissors' 
        || result === 'You win, scissors beat paper') {
            player_winnings += 1
        } else if (result === "it's a draw") {
            draws += 1
        } else {
            computer_winnings += 1
        }
        console.log('result:', result);
        }
        console.log(`Computer wins ${computer_winnings} times, player wins ${player_winnings} times and it was draw ${draws} times`);
    }


console.log(playGame());


