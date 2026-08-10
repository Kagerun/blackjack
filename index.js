let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
    name: "name",
    chips: 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function startGame(){
    player.chips -= 20;
    cardsEl.textContent = "Cards: ";
    cards = [];
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    isAlive=true;
    renderGame();
}
function renderGame() {
    playerEl.textContent = player.name + ": $" + player.chips;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if( sum <= 20){
        message = "Do you want to draw a new card?";
    }else if( sum === 21){
        message = "You hava got a blackjack! You won!";
        hasBlackjack = true;
        player.chips += 50;
    }else{
        message = "You are out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function getRandomCard(){
    let randomnum = Math.floor(Math.random()*13) + 1;
    if (randomnum === 1){
        return 11;
    }else if(randomnum > 10){
        return 10;
    }else{
        return randomnum;
    }
    
}

function newCard(){
    if( isAlive && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
