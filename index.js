let cards = [];
let sum  = 0;
let hasBlackjack =false;
let isAlive = false;
let message = "";

let player = {
    name: "Nikhil",
    chips: 145
}
// let age =22;
// function nightClub(){
//     if(age <21){
//         console.log("You can not enter the club!")
//     }else{
//         console.log("Welcome!");
//     }
// }
// nightClub(45);


// let age = 100;
// if(age <100){
//     console.log("Not eligible");
// }else if(age === 100){
//     console.log("Here is your birthday card from the king");
// }else{
//     console.log("Not eligible, you have already gotten one")
// }
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": ₹" + player.chips;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEL = document.getElementById("cards-el");

function getRandomCard(){
    let randomVal = Math.floor((Math.random()*13))+1;
    if(randomVal === 1){
        return 11;
    }else if(randomVal > 10 ){
        return 10;
    }else{
        return randomVal;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards= [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
} 

function renderGame(){
    if(sum <= 20){
        message ="Do you want yo draw a new card?"
    }else if(sum === 21){
        message = "you've got Blackjack!"
        hasBlackjack =true;
    }else{
        message ="you're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;

    sumEl.textContent = "Sum:" +sum;
    for(let i=0;i<cards.length;i++){
        cards[i];
    }

    cardsEL.textContent ="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEL.textContent += cards[i] +" ";
    };
}

function newCard(){
    if(isAlive === true && hasBlackjack=== false){
    let card = getRandomCard();
    sum = sum + card;
    cards.push(card);
    renderGame();
    }
}