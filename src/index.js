const choicesComputer =
    ["rock",
        "paper",
        "scissors"]

function computerPlay() {
    return choicesComputer[Math.floor(Math.random() * choicesComputer.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
    playerSelection = prompt("Please choose Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerPlay() == "scissors" || playerSelection == "scissors" && computerPlay() == "paper" || playerSelection == "paper" && computerPlay() == "rock") {
        playerScore += 1;
        alert(`You win! Score is ${playerScore} for you, ${computerScore} for computer.`);
    } else if (playerSelection == "rock" && computerPlay() == "rock" || playerSelection == "scissors" && computerPlay() == "scissors" || playerSelection == "paper" && computerPlay() == "paper") {
        alert(`Tie! Score is ${playerScore} for you, ${computerScore} for computer.`);
    } else {
        computerScore += 1;
        alert(`You lose! Score is ${playerScore} for you, ${computerScore} for computer.`);
    }
}

for (let i = 0; i < 20; i++) {
    if (playerScore < 5 && computerScore < 5) {
        playRound();
    } else if (playerScore >= 5) {
        alert("Congratulations, you won first to 5!");
        break;
    } else {
        alert("You lose first to 5, LOSER!")
        break;
    }



}