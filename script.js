const buttonContainer = document.querySelector("#button-container")
const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const resultContainer = document.querySelector("#result-container");
const humanScoreContainer = document.querySelector(".human-score-container");
const computerScoreContainer = document.querySelector(".computer-score-container");
const winnerContainer = document.querySelector("#winner-container");

const restartButton = document.createElement("button");
restartButton.textContent = "Try again";
restartButton.style.display = "none";
document.body.appendChild(restartButton);

let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function pickRock() {
  const humanSelection = "rock";
  const computerSelection = getComputerChoice();
  
  if (humanSelection == computerSelection) {
    console.log("Tie");
    resultContainer.textContent = "Tie";
  }

  if (humanSelection == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      console.log("You lose! Paper beats rock");
      resultContainer.textContent = "You lose! Paper beats rock";
    }
    if (computerSelection == "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors");
      resultContainer.textContent = "You win! Rock beats scissors";
    }

    humanScoreContainer.innerHTML = `
    <span style="color: red;">Player</span><br>
    ${humanScore}
    `;
    computerScoreContainer.innerHTML = `
    <span style="color: red;">Computer</span><br>
    ${computerScore}
    `;
    announceWinner(humanScore, computerScore);
  }
}

rockButton.addEventListener("click", pickRock);


// rockButton.addEventListener("click", () => {
//   const humanSelection = "rock";
//   const computerSelection = getComputerChoice();
  
//   if (humanSelection == computerSelection) {
//     console.log("Tie");
//     resultContainer.textContent = "Tie";
//   }

//   if (humanSelection == "rock") {
//     if (computerSelection == "paper") {
//       computerScore++;
//       console.log("You lose! Paper beats rock");
//       resultContainer.textContent = "You lose! Paper beats rock";
//     }
//     if (computerSelection == "scissors") {
//       humanScore++;
//       console.log("You win! Rock beats scissors");
//       resultContainer.textContent = "You win! Rock beats scissors";
//     }

//     humanScoreContainer.innerHTML = `
//     <span style="color: red;">Player</span><br>
//     ${humanScore}
//     `;
//     computerScoreContainer.innerHTML = `
//     <span style="color: red;">Computer</span><br>
//     ${computerScore}
//     `;
//     announceWinner(humanScore, computerScore);
//   }
// });

paperButton.addEventListener("click", () => {
  const humanSelection = "paper";
  const computerSelection = getComputerChoice();

  if (humanSelection == computerSelection) {
    console.log("Tie");
    resultContainer.textContent = "Tie";
  }

  if (humanSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      console.log("You lose! Scissors beat paper");
      resultContainer.textContent = "You lose! Scissors beat paper";
    }
    if (computerSelection == "rock") {
      humanScore++;
      console.log("You win! Paper beats rock");
      resultContainer.textContent = "You win! Paper beats rock";
    }
  }

  humanScoreContainer.innerHTML = `
    <span style="color: red;">Player</span><br>
    ${humanScore}
    `;
    computerScoreContainer.innerHTML = `
    <span style="color: red;">Computer</span><br>
    ${computerScore}
    `;
    console.log(humanScore);
    console.log(computerScore);
    announceWinner(humanScore, computerScore);
});

scissorsButton.addEventListener("click", () => {
  const humanSelection = "scissors";
  const computerSelection = getComputerChoice();

  if (humanSelection == computerSelection) {
    console.log("Tie");
    resultContainer.textContent = "Tie";
  }

  if (humanSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors");
      resultContainer.textContent = "You lose! Rock beats scissors";
    }
    if (computerSelection == "paper") {
      humanScore++;
      console.log("You win! Scissors beat paper");
      resultContainer.textContent = "You win! Scissors beat paper";
    }
  }

  humanScoreContainer.innerHTML = `
    <span style="color: red;">Player</span><br>
    ${humanScore}
    `;
    computerScoreContainer.innerHTML = `
    <span style="color: red;">Computer</span><br>
    ${computerScore}
    `;
    console.log(humanScore);
    console.log(computerScore);
    announceWinner(humanScore, computerScore);
});

function endGame() {
  buttonContainer.childNodes.forEach(button => {
    button.disabled = true;
  });
  restartButton.style.display = "block";
  // const restartButton = document.createElement("button");
  // restartButton.textContent = "Try again";

  // document.body.appendChild(restartButton);
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  computerScore = 0;
  humanScore = 0;

  humanScoreContainer.innerHTML = `
    <span style="color: red;">Player</span><br>
    ${humanScore}
    `;
    computerScoreContainer.innerHTML = `
    <span style="color: red;">Computer</span><br>
    ${computerScore}
    `;

  winnerContainer.textContent = "";
  resultContainer.textContent = "";
  restartButton.style.display = "none";
  rockButton.addEventListener("click", pickRock);
  buttonContainer.querySelectorAll("button").forEach(button => {
    button.disabled = false;
  });
  console.log("clicked");
}

function announceWinner(humanScore, computerScore) {
  if (humanScore > computerScore && humanScore == 5) {
    winnerContainer.textContent = "WINNER!";
    endGame();
  } else if (humanScore < computerScore && computerScore == 5) {
    winnerContainer.textContent = "GAME OVER!";
    endGame();
  }
  console.log(humanScore)
  console.log(computerScore)
}

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
