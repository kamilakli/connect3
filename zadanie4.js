let circleColor = ["#bf3eff", "#fff68f", "#a8251d" ]
function changeColor(colorNumber) {
  return circleColor[colorNumber];
}
let colorElement = 0;

// function that displays value of input
function showColor () {
    let currentColor = changeColor(colorElement);
    document.getElementById("colorChanger").style.backgroundColor = currentColor;
    if (colorElement >= (circleColor.length-1)) {
        colorElement = 0
    }
    else {
    colorElement ++
    }
} ;

