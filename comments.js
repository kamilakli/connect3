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
 const commentAuthor = () => document.getElementById("author").value;
 var author = commentAuthor();
 if (author === "") {
    author = 'Anonymous';
 }
 var newComment = {
     user: author,
     text: textInput(),
     date: "2019-03-03 12:36:00"
 };

 comments.push(newComment);
 console.log(comments);
 document.getElementById("displayComments").innerHTML="";
 updateComment();

 }; 
