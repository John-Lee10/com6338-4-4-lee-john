var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var previousWordEl = document.getElementById ('previous-word')
var incorrectLettersEl = document.getElementById ('incorrect-letters')
var remainingGuessesEl = document.getElementById ('remaining-guesses')
var scoreEl = document.getElementById ('score')

var round1correctletters = ['b', 'a', 'n', 's']
var wins = 0
var losses = 0
var wordToGuess = ["_"+"_"+"_"+"_"+"_"+"_"+"_"]
var wordToGuessEl = document.querySelector('#word-to-guess')
wordToGuessEl.textContent = wordToGuess
remainingGuessesEl.textContent = 10
wins.textContent = 0
losses.textContent = 0

//function randomWord () {
  /////wordToGuess = [ Math.floor(Math.random(words.length))];
  /////wordToGuessEl.textContent = wordToGuess }
//}(couldn't get to work)


document.onkeyup = function(e) {
 if (round1correctletters.indexOf(e.key) == -1) {
  incorrectLettersEl.textContent = e.key + " " + incorrectLettersEl.textContent
  remainingGuessesEl.textContent = remainingGuessesEl.textContent-1
  }
 if (e.key = round1correctletters[0]) {
  wordToGuess[0]="b"
  wordToGuess=wordToGuessEl.textContent
 }
 if (e.key = round1correctletters[1]) {
  wordToGuess[1]="a"
  wordToGuess[3]="a"
  wordToGuess[5]="a"
  wordToGuess=wordToGuessEl.textContent
 }
 if (e.key = round1correctletters[2]) {
  wordToGuess[2]="n"
  wordToGuess[4]="n"
  wordToGuess=wordToGuessEl.textContent
 }
 if (e.key = round1correctletters[3]) {
  wordToGuess[6]= "s"
  wordToGuess=wordToGuessEl.textContent
 }
}
 
