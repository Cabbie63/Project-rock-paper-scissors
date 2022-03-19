let num;
let outcome;
let playerSelection;
let results;
let pcScore;
let playerScore;

function computerPlay(){

    num = Math.floor(Math.random() * 3);

    if(num == 2){
        outcome = "rock";
    } else if(num == 1){
        outcome = "paper";
    } else if(num == 0){
        outcome = "scissors";
    }

    return outcome;
}

function roundOne(playerSelection){
    computerPlay()

    if ((playerSelection.toLowerCase() == "rock" && outcome == "scissors") || (playerSelection.toLowerCase() == "paper" && outcome == "rock") || (playerSelection.toLowerCase() == "scissors" && outcome == "paper")){
        results = "You win! " + playerSelection + " beats " + outcome;
        playerScore++;
    } else if ((playerSelection.toLowerCase() == "rock" && outcome == "paper") || (playerSelection.toLowerCase() == "paper" && outcome == "scissors") || (playerSelection.toLowerCase() == "scissors" && outcome == "rock")){
        results = "You lose! " + playerSelection + " beats " + outcome;
        pcScore++;
    } else {
        results = "No one wins! " + playerSelection + " ties " + outcome;
    }
    
    return results;
}

function game(){
    pcScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Choose Rock Paper or Scissors!');
        roundOne(playerSelection);
     }
     
     if (playerScore > pcScore){
         return "You win! " + " Player score: " + playerScore +  ", PC score :" + pcScore;
     } else if(playerScore == pcScore) {
        return "It's a tie! "  + " Player score: " + playerScore +  ", PC score :" + pcScore; 
     } else {
         return "PC wins!"  + " Player score: " + playerScore +  ", PC score: " + pcScore;
     }
}