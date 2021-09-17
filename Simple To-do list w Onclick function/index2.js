var userInput = document.getElementById("input");

function userInputValue() {
   return userInput.value
}


function butclick(){
    document.getElementById("lista").innerHTML+='<li>' + userInput.value + '<button class="btn-primary doneB">Done!</button><button class="btn-danger deleteB">Delete!</button></li>'  
    userInput.value = ""
}