let num;
let outcome;

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

console.log(outcome);