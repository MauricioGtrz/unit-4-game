
// VARIABLES
// ==========================================================================

// variables used for the game
var randomNum;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var score = 0;
var wins = 0;
var loses = 0;

// FUNCTIONS
// ==============================================================================

// Function that creates a new number for each variable
function renderNumbers() {
        randomNum = Math.floor((Math.random() * 120) + 19);
        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);
  }

function resetScore() {
    score = 0;
}
  
// Function that updates the score and other variables
function updateScore() {
    $("#randomNum").html(randomNum);
    $("#wins").html("Wins: " + wins);
    $("#loses").html("Loses: " + loses);
    $("#score").html(score);
}

// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
renderNumbers();
updateScore();

    
// If they click oth the crystal, increase and update score.
$("#crystal1").on("click", function(){
    score = score + crystal1;
    updateScore();
    if (score == randomNum) {
        resetScore();
        $("#tracker").html("You Won!");
        wins++;
        renderNumbers();
        updateScore();
        // return and restart if user wins
        }
    
        // If wrong, update score
    if(score > randomNum) {
        resetScore();
        $("#tracker").html("You Lost!");
        loses++;
        renderNumbers();
        updateScore();
    }
});

$("#crystal2").on("click", function(){
    score = score + crystal2;
    updateScore();
    if (score == randomNum) {
        resetScore();
        $("#tracker").html("You Won!");
        wins++;
        renderNumbers();
        updateScore();
        // return and restart if user wins
        }
    
        // If wrong, update score
    if(score > randomNum) {
        resetScore();
        $("#tracker").html("You Lost!");
        loses++;
        renderNumbers();
        updateScore();
    }
});

$("#crystal3").on("click", function(){
    score = score + crystal3;
    updateScore();
    if (score == randomNum) {
        resetScore();
        $("#tracker").html("You Won!");
        wins++;
        renderNumbers();
        updateScore();
        // return and restart if user wins
        }
    
        // If wrong, update score
    if(score > randomNum) {
        resetScore();
        $("#tracker").html("You Lost!");
        loses++;
        renderNumbers();
        updateScore();
    }
});

$("#crystal4").on("click", function(){
    score = score + crystal4;
    updateScore();
    if (score == randomNum) {
        resetScore();
        $("#tracker").html("You Won!");
        wins++;
        renderNumbers();
        updateScore();
        // return and restart if user wins
        }
    
        // If wrong, update score
    if(score > randomNum) {
        resetScore();
        $("#tracker").html("You Lost!");
        loses++;
        renderNumbers();
        updateScore();
    }
});
