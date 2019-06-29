const input1 = () => document.getElementById("inputOne").value; 
function addNumberToList () {
    let newItem = document.createElement("li");                
    let textValue = document.createTextNode(input1());
    newItem.appendChild(textValue);                             
    document.getElementById("mojaLista").appendChild(newItem);
    showResult ();
    document.getElementById("inputOne").value = "";
    };
let result = 0;

function showResult () {
    let firstInput =Number(input1());
    displayInput (firstInput);
    return result = result + firstInput;
}

const displayInput = (in1) =>{
    return document.getElementById("displayresult").innerHTML = result + in1;
    }





