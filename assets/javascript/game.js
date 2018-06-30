
var words=["NATIVE AMERICANS", "STETSON HAT", "BANDANNA", "COWBOYS", "GUNFIGHTERS","REVOLVER","BOUNTY HUNTER", "SHERIFF", "WILD WEST", "BILLY THE KID", "BUFFALO BILL"];
var Hints=["people", "clothing","clothing", "people", "people", "thing", "person", "person", "event", "person", "person"];
var guessedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

var lives = 8;

var currentWordindex;

var RandWord;

var gamestart = false;

var gameEnd = false;

var wins = 0;

var answer = [];

var remainingLetters;

function resetGame() {
    lives = 8;
    guessedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    document.getElementById("letters").innerHTML = guessedLetters.join(" ");
    RandWord = words[Math.floor(Math.random() * words.length)];
    

    answer = [];
   
    for (var i = 0; i < RandWord.length; i++) {
        if (RandWord[i] == " ") {
        answer.push("&nbsp;");
        }    
        else {
        answer.push("_");
        }
    };
    document.getElementById("word").innerHTML = answer.join(" ");
    document.getElementById("hints").innerHTML = Hints[words.indexOf(RandWord)];
    document.getElementById("lives").innerHTML ="lives: "+lives;
    
    remainingLetters = RandWord.length;
    document.getElementById("winlose").innerHTML = "";
   
};
    
resetGame();
document.getElementById("wins").innerHTML ="wins: " + wins;
document.getElementById("letters").innerHTML = guessedLetters.join(" ");



function checkGuess(letter) {
    
    for (var j = 0; j < RandWord.length; j++) {
    if (RandWord[j] === letter) {
        answer[j] = letter;
        remainingLetters--;
    
        }
    }
    if (RandWord.match(letter) === null) {
        lives--;

        console.log(lives);
        }
        for (var i = 0; i < guessedLetters.length; i++){
        if (guessedLetters[i] == letter) {
       var Lnumber =  guessedLetters.indexOf(letter);
       guessedLetters[Lnumber] = guessedLetters[Lnumber].fontcolor("red");
        document.getElementById("letters").innerHTML = guessedLetters.join(" ");
        
    }   
        }
}
    
function checkWin() {
    if (answer.indexOf("_") === -1){
        document.getElementById("winlose").innerHTML = "you win press any key to start again";
        wins++;
        document.getElementById("wins").innerHTML ="wins: " + wins;
        gameEnd = true;
        }
};
    
    
  
function checkLoss() {
    if (lives <= 0) {
        document.getElementById("winlose").innerHTML = "you lose press key to start again";
        wins = 0;
        document.getElementById("wins").innerHTML ="wins: " + wins;
        gameEnd = true;
        }
};




document.onkeyup = function(event) {

   userGuess = event.key
    
    if(gameEnd) {
        resetGame();
        gameEnd = false;
    }

 
    else { if (event.keyCode >= 65 && event.keyCode <= 90) {
    
            checkGuess(userGuess.toUpperCase());
            checkWin()
            checkLoss()
        }
   
    }

    document.getElementById("word").innerHTML = answer.join(" ");
    document.getElementById("lives").innerHTML ="lives: "+lives;
};
    





























    
