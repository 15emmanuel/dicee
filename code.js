
 
    var randomNumbers1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImages = "dice" +  randomNumbers1 + ".png";
    
    var randomImageSoures = "" + randomDiceImages;
    
    document.querySelectorAll("img")[0].setAttribute("src" , randomImageSoures);
    
    
    var randomNumbers2 = Math.floor(Math.random() * 6) + 1;
    
    var randomDiceImages = "dice" +  randomNumbers2 + ".png";
    
    var randomImageSoures = "" + randomDiceImages;
    
    document.querySelectorAll("img")[1].setAttribute("src" , randomImageSoures);
 
       
if (  randomNumbers1 >  randomNumbers2 ) {
    document.querySelector("h1").innerHTML ="player1 win!"
}
else if ( randomNumbers2 > randomNumbers1 ) {
    document.querySelector("h1").innerHTML ="player2 win!"
}
else{
   document.querySelector("h1").innerHTML = "draw"
}
  

