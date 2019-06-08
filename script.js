let activeUser = "red";
function changeUser(currentUser) {
    if(currentUser === "red"){
        return "yellow";
    } else {
        return "red";
    }
}
function displayUser() {
    activeUser = changeUser(activeUser);
    document.getElementById("message").innerHTML = activeUser;
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
}   else {
    displayValue("Anonymous");
    }
}
// function that displays value of input
function displayValue (value) {
    document.getElementById("userName").innerHTML = value;
}  

let score = 0;

// function that adds value to score on click
let add = function() {
    score ++;
    document.getElementById("score").innerHTML = score;
   }   

// function that decreases value of score on click  
let decrease = function() {
    score --;
    document.getElementById("score").innerHTML = score;
   }


