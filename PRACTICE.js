var possibleWords =[
  "GRAND", "CANYON",
  "ROCKY","MOUNTAIN",
  "ZION","CAR","TRUCK"];
let randomNumber = possibleWords[Math.floor(Math.random()*possibleWords.length)];



const guesses= document.querySelector('.guesses');
const lastResult= document.querySelector('.lastResult');
const loworHi= document.querySelector('.loworHi');
const submit_guess = document.querySelector('.submit_guess');
const guessField= document.querySelector('.guessField');

var pause = false; // This var and setTimout function to not listen for keypress while game resets
var loseSound = new Audio("sounds/ahahah.mp3");
var winSound = new Audio("/sounds/clever.wav");
var championSound = new Audio("/sounds/crazysob.mp3");
let guessCount = 1;





function checkGuess(){
  let userGuess = (guessField.value);
  if (guessCount ===1){
    guesses.textContent = "previous guesses: ";
}
guesses.textContent +=userGuess + " ";

 if (userGuess.length == randomNumber.length){
   lastResult.textContent="congratulations!You got it right!";
   lastResult.style.backgroundColor = "green";
   lastResult.style.marginLeft = "70px";
     lastResult.style.color = "white";
     lastResult.style.fontWeight = "bold";
      winSound.play();


}
else{
  lastResult.textContent = " you are wrong,try again!";
  lastResult.style.backgroundColor = "#ff1a1a";
  lastResult.style.marginLeft = "70px";
    lastResult.style.color = "white";
    lastResult.style.fontWeight = "bold";
    loseSound.play();

if (userGuess < randomNumber){
  loworHi.textContent = "last guess was too low!";
}
else if (userGuess > randomNumber) {
  loworHi.textContent = "last guess was too high!";
}
}

guessCount++;
guessField.value = " ";
guessField.focus();
}
submit_guess.addEventListener('click', checkGuess);
guessField.focus();



// Wait for key press
document.onkeydown = function(event) {
  // Make sure key pressed is an alpha character
  if (isLetter(event.key) && pause === false) {
  checkForLetter(event.key.toUpperCase());

  }

  // Turn off blinking "...get started" message on keypress
  document.getElementById('para-text').className = 'noBlink';

};

// Check if key pressed is between A-Z or a-z
var isLetter = function(ch){
  return typeof ch === "string" && ch.length === 1
  && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};
// Check if letter is in word
function checkForLetter(letter) {
  var foundLetter = false;

  // Search string for letter
  for (var i=0; i < randomNumber.length; i++) {
    if (letter === randomNumber[i]) {
      guesses[i] = letter
      foundLetter = true;
}
}
}
