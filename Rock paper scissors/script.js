const  computerDisplay = document.getElementById("computer-choice");
const  userDisplay = document.getElementById("your-choice");
const  resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener("click",(e) => {
   userChoice = e.target.id;
   userDisplay.innerHTML = userChoice;
   generateComputerChoice()
   getResult()
}))
//this is made so its the simplest and readable way to code it 
//of course there are more efficient ways to do this
//but its just one of the first aproaches
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    
    if (randomNumber === 0){
        computerChoice = "rock"
    }
    if (randomNumber === 1){
        computerChoice = "paper"
    }
    if (randomNumber === 2){
        computerChoice = "scissors"
    }
    computerDisplay.innerHTML=computerChoice
    console.log(computerChoice)
}

function getResult (){
    if (computerChoice === userChoice){
        result = "its a draw!"
    }
    if (computerChoice === "rock"&& userChoice === "paper"){
        result = "you win!"
    }
    if (computerChoice === "scissors"&& userChoice === "paper"){
        result = "you lost!"
    }
    if (computerChoice === "paper"&& userChoice === "scissors"){
        result = "you win!"
    }
    if (computerChoice === "rock"&& userChoice === "scissors"){
        result = "you lost!"
    }
    if (computerChoice === "scissors"&& userChoice === "rock"){
        result = "you win!"
    }
    if (computerChoice === "paper"&& userChoice === "rock"){
        result = "you lost!"
    }
    resultDisplay.innerHTML = result;
}