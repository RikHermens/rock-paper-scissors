const choicesComputer =
    [
        "rock",
        "paper",
        "scissors"
    ]

function computerPlay() {
    return choicesComputer[Math.floor(Math.random() * choicesComputer.length)];
}

function playRound(aPlayerscore, aComputerscore) {
    playerSelection = prompt("Please choose Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        alert(`Your input:  ${playerSelection} is invalid, please play again`);
        // voer de checks uit om te kijken of er iemand gewonnen heeft, zo niet opnieuw playRounds met de nieuwe score.
        playRound(aPlayerscore, aComputerscore);
        // return stopt de functie uitvoering.
        // hij gaat dus niet meer verder met de rest van de code. goede manier om vroegtijdig uit functies te stappen
        // Aangezien we nu recursief werken is het wel belangrijk dat playRound opnieuw gedaan wordt.
        return;
    }

    // Ik zit hier een constante om 1x de waarde op te halen. wat er nu bij jou gebeurd is dit
    // playerSelection == "rock" && computerPlay() == "scissors"   : computerPlay gaat een random waarde ophalen om te vergelijken bijv: paper
    // playerSelection == "scissors" && computerPlay() == "paper" || : computerPlay gaat een random waarde ophalen om te vergelijken bijv: rock
    // Er zijn dus twee verschillende waarde voor computerplay mogelijk wat het niet meer kloppend maakt
    var computerSelection = computerPlay().toLowerCase();

    // Als de string hetzelfde is dan is het gelijkspel, hoef je niet de vergelijking van alle twee met rock te doen
    if (playerSelection == computerSelection) {
        alert(`Tie! Score is ${aPlayerscore} for you, ${aComputerscore} for computer.`);
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        aPlayerscore += 1;
        alert(`You win! Score is ${aPlayerscore} for you, ${aComputerscore} for computer.`);
    } else {
        aComputerscore += 1;
        alert(`You lose! Score is ${aPlayerscore} for you, ${aComputerscore} for computer.`);
    }

    // voer de checks uit om te kijken of er iemand gewonnen heeft, zo niet opnieuw playRounds met de nieuwe score.
    winnerOrNextRound(aPlayerscore, aComputerscore);
}

function winnerOrNextRound(aPlayerscore, aComputerscore) {
    if (aPlayerscore < 5 && aComputerscore < 5) {
        // Recursief dezelfde methode aanroepen.
        // hierdoor heb je geen score meer nodig buiten de functies om en zou je dus twee spellen tegelijk kunnen spelen zonder dat het elkaar in de weg zit
        playRound(aPlayerscore, aComputerscore);
    } else if (aPlayerscore >= 5) {
        alert("Congratulations, you won first to 5!");
    } else {
        alert("You lose first to 5, LOSER!")
    }
}

// Start game
playRound(0, 0)