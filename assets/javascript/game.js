$(document).ready(); {

console.log("I'm linked!");

    var matchThis = 0;
    var currentScore = 0;
    var diamondValue = 0;
    var emeraldValue = 0;
    var goldValue = 0;
    var redstoneValue = 0;
    var wins = 0;
    var loses = 0;
    var mineSound = document.createElement("audio");
        mineSound.setAttribute("src", "assets/sounds/mine.ogg");

    $("#match-this").html(matchThis);
    $("#current-score").html(currentScore);
    $("#times-won").html(wins);
    $("#times-lost").html(loses);

    function createValues() {
        
        currentScore = 0;
        $("#current-score").html(currentScore);

        matchThis = Math.floor(Math.random() * 101) + 19;
        $("#match-this").html(matchThis);

        diamondValue = Math.floor(Math.random() * 11) + 1;

        emeraldValue = Math.floor(Math.random() * 11) + 1;

        goldValue = Math.floor(Math.random() * 11) + 1;

        redstoneValue = Math.floor(Math.random() * 11) + 1;

        checkValues();

        console.log("I'll run each time the values have to be reset.")
    }

    // This function makes sure that each gem has a different value.
    // Thanks to Charlie Acevedo for his help on this one!
    function checkValues() {
        if(diamondValue !== emeraldValue && diamondValue !== goldValue && diamondValue !== redstoneValue && emeraldValue !== goldValue && emeraldValue !== redstoneValue && goldValue !== redstoneValue) {
            clickCrystals();
        }
        else {
            createValues();
        }
    }

    function clickCrystals() {

        $("#diamond-ore").on("click", function() {
            currentScore += diamondValue;
            $("#current-score").html(currentScore);
            mineSound.play();
        });

        $("#emerald-ore").on("click", function() {
            currentScore += emeraldValue;
            $("#current-score").html(currentScore); 
            mineSound.play();
        });

        $("#gold-ore").on("click", function() {
            currentScore += goldValue;
            $("#current-score").html(currentScore);
            mineSound.play();
        });

        $("#redstone-ore").on("click", function() {
            currentScore += redstoneValue;
            $("#current-score").html(currentScore);
            mineSound.play();
        });

    }

    createValues()

}