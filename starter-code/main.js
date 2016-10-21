console.log("JS file is connected to HTML! Woo!")

var gameBoard = document.getElementById("game-board");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var isMatch = function(array) {
	if (array[0] == array[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	gameBoard.innerHTML = '';
	createBoard();
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'queen') {
		this.innerHTML = '<img src="queen.png" alt="Queen of Diamonds" />';
	} else if (this.getAttribute('data-card') == 'king') {
		this.innerHTML = '<img src="king.png" alt="King of Spades" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var createBoard = function() {
	for (var idx = 0; idx < cards.length; idx++) {
		var newCard = document.createElement("div");
		newCard.setAttribute("class", "card");
		newCard.setAttribute("data-card", cards[idx]);
		newCard.addEventListener("click", isTwoCards);
		gameBoard.appendChild(newCard);
	}
}

createBoard();
// Adjusted and streamlined per Unit 11 Assignment instructions
// Still has a display bug to try to fix
