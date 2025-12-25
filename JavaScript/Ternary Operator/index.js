const playerGuess = 22;
const correctAnswer = 6;

let message =
  playerGuess === correctAnswer
    ? "Correct"
    : playerGuess < correctAnswer
    ? "Too low"
    : "Too high";

console.log(message);
