console.log("Ja tu jestem JS");

let activeUser = "red";
document.getElementById("message").innerHTML = activeUser;
function changeUser(currentUser) {
    if(currentUser === "red"){
        return "yellow";
    } else {
        return "red";
    }
}
function displayUser() {
    activeUser = changeUser(activeUser);
    document.getElementById("message").innerHTML =activeUser;
}
let score = 0;
function changeScore(currentScore) {
    if(currentScore = 0) {
        return 
    }
}
let add = function  () {
    score ++
    document.getElementById("score").innerHTML = score;
   };   
   
let decrease = function  () {
    score --
    document.getElementById("score").innerHTML = score;
   };

