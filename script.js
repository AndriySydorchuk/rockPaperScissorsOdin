let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'Error. Computer didn\'t make a choice.';
    }
}

function getHumanChoice() {
    let humanChoice = prompt().toLocaleLowerCase();
    return humanChoice.replace(humanChoice.slice(0,1), humanChoice.slice(0,1).toUpperCase());
}

function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice == computerChoice) {
        resultsDiv.textContent = 'Tie!\n';
    } else {
        // humanChoice is Rock
        if(humanChoice == 'Rock' && computerChoice == 'Paper') {
            result = 'Computer won';
            resultsDiv.textContent = 'You lose! Paper beats Rock\n';
        } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
            result = 'Human won';
            resultsDiv.textContent = 'You won! Rock beats Scissors\n';
        }

        // humanChoice is Paper
        if(humanChoice == 'Paper' && computerChoice == 'Scissors') {
            result = 'Computer won';
            resultsDiv.textContent = 'You lose! Scissors beats Paper\n';
        } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
            result = 'Human won';
            resultsDiv.textContent = 'You won! Paper beats Rock\n';
        }

        // humanChoice is Scissors
        if(humanChoice == 'Scissors' && computerChoice == 'Rock') {
            result = 'Computer won';
            resultsDiv.textContent = 'You lose! Rock beats Scissors\n';
        } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
            result = 'Human won';
            resultsDiv.textContent = 'You won! Scissors beats Paper\n';
        }
    }

    updateScore(result);
    displayScore();
}

function updateScore(roundResult) {
    if (roundResult == 'Human won') {
        humanScore++;
    } else if (roundResult == 'Computer won') {
        computerScore++;
    }
}

function displayScore() {
    resultsDiv.textContent += `Human Score: ${humanScore} Computer Score: ${computerScore}`;
}

function determineWinner() {
    if (humanScore === 5) {
        resultsDiv.textContent += '\nCongratulations! You won the game.\nTo start a new game, simply select one of the three options again.';
    } else if (computerScore === 5) {
        resultsDiv.textContent += '\nCongratulations to the computer! You lost the game.\nTo start a new game, simply select one of the three options again.';
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

btns.forEach(btn => btn.addEventListener('click', event => {
    const computerChoice = getComputerChoice();
    const humanChoice = btn.textContent;
    playRound(humanChoice, computerChoice);
    determineWinner();
    resetScore();
}));

const resultsDiv = document.createElement('div');
resultsDiv.style.whiteSpace = 'pre-line';
resultsDiv.textContent += `Human Score: ${humanScore} Computer Score: ${computerScore}`;

body.appendChild(resultsDiv);

function resetScore() {
    if(humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }
}