
var letters = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']

var hiddenLetter = ""
var guessCounter 
var userGuess 
var userString = [];
var userInput = document.getElementById("user-text");
var scoreCounter = document.getElementById("score-count");
var lossCounter = document.getElementById("loss-count");
var points = 0
var losses = 0
var userKey = ""

// FUNCTIONS


//load word from array into hidden-band id
function loadLetter() {
	
	hiddenLetter = letters[Math.floor(Math.random() * letters.length)];
	// document.getElementById("hidden-letter").textContent = hiddenLetter
	console.log("hidden letter is " + hiddenLetter)
	// console.log(hiddenLetter.length)
};


// match letter count, 
function matchCase() {
	for (var i = 0; i < hiddenLetter.length; i++) {
		document.getElementById("user-text").innerHTML += "_ " 
	}
};

function scoreState () {
	
	if (userKey === hiddenLetter ) {
	
		document.getElementById("hidden-letter").textContent = hiddenLetter
		// document.getElementById("user-text").innerHTML = "_ " 
		// document.getElementById("hidden-letter").innerHTML = "_ " 

		points++
		scoreCounter.textContent = points
		console.log("  score is " + points)
	}
	else {
		losses++
		lossCounter.textContent = losses
		console.log("  you lost " + losses + " times")
	}
	loadLetter();
}

//hide letter function
function hideAnswer() {
	var result
	if (userInput === false) {

	}
}


// STARTUP CODE / Main Logic  / 

// This docuement receives input. Open Console to see */
document.onkeyup = function(event) {
     
     userInput.textContent = event.key;
     userKey = event.key

     console.log(event.key);
     // console.log("-----------");
scoreState();

 }
loadLetter();
matchCase();


 //innerHTML 
 


