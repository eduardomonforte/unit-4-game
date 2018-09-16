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

        console.log("I should be running.")
    }

    // This functions makes sure that each gem has a different value.
    // Thanks to Charlie Acevedo for his help on this one!
    function checkValues() {
        if(diamondValue!==emeraldValue&&diamondValue!==goldValue&&diamondValue!==redstoneValue&&emeraldValue!==goldValue&&emeraldValue!==redstoneValue&&goldValue!==redstoneValue) {
            clickCrystals();
        }
        else {
            createValues();
        }
    }

    function clickCrystals() {

    }

    createValues()

}