const comp_choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * comp_choices.length);
    return comp_choices[randomIndex]
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

  const content = document.querySelector('#container');

  const rock = document.createElement('button');
  const paper = document.createElement('button');
  const scissors = document.createElement('button');

  rock.textContent = 'Rock';
  rock.value = 'rock';
  rock.setAttribute('class', 'button')

  paper.textContent = 'Paper';
  paper.value = 'paper';
  paper.setAttribute('class', 'button')


  scissors.textContent = 'Scissors';
  scissors.value = 'scissors';
  scissors.setAttribute('class', 'button')

  content.appendChild(rock);
  content.appendChild(paper);
  content.appendChild(scissors);

  const buttons = document.querySelectorAll('button');
  const scoreboard = document.querySelector('#score');

  scoreboard.setAttribute('class', 'score');


  let computer_winnings = 0;
  let player_winnings = 0;
  let draws = 0;
  let para = document.createElement('p');
  content.appendChild(para);



    buttons.forEach((button) => {
        button.addEventListener('click', ()=>{
            let computerSelection = getComputerChoice();
            let winner = playRound(button.value, computerSelection);
            para.textContent = winner;
        
            
            if (winner === 'You win, paper beats rock.' 
                    || winner === 'You win, rock beats scissors' 
                    || winner === 'You win, scissors beat paper') {
                        player_winnings += 1
                    } else if (winner === "it's a draw") {
                        draws += 1
                    } else {
                        computer_winnings += 1
                    };
            scoreboard.textContent = `Computer wins ${computer_winnings} times, player wins ${player_winnings} times and it was draw ${draws} times`;  
            
            if (player_winnings === 5) {
                alert("Human player won!");
                player_winnings = 0;
                computer_winnings = 0;
                draws = 0;
              };
              if (computer_winnings === 5) {
                alert('Computer won! Find Sarah Conner!!!');
                player_winnings = 0;
                computer_winnings = 0;
                draws = 0;
              };
              if (draws === 5) {
                alert('Thight thight tight!');
                player_winnings = 0;
                computer_winnings = 0;
                draws = 0;
              };
        });
  });
  
  content.prepend(scoreboard);



  


