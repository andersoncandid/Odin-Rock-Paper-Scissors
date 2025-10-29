// Take the User choice
function getHumanChoice() {
  let userAnswer = prompt("Choice: ");
  if (userAnswer.toLowerCase() === "rock") {
    return 0;
  }
  if (userAnswer.toLowerCase() === "paper") {
    return 1;
  }
  return 2; // scissors
}

// Randomly generate computer`s choice
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 0) {
    if (computerChoice === 1) {
      computerScore += 1;
    }
    if (computerChoice === 2) {
      humanScore += 1;
    }
  }
  if (humanChoice === 1) {
    if (computerChoice === 2) {
      computerScore += 1;
    }
    if (computerChoice === 0) {
      humanScore += 1;
    }
  }
  if (humanChoice === 2) {
    if (computerChoice === 0) {
      computerScore += 1;
    }
    if (computerChoice === 1) {
      humanScore += 1;
    }
  }
  console.log("Score:");
  console.log("Human: ", humanScore, "Computer: ", computerScore);
}

let plays = 0;

// Run 5 Rounds
do {
  playRound(getHumanChoice(), getComputerChoice());
  plays++;
} while (plays < 5);

console.log("");
console.log("---Results---");

if (humanScore > computerScore) {
  console.log("Winner: Human");
} else if (humanScore < computerScore) {
  console.log("Winner: Computer");
} else {
  console.log("Draw!");
}
