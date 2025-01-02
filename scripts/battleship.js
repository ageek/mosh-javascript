const fireButton = document.getElementById("fireButton");
const guessInput = document.getElementById("guessInput");

// create 3 random cell locations for the ship
function generateRandomPair() {
  const letters = ["A", "B", "C", "D", "E", "F", "G"];
  const digits = ["0", "1", "2", "3", "4", "5", "6"];

  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const randomDigit = digits[Math.floor(Math.random() * digits.length)];

  return randomLetter + randomDigit;
}
const msg = generateRandomPair();

console.log(msg);

fireButton.addEventListener("click", function () {
  const guess = guessInput.value;
  // alert("You guessed: " + guess + "type: " + typeof guess);

  guess_CAP = guess.toUpperCase();

  if (guess_CAP == msg) {
    alert("HIT!");
    const tcell = document.getElementById("messageArea");
    tcell.innerHTML = "HIT!";

    tcell.style.fontSize = "30px";
    tcell.style.color = "wheat";
    //also show the ship on the board
    const cell = document.getElementById(guess_CAP);
    if (cell) {
      cell.setAttribute("class", "hit");
    }
  } else {
    alert("MISS!");
    const cell = document.getElementById(guess_CAP);
    if (cell) {
      cell.setAttribute("class", "miss");
    }
  }
});
