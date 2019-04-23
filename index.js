
var randomNumber1= (Math.random()*6)+1;
randomNumber1= Math.floor(randomNumber1);


// LEFT DICE
function leftDice(){
if(randomNumber1===6){
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");

}
else if(randomNumber1===5){
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");

}
else if(randomNumber1===4){
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");

}
else if (randomNumber1===3){
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");

}
else if(randomNumber1===2){
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");

}

else if(randomNumber1===1){
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");

}
return randomNumber1;
}
leftDice(randomNumber1);

var randomNumber2= (Math.random()*6)+1;
randomNumber2= Math.floor(randomNumber2);

//RIGHT Dicee
function rightDice(){
 if(randomNumber2===6){
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");

}
else if(randomNumber2===5){
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");

}
else if (randomNumber2===4){
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");

}
else if(randomNumber2===3){
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");

}

else if(randomNumber2===2){
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");

}
else if(randomNumber2===1){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");

}

return randomNumber2;
}
rightDice(randomNumber2);

// DRAW , player 1 , player 2 h1 change.
if (leftDice()>rightDice()){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(rightDice()>leftDice()){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}

else if (leftDice()===rightDice()){
  document.querySelector("h1").innerHTML="Draw!";
}
