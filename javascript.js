function coinFlip () {
    var userChoice = prompt("Do you choose HEADS or TAILS?").toUpperCase();
    var coinToss = Math.random() * 2;
        if (userChoice === "HEADS") {
            if (coinToss < 0.5) {
                var result = document.getElementById("results").innerHTML += ("You chose " + userChoice + ". The coin landed on heads. You Win!<br />");
            }
            else {
                var result = document.getElementById("results").innerHTML += ("You chose " + userChoice + ". The coin landed on tails. You Lose!<br />");
            }
        }
        if (userChoice === "TAILS") {
            if (coinToss < 0.5) {
                var result = document.getElementById("results").innerHTML += ("You chose " + userChoice + ". The coin landed on heads. You Lose!<br />");
            }
            else {
                var result = document.getElementById("results").innerHTML += ("You chose " + userChoice + ". The coin landed on tails. You Win!<br />");
            }
        }
    
}