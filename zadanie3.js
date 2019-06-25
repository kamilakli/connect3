// Function that checks which player was clicked
function lastClickedPlayer (playerName) {
    displayPlayer(playerName);
    makePlayerBigger(playerName);

}

// Function that displays which player was clicked
function displayPlayer (player) {
    document.getElementById("clickedPlayer").innerHTML = player;
}
   const players = {
       Jim: 0,
       Tim: 0,
       John: 0,
   }

   function makePlayerBigger (playerName) {
       players[playerName] ++
       document.getElementById("player"+playerName).innerHTML = players[playerName];
   }

