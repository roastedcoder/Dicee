let randomNumber1 = (Math.floor((Math.random()*100000))%6)+1;
let randomNumber2 = (Math.floor((Math.random()*1000))%6)+1;

let randomDiceImage1 = "res/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "res/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}