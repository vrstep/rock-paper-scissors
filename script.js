const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");

let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let getRandomNumber = Math.floor(Math.random() * 3);
  return choices[getRandomNumber];
}

function getHumanChoice() {
  let getUserInput = prompt("What's your move?", "").toLowerCase();

  while (!choices.includes(getUserInput)) {
    console.log("Invalid input, sir!");
    getUserInput = prompt("What's your move?", "");
  }
  return getUserInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Tie");
  }

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      console.log("You lose! Paper beats rock");
    }
    if (computerChoice == "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors");
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      computerScore++;
      console.log("You lose! Scissors beat paper");
    }
    if (computerChoice == "rock") {
      humanScore++;
      console.log("You win! Paper beats rock");
    }
  }

  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors");
    }
    if (computerChoice == "paper") {
      humanScore++;
      console.log("You win! Scissors beat paper");
    }
  }
}

playGame();
