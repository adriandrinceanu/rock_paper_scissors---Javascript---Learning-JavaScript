# Rock, Paper, Scissors Game

This JavaScript code is a simple implementation of the classic game Rock, Paper, Scissors. The game is played in the browser between a human player and the computer.

## How it Works

The game logic is implemented in several functions:

- `getComputerChoice()`: This function randomly selects the computer's choice from the array `comp_choices` which contains the three possible choices: 'rock', 'paper', and 'scissors'.

- `getPlayerChoice()`: This function prompts the player to enter their choice. The player's choice is returned by the function.

- `playRound(playerSelection, computerSelection)`: This function takes the player's choice and the computer's choice as arguments, compares them according to the game's rules, and returns the result of the round.

The game interface is created dynamically in the browser using the DOM API. Three buttons are created for the player to choose 'rock', 'paper', or 'scissors'. When a button is clicked, a round is played, and the result is displayed on the page.

A scoreboard keeps track of the number of rounds won by the player and the computer, as well as the number of draws. The first to win 5 rounds wins the game.

## Usage

To play the game, open the HTML file containing the script in your browser. Click on the 'rock', 'paper', or 'scissors' button to make your choice. The result of the round will be displayed on the page, and the scoreboard will be updated.

Enjoy the game!

Adrian.
