console.log("script started");
// Variable to track guesses
let guesses = 0;

// Var to track 1st card pick
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    // Print click to console to test that click works
    console.log("click");
    // Gets the html card
    let card = document.getElementById(cardId);
    // Change colors to flip card and reveal text
    card.style.color = "grey";
    card.style.backgroundColor = "black";
    
    if (firstCardId == "") {
        // Store 1st card Id
        firstCardId = cardId;
        console.log("first = " + firstCardId);
    }
    else {
        // Store 2nd card Id
         secondCardId = cardId;
         //checkformatch();
         setTimeout(checkForMatch, 1000);
         checkForMatch();
        console.log("second = " + secondCardId);
    }


}

function checkForMatch() {
    // Get the card elements
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementById(secondCardId);

    // Check if the text matches
    if(firstCard.innerText == secondCard.innerText ) {
        // Different color to show match
        firstCard.style.backgroundcolor = "gold";
        secondCard.style.backgroundColor = "gold";
    }
    else {
        // Card dony match
        firstCard.style.color = "chocolate";
        firstCard.style.backgroundColor = "chocolate";
        secondCard.style.color = "chocolate";
        secondCard.style.backgroundColor = "chocolate";

    }

    //reset for next pick
    firstCardId = "";
    secondCardId = "";
}