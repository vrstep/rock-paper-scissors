let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  let getRandomNumber = Math.floor(Math.random() * 3);
  return choices[getRandomNumber];
}

console.log(getComputerChoice(choices));
