const input1 = () => document.getElementById("inputOne").value; 
const input2 = () => document.getElementById("inputTwo").value;

function showInput () {
    let firstInput =input1();
    let secondInput=input2();
displayInput (firstInput, secondInput);
}

const displayInput = (in1, in2) =>{
    document.getElementById("displayBoth").innerHTML = in1+" "+in2;
}


