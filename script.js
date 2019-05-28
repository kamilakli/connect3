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
