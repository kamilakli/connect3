const comments = [
    {
        user: "Janek",
        text: "elo ziom",
        date: "2019-03-03 12:30:00"
    },
    {
        user: "Stasio",
        text: "spadaj",
        date: "2019-03-03 12:31:00",
    },
    {
        user: "Michał",
        text: "buce",
        date: "2019-03-03 12:32:00"
    }
];

function updateComment () {
comments.forEach ((comment) =>{addComment(comment)
});
};

 function addComment(comment) {
    let newComment = document.createElement("div");                
    let textValue = document.createTextNode(comment.user + " " + comment.text + " " + comment.date);
    newComment.appendChild(textValue);                             
    document.getElementById("displayComments").appendChild(newComment);
    console.log("hello");
 };
 function readInput () {
 const textInput = () => document.getElementById("writeComment").value;
 console.log(textInput());
 var newComment = {
     text: textInput()
 };
 comments.push(newComment);
 console.log(comments);
 document.getElementById("displayComments").innerHTML="";
 updateComment();

 }; 