let circleColor = "#bf3eff";
function changeColor(currentColor) {
    if(currentColor === "#bf3eff"){
        return "#fff68f";
    } else if (currentColor === "#fff68f")
    {
        return "#a8251d";
    } else {
        return "#bf3eff";
    }
}

// function that displays value of input
function showColor () {
    circleColor = changeColor(circleColor);
    document.getElementById("colorChanger").style.backgroundColor = circleColor;} 

