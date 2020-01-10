function computerPlay() {
  let play = ["Rock", "Paper", "Scissors"];
  return play[Math.floor(Math.random() * 3)];
}

function playRound() {
  // your code here!
  let playerSelection = this.id;
  let computerSelection = computerPlay();

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    document.getElementById("result").innerHTML =
      "You played " +
      playerSelection.toLowerCase() +
      "<br>Computer played " +
      computerSelection.toLowerCase() +
      "<br>It's a tie!";
  } else if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection.toLowerCase() === "paper") {
      document.getElementById("result").innerHTML =
        "You played " +
        playerSelection.toLowerCase() +
        "<br>Computer played " +
        computerSelection.toLowerCase() +
        "<br>You Lose! Paper beats Rock";
    } else {
      document.getElementById("result").innerHTML =
        "You played " +
        playerSelection.toLowerCase() +
        "<br>Computer played " +
        computerSelection.toLowerCase() +
        "<br>You Win! Rock beats Scissors";
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection.toLowerCase() === "rock") {
      document.getElementById("result").innerHTML =
        "You played " +
        playerSelection.toLowerCase() +
        "<br>Computer played " +
        computerSelection.toLowerCase() +
        "<br>You Win! Paper beats Rock";
    } else {
      document.getElementById("result").innerHTML =
        "You played " +
        playerSelection.toLowerCase() +
        "<br>Computer played " +
        computerSelection.toLowerCase() +
        "<br>You Lose! Scissors beats Paper";
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection.toLowerCase() === "rock") {
      document.getElementById("result").innerHTML =
        "You played " +
        playerSelection.toLowerCase() +
        "<br>Computer played " +
        computerSelection.toLowerCase() +
        "<br>You Lose! Rock beats Scissors";
    } else {
      document.getElementById("result").innerHTML =
        "You played " +
        playerSelection.toLowerCase() +
        "<br>Computer played " +
        computerSelection.toLowerCase() +
        "<br>You Win! Scissors beats Paper";
    }
  }
}

function game() {
  let playerWin = 0;
  let computerWin = 0;
  let playerSelection;
  let round;
  let computerSelection;

  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, Scissors?");
    console.log("You played " + playerSelection);
    computerSelection = computerPlay();
    console.log("Computer played " + computerSelection);

    round = playRound(playerSelection, computerSelection);
    console.log(round);

    if (round.includes("Win")) {
      playerWin += 1;
    } else if (round.includes("Lose")) {
      computerWin += 1;
    }
  }

  console.log("You won " + playerWin);
  console.log("Computer won " + computerWin);

  if (playerWin === computerWin) {
    console.log("It's a tie!");
  } else if (playerWin > computerWin) {
    console.log("You win the game!");
  } else if (playerWin < computerWin) {
    console.log("You loose the game!");
  }
}

const button = document.querySelectorAll("button");
button.forEach(e => e.addEventListener("click", playRound));

function func() {
  document.getElementById("result").innerHTML = this.id;
}
