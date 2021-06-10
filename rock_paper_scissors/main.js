function computerSelection(parameter1) {
    var computer;
    let output = ['Rock', 'Paper', 'Scissors'];
    return computer = output[Math.floor(Math.random()*output.length)];
}

function playerSelection(parameter2){
    var player = window.prompt("Enter your selection (Rock / Paper / Scissor): ");
    return player.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
}



