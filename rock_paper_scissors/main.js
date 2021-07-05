function computerPlay() {
    let computerChoice = Math.random()
    if (computerChoice <= 0.34) {
        return "Rock";
    } else if (computerChoice <= 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playerPlay() {
    playerChoice = window.prompt("Enter your selection (Rock / Paper / Scissors): ")
    return playerChoice.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "The Result is a Tie!";
    }
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "Oops! You lose, computer wins";
        }
        else {
            return "Congratulations! You win!";
        }
    }
    if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "Oops! You lose, computer wins";
        }
        else {
            return "Congratulations! You win!";
        }
    }
    if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "Oops! You lose, computer wins";
        }
        else {
            return "Congratulations! You win!";
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()

//console.log(playRound(playerSelection, computerSelection));