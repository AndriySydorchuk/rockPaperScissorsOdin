let humanScore = 0;
let computerScore = 0;

console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Error. Computer didn't make a choice.";
    }

}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt().toLocaleLowerCase();
    return humanChoice.replace(humanChoice.slice(0,1), humanChoice.slice(0,1).toUpperCase());
}

console.log(getHumanChoice());