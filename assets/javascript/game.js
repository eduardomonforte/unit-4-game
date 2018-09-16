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
    // These two variables make sure that the game works properly after the first round.
    // Thanks to Charlie Acevedo for his help implementing these two variables in the code!
    var gameOver = false;
    var roundWin = false;

    $("#match-this").html(matchThis);
    $("#current-score").html(currentScore);
    $("#times-won").html(wins);
    $("#times-lost").html(loses);

    function createValues() {
        
        roundWin = false;

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
            clickObjects();
        }
        else {
            createValues();
        }
    }

    function clickObjects() {

        if(!gameOver) {

        $("#diamond-ore").on("click", function() {
            mineSound.play();
            if (!roundWin) {
            currentScore += diamondValue;
            $("#current-score").html(currentScore);
            checkWin();
            }
        });

        $("#emerald-ore").on("click", function() {
            mineSound.play();
            if (!roundWin) {
            currentScore += emeraldValue;
            $("#current-score").html(currentScore);
            checkWin();
            }
        });

        $("#gold-ore").on("click", function() {
            mineSound.play();
            if (!roundWin) {
            currentScore += goldValue;
            $("#current-score").html(currentScore);
            checkWin();
            }
        });

        $("#redstone-ore").on("click", function() {
            mineSound.play();
            if (!roundWin) {
            currentScore += redstoneValue;
            $("#current-score").html(currentScore);
            checkWin();
            }
        });

        $("#wither").on("click", function() {
            hurtSound.play();
        })

        }

    }

    function checkWin() {

        if (currentScore === matchThis) {
            wins++;
            gameOver = true;
            roundWin = true;
            levelupSound.play();
            $("#times-won").html(wins);
            createValues();
        }

        else if (currentScore > matchThis) {
            loses++;
            gameOver = true;
            roundWin = true;
            explodeSound.play();
            $("#times-lost").html(loses);
            createValues();
        }

    }

    createValues()

}