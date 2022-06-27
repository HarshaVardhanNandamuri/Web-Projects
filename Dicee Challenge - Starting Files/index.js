
var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSrc = "images/" + randomDiceImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSrc);



var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSrc2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
