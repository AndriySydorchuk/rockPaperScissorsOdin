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

function determineWinner() {
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (humanScore < computerScore) {
        console.log("Congratulations to the computer! You lost the game.");
    } else {
        console.log("Draw, after 5 rounds you have not found the stronger player.")
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    determineWinner();
}

//playGame();

const TOTAL_CHOICES = 3;

const body = document.querySelector('body');

let btns = [];

for (let i = 0; i < TOTAL_CHOICES; i++) {
    let btn = document.createElement('button');

    if (i===0) btn.textContent = 'Rock';
    if (i===1) btn.textContent = 'Paper';
    if (i===2) btn.textContent = 'Scissors';

    btn.style.padding = '32px';
    btn.style.margin = '16px';
    btn.style.cursor = 'pointer';

    btns.push(btn);
    body.appendChild(btn);
}


btns.forEach(btn => btn.addEventListener('click', event => console.log(btn.textContent)));