console.log("script started");

function flipCard(cardId) {
    console.log("click");
    let card = document.getElementById(cardId);
    card.style.color = "grey";
    card.style.backgroundColor = "black";
}

