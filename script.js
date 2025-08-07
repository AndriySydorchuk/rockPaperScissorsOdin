let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt().toLocaleLowerCase();
    return humanChoice.replace(humanChoice.slice(0,1), humanChoice.slice(0,1).toUpperCase());
}

function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    } else {
        // humanChoice is Rock
        if(humanChoice == "Rock" && computerChoice == "Paper") {
            result = "Computer won";
            console.log("You lose! Paper beats Rock");
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            result = "Human won";
            console.log("You won! Rock beats Scissors");
        }

        // humanChoice is Paper
        if(humanChoice == "Paper" && computerChoice == "Scissors") {
            result = "Computer won";
            console.log("You lose! Scissors beats Paper");
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            result = "Human won";
            console.log("You won! Paper beats Rock");
        }

        // humanChoice is Scissors
        if(humanChoice == "Scissors" && computerChoice == "Rock") {
            result = "Computer won";
            console.log("You lose! Rock beats Scissors");
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            result = "Human won";
            console.log("You won! Scissors beats Paper");
        }
    }

    updateScore(result);
    displayScore();
}

function updateScore(roundResult) {
    if (roundResult == "Human won") {
        humanScore++;
    } else if (roundResult == "Computer won") {
        computerScore++;
    }
}

function displayScore() {
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);