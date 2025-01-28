const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const resultContainer = document.querySelector("#result-container");

let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
  const humanSelection = "rock";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
  const humanSelection = "paper";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
  const humanSelection = "scissors";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

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
    resultContainer.textContent = "Tie";
  }

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      console.log("You lose! Paper beats rock");
      resultContainer.textContent = "You lose! Paper beats rock";
    }
    if (computerChoice == "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors");
      resultContainer.textContent = "You win! Rock beats scissors";
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      computerScore++;
      console.log("You lose! Scissors beat paper");
      resultContainer.textContent = "You lose! Scissors beat paper";
    }
    if (computerChoice == "rock") {
      humanScore++;
      console.log("You win! Paper beats rock");
      resultContainer.textContent = "You win! Paper beats rock";
    }
  }

  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors");
      resultContainer.textContent = "You lose! Rock beats scissors";
    }
    if (computerChoice == "paper") {
      humanScore++;
      console.log("You win! Scissors beat paper");
      resultContainer.textContent = "You win! Scissors beat paper";
    }
  }
}

// playGame();
