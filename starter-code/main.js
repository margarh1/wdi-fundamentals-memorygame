console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/* Added variables and values as requested in Unit 8 Assignment */

var firstCard = cardTwo;
var secondCard = cardFour;

/* if (((firstCard == "king") && (secondCard == "queen")) || ((firstCard == "queen") && (secondCard == "king"))) {
	alert("Sorry, try again.");
} else if ((firstCard == secondCard) && (firstCard == "king")) {
	alert("You found a match!");
} else if ((firstCard == secondCard) && (firstCard == "queen")) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}*/
/* Added if...else statement per Unit 9 Assignment instructions */

var gameBoard = document.getElementById("game-board");

var createCards = function(number) {
	for (number; number > 0; number--) {
		var newCard = document.createElement("div");
		newCard.setAttribute("class", "card");
		gameBoard.appendChild(newCard);
	}
}

createCards(4);
// Commented out div elements and created function to make div elements per Unit 10 Assignment instructions.


