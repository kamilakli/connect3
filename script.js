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


// function that reads value from input
function getUser () {
    return document.getElementById("helloInput").value;
}

// function that reads and displays the input
function showUser () {
    let userName= getUser()
    if(userName !== "") {
    displayValue(userName);
} else {
    displayValue("Anonymous");
}
}

// function that displays value
function displayValue (value) {
    document.getElementById("userName").innerHTML = value;
}
// function that adds value to score on click
let add = function  () {
    score ++
    document.getElementById("score").innerHTML = score;
   };   

// function that decreases value of score on click  
let decrease = function  () {
    score --
    document.getElementById("score").innerHTML = score;
   };


