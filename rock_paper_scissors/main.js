let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();
const playerSelection = playerPlay();
const winner = play();

function computerPlay() {
    let output = ['Rock', 'Paper', 'Scissors'];
    return output[Math.floor(Math.random() * output.length)];
}

function playerPlay() {
    var player = window.prompt("Enter your selection (Rock / Paper / Scissors): ");
    return player.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function Score(winner) {
    if (winner == "tie") {
        console.log("It's a tie!")
    }
    else if (winner == "player") {
        console.log("Congratulations, you win!");
        playerScore++;
    }
    else {
        console.log("Uh oh! You lost! ☹");
        computerScore++;
    }
}

function round() {
    playerPlay();
    computerPlay();
    play();
    Score();
    console.log("Your score is " + { number(playerScore) })
}