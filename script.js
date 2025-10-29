// Take the User choice
function humanChoice() {
  let userAnswer = prompt("Choice: ");
  return userAnswer.toLowerCase();
}

// Randomly generate computer`s choice
// 0 == rock, 1 == paper and 2 == scissors
function computerChoice() {
  return Math.floor(Math.random() * 3);
}

