// Function that checks which player was clicked
function lastClickedPlayer (playerName) {
    displayPlayer(playerName);
    if (playerName === "Jim"){
        countJim();
    }
    else if (playerName === "Tim"){
        countTim();
    }
    else {
        countJohn();
    }
}

// Function that displays which player was clicked
function displayPlayer (player) {
    document.getElementById("clickedPlayer").innerHTML = player;
}

// function that adds counts and displays how many times user was clicked
let clickJim = 0;
let clickTim = 0;
let clickJohn = 0;
let countJim = function() {
    clickJim ++; 
    document.getElementById("playerJim").innerHTML = clickJim;
   }   
let countTim = function() {
    clickTim ++; 
    document.getElementById("playerTim").innerHTML = clickTim;
   }   
let countJohn= function() {
    clickJohn ++; 
    document.getElementById("playerJohn").innerHTML = clickJohn;
   }   
