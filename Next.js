let player ={
  name : "Rocky :",
  chips : 142
}
let cards  = []
let sumOfCards = 0;
let hasBlackJack = false; 
let isAlive = false;
let massage = "";
let massageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sumEl");
let cardsEl = document.querySelector("#cardsEl");

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + "$"+ player.chips 



function getRandomCard(){
   
     let  randomNumber =Math.floor(Math.random()*13) + 1;
     if( randomNumber > 10 ){
      return 10
     }else if (randomNumber === 1){
      return 11
     }

     return randomNumber;
}


 function startGame(){
     isAlive = true;
     let firstCard = getRandomCard();
     let secondCard = getRandomCard();

     cards = [firstCard,secondCard]
     sumOfCards = firstCard +secondCard;

     renderGame()
 }


function renderGame(){
  cardsEl.textContent = "Cards : " 
    for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i]+" "
  }
   sumEl.textContent = "sum :"+sumOfCards;

   if (sumOfCards <= 20){
    massage ="Do you want to draw a new card?"
  
 
  } else if(sumOfCards === 21){
   massage = "You've got Blackjack!" 
   hasBlackJack = true;
  }else{
     massage = "You're out of the game!"
     isAlive = false;
 }
 
 massageEl.textContent = massage;
}





function newCard(){
  
 if (isAlive === true && hasBlackJack === false ){
       let card = getRandomCard();
       sumOfCards += card;
       cards.push(card)
       renderGame()
 }
}
 


