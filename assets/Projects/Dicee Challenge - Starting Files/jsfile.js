var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage = "dice" + randomnumber1 + ".png" ; 
var setsource1 = "images/" + randomimage  ; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , setsource1);

var randomnumber2 = Math.floor(Math.random() * 6) +1;
var setsource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , setsource2) ; 

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !" ;
} 
    else if(randomnumber1 < randomnumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins !" ;
    }
