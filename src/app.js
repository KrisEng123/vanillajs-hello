/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log(cardNumber);

  document.getElementById("cardNumber").innerHTML = showNumber;
  document.getElementById("cardSuit").innerHTML = showSuit;
  document.getElementById("cardSuit2").innerHTML = showSuit;
};

//Logic to Number of Card
let cardNumber = Math.floor(Math.random() * 13) + 1;
let showNumber = "";

if (cardNumber == 11) {
  showNumber = "J";
} else if (cardNumber == 12) {
  showNumber = "Q";
} else if (cardNumber == 13) {
  showCNumber = "K";
} else {
  showNumber = cardNumber;
}

//Logic to Suit and Color of Card
let cardSuit = Math.floor(Math.random() * 4) + 1;
let showSuit = "";

if (cardSuit == 1) {
  showSuit = "♠";
} else if (cardSuit == 2) {
  showSuit = "♥";
  document.getElementById("cardNumber").style.color = "red";
  document.getElementById("cardSuit").style.color = "red";
  document.getElementById("cardSuit2").style.color = "red";
} else if (cardSuit == 3) {
  showSuit = "♣";
} else {
  showSuit = "♦";
  document.getElementById("cardNumber").style.color = "red";
  document.getElementById("cardSuit").style.color = "red";
  document.getElementById("cardSuit2").style.color = "red";
}
