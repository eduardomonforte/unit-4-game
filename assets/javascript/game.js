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
    var hurtSound = document.createElement("audio");
        hurtSound.setAttribute("src", "assets/sounds/hurt.ogg");
    var levelupSound = document.createElement("audio");
        levelupSound.setAttribute("src", "assets/sounds/levelup.ogg");
    var explodeSound = document.createElement("audio");
        explodeSound.setAttribute("src", "assets/sounds/explode.ogg");
    var gameOver = false;

    $("#match-this").html(matchThis);
    $("#current-score").html(currentScore);
    $("#times-won").html(wins);
    $("#times-lost").html(loses);

    function createValues() {
        
        gameOver = false;

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
            currentScore = currentScore + diamondValue;
            $("#current-score").html(currentScore);
            mineSound.play();
            checkWin();
        });

        $("#emerald-ore").on("click", function() {
            currentScore = currentScore + emeraldValue;
            $("#current-score").html(currentScore); 
            mineSound.play();
            checkWin();
        });

        $("#gold-ore").on("click", function() {
            currentScore = currentScore + goldValue;
            $("#current-score").html(currentScore);
            mineSound.play();
            checkWin();
        });

        $("#redstone-ore").on("click", function() {
            currentScore = currentScore + redstoneValue;
            $("#current-score").html(currentScore);
            mineSound.play();
            checkWin();
        });

        $("#wither").on("click", function() {
            hurtSound.play();
        })

    }

    function checkWin() {

        if (currentScore === matchThis) {
            wins++;
            gameOver = true;
            levelupSound.play();
            $("#times-won").html(wins);
            restartGame();
        }

        else if (currentScore > matchThis) {
            loses++;
            gameOver = true;
            explodeSound.play();
            $("#times-lost").html(loses);
            restartGame();
        }

    }

    function restartGame(){

        if (gameOver = true) {
            if (currentScore != 0 && currentScore >= matchThis) {
                createValues();
            }
        }

        else {
            console.log("Nothing is done.")
        }
    }

    createValues()

}