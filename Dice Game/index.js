function playGame() {

    //For player1
    var number = Math.random() * 6;
    var number1 = Math.floor(number + 1);
    var randomImage = "/Dice Game/images/dice" + number1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImage);

    //For player2
    var number2 = Math.random() * 6;
    var number3 = Math.floor(number2 + 1);
    var randomImage2 = "/Dice Game/images/dice" + number3 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomImage2);

    //Setting the game winner
    if (number1 > number3) {
        document.querySelector("h1").innerHTML = "Player 1 wins⛳"
    } else if (number1 < number3) {
        document.querySelector("h1").innerHTML = "Player 2 wins⛳"
    } else {
        document.querySelector("h1").innerHTML = "Draw 🙌"
    }

}