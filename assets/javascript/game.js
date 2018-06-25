

var names=["hello", "bye", "good"];

var rand = names[Math.floor(Math.random() * names.length)];
var wordHolder = "?";
console.log("guess the word");

console.log(rand.length);

var html2 = wordHolder.repeat(rand.length)


document.querySelector("#game2").innerHTML = html2;


document.onkeyup = function(event) {

   
    var userGuess = event.key;
  
    
for (var i=0; i<= rand.length; i++) {
    if (userGuess === rand.charAt(i)) {
        console.log(userGuess);
        
        
        var userGeussN = rand.indexOf(userGuess);
        console.log(userGeussN);
        
        var res = rand.match(userGuess);
        
        var replacer = html2.replace( html2.charAt(userGeussN),userGuess);
       
        html2 = replacer;
        document.querySelector("#game2").innerHTML = html2;
        
        var html = 
        "<p> You chose: " + res + "</p>";

        
         
document.querySelector("#game").innerHTML = html;


    }
    

}

};
