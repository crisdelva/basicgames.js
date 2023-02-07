

/////////////// IMAGES /////////////////////
const cardArray = [
    {name:"fries",img:"images/fries.png"},{name:"cheeseburger",img:"images/cheeseburger.png"},
    {name:"hotdog",img:"images/hotdog.png"},{name:"ice-cream",img:"images/ice-cream.png"},
    {name:"milkshake", img:"images/milkshake.png"},{name:"pizza",img:"images/pizza.png"},
    {name:"fries",img:"images/fries.png"},{name:"cheeseburger",img:"images/cheeseburger.png"},
    {name:"hotdog",img:"images/hotdog.png"},{name:"ice-cream",img:"images/ice-cream.png"},
    {name:"milkshake",img:"images/milkshake.png"},{name:"pizza",img:"images/pizza.png"}
    
]

let cardsChosen = [];
let cardsChosenIds= [];
const cardsWon =[];

//////////RANDOMLY SORTING IMAGES//////////
cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid");
const resutDisplay = document.querySelector("#result")

///// CREATING BOARD /////
function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
      const card= document.createElement("img")
      card.setAttribute("src", "images/blank.png")
      card.setAttribute("data-id", i)
      card.addEventListener("click",flipCard)
      gridDisplay.appendChild(card)
        
    }
}
createBoard() 



function checkMatch(){
   const cards = document.querySelectorAll("img");
   const optionOne = cardsChosenIds[0];
   const optionTwo = cardsChosenIds[1];

    if(optionOne == optionTwo){
        cards[optionOne].setAttribute("src","images/blank.png");
        cards[optionTwo].setAttribute("src","images/blank.png");        
        alert("you clicked the same card")}

    if (cardsChosen[0] == cardsChosen[1]){
        cards[optionOne].setAttribute("src","images/white.png");
        cards[optionTwo].setAttribute("src","images/white.png");
        cards[optionOne].removeEventListener("click",flipCard);
        cards[optionTwo].removeEventListener("click",flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOne].setAttribute("src","images/blank.png");
        cards[optionTwo].setAttribute("src","images/blank.png");
        
    }
    resutDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds=[]

    if(cardsWon.length ==cardArray.length/2){
        resutDisplay.innerHTML = "Congratulations you found them ALL! Refresh to start again"
        setTimeout(window.location.reload(),500)
    }
  
}

function flipCard(){
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src",cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
    console.log(cardsChosen + "cartaselegidas", cardsChosenIds + "id de cartas elegidas")
}