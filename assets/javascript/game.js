
var bands = [
"afi",  
"nofx",
"bigwig"]

var hiddenWord = ""
var guessCounter 
var scoreCounter
var userGuess 
var userString = [];

// FUNCTIONS
//load word from array into hidden-band id
function bandGuess() {
	
	hiddenWord = bands[Math.floor(Math.random() * bands.length)];
	document.getElementById("hidden-band").textContent = hiddenWord
	console.log(hiddenWord)
	console.log(hiddenWord.length)
};


// match letter count, 
function matchCase() {
	for (var i = 0; i < hiddenWord.length; i++) {
		document.getElementById("user-text").innerHTML += "_ " 
	}
};

//replace html with user string
// function findLetter(currentWord){
// 	for (var j = 0; j < currentWord.length; j++) {
// 		currentWord[j]
// 	}

// 	}
// }
//possible functions to use .toLowerCase()
	
// STARTUP CODE / Main Logic  / 
bandGuess();
matchCase();

/* This docuement receives input. 
 Open Console to see */

document.onkeyup = function(event) {
     var userInput = event.key;

     userString.push(userInput)
     console.log("User guess " + userInput);
     console.log("-----------");


 }

 //innerHTML 
 


