let playerScore = 0;
let computerScore = 0;

function win() { 
    playerScore++;
    const winner = document.querySelector('#win-lose');
    winner.textContent = 'You win!';
}
function lose() { 
    computerScore++;
    const winner = document.querySelector('#win-lose');
    winner.textContent = 'You lose!';
}
function draw() {
    const winner = document.querySelector('#win-lose');
    winner.textContent = 'You tied!';
    
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = 'Same choice! You tied!';
}

function rockWins() { 
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = 'Rock beats scissors';
}
function paperWins() { 
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = 'Paper beats rock';
}
function scissorsWins() { 
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = 'Scissors beats paper';
}

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}


// Start of main game.
function play(playerSelection, computerSelection) {
    const choice = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    let result = '';
     
    // Takes player choice and compares it to computer selection.
    if (choice === 'rock') {
        return computerSelection === 'scissors' ? win() + ' ' + rockWins()  
        : computerSelection === 'paper' ? lose() + ' ' + paperWins()
        : draw(); 
    } else if (choice === 'paper') {
        return computerSelection === 'rock' ? win() + ' ' + paperWins()
        : computerSelection === 'scissors' ? lose() + ' ' + scissorsWins()
        : draw(); 
    } else if (choice === 'scissors') {
        return computerSelection === 'paper' ? win() + ' ' + scissorsWins()
        : computerSelection === 'rock' ? lose() + ' ' + rockWins()
        : draw(); 
    } else {
        return 'You didn\'t enter a valid option.'
    }  
}

// Used for testing event listeners
// let makeYellow = function(elem) {
//     elem.style.color = 'yellow';
// }

let updateScore = () => {
    const scoreUpdate = document.querySelector('#score');
    scoreUpdate.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`
}

let firstToFive = () => {
    if (playerScore >= 5) {
        const resultDiv = document.querySelector('#results');
        resultDiv.textContent = 'You won the match!';
        hideButtons();
        revealReset();

    } else if (computerScore >= 5) {
        const resultDiv = document.querySelector('#results');
        resultDiv.textContent = 'You lost the match!';
        hideButtons();
        revealReset();
    } 
}

let hideButtons = () => {
    const hider = document.querySelectorAll('.choiceButton');
    hider.forEach((button) => {
        button.classList.add('hide');
    });

    
}

let revealReset = () => {
    const revealResetButton = document.querySelector('#reset');
    revealResetButton.classList.remove('hide');
}

let clickReset = () => {
    const clickReset = document.querySelector('#reset');
    clickReset.addEventListener('click', () => {
        resetButton();
    });

}

let resetButton = () => {
    playerScore = 0;
    computerScore = 0;

    const scoreUpdate = document.querySelector('#score');
    scoreUpdate.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`
    
    const unhide = document.querySelectorAll('.choiceButton');
    unhide.forEach((button) => {
        button.classList.remove('hide');
    });

    const rehide = document.querySelector('#reset');
    rehide.classList.add('hide');
}

let rock = () => {
    const button = document.querySelector('#rockButton');
    button.addEventListener('click', () => {
    play('rock');
    updateScore();
    firstToFive();
    });
}
let paper = () => {
    const button = document.querySelector('#paperButton');
    button.addEventListener('click', () => {
    play('paper');
    updateScore();
    firstToFive();
    });
}
let scissors = () => {
    const button = document.querySelector('#scissorsButton');
    button.addEventListener('click', () => {
    play('scissors');
    updateScore();
    firstToFive();
    });
}


rock();
paper();
scissors();

clickReset();











