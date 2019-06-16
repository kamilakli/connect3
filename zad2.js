const input1 = () => document.getElementById("inputOne").value; 
const input2 = () => document.getElementById("inputTwo").value;
const input3 = () => document.getElementById("inputThree").value;

function showResult () {
    let firstInput =Number(input1());
    let secondInput=Number(input2());
    let thirdInput=Number(input3());
displayInput (firstInput, secondInput, thirdInput);
}

const displayInput = (in1, in2, in3) =>{
let sum = in1 + in2 + in3;
return document.getElementById("displayresult").innerHTML = sum;
}
