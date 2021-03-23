const choicesComputer =
    [
        "rock",
        "paper",
        "scissors"
    ]

function computerPlay() {
    return choicesComputer[Math.floor(Math.random() * choicesComputer.length)];
}
let playerSelection = ""
let playerScore = 0
let computerScore = 0
const yourScoreDiv = document.querySelector(".yourscore")
const computerScoreDiv = document.querySelector(".computerscore")

function playRound() {

    var computerSelection = computerPlay().toLowerCase();
    console.log(computerSelection);


    if (playerSelection == computerSelection) {
        alert(`Tie! Score is ${playerScore} for you, ${computerScore} for computer.`);
    } else if (playerWins(playerSelection, computerSelection)) {
        playerScore += 1;
        alert(`You win! Score is ${playerScore} for you, ${computerScore} for computer.`);
        yourScoreDiv.textContent = playerScore;
    } else {
        computerScore += 1;
        alert(`You lose! Score is ${playerScore} for you, ${computerScore} for computer.`);
        computerScoreDiv.textContent = computerScore;
    }


    winnerOrNextRound();
}

function winnerOrNextRound() {
    if (playerScore >= 5) {
        alert("Congratulations, you won first to 5!");
    } else if (computerScore >= 5) {
        alert("You lose first to 5, LOSER!")
    }
}

function playerWins(aPlayerSelection, aComputerSelection) {
    return aPlayerSelection == "rock" && aComputerSelection == "scissors" ||
        aPlayerSelection == "scissors" && aComputerSelection == "paper" ||
        aPlayerSelection == "paper" && aComputerSelection == "rock"
}

const btnRock = document.querySelector(".rock");
btnRock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
});

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
});

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
});


