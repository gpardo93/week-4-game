$(document).ready(function() {


var wins = 0;
var losses = 0;
var buttonYellow;
var buttonBlue;
var buttonRed;
var buttonGreen;
var randomNumber;
var userTallyScore;



function startGame() {
		// have computer pick a number between 10-50
		randomNumber = 10 + Math.floor(Math.random() * 42);
		// pick random gem values between 1-12
		buttonYellow = 1 + Math.floor(Math.random() * 10);
		buttonBlue = 1 + Math.floor(Math.random() * 10);
		buttonRed = 1 + Math.floor(Math.random() * 10);
		buttonGreen = 1 + Math.floor(Math.random() * 10);
		// set initial value of user's ongoing gem selections sum to 0
		userTallyScore = 0;
		// updating the html for the game board
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomNumber);
		$("#userScore").html(userTallyScore);
		consoleLogVariables();
}

// function to check if user has won or lost
	// increment wins / losses in either case
	// and then re-initialize variables for new round
	// if user hasn't won or lost then nothing happens
	function hasUserWonOrLost() {
		// check if user has lost
		if (userTallyScore > randomNumber) {
			losses++;
			console.log("user lost");
			startGame();
		}

		// check if user has won
		if (userTallyScore == randomNumber) {
			wins++;
			console.log("user won");
			startGame();
		}
	}

	// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("buttonYellow: ", buttonYellow + " buttonBlue: " + buttonBlue + " buttonRed: " + buttonRed + " buttonGreen: " + buttonGreen);
		console.log("randomComputerNumber: " + randomNumber + " userTallyScore: " + userTallyScore);
		console.log("----------------------------------");

	}

	// =====================================
	// Now comes the main game functionality
	// =====================================

	startGame();

	// listen for clicks on any of the gems by targeting the gem class
	$(".gem").on("click", function() {
		// each gem has a value attribute of gem1, gem2, gem3, or gem 4
		// use this attribute to identify which gem the user actually clicked
		var pressed = $(this).attr("value");
        console.log(pressed);
        // add the value of the gem to the user's ongoing score tally
        if (pressed == "gem1") {
        	userTallyScore += buttonYellow;
        } else if (pressed == "gem2") {
        	userTallyScore += buttonBlue;
        } else if (pressed == "gem3") {
        	userTallyScore += buttonRed;
        } else if (pressed == "gem4") {
        	userTallyScore += buttonGreen;
        } else {
        	console.log("error");
        }
        // then update the html for the user score
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
        // call the function to see if user has won or lost
        hasUserWonOrLost();
	});

});
























