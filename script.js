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
