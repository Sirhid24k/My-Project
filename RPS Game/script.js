const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const computerScoreBoard = document.querySelector('.computer-score');
const playerScoreBoard = document.querySelector('.player-score');

let computerScore = 0;
let playerScore = 0;
let computer, player;

button.addEventListener('click', playGame);

// Functions
const computerWins = () =>
  `<div>Computer: ${computer}, Player: ${player}<br>Computer Wins!!! 🎉🎉</div>`;

const playerWins = () =>
  `<div>Computer: ${computer}, Player: ${player}<br>Player Wins!!! 🎉🎉</div>`;

const draw = () =>
  `<div>Computer: ${computer}, Player: ${player}<br>Its a draw</div>`;

function playGame(e) {
  e.preventDefault();
  const inputText = document.querySelector('.input-text');

  player = inputText.value;
  const randomNum = Math.floor(Math.random() * 3);
  const options = ['rock', 'scissors', 'paper'];
  computer = options[randomNum];

  // resetting adjacentHTML
  result.innerHTML = '';

  // Conditions
  if (computer === 'paper' && player === 'rock') {
    result.insertAdjacentHTML('beforeend', computerWins());
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }

  if (computer === 'paper' && player === 'paper')
    result.insertAdjacentHTML('beforeend', draw());

  if (computer === 'paper' && player === 'scissors') {
    result.insertAdjacentHTML('beforeend', playerWins());
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }

  ///////////////////////////////////////////////////////////
  if (computer === 'rock' && player === 'scissors') {
    result.insertAdjacentHTML('beforeend', computerWins());
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }

  if (computer === 'rock' && player === 'rock')
    result.insertAdjacentHTML('beforeend', draw());

  if (computer === 'rock' && player === 'paper') {
    result.insertAdjacentHTML('beforeend', playerWins());
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }

  ///////////////////////////////////////////////////////////
  if (computer === 'scissors' && player === 'paper') {
    result.insertAdjacentHTML('beforeend', computerWins());
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }

  if (computer === 'scissors' && player === 'scissors')
    result.insertAdjacentHTML('beforeend', draw());

  if (computer === 'scissors' && player === 'rock') {
    result.insertAdjacentHTML('beforeend', computerWins());
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }
  inputText.value = '';
}
